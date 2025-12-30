import { j as createComponent, k as createAstro, x as renderComponent, r as renderTemplate, m as maybeRenderHead, p as addAttribute } from '../chunks/astro/server_BV1oLWnF.mjs';
import { $ as $$GalaxyLayout } from '../chunks/GalaxyLayout_B2Y-ERAe.mjs';
import { c as cn, a as BorderSize, g as getIcon, E as ElectricBorder, M as MenuName, B as Badge, D as DashboardIcon, r as StarIcon, s as socialLinks } from '../chunks/Analytics_DTGhDLP0.mjs';
import { a as mockUserStars } from '../chunks/mock-data_D-YsDoC3.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { B as BasePanel } from '../chunks/Panel_DWVED1GX.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const ControlPanel = ({
  key,
  icon,
  title,
  children,
  className = "",
  titleClassName = "",
  ...baseProps
}) => {
  const titleColor = "text-slate-400 dark:text-slate-500";
  const textColor = "text-slate-400 dark:text-slate-500";
  const borderColor = "border-slate-300/20 dark:border-slate-600/20";
  const renderHeader = () => {
    if (!title) return null;
    const iconProps = typeof icon === "object" ? icon : icon ? { iconType: icon } : void 0;
    return /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsxs("h2", { className: `text-xs font-mono flex items-center gap-2 ${titleColor} ${titleClassName}`, children: [
      iconProps && getIcon(iconProps),
      /* @__PURE__ */ jsx("span", { children: title })
    ] }) }, key);
  };
  const lightBg = `backdrop-blur-lg ${textColor}`;
  return /* @__PURE__ */ jsxs(
    BasePanel,
    {
      ...baseProps,
      border: { size: BorderSize.border1, color: borderColor },
      bg: "bg-transparent",
      className: cn(
        "shadow-none",
        lightBg,
        className
      ),
      children: [
        renderHeader(),
        children && /* @__PURE__ */ jsx("div", { className: `font-mono text-xs ${textColor}`, children })
      ]
    }
  );
};

