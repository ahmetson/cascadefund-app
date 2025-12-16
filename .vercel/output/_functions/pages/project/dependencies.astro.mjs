import { i as createComponent, j as createAstro, w as renderComponent, r as renderTemplate } from '../../chunks/astro/server_fdX1SiYK.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_Bt8c-AIX.mjs';
import { M as MenuName } from '../../chunks/gradient_BwWwSSvf.mjs';
import { ObjectId } from 'mongodb';
import { g as getGalaxyById } from '../../chunks/galaxy_BhIVnuLu.mjs';
import { a as getProjectById } from '../../chunks/project_BR7Mg4Nw.mjs';
import { P as Panel } from '../../chunks/MenuPanel_Bwq8NR-S.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { F as FilterableList } from '../../chunks/FilterableList_O8XGFnGt.mjs';
import { B as Badge } from '../../chunks/Badge_B8Esv6UX.mjs';
import NumberFlow, { NumberFlowGroup } from '@number-flow/react';
import { c as cn } from '../../chunks/utils_CRaJ9uIg.mjs';
import { B as BasePanel } from '../../chunks/Panel_CqTuM3BW.mjs';
import { T as TimeAgo, P as PanelFooter, M as MenuAvatar, F as Followings$1 } from '../../chunks/timeago-react_DjRt9YuX.mjs';
import { useState } from 'react';
import { B as Button, P as PanelAction } from '../../chunks/PanelAction_DPZy3U8T.mjs';
import { C as Component } from '../../chunks/Tooltip_w0cA3QON.mjs';
import { g as getIcon, C as Component$1 } from '../../chunks/eventTypes_PbqAZmEg.mjs';
import { S as Spinner } from '../../chunks/index_1nmfEu_R.mjs';
import { A as AvatarList } from '../../chunks/AvatarList_QbL7je5L.mjs';
import { Popover } from '@base-ui-components/react/popover';
export { renderers } from '../../renderers.mjs';

const InfoPair = ({ title1, value1, type1 = "currency", title2, value2, type2 = "currency", belowThresholdColor = 10, footer }) => {
  return /* @__PURE__ */ jsxs(BasePanel, { className: "w-80 border-none shadow-none bg-white/25", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: [
      title1,
      " / ",
      title2
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl font-bold mb-2", children: /* @__PURE__ */ jsx(NumberFlowGroup, { children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center gap-4 font-semibold",
        children: [
          type1 === "time" && /* @__PURE__ */ jsx(TimeAgo, { datetime: new Date(value1 * 1e3), className: "text-slate-600 dark:text-slate-400" }),
          type1 === "number" && /* @__PURE__ */ jsx(
            NumberFlow,
            {
              value: value1,
              locales: "en-US",
              format: { style: "decimal", maximumFractionDigits: 2 },
              className: "~text-xl/4xl text-slate-600 dark:text-slate-400"
            }
          ),
          type1 === "currency" && /* @__PURE__ */ jsx(
            NumberFlow,
            {
              value: value1,
              locales: "en-US",
              format: { style: "currency", currency: "USD", maximumFractionDigits: 2, signDisplay: "always" },
              className: "~text-xl/4xl text-slate-600 dark:text-slate-400"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-lg text-gray-500 -ml-2", children: " / " }),
          type2 === "time" && /* @__PURE__ */ jsx(TimeAgo, { datetime: new Date(value2 * 1e3) }),
          type2 === "number" && /* @__PURE__ */ jsx(
            NumberFlow,
            {
              value: value2,
              locales: "en-US",
              format: { style: "decimal", maximumFractionDigits: 2 },
              className: "~text-xl/4xl text-gray-700"
            }
          ),
          type2 === "currency" && /* @__PURE__ */ jsx(
            NumberFlow,
            {
              value: value2,
              locales: "en-US",
              format: { style: "currency", currency: "USD", maximumFractionDigits: 2, signDisplay: "always" },
              className: cn(
                "text-md -ml-2",
                "transition-colors duration-300 text-slate-600 dark:text-slate-400",
                value2 <= belowThresholdColor ? "text-rose-500 dark:text-rose-400" : "text-slate-600 dark:text-slate-400"
              )
            }
          )
        ]
      }
    ) }) }),
    footer && /* @__PURE__ */ jsx(PanelFooter, { className: "text-gray-500 text-sm items-center flex justify-center", children: footer })
  ] });
};

