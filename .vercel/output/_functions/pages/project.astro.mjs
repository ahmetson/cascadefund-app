import { i as createComponent, j as createAstro, w as renderComponent, r as renderTemplate } from '../chunks/astro/server_WCbI3U70.mjs';
import { $ as $$GalaxyLayout } from '../chunks/GalaxyLayout_CLlRJKZN.mjs';
import { M as MenuName } from '../chunks/BrowseTracker_CjQaYJF4.mjs';
import { B as BackButton } from '../chunks/BackButton_Cbeg5yyk.mjs';
import { a as getGalaxySpace, g as getUserStar } from '../chunks/all-stars_C7i-8iZJ.mjs';
import { g as getGalaxyById } from '../chunks/galaxy_D015Gxde.mjs';
import { a as getProjectById } from '../chunks/project_T6up3nk6.mjs';
import { getUserById, getUserByEmail } from '../chunks/user_Dmvk2cKy.mjs';
import { a as DEMO_COOKIE_NAMES } from '../chunks/demo_CnQUSMeS.mjs';
export { renderers } from '../renderers.mjs';

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
  const maintainer = await getUserById(galaxy.maintainer);
  const authorUri = maintainer?.uri || `/user?email=${maintainer?.email || "unknown"}`;
  const authorName = maintainer?.nickname || maintainer?.email?.split("@")[0] || "Unknown";
  const githubLink = project.socialLinks?.find((link) => link.type === "github");
  const blockchainExplorerLink = project.socialLinks?.find(
    (link) => link.type === "blockchain-explorer"
  );
  const documentationLink = project.socialLinks?.find(
    (link) => link.type === "documentation"
  );
  const isPlaceMode = Astro2.url.searchParams.get("place") === "true";
  const galaxySpace = await getGalaxySpace(galaxyIdParam);
  const demoEmail = Astro2.cookies.get(DEMO_COOKIE_NAMES.email)?.value ? decodeURIComponent(Astro2.cookies.get(DEMO_COOKIE_NAMES.email).value) : null;
  let currentUserData = null;
  let currentUserId;
  if (demoEmail) {
    const demoUser = await getUserByEmail(demoEmail);
    if (demoUser?._id) {
      currentUserId = demoUser._id;
      const userStar = await getUserStar(galaxyIdParam, demoUser._id);
      if (userStar) {
        currentUserData = {
          ...userStar,
          draggable: isPlaceMode,
          galaxyId: galaxyIdParam
        };
      } else {
        currentUserData = {
          galaxyId: galaxyIdParam,
          nickname: demoUser.nickname || demoEmail.split("@")[0],
          src: demoUser.src,
          alt: demoUser.alt,
          stars: demoUser.stars,
          sunshines: demoUser.sunshines,
          role: demoUser.role,
          uri: demoUser.uri,
          userId: demoUser._id,
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
    uri: project.uri,
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
      uri: authorUri,
      children: authorName,
      icon: maintainer?.src,
      rating: maintainer?.role === "maintainer" ? {
        ratingType: "maintainer",
        lvl: Math.floor((maintainer?.stars || 0) * 2),
        maxLvl: 10,
        top: 0
        // TODO: Calculate top position
      } : void 0
    },
    stars: starsWithDraggable,
    originalProjectUrl: "",
    followers: galaxy.users,
    createdTime: 0,
    // TODO: Add created time to galaxy model
    actions: [],
    projectGoal: 1e3
    // TODO: Add project goal to galaxy or project model
  };
  return renderTemplate`${renderComponent($$result, "GalaxyLayout", $$GalaxyLayout, { "active": MenuName.ProjectName, "hideLinks": Object.keys(MenuName), "projectName": projectData.title, "stars": projectData.stars, "projectGoal": projectData.projectGoal, "projectId": galaxyIdParam }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectLandingHero", null, { "slot": "center", "projectData": projectData, "projectUri": `/project/issues?galaxy=${galaxyIdParam}`, "githubUrl": githubLink?.uri, "blockchainExplorerUrl": blockchainExplorerLink?.uri, "documentationUrl": documentationLink?.uri, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/project/ProjectLandingHero", "client:component-export": "default" })}${isPlaceMode && renderTemplate`${renderComponent($$result2, "PlaceCtaPanel", null, { "slot": "center", "client:only": "react", "userData": currentUserData, "client:component-hydration": "only", "client:component-path": "@/components/project/PlaceCtaPanel", "client:component-export": "default" })}`}${!isPlaceMode && renderTemplate`${renderComponent($$result2, "ProjectCTAPanel", null, { "slot": "center", "client:only": "react", "galaxyId": galaxyIdParam, "projectName": projectData.title, "client:component-hydration": "only", "client:component-path": "@/components/project/ProjectCTAPanel", "client:component-export": "default" })}`}`, "header-navbar": async ($$result2) => renderTemplate`${renderComponent($$result2, "AllStarsContest", null, { "slot": "header-navbar", "client:only": "react", "projectGoal": 1e3, "currentStars": galaxy.stars, "projectName": galaxy.name, "projectUri": `/project?galaxy=${galaxyIdParam}`, "contest": {
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
  }, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/AllStarsContest", "client:component-export": "default" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}`, "right": async ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectGoalPanel", null, { "slot": "right", "client:only": "react", "stars": projectData.stars, "totalStars": projectData.rating.stars, "totalSunshines": projectData.rating.sunshines, "goalStars": 100, "projectGoal": projectData.projectGoal, "goalDonations": projectData.balance * 10, "projectName": projectData.title, "client:component-hydration": "only", "client:component-path": "@/components/project/ProjectGoalPanel", "client:component-export": "default" })}` })}`;
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
