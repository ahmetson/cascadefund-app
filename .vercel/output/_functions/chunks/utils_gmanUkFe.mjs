const getIssueStatIcon = (statType) => {
  switch (statType) {
    case "upvote":
      return "likes";
    case "downvote":
      return "likes";
    // You might want to use a different icon for downvote
    case "chat":
      return "chat";
    case "voting-power":
      return "vote-priority";
    case "follower":
      return "heart";
    case "money":
      return "money";
    case "persona":
      return "user";
    default:
      return "info";
  }
};

export { getIssueStatIcon as g };
