import { i as createComponent, w as renderComponent, r as renderTemplate } from '../../chunks/astro/server_fdX1SiYK.mjs';
/* empty css                                      */
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_Bt8c-AIX.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { P as PageLikePanel } from '../../chunks/PageLikePanel_CRfOVdJz.mjs';
import { B as Button } from '../../chunks/PanelAction_DPZy3U8T.mjs';
import { P as ProgressBar } from '../../chunks/ProgressBar_YxJUfyFB.mjs';
import { I as IssueLinkPanel4 } from '../../chunks/IssueLink_Cra8LlGj.mjs';
export { renderers } from '../../renderers.mjs';

const StarRating = ({ rating, maxRating = 5 }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-1", children: [...Array(maxRating)].map((_, index) => /* @__PURE__ */ jsx(
    "svg",
    {
      className: `w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`,
      fill: "currentColor",
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
    },
    index
  )) });
};

const HeroSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "gradient-bg text-white px-4 py-12", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: "NodeDB Toolkit" }),
        /* @__PURE__ */ jsx(StarRating, { rating: 5 })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-purple-200", children: "Highlighted collaboration" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-xs", children: "SJ" }) }),
          /* @__PURE__ */ jsx("span", { children: "Sarah Johnson" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "bg-yellow-600 px-2 py-1 rounded text-xs", children: "+345" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-purple-200", children: "Help us build the next generation of database tools for Node.js developers. Your donation directly funds feature development, bug fixes, and comprehensive documentation that benefit both developers and end users." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 text-sm text-purple-200", children: [
        /* @__PURE__ */ jsx("span", { children: "@reactnativetools" }),
        /* @__PURE__ */ jsx("span", { children: "2.9 stars" }),
        /* @__PURE__ */ jsx("span", { children: "2.5K comments" }),
        /* @__PURE__ */ jsx("span", { children: "Updated 3 days ago" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Maintainers" }),
          /* @__PURE__ */ jsxs("div", { className: "flex -space-x-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-500 rounded-full border-2 border-white" }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-green-500 rounded-full border-2 border-white" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Alice" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("span", { children: "12,500 users" }),
          /* @__PURE__ */ jsx("span", { className: "ml-4", children: "232 influencers" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ jsx(Button, { variant: "danger", size: "sm", children: "Work" }),
        /* @__PURE__ */ jsx(Button, { variant: "primary", size: "sm", children: "Cascade Work" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-purple-300", children: "See what maintainers and other people are doing on this project" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:pl-8", children: /* @__PURE__ */ jsxs(PageLikePanel, { title: 'Obtain voting power for "NodeDB Toolkit"', children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-2", children: "Amount" }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsx(Button, { outline: true, size: "sm", children: "$1" }),
          /* @__PURE__ */ jsx(Button, { outline: true, size: "sm", children: "$5" }),
          /* @__PURE__ */ jsx(Button, { outline: true, size: "sm", children: "$20" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mt-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-blue-500", children: "+100 VP" }),
          /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-500", children: "Sign in to see exact bonus voting" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-2", children: "Tell why you are supporting (optional)" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            className: "w-full p-3 border border-gray-300 rounded-md text-sm",
            placeholder: "Because, I want to support the maintainer for hard work. He is amazing!",
            rows: 3
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "The good and genuine comment will be used in the highlights and for other people" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-center", children: /* @__PURE__ */ jsx("a", { href: "/influencer/welcome", className: "bg-stone-700 hover:bg-stone-900 text-white font-bold py-2 px-4 border border-slate-700 rounded transition-colors", children: "Become an Influencer" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-gray-500", children: "Powered by NodePay" })
    ] }) })
  ] }) });
};

const FundingTransparency = () => {
  return /* @__PURE__ */ jsxs(PageLikePanel, { className: "p-6", title: "Funding Transparency", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Progress: $1,200 raised by 120 influencers" }) }),
    /* @__PURE__ */ jsxs(PageLikePanel, { className: "space-y-4", bg: "green-50", title: "How funds were spend in the last week", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
          /* @__PURE__ */ jsx("span", { children: "Maintainer time" }),
          /* @__PURE__ */ jsx("span", { children: "50%" })
        ] }),
        /* @__PURE__ */ jsx(ProgressBar, { percentage: 50, color: "green" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
          /* @__PURE__ */ jsx("span", { children: "Infrastructure & hosting" }),
          /* @__PURE__ */ jsx("span", { children: "30%" })
        ] }),
        /* @__PURE__ */ jsx(ProgressBar, { percentage: 30, color: "blue" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
          /* @__PURE__ */ jsx("span", { children: "Community & support" }),
          /* @__PURE__ */ jsx("span", { children: "20%" })
        ] }),
        /* @__PURE__ */ jsx(ProgressBar, { percentage: 20, color: "purple" })
      ] })
    ] })
  ] });
};