const Followings = ({ following, followers, selfProfile = false, onActionClick }) => {
  const [isFollowing, setIsFollowing] = useState(following);
  const [isLoading, setIsLoading] = useState(false);
  const [followerCount, setFollowerCount] = useState(followers);
  const onClick = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsFollowing(!isFollowing);
      setFollowerCount(followerCount + 1);
      setIsLoading(false);
    }, 1e3);
  };
  return /* @__PURE__ */ jsx(
    Component,
    {
      content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: selfProfile ? `How many people follows you? Also, do you follow yourself? I recommend.` : isFollowing ? "Unsubscribe" : "Like & Subscribe" }),
      children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: isFollowing ? "danger" : "secondary",
          disabled: isLoading,
          onClick,
          className: `cursor flex items-center space-x-1 ${isFollowing && "opacity-70"} h-8 text-slate-800 dark:text-slate-100`,
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1 w-full px-1", children: [
            isLoading ? /* @__PURE__ */ jsx(Spinner, { className: "w-5 h-5", variant: "ellipsis" }, "ellipsis") : /* @__PURE__ */ jsx(Fragment, { children: getIcon({
              iconType: "heart",
              fill: isFollowing ? "currentColor" : "none",
              className: "text-slate-100 dark:text-slate-100 w-5 h-5 mt-0.5"
            }) }),
            /* @__PURE__ */ jsx("span", { children: followerCount })
          ] })
        }
      )
    }
  );
};

const ProjectRating = ({ sunshines, stars }) => {
  const sunshinesToStar = 360;
  const totalSunshines = sunshines || 0;
  const totalStars = stars || 0;
  const shinesInStars = totalStars * sunshinesToStar;
  const percentage = totalSunshines > 0 ? shinesInStars / totalSunshines * 100 : 0;
  const percentageTooltip = /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
    "How much shines turned into the stars: ",
    percentage.toFixed(1),
    "%"
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
    sunshines !== void 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
      getIcon({ iconType: "sunshine", className: "w-4 h-4" }),
      /* @__PURE__ */ jsx(
        NumberFlow,
        {
          value: sunshines,
          locales: "en-US",
          format: { style: "decimal", maximumFractionDigits: 0 },
          className: "text-sm text-slate-800 dark:text-slate-300"
        }
      )
    ] }),
    stars !== void 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
      getIcon({ iconType: "star", className: "w-4 h-4" }),
      /* @__PURE__ */ jsx(
        NumberFlow,
        {
          value: stars,
          locales: "en-US",
          format: { style: "decimal", maximumFractionDigits: 2 },
          className: "text-sm text-slate-800 dark:text-slate-300"
        }
      )
    ] }),
    sunshines !== void 0 && stars !== void 0 && /* @__PURE__ */ jsx(Component, { content: percentageTooltip, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-purple-600 dark:text-purple-400", children: [
      getIcon({ iconType: "energy", className: "w-4 h-4" }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
        percentage.toFixed(1),
        "%"
      ] })
    ] }) })
  ] });
};

