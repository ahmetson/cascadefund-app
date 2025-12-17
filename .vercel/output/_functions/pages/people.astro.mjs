import { i as createComponent, w as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_WCbI3U70.mjs';
import { $ as $$GalaxyLayout } from '../chunks/GalaxyLayout_CLlRJKZN.mjs';
import { M as MenuName } from '../chunks/BrowseTracker_CjQaYJF4.mjs';
import { B as BackButton } from '../chunks/BackButton_Cbeg5yyk.mjs';
import { m as mockUserStars } from '../chunks/mock-data_BzTrmzbT.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$People = createComponent(($$result, $$props, $$slots) => {
  const medetUser = {
    nickname: "Medet Ahmetson"};
  const medetGalaxies = [];
  const userX = 0;
  const userY = 0;
  return renderTemplate`${renderComponent($$result, "GalaxyLayout", $$GalaxyLayout, { "active": MenuName.ProjectName, "hideLinks": Object.keys(MenuName), "projectName": "People", "stars": mockUserStars, "projectGoal": 1e3, "projectX": userX, "projectY": userY, "projectGalaxies": medetGalaxies }, { "center": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative w-full min-h-screen py-8 px-4">  <div class="flex flex-col items-center space-y-8">  <div class="relative flex items-center justify-center mb-8"> ${renderComponent($$result2, "MedetAvatar", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/people/MedetAvatar", "client:component-export": "default" })} </div>  <div class="text-center space-y-4 max-w-3xl"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight"> ${medetUser.nickname} </h1> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto italic">
Dreamy, unusual, and long-term thinking. Works on one thing constantly
          — Ara.
</p> <p class="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
A visual social media for open source projects that tracks project
          ownership, collaboration, and funds on blockchain.
</p> </div>  <div class="w-full flex justify-center py-4"> ${renderComponent($$result2, "MedetSocialLinks", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/people/MedetSocialLinks", "client:component-export": "default" })} </div>  <div class="w-full"> ${renderComponent($$result2, "MedetTimeline", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/people/MedetTimeline", "client:component-export": "default" })} </div> </div>  <div class="absolute top-20 right-8 md:right-16 z-20" style="pointer-events: auto;"> ${renderComponent($$result2, "SergeyStar", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/people/SergeyStar", "client:component-export": "default" })} </div> </div>`, "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "GalaxyAutoZoom", null, { "client:only": "react", "galaxyX": userX, "galaxyY": userY, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/GalaxyAutoZoom", "client:component-export": "default" })} `, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}` })} `;
}, "/home/medet/ara-app/src/pages/people.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/people.astro";
const $$url = "/people";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$People,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
