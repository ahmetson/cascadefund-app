import { i as createComponent, j as createAstro, w as renderComponent, r as renderTemplate } from '../../chunks/astro/server_fdX1SiYK.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_Bt8c-AIX.mjs';
import { M as MenuName } from '../../chunks/gradient_BwWwSSvf.mjs';
import { ObjectId } from 'mongodb';
import { g as getGalaxyById } from '../../chunks/galaxy_BhIVnuLu.mjs';
import { a as getProjectById } from '../../chunks/project_BR7Mg4Nw.mjs';
import { P as Panel } from '../../chunks/MenuPanel_Bwq8NR-S.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { P as PageLikePanel } from '../../chunks/PageLikePanel_CRfOVdJz.mjs';
import { B as Badge } from '../../chunks/Badge_B8Esv6UX.mjs';
import { motion } from 'motion/react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { c as cn } from '../../chunks/utils_CRaJ9uIg.mjs';
import { S as SelectableItem, u as useSelectableList } from '../../chunks/useSelectableList_Dn0uHFjr.mjs';
import { c as bgClassNames, G as GridStyle } from '../../chunks/eventTypes_PbqAZmEg.mjs';
import { C as Component } from '../../chunks/Tooltip_w0cA3QON.mjs';
import { B as Button } from '../../chunks/PanelAction_DPZy3U8T.mjs';
import { useHotkeys } from 'react-hotkeys-hook';
import { K as Kbd } from '../../chunks/Kbd_BAMFwbIi.mjs';
import { L as List } from '../../chunks/List_B2fiJoaU.mjs';
import * as THREE from 'three';
import { EffectComposer, RenderPass, EffectPass, BloomEffect, SMAAEffect, SMAAPreset } from 'postprocessing';
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
        /* @__PURE__ */ jsx(Badge, { variant: "info", children: "Server is not connected" })
      ] }),
      subtitle: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 font-normal text-left", children: "The project management works are automatically converted into the tasks." }),
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

