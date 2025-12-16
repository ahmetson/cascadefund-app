import { d as actions, a as ISSUE_EVENT_TYPES, b as IssueTabKey } from './issue_CKSMgj7X.mjs';

function emitIssueUpdate(data) {
  window.dispatchEvent(new CustomEvent(ISSUE_EVENT_TYPES.ISSUE_UPDATE, {
    detail: data
  }));
}
async function getIssues(galaxyId, tabType) {
  let fetchedIssues = [];
  if (tabType === IssueTabKey.SHINING) {
    const result = await actions.getShiningIssues({ galaxyId });
    fetchedIssues = result.data?.data || [];
  } else if (tabType === IssueTabKey.PUBLIC) {
    const result = await actions.getPublicBacklogIssues({ galaxyId });
    fetchedIssues = result.data?.data || [];
  } else {
    const result = await actions.getIssuesByGalaxy({ galaxyId, tabKey: tabType });
    fetchedIssues = result.data?.issues || [];
  }
  return fetchedIssues;
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

export { getIssueById as a, updateIssue as b, getIssues as g, updateIssueSunshines as u };
