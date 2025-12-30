import { j as createComponent, k as createAstro, x as renderComponent, r as renderTemplate } from '../chunks/astro/server_BV1oLWnF.mjs';
import { $ as $$GalaxyLayout } from '../chunks/GalaxyLayout_B2Y-ERAe.mjs';
import { M as MenuName } from '../chunks/Analytics_DTGhDLP0.mjs';
import { B as BackButton } from '../chunks/BackButton_DebJpsQG.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { B as Button } from '../chunks/Button_DKAQNAd0.mjs';
import { a as authClient } from '../chunks/auth_XMWIZkTi.mjs';
import { g as getStarById, e as getStarByUserId } from '../chunks/star_BqlfetDB.mjs';
import { g as getAuthUserById } from '../chunks/auth_BUazfeO9.mjs';
import { d as getGalaxiesByMaintainer } from '../chunks/galaxy_CZ-N3p2Y.mjs';
import { a as getBlogsByAuthor } from '../chunks/blog_Cn2jrrO-.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const SignOutButton = ({ className }) => {
  const [isSigningOut, setIsSigningOut] = useState(false);
  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);
      const result = await authClient.signOut();
      if (result.error) {
        console.error("Sign-out error:", result.error);
        alert("Failed to sign out. Please try again.");
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Sign-out error:", error);
      alert("An error occurred during sign-out. Please try again.");
    } finally {
      setIsSigningOut(false);
    }
  };
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant: "secondary",
      size: "sm",
      onClick: handleSignOut,
      disabled: isSigningOut,
      className,
      children: isSigningOut ? "Signing out..." : "Sign Out"
    }
  );
};

function useIsCurrentUser(starEmail) {
  const { data: session, isPending } = authClient.useSession();
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkIsCurrentUser = async () => {
      if (isPending || !starEmail) {
        setIsCurrentUser(false);
        setIsLoading(false);
        return;
      }
      const user = session?.user;
      if (!user?.email) {
        setIsCurrentUser(false);
        setIsLoading(false);
        return;
      }
      setIsCurrentUser(user.email.toLowerCase() === starEmail.toLowerCase());
      setIsLoading(false);
    };
    checkIsCurrentUser();
  }, [session, starEmail, isPending]);
  return { isCurrentUser, isLoading };
}

const ConditionalSignOutButton = ({ starEmail, className }) => {
  const { isCurrentUser, isLoading } = useIsCurrentUser(starEmail);
  if (isLoading || !isCurrentUser) {
    return null;
  }
  return /* @__PURE__ */ jsx(SignOutButton, { className });
};

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const userIdParam = Astro2.url.searchParams.get("id");
  const userEmailParam = Astro2.url.searchParams.get("email");
  let user = null;
  if (userIdParam) {
    console.log("star id param", userIdParam);
    user = await getStarById(userIdParam);
    console.log("star by id", user);
  } else if (userEmailParam) {
    user = await getStarByUserId(userEmailParam);
    console.log("star by email", user);
  }
  if (!user) {
    return Astro2.redirect("/star/404");
  }
  const userGalaxies = await getGalaxiesByMaintainer(user._id);
  const userBlogs = await getBlogsByAuthor(user._id);
  const allGalaxies = userGalaxies.map((galaxy, index) => {
    const seed = galaxy._id ? galaxy._id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) : index;
    const randomX = (seed * 9301 + 49297) % 233280 / 233280;
    const randomY = ((seed * 9301 + 49297) * 9301 + 49297) % 233280 / 233280;
    const centerStart = 0.3;
    const centerEnd = 0.7;
    let x;
    if (randomX < 0.5) {
      x = randomX * centerStart * 1e3;
    } else {
      x = (centerEnd + (randomX - 0.5) * (1 - centerEnd)) * 1e3;
    }
    const y = randomY * 1e3;
    return {
      x,
      y,
      projectName: galaxy.name,
      projectId: galaxy._id?.toString() || "",
      galaxyData: galaxy,
      tags: galaxy.tags,
      leaderboardPosition: index + 1
    };
  });
  let starAuthUser = null;
  let displayName = "User Profile";
  if (user?.userId) {
    starAuthUser = await getAuthUserById(user.userId);
    if (starAuthUser) {
      displayName = starAuthUser.name || starAuthUser.username || starAuthUser.email?.split("@")[0] || "User Profile";
    }
  }
  return renderTemplate`${renderComponent($$result, "GalaxyLayout", $$GalaxyLayout, { "active": MenuName.ProjectName, "hideLinks": Object.keys(MenuName), "projectName": displayName, "projectX": 0, "projectY": 0, "projectGalaxies": allGalaxies }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "StarProfileHero", null, { "slot": "center", "user": user, "galaxies": userGalaxies, "blogs": userBlogs, "authUser": starAuthUser, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/user/StarProfileHero", "client:component-export": "default" })}`, "default": async ($$result2) => renderTemplate`      ${renderComponent($$result2, "GalaxyAutoZoom", null, { "client:only": "react", "galaxyX": 0, "galaxyY": 0, "client:component-hydration": "only", "client:component-path": "@/components/all-stars/GalaxyAutoZoom", "client:component-export": "default" })} `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "StarBar", null, { "slot": "footer", "authorId": user._id, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/user/StarBar", "client:component-export": "default" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}`, "right": async ($$result2) => renderTemplate`${renderComponent($$result2, "ConditionalSignOutButton", ConditionalSignOutButton, { "slot": "right", "starEmail": starAuthUser?.email, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/auth/ConditionalSignOutButton", "client:component-export": "default" })}${renderComponent($$result2, "UserAccountPanel", null, { "slot": "right", "user": user, "authUser": starAuthUser, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/user/UserAccountPanel", "client:component-export": "default" })}` })} `;
}, "/home/medet/ara-app/src/pages/star/index.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/star/index.astro";
const $$url = "/star";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
