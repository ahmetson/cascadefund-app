import './chunks/virtual_BuMUpOlX.mjs';
import { ObjectId } from 'mongodb';
import { Wallet } from 'ethers';
import { g as getCollection, c as create } from './chunks/db_OZ8_cRuI.mjs';
import { g as getStarById, u as updateStarSunshines, a as getStarByIds, c as createStars, b as updateStarStars, d as createStarByUserId, e as getStarByUserId } from './chunks/star_BqlfetDB.mjs';
import { g as getGalaxyById, u as updateGalaxySunshines, a as updateGalaxyPosition, c as createGalaxy } from './chunks/galaxy_CZ-N3p2Y.mjs';
import { imitate50Deposit, hyperpay, send } from '@ara-web/crypto-sockets';
import { a as defineAction } from './chunks/index_Co7hB-Vn.mjs';
import { o as objectType, n as numberType, s as stringType, a as arrayType, b as nativeEnumType, e as enumType, c as anyType, d as booleanType } from './chunks/astro/server_BV1oLWnF.mjs';
import { u as updateUserStarPosition, c as createSpaceTracer, g as getUserStar, a as getGalaxySpace, b as getAllStarStats, d as checkSolarForgeByIssue, e as updateIssueStars, f as upsertSpaceUserStar, h as createSBOM, i as getGalaxyPositionHistory$1, j as createGalaxyPositionTracer } from './chunks/sbom_D-4c3Pyk.mjs';
import { g as getAuthUserById, a as getAccountsByUserId } from './chunks/auth_BUazfeO9.mjs';
import { g as getIssueById, u as updateIssueSolarForgeTxid, a as updateIssue, b as unpatchIssue, p as patchIssue, c as unsetIssueContributor, s as setIssueContributor, d as updateIssueSunshines, e as createIssue, f as getPublicBacklogIssues, h as getShiningIssues, i as getIssuesByGalaxy } from './chunks/issue_JOyCgfs2.mjs';
import { a as auth } from './chunks/auth_eDnd-px0.mjs';
import { I as IssueTag } from './chunks/issue_Dl_7o4gD.mjs';
import { m as mockRepositoryAnalysis } from './chunks/mock-data_D-YsDoC3.mjs';
import { c as checkDuplicateGitUrl, g as getProjectById, a as getOrCreateProject } from './chunks/project_CAKChrPf.mjs';
import { g as getAllBlogs, a as getBlogsByAuthor, b as getBlogById, c as createBlog } from './chunks/blog_Cn2jrrO-.mjs';

