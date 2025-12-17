import { ObjectId } from 'mongodb';
import { getCollection } from './db_DOR0BHwy.mjs';

function projectModelToProject(model) {
  if (!model) return null;
  return {
    _id: model._id?.toString(),
    uri: model.uri,
    forkLines: model.forkLines.map((fl) => ({
      from: fl.from.toString(),
      via: fl.via.map((v) => v.toString()),
      to: fl.to.toString()
    })),
    socialLinks: model.socialLinks,
    createdAt: model.createdAt ? Math.floor(model.createdAt.getTime() / 1e3) : void 0,
    lastCommitId: model.lastCommitId,
    lastCommitUpdateTime: model.lastCommitUpdateTime ? Math.floor(model.lastCommitUpdateTime.getTime() / 1e3) : void 0,
    license: model.license,
    totalCommits: model.totalCommits
  };
}
function projectToProjectModel(project) {
  return {
    _id: project._id ? new ObjectId(project._id) : void 0,
    uri: project.uri,
    forkLines: project.forkLines.map((fl) => ({
      from: new ObjectId(fl.from),
      via: fl.via.map((v) => new ObjectId(v)),
      to: new ObjectId(fl.to)
    })),
    socialLinks: project.socialLinks,
    createdAt: project.createdAt ? new Date(project.createdAt * 1e3) : void 0,
    lastCommitId: project.lastCommitId,
    lastCommitUpdateTime: void 0,
    license: project.license,
    totalCommits: project.totalCommits
  };
}
async function getProjectById(id) {
  try {
    const collection = await getCollection("projects");
    const objectId = typeof id === "string" ? new ObjectId(id) : id;
    const result = await collection.findOne({ _id: objectId });
    return projectModelToProject(result);
  } catch (error) {
    console.error("Error getting project by id:", error);
    return null;
  }
}
async function getOrCreateProject(projectData) {
  try {
    const collection = await getCollection("projects");
    const existing = await collection.findOne({ uri: projectData.uri });
    if (existing && existing._id) {
      return existing._id.toString();
    }
    const projectModel = projectToProjectModel(projectData);
    const result = await collection.insertOne(projectModel);
    if (result.insertedId) {
      return result.insertedId.toString();
    }
    throw new Error("Failed to create project");
  } catch (error) {
    console.error("Error getting or creating project:", error);
    throw error;
  }
}

export { getProjectById as a, getOrCreateProject as g };
