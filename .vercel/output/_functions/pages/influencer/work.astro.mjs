import { i as createComponent, w as renderComponent, r as renderTemplate } from '../../chunks/astro/server_fdX1SiYK.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_Bt8c-AIX.mjs';
import { P as Panel } from '../../chunks/MenuPanel_Bwq8NR-S.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { P as PageLikePanel } from '../../chunks/PageLikePanel_CRfOVdJz.mjs';
import { B as Badge } from '../../chunks/Badge_B8Esv6UX.mjs';
import { memo, useState, useRef, useCallback, useLayoutEffect, useEffect, useMemo } from 'react';
import { F as FilterableList } from '../../chunks/FilterableList_O8XGFnGt.mjs';
import { I as IssueLinkPanel4 } from '../../chunks/IssueLink_Cra8LlGj.mjs';
import { B as BasePanel } from '../../chunks/Panel_CqTuM3BW.mjs';
import { a as ISSUE_EVENT_TYPES, b as IssueTabKey, I as IssueTag, i as isPatchable, c as ISSUE_TAB_TITLES } from '../../chunks/issue_CKSMgj7X.mjs';
import { useDrag } from 'react-dnd';
import { g as getIcon, C as Component } from '../../chunks/eventTypes_PbqAZmEg.mjs';
import { g as getIssues } from '../../chunks/issue_Clh8NcXi.mjs';
import { g as getVersionById } from '../../chunks/roadmap_B2ZXwx8w.mjs';
import { P as PATCH_KEYWORD } from '../../chunks/patch_Cnq5U_SF.mjs';
export { renderers } from '../../renderers.mjs';

const Sidebar = () => {
  return /* @__PURE__ */ jsx(PageLikePanel, { title: "How to work with the issues?", className: "space-y-8", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-600 space-y-2", children: [
    /* @__PURE__ */ jsx("li", { children: "• It's recommended first to look for the issue, and work on common idea" }),
    /* @__PURE__ */ jsx("li", { children: "• If there is nothing similar, then add a new issue" })
  ] }) });
};

const ProgressBar = ({ progress, total, label }) => {
  const percentage = progress / total * 100;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-gray-600 mb-2", children: [
      /* @__PURE__ */ jsx("span", { children: label }),
      /* @__PURE__ */ jsx("span", { children: total })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-blue-600 h-2 rounded-full transition-all duration-300",
        style: { width: `${percentage}%` }
      }
    ) })
  ] });
};

const TasksSection = () => {
  return /* @__PURE__ */ jsxs(
    PageLikePanel,
    {
      title: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "My Tasks" }),
        /* @__PURE__ */ jsx(Badge, { variant: "purple", children: "1" })
      ] }),
      rightHeader: /* @__PURE__ */ jsx(ProgressBar, { progress: 65, total: 650, label: "Points left to reach next star:" }),
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Complete the tasks below, to improve the rating, here are the quests for today:" }),
        /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: "Spend your voting powers for the issues" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "10:00 AM" })
        ] }) })
      ]
    }
  );
};

const IssueCard = memo((props) => {
  const dragType = props.patchable ? "patch" : "issue";
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: dragType,
      item: { id: props._id, title: props.title },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1
      })
    }),
    [props._id, props.title, dragType]
  );
  const borderClasses = props.patchable ? "border-amber-300/80 hover:border-amber-400 dark:border-amber-400/70 dark:hover:border-amber-300/90" : "border-blue-100/50 hover:border-blue-200 dark:border-blue-500/50 dark:hover:border-blue-500/90";
  const backgroundClasses = props.patchable ? "bg-amber-50/50 dark:bg-amber-900/20" : "bg-transparent";
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: drag,
      "data-testid": props._id,
      style: { opacity },
      className: `cursor-move! border-1 ${borderClasses} ${backgroundClasses} transition-colors p-2 border-dashed rounded-md`,
      children: /* @__PURE__ */ jsx(IssueLinkPanel4, { ...props, draggable: true })
    }
  );
});

