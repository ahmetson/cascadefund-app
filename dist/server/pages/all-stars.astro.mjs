import { j as createComponent, k as createAstro, x as renderComponent, r as renderTemplate } from '../chunks/astro/server_BV1oLWnF.mjs';
import { $ as $$GalaxyLayout } from '../chunks/GalaxyLayout_B2Y-ERAe.mjs';
import { M as MenuName } from '../chunks/Analytics_DTGhDLP0.mjs';
import { B as BackButton } from '../chunks/BackButton_DebJpsQG.mjs';
import { b as mockContestData } from '../chunks/mock-data_D-YsDoC3.mjs';
import { g as getGalaxyById, b as getAllGalaxies } from '../chunks/galaxy_CZ-N3p2Y.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const galaxyId = Astro2.url.searchParams.get("galaxy");
  const selectedGalaxy = galaxyId ? await getGalaxyById(galaxyId) : null;
  const allGalaxiesData = await getAllGalaxies(true);
  const currentStarsunshines = 0;
  const allGalaxies = allGalaxiesData.map((galaxy, index) => ({
    x: galaxy.x,
    y: galaxy.y,
    projectName: galaxy.name,
    projectId: galaxy._id?.toString() || "",
    galaxyData: galaxy,
    tags: galaxy.tags,
    leaderboardPosition: index + 1
  }));
  return renderTemplate`${renderComponent($$result, "GalaxyLayout", $$GalaxyLayout, { "active": MenuName.ProjectList, "hideLinks": Object.keys(MenuName), "projectName": "Ara Universe", "projectX": 0, "projectY": 0, "projectGalaxies": allGalaxies }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "UniverseHero", null, { "slot": "center", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/all-stars/UniverseHero", "client:component-export": "default" })}${renderComponent($$result2, "DemoCtaPanel", null, { "slot": "center", "client:only": "react", "projectName": selectedGalaxy?.name || "", "galaxyId": selectedGalaxy?._id.toString() || "", "client:component-hydration": "only", "client:component-path": "@/components/project/DemoCtaPanel", "client:component-export": "default" })}`, "default": async ($$result2) => renderTemplate`       ${renderComponent($$result2, "GalaxyAutoZoom", null, { "client:only": "react", "galaxyX": selectedGalaxy?.x || 0, "galaxyY": selectedGalaxy?.y || 0, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/GalaxyAutoZoom", "client:component-export": "default" })} `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "UniverseResearchPanel", null, { "slot": "footer", "client:only": "react", "starsunshines": currentStarsunshines, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/UniverseResearchPanel", "client:component-export": "default" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}${renderComponent($$result2, "AllStarsLeaderboardPanels", null, { "slot": "left", "client:only": "react", "topGalaxies": allGalaxiesData, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/AllStarsLeaderboardPanels", "client:component-export": "default" })}`, "right": async ($$result2) => renderTemplate`${renderComponent($$result2, "AllStarsContestPanel", null, { "slot": "right", "client:only": "react", "prizePool": mockContestData.prizePool, "contestFromDate": mockContestData.fromDate, "contestToDate": mockContestData.toDate, "contestDescription": mockContestData.description, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/AllStarsContestPanel", "client:component-export": "default" })}` })} `;
}, "/home/medet/ara-app/src/pages/all-stars/index.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/all-stars/index.astro";
const $$url = "/all-stars";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