const ProjectCard = ({
  uri,
  title,
  isInfluencer,
  rating,
  forks,
  version,
  likes,
  isFollowing,
  followers,
  originalProject,
  originalProjectUrl,
  issue,
  description,
  license,
  balance,
  cascadeBalance,
  totalAmount,
  duration,
  lastActivity,
  totalCommits,
  commitsPerDay,
  openIssues,
  closedIssues,
  avgResponseTime,
  createdTime,
  author,
  stars,
  actions
}) => {
  const influencers = stars.map((star) => ({
    uri: star.uri || "#",
    children: star.nickname,
    icon: star.src,
    avatar: star.src,
    name: star.nickname,
    rating: star.stars ? {
      ratingType: star.role === "Maintainer" ? "maintainer" : star.role === "Influencer" ? "influencer" : "contributor",
      lvl: Math.floor(star.stars * 2),
      maxLvl: 10,
      top: 0
    } : void 0
  }));
  return /* @__PURE__ */ jsx(Component$1, { uri: uri || "#", children: /* @__PURE__ */ jsx(
    BasePanel,
    {
      bg: "bg-white/50 dark:bg-slate-900/50",
      className: "mb-4 hover:bg-white dark:hover:bg-slate-900 hover:border-blue-500/20 transition-colors",
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute w-20 bottom-1 overflow-hidden", children: /* @__PURE__ */ jsx(Followings, { following: isFollowing, followers, onActionClick: () => {
        } }) }),
        /* @__PURE__ */ jsxs("div", { className: "ml-22 flex-1 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-xl font-bold text-slate-600 dark:text-slate-400 flex items-center space-x-1", children: [
              title,
              isInfluencer && /* @__PURE__ */ jsx(Badge, { variant: "info", className: "mx-2 -mt-1.9", children: "Donator" }),
              version && /* @__PURE__ */ jsx(Badge, { variant: "info", className: "mx-2 -mt-1.9", children: version })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex text-right flex-col", children: /* @__PURE__ */ jsx(
              ProjectRating,
              {
                ...rating
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-md mb-4 text-slate-600 dark:text-slate-400", children: description }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-end items-center space-x-1 text-slate-600 dark:text-slate-400 gap-1 text-xs", children: [
            "By ",
            /* @__PURE__ */ jsx(MenuAvatar, { src: author?.icon, uri: author?.uri, className: "w-7! h-7!" }),
            createdTime && /* @__PURE__ */ jsx(TimeAgo, { datetime: createdTime })
          ] }),
          /* @__PURE__ */ jsxs(PanelFooter, { className: "flex flex-row justify-between items-center space-x-4 mt-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx(PanelAction, { className: "", actions }) }),
            /* @__PURE__ */ jsxs(Followings$1, { iconType: "project", hint: `License of this project.`, fill: true, children: [
              license,
              " Llicense"
            ] }),
            /* @__PURE__ */ jsxs(
              Followings$1,
              {
                iconType: "fork",
                hint: `How many forks this project has.`,
                fill: true,
                children: [
                  forks,
                  " Forks"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Followings$1,
              {
                iconType: "heart",
                hint: `How many people has interest in this project`,
                fill: true,
                children: [
                  likes,
                  " Likes"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(Popover.Root, { children: [
              /* @__PURE__ */ jsx(Popover.Trigger, { onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
              }, className: "hyperlink flex items-center justify-center shadow-none", children: /* @__PURE__ */ jsx(
                Followings$1,
                {
                  iconType: "info",
                  hint: `Additional stats`,
                  fill: true,
                  children: "More"
                }
              ) }),
              /* @__PURE__ */ jsx(Popover.Portal, { children: /* @__PURE__ */ jsx(Popover.Positioner, { sideOffset: 8, side: "bottom", className: "z-700!", children: /* @__PURE__ */ jsxs(Popover.Popup, { className: "w-96 origin-[var(--transform-origin)] rounded-xs bg-[canvas] px-6 py-4 text-gray-900 shadow-sm shadow-gray-900 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0", children: [
                /* @__PURE__ */ jsx(Popover.Arrow, { className: "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180", children: getIcon("arrow") }),
                /* @__PURE__ */ jsx(Popover.Title, { className: "text-gray-500 font-medium text-md flex items-center flex-row p-1 mb-4", children: "Additional statistics" }),
                /* @__PURE__ */ jsxs(Popover.Description, { className: "text-gray-600", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-gray-600 text-sm mb-2 flex flex-row justify-start items-center gap-2", children: [
                    /* @__PURE__ */ jsxs(Followings$1, { iconType: "fork", hint: `Fork of ${originalProject}`, fill: true, children: [
                      "Fork of ",
                      /* @__PURE__ */ jsx(Component$1, { uri: originalProjectUrl, asNewTab: true, children: originalProject })
                    ] }),
                    /* @__PURE__ */ jsxs(Followings$1, { iconType: "issue", hint: `Original project issue that this project addresses.`, fill: true, children: [
                      issue,
                      " Issue"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    InfoPair,
                    {
                      title1: "Balance",
                      value1: balance,
                      title2: "Cascade Balance",
                      value2: cascadeBalance,
                      belowThresholdColor: 10,
                      footer: `${totalAmount} / ${duration}`
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    InfoPair,
                    {
                      title1: "Online",
                      value1: lastActivity,
                      type1: "time",
                      title2: "Commits",
                      value2: totalCommits,
                      type2: "number",
                      footer: `${commitsPerDay} commits / day`
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    InfoPair,
                    {
                      title1: "Issues",
                      value1: openIssues,
                      type1: "number",
                      title2: "Closed Issues",
                      value2: closedIssues,
                      type2: "number",
                      footer: `avg. ${avgResponseTime}`
                    }
                  ),
                  /* @__PURE__ */ jsx(PanelFooter, { children: /* @__PURE__ */ jsx(
                    Followings$1,
                    {
                      iconType: "info",
                      hint: `Project influencers`,
                      fill: true,
                      children: /* @__PURE__ */ jsx(AvatarList, { contributors: influencers })
                    }
                  ) })
                ] })
              ] }) }) })
            ] })
          ] })
        ] })
      ] })
    }
  ) });
};

