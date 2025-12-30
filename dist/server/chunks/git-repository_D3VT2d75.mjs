const fetchReadmeContent = async (data) => {
  const readmeFiles = ["README.md", "README.txt", "README"];
  for (const file of readmeFiles) {
    let readmeUrl = "";
    if (data.provider === "github") {
      readmeUrl = `https://raw.githubusercontent.com/${data.owner}/${data.repo}/${data.metadata.defaultBranch}/${file}`;
    } else if (data.provider === "gitlab") {
      const baseUrl = data.host ? `https://${data.host}` : "https://gitlab.com";
      const encodedPath = encodeURIComponent(`${data.owner}/${data.repo}`);
      readmeUrl = `${baseUrl}/api/v4/projects/${encodedPath}/repository/files/${file}/raw?ref=${data.metadata.defaultBranch}`;
    }
    if (readmeUrl) {
      const response = await fetch(readmeUrl);
      if (response.ok) {
        const content = await response.text();
        const limitedContent = content.length <= 1e4 ? content.substring(0, 1e4) : content;
        return { content: limitedContent, url: readmeUrl };
      }
    }
  }
  return { content: null, url: null };
};

export { fetchReadmeContent };
