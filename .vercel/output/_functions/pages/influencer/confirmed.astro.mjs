import { i as createComponent, w as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fdX1SiYK.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_Bt8c-AIX.mjs';
import { I as InfoPanel } from '../../chunks/InfoPanel_BEeHNdQh.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { P as PageLikePanel } from '../../chunks/PageLikePanel_CRfOVdJz.mjs';
import { B as BackButton } from '../../chunks/BackButton_DL5Gz7SV.mjs';
import { N as NotificationBanner } from '../../chunks/NotificationBanner_BK_WublV.mjs';
export { renderers } from '../../renderers.mjs';

const AllocationItem = ({ name, votes, link }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ jsx("div", { children: link ? /* @__PURE__ */ jsx("a", { href: link, className: "text-blue-600 hover:text-blue-800 hover:underline text-sm", children: name }) : /* @__PURE__ */ jsx("span", { className: "text-gray-700 text-sm", children: name }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-blue-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-blue-600 font-medium text-sm", children: votes })
    ] })
  ] });
};

const VotesCard = () => {
  const allocations = [
    { name: "NodeDB Toolkit", votes: 25, link: "#" },
    { name: "React Component Library", votes: 15, link: "#" },
    { name: "SecureAuth Framework", votes: 30, link: "#" },
    { name: "CloudScale API", votes: 20, link: "#" },
    { name: "MobileUI Framework", votes: 10, link: "#" }
  ];
  const totalVotes = allocations.reduce((sum, item) => sum + item.votes, 0);
  return /* @__PURE__ */ jsxs(PageLikePanel, { title: /* @__PURE__ */ jsxs("div", { className: "w-full h-8 flex items-center", children: [
    /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-green-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
    "Votes Confirmed"
  ] }), actions: [{
    variant: "blue",
    href: "/influencer/history",
    children: "View Transaction History"
  }], children: [
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-2", children: "Thank you for participating in the project development." }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Your votes have been successfully recorded." }),
    /* @__PURE__ */ jsxs(PageLikePanel, { title: "Allocation", children: [
      allocations.map((allocation, index) => /* @__PURE__ */ jsx(
        AllocationItem,
        {
          name: allocation.name,
          votes: allocation.votes,
          link: allocation.link
        },
        index
      )),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 mt-4 pt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700", children: "Total:" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-purple-600 font-semibold", children: "$1" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "•" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-blue-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-blue-600 font-semibold", children: totalVotes })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 text-right mt-1", children: "+0.0 Bonus by your rating" })
      ] })
    ] })
  ] });
};

const $$Confirmed = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, {}, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "slot": "center", "icon": "email", "title": "You completed the quest", "type": "success" }, { "default": ($$result3) => renderTemplate`
You are now following these projects and will receive notification once the
    maintainer or contributor replies. The maintainers of the project received
    the quest, expect the reply within the upcoming hours/days.
` })}${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "slot": "center", "icon": "star", "title": "Potentially earning +2.0 rating", "type": "warning" }, { "default": ($$result3) => renderTemplate`
You are now following these projects and will receive notification once the
    maintainer or contributor replies. The maintainers of the project received
    the quest, expect the reply within the upcoming hours/days.
` })}${renderComponent($$result2, "Votes", VotesCard, { "slot": "center" })}`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left" })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "InfoPanel", InfoPanel, { "slot": "right", "slot": "right", "title": "Became Ara influencer", "icon": "info", "actions": [
    {
      children: '"Ara" Influencer',
      uri: "/inlfuencer/project"
    }
  ] }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>
Have some questions or requests about Ara? Become our influencer
      as well.
</p> <p>
Obtain Voting Power. Make Ara better for users by creating or
      upvoting the issues. Get rating.
</p> ` })}` })}`;
}, "/home/medet/ara-app/src/pages/influencer/confirmed.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/influencer/confirmed.astro";
const $$url = "/influencer/confirmed";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Confirmed,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
