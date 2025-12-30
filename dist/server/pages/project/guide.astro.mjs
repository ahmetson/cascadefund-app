import { j as createComponent, k as createAstro, x as renderComponent, r as renderTemplate } from '../../chunks/astro/server_BV1oLWnF.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_B3DF1IZV.mjs';
import { c as cn, R as RoundedSize, S as ShadowSize, g as getIcon, b as bgClassNames, B as Badge, G as GridStyle, M as MenuName } from '../../chunks/Analytics_DTGhDLP0.mjs';
import { ObjectId } from 'mongodb';
import { g as getGalaxyById } from '../../chunks/galaxy_CZ-N3p2Y.mjs';
import { g as getProjectById } from '../../chunks/project_CAKChrPf.mjs';
import { P as Panel } from '../../chunks/MenuPanel_ZPd_pAk2.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { P as PageLikePanel } from '../../chunks/PageLikePanel_tQY1YL9T.mjs';
import { motion } from 'motion/react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { C as Component } from '../../chunks/Tooltip_1k3VND9a.mjs';
import { B as Button } from '../../chunks/Button_DKAQNAd0.mjs';
import { useHotkeys } from 'react-hotkeys-hook';
import { K as Kbd } from '../../chunks/Kbd_mjnn5XvJ.mjs';
import { L as List } from '../../chunks/List_CCh0czBI.mjs';
import { H as Hyperspeed } from '../../chunks/Hyperspeed_DO-OOdAF.mjs';
export { renderers } from '../../renderers.mjs';

function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

const getPathAnimate = (isChecked) => ({
  pathLength: isChecked ? 1 : 0,
  opacity: isChecked ? 1 : 0
});
const getPathTransition = (isChecked) => ({
  pathLength: { duration: 1, ease: "easeInOut" },
  opacity: {
    duration: 0.01,
    delay: isChecked ? 0 : 1
  }
});
function C({ id, children, checked }) {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxs("div", { className: "relative inline-block w-full", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: `checkbox-${id}`, className: "w-full", children }),
    /* @__PURE__ */ jsx(
      motion.svg,
      {
        width: "340",
        height: "32",
        viewBox: "0 0 340 32",
        className: "absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-20 w-full h-10",
        children: /* @__PURE__ */ jsx(
          motion.path,
          {
            d: "M 10 16.91 s 79.8 -11.36 98.1 -11.34 c 22.2 0.02 -47.82 14.25 -33.39 22.02 c 12.61 6.77 124.18 -27.98 133.31 -17.28 c 7.52 8.38 -26.8 20.02 4.61 22.05 c 24.55 1.93 113.37 -20.36 113.37 -20.36",
            vectorEffect: "non-scaling-stroke",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeMiterlimit: 10,
            fill: "none",
            initial: false,
            animate: getPathAnimate(checked),
            transition: getPathTransition(checked),
            className: "stroke-neutral-900 dark:stroke-neutral-100"
          }
        )
      }
    )
  ] }) }, id);
}

const SelectableItem = ({ ref, onClick, iconClassName, id, children, selectedId }) => {
  const className = `flex items-center p-3 w-full ${RoundedSize.roundedXs} border hover:cursor-pointer ${ShadowSize.shadowLg} `;
  const selected = "bg-green-100 border-green-600 hover:bg-green-200 dark:bg-green-500/10 dark:border-green-600/10 dark:hover:bg-green-800";
  const unselected = "bg-white hover:bg-gray-200 border-gray-300 hover:border-green-400 dark:bg-slate-900 dark:hover:bg-gray-800 dark:border-slate-700 dark:hover:border-green-400";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      onClick: () => {
        onClick(id);
      },
      className: `${className} ${selectedId === id ? selected : unselected}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-3 mt-0.5", children: /* @__PURE__ */ jsx("div", { className: `w-4 h-4 rounded-full border-2 ${iconClassName}`, children: selectedId === id && getIcon("check") }) }),
        /* @__PURE__ */ jsx("div", { className: "ml-1 flex justify-between w-full items-center", children })
      ]
    }
  );
};

const TaskItem = ({ ref, onClick: onTaskClick, selectedId: selectedTaskId, completedId: completedTaskId, id, title, points, time, isHighlighted = false }) => {
  isHighlighted = isHighlighted || selectedTaskId === id;
  const isCompleted = completedTaskId === id;
  return /* @__PURE__ */ jsx("div", { ref, children: /* @__PURE__ */ jsx(C, { id, checked: isCompleted, children: /* @__PURE__ */ jsxs(SelectableItem, { selectedId: selectedTaskId, id, onClick: onTaskClick, iconClassName: isCompleted ? "bg-green-700 border-green-700" : "border-green-300 dark:border-green-700", children: [
    /* @__PURE__ */ jsx("div", { className: `text-sm ${isCompleted ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-gray-300"}`, children: title }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-green-600 dark:text-green-500", children: [
        "+",
        points,
        " pts"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: time })
    ] })
  ] }) }) });
};

