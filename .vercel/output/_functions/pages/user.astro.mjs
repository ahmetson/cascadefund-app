import { i as createComponent, j as createAstro, w as renderComponent, r as renderTemplate } from '../chunks/astro/server_WCbI3U70.mjs';
import { $ as $$GalaxyLayout } from '../chunks/GalaxyLayout_CLlRJKZN.mjs';
import { M as MenuName } from '../chunks/BrowseTracker_CjQaYJF4.mjs';
import { B as BackButton } from '../chunks/BackButton_Cbeg5yyk.mjs';
import { getUserById, getUserByEmail } from '../chunks/user_Dmvk2cKy.mjs';
import { d as getGalaxiesByMaintainer } from '../chunks/galaxy_D015Gxde.mjs';
import { m as mockUserStars } from '../chunks/mock-data_BzTrmzbT.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const userIdParam = Astro2.url.searchParams.get("id");
  const userEmailParam = Astro2.url.searchParams.get("email");
  let user = null;
  if (userIdParam) {
    console.log("user id param", userIdParam);
    user = await getUserById(userIdParam);
    console.log("user by id", user);
  } else if (userEmailParam) {
    user = await getUserByEmail(userEmailParam);
    console.log("user by email", user);
  } else {
    const demoEmail = Astro2.cookies.get("demo-email")?.value;
    if (demoEmail) {
      user = await getUserByEmail(demoEmail);
      console.log("user by demo email", user);
    } else {
      console.log("no user found");
    }
  }
  if (!user) {
    return Astro2.redirect("/user/404");
  }
  const userGalaxies = await getGalaxiesByMaintainer(user._id);
  const allGalaxies = userGalaxies.map((galaxy, index) => ({
    x: galaxy.x,
    y: galaxy.y,
    projectName: galaxy.name,
    projectId: galaxy._id?.toString() || "",
    galaxyData: galaxy,
    tags: galaxy.tags,
    leaderboardPosition: index + 1
  }));
  const userX = userGalaxies.length > 0 ? userGalaxies.reduce((sum, g) => sum + g.x, 0) / userGalaxies.length : 0;
  const userY = userGalaxies.length > 0 ? userGalaxies.reduce((sum, g) => sum + g.y, 0) / userGalaxies.length : 0;
  return renderTemplate`${renderComponent($$result, "GalaxyLayout", $$GalaxyLayout, { "active": MenuName.ProjectName, "hideLinks": Object.keys(MenuName), "projectName": user.nickname || "User Profile", "stars": mockUserStars, "projectGoal": 1e3, "projectX": userX, "projectY": userY, "projectGalaxies": allGalaxies }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "UserProfilePanel", null, { "slot": "center", "user": user, "galaxies": userGalaxies, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/user/UserProfilePanel", "client:component-export": "default" })}`, "default": async ($$result2) => renderTemplate`   ${renderComponent($$result2, "GalaxyAutoZoom", null, { "client:only": "react", "galaxyX": userX, "galaxyY": userY, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/GalaxyAutoZoom", "client:component-export": "default" })} `, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}` })} `;
}, "/home/medet/ara-app/src/pages/user/index.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/user/index.astro";
const $$url = "/user";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
