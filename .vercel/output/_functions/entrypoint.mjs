import { I as IssueTag } from './chunks/issue_ClqDH68H.mjs';
import { ObjectId } from 'mongodb';
import { Wallet } from 'ethers';
import { getCollection, create } from './chunks/db_DOR0BHwy.mjs';
import { getUserById, updateUserSunshines, getUserByIds, emailToNickname, createUsers, updateUserStars, getUserByEmail } from './chunks/user_Dmvk2cKy.mjs';
import { g as getGalaxyById, u as updateGalaxySunshines, a as getGalaxyByName } from './chunks/galaxy_D015Gxde.mjs';
import { imitate50Deposit, hyperpay, send } from '@ara-web/crypto-sockets';
import { d as defineAction } from './chunks/server_CVdcdtqU.mjs';
import { o as objectType, n as numberType, s as stringType, a as arrayType, b as nativeEnumType, c as booleanType, e as enumType } from './chunks/astro/server_WCbI3U70.mjs';
import { u as updateUserStarPosition, c as createSpaceTracer, g as getUserStar, a as getGalaxySpace, b as getAllStarStats, d as checkSolarForgeByIssue, e as updateIssueStars, f as upsertSpaceUserStar } from './chunks/all-stars_C7i-8iZJ.mjs';
import { g as getIssueById, u as updateIssueSolarForgeTxid, a as updateIssue, b as unpatchIssue, p as patchIssue, c as unsetIssueContributor, s as setIssueContributor, d as updateIssueSunshines, e as createIssue, f as getPublicBacklogIssues, h as getShiningIssues, i as getIssuesByGalaxy } from './chunks/issue_Dv6LAPam.mjs';

async function getDemoByEmail(email) {
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

const demo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    createDemo,
    getDemoByEmail,
    updateDemoStep
}, Symbol.toStringTag, { value: 'Module' }));

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

