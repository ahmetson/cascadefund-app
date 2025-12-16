import { ObjectId } from 'mongodb';
import { Wallet } from 'ethers';
import { getCollection } from './db_CfiMa5UD.mjs';

function userModelToUser(model) {
  if (!model) return null;
  return {
    _id: model._id?.toString(),
    email: model.email,
    src: model.src,
    alt: model.alt,
    uri: model.uri,
    nickname: model.nickname,
    sunshines: model.sunshines,
    stars: model.stars,
    role: model.role,
    balance: model.balance,
    demoPrivateKey: model.demoPrivateKey
  };
}
function userToUserModel(user) {
  return {
    _id: user._id ? new ObjectId(user._id) : void 0,
    email: user.email,
    src: user.src,
    alt: user.alt,
    uri: user.uri,
    nickname: user.nickname,
    sunshines: user.sunshines,
    stars: user.stars,
    role: user.role,
    balance: user.balance,
    demoPrivateKey: user.demoPrivateKey
  };
}
const emailToNickname = (email) => {
  return email.split("@")[0];
};
async function getUserByEmail(email) {
  try {
    const collection = await getCollection("users");
    const result = await collection.findOne({ email });
    return userModelToUser(result);
  } catch (error) {
    console.error("Error getting user by email:", error);
    return null;
  }
}
async function getUserById(id) {
  try {
    const collection = await getCollection("users");
    const objectId = typeof id === "string" ? new ObjectId(id) : id;
    const result = await collection.findOne({ _id: objectId });
    return userModelToUser(result);
  } catch (error) {
    console.error("Error getting user by id:", error);
    return null;
  }
}
async function getUserByIds(ids) {
  try {
    if (ids.length === 0) {
      return [];
    }
    const collection = await getCollection("users");
    const objectIds = ids.map((id) => typeof id === "string" ? new ObjectId(id) : id);
    const result = await collection.find({ _id: { $in: objectIds } }).toArray();
    return result.map(userModelToUser).filter((u) => u !== null);
  } catch (error) {
    console.error("Error getting users by ids:", error);
    return [];
  }
}
async function createUser(user) {
  try {
    const collection = await getCollection("users");
    const userModel = userToUserModel(user);
    const result = await collection.insertOne(userModel);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
async function createUsers(users) {
  try {
    if (users.length === 0) {
      return [];
    }
    const collection = await getCollection("users");
    const userModels = users.map(userToUserModel);
    const result = await collection.insertMany(userModels);
    return Object.values(result.insertedIds).map((id) => id.toString());
  } catch (error) {
    console.error("Error creating users:", error);
    throw error;
  }
}
async function getOrCreateUserByEmail(email) {
  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser && existingUser._id) {
      if (!existingUser.demoPrivateKey) {
        const wallet2 = Wallet.createRandom();
        const collection = await getCollection("users");
        const objectId = new ObjectId(existingUser._id);
        await collection.updateOne(
          { _id: objectId },
          { $set: { demoPrivateKey: wallet2.privateKey } }
        );
      }
      return existingUser._id;
    }
    const wallet = Wallet.createRandom();
    const newUser = {
      email,
      role: "maintainer",
      nickname: emailToNickname(email),
      demoPrivateKey: wallet.privateKey
    };
    const insertedId = await createUser(newUser);
    return insertedId;
  } catch (error) {
    console.error("Error getting or creating user by email:", error);
    throw error;
  }
}
async function updateUserSunshines(userId, amount) {
  try {
    const collection = await getCollection("users");
    const objectId = typeof userId === "string" ? new ObjectId(userId) : userId;
    const user = await collection.findOne({ _id: objectId });
    if (!user) {
      console.error("User not found for sunshines update:", objectId.toString());
      return false;
    }
    if (user.sunshines === void 0 || user.sunshines === null) {
      const setResult = await collection.updateOne(
        { _id: objectId },
        { $set: { sunshines: 0 } }
      );
      if (setResult.matchedCount === 0) {
        return false;
      }
    }
    const result = await collection.updateOne(
      { _id: objectId },
      { $inc: { sunshines: amount } }
    );
    return result.matchedCount > 0;
  } catch (error) {
    console.error("Error updating user sunshines:", error);
    return false;
  }
}
async function updateUserStars(userId, amount) {
  try {
    const collection = await getCollection("users");
    const objectId = typeof userId === "string" ? new ObjectId(userId) : userId;
    const user = await collection.findOne({ _id: objectId });
    if (!user) {
      console.error("User not found for stars update:", objectId.toString());
      return false;
    }
    if (user.stars === void 0 || user.stars === null) {
      const setResult = await collection.updateOne(
        { _id: objectId },
        { $set: { stars: 0 } }
      );
      if (setResult.matchedCount === 0) {
        return false;
      }
    }
    const result = await collection.updateOne(
      { _id: objectId },
      { $inc: { stars: amount } }
    );
    return result.matchedCount > 0;
  } catch (error) {
    console.error("Error updating user stars:", error);
    return false;
  }
}

export { createUser, createUsers, emailToNickname, getOrCreateUserByEmail, getUserByEmail, getUserById, getUserByIds, updateUserStars, updateUserSunshines };
