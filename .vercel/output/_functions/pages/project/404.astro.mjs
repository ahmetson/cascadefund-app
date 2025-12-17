import { i as createComponent, w as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_WCbI3U70.mjs';
import { $ as $$GalaxyLayout } from '../../chunks/GalaxyLayout_CLlRJKZN.mjs';
import { M as MenuName } from '../../chunks/BrowseTracker_CjQaYJF4.mjs';
import { B as BackButton } from '../../chunks/BackButton_Cbeg5yyk.mjs';
import { m as mockUserStars } from '../../chunks/mock-data_BzTrmzbT.mjs';
export { renderers } from '../../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const projectData = {
    title: "404 Not Found",
    stars: mockUserStars,
    projectGoal: 1e3
  };
  return renderTemplate`${renderComponent($$result, "GalaxyLayout", $$GalaxyLayout, { "active": MenuName.ProjectName, "hideLinks": Object.keys(MenuName), "projectName": projectData.title, "stars": projectData.stars, "projectGoal": projectData.projectGoal }, { "center": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-4"> <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-800 dark:text-slate-200">
404 Not Found
</h1> <p class="text-xl md:text-3xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
The project or galaxy you're looking for doesn't exist or has been
            removed.
</p> </div>`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}` })}`;
}, "/home/medet/ara-app/src/pages/project/404.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/project/404.astro";
const $$url = "/project/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