const projectFilters = [
  {
    id: "all",
    label: "All",
    sortIds: [
      { id: "rating", label: "Rating" },
      { id: "date", label: "Date" },
      { id: "popularity", label: "Popularity" },
      { id: "forks", label: "Forks" },
      { id: "likes", label: "Likes" }
    ]
  },
  {
    id: "explore",
    label: "Explore",
    sortIds: [
      { id: "rating", label: "Rating" },
      { id: "date", label: "Date" },
      { id: "popularity", label: "Popularity" },
      { id: "forks", label: "Forks" },
      { id: "likes", label: "Likes" }
    ]
  },
  {
    id: "my-projects",
    label: "My Projects",
    sortIds: [
      { id: "rating", label: "Rating" },
      { id: "date", label: "Date" },
      { id: "popularity", label: "Popularity" },
      { id: "forks", label: "Forks" },
      { id: "likes", label: "Likes" }
    ]
  },
  {
    id: "following",
    label: "Following",
    sortIds: [
      { id: "rating", label: "Rating" },
      { id: "date", label: "Date" },
      { id: "popularity", label: "Popularity" },
      { id: "forks", label: "Forks" },
      { id: "likes", label: "Likes" }
    ]
  },
  {
    id: "recommended",
    label: "Recommended",
    sortIds: [
      { id: "rating", label: "Rating" },
      { id: "date", label: "Date" },
      { id: "popularity", label: "Popularity" },
      { id: "forks", label: "Forks" },
      { id: "likes", label: "Likes" }
    ]
  },
  {
    id: "by-issue",
    label: "By Issue...",
    sortIds: [
      { id: "rating", label: "Rating" },
      { id: "date", label: "Date" },
      { id: "popularity", label: "Popularity" },
      { id: "forks", label: "Forks" },
      { id: "likes", label: "Likes" }
    ]
  },
  {
    id: "by-user",
    label: "By User...",
    sortIds: [
      { id: "rating", label: "Rating" },
      { id: "date", label: "Date" },
      { id: "popularity", label: "Popularity" },
      { id: "forks", label: "Forks" },
      { id: "likes", label: "Likes" }
    ]
  },
  {
    id: "fork-of",
    label: "Fork of...",
    sortIds: [
      { id: "rating", label: "Rating" },
      { id: "date", label: "Date" },
      { id: "popularity", label: "Popularity" },
      { id: "forks", label: "Forks" },
      { id: "likes", label: "Likes" }
    ]
  }
];
const ProjectsSection = ({ projects }) => {
  const title = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx("span", { className: "mt-1", children: "Dependencies" }),
    /* @__PURE__ */ jsx(Badge, { variant: "gray", static: true, children: projects.length })
  ] });
  return /* @__PURE__ */ jsx(BasePanel, { children: /* @__PURE__ */ jsx(
    FilterableList,
    {
      items: projects,
      itemComponent: ProjectCard,
      filters: projectFilters,
      title,
      searchPlaceholder: "Search projects...",
      searchableFields: ["title", "description", "issue", "originalProject"],
      showNumber: false,
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        getIcon("info"),
        /* @__PURE__ */ jsx("span", { className: "", children: "Third party packages you used in your project. Imported using SBOM. Contact and send request to them." })
      ] })
    }
  ) });
};

