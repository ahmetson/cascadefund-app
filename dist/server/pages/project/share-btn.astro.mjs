import { j as createComponent, k as createAstro, x as renderComponent, r as renderTemplate } from '../../chunks/astro/server_BV1oLWnF.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_B3DF1IZV.mjs';
import { P as Panel } from '../../chunks/MenuPanel_ZPd_pAk2.mjs';
import { M as MenuName } from '../../chunks/Analytics_DTGhDLP0.mjs';
import { ObjectId } from 'mongodb';
import { g as getGalaxyById } from '../../chunks/galaxy_CZ-N3p2Y.mjs';
import { g as getProjectById } from '../../chunks/project_CAKChrPf.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ShareBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ShareBtn;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelViewLayout, { "hideLinks": Object.keys(MenuName) }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "ShareTools", null, { "galaxy": galaxy, "slot": "center", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/maintainer/ShareToolsPanel", "client:component-export": "default" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "MenuPanel", Panel, { "activeMenuItem": "share-btn", "slot": "left", "galaxy": galaxy, "projectIcon": project.socialLinks?.find((link) => link.type === "project")?.uri, "projectName": galaxy.name, "starCount": galaxy.stars })}` })}`;
}, "/home/medet/ara-app/src/pages/project/share-btn.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/project/share-btn.astro";
const $$url = "/project/share-btn";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ShareBtn,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
