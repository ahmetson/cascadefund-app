import { ObjectId } from 'mongodb';
import { g as getCollection, c as create } from './db_OZ8_cRuI.mjs';
import { b as getAllGalaxies } from './galaxy_CZ-N3p2Y.mjs';
import { g as getIssueById } from './issue_JOyCgfs2.mjs';
import { g as getAuthUserById } from './auth_BUazfeO9.mjs';
import { g as getStarById } from './star_BqlfetDB.mjs';

async function getAllStarStats() {
  try {
    const galaxies = await getAllGalaxies();
    const totalGalaxies = galaxies.length;
    const totalStars = galaxies.reduce((sum, galaxy) => sum + (galaxy.stars || 0), 0);
    const totalSunshines = galaxies.reduce((sum, galaxy) => sum + (galaxy.sunshines || 0), 0);
    const starsCollection = await getCollection("stars");
    const totalUsers = await starsCollection.countDocuments({});
    return {
      totalGalaxies,
      totalStars,
      totalUsers,
      totalSunshines
    };
  } catch (error) {
    console.error("Error getting all star stats:", error);
    return {
      totalGalaxies: 0,
      totalStars: 0,
      totalUsers: 0,
      totalSunshines: 0
    };
  }
}
async function getSpaceCollection() {
  return getCollection("space");
}
function userStarModelToUserStar(model) {
  return {
    ...model,
    _id: model._id?.toString()
  };
}
async function getGalaxySpace(galaxyId) {
  const collection = await getSpaceCollection();
  const stars = await collection.find({ galaxyId }).toArray();
  return stars.map(userStarModelToUserStar);
}
async function getUserStar(galaxyId, userId) {
  const collection = await getSpaceCollection();
  const existing = await collection.findOne({ galaxyId, userId });
  if (existing) {
    return userStarModelToUserStar(existing);
  }
  return null;
}
async function upsertSpaceUserStar(params) {
  const { galaxyId, userId, data } = params;
  const collection = await getSpaceCollection();
  const existing = await collection.findOne({ galaxyId, userId });
  const now = Math.floor(Date.now() / 1e3);
  if (existing?._id) {
    const { _id: _ignore, ...restData } = data || {};
    const updated = {
      ...existing,
      ...restData,
      _id: existing._id,
      updatedTime: now
    };
    await collection.updateOne({ _id: existing._id }, { $set: { ...restData, updatedTime: now } });
    return userStarModelToUserStar(updated);
  }
  const star = await getStarById(userId);
  let nickname = data?.nickname || userId;
  let src = data?.src;
  if (star?.userId) {
    const authUser = await getAuthUserById(star.userId);
    if (authUser) {
      nickname = data?.nickname || authUser.name || authUser.username || authUser.email?.split("@")[0] || userId;
      src = data?.src ?? authUser.image;
    }
  }
  const base = {
    galaxyId,
    userId,
    nickname,
    src,
    alt: data?.alt,
    stars: data?.stars ?? star?.stars,
    sunshines: data?.sunshines ?? star?.sunshines,
    uri: data?.uri,
    createdTime: now,
    updatedTime: now
    // x and y intentionally omitted on first create if not provided
  };
  const result = await collection.insertOne(base);
  return userStarModelToUserStar({ ...base, _id: result.insertedId });
}
async function updateUserStarPosition(params) {
  const { galaxyId, userId, x, y } = params;
  const collection = await getSpaceCollection();
  const result = await collection.updateOne(
    { galaxyId, userId },
    { $set: { x, y, updatedTime: Math.floor(Date.now() / 1e3) } }
  );
  return result.matchedCount > 0;
}
async function getSpaceTracerCollection() {
  return getCollection("space-tracer");
}
async function createSpaceTracer(params) {
  try {
    const { galaxyId, userId, x, y, txId } = params;
    const collection = await getSpaceTracerCollection();
    const now = Math.floor(Date.now() / 1e3);
    const spaceTracer = {
      galaxyId,
      userId,
      x,
      y,
      txId,
      createdTime: now
    };
    const result = await collection.insertOne(spaceTracer);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error creating space tracer:", error);
    throw error;
  }
}
async function checkSolarForgeByIssue(issueId) {
  try {
    const issue = await getIssueById(issueId);
    return issue !== null && issue.solarForgeTxid !== void 0 && issue.solarForgeTxid !== null;
  } catch (error) {
    console.error("Error checking solar forge by issue:", error);
    return false;
  }
}
async function updateIssueStars(issueId, stars, sunshines) {
  try {
    const collection = await getCollection("issues");
    const objectId = typeof issueId === "string" ? new ObjectId(issueId) : issueId;
    const issue = await collection.findOne({ _id: objectId });
    if (!issue) {
      return false;
    }
    const updateOps = {
      $set: {
        sunshines: 0
      }
    };
    if (issue.stars === void 0 || issue.stars === null) {
      updateOps.$set.stars = stars;
    } else {
      updateOps.$inc = {
        stars
      };
    }
    const result = await collection.updateOne(
      { _id: objectId },
      updateOps
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating issue stars:", error);
    return false;
  }
}
async function getGalaxyPositionTracerCollection() {
  return getCollection("galaxy-position-tracer");
}
async function createGalaxyPositionTracer(params) {
  try {
    const { galaxyId, x, y, txId, order } = params;
    const collection = await getGalaxyPositionTracerCollection();
    const now = Math.floor(Date.now() / 1e3);
    const tracer = {
      galaxyId,
      x,
      y,
      txId,
      order,
      createdTime: now
    };
    const result = await collection.insertOne(tracer);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error creating galaxy position tracer:", error);
    throw error;
  }
}
async function getGalaxyPositionHistory(galaxyId) {
  try {
    const collection = await getGalaxyPositionTracerCollection();
    const tracers = await collection.find({ galaxyId }).sort({ order: -1 }).toArray();
    return tracers.map((tracer) => ({
      ...tracer,
      _id: tracer._id?.toString()
    }));
  } catch (error) {
    console.error("Error getting galaxy position history:", error);
    return [];
  }
}

function sbomModelToSBOM(model) {
  if (!model) return null;
  return {
    _id: model._id?.toString(),
    projectId: model.projectId.toString(),
    gitUrl: model.gitUrl,
    provider: model.provider,
    sbomData: model.sbomData,
    dependencies: model.dependencies,
    source: model.source,
    completeness: model.completeness,
    detectedAt: model.detectedAt
  };
}
function sbomToSBOMModel(sbom) {
  return {
    _id: sbom._id ? new ObjectId(sbom._id) : void 0,
    projectId: new ObjectId(sbom.projectId),
    gitUrl: sbom.gitUrl,
    provider: sbom.provider,
    sbomData: sbom.sbomData,
    dependencies: sbom.dependencies,
    source: sbom.source,
    completeness: sbom.completeness,
    detectedAt: sbom.detectedAt
  };
}
async function createSBOM(sbom) {
  try {
    const sbomModel = sbomToSBOMModel(sbom);
    return await create("sboms", sbomModel);
  } catch (error) {
    console.error("Error creating SBOM:", error);
    return false;
  }
}
async function getSBOMByProjectId(projectId) {
  try {
    const collection = await getCollection("sboms");
    const objectId = new ObjectId(projectId);
    const result = await collection.findOne({ projectId: objectId });
    return sbomModelToSBOM(result);
  } catch (error) {
    console.error("Error getting SBOM by project ID:", error);
    return null;
  }
}

export { getGalaxySpace as a, getAllStarStats as b, createSpaceTracer as c, checkSolarForgeByIssue as d, updateIssueStars as e, upsertSpaceUserStar as f, getUserStar as g, createSBOM as h, getGalaxyPositionHistory as i, createGalaxyPositionTracer as j, getSBOMByProjectId as k, updateUserStarPosition as u };