const CworkPanel = () => {
  const mockProjects = [
    {
      uri: "/project",
      title: "React Dashboard",
      isInfluencer: true,
      rating: {
        sunshines: 2880,
        stars: 8
      },
      forks: 124,
      likes: 89,
      isFollowing: true,
      followers: 45,
      originalProject: "facebook/react",
      originalProjectUrl: "https://github.com/facebook/react",
      issue: "#1234 - Dashboard Enhancement",
      description: "A modern React dashboard with TypeScript, Tailwind CSS, and real-time data visualization capabilities.",
      license: "MIT License",
      version: "v1.2.0",
      balance: 2450,
      cascadeBalance: 1200,
      totalAmount: 3650,
      duration: "6 months",
      lastActivity: Date.now() - 2 * 24 * 60 * 60 * 1e3,
      // 2 days ago
      totalCommits: 1234,
      commitsPerDay: "12.5",
      openIssues: 8,
      closedIssues: 156,
      avgResponseTime: "2.3 hours",
      createdTime: Date.now() - 2 * 365 * 24 * 60 * 60 * 1e3,
      // 2 years ago
      author: {
        uri: "/profile/john-doe",
        children: "John Doe",
        icon: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
        rating: {
          ratingType: "maintainer",
          lvl: 9,
          maxLvl: 10,
          top: 5
        }
      },
      stars: [
        {
          x: 100,
          y: 100,
          uri: "/profile/jane-smith",
          nickname: "Jane Smith",
          src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
          stars: 3.5,
          role: "Influencer"
        },
        {
          x: 150,
          y: 150,
          uri: "/profile/mike-johnson",
          nickname: "Mike Johnson",
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
          stars: 3,
          role: "Contributor"
        }
      ],
      actions: []
    }
  ];
  return (
    // <Tabs id="cwork" activeTab='dependencies' tabs={tabs} />
    /* @__PURE__ */ jsx(ProjectsSection, { projects: mockProjects })
  );
};

const $$Astro = createAstro();
const $$Dependencies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dependencies;
  const galaxyIdParam = Astro2.url.searchParams.get("galaxy");
  if (!galaxyIdParam) {
    return Astro2.redirect("/project/404?method=getGalaxyParam");
  }
  let galaxyId;
  try {
    galaxyId = new ObjectId(galaxyIdParam);
  } catch (error) {
    return Astro2.redirect("/project/404?method=validateGalaxyId");
  }
  const galaxy = await getGalaxyById(galaxyIdParam);
  if (!galaxy || !galaxy.projectLink) {
    return Astro2.redirect("/project/404?method=getGalaxyById");
  }
  const project = await getProjectById(galaxy.projectLink);
  if (!project) {
    return Astro2.redirect("/project/404?method=getProjectById");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelViewLayout, { "active": MenuName.ProjectName, "hideLinks": Object.keys(MenuName) }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "CworkPanel", CworkPanel, { "slot": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/maintainer/CworkPanel", "client:component-export": "default" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "MenuPanel", Panel, { "slot": "left", "activeMenuItem": "dependencies", "galaxy": galaxy, "projectIcon": project.socialLinks?.find((link) => link.type === "project")?.uri, "projectName": galaxy.name, "starCount": galaxy.stars })}` })}`;
}, "/home/medet/ara-app/src/pages/project/dependencies.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/project/dependencies.astro";
const $$url = "/project/dependencies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dependencies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
