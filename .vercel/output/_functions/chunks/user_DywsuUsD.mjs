import { d as actions } from './issue_CKSMgj7X.mjs';
import { a as DEMO_COOKIE_NAMES, D as DEMO_EVENT_TYPES } from './demo_CnQUSMeS.mjs';

const getDemo = () => {
  return getDemoCookies();
};
const incrementDemoStep = async (params) => {
  try {
    const result = await actions.incrementDemoStep(params);
    console.log("incrementDemoStep result:", result, ` for the ${params.expectedStep} step`);
    if (result.data?.success && result.data.step !== void 0) {
      window.dispatchEvent(new CustomEvent(DEMO_EVENT_TYPES.DEMO_STEP_INCREMENTED, {
        detail: {
          step: result.data.step
        }
      }));
      return {
        success: true,
        step: result.data.step
      };
    }
    return {
      success: false,
      error: result.data?.error || "Failed to increment demo step"
    };
  } catch (error) {
    console.error("Error incrementing demo step:", error);
    return {
      success: false,
      error: "An error occurred while incrementing demo step"
    };
  }
};
function getDemoCookies() {
  const email = getCookie(DEMO_COOKIE_NAMES.email);
  const usersStr = getCookie(DEMO_COOKIE_NAMES.users);
  const role = getCookie(DEMO_COOKIE_NAMES.role);
  let users = null;
  if (usersStr) {
    try {
      users = JSON.parse(usersStr);
    } catch {
      users = null;
    }
  }
  return { email, users, role };
}
function getCookie(name) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return decodeURIComponent(parts.pop()?.split(";").shift() || "");
  }
  return null;
}

async function getUserById(userId) {
  try {
    const result = await actions.getUserById({ userId });
    if (result.data?.success && result.data.data) {
      return result.data.data;
    }
    return null;
  } catch (error) {
    console.error("Error getting user by id:", error);
    return null;
  }
}

export { getUserById as a, getDemo as g, incrementDemoStep as i };
