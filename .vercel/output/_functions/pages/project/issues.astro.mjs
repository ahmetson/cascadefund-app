import { i as createComponent, j as createAstro, w as renderComponent, r as renderTemplate } from '../../chunks/astro/server_WCbI3U70.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_aQb_8Ejw.mjs';
import { P as Panel } from '../../chunks/MenuPanel_CuPcNm2C.mjs';
import { M as MenuName } from '../../chunks/BrowseTracker_CjQaYJF4.mjs';
import { ObjectId } from 'mongodb';
import { g as getGalaxyById } from '../../chunks/galaxy_D015Gxde.mjs';
import { a as getProjectById } from '../../chunks/project_T6up3nk6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Issues = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Issues;
  const galaxyIdParam = Astro2.url.searchParams.get("galaxy");
  if (!galaxyIdParam) {
    return Astro2.redirect("/project/404?method=getGalaxyParam");
  }
  try {
    new ObjectId(galaxyIdParam);
  } catch (error) {
    return Astro2.redirect("/project/404?method=validateGalaxyId");
  }
  const galaxy = await getGalaxyById(galaxyIdParam);
  if (!galaxy || !galaxy.projectLink) {
    return Astro2.redirect("/project/404?method=getGalaxyById");
  }
  const project = await getProjectById(galaxy.projectLink);
  if (!project) {
    return Astro2.redirect("/project/404?method=getProjectById");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelViewLayout, { "hideLinks": Object.keys(MenuName) }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "WorkPanel", null, { "slot": "center", "client:only": "react", "galaxyId": galaxyIdParam, "client:component-hydration": "only", "client:component-path": "@/components/maintainer/WorkPanel", "client:component-export": "default" })}${renderComponent($$result2, "CreateIssueCTA", null, { "slot": "center", "client:only": "react", "galaxyId": galaxyIdParam, "client:component-hydration": "only", "client:component-path": "@/components/issue/CreateIssueCTA", "client:component-export": "default" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "MenuPanel", Panel, { "activeMenuItem": "issues", "slot": "left", "galaxy": galaxy, "projectIcon": project.socialLinks?.find((link) => link.type === "project")?.uri, "projectName": galaxy.name, "starCount": galaxy.stars })}`, "right": async ($$result2) => renderTemplate`${renderComponent($$result2, "PatcherPanel", null, { "slot": "right", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/issue/PatchableIssuesListPanel", "client:component-export": "default" })}` })}`;
}, "/home/medet/ara-app/src/pages/project/issues.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/project/issues.astro";
const $$url = "/project/issues";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Issues,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
