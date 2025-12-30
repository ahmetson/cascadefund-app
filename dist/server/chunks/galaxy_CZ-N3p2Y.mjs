import { ObjectId } from 'mongodb';
import { g as getCollection } from './db_OZ8_cRuI.mjs';

function galaxyModelToGalaxy(model) {
  if (!model) return null;
  return {
    _id: model._id?.toString(),
    maintainer: model.maintainer.toString(),
    projectLink: model.projectLink.toString(),
    name: model.name,
    description: model.description,
    stars: model.stars,
    sunshines: model.sunshines,
    users: model.users,
    donationAmount: model.donationAmount,
    x: model.x,
    y: model.y,
    tags: model.tags,
    blockchainId: model.blockchainId,
    blockchainTx: model.blockchainTx
  };
}
function galaxyToGalaxyModel(galaxy) {
  const model = {
    maintainer: new ObjectId(galaxy.maintainer),
    projectLink: new ObjectId(galaxy.projectLink),
    name: galaxy.name,
    description: galaxy.description,
    stars: galaxy.stars,
    sunshines: galaxy.sunshines,
    users: galaxy.users,
    donationAmount: galaxy.donationAmount,
    x: galaxy.x,
    y: galaxy.y,
    tags: galaxy.tags,
    blockchainId: galaxy.blockchainId,
    blockchainTx: galaxy.blockchainTx
  };
  if (galaxy._id) {
    model._id = new ObjectId(galaxy._id);
  }
  return model;
}
async function getAllGalaxies(onlyInSpace = false) {
  try {
    const collection = await getCollection("galaxies");
    const query = onlyInSpace ? { x: { $gt: 0 }, y: { $gt: 0 } } : {};
    const galaxies = await collection.find(query).toArray();
    return galaxies.map(galaxyModelToGalaxy).filter((g) => g !== null);
  } catch (error) {
    console.error("Error getting all galaxies:", error);
    return [];
  }
}
async function getGalaxyById(id) {
  try {
    const collection = await getCollection("galaxies");
    const objectId = new ObjectId(id);
    const result = await collection.findOne({ _id: objectId });
    return galaxyModelToGalaxy(result);
  } catch (error) {
    console.error("Error getting galaxy by id:", error);
    return null;
  }
}
async function createGalaxy(galaxy) {
  try {
    const galaxyModel = galaxyToGalaxyModel(galaxy);
    const collection = await getCollection("galaxies");
    const result = await collection.insertOne(galaxyModel);
    if (!result.insertedId) {
      return null;
    }
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error creating galaxy:", error);
    return null;
  }
}
async function updateGalaxySunshines(galaxyId, amount) {
  try {
    const collection = await getCollection("galaxies");
    const objectId = typeof galaxyId === "string" ? new ObjectId(galaxyId) : galaxyId;
    const result = await collection.updateOne(
      { _id: objectId },
      { $inc: { sunshines: amount } }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating galaxy sunshines:", error);
    return false;
  }
}
async function getGalaxiesByMaintainer(userId) {
  try {
    const collection = await getCollection("galaxies");
    const objectId = typeof userId === "string" ? new ObjectId(userId) : userId;
    const galaxies = await collection.find({ maintainer: objectId }).toArray();
    return galaxies.map(galaxyModelToGalaxy).filter((g) => g !== null);
  } catch (error) {
    console.error("Error getting galaxies by maintainer:", error);
    return [];
  }
}
async function updateGalaxyPosition(galaxyId, x, y) {
  try {
    const collection = await getCollection("galaxies");
    const objectId = typeof galaxyId === "string" ? new ObjectId(galaxyId) : galaxyId;
    const result = await collection.updateOne(
      { _id: objectId },
      { $set: { x, y } }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    console.error("Error updating galaxy position:", error);
    return false;
  }
}

export { updateGalaxyPosition as a, getAllGalaxies as b, createGalaxy as c, getGalaxiesByMaintainer as d, getGalaxyById as g, updateGalaxySunshines as u };
