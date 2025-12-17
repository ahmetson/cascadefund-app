import { i as createComponent, j as createAstro, w as renderComponent, r as renderTemplate } from '../../chunks/astro/server_WCbI3U70.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_aQb_8Ejw.mjs';
import { M as MenuName } from '../../chunks/BrowseTracker_CjQaYJF4.mjs';
import { ObjectId } from 'mongodb';
import { g as getGalaxyById } from '../../chunks/galaxy_D015Gxde.mjs';
import { a as getProjectById } from '../../chunks/project_T6up3nk6.mjs';
import { B as BackButton } from '../../chunks/BackButton_Cbeg5yyk.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Transactions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Transactions;
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
  const cascaded = Astro2.url.searchParams.get("cascaded");
  const defaultShowCascaded = cascaded === "true";
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelViewLayout, { "hideLinks": Object.keys(MenuName) }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "TransactionsHistoryPanel", null, { "galaxyId": galaxyIdParam, "defaultShowCascaded": defaultShowCascaded, "slot": "center", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/maintainer/TransactionsHistoryPanel", "client:component-export": "default" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}` })}`;
}, "/home/medet/ara-app/src/pages/project/transactions.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/project/transactions.astro";
const $$url = "/project/transactions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Transactions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
