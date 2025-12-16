import { d as actions } from './issue_CKSMgj7X.mjs';
import { a as PATCH_EVENT_TYPES } from './patch_Cnq5U_SF.mjs';
import { g as getDemo, i as incrementDemoStep } from './user_DywsuUsD.mjs';

const ROADMAP_EVENT_TYPES = {
  VERSION_CREATED: "version-created",
  VERSION_RELEASED: "version-released"
};

async function getVersions(galaxyId) {
  try {
    const result = await actions.getVersionsByGalaxy({ galaxyId });
    return result.data?.versions || [];
  } catch (error) {
    console.error("Error fetching versions:", error);
    return [];
  }
}
async function getVersionById(versionId) {
  try {
    const result = await actions.getVersionById({ versionId });
    if (result.data?.success && result.data.version) {
      return result.data.version;
    }
    return null;
  } catch (error) {
    console.error("Error fetching version:", error);
    return null;
  }
}
async function updateVersionStatus(params) {
  try {
    const result = await actions.updateVersionStatus(params);
    if (result.data?.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error updating version status:", error);
    return false;
  }
}
async function updatePatches(versionId, patches) {
  try {
    const result = await actions.updatePatches({ versionId, patches });
    if (result.data?.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error updating patches:", error);
    return false;
  }
}
async function removePatch(params) {
  try {
    const result = await actions.removePatch(params);
    if (result.data?.success) {
      window.dispatchEvent(new CustomEvent(PATCH_EVENT_TYPES.PATCH_REMOVED, {
        detail: {
          patchId: params.patchId,
          versionId: params.versionId
        }
      }));
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error removing patch:", error);
    return false;
  }
}
async function completePatch(params) {
  try {
    const result = await actions.completePatch(params);
    if (result.data?.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error completing patch:", error);
    return false;
  }
}
async function testPatch(params) {
  try {
    const result = await actions.testPatch(params);
    if (result.data?.success) {
      if (params.tested) {
        const demo = getDemo();
        if (demo.email) {
          await incrementDemoStep({ email: demo.email, expectedStep: 6 });
        }
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error testing patch:", error);
    return false;
  }
}
async function markPatchTested(versionId, patchId, tested) {
  return testPatch({ versionId, patchId, tested });
}
async function releaseVersion(params) {
  try {
    const demo = getDemo();
    if (!demo.email) {
      console.error("No demo email found");
      return false;
    }
    const closeResult = await actions.closeIssuesByVersion({
      versionId: params.versionId,
      email: demo.email
    });
    if (!closeResult.data?.success) {
      console.error("Failed to close issues");
      return false;
    }
    const statusResult = await updateVersionStatus({
      versionId: params.versionId,
      status: "archived"
    });
    if (!statusResult) {
      console.error("Failed to update version status");
      return false;
    }
    const eventDetail = {
      versionId: params.versionId,
      tag: params.tag,
      galaxyId: params.galaxyId
    };
    window.dispatchEvent(new CustomEvent(ROADMAP_EVENT_TYPES.VERSION_RELEASED, {
      detail: eventDetail
    }));
    console.log("incrementing demo step for the 7th step after release version");
    await incrementDemoStep({ email: demo.email, expectedStep: 7 });
    return true;
  } catch (error) {
    console.error("Error releasing version:", error);
    return false;
  }
}

export { ROADMAP_EVENT_TYPES as R, updatePatches as a, releaseVersion as b, completePatch as c, getVersions as d, getVersionById as g, markPatchTested as m, removePatch as r, updateVersionStatus as u };
