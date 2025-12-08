import { ObjectId } from 'mongodb';
import { getCollection, create } from './db'
import type { Project, SocialLink, ForkLine, ProjectInfo } from '@/types/project'

// Re-export types for backward compatibility
export type { Project, SocialLink, ForkLine, ProjectInfo } from '@/types/project'

// Internal model types (not exported)
interface ForkLineModel {
    from: ObjectId; // Source project ID
    via: ObjectId[]; // Array of issue IDs
    to: ObjectId; // Target project ID
}

interface ProjectModel {
    _id?: ObjectId;
    uri: string;
    forkLines: ForkLineModel[];
    socialLinks: SocialLink[];
    createdAt?: Date;
    lastCommitId?: string;
    lastCommitUpdateTime?: Date;
    license?: string;
    totalCommits?: number;
}

// Serialization functions
function projectModelToProject(model: ProjectModel | null): Project | null {
    if (!model) return null
    return {
        _id: model._id?.toString(),
        uri: model.uri,
        forkLines: model.forkLines.map(fl => ({
            from: fl.from.toString(),
            via: fl.via.map(v => v.toString()),
            to: fl.to.toString(),
        })),
        socialLinks: model.socialLinks,
        createdAt: model.createdAt ? Math.floor(model.createdAt.getTime() / 1000) : undefined,
        lastCommitId: model.lastCommitId,
        lastCommitUpdateTime: model.lastCommitUpdateTime ? Math.floor(model.lastCommitUpdateTime.getTime() / 1000) : undefined,
        license: model.license,
        totalCommits: model.totalCommits,
    }
}

function projectToProjectModel(project: Project): ProjectModel {
    return {
        _id: project._id ? new ObjectId(project._id) : undefined,
        uri: project.uri,
        forkLines: project.forkLines.map(fl => ({
            from: new ObjectId(fl.from),
            via: fl.via.map(v => new ObjectId(v)),
            to: new ObjectId(fl.to),
        })),
        socialLinks: project.socialLinks,
        createdAt: project.createdAt ? new Date(project.createdAt * 1000) : undefined,
        lastCommitId: project.lastCommitId,
        lastCommitUpdateTime: project.lastCommitUpdateTime ? new Date(project.lastCommitUpdateTime * 1000) : undefined,
        license: project.license,
        totalCommits: project.totalCommits,
    }
}

/**
 * Get project by ID
 */
export async function getProjectById(id: string | ObjectId): Promise<Project | null> {
    try {
        const collection = await getCollection<ProjectModel>('projects')
        const objectId = typeof id === 'string' ? new ObjectId(id) : id
        const result = await collection.findOne({ _id: objectId })
        return projectModelToProject(result)
    } catch (error) {
        console.error('Error getting project by id:', error)
        return null
    }
}

/**
 * Get project by URI
 */
export async function getProjectByUri(uri: string): Promise<Project | null> {
    try {
        const collection = await getCollection<ProjectModel>('projects')
        const result = await collection.findOne({ uri })
        return projectModelToProject(result)
    } catch (error) {
        console.error('Error getting project by uri:', error)
        return null
    }
}

/**
 * Create a new project
 */
export async function createProject(project: Project): Promise<boolean> {
    try {
        const projectModel = projectToProjectModel(project)
        return await create<ProjectModel>('projects', projectModel)
    } catch (error) {
        console.error('Error creating project:', error)
        return false
    }
}

/**
 * Get or create a project - returns the project ID as string
 */
export async function getOrCreateProject(projectData: Omit<Project, '_id'>): Promise<string> {
    try {
        const collection = await getCollection<ProjectModel>('projects')

        // Try to find existing project by URI
        const existing = await collection.findOne({ uri: projectData.uri })
        if (existing && existing._id) {
            return existing._id.toString()
        }

        // Create new project
        const projectModel = projectToProjectModel(projectData as Project)
        const result = await collection.insertOne(projectModel as any)
        if (result.insertedId) {
            return result.insertedId.toString()
        }

        throw new Error('Failed to create project')
    } catch (error) {
        console.error('Error getting or creating project:', error)
        throw error
    }
}