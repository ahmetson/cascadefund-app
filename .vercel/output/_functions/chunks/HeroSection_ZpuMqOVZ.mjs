import { i as createComponent, j as createAstro, m as maybeRenderHead, l as addAttribute, w as renderComponent, r as renderTemplate, x as renderSlot, y as renderHead, z as Fragment } from './astro/server_fdX1SiYK.mjs';
import { G as GridStyle, $ as $$Logo, a as $$ClientRouter, b as $$Footer, B as BgType, c as bgClassNames, C as Component } from './eventTypes_PbqAZmEg.mjs';
/* empty css                         */
import { $ as $$LandingNavbar } from './LandingNavbar_Dh9NiZBJ.mjs';
/* empty css                               */
import { B as Button } from './PanelAction_DPZy3U8T.mjs';
import { I as Importer } from './ReactComponentImporter_CKrAs9OZ.mjs';

const $$Astro$3 = createAstro();
const $$LandingHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LandingHeader;
  const { subtitle, active, hideLinks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`h-14 -pt-2 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700  fixed top-0 right-0 left-0 z-10`, "class")}> <div${addAttribute(`navbar bg-base-100 dark:bg-gray-800 shadow-sm ${GridStyle.section.padding.x} h-14`, "class")}> <div class="navbar-start"> <div class="dropdown"> <div${addAttribute(0, "tabindex")} role="button" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path> </svg> </div> ${renderComponent($$result, "LandingNavbar", $$LandingNavbar, { "tabIndex": "-1", "className": "lg:hidden menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-95 ml-4 pl-6 shadow", "active": active ? active : void 0, "hideLinks": hideLinks ? hideLinks : void 0, "vertical": true }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])} ` })} </div> ${renderComponent($$result, "AraLogo", $$Logo, {})} </div> <div class="navbar-center hidden lg:flex lg:min-w-[50vw]"> ${renderComponent($$result, "LandingNavbar", $$LandingNavbar, { "className": "space-x-6 h-14", "active": active ? active : void 0, "hideLinks": hideLinks ? hideLinks : void 0 }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])} ` })} </div> <div class="navbar-end"></div> </div> </header>`;
}, "/home/medet/ara-app/src/components/utilitified_decorations/LandingHeader.astro", void 0);

const $$Astro$2 = createAstro();
const $$LandingLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LandingLayout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/ara_logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Ara</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="min-h-screen bg-gray-200 dark:bg-gray-700"> ${renderComponent($$result, "Header", $$LandingHeader, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/medet/ara-app/src/layouts/LandingLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseSection;
  let { title, titleClassName, actions, bg, icon, subtitle, className } = Astro2.props;
  if (bg === void 0) {
    bg = {
      sectionBgType: BgType.infoSection
    };
  }
  const sectionClassName = `${className} ${bgClassNames[bg.sectionBgType]}` + (bg.overlay ? " relative overflow-hidden " : "");
  return renderTemplate`${maybeRenderHead()}<section${addAttribute("py-14 " + sectionClassName, "class")} data-astro-cid-blzvvx3q> ${bg.overlay === "circles" && renderTemplate`<div class="absolute inset-0 opacity-10 z-0" data-astro-cid-blzvvx3q> <div class="absolute top-10 left-10 w-4 h-4 bg-blue-400 dark:bg-blue-300 rounded-full" data-astro-cid-blzvvx3q></div> <div class="absolute top-20 right-20 w-6 h-6 bg-purple-400 dark:bg-purple-300 rounded-full" data-astro-cid-blzvvx3q></div> <div class="absolute bottom-20 left-20 w-5 h-5 bg-green-400 dark:bg-green-300 rounded-full" data-astro-cid-blzvvx3q></div> <div class="absolute bottom-10 right-10 w-3 h-3 bg-yellow-400 dark:bg-yellow-300 rounded-full" data-astro-cid-blzvvx3q></div> <div class="absolute top-1/2 left-1/4 w-8 h-8 bg-pink-400 dark:bg-pink-300 rounded-full" data-astro-cid-blzvvx3q></div> <div class="absolute top-1/3 right-1/3 w-7 h-7 bg-indigo-400 dark:bg-indigo-300 rounded-full" data-astro-cid-blzvvx3q></div> </div>`} ${bg.overlay === "rectangles" && renderTemplate`<div class="absolute inset-0 opacity-20 z-0" data-astro-cid-blzvvx3q> <div class="absolute top-10 left-10 w-16 h-16 border border-yellow-400 dark:border-yellow-300 rounded-lg transform rotate-12" data-astro-cid-blzvvx3q></div> <div class="absolute top-20 right-20 w-12 h-12 border border-blue-400 dark:border-blue-300 rounded-full" data-astro-cid-blzvvx3q></div> <div class="absolute bottom-20 left-20 w-20 h-20 border border-green-400 dark:border-green-300 rounded-lg transform -rotate-12" data-astro-cid-blzvvx3q></div> <div class="absolute bottom-10 right-10 w-8 h-8 border border-purple-400 dark:border-purple-300 rounded-full" data-astro-cid-blzvvx3q></div> </div>`} <div class="relative inset-0 opacity-100 z-2 px-4 sm:px-6 lg:px-8 text-center text-slate-100 dark:text-slate-300" data-astro-cid-blzvvx3q> ${icon && renderTemplate`<div class="mb-8" data-astro-cid-blzvvx3q> <div class="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 dark:bg-yellow-300 rounded-xs mb-6" data-astro-cid-blzvvx3q> ${renderComponent($$result, "DynamicReactImporter", Importer, { "element": icon, "data-astro-cid-blzvvx3q": true })} </div> </div>`} ${title && renderTemplate`<h1${addAttribute(`text-4xl md:text-5xl font-bold mb-6 text-slate-100 dark:text-slate-300 ${titleClassName || ""}`, "class")} data-astro-cid-blzvvx3q> ${title} </h1>`} ${Array.isArray(subtitle) ? renderTemplate`<p class="text-2xl md:text-3xl opacity-90 mb-6 mx-12 slate-150 dark:text-slate-350" data-astro-cid-blzvvx3q> ${subtitle.map((item) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-blzvvx3q": true }, { "default": ($$result2) => renderTemplate`${item}<br data-astro-cid-blzvvx3q> ` })}`)} </p>` : subtitle ? renderTemplate`<p class="text-2xl md:text-3xl opacity-90 mb-6 mx-12 text-slate-150 dark:text-slate-350" data-astro-cid-blzvvx3q> ${subtitle} </p>` : null} ${renderSlot($$result, $$slots["default"])} ${actions && renderTemplate`<div class="flex flex-col sm:flex-row gap-8 mt-8 justify-center" data-astro-cid-blzvvx3q> ${actions.map(
    (action) => action.replaceWithChildren ? renderTemplate`${renderComponent($$result, "DynamicReactImporter", Importer, { "element": action.children, "data-astro-cid-blzvvx3q": true })}` : action.uri ? renderTemplate`${renderComponent($$result, "Link", Component, { "uri": action.uri, "className": action.className, "data-astro-cid-blzvvx3q": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", Button, { "variant": action.variant, "size": "lg", "className": action.className, "data-astro-cid-blzvvx3q": true }, { "default": ($$result3) => renderTemplate`${action.children}` })} ` })}` : renderTemplate`${renderComponent($$result, "Button", Button, { "size": "lg", "variant": action.variant, "className": `${action.className}`, "onClick": action.onClick, "data-astro-cid-blzvvx3q": true }, { "default": ($$result2) => renderTemplate`${action.children}` })}`
  )} </div>`} </div> </section> `;
}, "/home/medet/ara-app/src/layouts/sections/BaseSection.astro", void 0);

const $$Astro = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSection;
  let { title, actions, bg, subtitle } = Astro2.props;
  if (bg === void 0) {
    bg = {
      sectionBgType: BgType.heroSection
    };
  }
  return renderTemplate`${renderComponent($$result, "Section", $$BaseSection, { "className": "h-[80vh]", "title": title, "actions": actions, "bg": bg, "subtitle": subtitle }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/medet/ara-app/src/layouts/sections/HeroSection.astro", void 0);

export { $$LandingLayout as $, $$HeroSection as a, $$BaseSection as b };
