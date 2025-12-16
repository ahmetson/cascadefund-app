import { i as createComponent, j as createAstro, l as addAttribute, w as renderComponent, y as renderHead, x as renderSlot, r as renderTemplate } from './astro/server_fdX1SiYK.mjs';
import { a as $$ClientRouter, b as $$Footer } from './eventTypes_PbqAZmEg.mjs';
/* empty css                         */
import { G as GradientBackground, a as GridSmallBackground, b as GravityStarsBackground, $ as $$HeaderCosmic } from './gradient_BwWwSSvf.mjs';
import { $ as $$ThreeColumnGrid } from './ThreeColumnGrid_DyBOOQxD.mjs';

const $$Astro = createAstro();
const $$GalaxyLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GalaxyLayout;
  const {
    hideLinks,
    hideAuth,
    additional,
    projectName,
    initialZoom,
    minZoom,
    maxZoom,
    maxGalaxyContent,
    stars,
    projectId,
    projectGalaxies,
    isStatic = false
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/ara_logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${"'" + projectName + "' star galaxy"}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="min-h-screen bg-slate-200 dark:bg-slate-800 border-1 border-red-500/10"> <!-- Background Container - Will be transformed by GalaxyZoomWrapper --> <div data-galaxy-backgrounds style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; transform-origin: center center; pointer-events: auto; z-index: 0; overflow: hidden;"> ${isStatic ? renderTemplate`${renderComponent($$result, "GradientBackground", GradientBackground, { "className": "fixed h-screen w-screen z-0 pointer-events-none" })}` : renderTemplate`${renderComponent($$result, "GradientBackground", null, { "client:only": "react", "className": "fixed h-screen w-screen z-0 pointer-events-none", "client:component-hydration": "only", "client:component-path": "@/components/animate-ui/components/backgrounds/gradient", "client:component-export": "GradientBackground" })}`} ${renderComponent($$result, "GridBackgrounded", GridSmallBackground, {})} ${isStatic ? renderTemplate`${renderComponent($$result, "GravityStarsBackground", GravityStarsBackground, { "className": "fixed h-screen w-screen z-1 pointer-events-none" })}` : renderTemplate`${renderComponent($$result, "GravityStarsBackground", null, { "client:only": "react", "className": "fixed h-screen w-screen z-1 pointer-events-none", "client:component-hydration": "only", "client:component-path": "@/components/animate-ui/components/backgrounds/gravity-stars", "client:component-export": "GravityStarsBackground" })}`} <div class="fixed h-screen w-screen z-2"> ${renderComponent($$result, "Galaxy", null, { "client:only": "react", "mouseInteraction": false, "speed": 0.25, "rotationSpeed": 0.015, "twinkleIntensity": 0.1, "glowIntensity": 0.1, "autoCenterRepulsion": 0.5, "client:component-hydration": "only", "client:component-path": "@/components/Galaxy", "client:component-export": "default" })} </div> ${renderSlot($$result, $$slots["background"])} </div> <!-- Content Container - Will be transformed by GalaxyZoomWrapper --> <div data-galaxy-fixed> ${renderComponent($$result, "Header", $$HeaderCosmic, { "hideLinks": hideLinks, "hideAuth": hideAuth, "additional": additional }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["header-navbar"])} ` })} </div> <div id="galaxy-space" class="z-2 relative border border-red-500/20" style="transform-origin: center center;"> ${renderComponent($$result, "Space", null, { "client:only": "react", "users": stars || [], "className": "z-10", "galaxyId": projectId, "projectGalaxies": projectGalaxies, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/Space", "client:component-export": "default" })} <section class="mt-6"> ${renderSlot($$result, $$slots["hero"])} </section> ${renderComponent($$result, "ThreeColumnGrid", $$ThreeColumnGrid, { "centerPercents": "3/5", "className": "mx-auto py-16 space-x-8 px-8 min-h-[calc(100vh-4rem)]" }, { "center": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["center"])}`, "left": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["left"])}`, "right": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["right"])}` })} </div> <div data-galaxy-fixed id="galaxy-footer"> ${renderSlot($$result, $$slots["footer"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${renderComponent($$result, "GalaxyLayoutBody", null, { "client:only": "react", "projectName": projectName, "initialZoom": initialZoom, "minZoom": minZoom, "maxZoom": maxZoom, "maxGalaxyContent": maxGalaxyContent, "projectId": projectId, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/GalaxyLayoutBody", "client:component-export": "default" })} </body></html>`;
}, "/home/medet/ara-app/src/layouts/GalaxyLayout.astro", void 0);

export { $$GalaxyLayout as $ };
