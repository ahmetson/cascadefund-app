import { j as createComponent, x as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BV1oLWnF.mjs';
import { $ as $$GalaxyLayout } from '../chunks/GalaxyLayout_B2Y-ERAe.mjs';
import { M as MenuName } from '../chunks/Analytics_DTGhDLP0.mjs';
import { B as BackButton } from '../chunks/BackButton_DebJpsQG.mjs';
import { a as mockUserStars } from '../chunks/mock-data_D-YsDoC3.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$People = createComponent(($$result, $$props, $$slots) => {
  const medetUser = {
    nickname: "Medet Ahmetson"};
  const medetGalaxies = [];
  const userX = 0;
  const userY = 0;
  return renderTemplate`${renderComponent($$result, "GalaxyLayout", $$GalaxyLayout, { "active": MenuName.ProjectName, "hideLinks": Object.keys(MenuName), "projectName": "People", "stars": mockUserStars, "projectGoal": 1e3, "projectX": userX, "projectY": userY, "projectGalaxies": medetGalaxies }, { "center": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative w-full min-h-screen py-8 px-4">  <div class="flex flex-col items-center space-y-8">  <div class="relative flex items-center justify-center mb-8"> ${renderComponent($$result2, "MedetAvatar", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/people/MedetAvatar", "client:component-export": "default" })} </div>  <div class="z-100 text-center space-y-4 max-w-3xl bg-white/5 dark:bg-yellow-900/5 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-6"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight"> ${medetUser.nickname} </h1> <div class="text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto space-y-4"> <p class="font-semibold">
Ara is my personal dream. I've been working on it quietly since I
            began learning programming in the 2010s, refining the same line of
            thought over many years.
</p> <p>
From the beginning, I was drawn to ideas that felt ahead of their
            time: AI, visual programming, Web 3.0, and decentralization. Back
            then, AI largely meant Expert Systems, Web 3.0 referred to the
            Semantic Web, and decentralization was mostly associated with
            peer-to-peer networks. That was the landscape I learned in.
</p> <p>
I noticed that these ideas struggled with adoption—not because they
            were wrong, but because they were incomplete when taken alone.
            Rather than becoming a specialist in each area, I focused on how
            they could work together as a single system.
</p> <p>
A major influence on this thinking was the book <em>Tango: The Operating System</em>, which explored what the computer of the future might look like.
            It pushed me to think beyond individual technologies and toward how
            people would actually interact with such systems.
</p> <p>
Instead of building a new operating system or breaking existing ones
            apart, I chose a simpler path: creating something compatible that
            could live on top of what already exists. Ara is my attempt to make
            that future a reality compatible with today's technology.
</p> <p>
After many iterations, and with today's technology, it finally
            became possible.
</p> </div> </div>  <div class="w-full flex justify-center py-4"> ${renderComponent($$result2, "MedetSocialLinks", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/people/MedetSocialLinks", "client:component-export": "default" })} </div>  <div class="w-full"> ${renderComponent($$result2, "MedetTimeline", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/people/MedetTimeline", "client:component-export": "default" })} </div> </div>  <div class="absolute top-20 right-8 md:right-16 z-20" style="pointer-events: auto;"> ${renderComponent($$result2, "SergeyStar", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/people/SergeyStar", "client:component-export": "default" })} </div> </div>`, "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "GalaxyAutoZoom", null, { "client:only": "react", "galaxyX": userX, "galaxyY": userY, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/GalaxyAutoZoom", "client:component-export": "default" })} `, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}` })} `;
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
