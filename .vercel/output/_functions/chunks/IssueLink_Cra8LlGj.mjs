import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { g as getIcon, C as Component$1 } from './eventTypes_PbqAZmEg.mjs';
import { g as getIssueStatIcon } from './utils_gmanUkFe.mjs';
import { B as Badge } from './Badge_B8Esv6UX.mjs';
import { M as MenuAvatar, T as TimeAgo, P as PanelFooter, F as Followings } from './timeago-react_DjRt9YuX.mjs';
import { B as Button, P as PanelAction } from './PanelAction_DPZy3U8T.mjs';
import { S as Spinner } from './index_1nmfEu_R.mjs';
import { Popover } from '@base-ui-components/react/popover';
import * as RadixSlider from '@radix-ui/react-slider';
import NumberFlow, { NumberFlowGroup, continuous } from '@number-flow/react';
import { c as cn } from './utils_CRaJ9uIg.mjs';
import { C as Component } from './Tooltip_w0cA3QON.mjs';
import { a as getUserById, g as getDemo } from './user_DywsuUsD.mjs';
import { u as updateIssueSunshines } from './issue_Clh8NcXi.mjs';
import { TheaterIcon } from 'lucide-react';

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

export { IssueLinkPanel4 as I };
