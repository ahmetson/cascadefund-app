import { i as createComponent, j as createAstro, m as maybeRenderHead, l as addAttribute, x as renderSlot, r as renderTemplate } from './astro/server_fdX1SiYK.mjs';
import 'clsx';
import { G as GridStyle } from './eventTypes_PbqAZmEg.mjs';

const $$Astro = createAstro();
const $$ThreeColumnGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThreeColumnGrid;
  let {
    className,
    centerPercents,
    centerClassName,
    leftClassName,
    rightClassName
  } = Astro2.props;
  if (className === void 0) {
    className = " mx-auto ";
  }
  if (centerPercents === void 0) {
    centerPercents = 50;
  }
  const cols = centerPercents === "1/3" ? "lg:grid-cols-3" : centerPercents === 50 ? "lg:grid-cols-4" : centerPercents === "3/4" ? "lg:grid-cols-8" : centerPercents === "4/5" ? "lg:grid-cols-10" : "lg:grid-cols-10";
  const centerSpan = centerPercents === "1/3" ? "lg:col-span-1" : centerPercents === 50 ? "lg:col-span-2" : centerPercents === "3/4" ? "lg:col-span-6" : centerPercents === "4/5" ? "lg:col-span-8" : "lg:col-span-6";
  const leftSpan = centerPercents === "3/5" ? "lg:col-span-2" : "lg:col-span-1";
  const rightSpan = centerPercents === "3/5" ? "lg:col-span-2" : "lg:col-span-1";
  return renderTemplate`${maybeRenderHead()}<main${addAttribute(`grid grid-cols-1 ${cols} ${className}`, "class")}> <div${addAttribute(`${leftSpan} ${GridStyle.panel.gap.y} ${GridStyle.panel.margin.right} ${leftClassName || ""}`, "class")}> ${renderSlot($$result, $$slots["left"])} </div> <div${addAttribute(`${centerSpan} ${GridStyle.panel.gap.y} ${GridStyle.panel.margin.x} ${centerClassName || ""}`, "class")}> ${renderSlot($$result, $$slots["center"])} </div> <div${addAttribute(`${rightSpan} ${GridStyle.panel.gap.y} ${GridStyle.panel.margin.left} ${rightClassName || ""}`, "class")}> ${renderSlot($$result, $$slots["right"])} </div> </main>`;
}, "/home/medet/ara-app/src/components/grid/ThreeColumnGrid.astro", void 0);

export { $$ThreeColumnGrid as $ };