class SelectedItem {
  _ids = [];
  allowMany;
  constructor({ allowMany }) {
    this.allowMany = allowMany;
  }
  get amount() {
    return this._ids.length;
  }
  get asArray() {
    return [...this._ids];
  }
  has(id) {
    return this._ids.includes(id);
  }
  toggle(id) {
    const newSelectedItem = new SelectedItem({ allowMany: this.allowMany });
    if (this.has(id)) {
      newSelectedItem._ids = this._ids.filter((existingId) => existingId !== id);
    } else {
      if (this.allowMany) {
        newSelectedItem._ids = [...this._ids, id];
      } else {
        newSelectedItem._ids = [id];
      }
    }
    return newSelectedItem;
  }
  // Custom comparison for === operator
  [Symbol.toPrimitive]() {
    return this._ids.length === 0 ? void 0 : this._ids.length === 1 ? this._ids[0] : this._ids;
  }
  // Override valueOf for comparison
  valueOf() {
    return this._ids.length === 0 ? void 0 : this._ids.length === 1 ? this._ids[0] : this._ids;
  }
  // Custom equals method for explicit comparison
  equals(other) {
    if (other === void 0) {
      return this._ids.length === 0;
    }
    return this._ids.includes(other);
  }
}
function useSelectableList({ allowMany = false } = {}) {
  const [selectedItem, setSelectedItemState] = useState(
    new SelectedItem({ allowMany })
  );
  const setSelectedItem = (id) => {
    setSelectedItemState((prev) => prev.toggle(id));
  };
  return { selectedItem, setSelectedItem };
}

const defaultLabel = "selects a task";
const TasksSection = ({ title = "My Tasks" }) => {
  const [tasks, setTasks] = useState(
    [
      { title: "Complete project proposal", points: 50, time: "10:00 AM" },
      { title: "Review client feedback", points: 50, time: "11:30 AM" },
      { title: "Team meeting", points: 50, time: "1:00 PM" },
      { title: "Update documentation", points: 50, time: "3:00 PM" },
      { title: "Send weekly report", points: 50, time: "5:00 PM" }
    ].map((task, i) => ({ ...task, id: `${i + 1}` }))
  );
  const { selectedItem: selectedTaskId, setSelectedItem: setSelectedTaskId } = useSelectableList();
  const [label, setLabel] = useState(defaultLabel);
  const [completedTaskId, setCompletedTaskId] = useState();
  const [hide, setHided] = useState(false);
  useEffect(() => {
    setLabel(selectedTaskId === void 0 ? defaultLabel : "Clear");
  }, [selectedTaskId]);
  useEffect(() => {
    if (tasks.length === 0) {
      setTimeout(() => {
        setHided(true);
      }, 3e3);
    }
  }, [tasks]);
  const selectFirstTask = () => {
    const firstTaskId = tasks[0].id;
    setSelectedTaskId(firstTaskId);
  };
  const deselectTask = (id = selectedTaskId.valueOf()) => {
    setSelectedTaskId(id);
  };
  const onTaskClick = (id) => {
    if (selectedTaskId.has(id)) {
      deselectTask(id);
    } else {
      setSelectedTaskId(id);
    }
  };
  const playTask = () => {
    setCompletedTaskId(selectedTaskId.valueOf());
    setTimeout(() => {
      const nextTaskId = getNextTaskId();
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === selectedTaskId.valueOf()) {
          delete itemRefs[tasks[i].id];
          delete tasks[i];
        }
      }
      setTasks(tasks.filter((task) => task !== void 0));
      setSelectedTaskId(nextTaskId);
    }, 1500);
  };
  const getNextTaskId = () => {
    if (selectedTaskId) {
      const currentIndex = tasks.findIndex((task) => task.id === selectedTaskId.valueOf());
      const nextIndex = (currentIndex + 1) % tasks.length;
      const nextTaskId = tasks[nextIndex].id;
      return nextTaskId;
    }
  };
  const selectNextTask = () => {
    if (selectedTaskId.valueOf()) {
      const currentIndex = tasks.findIndex((task) => task.id === selectedTaskId.valueOf());
      const nextIndex = (currentIndex + 1) % tasks.length;
      const nextTaskId = tasks[nextIndex].id;
      setSelectedTaskId(nextTaskId);
    }
  };
  const selectPreviousTask = () => {
    if (selectedTaskId) {
      const currentIndex = tasks.findIndex((task) => task.id === selectedTaskId.valueOf());
      const previousIndex = (currentIndex - 1 + tasks.length) % tasks.length;
      const previousTaskId = tasks[previousIndex].id;
      setSelectedTaskId(previousTaskId);
    }
  };
  useHotkeys("enter", () => {
    if (selectedTaskId) playTask();
    else selectFirstTask();
  });
  useHotkeys("left", selectPreviousTask);
  useHotkeys("esc", () => deselectTask(selectedTaskId.valueOf()));
  useHotkeys("right", selectNextTask);
  const itemRefs = {};
  const actions = /* @__PURE__ */ jsxs("div", { className: "mb-3 h-6 flex space-x-4 justify-between", children: [
    /* @__PURE__ */ jsx(
      Component,
      {
        content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: selectedTaskId ? "Press Esc to deselect the task." : "Press Enter to select the first task." }),
        children: /* @__PURE__ */ jsx(
          Button,
          {
            onClick: selectedTaskId ? () => deselectTask(selectedTaskId.valueOf()) : selectFirstTask,
            variant: selectedTaskId ? "default" : "secondary",
            outline: true,
            className: "flex justify-center items-center space-x-1 m-0 p-1!",
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1 px-2", children: [
              /* @__PURE__ */ jsx(Kbd, { className: "mt-0.5 ", children: selectedTaskId ? "Esc" : "Enter" }),
              /* @__PURE__ */ jsx("div", { className: "", children: label })
            ] })
          }
        )
      }
    ),
    selectedTaskId && /* @__PURE__ */ jsx(
      Component,
      {
        content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Press Enter to start the quest system. Guides and notifications, and Auto UI will guide you through the process. Minimum effort." }),
        children: /* @__PURE__ */ jsx(Button, { onClick: playTask, variant: "primary", className: "flex flex-center items-center space-x-1 m-0 p-1!", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1 px-2", children: [
          /* @__PURE__ */ jsx(Kbd, { className: "mt-0.5", children: "Enter" }),
          /* @__PURE__ */ jsx("div", { children: "Complete" })
        ] }) })
      }
    ),
    selectedTaskId && /* @__PURE__ */ jsx(
      Component,
      {
        content: /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          "Press on ◀︎   ▶︎ arrow buttons to select previous or next task.",
          /* @__PURE__ */ jsx("br", {}),
          "Pressing on the button will select the next task."
        ] }),
        children: /* @__PURE__ */ jsx(Button, { onClick: selectNextTask, outline: true, variant: "secondary", className: "flex flex-center items-center space-x-1 m-0 p-1!", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1 px-2", children: [
          /* @__PURE__ */ jsx(Kbd, { className: "mt-0.5", children: "◀︎    ▶︎" }),
          /* @__PURE__ */ jsx("div", { children: "Change Task" })
        ] }) })
      }
    )
  ] });
  return tasks.length > 0 ? /* @__PURE__ */ jsx(
    PageLikePanel,
    {
      actions,
      onHover: (hovered) => {
      },
      title: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 gap-1", children: [
        title,
        /* @__PURE__ */ jsx(Badge, { variant: "red", children: tasks.length }),
        /* @__PURE__ */ jsx(Badge, { variant: "info", children: "Server is not connected" }),
        /* @__PURE__ */ jsx(Badge, { variant: "danger", children: "Work in progress" })
      ] }),
      subtitle: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 font-normal text-left", children: "Instead of clicking across pages, why not to automate it? Ara turns the project management into a quest system." }),
      children: /* @__PURE__ */ jsx(List, { contentHeight: "h-48", className: `${bgClassNames.listContent}`, children: tasks.map(
        (task) => /* @__PURE__ */ jsx(TaskItem, { ...task, ref: (el) => itemRefs[task.id] = el, onClick: onTaskClick, completedId: completedTaskId, selectedId: selectedTaskId.valueOf() })
      ) })
    }
  ) : hide ? null : /* @__PURE__ */ jsx(
    PageLikePanel,
    {
      className: `${GridStyle.panel.margin.bottom}`,
      title: /* @__PURE__ */ jsxs("div", { children: [
        "Tasks are completed",
        /* @__PURE__ */ jsx(Badge, { variant: "info", children: tasks.length })
      ] }),
      children: /* @__PURE__ */ jsx("div", { className: `p-4 space-y-3 lg:max-h-[30vh] overflow-y-auto`, children: "Come back in a few days later. No tasks to do." })
    }
  );
};

