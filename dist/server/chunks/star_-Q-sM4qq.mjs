import { a as actions } from './virtual_BuMUpOlX.mjs';

async function getStarById(starId) {
  try {
    const result = await actions.getStarById({ starId });
    if (result.data?.success && result.data.data) {
      return result.data.data;
    }
    return null;
  } catch (error) {
    console.error("Error getting star by id:", error);
    return null;
  }
}
async function getStarByUserId(userId) {
  try {
    const result = await actions.getStarByUserId({ userId });
    if (result.data?.success && result.data.data) {
      return result.data.data;
    }
    return null;
  } catch (error) {
    console.error("Error getting star by userId:", error);
    return null;
  }
}

export { getStarByUserId as a, getStarById as g };