function generateRandomUser(role, index, email) {
  const randomSeed = `${role}-${index}-${Date.now()}-${Math.random()}`;
  const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${randomSeed}&size=256`;
  const names = [
    "Alex Johnson",
    "Sam Taylor",
    "Jordan Smith",
    "Casey Brown",
    "Morgan Davis",
    "Riley Wilson",
    "Avery Martinez",
    "Quinn Anderson",
    "Sage Thompson",
    "River Garcia"
  ];
  const randomName = names[Math.floor(Math.random() * names.length)];
  return {
    src: avatarUrl,
    alt: `${role} avatar`,
    uri: "/user?email=" + email,
    nickname: randomName.replace(" ", "-").toLowerCase(),
    email,
    sunshines: 0,
    stars: 0,
    role,
    balance: 0
  };
}
async function generateDemoUsers(email) {
  const wallet1 = Wallet.createRandom();
  const wallet2 = Wallet.createRandom();
  const wallet3 = Wallet.createRandom();
  const users = [
    {
      email,
      role: "user",
      nickname: emailToNickname(email),
      src: `https://api.dicebear.com/9.x/avataaars/svg?seed=${email}&size=256`,
      alt: "Donator avatar",
      uri: "/user?email=" + emailToNickname(email),
      demoPrivateKey: wallet1.privateKey
    },
    {
      ...generateRandomUser("maintainer", 1, email + ".m"),
      demoPrivateKey: wallet2.privateKey
    },
    {
      ...generateRandomUser("contributor", 2, email + ".c"),
      demoPrivateKey: wallet3.privateKey
    }
  ];
  const createdIds = await createUsers(users);
  return createdIds.map((id, index) => ({
    ...users[index],
    _id: id
  }));
}
const server$8 = {
  start: defineAction({
    accept: "json",
    input: objectType({
      email: stringType().email()
    }),
    handler: async ({ email }) => {
      try {
        const existingDemo = await getDemoByEmail(email);
        if (existingDemo) {
          const users2 = await getUserByIds(existingDemo.users);
          return {
            success: true,
            users: users2
          };
        }
        const users = await generateDemoUsers(email);
        const created = await createDemo(email, users.map((user) => new ObjectId(user._id)));
        if (!created) {
          return {
            success: false,
            error: "Failed to create a new demo"
          };
        }
        return {
          success: true,
          users
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
        const demo = await getDemoByEmail(email);
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
        const demo = await getDemoByEmail(email);
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
            error: "Galaxy not found"
          };
        }
        const user = await getUserById(userId);
        if (!user) {
          return {
            success: false,
            error: "User not found"
          };
        }
        const donationAmount = 50;
        const paymentResult = await processPayment(donationAmount, userId, galaxyId, "USD", memo);
        if (!paymentResult.success) {
          return {
            success: false,
            error: paymentResult.error || "Payment processing failed"
          };
        }
        const sunshinesAmount = donationAmount * 1.8;
        const userUpdated = await updateUserSunshines(userId, sunshinesAmount);
        if (!userUpdated) {
          return {
            success: false,
            error: "Failed to update user sunshines"
          };
        }
        const galaxyIdObj = galaxy._id || galaxyId;
        const galaxyUpdated = await updateGalaxySunshines(galaxyIdObj, sunshinesAmount);
        if (!galaxyUpdated) {
          return {
            success: false,
            error: "Failed to update galaxy sunshines"
          };
        }
        const stepUpdated = await updateDemoStep(email, 1);
        if (!stepUpdated) {
          return {
            success: false,
            error: "Failed to update demo step"
          };
        }
        const currentSunshines = user.sunshines || 0;
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
          error: "An error occurred while obtaining sunshines"
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
        const demo = await getDemoByEmail(email);
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
      const userUpdated = await updateUserStars(userId, data.stars);
      if (userUpdated) {
        const user = await getUserById(userId);
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
          await upsertSpaceUserStar({
            galaxyId: issue.galaxy,
            userId,
            data: {
              nickname: user.nickname,
              src: user.src,
              alt: user.alt,
              stars: user.stars,
              sunshines: user.sunshines,
              role: user.role,
              uri: user.uri
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
        error: "Galaxy not found or missing blockchainId"
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
          error: `Blockchain error: ${errorReply.error}`
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
      error: "An error occurred while solar forging issue"
    };
  }
}
const server$7 = {
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
        const user = await getUserById(userId);
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
  //                 const userUpdated = await updateUserStars(userId, data.stars)
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
  //                 const user = await getUserById(userId)
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
  })
};

const server$6 = {
  getUserById: defineAction({
    input: objectType({
      userId: stringType()
    }),
    handler: async ({ userId }) => {
      try {
        const user = await getUserById(userId);
        if (user) {
          return {
            success: true,
            data: user
          };
        }
        return {
          success: false,
          error: "User not found"
        };
      } catch (error) {
        console.error("Error getting user by id:", error);
        return {
          success: false,
          error: "An error occurred while getting user"
        };
      }
    }
  }),
  getUserByEmail: defineAction({
    input: objectType({
      email: stringType()
    }),
    handler: async ({ email }) => {
      try {
        const user = await getUserByEmail(email);
        if (user) {
          return {
            success: true,
            data: user
          };
        }
        return {
          success: false,
          error: "User not found"
        };
      } catch (error) {
        console.error("Error getting user by email:", error);
        return {
          success: false,
          error: "An error occurred while getting user"
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
const server$5 = {
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
    handler: async ({ galaxyId, userId, email, title, description, tags, sunshines }) => {
      try {
        const demo = await getDemoByEmail(email);
        if (!demo) {
          return {
            success: false,
            error: "Demo not found"
          };
        }
        const galaxy = await getGalaxyById(galaxyId);
        if (!galaxy || !galaxy.maintainer) {
          return {
            success: false,
            error: "Galaxy not found"
          };
        }
        const user = await getUserById(userId);
        if (!user) {
          return {
            success: false,
            error: "User not found"
          };
        }
        if (sunshines > 0) {
          const availableSunshines = user.sunshines || 0;
          if (sunshines > availableSunshines) {
            return {
              success: false,
              error: `Insufficient sunshines. Available: ${availableSunshines}`
            };
          }
          const userUpdated = await updateUserSunshines(userId, -sunshines);
          if (!userUpdated) {
            return {
              success: false,
              error: "Failed to update user sunshines"
            };
          }
          const galaxyUpdated = await updateGalaxySunshines(galaxyId, sunshines);
          if (!galaxyUpdated) {
            await updateUserSunshines(userId, sunshines);
            return {
              success: false,
              error: "Failed to update galaxy sunshines"
            };
          }
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
            username: user.nickname || user.email?.split("@")[0] || "unknown",
            starshineAmount: sunshines,
            transactionDate: Math.floor(Date.now() / 1e3)
          }],
          author: userId
        };
        const created = await createIssue(issue);
        if (!created) {
          if (sunshines > 0) {
            await updateUserSunshines(userId, sunshines);
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
        const user = await getUserById(userId);
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
        const userUpdated = await updateUserSunshines(userId, -sunshinesToAdd);
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
        const username = user.nickname || user.email?.split("@")[0] || "unknown";
        const issueUpdated = await updateIssueSunshines(issueId, userId, username, sunshinesToAdd);
        if (!issueUpdated) {
          await updateUserSunshines(userId, sunshinesToAdd);
          return {
            success: false,
            error: "Failed to update issue sunshines"
          };
        }
        const galaxyUpdated = await updateGalaxySunshines(issue.galaxy, sunshinesToAdd);
        if (!galaxyUpdated) {
          await updateUserSunshines(userId, sunshinesToAdd);
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
      userId: stringType(),
      email: stringType().email()
    }),
    handler: async ({ issueId, userId, email }) => {
      try {
        const demo = await getDemoByEmail(email);
        if (!demo) {
          return {
            success: false,
            error: "Demo not found"
          };
        }
        const user = await getUserById(userId);
        if (!user) {
          return {
            success: false,
            error: "User not found"
          };
        }
        const demoUser = demo.users.find((id) => id.toString() === userId);
        if (!demoUser) {
          return {
            success: false,
            error: "User not found in demo"
          };
        }
        if (user.role !== "maintainer") {
          return {
            success: false,
            error: "Only maintainers can assign contributors"
          };
        }
        const issue = await getIssueById(issueId);
        if (!issue) {
          return {
            success: false,
            error: "Issue not found"
          };
        }
        const username = user.nickname || user.email?.split("@")[0] || "unknown";
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
      issueId: stringType(),
      email: stringType().email()
    }),
    handler: async ({ issueId, email }) => {
      try {
        const demo = await getDemoByEmail(email);
        if (!demo) {
          return {
            success: false,
            error: "Demo not found"
          };
        }
        const issue = await getIssueById(issueId);
        if (!issue) {
          return {
            success: false,
            error: "Issue not found"
          };
        }
        const maintainerUser = await getUserById(issue.maintainer);
        if (!maintainerUser || maintainerUser.role !== "maintainer") {
          const demoUsers = await getUserByIds(demo.users);
          const isMaintainer = demoUsers.some((u) => u.role === "maintainer");
          if (!isMaintainer) {
            return {
              success: false,
              error: "Only maintainers can unset contributors"
            };
          }
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
    handler: async ({ issueId, email, listHistory }) => {
      try {
        const demo = await getDemoByEmail(email);
        if (!demo) {
          return {
            success: false,
            error: "Demo not found"
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
    handler: async ({ issueId, email }) => {
      try {
        const demo = await getDemoByEmail(email);
        if (!demo) {
          return {
            success: false,
            error: "Demo not found"
          };
        }
        const issue = await getIssueById(issueId);
        if (!issue) {
          return {
            success: false,
            error: "Issue not found"
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
    handler: async ({ issueId, email }) => {
      try {
        const demo = await getDemoByEmail(email);
        if (!demo) {
          return {
            success: false,
            error: "Demo not found"
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
      versionId: stringType(),
      email: stringType().email()
    }),
    handler: async ({ versionId, email }) => {
      try {
        const demo = await getDemoByEmail(email);
        if (!demo) {
          return {
            success: false,
            error: "Demo not found"
          };
        }
        const version = await getVersionById(versionId);
        if (!version) {
          return {
            success: false,
            error: "Version not found"
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

const server$4 = {
  getGalaxy: defineAction({
    accept: "json",
    input: objectType({
      galaxyId: stringType()
    }),
    handler: async ({ galaxyId }) => {
      try {
        let galaxy = await getGalaxyById(galaxyId);
        if (!galaxy) {
          galaxy = await getGalaxyByName(galaxyId);
        }
        if (!galaxy) {
          return {
            success: false,
            error: "Galaxy not found"
          };
        }
        const serializedGalaxy = {
          ...galaxy,
          _id: galaxy._id?.toString(),
          maintainer: galaxy.maintainer?.toString()
        };
        return {
          success: true,
          galaxy: serializedGalaxy
        };
      } catch (error) {
        console.error("Error getting galaxy:", error);
        return {
          success: false,
          error: "An error occurred while getting galaxy"
        };
      }
    }
  })
};

const server$3 = {
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
      tag: stringType(),
      email: stringType().email()
    }),
    handler: async ({ galaxyId, tag, email }) => {
      try {
        const { getDemoByEmail } = await Promise.resolve().then(() => demo);
        const { getUserByIds } = await import('./chunks/user_Dmvk2cKy.mjs');
        const demo$1 = await getDemoByEmail(email);
        if (!demo$1 || !demo$1.users || demo$1.users.length === 0) {
          return {
            success: false,
            error: "Demo not found"
          };
        }
        const users = await getUserByIds(demo$1.users);
        if (!users || users.length === 0) {
          return {
            success: false,
            error: "Users not found"
          };
        }
        const maintainerUser = users.find((u) => u.role === "maintainer");
        if (!maintainerUser || !maintainerUser._id) {
          return {
            success: false,
            error: "Maintainer user not found"
          };
        }
        const newVersion = {
          galaxy: galaxyId,
          tag: tag.trim(),
          createdTime: Math.floor(Date.now() / 1e3),
          status: "complete",
          patches: [],
          maintainer: maintainerUser._id.toString()
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

const server$2 = {
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

const server$1 = {
  /**
   * Generate personalization code from prompt
   */
  generatePersonalizationCode: defineAction({
    input: objectType({
      prompt: stringType().min(1),
      context: stringType(),
      componentStructure: arrayType(stringType()),
      email: stringType().email()
    }),
    handler: async ({ prompt, context, componentStructure, email }) => {
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
      email: stringType().email(),
      personalizationId: stringType().optional()
    }),
    handler: async ({ context, code, prompt, uris, email, personalizationId }) => {
      try {
        const user = await getUserByEmail(email);
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
      email: stringType().email()
    }),
    handler: async ({ context, email }) => {
      try {
        const user = await getUserByEmail(email);
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

const server = {
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