const extractYouTubeVideoId = (url) => {
  if (!url) return null;
  if (!url.includes("/") && !url.includes("?") && !url.includes("&")) {
    return url;
  }
  const youtuBeMatch = url.match(/(?:youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
  if (youtuBeMatch) {
    return youtuBeMatch[1];
  }
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) {
    return watchMatch[1];
  }
  return null;
};
const LandingVideoMiniPanel = ({
  youtubeUrl
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAtWhyAraOrBelow, setIsAtWhyAraOrBelow] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const observerRef = useRef(null);
  const videoId = useMemo(() => {
    return extractYouTubeVideoId(youtubeUrl);
  }, [youtubeUrl]);
  const embedUrl = useMemo(() => {
    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&playsinline=1`;
  }, [videoId]);
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined" || !isDesktop) {
      setIsAtWhyAraOrBelow(false);
      return;
    }
    const checkInitialState = () => {
      const whyAraSection = document.querySelector("#why-ara-section");
      if (whyAraSection) {
        const rect = whyAraSection.getBoundingClientRect();
        setIsAtWhyAraOrBelow(rect.top <= window.innerHeight);
      }
    };
    const setupObserver = () => {
      const whyAraSection = document.querySelector("#why-ara-section");
      if (!whyAraSection) {
        setIsAtWhyAraOrBelow(false);
        return;
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsAtWhyAraOrBelow(entry.boundingClientRect.top <= window.innerHeight);
          });
        },
        {
          threshold: 0,
          rootMargin: "0px"
        }
      );
      observerRef.current.observe(whyAraSection);
    };
    checkInitialState();
    setupObserver();
    const timeoutId = setTimeout(() => {
      checkInitialState();
      setupObserver();
    }, 200);
    const handleScroll = () => {
      const whyAraSection = document.querySelector("#why-ara-section");
      if (whyAraSection) {
        const rect = whyAraSection.getBoundingClientRect();
        setIsAtWhyAraOrBelow(rect.top <= window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop]);
  if (!videoId || !embedUrl) {
    return null;
  }
  const shouldShow = isDesktop ? isAtWhyAraOrBelow : true;
  if (!shouldShow) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed bottom-22 right-8 z-50",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: /* @__PURE__ */ jsx(AnimatePresence, { children: !isExpanded ? /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
          transition: { duration: 0.2 },
          children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsExpanded(true),
              className: "w-full",
              type: "button",
              children: /* @__PURE__ */ jsx(
                ElectricBorder,
                {
                  color: "#ef4444",
                  speed: 1.5,
                  chaos: 0.8,
                  thickness: 2,
                  style: { borderRadius: 4 },
                  className: "w-full",
                  children: /* @__PURE__ */ jsx(
                    ControlPanel,
                    {
                      className: cn(
                        "p-3 cursor-pointer transition-all duration-300",
                        "hover:!backdrop-blur-lg",
                        isHovered && "bg-white/20 dark:bg-slate-900/20"
                      ),
                      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-slate-400 dark:text-slate-500", children: [
                        getIcon({ iconType: "youtube", className: "w-4 h-4" }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs font-mono", children: "Demo" })
                      ] })
                    }
                  )
                }
              )
            }
          )
        },
        "collapsed"
      ) : /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.8, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.8, y: 20 },
          transition: { duration: 0.3 },
          className: "w-64",
          children: /* @__PURE__ */ jsxs(ControlPanel, { className: "p-3 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-slate-400 dark:text-slate-500", children: [
                getIcon({ iconType: "youtube", className: "w-4 h-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-mono", children: "See quick walk through" })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsExpanded(false),
                  className: "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors",
                  "aria-label": "Close",
                  type: "button",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "relative aspect-video w-full rounded-lg overflow-hidden bg-slate-900/50", children: /* @__PURE__ */ jsx(
              "iframe",
              {
                src: embedUrl,
                title: "Ara Demo Video",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowFullScreen: true,
                className: "absolute inset-0 w-full h-full",
                style: { border: "none" }
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 text-center", children: "Try out demo yourself" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/all-stars",
                  className: cn(
                    "block w-full",
                    "px-4 py-3 rounded-lg font-semibold text-sm",
                    "bg-gradient-to-r from-blue-600 to-indigo-600",
                    "dark:from-blue-500 dark:to-indigo-500",
                    "text-white",
                    "hover:from-blue-700 hover:to-indigo-700",
                    "dark:hover:from-blue-600 dark:hover:to-indigo-600",
                    "transition-all duration-300",
                    "shadow-lg shadow-blue-500/30",
                    "hover:shadow-xl hover:shadow-blue-500/50",
                    "border border-blue-400/30 dark:border-blue-300/30",
                    "flex items-center justify-center gap-2",
                    "relative overflow-hidden",
                    // Shimmer effect
                    "before:absolute before:inset-0 before:-translate-x-full",
                    "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
                    "hover:before:translate-x-full before:transition-transform before:duration-700"
                  ),
                  children: /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [
                    getIcon({ iconType: "star", className: "w-4 h-4" }),
                    /* @__PURE__ */ jsx("span", { children: "Try Demo Now" }),
                    /* @__PURE__ */ jsx("span", { children: "→" })
                  ] })
                }
              )
            ] })
          ] })
        },
        "expanded"
      ) })
    }
  );
};

const LightningIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "skyblue",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M13 10V3L4 14h7v7l9-11h-7z"
      }
    )
  }
);
const LeftArrowIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M15 19l-7-7 7-7"
      }
    )
  }
);
const RightArrowIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M9 5l7 7-7 7"
      }
    )
  }
);
const FingerTouchIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsxs("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", ...props, children: [
  /* @__PURE__ */ jsx(
    "ellipse",
    {
      cx: "12",
      cy: "18",
      rx: "3",
      ry: "4",
      fill: "currentColor",
      opacity: "0.8"
    }
  ),
  /* @__PURE__ */ jsx(
    "ellipse",
    {
      cx: "12",
      cy: "14",
      rx: "2.5",
      ry: "3.5",
      fill: "currentColor",
      opacity: "0.9"
    }
  ),
  /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "10", rx: "2", ry: "3", fill: "currentColor" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "7", r: "1.5", fill: "currentColor", opacity: "0.6" }),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M8 7 L10 7 M14 7 L16 7",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      opacity: "0.5"
    }
  )
] });
const LightbulbIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "skyblue",
    viewBox: "0 0 24 24",
    width: "3em",
    height: "3em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      }
    )
  }
);
const CheckmarkCircleIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "green",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      }
    )
  }
);
const CheckmarkIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "green",
    viewBox: "0 0 20 20",
    width: "1.5em",
    height: "1.5em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
        clipRule: "evenodd"
      }
    )
  }
);
const UsersIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "white",
    stroke: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      }
    )
  }
);
const UsersGroupIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "white",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      }
    )
  }
);
const WarningTriangleIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "red",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      }
    )
  }
);
const DecliningGraph = ({ className = "", ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 300 120",
    className,
    "aria-label": "Declining donation sustainability graph",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "line",
        {
          x1: "20",
          y1: "20",
          x2: "20",
          y2: "100",
          stroke: "currentColor",
          strokeWidth: "1",
          strokeOpacity: "0.2",
          className: "text-slate-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "line",
        {
          x1: "20",
          y1: "100",
          x2: "280",
          y2: "100",
          stroke: "currentColor",
          strokeWidth: "1",
          strokeOpacity: "0.2",
          className: "text-slate-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "polyline",
        {
          points: "30,30 80,45 130,60 180,75 230,90",
          fill: "none",
          stroke: "rgb(239, 68, 68)",
          strokeWidth: "3",
          strokeLinecap: "round",
          className: "dark:stroke-red-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "30",
          cy: "30",
          r: "4",
          fill: "rgb(239, 68, 68)",
          className: "dark:fill-red-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "80",
          cy: "45",
          r: "4",
          fill: "rgb(239, 68, 68)",
          className: "dark:fill-red-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "130",
          cy: "60",
          r: "4",
          fill: "rgb(239, 68, 68)",
          className: "dark:fill-red-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "180",
          cy: "75",
          r: "4",
          fill: "rgb(239, 68, 68)",
          className: "dark:fill-red-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "230",
          cy: "90",
          r: "4",
          fill: "rgb(239, 68, 68)",
          className: "dark:fill-red-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "text",
        {
          x: "150",
          y: "115",
          textAnchor: "middle",
          className: "text-xs fill-slate-500 dark:fill-slate-400",
          fontSize: "12",
          children: "Time"
        }
      )
    ]
  }
);
const BookIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      }
    )
  }
);
const ClockIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      }
    )
  }
);
const LockIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "red",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      }
    )
  }
);
const ChartIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "skyblue",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      }
    )
  }
);
const FundingFlowDiagram = ({ className = "", ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 400 180",
    className,
    "aria-label": "Funding to Star Tokens to Users, Maintainers, Contributors",
    ...props,
    children: [
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "60",
            cy: "90",
            r: "30",
            fill: "rgb(59, 130, 246)",
            fillOpacity: "0.3",
            stroke: "rgb(59, 130, 246)",
            strokeWidth: "2",
            className: "dark:fill-blue-400/30 dark:stroke-blue-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "60",
            y: "98",
            textAnchor: "middle",
            className: "text-sm fill-slate-800 dark:fill-slate-200",
            fontSize: "14",
            fontWeight: "bold",
            children: "💰"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "60",
            y: "140",
            textAnchor: "middle",
            className: "text-xs fill-slate-600 dark:fill-slate-400",
            fontSize: "11",
            children: "Funding"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M 90 90 L 140 90",
          stroke: "rgb(168, 85, 247)",
          strokeWidth: "2.5",
          fill: "none",
          markerEnd: "url(#arrow-purple)",
          className: "dark:stroke-purple-400"
        }
      ),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "200",
            cy: "90",
            r: "30",
            fill: "rgb(234, 179, 8)",
            fillOpacity: "0.3",
            stroke: "rgb(234, 179, 8)",
            strokeWidth: "2",
            className: "dark:fill-yellow-400/30 dark:stroke-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M200 70 L202 80 L212 80 L204 88 L206 98 L200 92 L194 98 L196 88 L188 80 L198 80 Z",
            fill: "rgb(234, 179, 8)",
            className: "dark:fill-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "200",
            y: "140",
            textAnchor: "middle",
            className: "text-xs fill-slate-600 dark:fill-slate-400",
            fontSize: "11",
            children: "Star Tokens"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M 230 90 L 280 90",
          stroke: "rgb(168, 85, 247)",
          strokeWidth: "2.5",
          fill: "none",
          markerEnd: "url(#arrow-purple)",
          className: "dark:stroke-purple-400"
        }
      ),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "320",
            cy: "60",
            r: "18",
            fill: "rgb(59, 130, 246)",
            fillOpacity: "0.2",
            stroke: "rgb(59, 130, 246)",
            strokeWidth: "1.5",
            className: "dark:fill-blue-400/20 dark:stroke-blue-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "320",
            y: "66",
            textAnchor: "middle",
            className: "text-xs fill-slate-700 dark:fill-slate-300",
            fontSize: "10",
            children: "👤"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "320",
            y: "90",
            textAnchor: "middle",
            className: "text-xs fill-slate-600 dark:fill-slate-400",
            fontSize: "9",
            children: "User"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "320",
            cy: "90",
            r: "18",
            fill: "rgb(168, 85, 247)",
            fillOpacity: "0.2",
            stroke: "rgb(168, 85, 247)",
            strokeWidth: "1.5",
            className: "dark:fill-purple-400/20 dark:stroke-purple-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "320",
            y: "96",
            textAnchor: "middle",
            className: "text-xs fill-slate-700 dark:fill-slate-300",
            fontSize: "10",
            children: "🔧"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "320",
            y: "120",
            textAnchor: "middle",
            className: "text-xs fill-slate-600 dark:fill-slate-400",
            fontSize: "9",
            children: "Maintainer"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "320",
            cy: "120",
            r: "18",
            fill: "rgb(34, 197, 94)",
            fillOpacity: "0.2",
            stroke: "rgb(34, 197, 94)",
            strokeWidth: "1.5",
            className: "dark:fill-green-400/20 dark:stroke-green-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "320",
            y: "126",
            textAnchor: "middle",
            className: "text-xs fill-slate-700 dark:fill-slate-300",
            fontSize: "10",
            children: "⭐"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "320",
            y: "150",
            textAnchor: "middle",
            className: "text-xs fill-slate-600 dark:fill-slate-400",
            fontSize: "9",
            children: "Contributor"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "marker",
        {
          id: "arrow-purple",
          markerWidth: "8",
          markerHeight: "8",
          refX: "7",
          refY: "3",
          orient: "auto",
          children: /* @__PURE__ */ jsx(
            "polygon",
            {
              points: "0 0, 8 3, 0 6",
              fill: "rgb(168, 85, 247)",
              className: "dark:fill-purple-400"
            }
          )
        }
      ) })
    ]
  }
);
const BlockchainVisualization = ({ className = "", ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 300 400",
    className,
    "aria-label": "Three-layer blockchain visualization",
    ...props,
    children: [
      /* @__PURE__ */ jsxs("g", { opacity: "0.4", transform: "translate(0, 300)", children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "50",
            cy: "20",
            r: "8",
            fill: "rgb(34, 211, 238)",
            className: "dark:fill-cyan-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "150",
            cy: "30",
            r: "8",
            fill: "rgb(34, 211, 238)",
            className: "dark:fill-cyan-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "250",
            cy: "25",
            r: "8",
            fill: "rgb(34, 211, 238)",
            className: "dark:fill-cyan-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "100",
            cy: "50",
            r: "8",
            fill: "rgb(34, 211, 238)",
            className: "dark:fill-cyan-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "200",
            cy: "45",
            r: "8",
            fill: "rgb(34, 211, 238)",
            className: "dark:fill-cyan-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            x1: "50",
            y1: "20",
            x2: "150",
            y2: "30",
            stroke: "rgb(34, 211, 238)",
            strokeWidth: "1",
            opacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            x1: "150",
            y1: "30",
            x2: "250",
            y2: "25",
            stroke: "rgb(34, 211, 238)",
            strokeWidth: "1",
            opacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            x1: "100",
            y1: "50",
            x2: "200",
            y2: "45",
            stroke: "rgb(34, 211, 238)",
            strokeWidth: "1",
            opacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "150",
            y: "80",
            textAnchor: "middle",
            className: "text-xs fill-cyan-400 dark:fill-cyan-300",
            fontSize: "10",
            children: "Blockchain Network"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { transform: "translate(50, 150)", children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "0",
            y: "0",
            width: "200",
            height: "120",
            rx: "8",
            fill: "rgb(168, 85, 247)",
            fillOpacity: "0.2",
            stroke: "rgb(168, 85, 247)",
            strokeWidth: "2",
            className: "dark:fill-purple-400/20 dark:stroke-purple-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "100",
            cy: "40",
            r: "25",
            fill: "rgb(234, 179, 8)",
            className: "dark:fill-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M100 20 L102 30 L112 30 L104 38 L106 48 L100 42 L94 48 L96 38 L88 30 L98 30 Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "100",
            y: "75",
            textAnchor: "middle",
            className: "text-xs fill-slate-700 dark:fill-slate-300",
            fontSize: "10",
            fontWeight: "bold",
            children: "Star Token"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "20",
            y: "85",
            width: "70",
            height: "20",
            rx: "4",
            fill: "rgb(239, 68, 68)",
            fillOpacity: "0.3",
            stroke: "rgb(239, 68, 68)",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "55",
            y: "98",
            textAnchor: "middle",
            className: "text-xs fill-slate-700 dark:fill-slate-300",
            fontSize: "8",
            children: "Not Tradeable"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "110",
            y: "85",
            width: "70",
            height: "20",
            rx: "4",
            fill: "rgb(239, 68, 68)",
            fillOpacity: "0.3",
            stroke: "rgb(239, 68, 68)",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "145",
            y: "98",
            textAnchor: "middle",
            className: "text-xs fill-slate-700 dark:fill-slate-300",
            fontSize: "8",
            children: "Not Transferable"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "100",
            y: "115",
            textAnchor: "middle",
            className: "text-xs fill-slate-600 dark:fill-slate-400",
            fontSize: "9",
            children: "Smart Contracts"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { transform: "translate(20, 20)", children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "0",
            y: "0",
            width: "260",
            height: "180",
            rx: "8",
            fill: "rgb(59, 130, 246)",
            fillOpacity: "0.15",
            stroke: "rgb(59, 130, 246)",
            strokeWidth: "2",
            strokeDasharray: "4,4",
            className: "dark:fill-blue-400/15 dark:stroke-blue-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "130",
            cy: "60",
            r: "40",
            fill: "none",
            stroke: "rgb(59, 130, 246)",
            strokeWidth: "1.5",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "130",
            cy: "60",
            r: "25",
            fill: "none",
            stroke: "rgb(59, 130, 246)",
            strokeWidth: "1.5",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "110",
            cy: "50",
            r: "3",
            fill: "rgb(234, 179, 8)",
            className: "dark:fill-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "150",
            cy: "50",
            r: "3",
            fill: "rgb(234, 179, 8)",
            className: "dark:fill-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "130",
            cy: "75",
            r: "3",
            fill: "rgb(234, 179, 8)",
            className: "dark:fill-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "130",
            y: "140",
            textAnchor: "middle",
            className: "text-xs fill-slate-700 dark:fill-slate-300",
            fontSize: "10",
            fontWeight: "bold",
            children: "Ara Visual Interface"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "130",
            y: "160",
            textAnchor: "middle",
            className: "text-xs fill-slate-600 dark:fill-slate-400",
            fontSize: "9",
            children: "Holographic Frontend"
          }
        )
      ] })
    ]
  }
);
const AuthorOwnershipVisualization = ({ className = "", ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 400 200",
    className,
    "aria-label": "Author ownership and threshold visualization",
    ...props,
    children: [
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "80",
            cy: "100",
            r: "35",
            fill: "rgb(168, 85, 247)",
            fillOpacity: "0.2",
            stroke: "rgb(168, 85, 247)",
            strokeWidth: "2",
            className: "dark:fill-purple-400/20 dark:stroke-purple-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "80",
            y: "108",
            textAnchor: "middle",
            className: "text-lg fill-slate-700 dark:fill-slate-300",
            fontSize: "16",
            children: "👤"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "80",
            y: "150",
            textAnchor: "middle",
            className: "text-xs fill-slate-600 dark:fill-slate-400",
            fontSize: "11",
            fontWeight: "bold",
            children: "Author"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M 115 100 L 180 100",
          stroke: "rgb(168, 85, 247)",
          strokeWidth: "2",
          fill: "none",
          markerEnd: "url(#arrow-purple2)",
          className: "dark:stroke-purple-400"
        }
      ),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "200",
            y: "50",
            width: "180",
            height: "100",
            rx: "8",
            fill: "rgb(234, 179, 8)",
            fillOpacity: "0.15",
            stroke: "rgb(234, 179, 8)",
            strokeWidth: "2",
            strokeDasharray: "3,3",
            className: "dark:fill-yellow-400/15 dark:stroke-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M 290 85 L 290 75 Q 290 70, 295 70 L 305 70 Q 310 70, 310 75 L 310 85 L 315 85 L 315 100 L 285 100 L 285 85 Z",
            fill: "rgb(239, 68, 68)",
            className: "dark:fill-red-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "300",
            cy: "75",
            r: "8",
            fill: "none",
            stroke: "rgb(239, 68, 68)",
            strokeWidth: "2",
            className: "dark:stroke-red-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "300",
            y: "125",
            textAnchor: "middle",
            className: "text-xs fill-slate-700 dark:fill-slate-300",
            fontSize: "11",
            fontWeight: "bold",
            children: "Locked Star Tokens"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "300",
            y: "140",
            textAnchor: "middle",
            className: "text-xs fill-slate-600 dark:fill-slate-400",
            fontSize: "10",
            children: "< 100,000 Threshold"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "line",
        {
          x1: "200",
          y1: "30",
          x2: "380",
          y2: "30",
          stroke: "rgb(168, 85, 247)",
          strokeWidth: "2",
          strokeDasharray: "5,5",
          opacity: "0.6"
        }
      ),
      /* @__PURE__ */ jsx(
        "text",
        {
          x: "290",
          y: "25",
          textAnchor: "middle",
          className: "text-xs fill-purple-600 dark:fill-purple-400",
          fontSize: "10",
          fontWeight: "bold",
          children: "Threshold: 100,000 Stars"
        }
      ),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "marker",
        {
          id: "arrow-purple2",
          markerWidth: "8",
          markerHeight: "8",
          refX: "7",
          refY: "3",
          orient: "auto",
          children: /* @__PURE__ */ jsx(
            "polygon",
            {
              points: "0 0, 8 3, 0 6",
              fill: "rgb(168, 85, 247)",
              className: "dark:fill-purple-400"
            }
          )
        }
      ) })
    ]
  }
);
const OwnershipTransition = ({ className = "", ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 450 200",
    className,
    "aria-label": "Ownership transition to community",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "50",
          y: "20",
          width: "350",
          height: "30",
          rx: "4",
          fill: "rgb(34, 197, 94)",
          fillOpacity: "0.2",
          stroke: "rgb(34, 197, 94)",
          strokeWidth: "2",
          className: "dark:fill-green-400/20 dark:stroke-green-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "text",
        {
          x: "225",
          y: "40",
          textAnchor: "middle",
          className: "text-xs fill-green-700 dark:fill-green-400",
          fontSize: "11",
          fontWeight: "bold",
          children: "✓ Threshold Reached: 100,000+ Stars"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M 225 60 L 225 80",
          stroke: "rgb(34, 197, 94)",
          strokeWidth: "3",
          fill: "none",
          markerEnd: "url(#arrow-green)"
        }
      ),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "120",
            cy: "130",
            r: "20",
            fill: "rgb(168, 85, 247)",
            fillOpacity: "0.2",
            stroke: "rgb(168, 85, 247)",
            strokeWidth: "1.5",
            className: "dark:fill-purple-400/20 dark:stroke-purple-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M120 115 L121 125 L131 125 L123 132 L125 140 L120 135 L115 140 L117 132 L109 125 L119 125 Z",
            fill: "rgb(234, 179, 8)",
            className: "dark:fill-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "225",
            cy: "130",
            r: "20",
            fill: "rgb(168, 85, 247)",
            fillOpacity: "0.2",
            stroke: "rgb(168, 85, 247)",
            strokeWidth: "1.5",
            className: "dark:fill-purple-400/20 dark:stroke-purple-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M225 115 L226 125 L236 125 L228 132 L230 140 L225 135 L220 140 L222 132 L214 125 L224 125 Z",
            fill: "rgb(234, 179, 8)",
            className: "dark:fill-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "330",
            cy: "130",
            r: "20",
            fill: "rgb(168, 85, 247)",
            fillOpacity: "0.2",
            stroke: "rgb(168, 85, 247)",
            strokeWidth: "1.5",
            className: "dark:fill-purple-400/20 dark:stroke-purple-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M330 115 L331 125 L341 125 L333 132 L335 140 L330 135 L325 140 L327 132 L319 125 L329 125 Z",
            fill: "rgb(234, 179, 8)",
            className: "dark:fill-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            x1: "120",
            y1: "130",
            x2: "225",
            y2: "130",
            stroke: "rgb(34, 197, 94)",
            strokeWidth: "1.5",
            opacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "line",
          {
            x1: "225",
            y1: "130",
            x2: "330",
            y2: "130",
            stroke: "rgb(34, 197, 94)",
            strokeWidth: "1.5",
            opacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "225",
            y: "175",
            textAnchor: "middle",
            className: "text-xs fill-slate-700 dark:fill-slate-300",
            fontSize: "11",
            fontWeight: "bold",
            children: "Community of Star Holders"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "225",
            y: "190",
            textAnchor: "middle",
            className: "text-xs fill-slate-600 dark:fill-slate-400",
            fontSize: "10",
            children: "Aligned with Author's Direction"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "marker",
        {
          id: "arrow-green",
          markerWidth: "8",
          markerHeight: "8",
          refX: "7",
          refY: "3",
          orient: "auto",
          children: /* @__PURE__ */ jsx(
            "polygon",
            {
              points: "0 0, 8 3, 0 6",
              fill: "rgb(34, 197, 94)",
              className: "dark:fill-green-400"
            }
          )
        }
      ) })
    ]
  }
);
const AraApproachFlow = ({ className = "", ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 700 250",
    className,
    "aria-label": "Ara approach flow: Funding to Participation, Collaboration, and Responsibility",
    ...props,
    children: [
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "50",
            y: "80",
            width: "120",
            height: "80",
            rx: "8",
            fill: "rgb(239, 68, 68)",
            fillOpacity: "0.2",
            stroke: "rgb(239, 68, 68)",
            strokeWidth: "2",
            className: "dark:fill-red-900/30 dark:stroke-red-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "110",
            cy: "50",
            r: "20",
            fill: "rgb(239, 68, 68)",
            className: "dark:fill-red-400",
            children: /* @__PURE__ */ jsx("title", { children: "Funding" })
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "110",
            y: "57",
            textAnchor: "middle",
            className: "text-sm fill-white",
            fontSize: "14",
            fontWeight: "bold",
            children: "$"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "110",
            y: "180",
            textAnchor: "middle",
            className: "text-xs fill-slate-700 dark:fill-slate-300",
            fontSize: "12",
            fontWeight: "bold",
            children: "Funding"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M 170 120 L 220 120",
          stroke: "rgb(59, 130, 246)",
          strokeWidth: "3",
          fill: "none",
          markerEnd: "url(#arrowhead-blue)",
          className: "dark:stroke-blue-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "220",
          cy: "120",
          r: "4",
          fill: "rgb(59, 130, 246)",
          className: "dark:fill-blue-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M 220 120 L 220 60 L 280 60",
          stroke: "rgb(59, 130, 246)",
          strokeWidth: "2",
          fill: "none",
          className: "dark:stroke-blue-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M 220 120 L 350 120",
          stroke: "rgb(59, 130, 246)",
          strokeWidth: "2",
          fill: "none",
          className: "dark:stroke-blue-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M 220 120 L 220 180 L 280 180",
          stroke: "rgb(59, 130, 246)",
          strokeWidth: "2",
          fill: "none",
          className: "dark:stroke-blue-400"
        }
      ),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "300",
            y: "20",
            width: "140",
            height: "70",
            rx: "8",
            fill: "rgb(59, 130, 246)",
            fillOpacity: "0.2",
            stroke: "rgb(59, 130, 246)",
            strokeWidth: "2",
            className: "dark:fill-blue-900/30 dark:stroke-blue-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "370",
            y: "65",
            textAnchor: "middle",
            className: "text-sm fill-slate-700 dark:fill-slate-300",
            fontSize: "13",
            fontWeight: "bold",
            children: "Participation"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "370",
            y: "80",
            width: "140",
            height: "70",
            rx: "8",
            fill: "rgb(59, 130, 246)",
            fillOpacity: "0.2",
            stroke: "rgb(59, 130, 246)",
            strokeWidth: "2",
            className: "dark:fill-blue-900/30 dark:stroke-blue-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "440",
            y: "125",
            textAnchor: "middle",
            className: "text-sm fill-slate-700 dark:fill-slate-300",
            fontSize: "13",
            fontWeight: "bold",
            children: "Collaboration"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "300",
            y: "140",
            width: "140",
            height: "70",
            rx: "8",
            fill: "rgb(59, 130, 246)",
            fillOpacity: "0.2",
            stroke: "rgb(59, 130, 246)",
            strokeWidth: "2",
            className: "dark:fill-blue-900/30 dark:stroke-blue-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "370",
            y: "185",
            textAnchor: "middle",
            className: "text-sm fill-slate-700 dark:fill-slate-300",
            fontSize: "13",
            fontWeight: "bold",
            children: "Responsibility"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "marker",
        {
          id: "arrowhead-blue",
          markerWidth: "10",
          markerHeight: "10",
          refX: "9",
          refY: "3",
          orient: "auto",
          children: /* @__PURE__ */ jsx(
            "polygon",
            {
              points: "0 0, 10 3, 0 6",
              fill: "rgb(59, 130, 246)",
              className: "dark:fill-blue-400"
            }
          )
        }
      ) })
    ]
  }
);
const HyperpayDependencyTree = ({ className = "", ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 600 350",
    className,
    "aria-label": "Hyperpay dependency tree showing 20% funding routing to dependencies",
    ...props,
    children: [
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "250",
            y: "20",
            width: "100",
            height: "60",
            rx: "8",
            fill: "rgb(34, 197, 94)",
            fillOpacity: "0.3",
            stroke: "rgb(34, 197, 94)",
            strokeWidth: "2",
            className: "dark:fill-green-900/30 dark:stroke-green-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "300",
            y: "45",
            textAnchor: "middle",
            className: "text-sm fill-slate-800 dark:fill-slate-200",
            fontSize: "14",
            fontWeight: "bold",
            children: "Your Project"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "300",
            y: "62",
            textAnchor: "middle",
            className: "text-xs fill-slate-600 dark:fill-slate-400",
            fontSize: "12",
            children: "100% Star Tokens"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "270",
          y: "90",
          width: "60",
          height: "30",
          rx: "4",
          fill: "rgb(59, 130, 246)",
          fillOpacity: "0.2",
          stroke: "rgb(59, 130, 246)",
          strokeWidth: "2",
          className: "dark:fill-blue-900/30 dark:stroke-blue-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "text",
        {
          x: "300",
          y: "110",
          textAnchor: "middle",
          className: "text-xs fill-slate-700 dark:fill-slate-300",
          fontSize: "11",
          fontWeight: "bold",
          children: "Funding"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M 300 120 L 300 160",
          stroke: "rgb(34, 197, 94)",
          strokeWidth: "2",
          fill: "none",
          markerEnd: "url(#arrowhead-green)",
          className: "dark:stroke-green-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "text",
        {
          x: "320",
          y: "145",
          className: "text-xs fill-green-600 dark:fill-green-400",
          fontSize: "12",
          fontWeight: "bold",
          children: "20%"
        }
      ),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "50",
            y: "180",
            width: "100",
            height: "60",
            rx: "8",
            fill: "rgb(34, 197, 94)",
            fillOpacity: "0.2",
            stroke: "rgb(34, 197, 94)",
            strokeWidth: "2",
            strokeDasharray: "4,4",
            className: "dark:fill-green-900/20 dark:stroke-green-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "100",
            y: "205",
            textAnchor: "middle",
            className: "text-sm fill-slate-700 dark:fill-slate-300",
            fontSize: "13",
            fontWeight: "bold",
            children: "Dependency 1"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "100",
            cy: "225",
            r: "8",
            fill: "rgb(234, 179, 8)",
            className: "dark:fill-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M100 217 L102 224 L109 224 L103 229 L105 236 L100 231 L95 236 L97 229 L91 224 L98 224 Z",
            fill: "white"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "250",
            y: "180",
            width: "100",
            height: "60",
            rx: "8",
            fill: "rgb(34, 197, 94)",
            fillOpacity: "0.2",
            stroke: "rgb(34, 197, 94)",
            strokeWidth: "2",
            strokeDasharray: "4,4",
            className: "dark:fill-green-900/20 dark:stroke-green-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "300",
            y: "205",
            textAnchor: "middle",
            className: "text-sm fill-slate-700 dark:fill-slate-300",
            fontSize: "13",
            fontWeight: "bold",
            children: "Dependency 2"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "300",
            cy: "225",
            r: "8",
            fill: "rgb(234, 179, 8)",
            className: "dark:fill-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M300 217 L302 224 L309 224 L303 229 L305 236 L300 231 L295 236 L297 229 L291 224 L298 224 Z",
            fill: "white"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "450",
            y: "180",
            width: "100",
            height: "60",
            rx: "8",
            fill: "rgb(34, 197, 94)",
            fillOpacity: "0.2",
            stroke: "rgb(34, 197, 94)",
            strokeWidth: "2",
            strokeDasharray: "4,4",
            className: "dark:fill-green-900/20 dark:stroke-green-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "500",
            y: "205",
            textAnchor: "middle",
            className: "text-sm fill-slate-700 dark:fill-slate-300",
            fontSize: "13",
            fontWeight: "bold",
            children: "Dependency 3"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "500",
            cy: "225",
            r: "8",
            fill: "rgb(234, 179, 8)",
            className: "dark:fill-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M500 217 L502 224 L509 224 L503 229 L505 236 L500 231 L495 236 L497 229 L491 224 L498 224 Z",
            fill: "white"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M 300 160 L 100 180",
          stroke: "rgb(34, 197, 94)",
          strokeWidth: "2",
          strokeOpacity: "0.5",
          fill: "none",
          className: "dark:stroke-green-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M 300 160 L 300 180",
          stroke: "rgb(34, 197, 94)",
          strokeWidth: "2",
          strokeOpacity: "0.5",
          fill: "none",
          className: "dark:stroke-green-400"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M 300 160 L 500 180",
          stroke: "rgb(34, 197, 94)",
          strokeWidth: "2",
          strokeOpacity: "0.5",
          fill: "none",
          className: "dark:stroke-green-400"
        }
      ),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "50",
            y: "280",
            width: "500",
            height: "60",
            rx: "8",
            fill: "rgb(249, 250, 251)",
            fillOpacity: "0.5",
            stroke: "rgb(203, 213, 225)",
            strokeWidth: "1",
            className: "dark:fill-slate-800/50 dark:stroke-slate-600"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "300",
            y: "300",
            textAnchor: "middle",
            className: "text-xs fill-slate-700 dark:fill-slate-300",
            fontSize: "12",
            fontWeight: "bold",
            children: "Maintainers earn Stars in dependencies"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "300",
            y: "320",
            textAnchor: "middle",
            className: "text-xs fill-slate-600 dark:fill-slate-400",
            fontSize: "11",
            children: "Stay aligned with teams • Protect functions • Long-term stakeholders"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "marker",
        {
          id: "arrowhead-green",
          markerWidth: "10",
          markerHeight: "10",
          refX: "9",
          refY: "3",
          orient: "auto",
          children: /* @__PURE__ */ jsx(
            "polygon",
            {
              points: "0 0, 10 3, 0 6",
              fill: "rgb(34, 197, 94)",
              className: "dark:fill-green-400"
            }
          )
        }
      ) })
    ]
  }
);
const TelegramIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.559z" })
  }
);
const DiscordIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" })
  }
);
const GitHubIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
  }
);
const LinkedInIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
  }
);
const TwitterIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
  }
);
const BlueskyIcon = ({ className = "", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M12 10.8c-1.087-.488-2.13-1.01-3.23-1.547a.5.5 0 0 0-.74.44v9.1a.5.5 0 0 0 .22.41l3.62 2.47a.5.5 0 0 0 .66-.08l3.69-3.12a.5.5 0 0 0 .19-.4v-6.47a.5.5 0 0 0-.4-.49c-1.3-.2-2.6-.4-3.84-.69zm-1.5-8.55c-1.198.54-2.44 1.1-3.7 1.69a.5.5 0 0 0-.3.46v4.2a.5.5 0 0 0 .22.41l2.5 1.7a.5.5 0 0 0 .56.02l4.3-2.5a.5.5 0 0 0 .22-.41V4.5a.5.5 0 0 0-.3-.46c-1.26-.59-2.5-1.15-3.7-1.69z" })
  }
);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const mockGalaxy = {
    _id: "693f178fe2790a79200798b3",
    maintainer: "hero-maintainer",
    projectLink: "hero-project",
    name: "Ara App",
    description: "The frontend application for Ara platform",
    stars: 1250,
    sunshines: 8500,
    users: 42,
    donationAmount: 125e3,
    x: 0,
    y: 0,
    tags: ["Frontend", "React", "Astro", "Web3", "Open Source"]
  };
  return renderTemplate`${renderComponent($$result, "GalaxyLayout", $$GalaxyLayout, { "active": MenuName.ProjectList, "hideLinks": Object.keys(MenuName), "projectName": "Ara", "initialZoom": 100, "minZoom": 25, "maxZoom": 150, "isStatic": true }, { "center": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="w-full max-w-4xl mx-auto space-y-16 py-20 px-4"> <!-- Decorative separator --> <div class="flex items-center justify-center gap-4 my-8"> <div class="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-slate-300 dark:via-slate-600 dark:to-slate-600"></div> <div class="flex items-center gap-2"> ${renderComponent($$result2, "StarIcon", StarIcon, { "client:load": true, "class": "w-4 h-4 text-yellow-500 dark:text-yellow-400", "client:component-hydration": "load", "client:component-path": "@/components/icon", "client:component-export": "StarIcon" })} ${renderComponent($$result2, "StarIcon", StarIcon, { "client:load": true, "class": "w-3 h-3 text-yellow-500 dark:text-yellow-400", "client:component-hydration": "load", "client:component-path": "@/components/icon", "client:component-export": "StarIcon" })} ${renderComponent($$result2, "StarIcon", StarIcon, { "client:load": true, "class": "w-2 h-2 text-yellow-500 dark:text-yellow-400", "client:component-hydration": "load", "client:component-path": "@/components/icon", "client:component-export": "StarIcon" })} </div> <div class="flex-1 h-px bg-gradient-to-l from-transparent via-slate-300 to-slate-300 dark:via-slate-600 dark:to-slate-600"></div> </div> <!-- Why Ara --> <section id="why-ara-section" class="text-center space-y-12"> <div> <div class="flex items-center justify-center gap-3 mb-4"> ${renderComponent($$result2, "LightbulbIcon", LightbulbIcon, { "class": "text-blue-500 dark:text-blue-400" })} <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-200">
Why Ara
</h2> </div> <p class="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
Open source, built to last.
</p> <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4">
Ara turns open source projects into sustainable shared efforts between
          maintainers and users.
</p> </div> <!-- Decorative separator --> <div class="flex items-center justify-center gap-2 my-12 opacity-50"> <div class="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></div> <div class="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"></div> <div class="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></div> </div> <!-- What sustainable means in Ara --> <div class="mt-12"> <h3 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-300 mb-8 flex items-center justify-center gap-3"> ${renderComponent($$result2, "CheckmarkCircleIcon", CheckmarkCircleIcon, { "class": "text-green-500 dark:text-green-400" })}
What sustainable means in Ara
</h3> <div class="grid md:grid-cols-2 gap-6 md:gap-8"> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-300/40 dark:border-slate-700/40 rounded-xl p-6 md:p-8 text-left"> <div class="flex items-center gap-3 mb-4"> <div class="p-2 rounded-lg bg-blue-500/20 dark:bg-blue-400/20"> ${renderComponent($$result2, "UsersIcon", UsersIcon, { "class": "text-blue-500 dark:text-blue-400" })} </div> <h4 class="text-xl font-bold text-slate-800 dark:text-slate-200">
For maintainers and contributors
</h4> </div> <ul class="space-y-3"> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Reliable funding to support ongoing work</span> </li> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Long term collaborators instead of one off donors</span> </li> </ul> </div> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-700/40 rounded-xl p-6 md:p-8 text-left"> <div class="flex items-center gap-3 mb-4"> <div class="p-2 rounded-lg bg-purple-500/20 dark:bg-purple-400/20"> ${renderComponent($$result2, "UsersGroupIcon", UsersGroupIcon, { "class": "text-purple-500 dark:text-purple-400" })} </div> <h4 class="text-xl font-bold text-slate-800 dark:text-slate-200">
For users
</h4> </div> <ul class="space-y-3"> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Fund the features you need</span> </li> <li class="flex items-start gap-2 text-slate-700 dark:text-slate-300"> ${renderComponent($$result2, "CheckmarkIcon", CheckmarkIcon, { "class": "text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" })} <span>Confidence that critical functionality will not be deprecated</span> </li> </ul> </div> </div> </div> <!-- Decorative separator --> <div class="flex items-center justify-center gap-2 my-12 opacity-50"> <div class="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></div> <div class="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"></div> <div class="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></div> </div> <!-- The problem today --> <div class="mt-12"> <h3 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center justify-center gap-3"> ${renderComponent($$result2, "WarningTriangleIcon", WarningTriangleIcon, { "class": "text-red-500 dark:text-red-400" })}
The problem today
</h3> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-red-200/40 dark:border-red-700/40 rounded-xl p-6 md:p-8 max-w-3xl mx-auto"> <div class="mb-6"> ${renderComponent($$result2, "DecliningGraph", DecliningGraph, { "client:load": true, "class": "w-full h-32 mx-auto", "client:component-hydration": "load", "client:component-path": "@/svg/index", "client:component-export": "DecliningGraph" })} </div> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-4">
Most open source projects rely on donations.
</p> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-4">
In practice, donations rarely sustain long term maintenance or
            continued development.
</p> <!-- Problem indicators --> <div class="grid grid-cols-3 gap-4 mt-6"> <div class="text-center"> <div class="p-3 rounded-lg bg-red-100/50 dark:bg-red-900/30 inline-block mb-2"> ${renderComponent($$result2, "UsersIcon", UsersIcon, { "class": "text-red-600 dark:text-red-400" })} </div> <p class="text-md text-slate-600 dark:text-slate-400">
Only popular projects
</p> </div> <div class="text-center"> <div class="p-3 rounded-lg bg-red-100/50 dark:bg-red-900/30 inline-block mb-2"> ${renderComponent($$result2, "BookIcon", BookIcon, { "class": "text-red-600 dark:text-red-400" })} </div> <p class="text-md text-slate-600 dark:text-slate-400">
Requires soft skills
</p> </div> <div class="text-center"> <div class="p-3 rounded-lg bg-red-100/50 dark:bg-red-900/30 inline-block mb-2"> ${renderComponent($$result2, "ClockIcon", ClockIcon, { "class": "text-red-600 dark:text-red-400" })} </div> <p class="text-md text-slate-600 dark:text-slate-400">
Unreliable long-term
</p> </div> </div> </div> </div> <!-- Decorative separator --> <div class="flex items-center justify-center gap-2 my-12 opacity-50"> <div class="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></div> <div class="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"></div> <div class="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></div> </div> <!-- The Ara approach --> <div class="mt-12"> <h3 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center justify-center gap-3"> ${renderComponent($$result2, "LightningIcon", LightningIcon, { "class": "text-blue-500 dark:text-blue-400" })}
The Ara approach
</h3> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-blue-200/40 dark:border-blue-700/40 rounded-xl p-6 md:p-8 max-w-4xl mx-auto"> <!-- Flow Diagram --> <div class="mb-6"> ${renderComponent($$result2, "AraApproachFlow", AraApproachFlow, { "class": "w-full h-auto" })} </div> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300">
Instead of asking for donations, Ara gives users a reason to invest.
            Funding becomes participation, collaboration, and shared
            responsibility, benefiting both the people who build the project and
            the people who rely on it.
</p> </div> </div> <!-- Before/After Comparison Diagram --> <div class="mt-12 max-w-4xl mx-auto"> <div class="grid md:grid-cols-2 gap-6"> <div class="backdrop-blur-md bg-red-50/30 dark:bg-red-900/20 border border-red-200/40 dark:border-red-700/40 rounded-xl p-6"> <h5 class="text-lg font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path> </svg>
Before (Donations)
</h5> <div class="space-y-3"> <div class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path> </svg> <span>Unreliable, one-time payments</span> </div> <div class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path> </svg> <span>No long-term commitment</span> </div> <div class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path> </svg> <span>Only popular projects benefit</span> </div> </div> </div> <div class="backdrop-blur-md bg-green-50/30 dark:bg-green-900/20 border border-green-200/40 dark:border-green-700/40 rounded-xl p-6"> <h5 class="text-lg font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg>
After (Ara)
</h5> <div class="space-y-3"> <div class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"> ${renderComponent($$result2, "StarIcon", StarIcon, { "client:load": true, "class": "w-4 h-4 text-green-500", "client:component-hydration": "load", "client:component-path": "@/components/icon", "client:component-export": "StarIcon" })} <span>Sustainable, ongoing funding</span> </div> <div class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"> ${renderComponent($$result2, "StarIcon", StarIcon, { "client:load": true, "class": "w-4 h-4 text-green-500", "client:component-hydration": "load", "client:component-path": "@/components/icon", "client:component-export": "StarIcon" })} <span>Long-term collaboration & ownership</span> </div> <div class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"> ${renderComponent($$result2, "StarIcon", StarIcon, { "client:load": true, "class": "w-4 h-4 text-green-500", "client:component-hydration": "load", "client:component-path": "@/components/icon", "client:component-export": "StarIcon" })} <span>All projects can benefit</span> </div> </div> </div> </div> </div> </section> <!-- Decorative separator --> <div class="flex items-center justify-center gap-2 my-12 opacity-50"> <div class="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></div> <div class="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"></div> <div class="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></div> </div> <!-- Security through tokens --> <div class="mt-12"> <h3 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center justify-center gap-3"> ${renderComponent($$result2, "LockIcon", LockIcon, { "class": "text-purple-500 dark:text-purple-400" })}
Security through tokens
</h3> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-purple-200/40 dark:border-purple-700/40 rounded-xl p-6 md:p-8 mt-8 overflow-visible"> <!-- First Paragraph: Funding creates Star Tokens --> <div class="mb-12 relative"> <div class="flex flex-col md:flex-row gap-6 items-start"> <div class="flex-1 space-y-1.5"> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300">
Donator's funding creates Star Tokens shared between them,
                maintainers, and optionally contributors.
</p> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300">
Each Star forge is tied to real Git issues and commits and is
                recorded in a public ledger, making collaboration history and
                ownership rules verifiable.
</p> </div> <div class="flex-1 md:flex-none md:w-1/2 relative -mr-12 md:-mr-24"> <!-- Funding Flow Diagram --> <div class="mb-6"> ${renderComponent($$result2, "FundingFlowDiagram", FundingFlowDiagram, { "client:load": true, "class": "w-full h-auto", "client:component-hydration": "load", "client:component-path": "@/svg/index", "client:component-export": "FundingFlowDiagram" })} </div> <!-- Holographic Record Log --> <div class="backdrop-blur-sm bg-cyan-500/10 dark:bg-cyan-900/20 border border-cyan-400/30 dark:border-cyan-500/30 rounded-lg p-4 font-mono text-xs space-y-2 relative overflow-hidden" style="box-shadow: 0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)"> <!-- Scan line effect --> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent pointer-events-none" style="animation: scan 3s linear infinite;"></div> <div class="text-cyan-400 dark:text-cyan-300 font-semibold mb-2">
[LOG] Star Token Records
</div> <div class="text-cyan-300 dark:text-cyan-400">
001>: + 12 Stars issue #42, commit a3f2b1
</div> <div class="text-cyan-300 dark:text-cyan-400">
002>: + 8 Stars issue #38, commit 9e4c7d
</div> <div class="text-cyan-300 dark:text-cyan-400">
003>: + 15 Stars issue #51, commit 2b8f3a
</div> <div class="text-cyan-300 dark:text-cyan-400">
004>: + 10 Stars issue #45, commit 7d1e9c
</div> <div class="text-cyan-300 dark:text-cyan-400 flex items-center gap-1">
005>: + 9 Stars issue #39, commit 4a6b2f<span class="animate-pulse">...</span> </div> </div> </div> </div> </div> <!-- Second Paragraph: Ara records on blockchain --> <div class="mb-12 relative"> <div class="flex flex-col md:flex-row gap-6 items-start"> <div class="flex-1 md:flex-none md:w-1/4 relative -ml-12 md:-ml-24 order-2 md:order-1"> <!-- Three-Layer Blockchain Visualization --> <div class="relative" style="perspective: 1000px;"> ${renderComponent($$result2, "BlockchainVisualization", BlockchainVisualization, { "client:load": true, "class": "w-full h-auto", "client:component-hydration": "load", "client:component-path": "@/svg/index", "client:component-export": "BlockchainVisualization" })} </div> </div> <div class="flex-1 order-1 md:order-2"> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300">
These records are created by users' own actions; Ara does not
                execute or control them. Ara simply acts as a visual interface
                that lets people explore and understand what already exists.
</p> </div> </div> </div> <!-- Third Paragraph: Author keeps ownership --> <div class="mb-12"> <div class="flex flex-col md:flex-row gap-6 items-center"> <div class="flex-1"> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-4">
Ara's core rule is simple: the author retains ownership until
                forged Stars reach a certain amount, after which ownership
                shifts to the people who forged the Stars.
</p> </div> <div class="flex-1"> ${renderComponent($$result2, "AuthorOwnershipVisualization", AuthorOwnershipVisualization, { "client:load": true, "class": "w-full h-auto", "client:component-hydration": "load", "client:component-path": "@/svg/index", "client:component-export": "AuthorOwnershipVisualization" })} </div> </div> </div> <!-- Fourth Paragraph: Ownership shifts --> <div class="mb-4"> <div class="flex flex-col md:flex-row gap-6 items-center"> <div class="flex-1"> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-4">
This creates long-term sustainability: maintainers can scale or
                step back without burnout, while users gain real stewardship,
                such as staking Stars to protect critical functions or APIs.
</p> </div> <div class="flex-1"> ${renderComponent($$result2, "OwnershipTransition", OwnershipTransition, { "client:load": true, "class": "w-full h-auto", "client:component-hydration": "load", "client:component-path": "@/svg/index", "client:component-export": "OwnershipTransition" })} </div> </div> </div> </div> </div> <!-- Decorative separator --> <div class="flex items-center justify-center gap-2 my-12 opacity-50"> <div class="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></div> <div class="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"></div> <div class="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></div> </div> <!-- Hyperpay for long term sustainability --> <div class="mt-12"> <h3 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center justify-center gap-3"> <svg class="w-7 h-7 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path> </svg>
Hyperpay for long term sustainability
</h3> <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-green-200/40 dark:border-green-700/40 rounded-xl p-6 md:p-8 max-w-4xl mx-auto"> <!-- Dependency Tree Diagram --> <div class="mb-8"> ${renderComponent($$result2, "HyperpayDependencyTree", HyperpayDependencyTree, { "client:load": true, "class": "w-full h-auto", "aria-label": "Hyperpay dependency tree showing 20% funding routing to dependencies", "client:component-hydration": "load", "client:component-path": "@/svg/index", "client:component-export": "HyperpayDependencyTree" })} </div> <p class="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
Ara routes 20% of funding to project dependencies through
          hyperpayments.
</p> <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300">
While a project still receives 100% of its Star Tokens, maintainers
          can create Stars for critical libraries to stay aligned with their
          teams, protect essential functions from deprecation, and become
          long-term stakeholders in the dependencies that sustain the project.
</p> </div> </div> <!-- Decorative separator --> <div class="flex items-center justify-center gap-4 my-16"> <div class="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-slate-300 dark:via-slate-600 dark:to-slate-600"></div> <div class="flex items-center gap-2"> <svg class="w-4 h-4 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 24 24"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <svg class="w-3 h-3 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 24 24"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <svg class="w-2 h-2 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 24 24"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> </div> <div class="flex-1 h-px bg-gradient-to-l from-transparent via-slate-300 to-slate-300 dark:via-slate-600 dark:to-slate-600"></div> </div> <!-- CTA Section --> <section class="text-center space-y-6"> <h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 flex items-center justify-center gap-3"> <svg class="w-8 h-8 text-indigo-500 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg>
Ready to get started?
</h2> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"> <a href="/all-stars" class="px-6 py-3 bg-slate-500 text-slate-100 font-semibold rounded-lg hover:bg-slate-600 transition-colors">
Try Demo
</a> </div> </section> <!-- Social Links --> <section class="text-center space-y-4"> <p class="text-lg text-slate-600 dark:text-slate-400">
Also, let's stay connected!
</p> <div class="flex items-center justify-center gap-6 flex-wrap"> ${Object.values(socialLinks).map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="p-3 rounded-lg backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-700/40 hover:bg-white/40 dark:hover:bg-slate-900/40 transition-all"${addAttribute(link.label, "aria-label")}> ${link.type === "telegram" ? renderTemplate`${renderComponent($$result2, "TelegramIcon", TelegramIcon, { "class": "text-[#0088cc]" })}` : link.type === "discord" ? renderTemplate`${renderComponent($$result2, "DiscordIcon", DiscordIcon, { "class": "text-[#5865F2]" })}` : link.type === "github" ? renderTemplate`${renderComponent($$result2, "GitHubIcon", GitHubIcon, { "class": "text-slate-800 dark:text-slate-200" })}` : link.type === "linkedin" ? renderTemplate`${renderComponent($$result2, "LinkedInIcon", LinkedInIcon, { "class": "text-[#0077B5]" })}` : link.type === "twitter" ? renderTemplate`${renderComponent($$result2, "TwitterIcon", TwitterIcon, { "class": "text-blue-500" })}` : link.type === "bluesky" ? renderTemplate`${renderComponent($$result2, "BlueskyIcon", BlueskyIcon, { "class": "text-[#00A3FF]" })}` : null} </a>`)} </div> </section> </div>`, "hero": ($$result2) => renderTemplate`<section class="relative flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-20 pointer-events-auto" style="pointer-events: auto;"> <!-- Video Panel - Part of Hero Section --> ${renderComponent($$result2, "LandingVideoPanel", null, { "client:only": "react", "youtubeUrl": "https://youtu.be/IMUkljLpKIQ", "client:component-hydration": "only", "client:component-path": "@/components/landing/LandingVideoPanel", "client:component-export": "default" })} <div class="w-full max-w-4xl mx-auto space-y-6"> <div class="flex items-center justify-center gap-4 mb-6"> <img src="/ara_logo.png" alt="Ara Logo" class="w-24 h-24 md:w-32 md:h-32"> <div class="text-6xl md:text-7xl lg:text-8xl font-bold"> ${renderComponent($$result2, "AraGradientText", null, { "client:only": "react", "className": "font-bold", "client:component-hydration": "only", "client:component-path": "@/components/AraGradientText", "client:component-export": "default" })} </div> </div> <p class="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
Visual social media for long term sustainability
</p> <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto gap-1 flex items-center justify-center -mb-12 mt-12">
It has ${renderComponent($$result2, "Badge", Badge, { "variant": "purple", "className": "mb-0.5 mx-1" }, { "default": ($$result3) => renderTemplate`3` })} core ideas
</p> <!-- Feature Panels --> <div class="w-full max-w-6xl mx-auto my-16 flex flex-row md:grid md:grid-cols-3 gap-8 md:gap-10 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none scrollbar-hide"> <!-- Panel 1: Galaxy = Project --> <div class="relative p-8 flex flex-col items-center justify-center min-w-[300px] md:min-w-0 flex-shrink-0 snap-center backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"> <div class="h-56 w-full rounded-xl relative flex items-center justify-center mb-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20"> ${renderComponent($$result2, "ProjectGalaxy", null, { "client:only": "react", "x": 20, "y": 0, "projectName": mockGalaxy.name, "projectId": mockGalaxy._id, "galaxyData": mockGalaxy, "tags": mockGalaxy.tags, "leaderboardPosition": 1, "className": "rounded-lg ml-14 mt-14", "client:component-hydration": "only", "client:component-path": "@/components/all-stars/ProjectGalaxy", "client:component-export": "default" })} </div> <div class="text-center"> <div class="flex items-center justify-center gap-2 mb-3"> ${renderComponent($$result2, "DashboardIcon", DashboardIcon, { "client:load": true, "class": "text-blue-500 dark:text-blue-400", "client:component-hydration": "load", "client:component-path": "@/components/icon", "client:component-export": "DashboardIcon" })} <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200">
Galaxy = Project
</h3> </div> <p class="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
A galaxy represents an open-source repository.
</p> </div> </div> <!-- Panel 2: Stars = People --> <div class="relative p-8 flex flex-col items-center justify-center min-w-[300px] md:min-w-0 flex-shrink-0 snap-center backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"> <div class="h-56 w-full flex items-center justify-center mb-6 bg-gradient-to-br from-yellow-50/50 to-amber-50/50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl"> ${renderComponent($$result2, "UserStar", null, { "client:only": "react", "x": 0, "y": 0, "email": mockUserStars[0].email, "nickname": mockUserStars[0].nickname, "src": `https://api.dicebear.com/9.x/avataaars/svg?seed=${mockUserStars[0].nickname}&size=256`, "alt": mockUserStars[0].alt, "stars": mockUserStars[0].stars, "sunshines": mockUserStars[0].sunshines, "role": mockUserStars[0].role, "funded": mockUserStars[0].funded, "received": mockUserStars[0].received, "issuesClosed": mockUserStars[0].issuesClosed, "issuesActive": mockUserStars[0].issuesActive, "tags": mockUserStars[0].tags || [
    "Maintainer",
    "Django",
    "Solidity",
    "p2p"
  ], "disableTooltip": true, "className": "scale-120 ml-28 mt-28", "client:component-hydration": "only", "client:component-path": "@/components/all-stars/UserStar", "client:component-export": "default" })} </div> <div class="text-center"> <div class="flex items-center justify-center gap-2 mb-3"> ${renderComponent($$result2, "StarIcon", StarIcon, { "client:load": true, "class": "text-yellow-500 dark:text-yellow-400", "client:component-hydration": "load", "client:component-path": "@/components/icon", "client:component-export": "StarIcon" })} <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200">
Stars = People
</h3> </div> <p class="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
Users who forged tokens through collaboration.
</p> </div> </div> <!-- Panel 3: Ownership evolves --> <div class="relative p-8 flex flex-col items-center justify-center min-w-[300px] md:min-w-0 flex-shrink-0 snap-center backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"> <div class="h-56 w-full flex items-center justify-center mb-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl"> ${renderComponent($$result2, "AuthorOwnershipVisualization", AuthorOwnershipVisualization, { "client:load": true, "class": "w-full h-full", "client:component-hydration": "load", "client:component-path": "@/svg/index", "client:component-export": "AuthorOwnershipVisualization" })} </div> <div class="text-center"> <div class="flex items-center justify-center gap-1 mb-3"> ${renderComponent($$result2, "ChartIcon", ChartIcon, { "class": "text-purple-500 dark:text-purple-400" })} <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200">
Ownership Evolves
</h3> </div> <p class="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
If galaxy gets massive, ownership shifts to the Star-holding
              community.
</p> </div> </div> </div> <!-- Mobile scroll hint --> <div class="w-full max-w-6xl mx-auto -mt-8 mb-2 md:hidden"> <p class="text-sm text-slate-400 dark:text-slate-500 text-center flex items-center justify-center gap-1.5 opacity-50 italic"> ${renderComponent($$result2, "LeftArrowIcon", LeftArrowIcon, { "client:load": true, "class": "w-4 h-4", "client:component-hydration": "load", "client:component-path": "@/svg/index", "client:component-export": "LeftArrowIcon" })} ${renderComponent($$result2, "FingerTouchIcon", FingerTouchIcon, { "client:load": true, "class": "w-4 h-4", "client:component-hydration": "load", "client:component-path": "@/svg/index", "client:component-export": "FingerTouchIcon" })} <span class="text-sm">horizontally scrollable</span> ${renderComponent($$result2, "RightArrowIcon", RightArrowIcon, { "client:load": true, "class": "w-4 h-4", "client:component-hydration": "load", "client:component-path": "@/svg/index", "client:component-export": "RightArrowIcon" })} </p> </div> </div> <p class="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 -mt-4">
for open source users, maintainers, and contributors
</p> </section>` })} ${renderComponent($$result, "LandingVideoMiniPanel", LandingVideoMiniPanel, { "slot": "footer", "client:load": true, "youtubeUrl": "https://youtu.be/IMUkljLpKIQ", "client:component-hydration": "load", "client:component-path": "@/components/landing/LandingVideoMiniPanel", "client:component-export": "default" })} `;
}, "/home/medet/ara-app/src/pages/index.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