async function getDemoByEmail$1(email) {
  try {
    const collection = await getCollection("demo");
    const result = await collection.findOne({ email });
    return result;
  } catch (error) {
    console.error("Error getting demo by email:", error);
    return null;
  }
}
async function createDemo(email, users) {
  try {
    const demo = {
      email,
      created: Date.now(),
      users
    };
    return await create("demo", demo);
  } catch (error) {
    console.error("Error creating demo:", error);
    return false;
  }
}
async function updateDemoStep(email, step) {
  try {
    const collection = await getCollection("demo");
    const result = await collection.updateOne(
      { email },
      { $set: { step } }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating demo step:", error);
    return false;
  }
}

function donationModelToDonation(model) {
  if (!model) return null;
  return {
    _id: model._id?.toString(),
    userId: model.userId.toString(),
    galaxy: model.galaxy.toString(),
    // Convert ObjectId to string
    counter: model.counter,
    initiateTxId: model.initiateTxId,
    hyperpayTxId: model.hyperpayTxId,
    sunshinesAmount: model.sunshinesAmount,
    spendUsdAmount: model.spendUsdAmount,
    memo: model.memo,
    createdAt: model.createdAt ? Math.floor(model.createdAt.getTime() / 1e3) : void 0
    // Convert Date to Unix timestamp
  };
}
async function getDonationByUserId(userId) {
  try {
    const collection = await getCollection("donations");
    const objectId = typeof userId === "string" ? new ObjectId(userId) : userId;
    const result = await collection.findOne({ userId: objectId });
    return donationModelToDonation(result);
  } catch (error) {
    console.error("Error getting donation by user id:", error);
    return null;
  }
}
async function getDonationsByGalaxyId(galaxyId) {
  try {
    const collection = await getCollection("donations");
    const objectId = typeof galaxyId === "string" ? new ObjectId(galaxyId) : galaxyId;
    const results = await collection.find({ galaxy: objectId }).sort({ createdAt: -1 }).toArray();
    return results.map(donationModelToDonation).filter((d) => d !== null);
  } catch (error) {
    console.error("Error getting donations by galaxy id:", error);
    return [];
  }
}
async function createDonation(donation) {
  try {
    const donationWithDate = {
      ...donation,
      createdAt: donation.createdAt || /* @__PURE__ */ new Date()
    };
    const created = await create("donations", donationWithDate);
    if (!created) {
      return null;
    }
    const collection = await getCollection("donations");
    const result = await collection.findOne({
      userId: donation.userId,
      galaxy: donation.galaxy,
      counter: donation.counter,
      initiateTxId: donation.initiateTxId,
      hyperpayTxId: donation.hyperpayTxId
    });
    return donationModelToDonation(result);
  } catch (error) {
    console.error("Error creating donation:", error);
    return null;
  }
}
async function processPayment(amount, userId, galaxyId, currency = "USD", memo) {
  try {
    const existingDonation = await getDonationByUserId(userId);
    if (existingDonation) {
      return {
        success: false,
        transactionId: "",
        amount,
        currency,
        error: "reentrancy. sunshines already obtained"
      };
    }
    const counter = Date.now();
    const depositResult = await imitate50Deposit(counter);
    const initiateTxId = depositResult.txHash;
    const hyperpayTxId = await hyperpay(counter);
    const sunshinesAmount = amount * 1.8;
    const userIdObj = new ObjectId(userId);
    const galaxyIdObj = new ObjectId(galaxyId);
    const donationModel = {
      userId: userIdObj,
      galaxy: galaxyIdObj,
      counter,
      initiateTxId,
      hyperpayTxId,
      sunshinesAmount,
      spendUsdAmount: amount,
      memo,
      createdAt: /* @__PURE__ */ new Date()
    };
    const donation = await createDonation(donationModel);
    if (!donation) {
      return {
        success: false,
        transactionId: initiateTxId,
        amount,
        currency,
        error: "Failed to create donation record"
      };
    }
    const transactionId = initiateTxId;
    return {
      success: true,
      transactionId,
      amount,
      currency,
      donation
    };
  } catch (error) {
    console.error("Error processing payment:", error);
    return {
      success: false,
      transactionId: "",
      amount,
      currency,
      error: "An error occurred while processing payment"
    };
  }
}

function generateRandomStar(role, index) {
  return {
    sunshines: 0,
    stars: 0,
    role,
    balance: 0
  };
}
async function generateDemoStars(email) {
  const wallet1 = Wallet.createRandom();
  const wallet2 = Wallet.createRandom();
  const wallet3 = Wallet.createRandom();
  const stars = [
    {
      role: "user",
      demoPrivateKey: wallet1.privateKey
    },
    {
      ...generateRandomStar("maintainer"),
      demoPrivateKey: wallet2.privateKey
    },
    {
      ...generateRandomStar("contributor"),
      demoPrivateKey: wallet3.privateKey
    }
  ];
  const createdIds = await createStars(stars);
  return createdIds.map((id, index) => ({
    ...stars[index],
    _id: id
  }));
}
const server$a = {
  start: defineAction({
    accept: "json",
    input: objectType({
      email: stringType().email()
    }),
    handler: async ({ email }) => {
      try {
        const existingDemo = await getDemoByEmail$1(email);
        if (existingDemo) {
          const stars2 = await getStarByIds(existingDemo.users);
          return {
            success: true,
            users: stars2
          };
        }
        const stars = await generateDemoStars(email);
        const created = await createDemo(email, stars.map((star) => new ObjectId(star._id)));
        if (!created) {
          return {
            success: false,
            error: "Failed to create a new demo"
          };
        }
        return {
          success: true,
          users: stars
        };
      } catch (error) {
        console.error("Error in demo start action:", error);
        return {
          success: false,
          error: "An error occurred while starting a new demo"
        };
      }
    }
  }),
  getDemoStep: defineAction({
    accept: "json",
    input: objectType({
      email: stringType().email()
    }),
    handler: async ({ email }) => {
      try {
        const demo = await getDemoByEmail$1(email);
        if (!demo) {
          return {
            success: false,
            error: "Demo not found"
          };
        }
        return {
          success: true,
          step: demo.step
        };
      } catch (error) {
        console.error("Error getting demo step:", error);
        return {
          success: false,
          error: "An error occurred while getting demo step"
        };
      }
    }
  }),
  obtainSunshines: defineAction({
    accept: "json",
    input: objectType({
      galaxyId: stringType(),
      userId: stringType(),
      email: stringType().email(),
      memo: stringType().optional()
    }),
    handler: async ({ galaxyId, userId, email, memo }) => {
      try {
        const demo = await getDemoByEmail$1(email);
        if (!demo) {
          return {
            success: false,
            error: "Demo not found"
          };
        }
        if (demo.step !== void 0 && demo.step !== null && demo.step !== 0) {
          return {
            success: false,
            error: "Invalid step. Can only obtain sunshines at step 0"
          };
        }
        let galaxy = await getGalaxyById(galaxyId);
        if (!galaxy) {
          return {
            success: false,
            error: "Can not obtain sunshines, galaxy id invalid"
          };
        }
        const star = await getStarById(userId);
        if (!star) {
          return {
            success: false,
            error: "Can not obtain sunshines, user id invalid"
          };
        }
        const donationAmount = 50;
        const paymentResult = await processPayment(donationAmount, userId, galaxyId, "USD", memo);
        if (!paymentResult.success) {
          return {
            success: false,
            error: paymentResult.error || "Can not obtain sunshines, payment processing failed"
          };
        }
        const sunshinesAmount = donationAmount * 1.8;
        const starUpdated = await updateStarSunshines(userId, sunshinesAmount);
        if (!starUpdated) {
          return {
            success: false,
            error: "Can not obtain sunshines, failed to update star sunshines"
          };
        }
        const galaxyIdObj = galaxy._id || galaxyId;
        const galaxyUpdated = await updateGalaxySunshines(galaxyIdObj, sunshinesAmount);
        if (!galaxyUpdated) {
          return {
            success: false,
            error: "Can not obtain sunshines, failed to update galaxy sunshines"
          };
        }
        const stepUpdated = await updateDemoStep(email, 1);
        if (!stepUpdated) {
          return {
            success: false,
            error: "Can not obtain sunshines, failed to update demo step"
          };
        }
        const currentSunshines = star.sunshines || 0;
        const totalSunshines = currentSunshines + sunshinesAmount;
        return {
          success: true,
          sunshines: sunshinesAmount,
          totalSunshines
        };
      } catch (error) {
        console.error("Error in obtain sunshines action:", error);
        return {
          success: false,
          error: "Can not obtain sunshines, an error occurred: " + (error instanceof Error ? error.message : "Unknown error")
        };
      }
    }
  }),
  incrementDemoStep: defineAction({
    accept: "json",
    input: objectType({
      email: stringType().email(),
      expectedStep: numberType()
    }),
    handler: async ({ email, expectedStep }) => {
      try {
        const demo = await getDemoByEmail$1(email);
        if (!demo) {
          return {
            success: false,
            error: "Demo not found"
          };
        }
        const currentStep = demo.step ?? 0;
        if (currentStep !== expectedStep) {
          return {
            success: false,
            error: `Invalid step. Expected step ${expectedStep}, but current step is ${currentStep}`
          };
        }
        if (currentStep > 8) {
          return {
            success: false,
            error: "Already completed the demo. Enjoy"
          };
        }
        const newStep = currentStep + 1;
        const stepUpdated = await updateDemoStep(email, newStep);
        if (!stepUpdated) {
          return {
            success: false,
            error: "Failed to update demo step"
          };
        }
        return {
          success: true,
          step: newStep
        };
      } catch (error) {
        console.error("Error incrementing demo step:", error);
        return {
          success: false,
          error: "An error occurred while incrementing demo step"
        };
      }
    }
  })
};

function patchModelToPatch(model) {
  return {
    id: model.id.toString(),
    completed: model.completed,
    tested: model.tested,
    title: model.title,
    sunshines: model.sunshines
  };
}
function patchToPatchModel(patch) {
  return {
    id: new ObjectId(patch.id),
    completed: patch.completed,
    tested: patch.tested,
    title: patch.title,
    sunshines: patch.sunshines
  };
}
function versionModelToVersion(model) {
  if (!model) return null;
  return {
    _id: model._id?.toString(),
    galaxy: model.galaxy.toString(),
    tag: model.tag,
    createdTime: Math.floor(model.createdTime.getTime() / 1e3),
    status: model.status,
    patches: model.patches.map(patchModelToPatch),
    maintainer: model.maintainer.toString()
  };
}
function versionToVersionModel(version) {
  return {
    _id: version._id ? new ObjectId(version._id) : void 0,
    galaxy: new ObjectId(version.galaxy),
    tag: version.tag,
    createdTime: new Date(version.createdTime * 1e3),
    status: version.status,
    patches: version.patches.map(patchToPatchModel),
    maintainer: new ObjectId(version.maintainer)
  };
}
async function getVersionsByGalaxy(galaxyId) {
  try {
    const collection = await getCollection("versions");
    const objectId = typeof galaxyId === "string" ? new ObjectId(galaxyId) : galaxyId;
    const result = await collection.find({ galaxy: objectId }).toArray();
    return result.map(versionModelToVersion).filter((v) => v !== null);
  } catch (error) {
    console.error("Error getting versions by galaxy:", error);
    return [];
  }
}
async function getVersionById(versionId) {
  try {
    const collection = await getCollection("versions");
    const objectId = typeof versionId === "string" ? new ObjectId(versionId) : versionId;
    const result = await collection.findOne({ _id: objectId });
    return versionModelToVersion(result);
  } catch (error) {
    console.error("Error getting version by id:", error);
    return null;
  }
}
async function createVersion(version) {
  try {
    const versionModel = versionToVersionModel(version);
    return await create("versions", versionModel);
  } catch (error) {
    console.error("Error creating version:", error);
    return false;
  }
}
async function updateVersionStatus(versionId, status) {
  try {
    const collection = await getCollection("versions");
    const objectId = typeof versionId === "string" ? new ObjectId(versionId) : versionId;
    const result = await collection.updateOne(
      { _id: objectId },
      {
        $set: {
          status
        }
      }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating version status:", error);
    return false;
  }
}
async function revertPatch(galaxyId, versionTag, issueId) {
  try {
    const collection = await getCollection("versions");
    const galaxyObjectId = typeof galaxyId === "string" ? new ObjectId(galaxyId) : galaxyId;
    const issueObjectId = typeof issueId === "string" ? new ObjectId(issueId) : issueId;
    const version = await collection.findOne({
      galaxy: galaxyObjectId,
      tag: versionTag
    });
    if (!version) {
      return false;
    }
    const updatedPatches = version.patches.filter(
      (patch) => !patch.id.equals(issueObjectId)
    );
    const result = await collection.updateOne(
      { _id: version._id },
      {
        $set: {
          patches: updatedPatches
        }
      }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error reverting patch:", error);
    return false;
  }
}
async function updatePatches(versionId, patches) {
  try {
    const collection = await getCollection("versions");
    const objectId = typeof versionId === "string" ? new ObjectId(versionId) : versionId;
    const patchModels = patches.map(patchToPatchModel);
    const result = await collection.updateOne(
      { _id: objectId },
      {
        $set: {
          patches: patchModels
        }
      }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating patches:", error);
    return false;
  }
}
async function removePatch(patchId, versionId) {
  try {
    const collection = await getCollection("versions");
    const versionObjectId = typeof versionId === "string" ? new ObjectId(versionId) : versionId;
    const patchObjectId = typeof patchId === "string" ? new ObjectId(patchId) : patchId;
    const result = await collection.updateOne(
      { _id: versionObjectId },
      {
        $pull: {
          patches: { id: patchObjectId }
        }
      }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error removing patch:", error);
    return false;
  }
}
async function completePatch(versionId, patchId, completed) {
  try {
    const collection = await getCollection("versions");
    const versionObjectId = typeof versionId === "string" ? new ObjectId(versionId) : versionId;
    const patchObjectId = typeof patchId === "string" ? new ObjectId(patchId) : patchId;
    const result = await collection.updateOne(
      {
        _id: versionObjectId,
        "patches.id": patchObjectId
      },
      {
        $set: {
          "patches.$.completed": completed
        }
      }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error completing patch:", error);
    return false;
  }
}
async function testPatch(versionId, patchId, tested) {
  try {
    const collection = await getCollection("versions");
    const versionObjectId = typeof versionId === "string" ? new ObjectId(versionId) : versionId;
    const patchObjectId = typeof patchId === "string" ? new ObjectId(patchId) : patchId;
    const result = await collection.updateOne(
      {
        _id: versionObjectId,
        "patches.id": patchObjectId
      },
      {
        $set: {
          "patches.$.tested": tested
        }
      }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating patch tested status:", error);
    return false;
  }
}

function solarForge(sunshines) {
  return sunshines / 180;
}

async function solarForgeByIssue(issueId) {
  try {
    const alreadyForged = await checkSolarForgeByIssue(issueId);
    if (alreadyForged) {
      return {
        users: [],
        solarForgeId: "",
        error: "duplicate"
      };
    }
    const issue = await getIssueById(issueId);
    if (!issue) {
      return {
        users: [],
        solarForgeId: "",
        error: "Issue not found"
      };
    }
    if (!issue.sunshines || issue.sunshines <= 0) {
      return {
        users: [],
        solarForgeId: "",
        error: "Issue has no sunshines"
      };
    }
    const totalStars = solarForge(issue.sunshines);
    const starsPerRole = totalStars / 3;
    const stakeholders = [];
    if (issue.author) {
      stakeholders.push({ userId: issue.author, role: "author" });
    }
    if (issue.contributor) {
      stakeholders.push({ userId: issue.contributor, role: "contributor" });
    }
    if (issue.maintainer) {
      stakeholders.push({ userId: issue.maintainer, role: "maintainer" });
    }
    const userMap = /* @__PURE__ */ new Map();
    for (const stakeholder of stakeholders) {
      const existing = userMap.get(stakeholder.userId);
      if (existing) {
        existing.roles.push(stakeholder.role);
        existing.stars += starsPerRole;
      } else {
        userMap.set(stakeholder.userId, {
          roles: [stakeholder.role],
          stars: starsPerRole
        });
      }
    }
    const issueUpdated = await updateIssueStars(issueId, totalStars, issue.sunshines);
    if (!issueUpdated) {
      return {
        users: [],
        solarForgeId: "",
        error: "Failed to update issue"
      };
    }
    const solarUsers = [];
    const userIds = [];
    const userAddresses = [];
    for (const [userId, data] of userMap.entries()) {
      const userUpdated = await updateStarStars(userId, data.stars);
      if (userUpdated) {
        const user = await getStarById(userId);
        if (!user) {
          continue;
        }
        if (!user.demoPrivateKey) {
          console.error(`User ${userId} missing demoPrivateKey, skipping blockchain solar forge`);
          continue;
        }
        try {
          const wallet = new Wallet(user.demoPrivateKey);
          const address = wallet.address;
          userAddresses.push(address);
        } catch (error) {
          console.error(`Error deriving address for user ${userId}:`, error);
          continue;
        }
        if (issue.galaxy) {
          let nickname;
          let src;
          if (user.userId) {
            const authUser = await getAuthUserById(user.userId);
            if (authUser) {
              nickname = authUser.name || authUser.username || authUser.email?.split("@")[0];
              src = authUser.image;
            }
          }
          await upsertSpaceUserStar({
            galaxyId: issue.galaxy,
            userId,
            data: {
              nickname,
              src,
              alt: void 0,
              stars: user.stars,
              sunshines: user.sunshines,
              role: "maintainer",
              uri: void 0
            }
          });
        }
        solarUsers.push({
          id: userId,
          roles: data.roles,
          stars: data.stars
        });
        userIds.push(userId);
      }
    }
    if (userAddresses.length === 0) {
      return {
        users: [],
        solarForgeId: "",
        error: "No valid user addresses found for blockchain solar forge"
      };
    }
    const galaxy = await getGalaxyById(issue.galaxy);
    if (!galaxy || !galaxy.blockchainId) {
      return {
        users: [],
        solarForgeId: "",
        error: "Can not solar forge issue, galaxy id invalid or missing blockchainId"
      };
    }
    const serializedSolarForge = {
      _id: issueId,
      solarForgeType: "issue",
      issueId,
      users: userAddresses,
      stars: totalStars
    };
    try {
      const request = {
        cmd: "solarForge",
        params: {
          galaxyId: galaxy.blockchainId,
          models: [serializedSolarForge]
        }
      };
      const reply = await send(request);
      if ("error" in reply) {
        const errorReply = reply;
        console.error("Blockchain solar forge error:", errorReply.error);
        return {
          users: [],
          solarForgeId: "",
          error: `Crypto-sockets error while solar forging issue: ${errorReply.error}`
        };
      }
      const successReply = reply;
      const txHash = successReply.params.txHash;
      const updated = await updateIssueSolarForgeTxid(issueId, txHash);
      if (!updated) {
        console.error("Failed to update issue with solarForgeTxid");
      }
      return {
        users: solarUsers,
        solarForgeId: txHash
      };
    } catch (error) {
      console.error("Error calling blockchain gateway for solar forge:", error);
      return {
        users: [],
        solarForgeId: "",
        error: `Failed to call blockchain gateway: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  } catch (error) {
    console.error("Error in solarForgeByIssue:", error);
    return {
      users: [],
      solarForgeId: "",
      error: "Can not solar forge issue, an error occurred: " + (error instanceof Error ? error.message : "Unknown error")
    };
  }
}
const server$9 = {
  allStarStats: defineAction({
    accept: "json",
    input: objectType({}),
    handler: async () => {
      try {
        const stats = await getAllStarStats();
        return stats;
      } catch (error) {
        console.error("Error in allStarStats action:", error);
        return {
          totalGalaxies: 0,
          totalStars: 0,
          totalUsers: 0,
          totalSunshines: 0
        };
      }
    }
  }),
  getGalaxySpace: defineAction({
    accept: "json",
    input: objectType({
      galaxyId: stringType()
    }),
    handler: async ({ galaxyId }) => {
      const space = await getGalaxySpace(galaxyId);
      return { space };
    }
  }),
  getUserStar: defineAction({
    accept: "json",
    input: objectType({
      galaxyId: stringType(),
      userId: stringType()
    }),
    handler: async ({ galaxyId, userId }) => {
      const userStar = await getUserStar(galaxyId, userId);
      return { userStar };
    }
  }),
  updateUserStarPosition: defineAction({
    accept: "json",
    input: objectType({
      galaxyId: stringType(),
      userId: stringType(),
      x: numberType(),
      y: numberType()
    }),
    handler: async ({ galaxyId, userId, x, y }) => {
      try {
        const user = await getStarById(userId);
        if (!user) {
          console.error(`User ${userId} not found`);
          return { success: false };
        }
        if (!user.demoPrivateKey) {
          console.error(`User ${userId} missing demoPrivateKey, cannot update blockchain position`);
          return { success: false };
        }
        let userAddress;
        try {
          const wallet = new Wallet(user.demoPrivateKey);
          userAddress = wallet.address;
        } catch (error) {
          console.error(`Error deriving address for user ${userId}:`, error);
          return { success: false };
        }
        const galaxy = await getGalaxyById(galaxyId);
        if (!galaxy || !galaxy.blockchainId) {
          console.error(`Galaxy ${galaxyId} not found or missing blockchainId`);
          return { success: false };
        }
        try {
          const position = {
            userId: userAddress,
            x,
            y
          };
          const request = {
            cmd: "spaceCoord",
            params: {
              galaxyId: galaxy.blockchainId,
              position
            }
          };
          const reply = await send(request);
          if ("error" in reply) {
            const errorReply = reply;
            console.error("Blockchain spaceCoord error:", errorReply.error);
            return { success: false };
          }
          const successReply = reply;
          const txId = successReply.params.tx;
          const success = await updateUserStarPosition({ galaxyId, userId, x, y });
          if (success) {
            try {
              await createSpaceTracer({ galaxyId, userId, x, y, txId });
            } catch (error) {
              console.error("Error creating space tracer:", error);
            }
          }
          return { success };
        } catch (error) {
          console.error("Error calling blockchain gateway for spaceCoord:", error);
          return { success: false };
        }
      } catch (error) {
        console.error("Error in updateUserStarPosition:", error);
        return { success: false };
      }
    }
  }),
  // solarForgeByIssue: defineAction({
  //     accept: 'json',
  //     input: z.object({
  //         issueId: z.string(),
  //     }),
  //     handler: async ({ issueId }): Promise<SolarForgeByIssueResult> => {
  //         try {
  //             const alreadyForged = await checkSolarForgeByIssue(issueId)
  //             if (alreadyForged) {
  //                 return {
  //                     users: [],
  //                     solarForgeId: '',
  //                     error: 'duplicate',
  //                 }
  //             }
  //             // Get issue
  //             const issue = await getIssueById(issueId)
  //             if (!issue) {
  //                 return {
  //                     users: [],
  //                     solarForgeId: '',
  //                     error: 'Issue not found',
  //                 }
  //             }
  //             // Check if issue has sunshines
  //             if (!issue.sunshines || issue.sunshines <= 0) {
  //                 return {
  //                     users: [],
  //                     solarForgeId: '',
  //                     error: 'Issue has no sunshines',
  //                 }
  //             }
  //             // Calculate stars
  //             const totalStars = solarForge(issue.sunshines)
  //             const starsPerRole = totalStars / 3
  //             // Get stakeholders: author, contributor, maintainer
  //             const stakeholders: Array<{ userId: string; role: string }> = []
  //             if (issue.author) {
  //                 stakeholders.push({ userId: issue.author, role: 'author' })
  //             }
  //             if (issue.contributor) {
  //                 stakeholders.push({ userId: issue.contributor, role: 'contributor' })
  //             }
  //             if (issue.maintainer) {
  //                 stakeholders.push({ userId: issue.maintainer, role: 'maintainer' })
  //             }
  //             // Reduce duplicates: group by userId, collect roles
  //             const userMap = new Map<string, { roles: string[]; stars: number }>()
  //             for (const stakeholder of stakeholders) {
  //                 const existing = userMap.get(stakeholder.userId)
  //                 if (existing) {
  //                     existing.roles.push(stakeholder.role)
  //                     existing.stars += starsPerRole
  //                 } else {
  //                     userMap.set(stakeholder.userId, {
  //                         roles: [stakeholder.role],
  //                         stars: starsPerRole,
  //                     })
  //                 }
  //             }
  //             // Update issue: reset sunshines to 0, increment stars
  //             const issueUpdated = await updateIssueStars(issueId, totalStars, issue.sunshines)
  //             if (!issueUpdated) {
  //                 return {
  //                     users: [],
  //                     solarForgeId: '',
  //                     error: 'Failed to update issue',
  //                 }
  //             }
  //             // Update users: increment stars for each stakeholder
  //             const solarUsers: SolarUser[] = []
  //             const userIds: string[] = []
  //             for (const [userId, data] of userMap.entries()) {
  //                 const userUpdated = await updateStarStars(userId, data.stars)
  //                 if (userUpdated) {
  //                     solarUsers.push({
  //                         id: userId,
  //                         roles: data.roles,
  //                         stars: data.stars,
  //                     })
  //                     userIds.push(userId)
  //                 }
  //             }
  //             // Create solar forge tracker entry
  //             const solarForgeId = await createSolarForge({
  //                 solarForgeType: 'issue',
  //                 issueId: issueId,
  //                 users: userIds,
  //                 sunshines: issue.sunshines,
  //                 createdTime: Math.floor(Date.now() / 1000),
  //             })
  //             // Broadcast ISSUE_UPDATE event (client-side will handle this)
  //             // Note: Events are typically broadcast on client-side, but we can emit here for server-side awareness
  //             // The client-side will fetch updated issue and broadcast
  //             // Broadcast USER_UPDATE events for each updated user
  //             for (const userId of userIds) {
  //                 const user = await getStarById(userId)
  //                 if (user) {
  //                     // Note: Events are typically handled client-side
  //                     // The client will listen and update accordingly
  //                 }
  //             }
  //             return {
  //                 users: solarUsers,
  //                 solarForgeId,
  //             }
  //         } catch (error) {
  //             console.error('Error in solarForgeByIssue:', error)
  //             return {
  //                 users: [],
  //                 solarForgeId: '',
  //                 error: 'An error occurred while solar forging issue',
  //             }
  //         }
  //     },
  // }),
  solarForgeByVersion: defineAction({
    accept: "json",
    input: objectType({
      versionId: stringType()
    }),
    handler: async ({ versionId }) => {
      try {
        const version = await getVersionById(versionId);
        if (!version) {
          return {
            users: [],
            totalIssues: 0,
            totalSunshines: 0,
            totalStars: 0
          };
        }
        const issueIds = version.patches.map((patch) => patch.id);
        if (issueIds.length === 0) {
          return {
            users: [],
            totalIssues: 0,
            totalSunshines: 0,
            totalStars: 0
          };
        }
        const allSolarUsers = /* @__PURE__ */ new Map();
        let totalSunshines = 0;
        let totalStars = 0;
        let processedIssues = 0;
        for (let i = 0; i < issueIds.length; i++) {
          const issueId = issueIds[i];
          const issue = await getIssueById(issueId);
          if (!issue) {
            continue;
          }
          const issueSunshines = issue.sunshines || 0;
          if (issueSunshines <= 0) {
            continue;
          }
          const issueStars = solarForge(issueSunshines);
          const result = await solarForgeByIssue(issueId);
          if (result.error && result.error !== "duplicate") {
            continue;
          }
          if (result.error === "duplicate") {
            processedIssues++;
            totalSunshines += issueSunshines;
            totalStars += issueStars;
            continue;
          }
          if (result.users.length > 0) {
            processedIssues++;
            totalSunshines += issueSunshines;
            totalStars += issueStars;
            for (const solarUser of result.users) {
              const existing = allSolarUsers.get(solarUser.id);
              if (existing) {
                const combinedRoles = [.../* @__PURE__ */ new Set([...existing.roles, ...solarUser.roles])];
                existing.roles = combinedRoles;
                existing.stars += solarUser.stars;
              } else {
                allSolarUsers.set(solarUser.id, {
                  id: solarUser.id,
                  roles: [...solarUser.roles],
                  stars: solarUser.stars
                });
              }
            }
          }
        }
        const aggregatedUsers = Array.from(allSolarUsers.values()).sort((a, b) => b.stars - a.stars);
        return {
          users: aggregatedUsers,
          totalIssues: processedIssues,
          totalSunshines,
          totalStars
        };
      } catch (error) {
        console.error("Error in solarForgeByVersion:", error);
        return {
          users: [],
          totalIssues: 0,
          totalSunshines: 0,
          totalStars: 0
        };
      }
    }
  }),
  getGalaxyPositionHistory: defineAction({
    accept: "json",
    input: objectType({
      galaxyId: stringType()
    }),
    handler: async ({ galaxyId }) => {
      try {
        const history = await getGalaxyPositionHistory(galaxyId);
        return { success: true, data: history };
      } catch (error) {
        console.error("Error getting galaxy position history:", error);
        return { success: false, data: [], error: error instanceof Error ? error.message : "Failed to get position history" };
      }
    }
  })
};

const server$8 = {
  getStarById: defineAction({
    input: objectType({
      starId: stringType()
    }),
    handler: async ({ starId }) => {
      try {
        const star = await getStarById(starId);
        if (star) {
          return {
            success: true,
            data: star
          };
        }
        return {
          success: false,
          error: "Star not found"
        };
      } catch (error) {
        console.error("Error getting star by id:", error);
        return {
          success: false,
          error: "An error occurred while getting star"
        };
      }
    }
  }),
  getStarByUserId: defineAction({
    input: objectType({
      userId: stringType()
    }),
    handler: async ({ userId }) => {
      try {
        const star = await getStarByUserId(userId);
        if (star) {
          return {
            success: true,
            data: star
          };
        }
        return {
          success: false,
          error: "Star not found"
        };
      } catch (error) {
        console.error("Error getting star by userId:", error);
        return {
          success: false,
          error: "An error occurred while getting star"
        };
      }
    }
  }),
  createStarByUserId: defineAction({
    input: objectType({
      userId: stringType()
    }),
    handler: async ({ userId }) => {
      try {
        const starId = await createStarByUserId(userId);
        return {
          success: true,
          starId
        };
      } catch (error) {
        console.error("Error creating star by userId:", error);
        return {
          success: false,
          error: "An error occurred while creating star"
        };
      }
    }
  }),
  updateStarSunshines: defineAction({
    input: objectType({
      starId: stringType(),
      amount: numberType()
    }),
    handler: async ({ starId, amount }) => {
      try {
        const updated = await updateStarSunshines(starId, amount);
        if (updated) {
          return {
            success: true
          };
        }
        return {
          success: false,
          error: "Failed to update star sunshines"
        };
      } catch (error) {
        console.error("Error updating star sunshines:", error);
        return {
          success: false,
          error: "An error occurred while updating star sunshines"
        };
      }
    }
  })
};

function serializeIssue(issue) {
  return {
    _id: issue._id?.toString(),
    galaxy: issue.galaxy?.toString() || "",
    uri: issue.uri,
    title: issue.title,
    description: issue.description,
    tags: issue.tags,
    maintainer: issue.maintainer?.toString() || "",
    author: issue.author?.toString() || "",
    contributor: issue.contributor?.toString() || "",
    stats: issue.stats ? Object.entries(issue.stats).reduce((acc, [key, stat]) => {
      if (stat) {
        acc[key] = {
          type: stat.type,
          hint: typeof stat.hint === "string" ? stat.hint : String(stat.hint || ""),
          filled: stat.filled,
          children: typeof stat.children === "number" ? stat.children : typeof stat.children === "string" ? stat.children : String(stat.children || "")
        };
      }
      return acc;
    }, {}) : void 0,
    createdTime: issue.createdTime ? typeof issue.createdTime === "number" ? issue.createdTime : Math.floor(new Date(issue.createdTime).getTime() / 1e3) : void 0,
    sunshines: issue.sunshines,
    users: issue.users?.map((user) => ({
      username: user.username,
      starshineAmount: user.starshineAmount,
      transactionDate: typeof user.transactionDate === "number" ? user.transactionDate : Math.floor(new Date(user.transactionDate).getTime() / 1e3)
    })) || [],
    listHistory: issue.listHistory || []
  };
}
const server$7 = {
  getIssuesByGalaxy: defineAction({
    input: objectType({
      galaxyId: stringType(),
      tabKey: stringType().optional()
    }),
    handler: async ({ galaxyId, tabKey }) => {
      try {
        const issues = await getIssuesByGalaxy(galaxyId, tabKey);
        const serializedIssues = issues.map(serializeIssue);
        return {
          success: true,
          issues: serializedIssues
        };
      } catch (error) {
        console.error("Error getting issues by galaxy:", error);
        return {
          success: false,
          error: "An error occurred while getting issues"
        };
      }
    }
  }),
  getShiningIssues: defineAction({
    input: objectType({
      galaxyId: stringType()
    }),
    handler: async ({ galaxyId }) => {
      try {
        const issues = await getShiningIssues(galaxyId);
        const serializedIssues = issues.map(serializeIssue);
        return {
          success: true,
          data: serializedIssues
        };
      } catch (error) {
        console.error("Error getting shining issues:", error);
        return {
          success: false,
          error: "An error occurred while getting shining issues"
        };
      }
    }
  }),
  getIssueById: defineAction({
    input: objectType({
      issueId: stringType()
    }),
    handler: async ({ issueId }) => {
      try {
        const issue = await getIssueById(issueId);
        console.log(`${issueId} action succeed ${issue ? "true" : "false"}`);
        if (!issue) {
          return {
            success: false,
            error: "Issue not found"
          };
        }
        return {
          success: true,
          data: serializeIssue(issue)
        };
      } catch (error) {
        console.error("Error getting issue by id:", error);
        return {
          success: false,
          error: "An error occurred while getting issue"
        };
      }
    }
  }),
  getPublicBacklogIssues: defineAction({
    input: objectType({
      galaxyId: stringType()
    }),
    handler: async ({ galaxyId }) => {
      try {
        const issues = await getPublicBacklogIssues(galaxyId);
        const serializedIssues = issues.map(serializeIssue);
        return {
          success: true,
          data: serializedIssues
        };
      } catch (error) {
        console.error("Error getting public backlog issues:", error);
        return {
          success: false,
          error: "An error occurred while getting public backlog issues"
        };
      }
    }
  }),
  createIssue: defineAction({
    accept: "json",
    input: objectType({
      galaxyId: stringType(),
      userId: stringType(),
      email: stringType().email(),
      title: stringType().min(1),
      description: stringType().min(1),
      tags: arrayType(nativeEnumType(IssueTag)),
      sunshines: numberType().min(0)
    }),
    handler: async ({ galaxyId, userId, email, title, description, tags, sunshines }, { request }) => {
      try {
        const session = await auth.api.getSession({
          headers: request.headers
        });
        if (!session || !session.user) {
          return {
            success: false,
            error: "Authentication required. Please log in to create an issue"
          };
        }
        const authenticatedUserId = session.user.id;
        if (authenticatedUserId !== userId) {
          return {
            success: false,
            error: "You can only create issues for your own account"
          };
        }
        const galaxy = await getGalaxyById(galaxyId);
        if (!galaxy || !galaxy.maintainer) {
          return {
            success: false,
            error: "Can not create issue, galaxy id invalid"
          };
        }
        const user = await getStarByUserId(userId);
        if (!user || !user._id) {
          return {
            success: false,
            error: "Can not create issue, user profile not found. Please ensure your account is set up correctly."
          };
        }
        if (sunshines > 0) {
          const availableSunshines = user.sunshines || 0;
          if (sunshines > availableSunshines) {
            return {
              success: false,
              error: `Can not create issue, insufficient sunshines. Available: ${availableSunshines}`
            };
          }
          const userUpdated = await updateStarSunshines(user._id.toString(), -sunshines);
          if (!userUpdated) {
            return {
              success: false,
              error: "Can not create issue, failed to update user sunshines"
            };
          }
          const galaxyUpdated = await updateGalaxySunshines(galaxyId, sunshines);
          if (!galaxyUpdated) {
            await updateStarSunshines(user._id.toString(), sunshines);
            return {
              success: false,
              error: "Can not create issue, failed to update galaxy sunshines"
            };
          }
        }
        let username = "unknown";
        const authUser = await getAuthUserById(userId);
        if (authUser) {
          username = authUser.name || authUser.username || authUser.email?.split("@")[0] || "unknown";
        }
        const issue = {
          galaxy: galaxyId,
          uri: `/issue`,
          title,
          description,
          tags,
          maintainer: galaxy.maintainer,
          createdTime: Math.floor(Date.now() / 1e3),
          sunshines,
          users: [{
            username,
            starshineAmount: sunshines,
            transactionDate: Math.floor(Date.now() / 1e3)
          }],
          author: user._id.toString()
        };
        const created = await createIssue(issue);
        if (!created) {
          if (sunshines > 0) {
            await updateStarSunshines(user._id.toString(), sunshines);
            await updateGalaxySunshines(galaxyId, -sunshines);
          }
          return {
            success: false,
            error: "Failed to create issue"
          };
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error creating issue:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
          success: false,
          error: `An error occurred while creating issue: ${errorMessage}`
        };
      }
    }
  }),
  updateIssueSunshines: defineAction({
    accept: "json",
    input: objectType({
      issueId: stringType(),
      userId: stringType(),
      email: stringType().email(),
      sunshinesToAdd: numberType().min(0)
    }),
    handler: async ({ issueId, userId, email, sunshinesToAdd }) => {
      try {
        const demo = await getDemoByEmail(email);
        if (!demo) {
          return {
            success: false,
            error: "Demo not found"
          };
        }
        const user = await getStarById(userId);
        if (!user) {
          return {
            success: false,
            error: "User not found"
          };
        }
        const availableSunshines = user.sunshines || 0;
        if (sunshinesToAdd > availableSunshines) {
          return {
            success: false,
            error: `Insufficient sunshines. Available: ${availableSunshines}`
          };
        }
        const userUpdated = await updateStarSunshines(userId, -sunshinesToAdd);
        if (!userUpdated) {
          return {
            success: false,
            error: "Failed to update user sunshines"
          };
        }
        const issue = await getIssueById(issueId);
        if (!issue) {
          return {
            success: false,
            error: "Issue not found"
          };
        }
        let username = "unknown";
        if (user.userId) {
          const authUser = await getAuthUserById(user.userId);
          if (authUser) {
            username = authUser.name || authUser.username || authUser.email?.split("@")[0] || "unknown";
          }
        }
        const issueUpdated = await updateIssueSunshines(issueId, userId, username, sunshinesToAdd);
        if (!issueUpdated) {
          await updateStarSunshines(userId, sunshinesToAdd);
          return {
            success: false,
            error: "Failed to update issue sunshines"
          };
        }
        const galaxyUpdated = await updateGalaxySunshines(issue.galaxy, sunshinesToAdd);
        if (!galaxyUpdated) {
          await updateStarSunshines(userId, sunshinesToAdd);
          console.error("Failed to update galaxy sunshines, but issue was updated");
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error updating issue sunshines:", error);
        return {
          success: false,
          error: "An error occurred while updating issue sunshines"
        };
      }
    }
  }),
  setContributor: defineAction({
    accept: "json",
    input: objectType({
      issueId: stringType(),
      userId: stringType()
    }),
    handler: async ({ issueId, userId }, { request }) => {
      try {
        const session = await auth.api.getSession({
          headers: request.headers
        });
        if (!session || !session.user) {
          return {
            success: false,
            error: "Authentication required. Please log in to assign contributor"
          };
        }
        const authenticatedUserId = session.user.id;
        const authenticatedStar = await getStarByUserId(authenticatedUserId);
        if (!authenticatedStar || !authenticatedStar._id) {
          return {
            success: false,
            error: "User profile not found. Please ensure your account is set up correctly."
          };
        }
        const issue = await getIssueById(issueId);
        if (!issue) {
          return {
            success: false,
            error: "Issue not found"
          };
        }
        const authenticatedStarId = authenticatedStar._id.toString();
        if (issue.maintainer !== authenticatedStarId) {
          return {
            success: false,
            error: "Only maintainers can assign contributors"
          };
        }
        const user = await getStarById(userId);
        if (!user) {
          return {
            success: false,
            error: "User not found"
          };
        }
        let username = "unknown";
        if (user.userId) {
          const authUser = await getAuthUserById(user.userId);
          if (authUser) {
            username = authUser.name || authUser.username || authUser.email?.split("@")[0] || "unknown";
          }
        }
        const updated = await setIssueContributor(issueId, userId, username);
        if (!updated) {
          return {
            success: false,
            error: "Failed to set contributor"
          };
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error setting contributor:", error);
        return {
          success: false,
          error: "An error occurred while setting contributor"
        };
      }
    }
  }),
  unsetContributor: defineAction({
    accept: "json",
    input: objectType({
      issueId: stringType()
    }),
    handler: async ({ issueId }, { request }) => {
      try {
        const session = await auth.api.getSession({
          headers: request.headers
        });
        if (!session || !session.user) {
          return {
            success: false,
            error: "Authentication required. Please log in to unset contributor"
          };
        }
        const authenticatedUserId = session.user.id;
        const authenticatedStar = await getStarByUserId(authenticatedUserId);
        if (!authenticatedStar || !authenticatedStar._id) {
          return {
            success: false,
            error: "User profile not found. Please ensure your account is set up correctly."
          };
        }
        const issue = await getIssueById(issueId);
        if (!issue) {
          return {
            success: false,
            error: "Issue not found"
          };
        }
        const authenticatedStarId = authenticatedStar._id.toString();
        if (issue.maintainer !== authenticatedStarId) {
          return {
            success: false,
            error: "Only maintainers can unset contributors"
          };
        }
        const updated = await unsetIssueContributor(issueId);
        if (!updated) {
          return {
            success: false,
            error: "Failed to unset contributor"
          };
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error unsetting contributor:", error);
        return {
          success: false,
          error: "An error occurred while unsetting contributor"
        };
      }
    }
  }),
  updateIssue: defineAction({
    accept: "json",
    input: objectType({
      issueId: stringType(),
      email: stringType().email(),
      listHistory: arrayType(stringType()).optional()
    }),
    handler: async ({ issueId, email, listHistory }, { request }) => {
      try {
        const session = await auth.api.getSession({
          headers: request.headers
        });
        if (!session || !session.user) {
          return {
            success: false,
            error: "Authentication required. Please log in to update issue"
          };
        }
        const authenticatedUserId = session.user.id;
        const authenticatedStar = await getStarByUserId(authenticatedUserId);
        if (!authenticatedStar || !authenticatedStar._id) {
          return {
            success: false,
            error: "User profile not found. Please ensure your account is set up correctly."
          };
        }
        const issue = await getIssueById(issueId);
        if (!issue) {
          return {
            success: false,
            error: "Issue not found"
          };
        }
        const authenticatedStarId = authenticatedStar._id.toString();
        if (issue.maintainer !== authenticatedStarId) {
          return {
            success: false,
            error: "Only maintainers can update issue lists"
          };
        }
        const updates = {};
        if (listHistory !== void 0) {
          updates.listHistory = listHistory;
        }
        const updated = await updateIssue(issueId, updates);
        if (!updated) {
          return {
            success: false,
            error: "Failed to update issue"
          };
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error updating issue:", error);
        return {
          success: false,
          error: "An error occurred while updating issue"
        };
      }
    }
  }),
  /**
   * Adds 'patcher' to listHistory property of the issue, marking as the patchable issue.
   * @requires issueId to identify the issue
   * @requires email to verify the demo session
   */
  patchIssue: defineAction({
    accept: "json",
    input: objectType({
      issueId: stringType(),
      email: stringType().email()
    }),
    handler: async ({ issueId, email }, { request }) => {
      try {
        const session = await auth.api.getSession({
          headers: request.headers
        });
        if (!session || !session.user) {
          return {
            success: false,
            error: "Authentication required. Please log in to patch issue"
          };
        }
        const authenticatedUserId = session.user.id;
        const authenticatedStar = await getStarByUserId(authenticatedUserId);
        if (!authenticatedStar || !authenticatedStar._id) {
          return {
            success: false,
            error: "User profile not found. Please ensure your account is set up correctly."
          };
        }
        const issue = await getIssueById(issueId);
        if (!issue) {
          return {
            success: false,
            error: "Issue not found"
          };
        }
        if (!issue.contributor || !issue.maintainer) {
          return {
            success: false,
            error: "Issue must have both a contributor and maintainer to be patched"
          };
        }
        const updated = await patchIssue(issueId);
        if (!updated) {
          return {
            success: false,
            error: "Failed to patch issue"
          };
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error patching issue:", error);
        return {
          success: false,
          error: "An error occurred while patching issue"
        };
      }
    }
  }),
  /**
   * Reverse of patchIssue, remove 'patcher' from listHistory
   */
  unpatchIssue: defineAction({
    accept: "json",
    input: objectType({
      issueId: stringType(),
      email: stringType().email()
    }),
    handler: async ({ issueId, email }, { request }) => {
      try {
        const session = await auth.api.getSession({
          headers: request.headers
        });
        if (!session || !session.user) {
          return {
            success: false,
            error: "Authentication required. Please log in to unpatch issue"
          };
        }
        const authenticatedUserId = session.user.id;
        const authenticatedStar = await getStarByUserId(authenticatedUserId);
        if (!authenticatedStar || !authenticatedStar._id) {
          return {
            success: false,
            error: "User profile not found. Please ensure your account is set up correctly."
          };
        }
        const issue = await getIssueById(issueId);
        if (!issue) {
          return {
            success: false,
            error: "Issue not found"
          };
        }
        const updated = await unpatchIssue(issueId);
        if (!updated) {
          return {
            success: false,
            error: "Failed to unpatch issue"
          };
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error unpatching issue:", error);
        return {
          success: false,
          error: "An error occurred while unpatching issue"
        };
      }
    }
  }),
  closeIssuesByVersion: defineAction({
    accept: "json",
    input: objectType({
      versionId: stringType()
    }),
    handler: async ({ versionId }, { request }) => {
      try {
        const session = await auth.api.getSession({
          headers: request.headers
        });
        if (!session || !session.user) {
          return {
            success: false,
            error: "Authentication required. Please log in to release a version"
          };
        }
        const authenticatedUserId = session.user.id;
        const authenticatedUserStar = await getStarByUserId(authenticatedUserId);
        if (!authenticatedUserStar || !authenticatedUserStar._id) {
          return {
            success: false,
            error: "User profile not found. Please ensure your account is set up correctly."
          };
        }
        const version = await getVersionById(versionId);
        if (!version) {
          return {
            success: false,
            error: "Version not found"
          };
        }
        const authenticatedStarId = authenticatedUserStar._id.toString();
        if (version.maintainer !== authenticatedStarId) {
          return {
            success: false,
            error: "Only the maintainer can release this version"
          };
        }
        const issueIds = version.patches.map((patch) => patch.id);
        if (issueIds.length === 0) {
          return {
            success: true
          };
        }
        for (const issueId of issueIds) {
          const issue = await getIssueById(issueId);
          if (!issue) {
            continue;
          }
          const currentListHistory = issue.listHistory || [];
          if (!currentListHistory.includes("closed")) {
            const updatedListHistory = [...currentListHistory, "closed"];
            await updateIssue(issueId, { listHistory: updatedListHistory });
          }
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error closing issues by version:", error);
        return {
          success: false,
          error: "An error occurred while closing issues"
        };
      }
    }
  })
};

function normalizeGitUrl(url) {
  let normalized = url.trim();
  if (normalized.endsWith(".git")) {
    normalized = normalized.slice(0, -4);
  }
  if (normalized.startsWith("git@")) {
    normalized = normalized.replace("git@", "https://").replace(":", "/");
  }
  return normalized;
}
function detectGitProvider(url) {
  const normalized = normalizeGitUrl(url);
  try {
    const urlObj = new URL(normalized);
    const host = urlObj.hostname.toLowerCase();
    if (host === "github.com" || host.includes("github")) {
      const pathParts = urlObj.pathname.split("/").filter((p) => p);
      if (pathParts.length >= 2) {
        return {
          provider: "github",
          owner: pathParts[0],
          repo: pathParts[1]
        };
      }
    }
    if (host === "gitlab.com" || host.includes("gitlab")) {
      const pathParts = urlObj.pathname.split("/").filter((p) => p);
      if (pathParts.length >= 2) {
        return {
          provider: "gitlab",
          host: host === "gitlab.com" ? void 0 : host,
          owner: pathParts[0],
          repo: pathParts[1]
        };
      }
    }
    return null;
  } catch (error) {
    console.error("Error parsing Git URL:", error);
    return null;
  }
}
async function fetchRepositoryMetadata(provider, owner, repo, host) {
  const githubToken = process.env.GITHUB_TOKEN;
  const gitlabToken = process.env.GITLAB_TOKEN;
  try {
    if (provider === "github") {
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
      const headers = {
        "Accept": "application/vnd.github.v3+json"
      };
      if (githubToken) {
        headers["Authorization"] = `token ${githubToken}`;
      }
      const response = await fetch(apiUrl, { headers });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Repository not found");
        }
        if (response.status === 403 && process.env.NODE_ENV !== "production") {
          console.warn("GitHub API rate limit exceeded (403). Using mocked data in development.");
          return mockRepositoryAnalysis.metadata;
        }
        throw new Error(`GitHub API error: ${response.status}`);
      }
      const data = await response.json();
      let totalCommits = 0;
      try {
        const commitsResponse = await fetch(`${apiUrl}/commits?per_page=1`, { headers });
        if (commitsResponse.ok) {
          const linkHeader = commitsResponse.headers.get("link");
          if (linkHeader) {
            const lastPageMatch = linkHeader.match(/page=(\d+)>; rel="last"/);
            if (lastPageMatch) {
              totalCommits = parseInt(lastPageMatch[1]);
            }
          } else {
            const commitsData = await commitsResponse.json();
            totalCommits = Array.isArray(commitsData) && commitsData.length > 0 ? 1 : 0;
          }
        }
      } catch (e) {
        console.warn("Could not fetch commit count:", e);
      }
      return {
        lastCommitId: data.default_branch ? (await fetch(`${apiUrl}/commits/${data.default_branch}`, { headers }).then((r) => r.json())).sha : "",
        lastCommitTimestamp: data.pushed_at ? Math.floor(new Date(data.pushed_at).getTime() / 1e3) : 0,
        totalCommits: totalCommits || 0,
        visibility: data.private ? "private" : "public",
        defaultBranch: data.default_branch || "main",
        name: data.name,
        description: data.description || void 0,
        language: data.language || void 0,
        homepage: data.homepage || void 0,
        topics: data.topics || []
      };
    } else if (provider === "gitlab") {
      const baseUrl = host ? `https://${host}` : "https://gitlab.com";
      const encodedPath = encodeURIComponent(`${owner}/${repo}`);
      const apiUrl = `${baseUrl}/api/v4/projects/${encodedPath}`;
      const headers = {
        "Accept": "application/json"
      };
      if (gitlabToken) {
        headers["Authorization"] = `Bearer ${gitlabToken}`;
      }
      const response = await fetch(apiUrl, { headers });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Repository not found");
        }
        throw new Error(`GitLab API error: ${response.status}`);
      }
      const data = await response.json();
      let lastCommitId = "";
      let lastCommitTimestamp = 0;
      try {
        const commitsResponse = await fetch(`${apiUrl}/repository/commits?per_page=1`, { headers });
        if (commitsResponse.ok) {
          const commitsData = await commitsResponse.json();
          if (Array.isArray(commitsData) && commitsData.length > 0) {
            lastCommitId = commitsData[0].id;
            lastCommitTimestamp = commitsData[0].created_at ? Math.floor(new Date(commitsData[0].created_at).getTime() / 1e3) : 0;
          }
        }
      } catch (e) {
        console.warn("Could not fetch last commit:", e);
      }
      return {
        lastCommitId,
        lastCommitTimestamp,
        totalCommits: data.statistics?.commit_count || 0,
        visibility: data.visibility === "private" ? "private" : "public",
        defaultBranch: data.default_branch || "main",
        name: data.name,
        description: data.description || void 0,
        homepage: data.web_url || void 0
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching repository metadata:", error);
    throw error;
  }
}
async function detectLicense(provider, owner, repo, metadata, host) {
  const githubToken = process.env.GITHUB_TOKEN;
  const gitlabToken = process.env.GITLAB_TOKEN;
  try {
    if (provider === "github") {
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
      const headers = {
        "Accept": "application/vnd.github.v3+json"
      };
      if (githubToken) {
        headers["Authorization"] = `token ${githubToken}`;
      }
      const response = await fetch(apiUrl, { headers });
      if (response.status === 403 && process.env.NODE_ENV !== "production") {
        return mockRepositoryAnalysis.license;
      }
      if (response.ok) {
        const data = await response.json();
        if (data.license && data.license.spdx_id && data.license.spdx_id !== "NOASSERTION") {
          return {
            license: data.license.spdx_id,
            confidence: 1,
            source: "github-api"
          };
        }
      }
      const licenseFiles = ["LICENSE", "LICENSE.txt", "LICENSE.md", "COPYING", "COPYING.txt"];
      for (const licenseFile of licenseFiles) {
        try {
          const fileResponse = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${metadata.defaultBranch}/${licenseFile}`, {
            headers: { "Accept": "text/plain" }
          });
          if (fileResponse.ok) {
            const content = await fileResponse.text();
            if (content.includes("MIT")) return { license: "MIT", confidence: 0.8, source: `license-file-${licenseFile}` };
            if (content.includes("Apache")) return { license: "Apache-2.0", confidence: 0.8, source: `license-file-${licenseFile}` };
            if (content.includes("GPL")) return { license: "GPL-3.0", confidence: 0.8, source: `license-file-${licenseFile}` };
            if (content.includes("BSD")) return { license: "BSD-3-Clause", confidence: 0.8, source: `license-file-${licenseFile}` };
          }
        } catch (e) {
        }
      }
    } else if (provider === "gitlab") {
      const baseUrl = host ? `https://${host}` : "https://gitlab.com";
      const licenseFiles = ["LICENSE", "LICENSE.txt", "LICENSE.md", "COPYING", "COPYING.txt"];
      for (const licenseFile of licenseFiles) {
        try {
          const encodedPath = encodeURIComponent(`${owner}/${repo}`);
          const fileResponse = await fetch(`${baseUrl}/api/v4/projects/${encodedPath}/repository/files/${encodeURIComponent(licenseFile)}/raw?ref=${metadata.defaultBranch}`, {
            headers: gitlabToken ? { "Authorization": `Bearer ${gitlabToken}` } : {}
          });
          if (fileResponse.ok) {
            const content = await fileResponse.text();
            if (content.includes("MIT")) return { license: "MIT", confidence: 0.8, source: `license-file-${licenseFile}` };
            if (content.includes("Apache")) return { license: "Apache-2.0", confidence: 0.8, source: `license-file-${licenseFile}` };
            if (content.includes("GPL")) return { license: "GPL-3.0", confidence: 0.8, source: `license-file-${licenseFile}` };
            if (content.includes("BSD")) return { license: "BSD-3-Clause", confidence: 0.8, source: `license-file-${licenseFile}` };
          }
        } catch (e) {
        }
      }
    }
    return {
      license: void 0,
      confidence: 0,
      source: "none"
    };
  } catch (error) {
    console.error("Error detecting license:", error);
    return {
      license: void 0,
      confidence: 0,
      source: "error"
    };
  }
}
async function discoverProjectLinks(provider, owner, repo, metadata, host) {
  const links = {};
  if (metadata.homepage) {
    links.homepage = metadata.homepage;
  }
  if (provider === "github") {
    links.documentation = `https://github.com/${owner}/${repo}#readme`;
  } else if (provider === "gitlab") {
    const baseUrl = host ? `https://${host}` : "https://gitlab.com";
    links.documentation = `${baseUrl}/${owner}/${repo}`;
  }
  return links;
}
async function buildDependencyTree(provider, owner, repo, projectId, gitUrl, host) {
  const githubToken = process.env.GITHUB_TOKEN;
  process.env.GITLAB_TOKEN;
  try {
    if (provider === "github") {
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}/dependency-graph/sbom`;
      const headers = {
        "Accept": "application/vnd.github+json"
      };
      if (githubToken) {
        headers["Authorization"] = `Bearer ${githubToken}`;
      }
      try {
        const response = await fetch(apiUrl, { headers });
        if (response.ok) {
          const sbomData = await response.json();
          const dependencies = [];
          if (sbomData.sbom && sbomData.sbom.components) {
            for (const component of sbomData.sbom.components) {
              if (component.type === "library" || component.type === "application") {
                dependencies.push({
                  name: component.name,
                  version: component.version,
                  type: component.type,
                  purl: component.purl
                });
              }
            }
          }
          const dependencyTree2 = {
            dependencies,
            source: "github-sbom-api",
            completeness: dependencies.length > 0 ? "full" : "partial"
          };
          const sbom2 = {
            projectId,
            gitUrl,
            provider,
            sbomData,
            dependencies,
            source: "github-sbom-api",
            completeness: dependencyTree2.completeness,
            detectedAt: Math.floor(Date.now() / 1e3)
          };
          await createSBOM(sbom2);
          return dependencyTree2;
        }
      } catch (e) {
        console.warn("GitHub SBOM API not available, falling back to manifest parsing:", e);
      }
    }
    const dependencyTree = {
      dependencies: [],
      source: provider === "github" ? "github-manifest" : "gitlab-manifest",
      completeness: "direct-only"
    };
    const sbom = {
      projectId,
      gitUrl,
      provider,
      sbomData: {},
      dependencies: [],
      source: dependencyTree.source,
      completeness: "direct-only",
      detectedAt: Math.floor(Date.now() / 1e3)
    };
    await createSBOM(sbom);
    return dependencyTree;
  } catch (error) {
    console.error("Error building dependency tree:", error);
    return {
      dependencies: [],
      source: "error",
      completeness: "direct-only"
    };
  }
}
async function checkDuplicateRepository(gitUrl) {
  try {
    return await checkDuplicateGitUrl(gitUrl);
  } catch (error) {
    console.error("Error checking duplicate repository:", error);
    return false;
  }
}

let cachedContext = null;
function buildExecutionContextDocs() {
  return `
## Available Execution Context

When generating code, you have access to the following in the execution context:

### State Variables (read/write via setters)
- \`zoom\` (number): Current zoom level (typically 25-100)
- \`showDialog\` (boolean): Whether navigation dialog is shown
- \`virtualScreenSize\` (object): \`{ width: number, height: number }\` - Virtual screen dimensions
- \`isAllStarsPage\` (boolean): Whether currently on the all-stars page

### State Setters
- \`setZoom(zoom: number)\`: Set the zoom level
- \`setShowDialog(show: boolean)\`: Show/hide navigation dialog
- \`setVirtualScreenSize(size: { width: number, height: number })\`: Set virtual screen size
- \`setIsAllStarsPage(isAllStars: boolean)\`: Set all-stars page state

### Props (read-only)
- \`projectId\` (string | undefined): Current project ID
- \`projectName\` (string | undefined): Current project name
- \`initialZoom\` (number): Initial zoom value (default: 100)
- \`minZoom\` (number): Minimum zoom value (default: 25)
- \`maxZoom\` (number): Maximum zoom value (default: 100)
- \`maxGalaxyContent\` (number): Maximum galaxy content scale (default: 100)

### Refs (read-only access)
- \`hasShownDialogRef\`: Ref tracking if dialog has been shown
- \`previousZoomRef\`: Ref storing previous zoom value
- \`scrollPositionRef\`: Ref storing scroll position \`{ x: number, y: number }\`
- \`isZoomingRef\`: Ref tracking if zooming is in progress

### Utilities
- \`window\`: Browser window object
- \`location\`: Browser location object (window.location)

## Code Generation Guidelines

1. **Code Execution**: Generated code will be executed using:
   \`\`\`javascript
   const func = new Function(...Object.keys(context), code);
   func(...Object.values(context));
   \`\`\`
   This means your code has direct access to all the variables listed above.

2. **Code Format**: 
   - Must be valid JavaScript
   - Should NOT include function wrapper or return statements
   - Should directly manipulate state using setters
   - Can use conditionals, loops, and all JavaScript features
   - **CRITICAL: DO NOT declare variables with names that already exist in the context** (e.g., do NOT use \`const initialZoom = ...\` because \`initialZoom\` is already available as a prop)
   - If you need a new variable, use a different name (e.g., \`const calculatedZoom = ...\` instead of \`const initialZoom = ...\`)

3. **URI Extraction**:
   - Extract URIs from the user's prompt
   - Common URIs: \`/project\`, \`/all-stars\`
   - If prompt mentions specific pages, include those URIs
   - If no specific pages mentioned, default to \`['/project', '/all-stars']\`

4. **Examples**:
   - To set zoom: \`setZoom(50);\`
   - To check project: \`if (projectId === 'some-id') { setZoom(10); }\`
   - To check URI: \`if (location.pathname.includes('/all-stars')) { setZoom(75); }\`
   - To calculate a value: \`const calculatedValue = someCalculation(); setZoom(calculatedValue);\` (use unique variable names)
   - **WRONG**: \`const initialZoom = 50; setZoom(initialZoom);\` (conflicts with existing prop)
   - **CORRECT**: \`const zoomValue = 50; setZoom(zoomValue);\` (uses unique name)
`;
}
function buildContext() {
  const context = `# GalaxyLayoutBody Component - Brief Context

This document provides essential information for generating personalization code for the GalaxyLayoutBody React component.

## Component Overview

**GalaxyLayoutBody** is a React component that:
- Manages zoom level (25-100 range)
- Controls virtual screen size (width/height)
- Shows/hides navigation dialog
- Executes user-generated personalization code
- Supports test mode for previewing changes

**Related Components** (for reference only):
- **GalaxyZoomControls**: Zoom in/out buttons and slider
- **GalacticMeasurements**: Displays width/height measurements
- **GalaxyNavigationDialog**: Dialog shown when zooming out too far
- **AllStarsLink**: Navigation link to all-stars page

${buildExecutionContextDocs()}
`;
  return context;
}
function getCachedContext() {
  if (!cachedContext) {
    console.log("Building brief context for LLM API (this happens once per server restart)");
    cachedContext = buildContext();
    console.log(`Brief context built successfully (${cachedContext.length} characters, ~${Math.ceil(cachedContext.length / 4)} tokens)`);
  }
  return cachedContext;
}

let llmRequestCount = 0;
let placeholderRequestCount = 0;
let rateLimitErrorCount = 0;
const requestLog = [];
function isRateLimitError(error) {
  if (!error) return false;
  if (error.status === 429 || error.statusCode === 429) return true;
  const errorMessage = error.message || String(error);
  if (errorMessage.includes("429") || errorMessage.includes("Too Many Requests") || errorMessage.includes("quota") || errorMessage.includes("RESOURCE_EXHAUSTED")) {
    return true;
  }
  return false;
}
function extractRetryDelay(error) {
  try {
    const errorMessage = error.message || JSON.stringify(error);
    const retryMatch = errorMessage.match(/retry.*?(\d+(?:\.\d+)?)\s*s/i);
    if (retryMatch) {
      return Math.ceil(parseFloat(retryMatch[1]) * 1e3);
    }
    if (error.details) {
      for (const detail of error.details) {
        if (detail.retryDelay) {
          const seconds = parseFloat(detail.retryDelay);
          return Math.ceil(seconds * 1e3);
        }
      }
    }
  } catch (e) {
  }
  return void 0;
}
function extractCodeFromResponse(text) {
  const codeBlockRegex = /```(?:javascript|js|typescript|ts)?\n?([\s\S]*?)```/;
  const match = text.match(codeBlockRegex);
  if (match && match[1]) {
    return match[1].trim();
  }
  const codeStart = text.indexOf("```");
  if (codeStart !== -1) {
    const codeEnd = text.indexOf("```", codeStart + 3);
    if (codeEnd !== -1) {
      return text.substring(codeStart + 3, codeEnd).trim();
    }
  }
  return text.trim();
}
function extractUrisFromResponse(text, prompt) {
  const jsonArrayRegex = /\["([^"]+)"(?:\s*,\s*"([^"]+)")*\]/;
  const jsonMatch = text.match(jsonArrayRegex);
  if (jsonMatch) {
    const uris2 = [];
    for (let i = 1; i < jsonMatch.length; i++) {
      if (jsonMatch[i]) {
        uris2.push(jsonMatch[i]);
      }
    }
    if (uris2.length > 0) {
      return uris2;
    }
  }
  const urisListRegex = /(?:URIs?|uris?|applies? to):\s*([^\n]+)/i;
  const listMatch = text.match(urisListRegex);
  if (listMatch && listMatch[1]) {
    const uris2 = listMatch[1].split(",").map((uri) => uri.trim()).filter((uri) => uri.startsWith("/"));
    if (uris2.length > 0) {
      return uris2;
    }
  }
  const uris = [];
  if (prompt.toLowerCase().includes("project")) {
    uris.push("/project");
  }
  if (prompt.toLowerCase().includes("all-stars") || prompt.toLowerCase().includes("all stars")) {
    uris.push("/all-stars");
  }
  if (uris.length === 0) {
    uris.push("/project");
    uris.push("/all-stars");
  }
  return uris;
}
function extractJsonFromResponse(text) {
  const jsonObjectRegex = /\{[\s\S]*\}/;
  const jsonMatch = text.match(jsonObjectRegex);
  if (jsonMatch) {
    try {
      return JSON.parse(jsonMatch[0]);
    } catch (e) {
    }
  }
  return null;
}
function generatePlaceholderCode(prompt) {
  const uris = [];
  if (prompt.toLowerCase().includes("project")) {
    uris.push("/project");
  }
  if (prompt.toLowerCase().includes("all-stars") || prompt.toLowerCase().includes("all stars")) {
    uris.push("/all-stars");
  }
  if (uris.length === 0) {
    uris.push("/project");
    uris.push("/all-stars");
  }
  if (prompt.toLowerCase().includes("zoom")) {
    const zoomMatch = prompt.match(/(\d+)%/);
    const defaultZoom = zoomMatch ? parseInt(zoomMatch[1]) : 50;
    return {
      code: `setZoom(${defaultZoom});`,
      uris
    };
  }
  return {
    code: `// Generated code for: ${prompt}
// TODO: Implement based on prompt
console.log('Personalization applied:', '${prompt}');`,
    uris
  };
}
function extractProjectNameFromReadme(readmeContent, gitUrl) {
  if (!readmeContent) return null;
  const patterns = [
    /^#\s+(.+)$/m,
    // # Project Name
    /^##\s+(.+)$/m,
    // ## Project Name
    /^# (.+)$/m,
    // # Project Name (alternative)
    /title[:\s]+(.+)/i,
    // title: Project Name
    /name[:\s]+(.+)/i,
    // name: Project Name
    /^(.+?)\s+[-–—]\s+/m
    // Project Name - Description
  ];
  for (const pattern of patterns) {
    const match = readmeContent.match(pattern);
    if (match && match[1]) {
      const name = match[1].trim();
      if (name.length > 2 && name.length < 100 && !name.toLowerCase().includes("readme") && !name.toLowerCase().includes("license") && !name.toLowerCase().includes("contributing")) {
        return name;
      }
    }
  }
  return null;
}
function formatRepoNameFromUrl(gitUrl) {
  try {
    let repoName = "";
    if (gitUrl.includes("github.com") || gitUrl.includes("gitlab.com")) {
      const match = gitUrl.match(/(?:github\.com|gitlab\.com)[\/:]([^\/]+)\/([^\/\.]+)/);
      if (match && match[2]) {
        repoName = match[2];
      }
    } else {
      const parts = gitUrl.split("/");
      repoName = parts[parts.length - 1] || "";
    }
    repoName = repoName.replace(/\.git$/, "");
    if (!repoName) return "Untitled Project";
    repoName = repoName.replace(/([a-z])([A-Z])/g, "$1 $2");
    repoName = repoName.replace(/[_-]/g, " ");
    repoName = repoName.replace(/\s+/g, " ").trim();
    repoName = repoName.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    return repoName.trim() || "Untitled Project";
  } catch (error) {
    console.error("Error formatting repo name from URL:", error);
    return "Untitled Project";
  }
}
function generatePlaceholderGalaxy(readmeContent, projectMetadata, gitUrl) {
  let name = extractProjectNameFromReadme(readmeContent);
  if (!name) {
    name = projectMetadata?.name || projectMetadata?.repo || null;
  }
  if (!name && gitUrl) {
    name = formatRepoNameFromUrl(gitUrl);
  }
  if (!name) {
    name = "Untitled Project";
  }
  let description = readmeContent.substring(0, 200).trim();
  if (readmeContent.length > 200) {
    description = description.substring(0, description.lastIndexOf(" ")) + "...";
  }
  if (!description) {
    description = "An open-source project";
  }
  const tags = [];
  if (projectMetadata?.language) {
    tags.push(projectMetadata.language);
  } else if (readmeContent.toLowerCase().includes("typescript")) {
    tags.push("TypeScript");
  } else if (readmeContent.toLowerCase().includes("javascript")) {
    tags.push("JavaScript");
  } else if (readmeContent.toLowerCase().includes("python")) {
    tags.push("Python");
  } else if (readmeContent.toLowerCase().includes("rust")) {
    tags.push("Rust");
  } else {
    tags.push("Open Source");
  }
  if (readmeContent.toLowerCase().includes("developer")) {
    tags.push("Developers");
  } else if (readmeContent.toLowerCase().includes("user")) {
    tags.push("Users");
  } else {
    tags.push("Community");
  }
  tags.push("Problem Solving");
  tags.push("Innovation");
  return {
    name,
    description,
    tags: tags.slice(0, 4)
    // Ensure at least 4 tags
  };
}
async function generateCode(params) {
  const { prompt} = params;
  const apiKey = process.env.HUGGINGFACE_API_KEY;
  const requestId = llmRequestCount + placeholderRequestCount + 1;
  const startTime = Date.now();
  if (!apiKey) {
    placeholderRequestCount++;
    const logEntry = {
      requestId,
      timestamp: /* @__PURE__ */ new Date(),
      prompt,
      promptLength: prompt.length,
      status: "placeholder"
    };
    requestLog.push(logEntry);
    if (requestLog.length > 100) {
      requestLog.shift();
    }
    console.warn(`[LLM Debug] Request #${requestId}: HUGGINGFACE_API_KEY not set, using placeholder logic`);
    console.log(`[LLM Stats] Total LLM requests: ${llmRequestCount}, Placeholder requests: ${placeholderRequestCount}, Total: ${llmRequestCount + placeholderRequestCount}`);
    return generatePlaceholderCode(prompt);
  }
  try {
    llmRequestCount++;
    console.log(`[LLM Debug] Request #${requestId}: Starting LLM API call`);
    console.log(`[LLM Debug] Request #${requestId}: Prompt length: ${prompt.length} characters`);
    console.log(`[LLM Stats] Total LLM requests: ${llmRequestCount}, Placeholder requests: ${placeholderRequestCount}, Total: ${llmRequestCount + placeholderRequestCount}`);
    const cachedContext = getCachedContext();
    const contextLength = cachedContext.length;
    console.log(`[LLM Debug] Request #${requestId}: Context length: ${contextLength} characters`);
    const systemMessage = `You are a code generator for React component personalization. You generate JavaScript code that personalizes UI components based on user requests. The code you generate will be executed in a controlled environment with access to specific state variables and setters. Always generate valid, executable JavaScript code.`;
    const userMessage = `${cachedContext}

---

## User Request

${prompt}

## Task

Generate JavaScript code that personalizes the GalaxyLayoutBody component based on the user's request above. 

**Requirements:**
1. Generate valid JavaScript code that can be executed in the component's execution context
2. The code should directly manipulate state using the available setters (e.g., setZoom, setShowDialog, etc.)
3. **IMPORTANT: Do NOT declare variables with names that already exist in the context** (zoom, showDialog, virtualScreenSize, isAllStarsPage, projectId, projectName, initialZoom, minZoom, maxZoom, maxGalaxyContent, window, location, etc.). Use unique variable names for any new variables you create.
4. Extract or infer URIs from the prompt that indicate where this personalization should apply
5. Return the code in a markdown code block (\`\`\`javascript)
6. List the URIs either as a JSON array or in the format "URIs: /path1, /path2"

**Response Format:**
\`\`\`javascript
// Your generated code here
\`\`\`

URIs: /project, /all-stars
`;
    const fullPromptLength = userMessage.length;
    console.log(`[LLM Debug] Request #${requestId}: Full prompt length: ${fullPromptLength} characters`);
    console.log(`[LLM Debug] Request #${requestId}: Calling Hugging Face API with model: meta-llama/Meta-Llama-3-8B-Instruct`);
    const apiCallStartTime = Date.now();
    const apiResponse = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "meta-llama/Meta-Llama-3-8B-Instruct",
        messages: [
          {
            role: "system",
            content: systemMessage
          },
          {
            role: "user",
            content: userMessage
          }
        ],
        max_tokens: 1024,
        temperature: 0.7
      })
    });
    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      throw new Error(`Hugging Face API error (${apiResponse.status}): ${errorText}`);
    }
    const apiData = await apiResponse.json();
    const apiCallEndTime = Date.now();
    const apiResponseTime = apiCallEndTime - apiCallStartTime;
    const responseText = apiData.choices?.[0]?.message?.content || "";
    const responseLength = responseText.length;
    console.log(`[LLM Debug] Request #${requestId}: API response received in ${apiResponseTime}ms`);
    console.log(`[LLM Debug] Request #${requestId}: Response length: ${responseLength} characters`);
    if (!responseText) {
      placeholderRequestCount++;
      const logEntry2 = {
        requestId,
        timestamp: /* @__PURE__ */ new Date(),
        prompt,
        promptLength: prompt.length,
        status: "error",
        responseTime: apiResponseTime,
        error: "Empty response from Hugging Face API"
      };
      requestLog.push(logEntry2);
      if (requestLog.length > 100) {
        requestLog.shift();
      }
      console.error(`[LLM Debug] Request #${requestId}: Empty response from Hugging Face API, using placeholder`);
      console.log(`[LLM Stats] Total LLM requests: ${llmRequestCount}, Placeholder requests: ${placeholderRequestCount}, Total: ${llmRequestCount + placeholderRequestCount}`);
      return generatePlaceholderCode(prompt);
    }
    const code = extractCodeFromResponse(responseText);
    const uris = extractUrisFromResponse(responseText, prompt);
    if (!code || code.length === 0) {
      placeholderRequestCount++;
      const logEntry2 = {
        requestId,
        timestamp: /* @__PURE__ */ new Date(),
        prompt,
        promptLength: prompt.length,
        status: "error",
        responseTime: apiResponseTime,
        error: "No code extracted from Hugging Face response"
      };
      requestLog.push(logEntry2);
      if (requestLog.length > 100) {
        requestLog.shift();
      }
      console.error(`[LLM Debug] Request #${requestId}: No code extracted from Hugging Face response, using placeholder`);
      console.log(`[LLM Stats] Total LLM requests: ${llmRequestCount}, Placeholder requests: ${placeholderRequestCount}, Total: ${llmRequestCount + placeholderRequestCount}`);
      return generatePlaceholderCode(prompt);
    }
    const totalTime = Date.now() - startTime;
    const logEntry = {
      requestId,
      timestamp: /* @__PURE__ */ new Date(),
      prompt,
      promptLength: prompt.length,
      status: "success",
      responseTime: totalTime
    };
    requestLog.push(logEntry);
    if (requestLog.length > 100) {
      requestLog.shift();
    }
    console.log(`[LLM Debug] Request #${requestId}: Successfully generated code in ${totalTime}ms (API: ${apiResponseTime}ms)`);
    console.log(`[LLM Debug] Request #${requestId}: Generated code length: ${code.length} characters, URIs: ${uris.length}`);
    console.log(`[LLM Stats] Total LLM requests: ${llmRequestCount}, Placeholder requests: ${placeholderRequestCount}, Total: ${llmRequestCount + placeholderRequestCount}`);
    return {
      code: code.trim(),
      uris
    };
  } catch (error) {
    placeholderRequestCount++;
    const totalTime = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : String(error);
    const isRateLimit = isRateLimitError(error);
    const retryAfter = isRateLimit ? extractRetryDelay(error) : void 0;
    if (isRateLimit) {
      rateLimitErrorCount++;
      console.error(`[LLM Debug] Request #${requestId}: ⚠️ RATE LIMIT ERROR (429) - Quota exceeded`);
      console.error(`[LLM Debug] Request #${requestId}: Error details:`, errorMessage.substring(0, 500));
      if (retryAfter) {
        const retryAfterSeconds = Math.ceil(retryAfter / 1e3);
        console.error(`[LLM Debug] Request #${requestId}: Retry after: ${retryAfterSeconds} seconds (${Math.ceil(retryAfterSeconds / 60)} minutes)`);
      }
      console.error(`[LLM Debug] Request #${requestId}: Free tier quota limits:`);
      console.error(`  - Input tokens per minute: EXCEEDED`);
      console.error(`  - Requests per minute: EXCEEDED`);
      console.error(`  - Requests per day: EXCEEDED`);
      console.error(`[LLM Debug] Request #${requestId}: Falling back to placeholder logic`);
      console.error(`[LLM Debug] Request #${requestId}: To fix: Wait for quota reset or upgrade your plan`);
      console.error(`[LLM Debug] Request #${requestId}: Monitor usage: https://ai.dev/usage?tab=rate-limit`);
      const logEntry = {
        requestId,
        timestamp: /* @__PURE__ */ new Date(),
        prompt,
        promptLength: prompt.length,
        status: "rate_limit",
        responseTime: totalTime,
        error: `Rate limit (429): ${errorMessage.substring(0, 200)}`,
        retryAfter
      };
      requestLog.push(logEntry);
      if (requestLog.length > 100) {
        requestLog.shift();
      }
    } else {
      const logEntry = {
        requestId,
        timestamp: /* @__PURE__ */ new Date(),
        prompt,
        promptLength: prompt.length,
        status: "error",
        responseTime: totalTime,
        error: errorMessage
      };
      requestLog.push(logEntry);
      if (requestLog.length > 100) {
        requestLog.shift();
      }
      console.error(`[LLM Debug] Request #${requestId}: Error calling Hugging Face API after ${totalTime}ms:`, error);
    }
    console.log(`[LLM Stats] Total LLM requests: ${llmRequestCount}, Placeholder requests: ${placeholderRequestCount}, Rate limit errors: ${rateLimitErrorCount}, Total: ${llmRequestCount + placeholderRequestCount}`);
    return generatePlaceholderCode(prompt);
  }
}
async function generateGalaxy(params) {
  const { readmeContent, projectMetadata, gitUrl } = params;
  const apiKey = process.env.HUGGINGFACE_API_KEY;
  const requestId = llmRequestCount + placeholderRequestCount + 1;
  const startTime = Date.now();
  const limitedReadme = readmeContent.substring(0, 200).trim();
  if (!apiKey) {
    placeholderRequestCount++;
    const logEntry = {
      requestId,
      timestamp: /* @__PURE__ */ new Date(),
      prompt: "Generate galaxy from README",
      promptLength: limitedReadme.length,
      status: "placeholder"
    };
    requestLog.push(logEntry);
    if (requestLog.length > 100) {
      requestLog.shift();
    }
    console.warn(`[LLM Debug] Request #${requestId}: HUGGINGFACE_API_KEY not set, using placeholder logic for galaxy generation`);
    return generatePlaceholderGalaxy(readmeContent, projectMetadata, gitUrl);
  }
  try {
    llmRequestCount++;
    console.log(`[LLM Debug] Request #${requestId}: Starting LLM API call for galaxy generation`);
    console.log(`[LLM Debug] Request #${requestId}: README length: ${readmeContent.length} characters (limited to 200 for description)`);
    const systemMessage = `You are an AI assistant that analyzes open-source projects and generates appropriate names, descriptions, and tags for galaxy representations. A galaxy represents an open-source project in the Ara platform.`;
    const extractedName = extractProjectNameFromReadme(readmeContent, gitUrl);
    const formattedRepoName = gitUrl ? formatRepoNameFromUrl(gitUrl) : null;
    const suggestedName = extractedName || formattedRepoName || projectMetadata.name || projectMetadata.repo || "Unknown";
    const userMessage = `Analyze the following project information and generate a galaxy representation:

## Project Metadata
- Git URL: ${gitUrl || "N/A"}
- Repository: ${projectMetadata.repo || "Unknown"}
- Suggested Name: ${suggestedName}
- Language: ${projectMetadata.language || "Unknown"}
- Description: ${projectMetadata.description || "N/A"}

## README Content (first 200 characters)
${limitedReadme}

## Task

Generate a JSON object with the following structure:
\`\`\`json
{
  "name": "Project Name (short, descriptive)",
  "description": "Brief description (max 200 characters, based on README)",
  "tags": [
    "language-or-framework-tag",
    "target-users-tag",
    "pain-point-tag",
    "solution-tag"
  ]
}
\`\`\`

**Requirements:**
1. **Name**: Short, descriptive name for the project. Priority:
   - First, try to find the project name mentioned in the README content
   - If not found, use the suggested name based on Git URL (formatted from repository name)
   - The name should be clear, readable, and properly formatted (spaces instead of underscores, hyphens, or camelCase)
2. **Description**: Maximum 200 characters, extracted/summarized from README content. Should be clear and informative.
3. **Tags**: Exactly 4 tags minimum:
   - At least one tag for the project's language or framework (e.g., "TypeScript", "React", "Python", "Rust")
   - At least one tag for target users (e.g., "Developers", "Users", "Community", "Enterprises")
   - At least one tag for pain point (e.g., "Problem Solving", "Efficiency", "Security", "Scalability")
   - At least one tag for solution (e.g., "Innovation", "Automation", "Tool", "Library")

**Response Format:**
Return only valid JSON, no additional text.`;
    const apiCallStartTime = Date.now();
    const apiResponse = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "meta-llama/Meta-Llama-3-8B-Instruct",
        messages: [
          {
            role: "system",
            content: systemMessage
          },
          {
            role: "user",
            content: userMessage
          }
        ],
        max_tokens: 512,
        temperature: 0.7
      })
    });
    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      throw new Error(`Hugging Face API error (${apiResponse.status}): ${errorText}`);
    }
    const apiData = await apiResponse.json();
    const apiCallEndTime = Date.now();
    const apiResponseTime = apiCallEndTime - apiCallStartTime;
    const responseText = apiData.choices?.[0]?.message?.content || "";
    console.log(`[LLM Debug] Request #${requestId}: API response received in ${apiResponseTime}ms`);
    if (!responseText) {
      placeholderRequestCount++;
      console.error(`[LLM Debug] Request #${requestId}: Empty response from Hugging Face API, using placeholder`);
      return generatePlaceholderGalaxy(readmeContent, projectMetadata, gitUrl);
    }
    const jsonData = extractJsonFromResponse(responseText);
    if (jsonData && jsonData.name && jsonData.description && Array.isArray(jsonData.tags)) {
      const description = jsonData.description.substring(0, 200).trim();
      const tags = jsonData.tags.length >= 4 ? jsonData.tags.slice(0, 4) : [...jsonData.tags, ...generatePlaceholderGalaxy(readmeContent, projectMetadata, gitUrl).tags].slice(0, 4);
      const totalTime = Date.now() - startTime;
      const logEntry = {
        requestId,
        timestamp: /* @__PURE__ */ new Date(),
        prompt: "Generate galaxy from README",
        promptLength: limitedReadme.length,
        status: "success",
        responseTime: totalTime
      };
      requestLog.push(logEntry);
      if (requestLog.length > 100) {
        requestLog.shift();
      }
      console.log(`[LLM Debug] Request #${requestId}: Successfully generated galaxy in ${totalTime}ms (API: ${apiResponseTime}ms)`);
      return {
        name: jsonData.name,
        description,
        tags
      };
    }
    placeholderRequestCount++;
    console.error(`[LLM Debug] Request #${requestId}: Failed to extract valid JSON from response, using placeholder`);
    return generatePlaceholderGalaxy(readmeContent, projectMetadata, gitUrl);
  } catch (error) {
    placeholderRequestCount++;
    const totalTime = Date.now() - startTime;
    error instanceof Error ? error.message : String(error);
    const isRateLimit = isRateLimitError(error);
    if (isRateLimit) {
      rateLimitErrorCount++;
      console.error(`[LLM Debug] Request #${requestId}: ⚠️ RATE LIMIT ERROR (429) - Quota exceeded`);
    } else {
      console.error(`[LLM Debug] Request #${requestId}: Error calling Hugging Face API after ${totalTime}ms:`, error);
    }
    return generatePlaceholderGalaxy(readmeContent, projectMetadata, gitUrl);
  }
}

