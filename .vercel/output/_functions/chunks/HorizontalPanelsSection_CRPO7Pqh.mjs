import { i as createComponent, j as createAstro, w as renderComponent, r as renderTemplate, x as renderSlot } from './astro/server_fdX1SiYK.mjs';
import { I as InfoPanel } from './InfoPanel_BEeHNdQh.mjs';
import { I as Importer } from './RowGrid_Dl5riSnU.mjs';
import { C } from './RolePanel_D-bVkXSM.mjs';
import { b as $$BaseSection } from './HeroSection_ZpuMqOVZ.mjs';

const $$Astro = createAstro();
const $$HorizontalPanelsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HorizontalPanelsSection;
  let {
    panels,
    bottomPanel,
    title,
    prefix,
    cols,
    className,
    bg,
    titleClassName
  } = Astro2.props;
  if (!cols) {
    cols = panels && panels.length > 4 ? 3 : panels.length || 0;
  }
  return renderTemplate`${renderComponent($$result, "Section", $$BaseSection, { "bg": bg, "title": title, "className": className, "titleClassName": titleClassName }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["top"])} ${renderComponent($$result2, "Horizontally", Importer, { "cols": cols, "className": "mb-6" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["grid"], renderTemplate` ${panels && panels.map(
    (step, index) => step.roleCard ? renderTemplate`${renderComponent($$result3, "C", C, { ...step })}` : step.description === void 0 ? renderTemplate`${renderComponent($$result3, "InfoPanel", InfoPanel, { "title": step.title, "icon": {
      iconType: step.icon,
      fill: step.iconBgColor || "blue-500"
    } })}` : renderTemplate`${renderComponent($$result3, "InfoPanel", InfoPanel, { "key": prefix + index, ...step })}`
  )} `)} ${bottomPanel === void 0 ? null : renderTemplate`${renderComponent($$result3, "InfoPanel", InfoPanel, { "key": "bottom-panel", ...bottomPanel })}`}` })} ` })}`;
}, "/home/medet/ara-app/src/layouts/sections/HorizontalPanelsSection.astro", void 0);

export { $$HorizontalPanelsSection as $ };
