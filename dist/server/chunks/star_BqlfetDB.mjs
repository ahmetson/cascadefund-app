import { ObjectId } from 'mongodb';
import { Wallet } from 'ethers';
import { g as getCollection } from './db_OZ8_cRuI.mjs';

function starModelToStar(model) {
  if (!model) return null;
  return {
    _id: model._id?.toString(),
    sunshines: model.sunshines,
    stars: model.stars,
    balance: model.balance,
    demoPrivateKey: model.demoPrivateKey,
    userId: model.userId
  };
}
function starToStarModel(star) {
  return {
    _id: star._id ? new ObjectId(star._id) : void 0,
    sunshines: star.sunshines,
    stars: star.stars,
    balance: star.balance,
    demoPrivateKey: star.demoPrivateKey,
    userId: star.userId
  };
}
async function getStarByUserId(userId) {
  try {
    const collection = await getCollection("stars");
    const result = await collection.findOne({ userId });
    return starModelToStar(result);
  } catch (error) {
    console.error("Error getting star by userId:", error);
    return null;
  }
}
async function getStarById(id) {
  try {
    const collection = await getCollection("stars");
    const objectId = typeof id === "string" ? new ObjectId(id) : id;
    const result = await collection.findOne({ _id: objectId });
    return starModelToStar(result);
  } catch (error) {
    console.error("Error getting star by id:", error);
    return null;
  }
}
async function getStarByIds(ids) {
  try {
    if (ids.length === 0) {
      return [];
    }
    const collection = await getCollection("stars");
    const objectIds = ids.map((id) => typeof id === "string" ? new ObjectId(id) : id);
    const result = await collection.find({ _id: { $in: objectIds } }).toArray();
    return result.map(starModelToStar).filter((s) => s !== null);
  } catch (error) {
    console.error("Error getting stars by ids:", error);
    return [];
  }
}
async function createStar(star) {
  try {
    const collection = await getCollection("stars");
    const starModel = starToStarModel(star);
    const result = await collection.insertOne(starModel);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error creating star:", error);
    throw error;
  }
}
async function createStars(stars) {
  try {
    if (stars.length === 0) {
      return [];
    }
    const collection = await getCollection("stars");
    const starModels = stars.map(starToStarModel);
    const result = await collection.insertMany(starModels);
    return Object.values(result.insertedIds).map((id) => id.toString());
  } catch (error) {
    console.error("Error creating stars:", error);
    throw error;
  }
}
async function createStarByUserId(userId) {
  try {
    const wallet = Wallet.createRandom();
    const newStar = {
      sunshines: 100,
      stars: 0,
      balance: 0,
      demoPrivateKey: wallet.privateKey,
      userId
    };
    const insertedId = await createStar(newStar);
    return insertedId;
  } catch (error) {
    console.error("Error getting or creating star by userId:", error);
    throw error;
  }
}
async function updateStarSunshines(starId, amount) {
  try {
    const collection = await getCollection("stars");
    const objectId = typeof starId === "string" ? new ObjectId(starId) : starId;
    const star = await collection.findOne({ _id: objectId });
    if (!star) {
      console.error("Star not found for sunshines update:", objectId.toString());
      return false;
    }
    if (star.sunshines === void 0 || star.sunshines === null) {
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
    console.error("Error updating star sunshines:", error);
    return false;
  }
}
async function updateStarStars(starId, amount) {
  try {
    const collection = await getCollection("stars");
    const objectId = typeof starId === "string" ? new ObjectId(starId) : starId;
    const star = await collection.findOne({ _id: objectId });
    if (!star) {
      console.error("Star not found for stars update:", objectId.toString());
      return false;
    }
    if (star.stars === void 0 || star.stars === null) {
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
    console.error("Error updating star stars:", error);
    return false;
  }
}

export { getStarByIds as a, updateStarStars as b, createStars as c, createStarByUserId as d, getStarByUserId as e, getStarById as g, updateStarSunshines as u };