const defaultOptions = {
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
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 526344,
    islandColor: 657930,
    background: 0,
    shoulderLines: 16777215,
    brokenLines: 16777215,
    leftCars: [14177983, 6770850, 12732332],
    rightCars: [242627, 941733, 3294549],
    sticks: 242627
  }
};
function nsin(val) {
  return Math.sin(val) * 0.5 + 0.5;
}
const mountainUniforms = {
  uFreq: { value: new THREE.Vector3(3, 6, 10) },
  uAmp: { value: new THREE.Vector3(30, 30, 20) }
};
const xyUniforms = {
  uFreq: { value: new THREE.Vector2(5, 2) },
  uAmp: { value: new THREE.Vector2(25, 15) }
};
const LongRaceUniforms = {
  uFreq: { value: new THREE.Vector2(2, 3) },
  uAmp: { value: new THREE.Vector2(35, 10) }
};
const turbulentUniforms = {
  uFreq: { value: new THREE.Vector4(4, 8, 8, 1) },
  uAmp: { value: new THREE.Vector4(25, 5, 10, 10) }
};
const deepUniforms = {
  uFreq: { value: new THREE.Vector2(4, 8) },
  uAmp: { value: new THREE.Vector2(10, 20) },
  uPowY: { value: new THREE.Vector2(20, 2) }
};
const distortions = {
  mountainDistortion: {
    uniforms: mountainUniforms,
    getDistortion: `
      uniform vec3 uAmp;
      uniform vec3 uFreq;
      #define PI 3.14159265358979
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      vec3 getDistortion(float progress){
        float movementProgressFix = 0.02;
        return vec3( 
          cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
          nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
          nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
        );
      }
    `,
    getJS: (progress, time) => {
      const movementProgressFix = 0.02;
      const uFreq = mountainUniforms.uFreq.value;
      const uAmp = mountainUniforms.uAmp.value;
      const distortion = new THREE.Vector3(
        Math.cos(progress * Math.PI * uFreq.x + time) * uAmp.x - Math.cos(movementProgressFix * Math.PI * uFreq.x + time) * uAmp.x,
        nsin(progress * Math.PI * uFreq.y + time) * uAmp.y - nsin(movementProgressFix * Math.PI * uFreq.y + time) * uAmp.y,
        nsin(progress * Math.PI * uFreq.z + time) * uAmp.z - nsin(movementProgressFix * Math.PI * uFreq.z + time) * uAmp.z
      );
      const lookAtAmp = new THREE.Vector3(2, 2, 2);
      const lookAtOffset = new THREE.Vector3(0, 0, -5);
      return distortion.multiply(lookAtAmp).add(lookAtOffset);
    }
  },
  xyDistortion: {
    uniforms: xyUniforms,
    getDistortion: `
      uniform vec2 uFreq;
      uniform vec2 uAmp;
      #define PI 3.14159265358979
      vec3 getDistortion(float progress){
        float movementProgressFix = 0.02;
        return vec3( 
          cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
          sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
          0.
        );
      }
    `,
    getJS: (progress, time) => {
      const movementProgressFix = 0.02;
      const uFreq = xyUniforms.uFreq.value;
      const uAmp = xyUniforms.uAmp.value;
      const distortion = new THREE.Vector3(
        Math.cos(progress * Math.PI * uFreq.x + time) * uAmp.x - Math.cos(movementProgressFix * Math.PI * uFreq.x + time) * uAmp.x,
        Math.sin(progress * Math.PI * uFreq.y + time + Math.PI / 2) * uAmp.y - Math.sin(movementProgressFix * Math.PI * uFreq.y + time + Math.PI / 2) * uAmp.y,
        0
      );
      const lookAtAmp = new THREE.Vector3(2, 0.4, 1);
      const lookAtOffset = new THREE.Vector3(0, 0, -3);
      return distortion.multiply(lookAtAmp).add(lookAtOffset);
    }
  },
  LongRaceDistortion: {
    uniforms: LongRaceUniforms,
    getDistortion: `
      uniform vec2 uFreq;
      uniform vec2 uAmp;
      #define PI 3.14159265358979
      vec3 getDistortion(float progress){
        float camProgress = 0.0125;
        return vec3( 
          sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
          sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
          0.
        );
      }
    `,
    getJS: (progress, time) => {
      const camProgress = 0.0125;
      const uFreq = LongRaceUniforms.uFreq.value;
      const uAmp = LongRaceUniforms.uAmp.value;
      const distortion = new THREE.Vector3(
        Math.sin(progress * Math.PI * uFreq.x + time) * uAmp.x - Math.sin(camProgress * Math.PI * uFreq.x + time) * uAmp.x,
        Math.sin(progress * Math.PI * uFreq.y + time) * uAmp.y - Math.sin(camProgress * Math.PI * uFreq.y + time) * uAmp.y,
        0
      );
      const lookAtAmp = new THREE.Vector3(1, 1, 0);
      const lookAtOffset = new THREE.Vector3(0, 0, -5);
      return distortion.multiply(lookAtAmp).add(lookAtOffset);
    }
  },
  turbulentDistortion: {
    uniforms: turbulentUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          cos(PI * progress * uFreq.r + uTime) * uAmp.r +
          pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
        );
      }
      float getDistortionY(float progress){
        return (
          -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
          -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.0125),
          getDistortionY(progress) - getDistortionY(0.0125),
          0.
        );
      }
    `,
    getJS: (progress, time) => {
      const uFreq = turbulentUniforms.uFreq.value;
      const uAmp = turbulentUniforms.uAmp.value;
      const getX = (p) => Math.cos(Math.PI * p * uFreq.x + time) * uAmp.x + Math.pow(Math.cos(Math.PI * p * uFreq.y + time * (uFreq.y / uFreq.x)), 2) * uAmp.y;
      const getY = (p) => -nsin(Math.PI * p * uFreq.z + time) * uAmp.z - Math.pow(nsin(Math.PI * p * uFreq.w + time / (uFreq.z / uFreq.w)), 5) * uAmp.w;
      const distortion = new THREE.Vector3(
        getX(progress) - getX(progress + 7e-3),
        getY(progress) - getY(progress + 7e-3),
        0
      );
      const lookAtAmp = new THREE.Vector3(-2, -5, 0);
      const lookAtOffset = new THREE.Vector3(0, 0, -10);
      return distortion.multiply(lookAtAmp).add(lookAtOffset);
    }
  },
  turbulentDistortionStill: {
    uniforms: turbulentUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          cos(PI * progress * uFreq.r) * uAmp.r +
          pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
        );
      }
      float getDistortionY(float progress){
        return (
          -nsin(PI * progress * uFreq.b) * uAmp.b +
          -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.02),
          getDistortionY(progress) - getDistortionY(0.02),
          0.
        );
      }
    `
  },
  deepDistortionStill: {
    uniforms: deepUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      uniform vec2 uPowY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          sin(progress * PI * uFreq.x) * uAmp.x * 2.
        );
      }
      float getDistortionY(float progress){
        return (
          pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.02),
          getDistortionY(progress) - getDistortionY(0.05),
          0.
        );
      }
    `
  },
  deepDistortion: {
    uniforms: deepUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      uniform vec2 uPowY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          sin(progress * PI * uFreq.x + uTime) * uAmp.x
        );
      }
      float getDistortionY(float progress){
        return (
          pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.02),
          getDistortionY(progress) - getDistortionY(0.02),
          0.
        );
      }
    `,
    getJS: (progress, time) => {
      const uFreq = deepUniforms.uFreq.value;
      const uAmp = deepUniforms.uAmp.value;
      const uPowY = deepUniforms.uPowY.value;
      const getX = (p) => Math.sin(p * Math.PI * uFreq.x + time) * uAmp.x;
      const getY = (p) => Math.pow(p * uPowY.x, uPowY.y) + Math.sin(p * Math.PI * uFreq.y + time) * uAmp.y;
      const distortion = new THREE.Vector3(
        getX(progress) - getX(progress + 0.01),
        getY(progress) - getY(progress + 0.01),
        0
      );
      const lookAtAmp = new THREE.Vector3(-2, -4, 0);
      const lookAtOffset = new THREE.Vector3(0, 0, -10);
      return distortion.multiply(lookAtAmp).add(lookAtOffset);
    }
  }
};
const distortion_uniforms = {
  uDistortionX: { value: new THREE.Vector2(80, 3) },
  uDistortionY: { value: new THREE.Vector2(-40, 2.5) }
};
const distortion_vertex = `
  #define PI 3.14159265358979
  uniform vec2 uDistortionX;
  uniform vec2 uDistortionY;
  float nsin(float val){
    return sin(val) * 0.5 + 0.5;
  }
  vec3 getDistortion(float progress){
    progress = clamp(progress, 0., 1.);
    float xAmp = uDistortionX.r;
    float xFreq = uDistortionX.g;
    float yAmp = uDistortionY.r;
    float yFreq = uDistortionY.g;
    return vec3( 
      xAmp * nsin(progress * PI * xFreq - PI / 2.),
      yAmp * nsin(progress * PI * yFreq - PI / 2.),
      0.
    );
  }
`;
function random(base) {
  if (Array.isArray(base)) {
    return Math.random() * (base[1] - base[0]) + base[0];
  }
  return Math.random() * base;
}
function pickRandom(arr) {
  if (Array.isArray(arr)) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  return arr;
}
function lerp(current, target, speed = 0.1, limit = 1e-3) {
  let change = (target - current) * speed;
  if (Math.abs(change) < limit) {
    change = target - current;
  }
  return change;
}
class CarLights {
  webgl;
  options;
  colors;
  speed;
  fade;
  mesh;
  constructor(webgl, options, colors, speed, fade) {
    this.webgl = webgl;
    this.options = options;
    this.colors = colors;
    this.speed = speed;
    this.fade = fade;
  }
  init() {
    const options = this.options;
    const curve = new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1));
    const geometry = new THREE.TubeGeometry(curve, 40, 1, 8, false);
    const instanced = new THREE.InstancedBufferGeometry().copy(geometry);
    instanced.instanceCount = options.lightPairsPerRoadWay * 2;
    const laneWidth = options.roadWidth / options.lanesPerRoad;
    const aOffset = [];
    const aMetrics = [];
    const aColor = [];
    let colorArray;
    if (Array.isArray(this.colors)) {
      colorArray = this.colors.map((c) => new THREE.Color(c));
    } else {
      colorArray = [new THREE.Color(this.colors)];
    }
    for (let i = 0; i < options.lightPairsPerRoadWay; i++) {
      const radius = random(options.carLightsRadius);
      const length = random(options.carLightsLength);
      const spd = random(this.speed);
      const carLane = i % options.lanesPerRoad;
      let laneX = carLane * laneWidth - options.roadWidth / 2 + laneWidth / 2;
      const carWidth = random(options.carWidthPercentage) * laneWidth;
      const carShiftX = random(options.carShiftX) * laneWidth;
      laneX += carShiftX;
      const offsetY = random(options.carFloorSeparation) + radius * 1.3;
      const offsetZ = -random(options.length);
      aOffset.push(laneX - carWidth / 2);
      aOffset.push(offsetY);
      aOffset.push(offsetZ);
      aOffset.push(laneX + carWidth / 2);
      aOffset.push(offsetY);
      aOffset.push(offsetZ);
      aMetrics.push(radius);
      aMetrics.push(length);
      aMetrics.push(spd);
      aMetrics.push(radius);
      aMetrics.push(length);
      aMetrics.push(spd);
      const color = pickRandom(colorArray);
      aColor.push(color.r);
      aColor.push(color.g);
      aColor.push(color.b);
      aColor.push(color.r);
      aColor.push(color.g);
      aColor.push(color.b);
    }
    instanced.setAttribute("aOffset", new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 3, false));
    instanced.setAttribute("aMetrics", new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 3, false));
    instanced.setAttribute("aColor", new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false));
    const material = new THREE.ShaderMaterial({
      fragmentShader: carLightsFragment,
      vertexShader: carLightsVertex,
      transparent: true,
      uniforms: Object.assign(
        {
          uTime: { value: 0 },
          uTravelLength: { value: options.length },
          uFade: { value: this.fade }
        },
        this.webgl.fogUniforms,
        (typeof this.options.distortion === "object" ? this.options.distortion.uniforms : {}) || {}
      )
    });
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        "#include <getDistortion_vertex>",
        typeof this.options.distortion === "object" ? this.options.distortion.getDistortion : ""
      );
    };
    const mesh = new THREE.Mesh(instanced, material);
    mesh.frustumCulled = false;
    this.webgl.scene.add(mesh);
    this.mesh = mesh;
  }
  update(time) {
    if (this.mesh.material.uniforms.uTime) {
      this.mesh.material.uniforms.uTime.value = time;
    }
  }
}
const carLightsFragment = `
  #define USE_FOG;
  ${THREE.ShaderChunk["fog_pars_fragment"]}
  varying vec3 vColor;
  varying vec2 vUv; 
  uniform vec2 uFade;
  void main() {
    vec3 color = vec3(vColor);
    float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
    gl_FragColor = vec4(color, alpha);
    if (gl_FragColor.a < 0.0001) discard;
    ${THREE.ShaderChunk["fog_fragment"]}
  }
`;
const carLightsVertex = `
  #define USE_FOG;
  ${THREE.ShaderChunk["fog_pars_vertex"]}
  attribute vec3 aOffset;
  attribute vec3 aMetrics;
  attribute vec3 aColor;
  uniform float uTravelLength;
  uniform float uTime;
  varying vec2 vUv; 
  varying vec3 vColor; 
  #include <getDistortion_vertex>
  void main() {
    vec3 transformed = position.xyz;
    float radius = aMetrics.r;
    float myLength = aMetrics.g;
    float speed = aMetrics.b;

    transformed.xy *= radius;
    transformed.z *= myLength;

    transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
    transformed.xy += aOffset.xy;

    float progress = abs(transformed.z / uTravelLength);
    transformed.xyz += getDistortion(progress);

    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vColor = aColor;
    ${THREE.ShaderChunk["fog_vertex"]}
  }
`;
class LightsSticks {
  webgl;
  options;
  mesh;
  constructor(webgl, options) {
    this.webgl = webgl;
    this.options = options;
  }
  init() {
    const options = this.options;
    const geometry = new THREE.PlaneGeometry(1, 1);
    const instanced = new THREE.InstancedBufferGeometry().copy(geometry);
    const totalSticks = options.totalSideLightSticks;
    instanced.instanceCount = totalSticks;
    const stickoffset = options.length / (totalSticks - 1);
    const aOffset = [];
    const aColor = [];
    const aMetrics = [];
    let colorArray;
    if (Array.isArray(options.colors.sticks)) {
      colorArray = options.colors.sticks.map((c) => new THREE.Color(c));
    } else {
      colorArray = [new THREE.Color(options.colors.sticks)];
    }
    for (let i = 0; i < totalSticks; i++) {
      const width = random(options.lightStickWidth);
      const height = random(options.lightStickHeight);
      aOffset.push((i - 1) * stickoffset * 2 + stickoffset * Math.random());
      const color = pickRandom(colorArray);
      aColor.push(color.r);
      aColor.push(color.g);
      aColor.push(color.b);
      aMetrics.push(width);
      aMetrics.push(height);
    }
    instanced.setAttribute("aOffset", new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 1, false));
    instanced.setAttribute("aColor", new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false));
    instanced.setAttribute("aMetrics", new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 2, false));
    const material = new THREE.ShaderMaterial({
      fragmentShader: sideSticksFragment,
      vertexShader: sideSticksVertex,
      side: THREE.DoubleSide,
      uniforms: Object.assign(
        {
          uTravelLength: { value: options.length },
          uTime: { value: 0 }
        },
        this.webgl.fogUniforms,
        (typeof options.distortion === "object" ? options.distortion.uniforms : {}) || {}
      )
    });
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        "#include <getDistortion_vertex>",
        typeof this.options.distortion === "object" ? this.options.distortion.getDistortion : ""
      );
    };
    const mesh = new THREE.Mesh(instanced, material);
    mesh.frustumCulled = false;
    this.webgl.scene.add(mesh);
    this.mesh = mesh;
  }
  update(time) {
    if (this.mesh.material.uniforms.uTime) {
      this.mesh.material.uniforms.uTime.value = time;
    }
  }
}
const sideSticksVertex = `
  #define USE_FOG;
  ${THREE.ShaderChunk["fog_pars_vertex"]}
  attribute float aOffset;
  attribute vec3 aColor;
  attribute vec2 aMetrics;
  uniform float uTravelLength;
  uniform float uTime;
  varying vec3 vColor;
  mat4 rotationY( in float angle ) {
    return mat4(
      cos(angle),		0,		sin(angle),	0,
      0,		        1.0,	0,			0,
      -sin(angle),	    0,		cos(angle),	0,
      0, 		        0,		0,			1
    );
  }
  #include <getDistortion_vertex>
  void main(){
    vec3 transformed = position.xyz;
    float width = aMetrics.x;
    float height = aMetrics.y;

    transformed.xy *= vec2(width, height);
    float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

    transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;
    transformed.z += - uTravelLength + time;

    float progress = abs(transformed.z / uTravelLength);
    transformed.xyz += getDistortion(progress);

    transformed.y += height / 2.;
    transformed.x += -width / 2.;
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition;
    vColor = aColor;
    ${THREE.ShaderChunk["fog_vertex"]}
  }
`;
const sideSticksFragment = `
  #define USE_FOG;
  ${THREE.ShaderChunk["fog_pars_fragment"]}
  varying vec3 vColor;
  void main(){
    vec3 color = vec3(vColor);
    gl_FragColor = vec4(color,1.);
    ${THREE.ShaderChunk["fog_fragment"]}
  }
`;
class Road {
  webgl;
  options;
  uTime;
  leftRoadWay;
  rightRoadWay;
  island;
  constructor(webgl, options) {
    this.webgl = webgl;
    this.options = options;
    this.uTime = { value: 0 };
  }
  createPlane(side, width, isRoad) {
    const options = this.options;
    const segments = 100;
    const geometry = new THREE.PlaneGeometry(
      isRoad ? options.roadWidth : options.islandWidth,
      options.length,
      20,
      segments
    );
    let uniforms = {
      uTravelLength: { value: options.length },
      uColor: {
        value: new THREE.Color(isRoad ? options.colors.roadColor : options.colors.islandColor)
      },
      uTime: this.uTime
    };
    if (isRoad) {
      uniforms = Object.assign(uniforms, {
        uLanes: { value: options.lanesPerRoad },
        uBrokenLinesColor: {
          value: new THREE.Color(options.colors.brokenLines)
        },
        uShoulderLinesColor: {
          value: new THREE.Color(options.colors.shoulderLines)
        },
        uShoulderLinesWidthPercentage: {
          value: options.shoulderLinesWidthPercentage
        },
        uBrokenLinesLengthPercentage: {
          value: options.brokenLinesLengthPercentage
        },
        uBrokenLinesWidthPercentage: {
          value: options.brokenLinesWidthPercentage
        }
      });
    }
    const material = new THREE.ShaderMaterial({
      fragmentShader: isRoad ? roadFragment : islandFragment,
      vertexShader: roadVertex,
      side: THREE.DoubleSide,
      uniforms: Object.assign(
        uniforms,
        this.webgl.fogUniforms,
        (typeof options.distortion === "object" ? options.distortion.uniforms : {}) || {}
      )
    });
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        "#include <getDistortion_vertex>",
        typeof this.options.distortion === "object" ? this.options.distortion.getDistortion : ""
      );
    };
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.z = -options.length / 2;
    mesh.position.x += (this.options.islandWidth / 2 + options.roadWidth / 2) * side;
    this.webgl.scene.add(mesh);
    return mesh;
  }
  init() {
    this.leftRoadWay = this.createPlane(-1, this.options.roadWidth, true);
    this.rightRoadWay = this.createPlane(1, this.options.roadWidth, true);
    this.island = this.createPlane(0, this.options.islandWidth, false);
  }
  update(time) {
    this.uTime.value = time;
  }
}
const roadBaseFragment = `
  #define USE_FOG;
  varying vec2 vUv; 
  uniform vec3 uColor;
  uniform float uTime;
  #include <roadMarkings_vars>
  ${THREE.ShaderChunk["fog_pars_fragment"]}
  void main() {
    vec2 uv = vUv;
    vec3 color = vec3(uColor);
    #include <roadMarkings_fragment>
    gl_FragColor = vec4(color, 1.);
    ${THREE.ShaderChunk["fog_fragment"]}
  }
`;
const islandFragment = roadBaseFragment.replace("#include <roadMarkings_fragment>", "").replace("#include <roadMarkings_vars>", "");
const roadMarkings_vars = `
  uniform float uLanes;
  uniform vec3 uBrokenLinesColor;
  uniform vec3 uShoulderLinesColor;
  uniform float uShoulderLinesWidthPercentage;
  uniform float uBrokenLinesWidthPercentage;
  uniform float uBrokenLinesLengthPercentage;
  highp float random(vec2 co) {
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt = dot(co.xy, vec2(a, b));
    highp float sn = mod(dt, 3.14);
    return fract(sin(sn) * c);
  }
`;
const roadMarkings_fragment = `
  uv.y = mod(uv.y + uTime * 0.05, 1.);
  float laneWidth = 1.0 / uLanes;
  float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
  float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

  float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
  float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

  brokenLines = mix(brokenLines, sideLines, uv.x);
`;
const roadFragment = roadBaseFragment.replace("#include <roadMarkings_fragment>", roadMarkings_fragment).replace("#include <roadMarkings_vars>", roadMarkings_vars);
const roadVertex = `
  #define USE_FOG;
  uniform float uTime;
  ${THREE.ShaderChunk["fog_pars_vertex"]}
  uniform float uTravelLength;
  varying vec2 vUv; 
  #include <getDistortion_vertex>
  void main() {
    vec3 transformed = position.xyz;
    vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
    transformed.x += distortion.x;
    transformed.z += distortion.y;
    transformed.y += -1. * distortion.z;  
    
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    ${THREE.ShaderChunk["fog_vertex"]}
  }
`;
function resizeRendererToDisplaySize(renderer, setSize) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    setSize(width, height, false);
  }
  return needResize;
}
class App {
  container;
  options;
  renderer;
  composer;
  camera;
  scene;
  renderPass;
  bloomPass;
  clock;
  assets;
  disposed;
  road;
  leftCarLights;
  rightCarLights;
  leftSticks;
  fogUniforms;
  fovTarget;
  speedUpTarget;
  speedUp;
  timeOffset;
  constructor(container, options) {
    this.options = options;
    if (!this.options.distortion) {
      this.options.distortion = {
        uniforms: distortion_uniforms,
        getDistortion: distortion_vertex
      };
    }
    this.container = container;
    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true
    });
    this.renderer.setSize(container.offsetWidth, container.offsetHeight, false);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.composer = new EffectComposer(this.renderer);
    container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(options.fov, container.offsetWidth / container.offsetHeight, 0.1, 1e4);
    this.camera.position.z = -5;
    this.camera.position.y = 8;
    this.camera.position.x = 0;
    this.scene = new THREE.Scene();
    this.scene.background = null;
    const fog = new THREE.Fog(options.colors.background, options.length * 0.2, options.length * 500);
    this.scene.fog = fog;
    this.fogUniforms = {
      fogColor: { value: fog.color },
      fogNear: { value: fog.near },
      fogFar: { value: fog.far }
    };
    this.clock = new THREE.Clock();
    this.assets = {};
    this.disposed = false;
    this.road = new Road(this, options);
    this.leftCarLights = new CarLights(
      this,
      options,
      options.colors.leftCars,
      options.movingAwaySpeed,
      new THREE.Vector2(0, 1 - options.carLightsFade)
    );
    this.rightCarLights = new CarLights(
      this,
      options,
      options.colors.rightCars,
      options.movingCloserSpeed,
      new THREE.Vector2(1, 0 + options.carLightsFade)
    );
    this.leftSticks = new LightsSticks(this, options);
    this.fovTarget = options.fov;
    this.speedUpTarget = 0;
    this.speedUp = 0;
    this.timeOffset = 0;
    this.tick = this.tick.bind(this);
    this.init = this.init.bind(this);
    this.setSize = this.setSize.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onContextMenu = this.onContextMenu.bind(this);
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }
  onWindowResize() {
    const width = this.container.offsetWidth;
    const height = this.container.offsetHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.composer.setSize(width, height);
  }
  initPasses() {
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.bloomPass = new EffectPass(
      this.camera,
      new BloomEffect({
        luminanceThreshold: 0.2,
        luminanceSmoothing: 0,
        resolutionScale: 1
      })
    );
    const smaaPass = new EffectPass(
      this.camera,
      new SMAAEffect({
        preset: SMAAPreset.MEDIUM
      })
    );
    this.renderPass.renderToScreen = false;
    this.bloomPass.renderToScreen = false;
    smaaPass.renderToScreen = true;
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(smaaPass);
  }
  loadAssets() {
    const assets = this.assets;
    return new Promise((resolve) => {
      const manager = new THREE.LoadingManager(resolve);
      const searchImage = new Image();
      const areaImage = new Image();
      assets.smaa = {};
      searchImage.addEventListener("load", function() {
        assets.smaa.search = this;
        manager.itemEnd("smaa-search");
      });
      areaImage.addEventListener("load", function() {
        assets.smaa.area = this;
        manager.itemEnd("smaa-area");
      });
      manager.itemStart("smaa-search");
      manager.itemStart("smaa-area");
      searchImage.src = SMAAEffect.searchImageDataURL;
      areaImage.src = SMAAEffect.areaImageDataURL;
    });
  }
  init() {
    this.initPasses();
    const options = this.options;
    this.road.init();
    this.leftCarLights.init();
    this.leftCarLights.mesh.position.setX(-options.roadWidth / 2 - options.islandWidth / 2);
    this.rightCarLights.init();
    this.rightCarLights.mesh.position.setX(options.roadWidth / 2 + options.islandWidth / 2);
    this.leftSticks.init();
    this.leftSticks.mesh.position.setX(-(options.roadWidth + options.islandWidth / 2));
    this.container.addEventListener("mousedown", this.onMouseDown);
    this.container.addEventListener("mouseup", this.onMouseUp);
    this.container.addEventListener("mouseout", this.onMouseUp);
    this.container.addEventListener("touchstart", this.onTouchStart, {
      passive: true
    });
    this.container.addEventListener("touchend", this.onTouchEnd, {
      passive: true
    });
    this.container.addEventListener("touchcancel", this.onTouchEnd, {
      passive: true
    });
    this.container.addEventListener("contextmenu", this.onContextMenu);
    this.tick();
  }
  onMouseDown(ev) {
    if (this.options.onSpeedUp) this.options.onSpeedUp(ev);
    this.fovTarget = this.options.fovSpeedUp;
    this.speedUpTarget = this.options.speedUp;
  }
  onMouseUp(ev) {
    if (this.options.onSlowDown) this.options.onSlowDown(ev);
    this.fovTarget = this.options.fov;
    this.speedUpTarget = 0;
  }
  onTouchStart(ev) {
    if (this.options.onSpeedUp) this.options.onSpeedUp(ev);
    this.fovTarget = this.options.fovSpeedUp;
    this.speedUpTarget = this.options.speedUp;
  }
  onTouchEnd(ev) {
    if (this.options.onSlowDown) this.options.onSlowDown(ev);
    this.fovTarget = this.options.fov;
    this.speedUpTarget = 0;
  }
  onContextMenu(ev) {
    ev.preventDefault();
  }
  update(delta) {
    const lerpPercentage = Math.exp(-(-60 * Math.log2(1 - 0.1)) * delta);
    this.speedUp += lerp(this.speedUp, this.speedUpTarget, lerpPercentage, 1e-5);
    this.timeOffset += this.speedUp * delta;
    const time = this.clock.elapsedTime + this.timeOffset;
    this.rightCarLights.update(time);
    this.leftCarLights.update(time);
    this.leftSticks.update(time);
    this.road.update(time);
    let updateCamera = false;
    const fovChange = lerp(this.camera.fov, this.fovTarget, lerpPercentage);
    if (fovChange !== 0) {
      this.camera.fov += fovChange * delta * 6;
      updateCamera = true;
    }
    if (typeof this.options.distortion === "object" && this.options.distortion.getJS) {
      const distortion = this.options.distortion.getJS(0.025, time);
      this.camera.lookAt(
        new THREE.Vector3(
          this.camera.position.x + distortion.x,
          this.camera.position.y + distortion.y,
          this.camera.position.z + distortion.z
        )
      );
      updateCamera = true;
    }
    if (updateCamera) {
      this.camera.updateProjectionMatrix();
    }
  }
  render(delta) {
    this.composer.render(delta);
  }
  dispose() {
    this.disposed = true;
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.composer) {
      this.composer.dispose();
    }
    if (this.scene) {
      this.scene.clear();
    }
    window.removeEventListener("resize", this.onWindowResize.bind(this));
    if (this.container) {
      this.container.removeEventListener("mousedown", this.onMouseDown);
      this.container.removeEventListener("mouseup", this.onMouseUp);
      this.container.removeEventListener("mouseout", this.onMouseUp);
      this.container.removeEventListener("touchstart", this.onTouchStart);
      this.container.removeEventListener("touchend", this.onTouchEnd);
      this.container.removeEventListener("touchcancel", this.onTouchEnd);
      this.container.removeEventListener("contextmenu", this.onContextMenu);
    }
  }
  setSize(width, height, updateStyles) {
    this.composer.setSize(width, height, updateStyles);
  }
  tick() {
    if (this.disposed || !this) return;
    if (resizeRendererToDisplaySize(this.renderer, this.setSize)) {
      const canvas = this.renderer.domElement;
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }
    const delta = this.clock.getDelta();
    this.render(delta);
    this.update(delta);
    requestAnimationFrame(this.tick);
  }
}
const Hyperspeed = ({ effectOptions = {}, className = "" }) => {
  const mergedOptions = {
    ...defaultOptions,
    ...effectOptions
  };
  const hyperspeed = useRef(null);
  const appRef = useRef(null);
  useEffect(() => {
    if (appRef.current) {
      appRef.current.dispose();
      const container2 = document.getElementById("lights");
      if (container2) {
        while (container2.firstChild) {
          container2.removeChild(container2.firstChild);
        }
      }
    }
    const container = hyperspeed.current;
    if (!container) return;
    const options = { ...mergedOptions };
    if (typeof options.distortion === "string") {
      options.distortion = distortions[options.distortion];
    }
    const myApp = new App(container, options);
    appRef.current = myApp;
    myApp.loadAssets().then(myApp.init);
    return () => {
      if (appRef.current) {
        appRef.current.dispose();
      }
    };
  }, [mergedOptions]);
  return /* @__PURE__ */ jsx("div", { id: "lights", className, ref: hyperspeed });
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
