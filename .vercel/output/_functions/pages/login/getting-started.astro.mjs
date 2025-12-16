import { i as createComponent, w as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fdX1SiYK.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_Bt8c-AIX.mjs';
import { I as ItemName } from '../../chunks/LandingNavbar_Dh9NiZBJ.mjs';
import { P as PageLikePanel } from '../../chunks/PageLikePanel_CRfOVdJz.mjs';
import { g as getIcon, C as Component } from '../../chunks/eventTypes_PbqAZmEg.mjs';
import { I as Importer$1 } from '../../chunks/RowGrid_Dl5riSnU.mjs';
import { C } from '../../chunks/RolePanel_D-bVkXSM.mjs';
import { I as InfoPanel } from '../../chunks/InfoPanel_BEeHNdQh.mjs';
import { I as Importer } from '../../chunks/ReactComponentImporter_CKrAs9OZ.mjs';
export { renderers } from '../../renderers.mjs';

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
