import { i as createComponent, w as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fdX1SiYK.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_Bt8c-AIX.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { P as PageLikePanel } from '../../chunks/PageLikePanel_CRfOVdJz.mjs';
import { N as NotificationBanner } from '../../chunks/NotificationBanner_BK_WublV.mjs';
export { renderers } from '../../renderers.mjs';

const CollaborationSection = () => {
  const buttonWithIcon = /* @__PURE__ */ jsx("div", { className: "absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-purple-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900", children: "1" });
  return /* @__PURE__ */ jsxs(
    PageLikePanel,
    {
      title: "Start Collaboration Quest!",
      actions: [{
        variant: "transparent",
        children: /* @__PURE__ */ jsxs("div", { className: "relative inline-flex items-center bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4  rounded transition-colors", children: [
          "Influencer Work ",
          buttonWithIcon
        ] }),
        href: "/influencer/work"
      }],
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4", children: "Spend your Voting Power to raise issues, or vote to the issues if others raised it." }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-8", children: "You already have 1 quest, to navigate the collaboration in the easier manner. Jump and start it." })
      ]
    }
  );
};

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "subtitle": "Become an Influencer and Network" }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "slot": "center", "type": "success", "title": "Welcome to 'Project' community", "icon": "success" }, { "default": ($$result3) => renderTemplate`
You got 100 Voting Power! This voting power is to raise your word as an
    issue, and to take the scarce maintainer's resource. You also help to raise
    improve the project for other people as well
${maybeRenderHead()}<span>You spent 15, to the maintainer.</span> ` })}${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "slot": "center", "type": "success", "title": "You initiated a quest for the maintainer", "icon": "success" }, { "default": ($$result3) => renderTemplate`
The maintainer has a quest, and will have to reply to you. Otherwise, his
    rating will reduce
<span>You spent 15, to the maintainer.</span> ` })}${renderComponent($$result2, "CollaborationSection", CollaborationSection, { "slot": "center" })}` })}`;
}, "/home/medet/ara-app/src/pages/influencer/welcome.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/influencer/welcome.astro";
const $$url = "/influencer/welcome";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Welcome,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