const WhySupportSection = () => {
  return /* @__PURE__ */ jsxs(PageLikePanel, { className: "p-6", title: "Why Support This Project?", children: [
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Supporting isn't just about giving — it's about shaping the future of open-source." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-orange-100 p-4 rounded-lg text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-orange-200 rounded-lg mx-auto mb-2 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-orange-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" }) }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Give money to maintainers" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-purple-100 p-4 rounded-lg text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-200 rounded-lg mx-auto mb-2 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-purple-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Obtain Voting Power" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-blue-100 p-4 rounded-lg text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-200 rounded-lg mx-auto mb-2 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Solve and get rating" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-green-100 p-4 rounded-lg text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-200 rounded-lg mx-auto mb-2 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-green-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" }) }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Raise Issue that impact" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center text-sm text-gray-600 mb-4", children: "All in open-based collaboration" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "What does rating give?" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Influence and help other projects to get popular to later find developers to help you as well as turn your app ideas into a real project." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-yellow-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }),
          /* @__PURE__ */ jsx("span", { children: "Rating is a metrics of the successful collaboration" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-blue-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" }) }),
          /* @__PURE__ */ jsx("span", { children: "Which means, along with rating you get more networking" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-yellow-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }) }),
          /* @__PURE__ */ jsx("span", { children: "Find open-source developers to turn your idea into app" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Button, { variant: "outline", className: "w-full", children: "Learn More About Ara" }) })
  ] });
};

const TopInfluencers = () => {
  const influencers = [
    { name: "Alice", rating: 290, avatar: "A" },
    { name: "Minh", rating: 180, avatar: "M" },
    { name: "DevCollective", rating: 150, avatar: "DC" }
  ];
  return /* @__PURE__ */ jsxs(PageLikePanel, { className: "p-6", title: "Top Influencers", children: [
    influencers.map((influencer, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium", children: influencer.avatar }),
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: influencer.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-yellow-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }),
        /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
          influencer.rating,
          " rating"
        ] })
      ] })
    ] }, index)),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-purple-50 rounded-lg", children: [
      /* @__PURE__ */ jsx("blockquote", { className: "text-sm italic text-gray-700", children: '"Ara makes me feel like my voice actually shapes the tools I use every day."' }),
      /* @__PURE__ */ jsx("cite", { className: "text-xs text-gray-500 mt-2 block text-right", children: "— Backer testimonial" })
    ] })
  ] });
};

const HighlightedIssues = () => {
  const issues = [
    {
      title: "Add Typescript Support",
      description: "Add full TypeScript support to improve developer experience and type safety.",
      stats: {
        "follower": {
          type: "follower",
          hint: "Followers interested",
          children: 8
        },
        "voting-power": {
          type: "voting-power",
          hint: "Voting power",
          children: 32
        }
      },
      uri: "",
      type: "improvement",
      projectId: ""
    },
    {
      title: "Fix Linux memory leak",
      description: "Resolve critical memory leak affecting Linux deployments in production.",
      stats: {
        "follower": {
          type: "follower",
          hint: "Followers interested",
          children: 8
        },
        "voting-power": {
          type: "voting-power",
          hint: "Voting power",
          children: 32
        }
      },
      uri: "",
      type: "improvement",
      projectId: ""
    },
    {
      title: "Consult me how the code work for internal project",
      description: "Create comprehensive guides and examples for newcomers to the library.",
      stats: {
        "follower": {
          type: "follower",
          hint: "Followers interested",
          children: 1
        },
        "voting-power": {
          type: "voting-power",
          hint: "Voting power",
          children: 20
        }
      },
      uri: "",
      type: "improvement",
      projectId: ""
    },
    {
      title: "Better documentation for beginners",
      description: "Create comprehensive guides and examples for newcomers to the library.",
      stats: {
        "follower": {
          type: "follower",
          hint: "Followers interested",
          children: 5
        },
        "voting-power": {
          type: "voting-power",
          hint: "Voting power",
          children: 20
        }
      },
      uri: "",
      type: "improvement",
      projectId: ""
    }
  ];
  return /* @__PURE__ */ jsx(PageLikePanel, { className: "p-6 grid grid-cols-1 md:grid-cols-2 gap-4", title: "Highlighted Issues", children: issues.map((issue, index) => /* @__PURE__ */ jsx(
    IssueLinkPanel4,
    {
      ...issue
    },
    index
  )) });
};

const $$Project = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "subtitle": "Become an Influencer and Network" }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "FundingTransparency", FundingTransparency, { "slot": "center" })}${renderComponent($$result2, "WhySupportSection", WhySupportSection, { "slot": "center" })}`, "hero": ($$result2) => renderTemplate`${renderComponent($$result2, "HeroSection", HeroSection, { "slot": "hero" })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "TopInfluencers", TopInfluencers, { "slot": "right" })}${renderComponent($$result2, "HighlightedIssues", HighlightedIssues, { "slot": "right" })}` })}`;
}, "/home/medet/ara-app/src/pages/influencer/project.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/influencer/project.astro";
const $$url = "/influencer/project";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Project,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
