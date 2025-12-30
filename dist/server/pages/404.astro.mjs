import { j as createComponent, x as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BV1oLWnF.mjs';
import { $ as $$PanelViewLayout } from '../chunks/PanelViewLayout_B3DF1IZV.mjs';
import { C as Component, M as MenuName } from '../chunks/Analytics_DTGhDLP0.mjs';
import { H as Hyperspeed } from '../chunks/Hyperspeed_DO-OOdAF.mjs';
import { a as mockUserStars } from '../chunks/mock-data_D-YsDoC3.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const mockGalaxies = [
    {
      x: 200,
      y: 150,
      projectName: "Project Alpha",
      projectId: "1",
      galaxyData: {
        name: "Project Alpha",
        stars: 120,
        sunshines: 500
      },
      tags: ["Web3", "Open Source"],
      leaderboardPosition: 1
    },
    {
      x: 450,
      y: 300,
      projectName: "Project Beta",
      projectId: "2",
      galaxyData: {
        name: "Project Beta",
        stars: 95,
        sunshines: 400
      },
      tags: ["React", "TypeScript"],
      leaderboardPosition: 2
    },
    {
      x: 700,
      y: 200,
      projectName: "Project Gamma",
      projectId: "3",
      galaxyData: {
        name: "Project Gamma",
        stars: 80,
        sunshines: 350
      },
      tags: ["Frontend", "UI"],
      leaderboardPosition: 3
    },
    {
      x: 100,
      y: 400,
      projectName: "Project Delta",
      projectId: "4",
      galaxyData: {
        name: "Project Delta",
        stars: 65,
        sunshines: 280
      },
      tags: ["Backend", "API"],
      leaderboardPosition: 4
    },
    {
      x: 850,
      y: 500,
      projectName: "Project Epsilon",
      projectId: "5",
      galaxyData: {
        name: "Project Epsilon",
        stars: 50,
        sunshines: 200
      },
      tags: ["Mobile", "iOS"],
      leaderboardPosition: 5
    },
    {
      x: 300,
      y: 600,
      projectName: "Project Zeta",
      projectId: "6",
      galaxyData: {
        name: "Project Zeta",
        stars: 45,
        sunshines: 180
      },
      tags: ["Android", "Kotlin"],
      leaderboardPosition: 6
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelViewLayout, { "hideLinks": Object.keys(MenuName) }, { "background": ($$result2) => renderTemplate`${renderComponent($$result2, "Hyperspeed", Hyperspeed, { "effectOptions": {
    onSpeedUp: () => {
    },
    onSlowDown: () => {
    },
    distortion: "turbulentDistortion",
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 1.01,
    carLightsFade: 0.4,
    totalSideLightSticks: 12,
    lightPairsPerRoadWay: 20,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [0.5, 1],
    movingCloserSpeed: [-1, -2],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 1710638,
      islandColor: 1973822,
      background: 657946,
      shoulderLines: 16766696,
      brokenLines: 16770544,
      leftCars: [16757721, 16764134, 16767472],
      rightCars: [13939711, 15125759, 15784447],
      sticks: 16766696
    }
  }, "slot": "background", "className": "fixed h-screen w-screen z-2 pointer-events-none opacity-40", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Hyperspeed", "client:component-export": "default" })}`, "center": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-4 relative z-20"> <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-800 dark:text-slate-200">
404
</h1> <p class="text-xl md:text-3xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
Your URI not recognized by Ara.
</p> <div class="flex flex-col items-center gap-4 mt-8"> ${renderComponent($$result2, "Link", Component, { "uri": "/all-stars", "className": "text-lg font-medium underline underline-offset-4" }, { "default": ($$result3) => renderTemplate`
Check out all stars page to explore projects
` })} <span class="text-slate-500 dark:text-slate-500">or</span> ${renderComponent($$result2, "Link", Component, { "uri": "/", "className": "text-lg font-medium underline underline-offset-4" }, { "default": ($$result3) => renderTemplate`
learn more about Ara: /main page
` })} </div> </div>`, "default": ($$result2) => renderTemplate`   <div class="fixed top-0 left-0 w-screen h-screen z-10 pointer-events-none" id="galaxy-space" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; transform-origin: center center;"> ${renderComponent($$result2, "Space", null, { "client:only": "react", "users": mockUserStars, "className": "z-10", "projectGalaxies": mockGalaxies, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/Space", "client:component-export": "default" })} </div>   ` })} `;
}, "/home/medet/ara-app/src/pages/404.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
