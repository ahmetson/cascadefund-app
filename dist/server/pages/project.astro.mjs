import { j as createComponent, k as createAstro, x as renderComponent, r as renderTemplate } from '../chunks/astro/server_BV1oLWnF.mjs';
import { $ as $$GalaxyLayout } from '../chunks/GalaxyLayout_B2Y-ERAe.mjs';
import { M as MenuName } from '../chunks/Analytics_DTGhDLP0.mjs';
import { B as BackButton } from '../chunks/BackButton_DebJpsQG.mjs';
import { a as getGalaxySpace, k as getSBOMByProjectId, g as getUserStar } from '../chunks/sbom_D-4c3Pyk.mjs';
import { g as getGalaxyById, b as getAllGalaxies } from '../chunks/galaxy_CZ-N3p2Y.mjs';
import { g as getProjectById } from '../chunks/project_CAKChrPf.mjs';
import { g as getStarById, e as getStarByUserId } from '../chunks/star_BqlfetDB.mjs';
import { g as getAuthUserById } from '../chunks/auth_BUazfeO9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { P as PageLikePanel } from '../chunks/PageLikePanel_tQY1YL9T.mjs';
export { renderers } from '../renderers.mjs';

const LabelValue = ({ label, value }) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-1", children: [
  /* @__PURE__ */ jsxs("span", { className: "text-slate-600 dark:text-slate-400 font-medium", children: [
    label,
    ":"
  ] }),
  /* @__PURE__ */ jsx("span", { className: "text-slate-800 dark:text-slate-200", children: value })
] });
const RepositoryInfoPanel = ({
  project,
  galaxy,
  sbom
}) => {
  const [expandedSections, setExpandedSections] = useState(/* @__PURE__ */ new Set(["project", "galaxy"]));
  const toggleSection = (section) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  };
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp * 1e3);
    return date.toLocaleString();
  };
  const formatRelativeTime = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp * 1e3);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };
  return /* @__PURE__ */ jsxs(
    PageLikePanel,
    {
      className: "mt-8 max-w-2xl mx-auto rounded-xl",
      icon: "project",
      title: "Repository Information",
      titleCenter: false,
      interactive: false,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggleSection("project"),
              className: "w-full text-left flex items-center justify-between py-2 font-semibold text-slate-700 dark:text-slate-300",
              children: [
                /* @__PURE__ */ jsx("span", { children: "Project Information" }),
                /* @__PURE__ */ jsx("span", { children: expandedSections.has("project") ? "−" : "+" })
              ]
            }
          ),
          expandedSections.has("project") && /* @__PURE__ */ jsxs("div", { className: "space-y-2 pl-4 border-l-2 border-slate-200 dark:border-slate-700", children: [
            /* @__PURE__ */ jsx(LabelValue, { label: "Created At", value: formatTimestamp(project.createdAt) }),
            /* @__PURE__ */ jsx(LabelValue, { label: "Last Commit ID", value: project.lastCommitId || "N/A" }),
            /* @__PURE__ */ jsx(LabelValue, { label: "Last Commit Update", value: formatRelativeTime(project.lastCommitUpdateTime) }),
            /* @__PURE__ */ jsx(LabelValue, { label: "Branch Name", value: project.branchName || "N/A" }),
            /* @__PURE__ */ jsx(LabelValue, { label: "Total Commits", value: project.totalCommits?.toString() || "0" }),
            /* @__PURE__ */ jsx(LabelValue, { label: "License", value: project.license || "N/A" }),
            project.forkLines && project.forkLines.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "Fork Lines" }),
              project.forkLines.map((forkLine, index) => /* @__PURE__ */ jsxs("div", { className: "ml-4 mb-2 p-2 bg-slate-50 dark:bg-slate-800/50 rounded", children: [
                /* @__PURE__ */ jsx(LabelValue, { label: "From", value: forkLine.from }),
                /* @__PURE__ */ jsx(LabelValue, { label: "To", value: forkLine.to }),
                /* @__PURE__ */ jsx(LabelValue, { label: "Via Issues", value: forkLine.via.length.toString() })
              ] }, index))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 mt-6", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggleSection("galaxy"),
              className: "w-full text-left flex items-center justify-between py-2 font-semibold text-slate-700 dark:text-slate-300",
              children: [
                /* @__PURE__ */ jsx("span", { children: "Galaxy Information" }),
                /* @__PURE__ */ jsx("span", { children: expandedSections.has("galaxy") ? "−" : "+" })
              ]
            }
          ),
          expandedSections.has("galaxy") && /* @__PURE__ */ jsxs("div", { className: "space-y-2 pl-4 border-l-2 border-slate-200 dark:border-slate-700", children: [
            galaxy.blockchainId && /* @__PURE__ */ jsx(LabelValue, { label: "Blockchain ID", value: galaxy.blockchainId }),
            galaxy.blockchainTx && /* @__PURE__ */ jsx(LabelValue, { label: "Blockchain Transaction", value: galaxy.blockchainTx })
          ] })
        ] }),
        sbom && /* @__PURE__ */ jsxs("div", { className: "space-y-4 mt-6", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggleSection("sbom"),
              className: "w-full text-left flex items-center justify-between py-2 font-semibold text-slate-700 dark:text-slate-300",
              children: [
                /* @__PURE__ */ jsx("span", { children: "SBOM Data" }),
                /* @__PURE__ */ jsx("span", { children: expandedSections.has("sbom") ? "−" : "+" })
              ]
            }
          ),
          expandedSections.has("sbom") && /* @__PURE__ */ jsxs("div", { className: "space-y-2 pl-4 border-l-2 border-slate-200 dark:border-slate-700", children: [
            /* @__PURE__ */ jsx(LabelValue, { label: "SBOM ID", value: sbom._id || "N/A" }),
            /* @__PURE__ */ jsx(LabelValue, { label: "Provider", value: sbom.provider }),
            /* @__PURE__ */ jsx(LabelValue, { label: "Source", value: sbom.source }),
            /* @__PURE__ */ jsx(LabelValue, { label: "Completeness", value: sbom.completeness }),
            /* @__PURE__ */ jsx(LabelValue, { label: "Detected At", value: formatTimestamp(sbom.detectedAt) }),
            /* @__PURE__ */ jsx(LabelValue, { label: "Git URL", value: sbom.gitUrl }),
            /* @__PURE__ */ jsx(LabelValue, { label: "Dependencies Count", value: sbom.dependencies?.length?.toString() || "0" }),
            sbom.dependencies && sbom.dependencies.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
              /* @__PURE__ */ jsxs("p", { className: "font-semibold text-slate-700 dark:text-slate-300 mb-2", children: [
                "Dependencies (",
                sbom.dependencies.length,
                ")"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "max-h-60 overflow-y-auto space-y-1", children: [
                sbom.dependencies.slice(0, 20).map((dep, index) => /* @__PURE__ */ jsx("div", { className: "ml-4 p-2 bg-slate-50 dark:bg-slate-800/50 rounded text-xs", children: /* @__PURE__ */ jsxs("div", { className: "font-mono", children: [
                  dep.name || dep.purl || JSON.stringify(dep),
                  dep.version && /* @__PURE__ */ jsxs("span", { className: "text-slate-500", children: [
                    "@",
                    dep.version
                  ] })
                ] }) }, index)),
                sbom.dependencies.length > 20 && /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500 ml-4", children: [
                  "... and ",
                  sbom.dependencies.length - 20,
                  " more"
                ] })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const galaxyIdParam = Astro2.url.searchParams.get("galaxy");
  if (!galaxyIdParam) {
    return Astro2.redirect("/project/404?method=getGalaxyIdParam");
  }
  const galaxy = await getGalaxyById(galaxyIdParam);
  if (!galaxy) {
    return Astro2.redirect("/project/404?method=getGalaxyById");
  }
  const project = await getProjectById(galaxy.projectLink);
  if (!project) {
    return Astro2.redirect("/project/404?method=getProjectById");
  }
  const maintainer = await getStarById(galaxy.maintainer);
  console.error(`Found maintainer of the project:`, maintainer?.userId);
  let authorName = "Unknown";
  let maintainerSrc;
  if (maintainer?.userId) {
    const maintainerAuthUser = await getAuthUserById(maintainer.userId);
    console.log(`Maintainer was fetched from the database:`, maintainerAuthUser);
    if (maintainerAuthUser) {
      authorName = maintainerAuthUser.name || maintainerAuthUser.username || maintainerAuthUser.email?.split("@")[0] || "Unknown";
      maintainerSrc = maintainerAuthUser.image;
    }
  }
  const githubLink = project.socialLinks?.find((link) => link.type === "github");
  const blockchainExplorerLink = project.socialLinks?.find(
    (link) => link.type === "blockchain-explorer"
  );
  const documentationLink = project.socialLinks?.find(
    (link) => link.type === "documentation"
  );
  const isPlaceMode = Astro2.url.searchParams.get("place") === "true";
  const galaxySpace = await getGalaxySpace(galaxyIdParam);
  const sbom = await getSBOMByProjectId(project._id);
  const betterAuthUser = Astro2.locals.user;
  const authUser = betterAuthUser ? {
    id: betterAuthUser.id,
    email: betterAuthUser.email,
    emailVerified: betterAuthUser.emailVerified || false,
    username: betterAuthUser.username,
    displayUsername: betterAuthUser.displayUsername,
    name: betterAuthUser.name,
    image: betterAuthUser.image ? betterAuthUser.image : void 0,
    createdAt: betterAuthUser.createdAt,
    updatedAt: betterAuthUser.updatedAt
  } : null;
  let currentUserData = null;
  let currentUserId;
  let userStar = null;
  if (authUser?.id) {
    userStar = await getStarByUserId(authUser.id);
    if (userStar?._id) {
      currentUserId = userStar._id;
      const galaxyUserStar = await getUserStar(galaxyIdParam, userStar._id);
      if (galaxyUserStar) {
        currentUserData = {
          ...galaxyUserStar,
          draggable: isPlaceMode,
          galaxyId: galaxyIdParam
        };
      } else {
        const nickname = authUser.name || authUser.username || authUser.email?.split("@")[0] || "User";
        currentUserData = {
          galaxyId: galaxyIdParam,
          nickname,
          src: authUser.image,
          alt: void 0,
          stars: userStar.stars || 0,
          sunshines: userStar.sunshines || 0,
          role: void 0,
          // Star type doesn't have role, will be set when user places star in galaxy
          uri: void 0,
          userId: userStar._id,
          draggable: isPlaceMode
        };
      }
    }
  }
  const starsWithDraggable = galaxySpace.map((star) => ({
    ...star,
    draggable: isPlaceMode && star.userId === currentUserId
  }));
  const projectData = {
    title: galaxy.name,
    isInfluencer: false,
    // TODO: Determine from user data
    rating: {
      sunshines: galaxy.sunshines,
      stars: galaxy.stars
    },
    forks: project.forkLines.length,
    likes: 0,
    // TODO: Add likes to galaxy model if needed
    isFollowing: false,
    // TODO: Check if current user is following
    originalProject: project.forkLines.length > 0 ? "Original project" : "",
    issue: project.forkLines.length > 0 ? `Issue: ${project.forkLines[0].via.length} issues` : "",
    description: galaxy.description,
    license: project.license || "MIT License",
    balance: galaxy.donationAmount,
    cascadeBalance: 0,
    // TODO: Add cascade balance to galaxy model if needed
    totalAmount: 0,
    // TODO: Calculate from donations
    duration: "0 days",
    // TODO: Calculate from created time
    lastActivity: project.lastCommitUpdateTime ? Date.now() - project.lastCommitUpdateTime : 0,
    totalCommits: project.totalCommits || 0,
    commitsPerDay: "0 commits / day",
    // TODO: Calculate from commits
    openIssues: 0,
    // TODO: Add issues count to galaxy model
    closedIssues: 0,
    // TODO: Add closed issues count to galaxy model
    avgResponseTime: "N/A",
    // TODO: Calculate from issues
    author: {
      _id: maintainer?._id,
      userId: maintainer?.userId,
      src: maintainerSrc,
      children: authorName,
      icon: maintainerSrc,
      rating: void 0
    },
    // Type mismatch: ProfileLink (Star) doesn't match actual usage
    stars: starsWithDraggable,
    originalProjectUrl: "",
    followers: galaxy.users,
    createdTime: 0,
    // TODO: Add created time to galaxy model
    actions: [],
    projectGoal: 1e3
    // TODO: Add project goal to galaxy or project model
  };
  const allGalaxies = await getAllGalaxies();
  const galaxyXValues = allGalaxies.length > 0 ? allGalaxies.map((g) => g.x || 0) : [0];
  const galaxyYValues = allGalaxies.length > 0 ? allGalaxies.map((g) => g.y || 0) : [0];
  const minX = Math.min(...galaxyXValues);
  const maxX = Math.max(...galaxyXValues);
  const minY = Math.min(...galaxyYValues);
  const maxY = Math.max(...galaxyYValues);
  return renderTemplate`${renderComponent($$result, "GalaxyLayout", $$GalaxyLayout, { "active": MenuName.ProjectName, "hideLinks": Object.keys(MenuName), "projectName": projectData.title, "stars": projectData.stars, "projectGoal": projectData.projectGoal, "projectId": galaxyIdParam }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectLandingHero", null, { "slot": "center", "projectData": projectData, "projectUri": `/project/issues?galaxy=${galaxyIdParam}`, "githubUrl": githubLink?.uri, "blockchainExplorerUrl": blockchainExplorerLink?.uri, "documentationUrl": documentationLink?.uri, "readmeContent": project.readmeContent, "readmeUpdateTime": project.readmeUpdateTime, "readmeUrl": project.readmeUrl, "tags": galaxy.tags, "projectId": project._id, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/project/ProjectLandingHero", "client:component-export": "default" })}${isPlaceMode && renderTemplate`${renderComponent($$result2, "PlaceCtaPanel", null, { "slot": "center", "client:only": "react", "userData": currentUserData, "client:component-hydration": "only", "client:component-path": "@/components/project/PlaceCtaPanel", "client:component-export": "default" })}`}${!isPlaceMode && renderTemplate`${renderComponent($$result2, "ProjectCTAPanel", null, { "slot": "center", "client:only": "react", "galaxyId": galaxyIdParam, "projectName": projectData.title, "client:component-hydration": "only", "client:component-path": "@/components/project/ProjectCTAPanel", "client:component-export": "default" })}`}${renderComponent($$result2, "RepositoryInfoPanel", RepositoryInfoPanel, { "slot": "center", "project": project, "galaxy": galaxy, "sbom": sbom })}`, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "GalaxyBar", null, { "slot": "footer", "client:only": "react", "galaxyId": galaxyIdParam, "projectIcon": project.socialLinks?.find((link) => link.type === "project")?.uri, "projectName": galaxy.name, "userSunshines": currentUserData?.sunshines ?? userStar?.sunshines ?? 0, "userStars": currentUserData?.stars ?? userStar?.stars ?? 0, "hasStarOnPage": currentUserData?.x !== void 0 && currentUserData?.y !== void 0 && currentUserData.x > 0 && currentUserData.y > 0, "client:component-hydration": "only", "client:component-path": "@/components/project/GalaxyBar", "client:component-export": "default" })}`, "header-navbar": async ($$result2) => renderTemplate`${renderComponent($$result2, "AllStarsContest", null, { "slot": "header-navbar", "client:only": "react", "projectGoal": 1e3, "currentStars": galaxy.stars, "projectName": galaxy.name, "projectUri": `/project?galaxy=${galaxyIdParam}`, "contest": {
    title: "Galaxy Formation Contest",
    description: "Projects that reach their star goal become galaxies and compete for prizes",
    goal: projectData.projectGoal || 1e3,
    prize: "10,000 tokens + Featured placement",
    endTime: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3),
    // 30 days from now
    position: 5,
    contestFromDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3),
    // 7 days ago
    contestToDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3)
    // 30 days from now
  }, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/AllStarsContest", "client:component-export": "default" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}${renderComponent($$result2, "AllStarsUniversePanel", null, { "slot": "left", "client:only": "react", "galaxyId": galaxyIdParam, "galaxyX": galaxy.x, "galaxyY": galaxy.y, "universeBounds": { minX, maxX, minY, maxY }, "maintainerId": galaxy.maintainer, "currentUserId": currentUserId, "client:component-hydration": "only", "client:component-path": "@/components/project/AllStarsUniversePanel", "client:component-export": "default" })}`, "right": async ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectGoalPanel", null, { "slot": "right", "client:only": "react", "stars": projectData.stars, "totalStars": projectData.rating.stars, "totalSunshines": projectData.rating.sunshines, "goalStars": 100, "projectGoal": projectData.projectGoal, "goalDonations": projectData.balance * 10, "projectName": projectData.title, "donationAmount": galaxy.donationAmount, "maintainerName": authorName, "maintainerImage": maintainerSrc, "maintainerId": maintainer?._id?.toString(), "ownershipGoal": 1e3, "client:component-hydration": "only", "client:component-path": "@/components/project/ProjectGoalPanel", "client:component-export": "default" })}` })}`;
}, "/home/medet/ara-app/src/pages/project/index.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/project/index.astro";
const $$url = "/project";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
