import { ObjectId } from 'mongodb';
import { getCollection, create } from './db_CfiMa5UD.mjs';
import { P as PATCH_KEYWORD } from './patch_Cnq5U_SF.mjs';

function issueStatServerToIssueStat(stat) {
  if (!stat) return void 0;
  return {
    type: stat.type,
    hint: typeof stat.hint === "string" ? stat.hint : String(stat.hint),
    filled: stat.filled,
    children: typeof stat.children === "string" || typeof stat.children === "number" ? stat.children : String(stat.children)
  };
}
function issueStatToIssueStatServer(stat) {
  if (!stat) return void 0;
  return {
    type: stat.type,
    hint: stat.hint,
    filled: stat.filled,
    children: stat.children
  };
}
function issueUserServerToIssueUser(user) {
  return {
    username: user.username,
    starshineAmount: user.starshineAmount,
    transactionDate: Math.floor(user.transactionDate.getTime() / 1e3)
  };
}
function issueUserToIssueUserServer(user) {
  return {
    username: user.username,
    starshineAmount: user.starshineAmount,
    transactionDate: new Date(user.transactionDate * 1e3)
  };
}
function issueModelToIssue(model) {
  if (!model) return null;
  return {
    _id: model._id?.toString(),
    galaxy: model.galaxy.toString(),
    uri: model.uri,
    title: model.title,
    description: model.description,
    tags: model.tags,
    maintainer: model.maintainer.toString(),
    listHistory: model.listHistory,
    stats: model.stats ? Object.fromEntries(
      Object.entries(model.stats).map(([key, value]) => [
        key,
        issueStatServerToIssueStat(value)
      ]).filter(([_, value]) => value !== void 0)
    ) : void 0,
    createdTime: model.createdTime ? Math.floor(model.createdTime.getTime() / 1e3) : void 0,
    sunshines: model.sunshines,
    stars: model.stars,
    users: model.users.map(issueUserServerToIssueUser),
    author: model.author?.toString(),
    contributor: model.contributor?.toString(),
    solarForgeTxid: model.solarForgeTxid
  };
}
function issueToIssueModel(issue) {
  return {
    _id: issue._id ? new ObjectId(issue._id) : void 0,
    galaxy: new ObjectId(issue.galaxy),
    uri: issue.uri,
    title: issue.title,
    description: issue.description,
    tags: issue.tags,
    maintainer: new ObjectId(issue.maintainer),
    listHistory: issue.listHistory,
    stats: issue.stats ? Object.fromEntries(
      Object.entries(issue.stats).map(([key, value]) => [
        key,
        issueStatToIssueStatServer(value)
      ]).filter(([_, value]) => value !== void 0)
    ) : void 0,
    createdTime: issue.createdTime ? new Date(issue.createdTime * 1e3) : void 0,
    sunshines: issue.sunshines,
    stars: issue.stars,
    users: issue.users.map(issueUserToIssueUserServer),
    author: issue.author ? new ObjectId(issue.author) : void 0,
    contributor: issue.contributor ? new ObjectId(issue.contributor) : void 0,
    solarForgeTxid: issue.solarForgeTxid
  };
}
async function getIssuesByGalaxy(galaxyId, tabKey) {
  try {
    const collection = await getCollection("issues");
    const objectId = typeof galaxyId === "string" ? new ObjectId(galaxyId) : galaxyId;
    const query = { galaxy: objectId };
    if (tabKey) {
      query.listHistory = { $in: [tabKey] };
    }
    const result = await collection.find(query).toArray();
    return result.map(issueModelToIssue).filter((i) => i !== null);
  } catch (error) {
    console.error("Error getting issues by galaxy:", error);
    return [];
  }
}
async function getIssueById(id) {
  try {
    const collection = await getCollection("issues");
    const objectId = typeof id === "string" ? new ObjectId(id) : id;
    const result = await collection.findOne({ _id: objectId });
    return issueModelToIssue(result);
  } catch (error) {
    console.error("Error getting issue by id:", error);
    return null;
  }
}
async function createIssue(issue) {
  try {
    const issueModel = issueToIssueModel(issue);
    return await create("issues", issueModel);
  } catch (error) {
    console.error("Error creating issue:", error);
    return false;
  }
}
async function getShiningIssues(galaxyId) {
  try {
    const collection = await getCollection("issues");
    const objectId = typeof galaxyId === "string" ? new ObjectId(galaxyId) : galaxyId;
    const tabKeys = ["interesting", "boring", "closed"];
    const result = await collection.find({
      galaxy: objectId,
      sunshines: { $gt: 0 },
      $or: [
        { listHistory: { $exists: false } },
        { listHistory: { $size: 0 } },
        { listHistory: { $nin: tabKeys } }
      ]
    }).toArray();
    return result.map(issueModelToIssue).filter((i) => i !== null);
  } catch (error) {
    console.error("Error getting shining issues:", error);
    return [];
  }
}
async function getPublicBacklogIssues(galaxyId) {
  try {
    const collection = await getCollection("issues");
    const objectId = typeof galaxyId === "string" ? new ObjectId(galaxyId) : galaxyId;
    const tabKeys = ["interesting", "boring", "closed"];
    const result = await collection.find({
      galaxy: objectId,
      sunshines: 0,
      $or: [
        { listHistory: { $exists: false } },
        { listHistory: { $size: 0 } },
        { listHistory: { $nin: tabKeys } }
      ]
    }).toArray();
    return result.map(issueModelToIssue).filter((i) => i !== null);
  } catch (error) {
    console.error("Error getting public backlog issues:", error);
    return [];
  }
}
async function updateIssueSunshines(issueId, userId, username, sunshinesToAdd) {
  try {
    const collection = await getCollection("issues");
    const issueObjectId = typeof issueId === "string" ? new ObjectId(issueId) : issueId;
    const userObjectId = typeof userId === "string" ? new ObjectId(userId) : userId;
    const issue = await collection.findOne({ _id: issueObjectId });
    if (!issue) {
      return false;
    }
    const existingUserIndex = issue.users.findIndex(
      (u) => u.username === username
    );
    const newSunshines = issue.sunshines + sunshinesToAdd;
    const transactionDate = /* @__PURE__ */ new Date();
    if (existingUserIndex >= 0) {
      const updatedUsers = [...issue.users];
      updatedUsers[existingUserIndex] = {
        username,
        starshineAmount: updatedUsers[existingUserIndex].starshineAmount + sunshinesToAdd,
        transactionDate
      };
      const result = await collection.updateOne(
        { _id: issueObjectId },
        {
          $set: {
            sunshines: newSunshines,
            users: updatedUsers
          }
        }
      );
      return result.modifiedCount > 0;
    } else {
      const newUser = {
        username,
        starshineAmount: sunshinesToAdd,
        transactionDate
      };
      const result = await collection.updateOne(
        { _id: issueObjectId },
        {
          $set: { sunshines: newSunshines },
          $push: { users: newUser }
        }
      );
      return result.modifiedCount > 0;
    }
  } catch (error) {
    console.error("Error updating issue sunshines:", error);
    return false;
  }
}
async function setIssueContributor(issueId, userId, username) {
  try {
    const collection = await getCollection("issues");
    const issueObjectId = typeof issueId === "string" ? new ObjectId(issueId) : issueId;
    const userObjectId = typeof userId === "string" ? new ObjectId(userId) : userId;
    const issue = await collection.findOne({ _id: issueObjectId });
    if (!issue) {
      return false;
    }
    const existingUserIndex = issue.users.findIndex(
      (u) => u.username === username
    );
    const updateOps = {
      $set: {
        contributor: userObjectId
      }
    };
    if (existingUserIndex < 0) {
      const newUser = {
        username,
        starshineAmount: 0,
        transactionDate: /* @__PURE__ */ new Date()
      };
      updateOps.$push = { users: newUser };
    }
    const result = await collection.updateOne(
      { _id: issueObjectId },
      updateOps
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error setting issue contributor:", error);
    return false;
  }
}
async function unsetIssueContributor(issueId) {
  try {
    const collection = await getCollection("issues");
    const issueObjectId = typeof issueId === "string" ? new ObjectId(issueId) : issueId;
    const result = await collection.updateOne(
      { _id: issueObjectId },
      {
        $unset: {
          contributor: ""
        }
      }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error unsetting issue contributor:", error);
    return false;
  }
}
async function updateIssue(issueId, updates) {
  try {
    const collection = await getCollection("issues");
    const issueObjectId = typeof issueId === "string" ? new ObjectId(issueId) : issueId;
    const updateOps = {};
    if (updates.listHistory !== void 0) {
      updateOps.listHistory = updates.listHistory;
    }
    if (Object.keys(updateOps).length === 0) {
      return false;
    }
    const result = await collection.updateOne(
      { _id: issueObjectId },
      { $set: updateOps }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating issue:", error);
    return false;
  }
}
async function patchIssue(issueId) {
  try {
    const collection = await getCollection("issues");
    const issueObjectId = typeof issueId === "string" ? new ObjectId(issueId) : issueId;
    const issue = await collection.findOne({ _id: issueObjectId });
    if (!issue) {
      return false;
    }
    const currentListHistory = issue.listHistory || [];
    const updatedListHistory = currentListHistory.includes(PATCH_KEYWORD) ? currentListHistory : [...currentListHistory, PATCH_KEYWORD];
    const updateOps = {
      listHistory: updatedListHistory
    };
    const result = await collection.updateOne(
      { _id: issueObjectId },
      { $set: updateOps }
    );
    return result.acknowledged;
  } catch (error) {
    console.error("Error patching issue:", error);
    return false;
  }
}
async function unpatchIssue(issueId) {
  try {
    const collection = await getCollection("issues");
    const issueObjectId = typeof issueId === "string" ? new ObjectId(issueId) : issueId;
    const issue = await collection.findOne({ _id: issueObjectId });
    if (!issue) {
      return false;
    }
    const currentListHistory = issue.listHistory || [];
    const updatedListHistory = currentListHistory.filter((item) => item !== "patcher");
    const updateOps = {
      listHistory: updatedListHistory
    };
    const result = await collection.updateOne(
      { _id: issueObjectId },
      { $set: updateOps }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error unpatching issue:", error);
    return false;
  }
}
async function updateIssueSolarForgeTxid(issueId, txHash) {
  try {
    const collection = await getCollection("issues");
    const issueObjectId = typeof issueId === "string" ? new ObjectId(issueId) : issueId;
    const result = await collection.updateOne(
      { _id: issueObjectId },
      { $set: { solarForgeTxid: txHash } }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating issue solarForgeTxid:", error);
    return false;
  }
}

export { updateIssue as a, unpatchIssue as b, unsetIssueContributor as c, updateIssueSunshines as d, createIssue as e, getPublicBacklogIssues as f, getIssueById as g, getShiningIssues as h, getIssuesByGalaxy as i, patchIssue as p, setIssueContributor as s, updateIssueSolarForgeTxid as u };
