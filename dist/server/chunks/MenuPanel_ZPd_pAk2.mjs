import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { P as PageLikePanel } from './PageLikePanel_tQY1YL9T.mjs';
import { e as MenuItem, g as getIcon, C as Component$1, f as Galaxy } from './Analytics_DTGhDLP0.mjs';
import { C as Component } from './Tooltip_1k3VND9a.mjs';

function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`,
      children: [
        showBorder && /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient",
            style: {
              ...gradientStyle,
              backgroundSize: "300% 100%"
            },
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 bg-black rounded-[1.25rem] z-[-1]",
                style: {
                  width: "calc(100% - 2px)",
                  height: "calc(100% - 2px)",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "inline-block relative z-2 text-transparent bg-cover animate-gradient",
            style: {
              ...gradientStyle,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              backgroundSize: "300% 100%"
            },
            children
          }
        )
      ]
    }
  );
}

const isOnlyInfluencerMenu = (activeMenuItem) => {
  return activeMenuItem === "ihistory" || activeMenuItem === "iwork";
};
const GalaxyObject = ({ projectIcon, projectName = "Ara", starCount = 0, active, focus, galaxyId }) => {
  const isZeroStars = starCount === 0;
  const starColorClass = isZeroStars ? "text-rose-500" : "";
  console.log("projectIcon", projectIcon);
  const projectIconElement = projectIcon ? /* @__PURE__ */ jsx(
    "img",
    {
      src: projectIcon,
      alt: `${projectName} icon`,
      className: "w-12 h-12 object-contain"
    }
  ) : /* @__PURE__ */ jsx("div", { className: "w-12 h-12 flex items-center justify-center", children: getIcon({ iconType: "ara", width: "w-12", height: "h-12" }) });
  const starIcon = getIcon({
    iconType: "star-filled",
    width: "w-5",
    height: "h-5",
    className: starColorClass
  });
  const tooltipStarIcon = getIcon({
    iconType: "star-filled",
    width: "w-4",
    height: "h-4",
    className: `inline ${starColorClass}`
  });
  const tooltipContent = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
    "View the '",
    projectName,
    "' galaxy ",
    tooltipStarIcon,
    " ",
    starCount
  ] });
  const projectUri = galaxyId ? `/project?galaxy=${galaxyId}` : "/project";
  return /* @__PURE__ */ jsx(Component, { content: tooltipContent, openDelay: 300, children: /* @__PURE__ */ jsxs(
    Component$1,
    {
      uri: projectUri,
      className: `w-full flex flex-col items-center justify-center py-4 px-3 rounded-sm cursor-pointer transition-colors relative ${active ? "bg-slate-100/60 dark:bg-slate-700/40" : "hover:bg-slate-50/40 dark:hover:bg-slate-800/30"}`,
      focus,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 bottom-0 pointer-events-none", children: /* @__PURE__ */ jsx(Galaxy, { mouseRepulsion: false, autoCenterRepulsion: 1, glowIntensity: 0.2, density: 0.1, rotationSpeed: 0.01 }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 relative", children: [
          projectIconElement,
          /* @__PURE__ */ jsx(
            GradientText,
            {
              colors: ["#ffaa40", "#9c40ff", "#ffaa40"],
              animationSpeed: 8,
              className: "font-semibold text-lg text-center underline",
              children: projectName
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-1 ${starColorClass}`, children: [
            starIcon,
            /* @__PURE__ */ jsx("span", { className: `text-sm font-medium ${starColorClass}`, children: starCount })
          ] })
        ] })
      ]
    }
  ) });
};
const maintainerMainItems = (activeMenuItem, focusMenuItem, projectIcon, projectName, starCount, galaxyId) => {
  return [
    /* @__PURE__ */ jsx(
      GalaxyObject,
      {
        projectIcon,
        projectName,
        starCount,
        active: activeMenuItem === "project",
        focus: focusMenuItem === "project",
        galaxyId
      },
      "galaxy"
    )
  ];
};
const influencerMainItems = (activeMenuItem, focusMenuItem) => {
  return [
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "influencer-history",
        label: "Transaction History",
        uri: "/influencer/history",
        active: activeMenuItem === "ihistory",
        focus: focusMenuItem === "ihistory"
      }
    )
  ];
};
const maintainerCollabItems = (activeMenuItem, focusMenuItem, galaxyId) => {
  const baseUri = (path) => galaxyId ? `${path}?galaxy=${galaxyId}` : path;
  return [
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "info",
        label: "Guide",
        uri: baseUri("/project/guide"),
        active: activeMenuItem === "guide",
        focus: focusMenuItem === "guide"
      },
      "guide"
    ),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "connection",
        label: "Dependencies",
        uri: baseUri("/project/dependencies"),
        active: activeMenuItem === "dependencies",
        focus: focusMenuItem === "dependencies"
      },
      "dependencies"
    ),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "navigation",
        label: "Roadmap",
        uri: baseUri("/project/roadmap"),
        active: activeMenuItem === "roadmap",
        focus: focusMenuItem === "roadmap"
      },
      "roadmap"
    ),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "issue",
        label: "Issues",
        uri: baseUri("/project/issues"),
        active: activeMenuItem === "issues",
        focus: focusMenuItem === "issues"
      },
      "issues"
    ),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "arrow-right",
        label: "Share Button",
        uri: baseUri("/project/share-btn"),
        active: activeMenuItem === "share-btn",
        focus: focusMenuItem === "share-btn"
      },
      "share-btn"
    ),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "money",
        label: "Donations",
        uri: baseUri("/project/donations"),
        active: activeMenuItem === "donations",
        focus: focusMenuItem === "donations"
      },
      "donations"
    )
  ];
};
const influencerCollabItems = (activeMenuItem, focusMenuItem, galaxyId) => {
  const baseUri = (path) => galaxyId ? `${path}?galaxy=${galaxyId}` : path;
  return [
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "influencer-work",
        label: "Influencer Work",
        uri: baseUri("/influencer/work"),
        focus: focusMenuItem === "iwork",
        active: activeMenuItem === "iwork"
      },
      "iwork"
    )
  ];
};
const noChildren = /* @__PURE__ */ jsxs("div", { className: "text-center py-8 text-slate-500 dark:text-slate-400", children: [
  /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-400", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z" }) }),
  /* @__PURE__ */ jsx("p", { className: "text-sm", children: "No menu items available" }),
  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mt-1", children: "Add some items to get started" })
] });
const Panel = ({
  activeMenuItem,
  focusMenuItem,
  title = "Main Menu",
  onlyCustomChildren = false,
  children,
  projectName,
  starCount,
  galaxy
}) => {
  const titleC = /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-slate-500 dark:text-slate-400", children: title });
  const galaxyId = galaxy?._id?.toString();
  const finalProjectIcon = void 0;
  const finalProjectName = projectName || galaxy?.name || "Ara";
  const finalStarCount = starCount !== void 0 ? starCount : galaxy?.stars || 0;
  return /* @__PURE__ */ jsx(PageLikePanel, { interactive: false, title: titleC, children: /* @__PURE__ */ jsxs("div", { className: "p-1 z-10 w-full overflow-hidden justify-between", children: [
    onlyCustomChildren && !children ? noChildren : children,
    !onlyCustomChildren && (!isOnlyInfluencerMenu(activeMenuItem) ? maintainerMainItems(activeMenuItem, focusMenuItem, finalProjectIcon, finalProjectName, finalStarCount, galaxyId) : influencerMainItems(activeMenuItem, focusMenuItem)),
    !onlyCustomChildren && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 mt-3", children: "Collaboration Menu" }),
      /* @__PURE__ */ jsx("div", { className: "p-1 w-full overflow-hidden justify-between", children: !isOnlyInfluencerMenu(activeMenuItem) ? maintainerCollabItems(activeMenuItem, focusMenuItem, galaxyId) : influencerCollabItems(activeMenuItem, focusMenuItem, galaxyId) })
    ] })
  ] }) });
};

export { Panel as P };