const IssueListPanel = ({ tabType, draggable = false, filterable: filerable = false, description, galaxyId }) => {
  const [issues, setIssues] = useState([]);
  const [activeTab, setActiveTab] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const activeTabRef = useRef(false);
  const hasReceivedEventRef = useRef(false);
  const [versionDataCache, setVersionDataCache] = useState(/* @__PURE__ */ new Map());
  const fetchIssues = useCallback(async () => {
    if (!activeTabRef.current) {
      return;
    }
    try {
      setIsLoading(true);
      const fetchedIssues = await getIssues(galaxyId, tabType);
      const visibleIssues = fetchedIssues.filter(
        (issue) => !(issue.listHistory || []).includes(PATCH_KEYWORD)
      );
      setIssues(visibleIssues);
    } catch (error) {
      console.error("Error fetching issues:", error);
    } finally {
      setIsLoading(false);
    }
  }, [tabType, galaxyId]);
  useLayoutEffect(() => {
    hasReceivedEventRef.current = false;
    const handleTabChanged = (event) => {
      hasReceivedEventRef.current = true;
      const customEvent = event;
      const isThisTabActive = customEvent.detail.tabType === tabType && customEvent.detail.galaxyId === galaxyId;
      activeTabRef.current = isThisTabActive;
      setActiveTab(isThisTabActive);
    };
    const refetchIssues = () => {
      if (activeTabRef.current) {
        fetchIssues();
      }
    };
    const handleIssueUpdate = (event) => {
      const customEvent = event;
      const updatedIssue = customEvent.detail;
      if (!updatedIssue || !activeTabRef.current) {
        return;
      }
      const issueListHistory = updatedIssue.listHistory || [];
      const shouldBeInThisList = issueListHistory.includes(tabType);
      if (tabType === IssueTabKey.SHINING || tabType === IssueTabKey.PUBLIC) {
        refetchIssues();
        return;
      }
      if (!shouldBeInThisList) {
        setIssues((prevIssues) => prevIssues.filter((issue) => issue._id !== updatedIssue._id));
      } else {
        setIssues((prevIssues) => {
          const index = prevIssues.findIndex((issue) => issue._id === updatedIssue._id);
          if (index >= 0) {
            const newIssues = [...prevIssues];
            newIssues[index] = updatedIssue;
            return newIssues;
          } else {
            refetchIssues();
            return prevIssues;
          }
        });
      }
    };
    window.addEventListener(ISSUE_EVENT_TYPES.ISSUES_TAB_CHANGED, handleTabChanged);
    window.addEventListener(ISSUE_EVENT_TYPES.ISSUE_CREATED, refetchIssues);
    window.addEventListener(ISSUE_EVENT_TYPES.ISSUE_UNPATCHED, refetchIssues);
    window.addEventListener(ISSUE_EVENT_TYPES.ISSUE_UPDATE, handleIssueUpdate);
    if (tabType === IssueTabKey.SHINING) {
      requestAnimationFrame(() => {
        if (!hasReceivedEventRef.current) {
          activeTabRef.current = true;
          setActiveTab(true);
        }
      });
    }
    const timeoutId = setTimeout(() => {
      if (!hasReceivedEventRef.current && tabType === IssueTabKey.SHINING) {
        activeTabRef.current = true;
        setActiveTab(true);
      }
    }, 100);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener(ISSUE_EVENT_TYPES.ISSUES_TAB_CHANGED, handleTabChanged);
      window.removeEventListener(ISSUE_EVENT_TYPES.ISSUE_CREATED, refetchIssues);
      window.removeEventListener(ISSUE_EVENT_TYPES.ISSUE_UNPATCHED, refetchIssues);
      window.removeEventListener(ISSUE_EVENT_TYPES.ISSUE_UPDATE, handleIssueUpdate);
    };
  }, [tabType, galaxyId, fetchIssues]);
  useEffect(() => {
    if (activeTab) {
      fetchIssues();
    } else {
      setIssues([]);
      setIsLoading(false);
    }
  }, [activeTab, fetchIssues]);
  const filters = [
    {
      id: "all",
      label: "All",
      sortIds: [
        { id: "priority", label: "Priority" },
        { id: "date", label: "Date" },
        { id: "title", label: "Title" }
      ]
    },
    {
      id: IssueTag.BUG,
      label: "Bug",
      sortIds: [
        { id: "priority", label: "Priority" },
        { id: "date", label: "Date" },
        { id: "title", label: "Title" }
      ]
    },
    {
      id: IssueTag.FEATURE,
      label: "Feature",
      sortIds: [
        { id: "priority", label: "Priority" },
        { id: "date", label: "Date" },
        { id: "title", label: "Title" }
      ]
    },
    {
      id: IssueTag.IMPROVEMENT,
      label: "Improvement",
      sortIds: [
        { id: "priority", label: "Priority" },
        { id: "date", label: "Date" },
        { id: "title", label: "Title" }
      ]
    },
    {
      id: IssueTag.ENHANCEMENT,
      label: "Enhancement",
      sortIds: [
        { id: "priority", label: "Priority" },
        { id: "date", label: "Date" },
        { id: "title", label: "Title" }
      ]
    },
    {
      id: IssueTag.WISH,
      label: "Wish",
      sortIds: [
        { id: "priority", label: "Priority" },
        { id: "date", label: "Date" },
        { id: "title", label: "Title" }
      ]
    },
    {
      id: IssueTag.CUSTOM,
      label: "Custom",
      sortIds: [
        { id: "priority", label: "Priority" },
        { id: "date", label: "Date" },
        { id: "title", label: "Title" }
      ]
    }
  ];
  const handleFilterChange = (filterId, sortId) => {
    console.log("Filter changed:", { filterId, sortId });
  };
  useEffect(() => {
    const fetchVersionData = async () => {
      const versionIds = /* @__PURE__ */ new Set();
      issues.forEach((issue) => {
        const listHistory = issue.listHistory || [];
        const versionPrefix = listHistory.find((key) => key.startsWith("version-"));
        if (versionPrefix) {
          const versionId = versionPrefix.replace("version-", "");
          if (versionId && !versionDataCache.has(versionId)) {
            versionIds.add(versionId);
          }
        }
      });
      if (versionIds.size > 0) {
        const fetchPromises = Array.from(versionIds).map(async (versionId) => {
          try {
            const version = await getVersionById(versionId);
            if (version) {
              return { versionId, version };
            }
          } catch (error) {
            console.error(`Error fetching version ${versionId}:`, error);
          }
          return null;
        });
        const results = await Promise.all(fetchPromises);
        setVersionDataCache((prevCache) => {
          const newCache = new Map(prevCache);
          results.forEach((result) => {
            if (result) {
              newCache.set(result.versionId, result.version);
            }
          });
          return newCache;
        });
      }
    };
    if (issues.length > 0) {
      fetchVersionData();
    }
  }, [issues]);
  const decoratedIssues = useMemo(() => {
    return issues.map((issue) => {
      const listHistory = issue.listHistory || [];
      const versionPrefix = listHistory.find((key) => key.startsWith("version-"));
      if (versionPrefix) {
        const versionId = versionPrefix.replace("version-", "");
        const version = versionDataCache.get(versionId);
        if (version) {
          const patch = version.patches.find((p) => p.id === issue._id);
          const patchCompleted = patch?.completed || false;
          const patchTested = patch?.tested || false;
          return {
            ...issue,
            draggable: false,
            // Version-prefixed issues are non-draggable
            patchable: false,
            // Hide patchable badge
            versionTag: version.tag,
            versionStatus: version.status,
            patchCompleted,
            patchTested
          };
        }
      }
      return {
        ...issue,
        draggable,
        patchable: isPatchable(issue)
      };
    });
  }, [draggable, issues, versionDataCache]);
  const ItemComponent = (itemProps) => {
    if (itemProps.versionTag) {
      return /* @__PURE__ */ jsx(IssueLinkPanel4, { ...itemProps });
    }
    if (tabType === IssueTabKey.CLOSED) {
      return /* @__PURE__ */ jsx(IssueLinkPanel4, { ...itemProps });
    }
    if (itemProps.patchable || draggable) {
      return /* @__PURE__ */ jsx(IssueCard, { ...itemProps, patchable: itemProps.patchable, draggable: true });
    }
    return /* @__PURE__ */ jsx(IssueLinkPanel4, { ...itemProps });
  };
  if (isLoading) {
    return /* @__PURE__ */ jsx(BasePanel, { className: "max-w-6xl mx-auto max-h-[150vh] overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: "Loading issues..." }) }) });
  }
  return /* @__PURE__ */ jsxs(BasePanel, { className: "max-w-6xl mx-auto max-h-[150vh] min-h-[50vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-800 dark:text-slate-200 text-center drop-shadow-lg", children: ISSUE_TAB_TITLES[tabType] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4 space-y-2", children: [
      draggable && /* @__PURE__ */ jsxs("p", { className: "text-md text-gray-600 dark:text-gray-500 flex items-center gap-2", children: [
        getIcon("info"),
        " Issues are draggable. Your dragging will highlight the drop targets."
      ] }),
      !draggable && tabType === IssueTabKey.CLOSED && /* @__PURE__ */ jsxs("p", { className: "text-md mb-2 text-gray-600 dark:text-gray-500 flex items-center gap-2", children: [
        getIcon("lock"),
        " Issues are closed and will never be back."
      ] }),
      !draggable && tabType !== IssueTabKey.CLOSED && /* @__PURE__ */ jsxs("p", { className: "text-md mb-2 text-gray-600 dark:text-gray-500 flex items-center gap-2", children: [
        getIcon("user"),
        " Maintainer can move them."
      ] }),
      description && /* @__PURE__ */ jsx("p", { className: "text-md text-gray-600 dark:text-gray-500", children: description })
    ] }),
    /* @__PURE__ */ jsx(
      FilterableList,
      {
        className: "mt-2",
        items: decoratedIssues,
        itemComponent: ItemComponent,
        title: void 0,
        titleCenter: false,
        searchPlaceholder: "Search issues...",
        searchableFields: ["title", "description"],
        filters: filerable ? filters : void 0,
        onFilterChange: handleFilterChange
      }
    )
  ] });
};

