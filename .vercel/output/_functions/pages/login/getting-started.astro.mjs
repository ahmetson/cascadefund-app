import { i as createComponent, w as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_WCbI3U70.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_aQb_8Ejw.mjs';
import { I as ItemName } from '../../chunks/LandingNavbar_x5WCuRyq.mjs';
import { P as PageLikePanel } from '../../chunks/PageLikePanel_DyHCjbTr.mjs';
import { C as Component, g as getIcon } from '../../chunks/BrowseTracker_CjQaYJF4.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { I as InfoPanel } from '../../chunks/InfoPanel_YQKDcEqY.mjs';
export { renderers } from '../../renderers.mjs';

const Importer$1 = ({ children, className, cols, gap }) => {
  cols = cols === void 0 ? 2 : cols;
  gap = gap === void 0 ? 6 : gap;
  return /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 md:grid-cols-${cols} gap-${gap} ${className || ""}`, children });
};

const C = ({
  id,
  title,
  description,
  buttonText,
  buttonVariant,
  icon,
  avatar,
  iconBgColor,
  href
}) => {
  return /* @__PURE__ */ jsx("div", { className: `${iconBgColor} card image-full text-gray-100 w-36 h-60 shadow-sm p-0!`, children: /* @__PURE__ */ jsxs(PageLikePanel, { titleCenter: true, icon, title, bg: { src: avatar, label: `${title} avatar` }, children: [
    /* @__PURE__ */ jsx("p", { className: "h-20 flex items-center text-gray-300 dark:text-gray-100 mt-8", children: description }),
    /* @__PURE__ */ jsx("div", { className: "card-actions justify-center overflow-hidden", children: buttonVariant === "primary" ? /* @__PURE__ */ jsx(Component, { uri: href || "#", className: "inline-flex items-center bg-rose-500 hover:bg-rose-600 text-white dark:text-gray-100 hover:text-blue-50! font-bold py-2 px-4 rounded transition-colors", children: buttonText }) : /* @__PURE__ */ jsx(Component, { uri: href || "#", className: buttonVariant, children: buttonText }) })
  ] }, id) });
};

const Importer = ({ element }) => {
  return element;
};

const $$GettingStarted = createComponent(($$result, $$props, $$slots) => {
  const roles = [
    {
      roleCard: true,
      id: "maintainer",
      title: "Maintainer",
      description: "You maintain a project?\nAdd your project.",
      buttonText: "Add Project",
      buttonVariant: "primary",
      href: "/data/project/post",
      helpLinkLabel: "Learn more about maintainer's features such as no-burnout management and socializing...",
      helpLinkHref: "/",
      iconBgColor: "bg-red-50",
      iconColor: "text-blue-600",
      icon: "maintainer",
      avatar: "https://dummyimage.com/120x120/f0f0f0/666666?text=Maintainer"
    },
    {
      roleCard: true,
      id: "contributor",
      title: "Contributor",
      href: "/data/projects",
      description: "Discover projects and earn rating",
      buttonText: "All Projects",
      buttonVariant: "secondary",
      helpLinkLabel: "Why to contribute projects on Ara?",
      helpLinkHref: "/meta/contributor",
      iconBgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      icon: "contributor",
      avatar: "https://dummyimage.com/120x120/f0f0f0/666666?text=Contributor"
    },
    {
      roleCard: true,
      id: "influencer",
      title: "Influencer",
      href: "/data/projects",
      description: "Donate, obtain Voting Power and Connect",
      buttonText: "All Projects",
      buttonVariant: "secondary",
      helpLinkLabel: "Why to donate on projects and be an influencer?",
      helpLinkHref: "/meta/influencer",
      iconBgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      icon: "influencer",
      avatar: "https://dummyimage.com/120x120/f0f0f0/666666?text=Influencer"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelViewLayout, { "hideLinks": Object.values(ItemName), "subtitle": "Choose your role" }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "PageLikePanel", PageLikePanel, { "slot": "center", "title": "Choose Role", "titleCenter": true, "className": "bg-cyan-50 border-cyan-100" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center space-y-6 mt-14"> <p class="text-center mb-4 -mt-4">What role fits you the best?</p> ${renderComponent($$result3, "RowGrid", Importer$1, { "cols": 3 }, { "default": ($$result4) => renderTemplate`${roles.map((role) => renderTemplate`${renderComponent($$result4, "RolePanel", C, { ...role })}`)}` })} </div> ` })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "InfoPanel", InfoPanel, { "slot": "right", "title": "Links", "icon": "info" }, { "default": ($$result3) => renderTemplate` <ul> ${roles.filter(
    (role) => role.helpLinkLabel !== void 0 && role.helpLinkHref !== void 0
  ).map((role) => renderTemplate`<li class="flex items-start"> <div class="w-4 h-4 mt-1.5 -ml-2 mr-1"> ${renderComponent($$result3, "ReactComponentImporter", Importer, { "element": getIcon(role.icon || "info") })} </div> ${renderComponent($$result3, "Link", Component, { "className": "pt-0", "uri": role.helpLinkHref }, { "default": ($$result4) => renderTemplate`${role.helpLinkLabel}` })} </li>`)} </ul> ` })}` })}`;
}, "/home/medet/ara-app/src/pages/login/getting-started.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/login/getting-started.astro";
const $$url = "/login/getting-started";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GettingStarted,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
