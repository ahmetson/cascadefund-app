import { ObjectId } from 'mongodb';
import { g as getCollection } from './db_OZ8_cRuI.mjs';

function projectModelToProject(model) {
  if (!model) return null;
  return {
    _id: model._id?.toString(),
    forkLines: model.forkLines.map((fl) => ({
      from: fl.from.toString(),
      via: fl.via.map((v) => v.toString()),
      to: fl.to.toString()
    })),
    socialLinks: model.socialLinks,
    createdAt: model.createdAt,
    lastCommitId: model.lastCommitId,
    lastCommitUpdateTime: model.lastCommitUpdateTime,
    license: model.license,
    totalCommits: model.totalCommits,
    branchName: model.branchName,
    readmeContent: model.readmeContent,
    readmeUpdateTime: model.readmeUpdateTime,
    readmeUrl: model.readmeUrl
  };
}
function projectToProjectModel(project) {
  return {
    _id: project._id ? new ObjectId(project._id) : void 0,
    forkLines: project.forkLines.map((fl) => ({
      from: new ObjectId(fl.from),
      via: fl.via.map((v) => new ObjectId(v)),
      to: new ObjectId(fl.to)
    })),
    socialLinks: project.socialLinks,
    createdAt: project.createdAt,
    lastCommitId: project.lastCommitId,
    lastCommitUpdateTime: project.lastCommitUpdateTime,
    license: project.license,
    totalCommits: project.totalCommits,
    branchName: project.branchName,
    readmeContent: project.readmeContent,
    readmeUpdateTime: project.readmeUpdateTime,
    readmeUrl: project.readmeUrl
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
function normalizeGitUrlForComparison(gitUrl) {
  let normalizedUrl = gitUrl.trim();
  if (normalizedUrl.endsWith(".git")) {
    normalizedUrl = normalizedUrl.slice(0, -4);
  }
  if (normalizedUrl.startsWith("git@")) {
    normalizedUrl = normalizedUrl.replace("git@", "https://").replace(":", "/");
  }
  normalizedUrl = normalizedUrl.replace(/\/$/, "");
  return normalizedUrl;
}
async function checkDuplicateGitUrl(gitUrl) {
  try {
    const collection = await getCollection("projects");
    const normalizedUrl = normalizeGitUrlForComparison(gitUrl);
    const exactMatch = await collection.findOne({
      "socialLinks.uri": normalizedUrl
    });
    if (exactMatch) return true;
    const caseInsensitiveMatch = await collection.findOne({
      "socialLinks.uri": { $regex: `^${normalizedUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, $options: "i" }
    });
    return caseInsensitiveMatch !== null;
  } catch (error) {
    console.error("Error checking duplicate Git URL:", error);
    return false;
  }
}
async function getOrCreateProject(project) {
  try {
    const collection = await getCollection("projects");
    const gitLink = project.socialLinks.find((link) => link.type === "github" || link.type === "gitlab");
    if (gitLink) {
      const normalizedUrl = normalizeGitUrlForComparison(gitLink.uri);
      let existing = await collection.findOne({
        "socialLinks.uri": normalizedUrl
      });
      if (!existing) {
        existing = await collection.findOne({
          "socialLinks.uri": { $regex: `^${normalizedUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, $options: "i" }
        });
      }
      if (!existing) {
        existing = await collection.findOne({
          "socialLinks.uri": gitLink.uri
        });
      }
      if (existing && existing._id) {
        return existing._id.toString();
      }
    }
    const projectModel = projectToProjectModel(project);
    const result = await collection.insertOne(projectModel);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error getting or creating project:", error);
    throw error;
  }
}

export { getOrCreateProject as a, checkDuplicateGitUrl as c, getProjectById as g };