const server$6 = {
  /**
   * Analyze Git repository (validate, detect provider, fetch metadata, detect license, discover links, build dependency tree)
   */
  analyzeGitRepository: defineAction({
    input: objectType({
      gitUrl: stringType().min(1),
      userId: stringType()
    }),
    handler: async ({ gitUrl, userId }) => {
      try {
        const normalizedUrl = normalizeGitUrl(gitUrl);
        const isDuplicate = await checkDuplicateRepository(normalizedUrl);
        if (isDuplicate) {
          return {
            success: false,
            error: "This repository has already been added"
          };
        }
        const providerInfo = detectGitProvider(normalizedUrl);
        if (!providerInfo) {
          return {
            success: false,
            error: "Invalid or unsupported Git URL. Only GitHub and GitLab are supported."
          };
        }
        let metadata = await fetchRepositoryMetadata(
          providerInfo.provider,
          providerInfo.owner,
          providerInfo.repo,
          providerInfo.host
        );
        if (!metadata && process.env.NODE_ENV !== "production") {
          console.warn("GitHub API rate limit exceeded (403). Using mocked repository data in development.");
          return {
            success: true,
            data: {
              ...mockRepositoryAnalysis,
              gitUrl: normalizedUrl,
              provider: providerInfo.provider,
              owner: providerInfo.owner,
              repo: providerInfo.repo,
              host: providerInfo.host
            }
          };
        }
        if (!metadata) {
          return {
            success: false,
            error: "Failed to fetch repository metadata. Please ensure the repository is public and accessible."
          };
        }
        if (metadata.visibility !== "public") {
          return {
            success: false,
            error: "Only public repositories are supported in Phase 1."
          };
        }
        const licenseInfo = await detectLicense(
          providerInfo.provider,
          providerInfo.owner,
          providerInfo.repo,
          metadata,
          providerInfo.host
        );
        const projectLinks = await discoverProjectLinks(
          providerInfo.provider,
          providerInfo.owner,
          providerInfo.repo,
          metadata,
          providerInfo.host
        );
        const dependencyTree = {
          dependencies: [],
          source: "pending",
          completeness: "direct-only"
        };
        return {
          success: true,
          data: {
            gitUrl: normalizedUrl,
            metadata,
            license: licenseInfo,
            // undefined if not found
            projectLinks,
            dependencyTree,
            ...providerInfo
          }
        };
      } catch (error) {
        console.error("Error analyzing Git repository:", error);
        return {
          success: false,
          error: error instanceof Error ? error.message : "Failed to analyze repository"
        };
      }
    }
  }),
  /**
   * Create galaxy from Git repository
   */
  createGalaxyFromGit: defineAction({
    input: objectType({
      gitUrl: stringType(),
      provider: enumType(["github", "gitlab"]),
      owner: stringType(),
      repo: stringType(),
      host: stringType().optional(),
      metadata: objectType({
        lastCommitId: stringType(),
        lastCommitTimestamp: numberType(),
        totalCommits: numberType(),
        visibility: enumType(["public", "private"]),
        defaultBranch: stringType(),
        name: stringType().optional(),
        description: stringType().optional(),
        language: stringType().optional(),
        homepage: stringType().optional(),
        topics: arrayType(stringType()).optional()
      }),
      license: objectType({
        license: stringType().optional(),
        confidence: numberType(),
        source: stringType()
      }),
      projectLinks: objectType({
        homepage: stringType().optional(),
        documentation: stringType().optional(),
        packageLinks: arrayType(stringType()).optional()
      }),
      dependencyTree: objectType({
        dependencies: arrayType(anyType()),
        source: stringType(),
        completeness: enumType(["full", "partial", "direct-only"])
      }),
      userId: stringType(),
      readmeContent: stringType().optional()
    }),
    handler: async ({ gitUrl, provider, owner, repo, host, metadata, license, projectLinks, dependencyTree, userId, readmeContent }) => {
      try {
        const star = await getStarByUserId(userId);
        if (!star || !star._id) {
          return {
            success: false,
            error: "User not found"
          };
        }
        const now = Math.floor(Date.now() / 1e3);
        const socialLinks = [
          {
            label: provider === "github" ? "GitHub" : "GitLab",
            uri: gitUrl,
            type: provider
          },
          ...projectLinks.homepage ? [{
            label: "Homepage",
            uri: projectLinks.homepage,
            type: "project"
          }] : [],
          ...projectLinks.documentation ? [{
            label: "Documentation",
            uri: projectLinks.documentation,
            type: "documentation"
          }] : []
        ];
        let readmeContentToStore = readmeContent || "";
        let readmeUrlToStore = void 0;
        let readmeUpdateTimeToStore = void 0;
        if (!readmeContent) {
          const { fetchReadmeContent } = await import('./chunks/git-repository_D3VT2d75.mjs');
          const readmeResult = await fetchReadmeContent({
            gitUrl,
            provider,
            owner,
            repo,
            host,
            metadata,
            license,
            projectLinks,
            dependencyTree
          });
          readmeContentToStore = readmeResult.content || "";
          readmeUrlToStore = readmeResult.url || void 0;
        } else {
          if (provider === "github") {
            readmeUrlToStore = `https://raw.githubusercontent.com/${owner}/${repo}/${metadata.defaultBranch}/README.md`;
          } else if (provider === "gitlab") {
            const baseUrl = host ? `https://${host}` : "https://gitlab.com";
            const encodedPath = encodeURIComponent(`${owner}/${repo}`);
            readmeUrlToStore = `${baseUrl}/api/v4/projects/${encodedPath}/repository/files/README.md/raw?ref=${metadata.defaultBranch}`;
          }
        }
        if (readmeContentToStore) {
          readmeUpdateTimeToStore = now;
        }
        const projectData = {
          forkLines: [],
          socialLinks,
          createdAt: now,
          lastCommitId: metadata.lastCommitId,
          lastCommitUpdateTime: metadata.lastCommitTimestamp,
          license: license.license,
          // Extract license string from LicenseInfo object
          totalCommits: metadata.totalCommits,
          branchName: metadata.defaultBranch,
          // Store default branch name
          readmeContent: readmeContentToStore || void 0,
          readmeUpdateTime: readmeUpdateTimeToStore,
          readmeUrl: readmeUrlToStore
        };
        const projectId = await getOrCreateProject(projectData);
        await buildDependencyTree(
          provider,
          owner,
          repo,
          projectId,
          gitUrl,
          host
        );
        const readme = readmeContent || metadata.description || "";
        const generatedGalaxy = await generateGalaxy({
          readmeContent: readme,
          projectMetadata: {
            name: metadata.name || repo,
            repo,
            language: metadata.language,
            description: metadata.description
          },
          gitUrl
        });
        const galaxyData = {
          maintainer: star._id.toString(),
          projectLink: projectId,
          name: generatedGalaxy.name,
          description: generatedGalaxy.description,
          stars: 0,
          sunshines: 0,
          users: 0,
          donationAmount: 0,
          x: 0,
          y: 0,
          tags: generatedGalaxy.tags
        };
        const galaxyId = await createGalaxy(galaxyData);
        if (!galaxyId) {
          return {
            success: false,
            error: "Failed to create galaxy"
          };
        }
        galaxyData._id = galaxyId;
        return {
          success: true,
          data: galaxyData
        };
      } catch (error) {
        console.error("Error creating galaxy from Git:", error);
        return {
          success: false,
          error: error instanceof Error ? error.message : "Failed to create galaxy"
        };
      }
    }
  }),
  /**
   * Create blockchain transaction for galaxy
   */
  createGalaxyBlockchainTransaction: defineAction({
    input: objectType({
      galaxyId: stringType(),
      userId: stringType()
    }),
    handler: async ({ galaxyId, userId }) => {
      try {
        const star = await getStarByUserId(userId);
        if (!star || !star._id || !star.demoPrivateKey) {
          return {
            success: false,
            error: "Can not create blockchain transaction, user id invalid or missing private key"
          };
        }
        const galaxy = await getGalaxyById(galaxyId);
        if (!galaxy) {
          return {
            success: false,
            error: 'Can not create blockchain transaction, galaxy id invalid: "' + galaxyId + '"'
          };
        }
        if (galaxy.blockchainId) {
          return {
            success: true,
            data: {
              blockchainId: galaxy.blockchainId,
              blockchainTx: galaxy.blockchainTx
            }
          };
        }
        const project = await getProjectById(galaxy.projectLink);
        if (!project) {
          return {
            success: false,
            error: "Can not create blockchain transaction, project not found"
          };
        }
        const maintainerWallet = new Wallet(star.demoPrivateKey);
        const maintainerAddress = maintainerWallet.address;
        const randomWallet = Wallet.createRandom();
        const address20Bytes = randomWallet.address;
        const galaxyId32Bytes = `0x${address20Bytes.slice(2).padStart(64, "0")}`;
        const repoUrl = project.socialLinks?.find(
          (link) => link.type === "github" || link.type === "gitlab"
        )?.uri || "";
        const issuesUrl = `https://app.ara.foundation/project/issues?galaxy=${galaxyId}`;
        const request = {
          cmd: "addGalaxy",
          params: {
            owner: maintainerAddress,
            repoUrl,
            issuesUrl,
            name: galaxy.name,
            id: galaxyId32Bytes,
            minX: galaxy.x,
            maxX: galaxy.x + 100,
            minY: galaxy.y,
            maxY: galaxy.y + 100
          }
        };
        const reply = await send(request);
        if ("error" in reply) {
          const errorReply = reply;
          return {
            success: false,
            error: `Crypto-sockets error while creating blockchain transaction: ${errorReply.error}`
          };
        }
        const successReply = reply;
        const collection = await getCollection("galaxies");
        await collection.updateOne(
          { _id: new ObjectId(galaxyId) },
          {
            $set: {
              blockchainId: galaxyId32Bytes,
              blockchainTx: successReply.params.txHash
            }
          }
        );
        return {
          success: true,
          data: {
            blockchainId: galaxyId32Bytes,
            blockchainTx: successReply.params.txHash
          }
        };
      } catch (error) {
        console.error("Error creating blockchain transaction:", error);
        return {
          success: false,
          error: error instanceof Error ? error.message : "Failed to create blockchain transaction"
        };
      }
    }
  }),
  /**
   * Update project README content
   */
  updateProjectReadme: defineAction({
    input: objectType({
      projectId: stringType(),
      userId: stringType()
    }),
    handler: async ({ projectId, userId }) => {
      try {
        const project = await getProjectById(projectId);
        if (!project) {
          return {
            success: false,
            error: "Project not found"
          };
        }
        const collection = await getCollection("galaxies");
        const galaxy = await collection.findOne({ projectLink: new ObjectId(projectId) });
        if (!galaxy) {
          return {
            success: false,
            error: "Galaxy not found for this project"
          };
        }
        const star = await getStarByUserId(userId);
        if (!star || !star._id) {
          return {
            success: false,
            error: "User not found"
          };
        }
        console.log("update project readme, todo verify user is the maintainer");
        const gitLink = project.socialLinks.find((link) => link.type === "github" || link.type === "gitlab");
        if (!gitLink) {
          return {
            success: false,
            error: "No Git repository link found for this project"
          };
        }
        const gitUrl = gitLink.uri;
        const provider = gitLink.type;
        let owner = "";
        let repo = "";
        let host = void 0;
        if (provider === "github") {
          const match = gitUrl.match(/github\.com[\/:]([^\/]+)\/([^\/\.]+)/);
          if (match) {
            owner = match[1];
            repo = match[2].replace(/\.git$/, "");
          }
        } else if (provider === "gitlab") {
          const urlObj = new URL(gitUrl);
          host = urlObj.hostname;
          const match = gitUrl.match(/gitlab\.com[\/:]([^\/]+)\/([^\/\.]+)/) || gitUrl.match(/\/([^\/]+)\/([^\/\.]+)\.git/);
          if (match) {
            owner = match[1];
            repo = match[2].replace(/\.git$/, "");
          }
        }
        if (!owner || !repo) {
          return {
            success: false,
            error: "Could not parse Git repository information"
          };
        }
        const metadata = await fetchRepositoryMetadata(provider, owner, repo, host);
        if (!metadata) {
          return {
            success: false,
            error: "Could not fetch repository metadata"
          };
        }
        const { fetchReadmeContent } = await import('./chunks/git-repository_D3VT2d75.mjs');
        const readmeResult = await fetchReadmeContent({
          gitUrl,
          provider,
          owner,
          repo,
          host,
          metadata: {
            lastCommitId: metadata.lastCommitId,
            lastCommitTimestamp: metadata.lastCommitTimestamp,
            totalCommits: metadata.totalCommits,
            visibility: metadata.visibility,
            defaultBranch: metadata.defaultBranch,
            name: metadata.name,
            description: metadata.description,
            language: metadata.language,
            homepage: metadata.homepage,
            topics: metadata.topics
          },
          license: { license: project.license, confidence: 1, source: "database" },
          projectLinks: {
            homepage: project.socialLinks.find((l) => l.type === "project")?.uri,
            documentation: project.socialLinks.find((l) => l.type === "documentation")?.uri
          },
          dependencyTree: { dependencies: [], source: "", completeness: "direct-only" }
        });
        const now = Math.floor(Date.now() / 1e3);
        const projectCollection = await getCollection("projects");
        await projectCollection.updateOne(
          { _id: new ObjectId(projectId) },
          {
            $set: {
              readmeContent: readmeResult.content || void 0,
              readmeUpdateTime: readmeResult.content ? now : void 0,
              readmeUrl: readmeResult.url || void 0
            }
          }
        );
        const updatedProject = await getProjectById(projectId);
        if (!updatedProject) {
          return {
            success: false,
            error: "Failed to fetch updated project"
          };
        }
        return {
          success: true,
          data: updatedProject
        };
      } catch (error) {
        console.error("Error updating project README:", error);
        return {
          success: false,
          error: error instanceof Error ? error.message : "Failed to update README"
        };
      }
    }
  }),
  /**
   * Update galaxy coordinates (x, y) in the universe
   */
  updateGalaxyCoordinates: defineAction({
    input: objectType({
      galaxyId: stringType(),
      userId: stringType(),
      x: numberType().optional(),
      y: numberType().optional()
    }),
    handler: async ({ galaxyId, userId, x, y }) => {
      try {
        if (!userId) {
          return {
            success: false,
            x: 0,
            y: 0,
            order: 0,
            error: "User not authenticated"
          };
        }
        const userStar = await getStarByUserId(userId);
        if (!userStar || !userStar._id) {
          return {
            success: false,
            x: 0,
            y: 0,
            order: 0,
            error: "User not found"
          };
        }
        const galaxy = await getGalaxyById(galaxyId);
        if (!galaxy) {
          return {
            success: false,
            x: 0,
            y: 0,
            order: 0,
            error: "Galaxy not found"
          };
        }
        if (galaxy.maintainer !== userStar._id.toString()) {
          return {
            success: false,
            x: 0,
            y: 0,
            order: 0,
            error: "Only the maintainer can update galaxy coordinates"
          };
        }
        let newX = x;
        let newY = y;
        if (newX === void 0 || newY === void 0) {
          if (galaxy.x === 0 && galaxy.y === 0) {
            newX = Math.floor(Math.random() * 1600) + 200;
            newY = Math.floor(Math.random() * 1600) + 200;
          } else {
            newX = galaxy.x;
            newY = galaxy.y;
          }
        }
        const history = await getGalaxyPositionHistory$1(galaxyId);
        const nextOrder = history.length > 0 ? Math.max(...history.map((h) => h.order)) + 1 : 1;
        const updated = await updateGalaxyPosition(galaxyId, newX, newY);
        if (!updated) {
          return {
            success: false,
            x: newX,
            y: newY,
            order: nextOrder,
            error: "Failed to update galaxy position in database"
          };
        }
        let txId;
        if (galaxy.blockchainId) {
          try {
            console.log(`Galaxy ${galaxyId} has blockchainId ${galaxy.blockchainId}, but blockchain update not yet implemented for galaxy coordinates`);
          } catch (error) {
            console.error("Error calling blockchain for galaxy coordinates:", error);
          }
        }
        try {
          await createGalaxyPositionTracer({
            galaxyId,
            x: newX,
            y: newY,
            txId,
            order: nextOrder
          });
        } catch (error) {
          console.error("Error creating galaxy position tracer:", error);
        }
        return {
          success: true,
          txId,
          order: nextOrder,
          x: newX,
          y: newY
        };
      } catch (error) {
        console.error("Error updating galaxy coordinates:", error);
        return {
          success: false,
          x: 0,
          y: 0,
          order: 0,
          error: error instanceof Error ? error.message : "Failed to update galaxy coordinates"
        };
      }
    }
  })
};

