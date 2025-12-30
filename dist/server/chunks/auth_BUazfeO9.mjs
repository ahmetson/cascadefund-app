import { ObjectId } from 'mongodb';
import { a as getDb } from './db_OZ8_cRuI.mjs';

function authUserModelToAuthUser(model) {
  if (!model) return null;
  return {
    id: model.id,
    email: model.email,
    emailVerified: model.emailVerified,
    username: model.username,
    displayUsername: model.displayUsername,
    name: model.name,
    image: model.image,
    createdAt: model.createdAt,
    updatedAt: model.updatedAt
  };
}
function authAccountModelToAuthAccount(model) {
  if (!model) return null;
  return {
    id: model.id,
    userId: model.userId,
    providerId: model.providerId,
    providerAccountId: model.providerAccountId,
    accessToken: model.accessToken,
    refreshToken: model.refreshToken,
    expiresAt: model.expiresAt,
    scope: model.scope,
    tokenType: model.tokenType
  };
}
async function getAuthUserById(userId) {
  try {
    const db = await getDb();
    const collection = db.collection("user");
    const user = await collection.findOne({ _id: new ObjectId(userId) });
    return authUserModelToAuthUser(user);
  } catch (error) {
    console.error("Error getting auth user by id:", error);
    return null;
  }
}
async function getAccountsByUserId(userId) {
  const db = await getDb();
  const collection = db.collection("account");
  const accounts = await collection.find({ userId }).toArray();
  return accounts.map((account) => authAccountModelToAuthAccount(account)).filter(Boolean);
}

export { getAccountsByUserId as a, getAuthUserById as g };
