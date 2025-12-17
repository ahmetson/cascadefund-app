import { ObjectId } from 'mongodb';
import { getCollection } from './db_DOR0BHwy.mjs';
import { b as getAllGalaxies } from './galaxy_D015Gxde.mjs';
import { g as getIssueById } from './issue_Dv6LAPam.mjs';

async function getAllStarStats() {
  try {
    const galaxies = await getAllGalaxies();
    const totalGalaxies = galaxies.length;
    const totalStars = galaxies.reduce((sum, galaxy) => sum + (galaxy.stars || 0), 0);
    const totalSunshines = galaxies.reduce((sum, galaxy) => sum + (galaxy.sunshines || 0), 0);
    const usersCollection = await getCollection("users");
    const totalUsers = await usersCollection.countDocuments({});
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
  const { getUserById } = await import('./user_Dmvk2cKy.mjs');
  const user = await getUserById(userId);
  const base = {
    galaxyId,
    userId,
    nickname: data?.nickname || user?.nickname || userId,
    src: data?.src ?? user?.src,
    alt: data?.alt ?? user?.alt,
    stars: data?.stars ?? user?.stars,
    sunshines: data?.sunshines ?? user?.sunshines,
    role: data?.role ?? user?.role,
    uri: data?.uri ?? user?.uri,
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
    const { getCollection: getIssueCollection } = await import('./db_DOR0BHwy.mjs');
    const collection = await getIssueCollection("issues");
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

export { getGalaxySpace as a, getAllStarStats as b, createSpaceTracer as c, checkSolarForgeByIssue as d, updateIssueStars as e, upsertSpaceUserStar as f, getUserStar as g, updateUserStarPosition as u };