const server$5 = {
  getVersionsByGalaxy: defineAction({
    input: objectType({
      galaxyId: stringType()
    }),
    handler: async ({ galaxyId }) => {
      try {
        const versions = await getVersionsByGalaxy(galaxyId);
        return {
          success: true,
          versions
        };
      } catch (error) {
        console.error("Error getting versions by galaxy:", error);
        return {
          success: false,
          error: "An error occurred while getting versions"
        };
      }
    }
  }),
  getVersionById: defineAction({
    input: objectType({
      versionId: stringType()
    }),
    handler: async ({ versionId }) => {
      try {
        const version = await getVersionById(versionId);
        if (!version) {
          return {
            success: false,
            error: "Version not found"
          };
        }
        return {
          success: true,
          version
        };
      } catch (error) {
        console.error("Error getting version by id:", error);
        return {
          success: false,
          error: "An error occurred while getting version"
        };
      }
    }
  }),
  updateVersionStatus: defineAction({
    input: objectType({
      versionId: stringType(),
      status: enumType(["complete", "testing", "release", "archived"])
    }),
    handler: async ({ versionId, status }) => {
      try {
        const updated = await updateVersionStatus(versionId, status);
        if (!updated) {
          return {
            success: false,
            error: "Failed to update version status"
          };
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error updating version status:", error);
        return {
          success: false,
          error: "An error occurred while updating version status"
        };
      }
    }
  }),
  revertPatch: defineAction({
    input: objectType({
      galaxyId: stringType(),
      versionTag: stringType(),
      issueId: stringType()
    }),
    handler: async ({ galaxyId, versionTag, issueId }) => {
      try {
        const reverted = await revertPatch(galaxyId, versionTag, issueId);
        if (!reverted) {
          return {
            success: false,
            error: "Failed to revert patch"
          };
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error reverting patch:", error);
        return {
          success: false,
          error: "An error occurred while reverting patch"
        };
      }
    }
  }),
  createVersion: defineAction({
    input: objectType({
      galaxyId: stringType(),
      tag: stringType()
    }),
    handler: async ({ galaxyId, tag }, { request }) => {
      try {
        const session = await auth.api.getSession({
          headers: request.headers
        });
        if (!session || !session.user) {
          return {
            success: false,
            error: "Authentication required. Please log in to create a version"
          };
        }
        const authenticatedUserId = session.user.id;
        const authenticatedUserStar = await getStarByUserId(authenticatedUserId);
        if (!authenticatedUserStar || !authenticatedUserStar._id) {
          return {
            success: false,
            error: "User profile not found. Please ensure your account is set up correctly."
          };
        }
        const newVersion = {
          galaxy: galaxyId,
          tag: tag.trim(),
          createdTime: Math.floor(Date.now() / 1e3),
          status: "complete",
          patches: [],
          maintainer: authenticatedUserStar._id.toString()
        };
        const created = await createVersion(newVersion);
        if (!created) {
          return {
            success: false,
            error: "Failed to create version"
          };
        }
        const versions = await getVersionsByGalaxy(galaxyId);
        const createdVersion = versions.find((v) => v.tag === tag.trim());
        return {
          success: true,
          version: createdVersion
        };
      } catch (error) {
        console.error("Error creating version:", error);
        return {
          success: false,
          error: "An error occurred while creating version"
        };
      }
    }
  }),
  updatePatches: defineAction({
    input: objectType({
      versionId: stringType(),
      patches: arrayType(objectType({
        id: stringType(),
        completed: booleanType(),
        tested: booleanType().optional(),
        title: stringType()
      }))
    }),
    handler: async ({ versionId, patches }) => {
      try {
        const updated = await updatePatches(versionId, patches);
        if (!updated) {
          return {
            success: false,
            error: "Failed to update patches"
          };
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error updating patches:", error);
        return {
          success: false,
          error: "An error occurred while updating patches"
        };
      }
    }
  }),
  removePatch: defineAction({
    input: objectType({
      patchId: stringType(),
      versionId: stringType()
    }),
    handler: async ({ patchId, versionId }) => {
      try {
        const removed = await removePatch(patchId, versionId);
        if (!removed) {
          return {
            success: false,
            error: "Failed to remove patch"
          };
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error removing patch:", error);
        return {
          success: false,
          error: "An error occurred while removing patch"
        };
      }
    }
  }),
  completePatch: defineAction({
    input: objectType({
      versionId: stringType(),
      patchId: stringType(),
      complete: booleanType()
    }),
    handler: async ({ versionId, patchId, complete }) => {
      try {
        const updated = await completePatch(versionId, patchId, complete);
        if (!updated) {
          return {
            success: false,
            error: "Failed to update patch completion status"
          };
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error completing patch:", error);
        return {
          success: false,
          error: "An error occurred while updating patch completion status"
        };
      }
    }
  }),
  testPatch: defineAction({
    input: objectType({
      versionId: stringType(),
      patchId: stringType(),
      tested: booleanType()
    }),
    handler: async ({ versionId, patchId, tested }) => {
      try {
        const updated = await testPatch(versionId, patchId, tested);
        if (!updated) {
          return {
            success: false,
            error: "Failed to update patch tested status"
          };
        }
        return {
          success: true
        };
      } catch (error) {
        console.error("Error updating patch tested status:", error);
        return {
          success: false,
          error: "An error occurred while updating patch tested status"
        };
      }
    }
  })
};

const server$4 = {
  getDonationsByGalaxyId: defineAction({
    input: objectType({
      galaxyId: stringType()
    }),
    handler: async ({ galaxyId }) => {
      try {
        const donations = await getDonationsByGalaxyId(galaxyId);
        return {
          success: true,
          data: donations
        };
      } catch (error) {
        console.error("Error getting donations by galaxy id:", error);
        return {
          success: false,
          error: "An error occurred while getting donations"
        };
      }
    }
  })
};

async function createPersonalization(personalization) {
  try {
    const collection = await getCollection("personalizations");
    const doc = {
      context: personalization.context,
      userId: new ObjectId(personalization.userId),
      code: personalization.code,
      prompt: personalization.prompt,
      createdTime: /* @__PURE__ */ new Date(),
      uris: personalization.uris
    };
    const result = await collection.insertOne(doc);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error creating personalization:", error);
    throw error;
  }
}
async function getPersonalizationsByUserAndContext(userId, context) {
  try {
    const collection = await getCollection("personalizations");
    const results = await collection.find({
      userId: new ObjectId(userId),
      context
    }).toArray();
    return results.map((doc) => ({
      _id: doc._id?.toString(),
      context: doc.context,
      userId: doc.userId.toString(),
      code: doc.code,
      prompt: doc.prompt,
      createdTime: doc.createdTime,
      uris: doc.uris
    }));
  } catch (error) {
    console.error("Error getting personalizations:", error);
    return [];
  }
}
async function updatePersonalization(personalizationId, updates) {
  try {
    const collection = await getCollection("personalizations");
    const updateDoc = {};
    if (updates.code !== void 0) updateDoc.code = updates.code;
    if (updates.prompt !== void 0) updateDoc.prompt = updates.prompt;
    if (updates.uris !== void 0) updateDoc.uris = updates.uris;
    const result = await collection.updateOne(
      { _id: new ObjectId(personalizationId) },
      { $set: updateDoc }
    );
    if (result.matchedCount === 0) {
      console.error("Personalization not found for update:", personalizationId);
      return false;
    }
    console.log("Personalization update result:", {
      personalizationId,
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount,
      updates
    });
    return result.matchedCount > 0;
  } catch (error) {
    console.error("Error updating personalization:", error);
    return false;
  }
}
async function deletePersonalization(personalizationId) {
  try {
    const collection = await getCollection("personalizations");
    await collection.deleteOne({ _id: new ObjectId(personalizationId) });
    return true;
  } catch (error) {
    console.error("Error deleting personalization:", error);
    return false;
  }
}

const server$3 = {
  /**
   * Generate personalization code from prompt
   */
  generatePersonalizationCode: defineAction({
    input: objectType({
      prompt: stringType().min(1),
      context: stringType(),
      componentStructure: arrayType(stringType()),
      userId: stringType()
    }),
    handler: async ({ prompt, context, componentStructure, userId }) => {
      try {
        const result = await generateCode({ prompt, context, componentStructure });
        return {
          success: true,
          code: result.code,
          uris: result.uris
        };
      } catch (error) {
        console.error("Error generating code:", error);
        return {
          success: false,
          error: "Failed to generate code"
        };
      }
    }
  }),
  /**
   * Save personalization to database (create or update)
   */
  savePersonalization: defineAction({
    input: objectType({
      context: stringType(),
      code: stringType(),
      prompt: stringType(),
      uris: arrayType(stringType()),
      userId: stringType(),
      personalizationId: stringType().optional()
    }),
    handler: async ({ context, code, prompt, uris, userId, personalizationId }) => {
      try {
        const user = await getStarByUserId(userId);
        if (!user || !user._id) {
          return {
            success: false,
            error: "User not found"
          };
        }
        if (personalizationId) {
          const updated = await updatePersonalization(personalizationId, {
            code,
            prompt,
            uris
          });
          if (updated) {
            return {
              success: true,
              personalizationId
            };
          } else {
            return {
              success: false,
              error: "Failed to update personalization"
            };
          }
        } else {
          const newId = await createPersonalization({
            context,
            userId: user._id,
            code,
            prompt,
            uris
          });
          return {
            success: true,
            personalizationId: newId
          };
        }
      } catch (error) {
        console.error("Error saving personalization:", error);
        return {
          success: false,
          error: "Failed to save personalization"
        };
      }
    }
  }),
  /**
   * Get personalizations for user and context
   */
  getPersonalizations: defineAction({
    input: objectType({
      context: stringType(),
      userId: stringType()
    }),
    handler: async ({ context, userId }) => {
      try {
        const user = await getStarByUserId(userId);
        if (!user || !user._id) {
          return {
            success: false,
            error: "User not found",
            data: []
          };
        }
        const personalizations = await getPersonalizationsByUserAndContext(
          user._id,
          context
        );
        return {
          success: true,
          data: personalizations
        };
      } catch (error) {
        console.error("Error getting personalizations:", error);
        return {
          success: false,
          error: "Failed to get personalizations",
          data: []
        };
      }
    }
  }),
  /**
   * Delete personalization
   */
  deletePersonalization: defineAction({
    input: objectType({
      personalizationId: stringType()
    }),
    handler: async ({ personalizationId }) => {
      try {
        const success = await deletePersonalization(personalizationId);
        return {
          success
        };
      } catch (error) {
        console.error("Error deleting personalization:", error);
        return {
          success: false,
          error: "Failed to delete personalization"
        };
      }
    }
  })
};

const server$2 = {
  createBlog: defineAction({
    accept: "json",
    input: objectType({
      starId: stringType(),
      title: stringType().min(1),
      content: stringType().min(1),
      description: stringType().optional(),
      tags: arrayType(stringType()).min(1),
      projects: arrayType(stringType()).optional(),
      projectTypes: arrayType(stringType()).optional(),
      draft: booleanType().default(false)
    }),
    handler: async ({ starId, title, content, description, tags, projects, projectTypes, draft }, { request }) => {
      try {
        const session = await auth.api.getSession({
          headers: request.headers
        });
        if (!session || !session.user) {
          return {
            success: false,
            error: "Authentication required. Please log in to create a blog post"
          };
        }
        const authenticatedUserId = session.user.id;
        const authenticatedUserStar = await getStarByUserId(authenticatedUserId);
        if (!authenticatedUserStar || !authenticatedUserStar._id) {
          return {
            success: false,
            error: "User profile not found. Please ensure your account is set up correctly."
          };
        }
        const authenticatedStarId = String(authenticatedUserStar._id);
        const requestedStarId = String(starId);
        if (authenticatedStarId !== requestedStarId) {
          return {
            success: false,
            error: "You can only create blog posts for your own account"
          };
        }
        const star = await getStarById(starId);
        if (!star) {
          return {
            success: false,
            error: "Star not found"
          };
        }
        const blog = {
          author: starId,
          title: title.trim(),
          content: content.trim(),
          description: description?.trim(),
          tags: tags || [],
          projects: projects || [],
          projectTypes: projectTypes || [],
          createdTime: Math.floor(Date.now() / 1e3),
          draft: draft ?? false
        };
        const created = await createBlog(blog);
        if (!created) {
          return {
            success: false,
            error: "Failed to create blog"
          };
        }
        const starBlogs = await getBlogsByAuthor(starId);
        const createdBlog = starBlogs.find(
          (b) => b.title === blog.title && b.author === starId && Math.abs((b.createdTime || 0) - (blog.createdTime || 0)) < 5
          // Within 5 seconds
        ) || starBlogs[0];
        return {
          success: true,
          blogId: createdBlog?._id
        };
      } catch (error) {
        console.error("Error creating blog:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
          success: false,
          error: `An error occurred while creating blog: ${errorMessage}`
        };
      }
    }
  }),
  getBlog: defineAction({
    accept: "json",
    input: objectType({
      blogId: stringType()
    }),
    handler: async ({ blogId }) => {
      try {
        const blog = await getBlogById(blogId);
        if (!blog) {
          return {
            success: false,
            error: "Blog not found"
          };
        }
        return {
          success: true,
          blog
        };
      } catch (error) {
        console.error("Error getting blog:", error);
        return {
          success: false,
          error: "An error occurred while getting blog"
        };
      }
    }
  }),
  getBlogsByAuthor: defineAction({
    accept: "json",
    input: objectType({
      authorId: stringType()
    }),
    handler: async ({ authorId }) => {
      try {
        const blogs = await getBlogsByAuthor(authorId);
        return {
          success: true,
          blogs
        };
      } catch (error) {
        console.error("Error getting blogs by author:", error);
        return {
          success: false,
          error: "An error occurred while getting blogs"
        };
      }
    }
  }),
  getAllBlogs: defineAction({
    accept: "json",
    input: objectType({}),
    handler: async () => {
      try {
        const blogs = await getAllBlogs();
        return {
          success: true,
          blogs
        };
      } catch (error) {
        console.error("Error getting all blogs:", error);
        return {
          success: false,
          error: "An error occurred while getting blogs"
        };
      }
    }
  })
};

const server$1 = {
  getAccountsByUserId: defineAction({
    input: objectType({
      userId: stringType()
    }),
    handler: async ({ userId }) => {
      try {
        const accounts = await getAccountsByUserId(userId);
        return {
          success: true,
          data: accounts
        };
      } catch (error) {
        console.error("Error getting accounts by user id:", error);
        return {
          success: false,
          error: "An error occurred while getting accounts"
        };
      }
    }
  }),
  getAuthUserById: defineAction({
    input: objectType({
      userId: stringType()
    }),
    handler: async ({ userId }) => {
      try {
        const authUser = await getAuthUserById(userId);
        if (!authUser) {
          return {
            success: false,
            error: "Auth user not found"
          };
        }
        return {
          success: true,
          data: authUser
        };
      } catch (error) {
        console.error("Error getting auth user by id:", error);
        return {
          success: false,
          error: "An error occurred while getting auth user"
        };
      }
    }
  })
};

const server = {
  ...server$a,
  ...server$9,
  ...server$8,
  ...server$7,
  ...server$6,
  ...server$5,
  ...server$4,
  ...server$3,
  ...server$2,
  ...server$1
};

export { server };
