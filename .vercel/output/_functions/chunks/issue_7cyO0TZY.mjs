import { a as actions, b as ISSUE_EVENT_TYPES } from './issue_ClqDH68H.mjs';

function emitIssueUpdate(data) {
  window.dispatchEvent(new CustomEvent(ISSUE_EVENT_TYPES.ISSUE_UPDATE, {
    detail: data
  }));
}
async function getIssueById(issueId) {
  try {
    const result = await actions.getIssueById({ issueId });
    if (result.data?.success && result.data.data) {
      return result.data.data;
    }
    return null;
  } catch (error) {
    console.error("Error getting issue by id:", error);
    return null;
  }
}
async function updateIssue(params) {
  try {
    const result = await actions.updateIssue(params);
    if (result.data?.success) {
      const updatedIssue = await getIssueById(params.issueId);
      if (updatedIssue) {
        emitIssueUpdate(updatedIssue);
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error updating issue:", error);
    return false;
  }
}
async function updateIssueSunshines(params) {
  try {
    const result = await actions.updateIssueSunshines(params);
    if (result.data?.success) {
      const updatedIssue = await getIssueById(params.issueId);
      if (updatedIssue) {
        emitIssueUpdate(updatedIssue);
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error updating issue sunshines:", error);
    return false;
  }
}

export { updateIssue as a, getIssueById as g, updateIssueSunshines as u };
