import { i as createComponent, j as createAstro, w as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_WCbI3U70.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_aQb_8Ejw.mjs';
import { g as getIcon, B as Badge, C as Component$1, G as GridStyle, M as MenuName } from '../../chunks/BrowseTracker_CjQaYJF4.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React__default, { useState, useEffect, Children, useRef, useLayoutEffect } from 'react';
import { P as PageLikePanel } from '../../chunks/PageLikePanel_DyHCjbTr.mjs';
import { S as SearchBar } from '../../chunks/SearchBar_CwTEXagJ.mjs';
import { L as List } from '../../chunks/List_B2fiJoaU.mjs';
import { u as useSelectableList, S as SelectableItem } from '../../chunks/useSelectableList_aPVsWnXi.mjs';
import { B as Button, P as PanelAction } from '../../chunks/PanelAction_BPm-vUQ5.mjs';
import { g as getIssueStatIcon } from '../../chunks/utils_gmanUkFe.mjs';
import { M as MenuAvatar, T as TimeAgo, P as PanelFooter, F as Followings } from '../../chunks/timeago-react_Bm2JnYlR.mjs';
import { S as Spinner } from '../../chunks/index_1nmfEu_R.mjs';
import { Popover } from '@base-ui-components/react/popover';
import * as RadixSlider from '@radix-ui/react-slider';
import NumberFlow, { NumberFlowGroup, continuous } from '@number-flow/react';
import { c as cn } from '../../chunks/utils_CRaJ9uIg.mjs';
import { C as Component } from '../../chunks/Tooltip_CwxsUbL0.mjs';
import { a as getUserById, g as getDemo } from '../../chunks/user_3Q2CxTy8.mjs';
import { u as updateIssueSunshines } from '../../chunks/issue_7cyO0TZY.mjs';
import { TheaterIcon } from 'lucide-react';
import { F as FormField } from '../../chunks/LabeledInput_CTr_fZWm.mjs';
import { motion, AnimatePresence } from 'motion/react';
import { I as InfoPanel } from '../../chunks/InfoPanel_YQKDcEqY.mjs';
export { renderers } from '../../renderers.mjs';

const Input = ({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  disabled = false,
  ref
}) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ref,
      id,
      type,
      value,
      onChange,
      placeholder,
      disabled,
      className: `px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-purple-50 ${disabled ? "bg-gray-100 cursor-not-allowed" : ""} ${className}`
    }
  );
};

const C$1 = ({ repositoryUrl, setRepositoryUrl }) => {
  return /* @__PURE__ */ jsx(
    PageLikePanel,
    {
      icon: "new-file",
      titleCenter: true,
      title: "Add GitHub Repository",
      children: /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "repository-url", className: "block text-sm text-gray-700", children: [
          "Repository URL",
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "repository-url",
              type: "url",
              value: repositoryUrl || "",
              onChange: (e) => setRepositoryUrl(e.target.value),
              placeholder: "https://github.com/username/repository",
              className: "w-full mt-1"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
          getIcon("info"),
          " ",
          /* @__PURE__ */ jsx("span", { children: "You can add only your projects." })
        ] })
      ] })
    }
  );
};

const ProgressBar = ({ percentage, color = "blue" }) => {
  const colorClasses = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500"
  };
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `h-2 rounded-full ${colorClasses[color]}`,
      style: { width: `${percentage}%` }
    }
  ) });
};

const ProgressStep = ({ title, description, status, progress }) => {
  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-green-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17L4 12", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) });
      case "in-progress":
        return /* @__PURE__ */ jsxs("div", { className: "w-6 h-6 bg-green-500 rounded-full flex items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-white rounded-full" }),
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-white rounded-full ml-0.5" })
        ] });
      default:
        return /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-gray-300 rounded-full" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mt-1", children: getStatusIcon() }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-base font-medium text-gray-800 mb-1", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-3", children: description }),
      /* @__PURE__ */ jsx(ProgressBar, { percentage: progress })
    ] })
  ] });
};

const ConnectionCard$2 = () => {
  const steps = [
    {
      id: 1,
      title: "Initiating a session",
      description: "Successfully established a secure connection to GitHub's API",
      status: "completed",
      progress: 100
    },
    {
      id: 2,
      title: "Downloading project information from GitHub",
      description: "Retrieved repository metadata, commit history, and contributor information",
      status: "completed",
      progress: 85
    },
    {
      id: 3,
      title: "Fetching the SBOM",
      description: "Software Bill of Materials successfully generated and analyzed",
      status: "in-progress",
      progress: 60
    },
    {
      id: 4,
      title: "Analyzing dependencies",
      description: "Identified and categorized all project dependencies",
      status: "in-progress",
      progress: 75
    },
    {
      id: 5,
      title: "Preparing project summary",
      description: "Compilation of repository data complete and ready for review",
      status: "in-progress",
      progress: 40
    }
  ];
  return /* @__PURE__ */ jsxs(
    PageLikePanel,
    {
      title: /* @__PURE__ */ jsxs("div", { className: "flex justify-left", children: [
        /* @__PURE__ */ jsx("svg", { className: "mr-2", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", stroke: "#10B981", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }),
        "Connecting to Repo Host"
      ] }),
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "We're establishing a connection to GitHub and retrieving information about your repository. This process may take a few moments." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6 mb-8", children: steps.map((step) => /* @__PURE__ */ jsx(
          ProgressStep,
          {
            title: step.title,
            description: step.description,
            status: step.status,
            progress: step.progress
          },
          step.id
        )) })
      ]
    }
  );
};