const $$Astro = createAstro();
const $$Guide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Guide;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelViewLayout, { "hideLinks": Object.keys(MenuName) }, { "background": async ($$result2) => renderTemplate`${renderComponent($$result2, "Hyperspeed", Hyperspeed, { "effectOptions": {
    onSpeedUp: () => {
    },
    onSlowDown: () => {
    },
    distortion: "turbulentDistortion",
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 1.01,
    carLightsFade: 0.4,
    totalSideLightSticks: 12,
    lightPairsPerRoadWay: 20,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [0.5, 1],
    movingCloserSpeed: [-1, -2],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 1710638,
      islandColor: 1973822,
      background: 657946,
      shoulderLines: 16766696,
      brokenLines: 16770544,
      leftCars: [16757721, 16764134, 16767472],
      rightCars: [13939711, 15125759, 15784447],
      sticks: 16766696
    }
  }, "slot": "background", "className": "fixed h-screen w-screen z-2 pointer-events-none opacity-40", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Hyperspeed", "client:component-export": "default" })}`, "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "QuestPanel", TasksSection, { "slot": "center", "title": "Automatic Guide", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/quest/QuestPanel", "client:component-export": "default" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "MenuPanel", Panel, { "slot": "left", "activeMenuItem": "guide", "galaxy": galaxy, "projectIcon": project.socialLinks?.find((link) => link.type === "project")?.uri, "projectName": galaxy.name, "starCount": galaxy.stars })}` })}`;
}, "/home/medet/ara-app/src/pages/project/guide.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/project/guide.astro";
const $$url = "/project/guide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Guide,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
