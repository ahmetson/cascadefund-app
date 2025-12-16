import { i as createComponent, j as createAstro, w as renderComponent, r as renderTemplate, m as maybeRenderHead, l as addAttribute, x as renderSlot } from './astro/server_fdX1SiYK.mjs';
import { I as InfoPanel } from './InfoPanel_BEeHNdQh.mjs';
import { I as Importer } from './RowGrid_Dl5riSnU.mjs';
import { b as $$BaseSection } from './HeroSection_ZpuMqOVZ.mjs';

const $$Astro = createAstro();
const $$LeftImageRightPanelsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LeftImageRightPanelsSection;
  let { title, img, panels, prefix, cols, subtitle, bg } = Astro2.props;
  if (cols === void 0) {
    cols = 1;
  }
  return renderTemplate`${renderComponent($$result, "Section", $$BaseSection, { "bg": bg, "title": title, "subtitle": subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-8 items-center"> <div class="order-2 md:order-1"> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} class="w-full h-auto rounded-lg" referrerpolicy="no-referrer"> </div> <div class="order-1 md:order-2"> ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "HorizontalRow", Importer, { "cols": cols, "className": "order-1 md:order-2 space-y-6" }, { "default": ($$result3) => renderTemplate`${panels && panels.map((panel, index) => renderTemplate`${renderComponent($$result3, "InfoPanel", InfoPanel, { "key": prefix + index, "icon": panel.icon, "title": panel.title }, { "default": ($$result4) => renderTemplate`${panel.children}` })}`)}` })} </div> </div> ` })}`;
}, "/home/medet/ara-app/src/layouts/sections/LeftImageRightPanelsSection.astro", void 0);

export { $$LeftImageRightPanelsSection as $ };