function githubUrlToGit(url) {
  const cleanUrl = url.replace(/\/$/, "");
  const match = cleanUrl.match(/https:\/\/github\.com\/(.+)/);
  if (!match) {
    throw new Error("Invalid GitHub URL format");
  }
  const encodedPath = encodeURIComponent(match[1]);
  return `git/${encodedPath}`;
}

const SunshinesPopover = ({
  availableSunshines,
  currentSunshines,
  issueId,
  galaxyId,
  userId,
  onApply
}) => {
  const [sliderValue, setSliderValue] = useState(currentSunshines);
  const [isApplying, setIsApplying] = useState(false);
  const [originalSunshines] = useState(currentSunshines);
  useEffect(() => {
    setSliderValue(currentSunshines);
  }, [currentSunshines]);
  const handleSliderChange = (value) => {
    setSliderValue(value[0]);
  };
  const handleApply = () => {
    setIsApplying(true);
    onApply(sliderValue);
    setTimeout(() => {
      setIsApplying(false);
    }, 2e3);
  };
  const sunshinesToAdd = sliderValue - originalSunshines;
  let calculatedRemaining = availableSunshines - sunshinesToAdd;
  if (calculatedRemaining > availableSunshines) {
    calculatedRemaining = availableSunshines;
  }
  if (calculatedRemaining < 0) {
    calculatedRemaining = 0;
  }
  const hasChanged = sliderValue !== originalSunshines;
  const maxSunshines = currentSunshines + availableSunshines;
  const potentialStars = Math.floor(sliderValue / 360);
  const potentialStarsTooltip = Math.floor(currentSunshines / 360);
  const trigger = /* @__PURE__ */ jsx(
    Component,
    {
      content: /* @__PURE__ */ jsxs("div", { className: "text-sm space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-semibold", children: [
          "Total sunshines: ",
          currentSunshines
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-2 border-t border-gray-200 dark:border-gray-700", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl", children: getIcon({ iconType: "star", className: "w-10 h-10 text-yellow-400 dark:text-yellow-500", fill: "currentColor" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-600 dark:text-yellow-400", children: potentialStarsTooltip }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Potential Stars" }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-400 dark:text-gray-500 mt-1", children: [
              "(",
              currentSunshines,
              " ÷ 360)"
            ] })
          ] })
        ] })
      ] }),
      openDelay: 500,
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1 justify-center cursor-pointer hover:opacity-80 transition-opacity", children: [
        getIcon({ iconType: "sunshine", fill: "currentColor", className: "w-5 h-5 mt-0.5 mr-1" }),
        /* @__PURE__ */ jsx(
          NumberFlow,
          {
            value: currentSunshines,
            locales: "en-US",
            format: { useGrouping: true },
            className: "text-sm font-semibold"
          }
        )
      ] })
    }
  );
  return /* @__PURE__ */ jsxs(Popover.Root, { children: [
    /* @__PURE__ */ jsx(Popover.Trigger, { className: "hyperlink flex items-center justify-center shadow-none", children: trigger }),
    /* @__PURE__ */ jsx(Popover.Portal, { children: /* @__PURE__ */ jsx(Popover.Positioner, { sideOffset: 8, side: "bottom", className: "z-700!", children: /* @__PURE__ */ jsxs(Popover.Popup, { className: "w-96 origin-[var(--transform-origin)] rounded-xs bg-[canvas] px-6 py-4 text-gray-900 shadow-sm shadow-gray-900 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0", children: [
      /* @__PURE__ */ jsx(Popover.Arrow, { className: "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180", children: getIcon("arrow") }),
      /* @__PURE__ */ jsxs(Popover.Title, { className: "text-gray-500 font-medium text-md flex items-center flex-row p-1 mb-4 gap-1", children: [
        "Issue's Sunshines",
        /* @__PURE__ */ jsx(Badge, { variant: "success", static: true, children: /* @__PURE__ */ jsxs(NumberFlowGroup, { children: [
          /* @__PURE__ */ jsx(
            NumberFlow,
            {
              value: currentSunshines,
              locales: "en-US",
              format: { useGrouping: false },
              className: "font-semibold text-sky-500 dark:text-sky-200"
            }
          ),
          hasChanged && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs", children: "→" }),
            /* @__PURE__ */ jsx(
              NumberFlow,
              {
                value: sliderValue,
                locales: "en-US",
                format: { useGrouping: false },
                className: "text-xs text-slate-500 dark:text-slate-200"
              }
            )
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Popover.Description, { className: "text-gray-600", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-6 mt-4", children: [
          /* @__PURE__ */ jsx("div", { className: "text-6xl mb-2", children: getIcon({ iconType: "star", className: "w-16 h-16 text-yellow-400 dark:text-yellow-500", fill: "currentColor" }) }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1", children: /* @__PURE__ */ jsx(
              NumberFlow,
              {
                value: potentialStars,
                locales: "en-US",
                format: { useGrouping: false }
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Potential Stars" }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-400 dark:text-gray-500 mt-1", children: [
              "(",
              sliderValue,
              " sunshines ÷ 360)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs(
          RadixSlider.Root,
          {
            value: [sliderValue],
            onValueChange: handleSliderChange,
            max: maxSunshines,
            min: 0,
            step: 1,
            className: "relative flex h-5 w-full touch-none select-none items-center",
            children: [
              /* @__PURE__ */ jsxs(RadixSlider.Track, { className: "relative h-[3px] grow rounded-full bg-zinc-300 dark:bg-zinc-800", children: [
                /* @__PURE__ */ jsx(RadixSlider.Range, { className: "absolute h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" }),
                hasChanged && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute h-full border-l-2 border-dashed border-gray-400 opacity-50",
                    style: { left: `${originalSunshines / maxSunshines * 100}%` }
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(RadixSlider.Thumb, { className: "relative hyperlink block h-5 w-5 rounded-[1rem] bg-white dark:bg-slate-300 dark:hover:bg-slate-200 shadow-md ring ring-black/10", children: /* @__PURE__ */ jsx(
                NumberFlow,
                {
                  value: sliderValue,
                  locales: "en-US",
                  format: { useGrouping: false },
                  plugins: [continuous],
                  className: "absolute left-1/2 -translate-x-1/2 text-xs text-gray-500 font-semibold"
                }
              ) })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Your Sunshines: " }),
          /* @__PURE__ */ jsx(
            NumberFlow,
            {
              value: availableSunshines,
              locales: "en-US",
              format: { useGrouping: false },
              className: "font-semibold"
            }
          ),
          hasChanged && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs", children: "→" }),
            /* @__PURE__ */ jsx(
              NumberFlow,
              {
                value: calculatedRemaining,
                locales: "en-US",
                format: { useGrouping: false },
                className: "text-xs"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "primary",
            onClick: handleApply,
            disabled: isApplying || !hasChanged || sunshinesToAdd > availableSunshines,
            className: cn(
              "px-6",
              isApplying && "cursor-wait"
            ),
            children: isApplying ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                Spinner,
                {
                  className: "w-5 h-5",
                  variant: "ellipsis"
                },
                "ellipsis"
              ),
              " saving..."
            ] }) : "Save"
          }
        ) })
      ] })
    ] }) }) })
  ] });
};

const IssueLinkPanel4 = (issue) => {
  const [authorUser, setAuthorUser] = useState(null);
  const [isLoadingAuthor, setIsLoadingAuthor] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [availableSunshines, setAvailableSunshines] = useState(0);
  const [, setIsUpdating] = useState(false);
  const isShining = issue.sunshines > 0;
  const isPatchable = Boolean(issue.patchable) && !issue.versionTag;
  const hasVersionInfo = Boolean(issue.versionTag);
  const primaryTag = issue.tags && issue.tags.length > 0 ? issue.tags[0] : void 0;
  useEffect(() => {
    if (issue.author && typeof issue.author === "string") {
      setIsLoadingAuthor(true);
      getUserById(issue.author).then((userData) => {
        if (userData) {
          setAuthorUser(userData);
        }
      }).catch((error) => {
        console.error("Error fetching author:", error);
      }).finally(() => {
        setIsLoadingAuthor(false);
      });
    }
  }, [issue.author]);
  useEffect(() => {
    if (!issue.draggable) {
      const demo = getDemo();
      if (demo.email && demo.users && demo.role) {
        const user = demo.users.find((u) => u.role === demo.role) || demo.users[0];
        if (user && user._id) {
          getUserById(user._id.toString()).then((userData) => {
            if (userData) {
              setCurrentUser(userData);
              setAvailableSunshines(userData.sunshines || 0);
            }
          }).catch((error) => {
            console.error("Error fetching current user:", error);
          });
        }
      }
    }
  }, [issue.draggable]);
  const handleSunshinesUpdate = async (newSunshines) => {
    if (!currentUser || !issue._id || !issue.galaxy) return;
    const sunshinesToAdd = newSunshines - issue.sunshines;
    if (sunshinesToAdd <= 0) return;
    setIsUpdating(true);
    try {
      const demo = getDemo();
      if (!demo.email) {
        alert("Please log in to add sunshines");
        return;
      }
      const success = await updateIssueSunshines({
        issueId: issue._id,
        userId: currentUser._id.toString(),
        email: demo.email,
        sunshinesToAdd
      });
      if (success) {
        if (currentUser._id) {
          const updatedUser = await getUserById(currentUser._id.toString());
          if (updatedUser) {
            setAvailableSunshines(updatedUser.sunshines || 0);
          }
        }
      } else {
        alert("Failed to update sunshines");
      }
    } catch (error) {
      console.error("Error updating sunshines:", error);
      alert("An error occurred while updating sunshines");
    } finally {
      setIsUpdating(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-1 items-start w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-3 mt-0.5", children: /* @__PURE__ */ jsx(
      Component,
      {
        content: /* @__PURE__ */ jsxs("div", { className: "text-sm flex gap-1", children: [
          "Got to see the  ",
          getIcon({ iconType: "arrow-right", className: "w-4 h-4 mt-0.5" }),
          /* @__PURE__ */ jsx("p", { className: "flex-1 bg-slate-100/20 rounded-sm", children: issue.title }),
          getIcon({ iconType: "arrow-left", className: "w-4 h-4 mt-0.5" }),
          "issue page"
        ] }),
        children: /* @__PURE__ */ jsx(Component$1, { uri: `/issue?id=${issue._id}&galaxy=${issue.galaxy}`, asNewTab: false, children: /* @__PURE__ */ jsx(Badge, { variant: "info", static: true, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          getIcon("ara"),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium underline", children: "..." })
        ] }) }) })
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1 ml-0.5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-slate-700 dark:text-slate-300/80", children: issue.title }),
          issue.solarForgeTxid && /* @__PURE__ */ jsx(
            Component,
            {
              content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: "View the Solar Forge by this issue on the blockchain explorer" }),
              children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://sepolia.basescan.org/tx/${issue.solarForgeTxid}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors",
                  children: /* @__PURE__ */ jsx(TheaterIcon, { className: "w-4 h-4" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(Badge, { variant: isShining ? "success" : "gray", static: true, children: isShining ? "Shining" : "Public Backlog" }),
          hasVersionInfo ? /* @__PURE__ */ jsx(
            Component,
            {
              content: /* @__PURE__ */ jsx("div", { className: "text-sm flex flex-col gap-2 p-2 max-w-xs", children: /* @__PURE__ */ jsxs("div", { children: [
                "Issue is patched. Patch completed ",
                String(issue.patchCompleted),
                ", patch reviewed: '",
                issue.patchTested ? "tested" : "not tested",
                "'. Its on the roadmap. In the ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: issue.versionTag }),
                " version. Version next status: ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: issue.versionStatus })
              ] }) }),
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Badge, { variant: "info", static: true, children: issue.versionTag }),
                /* @__PURE__ */ jsx(
                  Badge,
                  {
                    variant: issue.versionStatus === "complete" ? "blue" : issue.versionStatus === "testing" ? "warning" : issue.versionStatus === "release" ? "teal" : issue.versionStatus === "archived" ? "green" : "gray",
                    static: true,
                    children: issue.versionStatus
                  }
                )
              ] })
            }
          ) : isPatchable && /* @__PURE__ */ jsx(
            Component,
            {
              content: /* @__PURE__ */ jsx("div", { className: "text-sm max-w-xs leading-snug", children: "This issue is patchable. Drag and drop into Patching hole." }),
              children: /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "orange",
                  static: true,
                  className: "cursor-pointer select-none shadow-sm",
                  children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                    "Patchable ",
                    getIcon("info")
                  ] })
                }
              )
            }
          )
        ] }),
        primaryTag && /* @__PURE__ */ jsx(Badge, { variant: primaryTag === "bug" ? "danger" : primaryTag === "feature" ? "blue" : primaryTag === "improvement" ? "success" : primaryTag === "enhancement" ? "warning" : "info", static: true, children: primaryTag })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-base text-slate-600 dark:text-slate-400", children: issue.description }),
      (issue.author || issue.createdTime) && /* @__PURE__ */ jsxs("div", { className: "flex justify-end items-center space-x-1 text-slate-600 dark:text-slate-400 gap-1 text-xs", children: [
        issue.author && /* @__PURE__ */ jsxs(Fragment, { children: [
          "By ",
          isLoadingAuthor ? /* @__PURE__ */ jsx("div", { className: "w-7 h-7 flex items-center justify-center", children: /* @__PURE__ */ jsx(Spinner, { className: "w-7 h-7", variant: "ellipsis" }) }) : authorUser ? /* @__PURE__ */ jsx(MenuAvatar, { user: authorUser, className: "w-7! h-7!" }) : null
        ] }),
        issue.createdTime && /* @__PURE__ */ jsx(TimeAgo, { datetime: issue.createdTime * 1e3 })
      ] }),
      (issue.stats || issue.actions || issue.sunshines >= 0) && /* @__PURE__ */ jsxs(PanelFooter, { className: "flex flex-row justify-between items-center mt-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          issue.actions && /* @__PURE__ */ jsx(PanelAction, { className: "", actions: issue.actions }),
          issue.solarForgeTxid ? /* @__PURE__ */ jsx(
            Component,
            {
              content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: "View solar forge transaction on blockchain explorer" }),
              children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `https://sepolia.basescan.org/tx/${issue.solarForgeTxid}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(TheaterIcon, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsx("span", { children: "Solar Forge" })
                  ]
                }
              )
            }
          ) : isShining && issue.sunshines > 0 ? /* @__PURE__ */ jsx(
            Component,
            {
              content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Solar forge this issue to convert sunshines to stars" }),
              children: /* @__PURE__ */ jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: [
                /* @__PURE__ */ jsx(TheaterIcon, { className: "w-4 h-4 inline mr-1" }),
                "Solar Forge"
              ] })
            }
          ) : null
        ] }),
        issue.sunshines >= 0 && (!issue.draggable && currentUser ? /* @__PURE__ */ jsx(
          SunshinesPopover,
          {
            availableSunshines,
            currentSunshines: issue.sunshines,
            issueId: issue._id || "",
            galaxyId: issue.galaxy,
            userId: currentUser._id.toString(),
            onApply: handleSunshinesUpdate
          }
        ) : /* @__PURE__ */ jsx(
          Followings,
          {
            triggerClassName: "text-sm cursor-pointer hover:opacity-80 transition-opacity",
            iconType: "sunshine",
            hint: /* @__PURE__ */ jsxs("div", { className: "text-sm space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "font-semibold", children: [
                "Total sunshines: ",
                issue.sunshines
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-2 border-t border-gray-200 dark:border-gray-700", children: [
                /* @__PURE__ */ jsx("div", { className: "text-4xl", children: getIcon({ iconType: "star", className: "w-10 h-10 text-yellow-400 dark:text-yellow-500", fill: "currentColor" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-600 dark:text-yellow-400", children: Math.floor(issue.sunshines / 360) }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Potential Stars" }),
                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-400 dark:text-gray-500 mt-1", children: [
                    "(",
                    issue.sunshines,
                    " ÷ 360)"
                  ] })
                ] })
              ] })
            ] }),
            fill: true,
            children: issue.sunshines
          }
        )),
        issue.users && issue.users.length > 0 && /* @__PURE__ */ jsx(
          Followings,
          {
            triggerClassName: "text-sm",
            iconType: "user",
            hint: "Contributors",
            fill: true,
            children: issue.users.length
          }
        ),
        issue.stats && Object.values(issue.stats).map((stat) => /* @__PURE__ */ jsx(
          Followings,
          {
            triggerClassName: "text-sm",
            iconType: getIssueStatIcon(stat.type),
            hint: stat.hint,
            fill: stat.filled,
            children: stat.children
          },
          stat.type
        ))
      ] })
    ] })
  ] });
};

const ForkLinkingPanel = ({ className, onActionClick, onSelectedIssuesChange, project, fork, ...props }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { selectedItem, setSelectedItem } = useSelectableList({ allowMany: true });
  useEffect(() => {
    onSelectedIssuesChange?.(selectedItem.asArray);
  }, [selectedItem, onSelectedIssuesChange]);
  const issues = [
    {
      uri: "https://github.com/example/repo/issues/142",
      number: "#142",
      title: "Improve blockchain verification performance",
      description: "Transaction verification takes too long on large repositories",
      type: "improvement",
      storage: "github",
      author: {
        uri: "",
        children: "alice-blockchain",
        icon: "https://avatars.githubusercontent.com/u/1234567?v=4"
      },
      projectId: ""
    },
    {
      uri: "https://github.com/example/repo/issues/156",
      number: "#156",
      title: "Add support for Solana blockchain",
      description: "Currently only supports Ethereum and Polygon networks",
      type: "feature",
      storage: "github",
      author: {
        uri: "",
        children: "bob-blockchain",
        icon: "https://avatars.githubusercontent.com/u/1234567?v=4"
      },
      projectId: ""
    },
    {
      uri: "https://github.com/example/repo/issues/189",
      number: "#189",
      title: "Fix dependency vulnerability in crypto module",
      description: "Security issue identified in v2.3.1 of the crypto verification module",
      type: "bug",
      storage: "github",
      author: {
        uri: "",
        children: "charlie-blockchain",
        icon: "https://avatars.githubusercontent.com/u/1234567?v=4"
      },
      projectId: ""
    },
    {
      uri: "https://github.com/example/repo/issues/201",
      number: "#201",
      title: "Implement batch processing for large SBOMs",
      description: "Current implementation fails with memory errors on repositories with 1000+ dependencies",
      type: "enhancement",
      storage: "github",
      author: {
        uri: "",
        children: "david-blockchain",
        icon: "https://avatars.githubusercontent.com/u/1234567?v=4"
      },
      projectId: ""
    },
    {
      uri: "https://app.ara.foundation/issues/custom",
      number: "Other",
      title: "Custom issue or enhancement",
      description: "Describe your own contribution",
      type: "custom",
      storage: "arada-",
      author: {
        uri: "",
        children: "eve-blockchain",
        icon: "https://avatars.githubusercontent.com/u/1234567?v=4"
      },
      projectId: ""
    }
  ];
  const filteredIssues = issues.filter(
    (issue) => issue.title.toLowerCase().includes(searchQuery.toLowerCase()) || issue.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const action = /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsx("p", { className: `text-center text-sm mt-2 mb-1 border-t-1 border-gray-300 ${selectedItem.amount === 0 ? "text-rose-500" : "text-sky-600"}`, children: selectedItem.amount === 0 ? /* @__PURE__ */ jsxs("span", { children: [
      "Select the issue. Didn't find the issue you want? ",
      /* @__PURE__ */ jsx(Component$1, { uri: `/data/issue/post?project=${githubUrlToGit(fork.repository)}&notYetCreated=true&fork=${githubUrlToGit(project.repository)}`, children: "Create a new issue" })
    ] }) : /* @__PURE__ */ jsxs("span", { children: [
      "Fork is related to ",
      selectedItem.amount,
      " issues"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "primary",
        disabled: selectedItem.amount === 0,
        onClick: () => {
          onActionClick && onActionClick({});
        },
        children: "Next"
      }
    ) })
  ] });
  return /* @__PURE__ */ jsxs(
    PageLikePanel,
    {
      ...props,
      interactive: false,
      className,
      title: "Reason of the forking",
      rightHeader: /* @__PURE__ */ jsx(
        Component$1,
        {
          uri: `/data/issue/post?project=${githubUrlToGit(fork.repository)}&notYetCreated=true&fork=${githubUrlToGit(project.repository)}`,
          children: "Create New Issue"
        }
      ),
      actions: action,
      children: [
        /* @__PURE__ */ jsxs("strong", { className: "inline-flex items-center gap-1 h-2 ", children: [
          "Your project has been forked from",
          /* @__PURE__ */ jsx(Component$1, { className: "ml-1", uri: fork.repository, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1", children: [
            getIcon("github"),
            " ",
            fork.name
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-500 mb-4", children: /* @__PURE__ */ jsxs("span", { children: [
          "Choose one or many issues that explains why you forked.",
          /* @__PURE__ */ jsx("br", {}),
          "The issues will be attached to the original project to make your fork ",
          /* @__PURE__ */ jsx("b", { children: "discoverable" }),
          "."
        ] }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-md font-medium mb-2", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1", children: [
          getIcon("github"),
          " ",
          fork.name,
          " Issues ",
          /* @__PURE__ */ jsx(Badge, { variant: "info", children: /* @__PURE__ */ jsx(
            NumberFlow,
            {
              value: filteredIssues.length,
              locales: "en-US",
              format: { useGrouping: false }
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx(
          SearchBar,
          {
            value: searchQuery,
            onChange: setSearchQuery,
            placeholder: "Search for issues in the original repository..."
          }
        ),
        /* @__PURE__ */ jsx(List, { className: "mb-6", contentHeight: "min-h-48 max-h-96", children: filteredIssues.map((issue) => /* @__PURE__ */ jsx(
          SelectableItem,
          {
            iconClassName: issue.type === "bug" ? "border-red-300 dark:border-red-700" : issue.type === "feature" ? "border-blue-300 dark:border-blue-700" : issue.type === "improvement" ? "border-green-300 dark:border-green-700" : issue.type === "enhancement" ? "border-purple-300 dark:border-purple-700" : "border-gray-300 dark:border-gray-700",
            id: issue.uri,
            onClick: setSelectedItem,
            selectedId: selectedItem.has(issue.uri) ? issue.uri : void 0,
            children: /* @__PURE__ */ jsx(IssueLinkPanel4, { ...issue })
          },
          issue.uri
        )) })
      ]
    }
  );
};

const TextArea = ({
  label,
  value,
  placeholder,
  rows = 4,
  className = "",
  onChange
}) => {
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: label }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        value,
        placeholder,
        rows,
        onChange: (e) => onChange?.(e.target.value),
        className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cascade-blue focus:border-cascade-blue bg-gray-100 resize-none"
      }
    )
  ] });
};

const ProjectForm = () => {
  return /* @__PURE__ */ jsxs(PageLikePanel, { title: "Update Project Information", children: [
    /* @__PURE__ */ jsx(
      FormField,
      {
        label: "Project Title",
        value: "blockchain-verification-tool",
        type: "text"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-200 px-3 py-2 rounded text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "License:" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "MIT" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-200 px-3 py-2 rounded text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Created At:" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "12/05/2023" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-200 px-3 py-2 rounded text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Primary Language:" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Javascript" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      TextArea,
      {
        label: "Repository Description",
        value: "An open-source tool for verifying software components on the blockchain, ensuring transparency and security in the software supply chain."
      }
    ),
    /* @__PURE__ */ jsx(
      TextArea,
      {
        label: "What are the advantages compared to other projects?",
        placeholder: "Describe what makes your app different."
      }
    )
  ] });
};

const ConnectionCard$1 = ({ onActionClick }) => {
  const steps = [
    {
      id: 1,
      title: "Preparing SBOM data for blockchain registration",
      description: "Successfully prepared the data to submit",
      status: "completed",
      progress: 100
    },
    {
      id: 2,
      title: "Submitting transaction to blockchain network",
      description: "Sending the data on your behalf to the network",
      status: "completed",
      progress: 85
    },
    {
      id: 3,
      title: "Waiting for blockchain confirmation",
      description: "Blockchain takes few seconds to complete. Tx to check: 0x01..231",
      status: "in-progress",
      progress: 60
    },
    {
      id: 4,
      title: "Preparing the project in the task system",
      description: "Identified and categorized all project dependencies",
      status: "in-progress",
      progress: 3
    },
    {
      id: 5,
      title: "Removing the session log",
      description: "Compilation of repository data complete and ready for review",
      status: "pending",
      progress: 0
    }
  ];
  return /* @__PURE__ */ jsxs(
    PageLikePanel,
    {
      title: /* @__PURE__ */ jsxs("div", { className: "flex justify-left", children: [
        /* @__PURE__ */ jsx("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", stroke: "#10B981", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }),
        "Registering the Blockchain Record"
      ] }),
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-md mx-auto", children: "Creating an immutable record of your SBOM data on the blockchain" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6 mb-8", children: steps.map((step) => /* @__PURE__ */ jsx(
          ProgressStep,
          {
            title: step.title,
            description: step.description,
            status: step.status,
            progress: step.progress
          },
          step.id
        )) })
      ]
    }
  );
};

const ConnectionCard = () => {
  const steps = [
    {
      id: 1,
      title: "Quest System Added",
      description: "We've added a new quest system to help you track your open source contributions. Your first task is ready to be completed.",
      status: "completed",
      progress: 100
    }
  ];
  return /* @__PURE__ */ jsx(
    PageLikePanel,
    {
      title: /* @__PURE__ */ jsxs("div", { className: "flex justify-center", children: [
        /* @__PURE__ */ jsx("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "m265.69 544.94c0.02 11.27 2.9 22.23 5.29 33.17 8.17 34.88 20.68 68.41 34.09 101.56 12.73 30.26 25.52 60.58 46.5 85.84 31.23-44.4-199.26 147.06-144.56 68.28 11.93-20.73 25.1-40.69 37.88-60.89 38.51-62.08 78.47-123.23 117.94-184.7 61.13-93.89 121.79-188.23 170.95-289.05 4.56-10.66 9.13-21.31 13.69-31.97l141.9-64.11c-6.82 11.82-13.64 23.65-20.46 35.48-57.62 97.4-117.91 193.2-174.39 291.28-31.32 56.62-62.01 113.61-90.06 171.94-9.87 19.45-20.6 38.36-31.07 57.47-27.23 62.99-141.39 169.08-179.22 97.63-10.72-32.02-21.55-64.09-36.06-94.65-14.74-32.38-30.38-64.33-45.42-96.57-5.01-10.73-8.52-21.88-11.98-33.19l164.98-87.52z",
            id: "layer1",
            transform: "translate(-100.71 -203.07)",
            stroke: "#10B981",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) }),
        "Project Added Successfully"
      ] }),
      children: steps.map((step) => /* @__PURE__ */ jsx(
        ProgressStep,
        {
          title: step.title,
          description: step.description,
          status: step.status,
          progress: step.progress
        },
        step.id
      ))
    }
  );
};

function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {
  },
  onFinalStepCompleted = () => {
  },
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = "Back",
  nextButtonText = "Continue",
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;
  const updateStep = (newStep) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };
  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };
  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };
  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex min-h-full flex-1 flex-col items-center justify-center p-4 sm:aspect-[4/3] md:aspect-[2/1]",
      ...rest,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `mx-auto w-full rounded-xs shadow-xl ${stepCircleContainerClassName}`,
          style: { border: "1px solid #222" },
          children: [
            /* @__PURE__ */ jsx("div", { className: `${stepContainerClassName} flex w-full items-center p-8`, children: stepsArray.map((_, index) => {
              const stepNumber = index + 1;
              const isNotLastStep = index < totalSteps - 1;
              return /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
                renderStepIndicator ? renderStepIndicator({
                  step: stepNumber,
                  currentStep,
                  onStepClick: (clicked) => {
                    setDirection(clicked > currentStep ? 1 : -1);
                    updateStep(clicked);
                  }
                }) : /* @__PURE__ */ jsx(
                  StepIndicator,
                  {
                    step: stepNumber,
                    disableStepIndicators,
                    currentStep,
                    onClickStep: (clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    }
                  }
                ),
                isNotLastStep && /* @__PURE__ */ jsx(StepConnector, { isComplete: currentStep > stepNumber })
              ] }, stepNumber);
            }) }),
            /* @__PURE__ */ jsx(
              StepContentWrapper,
              {
                isCompleted,
                currentStep,
                direction,
                className: `space-y-2 px-8 ${contentClassName}`,
                children: stepsArray[currentStep - 1]
              }
            ),
            !isCompleted && /* @__PURE__ */ jsx("div", { className: `px-8 pb-8 ${footerClassName}`, children: /* @__PURE__ */ jsxs("div", { className: `mt-10 flex ${currentStep !== 1 ? "justify-between" : "justify-end"}`, children: [
              currentStep !== 1 && /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleBack,
                  className: `duration-350 rounded px-2 py-1 transition ${currentStep === 1 ? "pointer-events-none opacity-50 text-neutral-400" : "text-neutral-400 hover:text-neutral-700"}`,
                  ...backButtonProps,
                  children: backButtonText
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: isLastStep ? handleComplete : handleNext,
                  className: "duration-350 flex items-center justify-center rounded-full bg-green-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-green-600 active:bg-green-700",
                  ...nextButtonProps,
                  children: isLastStep ? "Complete" : nextButtonText
                }
              )
            ] }) })
          ]
        }
      )
    }
  );
}
function StepContentWrapper({
  isCompleted,
  currentStep,
  direction,
  children,
  className = ""
}) {
  const [parentHeight, setParentHeight] = useState(0);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      style: { position: "relative", overflow: "hidden" },
      animate: { height: isCompleted ? 0 : parentHeight },
      transition: { type: "spring", duration: 0.4 },
      className,
      children: /* @__PURE__ */ jsx(AnimatePresence, { initial: false, mode: "sync", custom: direction, children: !isCompleted && /* @__PURE__ */ jsx(SlideTransition, { direction, onHeightReady: (h) => setParentHeight(h), children }, currentStep) })
    }
  );
}
function SlideTransition({ children, direction, onHeightReady }) {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    if (containerRef.current) {
      onHeightReady(containerRef.current.offsetHeight);
    }
  }, [children, onHeightReady]);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref: containerRef,
      custom: direction,
      variants: stepVariants,
      initial: "enter",
      animate: "center",
      exit: "exit",
      transition: { duration: 0.4 },
      style: { position: "absolute", left: 0, right: 0, top: 0 },
      children
    }
  );
}
const stepVariants = {
  enter: (dir) => ({
    x: dir >= 0 ? "-100%" : "100%",
    opacity: 0
  }),
  center: {
    x: "0%",
    opacity: 1
  },
  exit: (dir) => ({
    x: dir >= 0 ? "50%" : "-50%",
    opacity: 0
  })
};
function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators = false }) {
  const status = currentStep === step ? "active" : currentStep < step ? "inactive" : "complete";
  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) {
      onClickStep(step);
    }
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      onClick: handleClick,
      className: "relative cursor-pointer outline-none focus:outline-none",
      animate: status,
      initial: false,
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: {
            inactive: { scale: 1, backgroundColor: "#222", color: "#a3a3a3" },
            active: { scale: 1, backgroundColor: "#5227FF", color: "#5227FF" },
            complete: { scale: 1, backgroundColor: "#5227FF", color: "#3b82f6" }
          },
          transition: { duration: 0.3 },
          className: "flex h-8 w-8 items-center justify-center rounded-full font-semibold",
          children: status === "complete" ? /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4 text-black" }) : status === "active" ? /* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-[#060010]" }) : /* @__PURE__ */ jsx("span", { className: "text-sm", children: step })
        }
      )
    }
  );
}
function StepConnector({ isComplete }) {
  const lineVariants = {
    incomplete: { width: 0, backgroundColor: "transparent" },
    complete: { width: "100%", backgroundColor: "#5227FF" }
  };
  return /* @__PURE__ */ jsx("div", { className: "relative mx-2 h-0.5 flex-1 overflow-hidden rounded bg-neutral-600", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "absolute left-0 top-0 h-full",
      variants: lineVariants,
      initial: false,
      animate: isComplete ? "complete" : "incomplete",
      transition: { duration: 0.4 }
    }
  ) });
}
function CheckIcon(props) {
  return /* @__PURE__ */ jsx("svg", { ...props, fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
    motion.path,
    {
      initial: { pathLength: 0 },
      animate: { pathLength: 1 },
      transition: {
        delay: 0.1,
        type: "tween",
        ease: "easeOut",
        duration: 0.3
      },
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M5 13l4 4L19 7"
    }
  ) });
}

const isForkStep = (projectId, forkProjectId, createdIssueId) => {
  return projectId !== void 0 && forkProjectId !== void 0 && createdIssueId !== void 0;
};
const C = ({ projectId, forkProjectId, createdIssueId }) => {
  const [repositoryUrl, setRepositoryUrl] = useState();
  const [isFork, setIsFork] = useState(isForkStep(projectId, forkProjectId, createdIssueId));
  return /* @__PURE__ */ jsxs(
    Stepper,
    {
      initialStep: 1,
      onStepChange: () => {
      },
      onFinalStepCompleted: () => {
        window.location.href = "/maintainer/work";
      },
      backButtonText: "Previous",
      nextButtonText: "Next",
      stepCircleContainerClassName: "shadow-none! border-none",
      className: "justify-start w-full rounded-lg",
      stepContainerClassName: "px-0! pt-0!",
      contentClassName: "p-0! w-full",
      children: [
        /* @__PURE__ */ jsx(C$1, { setRepositoryUrl, repositoryUrl }),
        /* @__PURE__ */ jsx(ConnectionCard$2, {}),
        isFork && /* @__PURE__ */ jsx(
          ForkLinkingPanel,
          {
            className: `${GridStyle.panel.margin.top}`,
            project: { id: "project-1", name: "Example Project", repository: "https://github.com/example/project" },
            fork: { id: "fork-1", name: "Forked Project", repository: "https://github.com/example/fork" },
            onSelectedIssuesChange: (ids) => console.log("Selected issues:", ids),
            onActionClick: console.log
          }
        ),
        /* @__PURE__ */ jsx(ProjectForm, {}),
        /* @__PURE__ */ jsx(ConnectionCard$1, {}),
        /* @__PURE__ */ jsx(ConnectionCard, {})
      ]
    }
  );
};

const NotificationBanner = ({ className, icon, type, title, children, expandable }) => {
  const getStyles = () => {
    switch (type) {
      case "warning":
        return "bg-yellow-50/10 border-yellow-100/50 dark:border-yellow-700/50 border-l-yellow-600 dark:border-l-yellow-300";
      case "info":
        return "bg-blue-50/10 border-slate-300 dark:border-slate-600/50 border-l-blue-600 dark:border-l-blue-300";
      case "success":
        return "bg-green-50/10 border-green-100 dark:border-green-600/50 border-l-green-600 dark:border-l-green-300";
      case "error":
        return "bg-red-50/10 border-rose-100 dark:border-rose-400/40 border-l-red-600 dark:border-l-rose-500";
      default:
        return "bg-gray-50/10 border-gray-50 border-l-gray-600 dark:border-l-gray-300";
    }
  };
  const getDefaultIcon = () => {
    switch (type) {
      case "warning":
        return "warning";
      case "info":
        return "info";
      case "success":
        return "success";
      case "error":
        return "warning";
      default:
        return "info";
    }
  };
  const fullClassName = `p-4 
    border-2
    border-dashed 
    flex 
    items-start 
    rounded-xs 
    shadow-md
    ${getStyles()} 
    ${className}
  `;
  return /* @__PURE__ */ jsx(
    InfoPanel,
    {
      title,
      icon: icon || getDefaultIcon(),
      expandable,
      className: `dark:text-slate-200 text-slate-800 ${fullClassName} ${className}`,
      children
    }
  );
};

const $$Astro = createAstro();
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const projectId = Astro2.url.searchParams.get("projectId") || void 0;
  const forkProjectId = Astro2.url.searchParams.get("forkProjectId") || void 0;
  const createdIssueId = Astro2.url.searchParams.get("createdIssueId") || void 0;
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "hideLinks": [MenuName.ProjectName] }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "slot": "center", "icon": "project", "type": "info", "title": "Your first project" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-gray-600">
You just signed up, and choose to be a maintainer.
                        Adding the project is the first step in the Ara.
</p> ` })}${renderComponent($$result2, "ProjectPostFlow", C, { "projectId": projectId, "forkProjectId": forkProjectId, "createdIssueId": createdIssueId, "slot": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/project/ProjectPostingStepper", "client:component-export": "default" })}`, "default": ($$result2) => renderTemplate`  ${forkProjectId && renderTemplate`${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "type": "warning", "title": "Issue why you fork", "icon": "warning" }, { "default": ($$result3) => renderTemplate`
Select or create a new issue. In Ara, we
                                link the projects between each other via issues
                                in order to make them discoverable and self
                                structurized.
` })}`}   `, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "InfoPanel", InfoPanel, { "slot": "right", "title": "Different Git Hosting Server?", "icon": "info", "actions": [
    {
      children: '"Ara" Influencer',
      uri: "/inlfuencer/project"
    }
  ] }, { "default": ($$result3) => renderTemplate` <p>Other git hosting servers are on the roadmap.</p> <p>
Obtain Voting Power, upvote the
${renderComponent($$result3, "Link", Component$1, { "href": "/data/issue", "className": "text-blue-600 hover:text-blue-800 underline" }, { "default": ($$result4) => renderTemplate`"Multiple Git Hostings" issue` })} and get rating.
</p> ` })}${renderComponent($$result2, "InfoPanel", InfoPanel, { "slot": "right", "title": "Uses blockchain", "icon": "question" }, { "default": ($$result3) => renderTemplate` <p>
The 20% of all donations to your project will be
                        distributed to the Libraries, packages in your projects
                        via ${renderComponent($$result3, "Link", Component$1, { "asNewTab": true, "href": "https://www.hyperpayment.org/specification/opensource-hyperpayment-specification", "className": "text-blue-600 hover:text-blue-800 underline" }, { "default": ($$result4) => renderTemplate`"Opensource Hyperpayment"` })}technology. Hyperpayment implemented on the blockchain,
                        which ensures ripple effect of the money.
</p> ` })}` })}`;
}, "/home/medet/ara-app/src/pages/project/post.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/project/post.astro";
const $$url = "/project/post";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Post,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