const VotingPowerSection$1 = () => {
  return /* @__PURE__ */ jsxs(PageLikePanel, { className: "space-y-6", title: "How to work with tasks?", children: [
    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-600 space-y-2", children: [
      /* @__PURE__ */ jsx("li", { children: "• A task describes the quest mission. Quest missions are intended to reduce overwhelming information, and do the work in the quickest feedback way, which reduces the burnout." }),
      /* @__PURE__ */ jsx("li", { children: "• Upon completing the task, you receive the rating points. The points increase the rating of the project. Rating is the measurement of the satisfaction and attraction you get from customers." })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Learn how Ara works:" }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "text-xs text-blue-600 hover:underline", children: "How does progress system work?" })
    ] })
  ] });
};

const VotingPowerSection = () => {
  const allocations = [
    { name: "NodeDB Toolkit", points: 25, color: "bg-blue-500" },
    { name: "React Component Library", points: 25, color: "bg-green-500" },
    { name: "SecureAuth Framework", points: 25, color: "bg-purple-500" },
    { name: "CloudScale API", points: 25, color: "bg-yellow-500" },
    { name: "MobileUI Framework", points: 25, color: "bg-red-500" }
  ];
  return /* @__PURE__ */ jsxs(PageLikePanel, { className: "space-y-6", title: "Your Voting Power", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-blue-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-blue-600", children: "100" }),
      /* @__PURE__ */ jsx(
        Component,
        {
          className: "w-sm h-sm inline-flex items-center bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors",
          href: "/influencer/project",
          children: "Add"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: "Total available" }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mb-6", children: "+50% bonus points by rating" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-3", children: "Current Allocation" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2 flex justify-center text-center", children: allocations.map((allocation, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("div", { className: `w-3 h-3 rounded-full ${allocation.color}` }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-blue-600 hover:underline", children: allocation.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "+ ",
            allocation.points,
            " VP"
          ] }),
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" }) })
        ] })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t pt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Remaining" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" }) }),
        /* @__PURE__ */ jsx("span", { className: "font-medium text-green-600", children: "10" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      Component,
      {
        className: "w-full mt-4 inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors",
        href: "/influencer/confirmed",
        children: "Confirm Votes"
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-2 text-center", children: "It will create tasks for maintainers to work on the issues. You will be notified on this page." })
  ] });
};

const $$Work = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, {}, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "QuestPanel", TasksSection, { "slot": "center" })}${renderComponent($$result2, "IssueBoard", IssueListPanel, { "slot": "center" })}`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "MainMenu", Panel, { "slot": "left", "activeMenuItem": "iwork", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/menu/MenuPanel", "client:component-export": "default" })}${renderComponent($$result2, "IssuesHowToInfo", Sidebar, { "slot": "left" })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "QuestHowToInfo", VotingPowerSection$1, { "slot": "right" })}${renderComponent($$result2, "VotingPower", VotingPowerSection, { "slot": "right" })}` })}`;
}, "/home/medet/ara-app/src/pages/influencer/work.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/influencer/work.astro";
const $$url = "/influencer/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
