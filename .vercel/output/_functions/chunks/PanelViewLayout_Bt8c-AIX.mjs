import { i as createComponent, j as createAstro, l as addAttribute, w as renderComponent, y as renderHead, x as renderSlot, r as renderTemplate } from './astro/server_fdX1SiYK.mjs';
import { a as $$ClientRouter, b as $$Footer } from './eventTypes_PbqAZmEg.mjs';
/* empty css                         */
import { G as GradientBackground, a as GridSmallBackground, b as GravityStarsBackground, $ as $$HeaderCosmic } from './gradient_BwWwSSvf.mjs';
import { $ as $$ThreeColumnGrid } from './ThreeColumnGrid_DyBOOQxD.mjs';
/* empty css                             */

const $$Astro = createAstro();
const $$PanelViewLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PanelViewLayout;
  const { hideLinks, hideAuth, additional } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/ara_logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Ara</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="min-h-screen bg-slate-200 dark:bg-slate-800 border-1 border-red-500/10"> <div> ${renderComponent($$result, "GradientBackground", GradientBackground, { "className": "fixed h-screen w-screen z-0 pointer-events-none", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/animate-ui/components/backgrounds/gradient", "client:component-export": "GradientBackground" })}
x ${renderComponent($$result, "GridBackgrounded", GridSmallBackground, {})} ${renderComponent($$result, "GravityStarsBackground", GravityStarsBackground, { "className": "fixed h-screen w-screen z-1 pointer-events-none", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/animate-ui/components/backgrounds/gravity-stars", "client:component-export": "GravityStarsBackground" })} ${renderSlot($$result, $$slots["background"])} </div> <div class="z-2 relative"> ${renderComponent($$result, "Header", $$HeaderCosmic, { "hideLinks": hideLinks, "hideAuth": hideAuth, "additional": additional }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["header-navbar"])} ` })} <section class="mt-6"> ${renderSlot($$result, $$slots["hero"])} </section> ${renderComponent($$result, "ThreeColumnGrid", $$ThreeColumnGrid, { "centerPercents": "3/5", "className": "mx-auto py-8 space-x-4 px-4 mt-6 min-h-[calc(100vh-4rem)]" }, { "center": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["center"])}`, "left": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["left"])}`, "right": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["right"])}` })} ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/home/medet/ara-app/src/layouts/PanelViewLayout.astro", void 0);

export { $$PanelViewLayout as $ };
