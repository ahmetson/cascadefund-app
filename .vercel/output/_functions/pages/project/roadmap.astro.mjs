import { i as createComponent, j as createAstro, w as renderComponent, r as renderTemplate } from '../../chunks/astro/server_WCbI3U70.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_aQb_8Ejw.mjs';
import { P as Panel } from '../../chunks/MenuPanel_CuPcNm2C.mjs';
import { E as ElectricBorder, g as getIcon, B as Badge, M as MenuName } from '../../chunks/BrowseTracker_CjQaYJF4.mjs';
import { ObjectId } from 'mongodb';
import { g as getGalaxyById } from '../../chunks/galaxy_D015Gxde.mjs';
import { a as getProjectById } from '../../chunks/project_T6up3nk6.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect, memo, useRef, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { c as cn, t as truncateStr } from '../../chunks/utils_CRaJ9uIg.mjs';
import { g as getStrictContext, S as Slot } from '../../chunks/slot_C0HxhKXe.mjs';
import { B as BasePanel } from '../../chunks/Panel_5oXz7djo.mjs';
import { P as PageLikePanel } from '../../chunks/PageLikePanel_DyHCjbTr.mjs';
import { g as getAnimationColors, B as Button } from '../../chunks/PanelAction_BPm-vUQ5.mjs';
import { C as Component } from '../../chunks/Tooltip_CwxsUbL0.mjs';
import { M as MenuAvatar, T as TimeAgo, P as PanelFooter, F as Followings } from '../../chunks/timeago-react_Bm2JnYlR.mjs';
import NumberFlow from '@number-flow/react';
import * as RadixSlider from '@radix-ui/react-slider';
import { Checkbox as Checkbox$1 } from 'radix-ui';
import { u as useControlledState } from '../../chunks/ripple_B-0pZuOp.mjs';
import { A as AvatarList, P as ProfileRating } from '../../chunks/AvatarList_QbL7je5L.mjs';
import { L as LoadingSpinner } from '../../chunks/LoadingSpinner_DhXAEzrZ.mjs';
import { useDrop, useDrag, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { g as getDemo, i as incrementDemoStep, a as getUserById } from '../../chunks/user_3Q2CxTy8.mjs';
import { D as DEMO_EVENT_TYPES } from '../../chunks/demo_CnQUSMeS.mjs';
import { g as getIssueById, a as updateIssue } from '../../chunks/issue_7cyO0TZY.mjs';
import { a as actions } from '../../chunks/issue_ClqDH68H.mjs';
import { P as PATCH_EVENT_TYPES, a as PATCH_KEYWORD } from '../../chunks/patch_D1PjuDPm.mjs';
export { renderers } from '../../renderers.mjs';

const HighlightContext = React.createContext(void 0);
function useHighlight() {
  const context = React.useContext(HighlightContext);
  if (!context) {
    throw new Error("useHighlight must be used within a HighlightProvider");
  }
  return context;
}
function Highlight({
  ref,
  ...props
}) {
  const {
    as: Component = "div",
    children,
    value,
    defaultValue,
    onValueChange,
    className,
    style,
    transition = { type: "spring", stiffness: 350, damping: 35 },
    hover = false,
    click = true,
    enabled = true,
    controlledItems,
    disabled = false,
    exitDelay = 200,
    mode = "children"
  } = props;
  const localRef = React.useRef(null);
  React.useImperativeHandle(ref, () => localRef.current);
  const [activeValue, setActiveValue] = React.useState(
    value ?? defaultValue ?? null
  );
  const [boundsState, setBoundsState] = React.useState(null);
  const [activeClassNameState, setActiveClassNameState] = React.useState("");
  const safeSetActiveValue = React.useCallback(
    (id2) => {
      setActiveValue((prev) => prev === id2 ? prev : id2);
      if (id2 !== activeValue) onValueChange?.(id2);
    },
    [activeValue, onValueChange]
  );
  const safeSetBounds = React.useCallback(
    (bounds) => {
      if (!localRef.current) return;
      const boundsOffset = props?.boundsOffset ?? {
        top: 0,
        left: 0,
        width: 0,
        height: 0
      };
      const containerRect = localRef.current.getBoundingClientRect();
      const newBounds = {
        top: bounds.top - containerRect.top + (boundsOffset.top ?? 0),
        left: bounds.left - containerRect.left + (boundsOffset.left ?? 0),
        width: bounds.width + (boundsOffset.width ?? 0),
        height: bounds.height + (boundsOffset.height ?? 0)
      };
      setBoundsState((prev) => {
        if (prev && prev.top === newBounds.top && prev.left === newBounds.left && prev.width === newBounds.width && prev.height === newBounds.height) {
          return prev;
        }
        return newBounds;
      });
    },
    [props]
  );
  const clearBounds = React.useCallback(() => {
    setBoundsState((prev) => prev === null ? prev : null);
  }, []);
  React.useEffect(() => {
    if (value !== void 0) setActiveValue(value);
    else if (defaultValue !== void 0) setActiveValue(defaultValue);
  }, [value, defaultValue]);
  const id = React.useId();
  React.useEffect(() => {
    if (mode !== "parent") return;
    const container = localRef.current;
    if (!container) return;
    const onScroll = () => {
      if (!activeValue) return;
      const activeEl = container.querySelector(
        `[data-value="${activeValue}"][data-highlight="true"]`
      );
      if (activeEl) safeSetBounds(activeEl.getBoundingClientRect());
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [mode, activeValue, safeSetBounds]);
  const render = React.useCallback(
    (children2) => {
      if (mode === "parent") {
        return /* @__PURE__ */ jsxs(
          Component,
          {
            ref: localRef,
            "data-slot": "motion-highlight-container",
            style: { position: "relative", zIndex: 1 },
            className: props?.containerClassName,
            children: [
              /* @__PURE__ */ jsx(AnimatePresence, { initial: false, mode: "wait", children: boundsState && /* @__PURE__ */ jsx(
                motion.div,
                {
                  "data-slot": "motion-highlight",
                  animate: {
                    top: boundsState.top,
                    left: boundsState.left,
                    width: boundsState.width,
                    height: boundsState.height,
                    opacity: 1
                  },
                  initial: {
                    top: boundsState.top,
                    left: boundsState.left,
                    width: boundsState.width,
                    height: boundsState.height,
                    opacity: 0
                  },
                  exit: {
                    opacity: 0,
                    transition: {
                      ...transition,
                      delay: (transition?.delay ?? 0) + (exitDelay ?? 0) / 1e3
                    }
                  },
                  transition,
                  style: { position: "absolute", zIndex: 0, ...style },
                  className: cn(className, activeClassNameState)
                }
              ) }),
              children2
            ]
          }
        );
      }
      return children2;
    },
    [
      mode,
      Component,
      props,
      boundsState,
      transition,
      exitDelay,
      style,
      className,
      activeClassNameState
    ]
  );
  return /* @__PURE__ */ jsx(
    HighlightContext.Provider,
    {
      value: {
        mode,
        activeValue,
        setActiveValue: safeSetActiveValue,
        id,
        hover,
        click,
        className,
        style,
        transition,
        disabled,
        enabled,
        exitDelay,
        setBounds: safeSetBounds,
        clearBounds,
        activeClassName: activeClassNameState,
        setActiveClassName: setActiveClassNameState,
        forceUpdateBounds: props?.forceUpdateBounds
      },
      children: enabled ? controlledItems ? render(children) : render(
        React.Children.map(children, (child, index) => /* @__PURE__ */ jsx(HighlightItem, { className: props?.itemsClassName, children: child }, index))
      ) : children
    }
  );
}
function getNonOverridingDataAttributes(element, dataAttributes) {
  return Object.keys(dataAttributes).reduce(
    (acc, key) => {
      if (element.props[key] === void 0) {
        acc[key] = dataAttributes[key];
      }
      return acc;
    },
    {}
  );
}
function HighlightItem({
  ref,
  as,
  children,
  id,
  value,
  className,
  style,
  transition,
  disabled = false,
  activeClassName,
  exitDelay,
  asChild = false,
  forceUpdateBounds,
  ...props
}) {
  const itemId = React.useId();
  const {
    activeValue,
    setActiveValue,
    mode,
    setBounds,
    clearBounds,
    hover,
    click,
    enabled,
    className: contextClassName,
    style: contextStyle,
    transition: contextTransition,
    id: contextId,
    disabled: contextDisabled,
    exitDelay: contextExitDelay,
    forceUpdateBounds: contextForceUpdateBounds,
    setActiveClassName
  } = useHighlight();
  const Component = as ?? "div";
  const element = children;
  const childValue = id ?? value ?? element.props?.["data-value"] ?? element.props?.id ?? itemId;
  const isActive = activeValue === childValue;
  const isDisabled = disabled === void 0 ? contextDisabled : disabled;
  const itemTransition = transition ?? contextTransition;
  const localRef = React.useRef(null);
  React.useImperativeHandle(ref, () => localRef.current);
  React.useEffect(() => {
    if (mode !== "parent") return;
    let rafId;
    let previousBounds = null;
    const shouldUpdateBounds = forceUpdateBounds === true || contextForceUpdateBounds && forceUpdateBounds !== false;
    const updateBounds = () => {
      if (!localRef.current) return;
      const bounds = localRef.current.getBoundingClientRect();
      if (shouldUpdateBounds) {
        if (previousBounds && previousBounds.top === bounds.top && previousBounds.left === bounds.left && previousBounds.width === bounds.width && previousBounds.height === bounds.height) {
          rafId = requestAnimationFrame(updateBounds);
          return;
        }
        previousBounds = bounds;
        rafId = requestAnimationFrame(updateBounds);
      }
      setBounds(bounds);
    };
    if (isActive) {
      updateBounds();
      setActiveClassName(activeClassName ?? "");
    } else if (!activeValue) clearBounds();
    if (shouldUpdateBounds) return () => cancelAnimationFrame(rafId);
  }, [
    mode,
    isActive,
    activeValue,
    setBounds,
    clearBounds,
    activeClassName,
    setActiveClassName,
    forceUpdateBounds,
    contextForceUpdateBounds
  ]);
  if (!React.isValidElement(children)) return children;
  const dataAttributes = {
    "data-active": isActive ? "true" : "false",
    "aria-selected": isActive,
    "data-disabled": isDisabled,
    "data-value": childValue,
    "data-highlight": true
  };
  const commonHandlers = hover ? {
    onMouseEnter: (e) => {
      setActiveValue(childValue);
      element.props.onMouseEnter?.(e);
    },
    onMouseLeave: (e) => {
      setActiveValue(null);
      element.props.onMouseLeave?.(e);
    }
  } : click ? {
    onClick: (e) => {
      setActiveValue(childValue);
      element.props.onClick?.(e);
    }
  } : {};
  if (asChild) {
    if (mode === "children") {
      return React.cloneElement(
        element,
        {
          key: childValue,
          ref: localRef,
          className: cn("relative", element.props.className),
          ...getNonOverridingDataAttributes(element, {
            ...dataAttributes,
            "data-slot": "motion-highlight-item-container"
          }),
          ...commonHandlers,
          ...props
        },
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(AnimatePresence, { initial: false, mode: "wait", children: isActive && !isDisabled && /* @__PURE__ */ jsx(
            motion.div,
            {
              layoutId: `transition-background-${contextId}`,
              "data-slot": "motion-highlight",
              style: {
                position: "absolute",
                zIndex: 0,
                ...contextStyle,
                ...style
              },
              className: cn(contextClassName, activeClassName),
              transition: itemTransition,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: {
                opacity: 0,
                transition: {
                  ...itemTransition,
                  delay: (itemTransition?.delay ?? 0) + (exitDelay ?? contextExitDelay ?? 0) / 1e3
                }
              },
              ...dataAttributes
            }
          ) }),
          /* @__PURE__ */ jsx(
            Component,
            {
              "data-slot": "motion-highlight-item",
              style: { position: "relative", zIndex: 1 },
              className,
              ...dataAttributes,
              children
            }
          )
        ] })
      );
    }
    return React.cloneElement(element, {
      ref: localRef,
      ...getNonOverridingDataAttributes(element, {
        ...dataAttributes,
        "data-slot": "motion-highlight-item"
      }),
      ...commonHandlers
    });
  }
  return enabled ? /* @__PURE__ */ jsxs(
    Component,
    {
      ref: localRef,
      "data-slot": "motion-highlight-item-container",
      className: cn(mode === "children" && "relative", className),
      ...dataAttributes,
      ...props,
      ...commonHandlers,
      children: [
        mode === "children" && /* @__PURE__ */ jsx(AnimatePresence, { initial: false, mode: "wait", children: isActive && !isDisabled && /* @__PURE__ */ jsx(
          motion.div,
          {
            layoutId: `transition-background-${contextId}`,
            "data-slot": "motion-highlight",
            style: {
              position: "absolute",
              zIndex: 0,
              ...contextStyle,
              ...style
            },
            className: cn(contextClassName, activeClassName),
            transition: itemTransition,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: {
              opacity: 0,
              transition: {
                ...itemTransition,
                delay: (itemTransition?.delay ?? 0) + (exitDelay ?? contextExitDelay ?? 0) / 1e3
              }
            },
            ...dataAttributes
          }
        ) }),
        React.cloneElement(element, {
          style: { position: "relative", zIndex: 1 },
          className: element.props.className,
          ...getNonOverridingDataAttributes(element, {
            ...dataAttributes,
            "data-slot": "motion-highlight-item"
          })
        })
      ]
    },
    childValue
  ) : children;
}

const [TabsProvider, useTabs] = getStrictContext("TabsContext");
function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  ...props
}) {
  const [activeValue, setActiveValue] = React.useState(
    defaultValue
  );
  const triggersRef = React.useRef(/* @__PURE__ */ new Map());
  const initialSet = React.useRef(false);
  const isControlled = value !== void 0;
  React.useEffect(() => {
    if (!isControlled && activeValue === void 0 && triggersRef.current.size > 0 && !initialSet.current) {
      const firstTab = triggersRef.current.keys().next().value;
      if (firstTab !== void 0) {
        setActiveValue(firstTab);
        initialSet.current = true;
      }
    }
  }, [activeValue, isControlled]);
  const registerTrigger = React.useCallback(
    (val, node) => {
      if (node) {
        triggersRef.current.set(val, node);
        if (!isControlled && activeValue === void 0 && !initialSet.current) {
          setActiveValue(val);
          initialSet.current = true;
        }
      } else {
        triggersRef.current.delete(val);
      }
    },
    [activeValue, isControlled]
  );
  const handleValueChange = React.useCallback(
    (val) => {
      if (!isControlled) setActiveValue(val);
      else onValueChange?.(val);
    },
    [isControlled, onValueChange]
  );
  return /* @__PURE__ */ jsx(
    TabsProvider,
    {
      value: {
        activeValue: value ?? activeValue,
        handleValueChange,
        registerTrigger
      },
      children: /* @__PURE__ */ jsx("div", { "data-slot": "tabs", ...props, children })
    }
  );
}
function TabsHighlight({
  transition = { type: "spring", stiffness: 200, damping: 25 },
  ...props
}) {
  const { activeValue } = useTabs();
  return /* @__PURE__ */ jsx(
    Highlight,
    {
      "data-slot": "tabs-highlight",
      controlledItems: true,
      value: activeValue,
      transition,
      click: false,
      ...props
    }
  );
}
function TabsList(props) {
  return /* @__PURE__ */ jsx("div", { role: "tablist", "data-slot": "tabs-list", ...props });
}
function TabsHighlightItem(props) {
  return /* @__PURE__ */ jsx(HighlightItem, { "data-slot": "tabs-highlight-item", ...props });
}
function TabsTrigger({
  ref,
  value,
  asChild = false,
  ...props
}) {
  const { activeValue, handleValueChange, registerTrigger } = useTabs();
  const localRef = React.useRef(null);
  React.useImperativeHandle(ref, () => localRef.current);
  React.useEffect(() => {
    registerTrigger(value, localRef.current);
    return () => registerTrigger(value, null);
  }, [value, registerTrigger]);
  const Component = asChild ? Slot : motion.button;
  return /* @__PURE__ */ jsx(
    Component,
    {
      ref: localRef,
      "data-slot": "tabs-trigger",
      role: "tab",
      onClick: () => handleValueChange(value),
      "data-state": activeValue === value ? "active" : "inactive",
      ...props
    }
  );
}
function TabsContents({
  children,
  transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    bounce: 0,
    restDelta: 0.01
  },
  ...props
}) {
  const { activeValue } = useTabs();
  const childrenArray = React.Children.toArray(children);
  const activeIndex = childrenArray.findIndex(
    (child) => React.isValidElement(child) && typeof child.props === "object" && child.props !== null && "value" in child.props && child.props.value === activeValue
  );
  const containerRef = React.useRef(null);
  const itemRefs = React.useRef([]);
  const [height, setHeight] = React.useState(0);
  const roRef = React.useRef(null);
  const measure = React.useCallback(() => {
    const pane = itemRefs.current[activeIndex];
    const container = containerRef.current;
    if (!pane || !container) return 0;
    const base = pane.getBoundingClientRect().height || 0;
    const cs = getComputedStyle(container);
    const isBorderBox = cs.boxSizing === "border-box";
    const paddingY = (parseFloat(cs.paddingTop || "0") || 0) + (parseFloat(cs.paddingBottom || "0") || 0);
    const borderY = (parseFloat(cs.borderTopWidth || "0") || 0) + (parseFloat(cs.borderBottomWidth || "0") || 0);
    let total = base + (isBorderBox ? paddingY + borderY : 0);
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    total = Math.ceil(total * dpr) / dpr;
    return total;
  }, [activeIndex]);
  React.useEffect(() => {
    if (roRef.current) {
      roRef.current.disconnect();
      roRef.current = null;
    }
    const pane = itemRefs.current[activeIndex];
    const container = containerRef.current;
    if (!pane || !container) return;
    setHeight(measure());
    const ro = new ResizeObserver(() => {
      const next = measure();
      requestAnimationFrame(() => setHeight(next));
    });
    ro.observe(pane);
    ro.observe(container);
    roRef.current = ro;
    return () => {
      ro.disconnect();
      roRef.current = null;
    };
  }, [activeIndex, childrenArray.length, measure]);
  React.useLayoutEffect(() => {
    if (height === 0 && activeIndex >= 0) {
      const next = measure();
      if (next !== 0) setHeight(next);
    }
  }, [activeIndex, height, measure]);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref: containerRef,
      "data-slot": "tabs-contents",
      style: { overflow: "hidden" },
      animate: { height },
      transition,
      ...props,
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "flex -mx-2",
          animate: { x: activeIndex * -100 + "%" },
          transition,
          children: childrenArray.map((child, index) => /* @__PURE__ */ jsx(
            "div",
            {
              ref: (el) => {
                itemRefs.current[index] = el;
              },
              className: "w-full shrink-0 px-2 h-full",
              children: child
            },
            index
          ))
        }
      )
    }
  );
}
function TabsContent({
  value,
  style,
  asChild = false,
  ...props
}) {
  const { activeValue } = useTabs();
  const isActive = activeValue === value;
  const Component = asChild ? Slot : motion.div;
  return /* @__PURE__ */ jsx(
    Component,
    {
      role: "tabpanel",
      "data-slot": "tabs-content",
      inert: !isActive,
      style: { overflow: "hidden", ...style },
      initial: { filter: "blur(0px)" },
      animate: { filter: isActive ? "blur(0px)" : "blur(4px)" },
      exit: { filter: "blur(0px)" },
      transition: { type: "spring", stiffness: 200, damping: 25 },
      ...props
    }
  );
}

const C$1 = ({ activeTab: initialTab, tabs, onTabChange }) => {
  const [activeTab, setTab] = useState(initialTab);
  const baseClassName = "flex-1 rounded-md hover:bg-accent/50 rounded-b-none hover:border-b-2 hover:border-blue-500 hover:shadow-md backdrop-blur-sm";
  useEffect(() => {
    onTabChange?.(activeTab);
  }, [activeTab]);
  return /* @__PURE__ */ jsxs(
    Tabs,
    {
      onValueChange: setTab,
      value: activeTab,
      className: "relative mb-6 bg-blue-100 dark:bg-transparent text-slate-600 dark:text-slate-400 py-1 backdrop-blur-sm",
      children: [
        /* @__PURE__ */ jsx(TabsHighlight, { className: "", children: /* @__PURE__ */ jsx(TabsList, { className: "h-10 inline-flex p-0 w-full backdrop-blur-sm bg-white/50 dark:bg-slate-900/50", children: tabs.map(
          (tab) => /* @__PURE__ */ jsx(TabsHighlightItem, { value: tab.key, className: baseClassName + (activeTab === tab.key ? " bg-white dark:bg-slate-700 shadow-none shadow-b-none" : "bg-blue-200/50 dark:bg-slate-800/50 border-b-2 border-blue-200/50 dark:border-slate-700/50"), children: /* @__PURE__ */ jsx(
            TabsTrigger,
            {
              value: tab.key,
              className: "hyperlink h-full leading-0 w-full text-sm text-blue-500 dark:text-blue-300 cursor-pointer " + (tab.className || ""),
              children: tab.label
            }
          ) }, tab.key)
        ) }) }),
        /* @__PURE__ */ jsx(
          TabsContents,
          {
            className: "bg-gray-50 dark:bg-slate-800/70 p-0 h-80 m-0 rounded-b-xl",
            children: tabs.map(
              (tab) => /* @__PURE__ */ jsx(TabsContent, { value: tab.key, className: "space-y-4", children: tab.content })
            )
          }
        )
      ]
    }
  );
};

const ROADMAP_EVENT_TYPES = {
  VERSION_CREATED: "version-created",
  VERSION_RELEASED: "version-released"
};

const [CheckboxProvider, useCheckbox] = getStrictContext("CheckboxContext");
function Checkbox({
  defaultChecked,
  checked,
  onCheckedChange,
  disabled,
  required,
  name,
  value,
  ...props
}) {
  const [isChecked, setIsChecked] = useControlledState({
    value: checked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange
  });
  return /* @__PURE__ */ jsx(CheckboxProvider, { value: { isChecked, setIsChecked }, children: /* @__PURE__ */ jsx(
    Checkbox$1.Root,
    {
      defaultChecked,
      checked,
      onCheckedChange: setIsChecked,
      disabled,
      required,
      name,
      value,
      asChild: true,
      children: /* @__PURE__ */ jsx(
        motion.button,
        {
          "data-slot": "checkbox",
          whileTap: { scale: 0.95 },
          whileHover: { scale: 1.05 },
          ...props
        }
      )
    }
  ) });
}
function CheckboxIndicator(props) {
  const { isChecked } = useCheckbox();
  return /* @__PURE__ */ jsx(Checkbox$1.Indicator, { forceMount: true, asChild: true, children: /* @__PURE__ */ jsx(
    motion.svg,
    {
      "data-slot": "checkbox-indicator",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "3.5",
      stroke: "currentColor",
      initial: "unchecked",
      animate: isChecked ? "checked" : "unchecked",
      ...props,
      children: isChecked === "indeterminate" ? /* @__PURE__ */ jsx(
        motion.line,
        {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12",
          strokeLinecap: "round",
          initial: { pathLength: 0, opacity: 0 },
          animate: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.2 }
          }
        }
      ) : /* @__PURE__ */ jsx(
        motion.path,
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.5 12.75l6 6 9-13.5",
          variants: {
            checked: {
              pathLength: 1,
              opacity: 1,
              transition: {
                duration: 0.2,
                delay: 0.2
              }
            },
            unchecked: {
              pathLength: 0,
              opacity: 0,
              transition: {
                duration: 0.2
              }
            }
          }
        }
      )
    }
  ) });
}

const ByAuthor = ({
  author,
  createdTime,
  className = ""
}) => {
  if (!author && !createdTime) return null;
  const dateTime = createdTime ? typeof createdTime === "number" ? new Date(createdTime * 1e3) : typeof createdTime === "string" ? new Date(createdTime) : createdTime : null;
  return /* @__PURE__ */ jsxs("div", { className: `flex justify-end items-center space-x-1 text-slate-600 dark:text-slate-400 gap-1 text-xs mb-2 ${className}`, children: [
    author && /* @__PURE__ */ jsxs(Fragment, { children: [
      "By ",
      Array.isArray(author) ? /* @__PURE__ */ jsx(AvatarList, { contributors: author, showLastRating: true }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(MenuAvatar, { src: author?.icon, uri: author?.uri, className: "w-7! h-7!" }),
        author.rating && /* @__PURE__ */ jsx(ProfileRating, { ...author.rating })
      ] })
    ] }),
    dateTime && /* @__PURE__ */ jsx(TimeAgo, { datetime: dateTime })
  ] });
};

const C = memo(function C2({
  id,
  accept,
  onDrop,
  className,
  roundedClassName,
  innerClassName,
  children,
  disabled = false,
  onStateChange
}) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: disabled ? void 0 : (item, monitor) => onDrop(item, monitor),
    canDrop: () => !disabled,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: !disabled && monitor.canDrop()
    })
  });
  useEffect(() => {
    if (onStateChange) {
      onStateChange({ isOver, canDrop });
    }
  }, [isOver, canDrop, onStateChange]);
  const isActive = isOver && canDrop;
  const borderRadiusStyle = roundedClassName ? void 0 : 8;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: drop,
      id,
      className: cn(
        "flex items-center justify-center h-full w-full transition-colors",
        isActive ? "border-2 border-emerald-400/80" : canDrop ? "border-2 border-blue-400/70" : "border-2 border-transparent",
        roundedClassName,
        className
      ),
      "data-testid": id,
      children: /* @__PURE__ */ jsx(
        ElectricBorder,
        {
          color: getAnimationColors("primary").colorFrom,
          speed: 1,
          chaos: 0.5,
          thickness: 2,
          style: { borderRadius: borderRadiusStyle },
          className: cn(
            "w-full h-full flex items-center justify-center px-4 py-2 text-sm",
            roundedClassName,
            innerClassName
          ),
          disabled: !canDrop,
          children
        }
      )
    }
  );
});

async function getVersions(galaxyId) {
  try {
    const result = await actions.getVersionsByGalaxy({ galaxyId });
    return result.data?.versions || [];
  } catch (error) {
    console.error("Error fetching versions:", error);
    return [];
  }
}
async function updateVersionStatus(params) {
  try {
    const result = await actions.updateVersionStatus(params);
    if (result.data?.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error updating version status:", error);
    return false;
  }
}
async function updatePatches(versionId, patches) {
  try {
    const result = await actions.updatePatches({ versionId, patches });
    if (result.data?.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error updating patches:", error);
    return false;
  }
}
async function removePatch(params) {
  try {
    const result = await actions.removePatch(params);
    if (result.data?.success) {
      window.dispatchEvent(new CustomEvent(PATCH_EVENT_TYPES.PATCH_REMOVED, {
        detail: {
          patchId: params.patchId,
          versionId: params.versionId
        }
      }));
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error removing patch:", error);
    return false;
  }
}
async function completePatch(params) {
  try {
    const result = await actions.completePatch(params);
    if (result.data?.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error completing patch:", error);
    return false;
  }
}
async function testPatch(params) {
  try {
    const result = await actions.testPatch(params);
    if (result.data?.success) {
      if (params.tested) {
        const demo = getDemo();
        if (demo.email) {
          await incrementDemoStep({ email: demo.email, expectedStep: 6 });
        }
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error testing patch:", error);
    return false;
  }
}
async function markPatchTested(versionId, patchId, tested) {
  return testPatch({ versionId, patchId, tested });
}
async function releaseVersion(params) {
  try {
    const demo = getDemo();
    if (!demo.email) {
      console.error("No demo email found");
      return false;
    }
    const closeResult = await actions.closeIssuesByVersion({
      versionId: params.versionId,
      email: demo.email
    });
    if (!closeResult.data?.success) {
      console.error("Failed to close issues");
      return false;
    }
    const statusResult = await updateVersionStatus({
      versionId: params.versionId,
      status: "archived"
    });
    if (!statusResult) {
      console.error("Failed to update version status");
      return false;
    }
    const eventDetail = {
      versionId: params.versionId,
      tag: params.tag,
      galaxyId: params.galaxyId
    };
    window.dispatchEvent(new CustomEvent(ROADMAP_EVENT_TYPES.VERSION_RELEASED, {
      detail: eventDetail
    }));
    console.log("incrementing demo step for the 7th step after release version");
    await incrementDemoStep({ email: demo.email, expectedStep: 7 });
    return true;
  } catch (error) {
    console.error("Error releasing version:", error);
    return false;
  }
}

const normalizeStatus = (incoming) => {
  if (incoming === "completed") return "archived";
  if (incoming === "active" || incoming === "planned") return "complete";
  if (incoming === "testing" || incoming === "release" || incoming === "archived") return incoming;
  return "complete";
};
const ProjectVersionPanel = ({
  tag,
  createdTime,
  status: initialStatus,
  patches,
  maintainer,
  galaxy,
  _id: versionId
}) => {
  const [status, setStatus] = useState(normalizeStatus(initialStatus));
  const [loading, setLoading] = useState(false);
  const [patchesList, setPatchesList] = useState(patches);
  const [revertingIssueId, setRevertingIssueId] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [maintainerUser, setMaintainerUser] = useState(null);
  const [isLoadingMaintainer, setIsLoadingMaintainer] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [demoRole, setDemoRole] = useState(null);
  const [totalSunshines, setTotalSunshines] = useState(0);
  const [isLoadingSunshines, setIsLoadingSunshines] = useState(false);
  const [isDraggingFromThisPanel, setIsDraggingFromThisPanel] = useState(false);
  const draggingPatchesCountRef = useRef(0);
  useEffect(() => {
    if (maintainer && typeof maintainer === "string") {
      setIsLoadingMaintainer(true);
      getUserById(maintainer).then((userData) => {
        if (userData) {
          setMaintainerUser(userData);
        }
      }).catch((error) => {
        console.error("Error fetching maintainer:", error);
      }).finally(() => {
        setIsLoadingMaintainer(false);
      });
    } else {
      setMaintainerUser(null);
    }
  }, [maintainer]);
  useEffect(() => {
    if (patchesList.length === 0) {
      setTotalSunshines(0);
      return;
    }
    setIsLoadingSunshines(true);
    const fetchSunshines = async () => {
      try {
        const issuePromises = patchesList.map(
          (patch) => getIssueById(patch.id)
        );
        const results = await Promise.all(issuePromises);
        const total = results.reduce((sum, issue) => {
          if (issue) {
            return sum + (issue.sunshines || 0);
          }
          return sum;
        }, 0);
        setTotalSunshines(total);
      } catch (error) {
        console.error("Error fetching sunshines from patches:", error);
      } finally {
        setIsLoadingSunshines(false);
      }
    };
    fetchSunshines();
  }, [patchesList]);
  const updateCurrentUser = useCallback(() => {
    const demo = getDemo();
    if (!demo) return;
    if (demo.role) {
      setDemoRole(demo.role);
    }
    const selected = demo.users?.find((u) => u.role === demo.role) || demo.users?.[0];
    if (selected?._id) {
      getUserById(selected._id.toString()).then((userData) => {
        if (userData) {
          setCurrentUser(userData);
        }
      }).catch((error) => {
        console.error("Error fetching current user:", error);
      });
    } else {
      setCurrentUser(null);
    }
  }, []);
  useEffect(() => {
    updateCurrentUser();
  }, [updateCurrentUser]);
  useEffect(() => {
    const handleRoleChange = (event) => {
      const customEvent = event;
      const newRole = customEvent.detail.role;
      if (newRole) {
        setDemoRole(newRole);
        updateCurrentUser();
      }
    };
    window.addEventListener(DEMO_EVENT_TYPES.ROLE_CHANGED, handleRoleChange);
    return () => {
      window.removeEventListener(DEMO_EVENT_TYPES.ROLE_CHANGED, handleRoleChange);
    };
  }, [updateCurrentUser]);
  useEffect(() => {
    if (!versionId) return;
    const handlePatchUpdate = (event) => {
      const customEvent = event;
      const { fromVersionId, toVersionId, patch } = customEvent.detail;
      if (fromVersionId === versionId && toVersionId !== versionId) {
        setPatchesList((prevPatches) => prevPatches.filter((p) => p.id !== patch.id));
      } else if (toVersionId === versionId && fromVersionId !== versionId) {
        setPatchesList((prevPatches) => {
          if (prevPatches.some((p) => p.id === patch.id)) {
            return prevPatches;
          }
          return [...prevPatches, patch];
        });
      }
    };
    const handlePatchRemoved = (event) => {
      const customEvent = event;
      const { versionId: eventVersionId, patch } = customEvent.detail;
      if (eventVersionId === versionId) {
        setPatchesList((prevPatches) => prevPatches.filter((p) => p.id !== patch.id));
      }
    };
    window.addEventListener(PATCH_EVENT_TYPES.PATCH_UPDATE, handlePatchUpdate);
    window.addEventListener(PATCH_EVENT_TYPES.PATCH_REMOVED, handlePatchRemoved);
    return () => {
      window.removeEventListener(PATCH_EVENT_TYPES.PATCH_UPDATE, handlePatchUpdate);
      window.removeEventListener(PATCH_EVENT_TYPES.PATCH_REMOVED, handlePatchRemoved);
    };
  }, [versionId]);
  const completedIssues = useMemo(() => patchesList.filter((patch) => patch.completed).length, [patchesList]);
  const testedIssues = useMemo(() => patchesList.filter((patch) => patch.tested).length, [patchesList]);
  const totalIssues = useMemo(() => patchesList.length, [patchesList]);
  const stars = useMemo(() => {
    return totalSunshines > 0 ? totalSunshines / 180 : 0;
  }, [totalSunshines]);
  const getStatusColor = (status2) => {
    switch (status2) {
      case "complete":
        return "bg-blue-100/10 dark:bg-blue-900/20 border-blue-300 dark:border-blue-500/30";
      case "testing":
        return "bg-amber-100/10 dark:bg-amber-900/20 border-amber-300 dark:border-amber-500/30";
      case "release":
        return "bg-teal-100/10 dark:bg-teal-900/20 border-teal-300 dark:border-teal-500/30";
      case "archived":
        return "bg-green-100/10 dark:bg-green-900/20 border-green-300 dark:border-green-500/30";
      default:
        return "bg-slate-100/10 dark:bg-slate-900/20 border-slate-300 dark:border-slate-500/30";
    }
  };
  const authorProfile = useMemo(() => {
    if (!maintainerUser) return void 0;
    return {
      uri: maintainerUser.uri || `/profile/${maintainerUser._id}`,
      children: maintainerUser.nickname || maintainerUser.email?.split("@")[0] || "Unknown",
      icon: maintainerUser.src
    };
  }, [maintainerUser]);
  const currentUserId = currentUser?._id?.toString();
  const maintainerId = typeof maintainer === "string" ? maintainer : maintainerUser?._id?.toString();
  const isMaintainer = useMemo(
    () => demoRole === "maintainer" || currentUserId && maintainerId && currentUserId === maintainerId,
    [demoRole, currentUserId, maintainerId]
  );
  const getStatusText = (status2, readyForRelease2) => {
    switch (status2) {
      case "complete":
        return "Move to testing";
      case "testing":
        return readyForRelease2 ? "Ready to release" : "Testing in progress";
      case "release":
        return "Release";
      case "archived":
        return "Archived";
      default:
        return "Check";
    }
  };
  const hasPatches = totalIssues > 0;
  const allCompleted = hasPatches ? completedIssues === totalIssues : false;
  const allTested = hasPatches ? testedIssues === totalIssues : false;
  const readyForTesting = allCompleted;
  const readyForRelease = allTested;
  const progressLabel = status === "complete" ? "Completed" : "Tested";
  const progressValue = status === "complete" ? completedIssues : testedIssues;
  const maintainerTooltip = maintainerUser ? /* @__PURE__ */ jsxs("div", { className: "text-sm flex items-center gap-2", children: [
    /* @__PURE__ */ jsx("span", { children: "Maintainer" }),
    /* @__PURE__ */ jsx(MenuAvatar, { user: maintainerUser }),
    /* @__PURE__ */ jsx("span", { children: "is reviewing the patches." })
  ] }) : "Maintainer controls this action.";
  const statusButtonTooltip = (() => {
    if (status === "archived") return "Version is archived";
    if (status === "complete") {
      if (!hasPatches) return "No patches found. Add patches first";
      if (!readyForTesting) return "All patches must be completed before testing";
      if (!isMaintainer) return maintainerTooltip;
    }
    if (status === "testing") {
      if (!isMaintainer) return maintainerTooltip;
      if (!readyForRelease) return "Mark every patch as tested to proceed";
    }
    if (status === "release" && !isMaintainer) return maintainerTooltip;
    return void 0;
  })();
  const isStatusButtonDisabled = loading || status === "archived" || status === "complete" && (!isMaintainer || !readyForTesting) || status === "testing" && (!isMaintainer || !readyForRelease) || status === "release" && !isMaintainer;
  const persistStatus = useCallback(async (nextStatus) => {
    if (!versionId) return false;
    setLoading(true);
    try {
      const success = await updateVersionStatus({ versionId, status: nextStatus });
      if (success) {
        if (status === "complete" && nextStatus === "testing") {
          const demo = getDemo();
          if (demo.email) {
            await incrementDemoStep({ email: demo.email, expectedStep: 5 });
          }
        }
        setStatus(nextStatus);
        return true;
      }
      console.error("Error updating status");
      return false;
    } catch (error) {
      console.error("Error calling API:", error);
      return false;
    } finally {
      setLoading(false);
    }
  }, [versionId]);
  const handleStatusUpdate = async () => {
    if (loading || !versionId) return;
    if (status === "archived") return;
    if (status === "complete") {
      if (!isMaintainer || !readyForTesting) return;
      await persistStatus("testing");
      return;
    }
    if (status === "testing") {
      if (!isMaintainer || !readyForRelease) return;
      await persistStatus("release");
      return;
    }
    if (status === "release") {
      if (!isMaintainer || !versionId) return;
      await releaseVersion({
        versionId,
        tag,
        galaxyId: galaxy
      });
      return;
    }
  };
  useEffect(() => {
    if (status === "testing" && readyForRelease && !loading && isMaintainer) {
      persistStatus("release");
    }
  }, [status, readyForRelease, loading, isMaintainer, persistStatus]);
  const changePatchList = async (item, versionId2, completed = false) => {
    try {
      const demo = getDemo();
      if (!demo.email) {
        console.error("No demo email found");
        return;
      }
      const issue = await getIssueById(item.id);
      if (!issue) {
        alert("Internal error: issue not found");
        return;
      }
      const originalListHistory = issue.listHistory || [];
      const hadPatcher = originalListHistory.includes(PATCH_KEYWORD);
      const versionPrefix = originalListHistory.find((key) => key.startsWith("version-"));
      const fromVersionId = versionPrefix ? versionPrefix.replace("version-", "") : "";
      const filteredListHistory = originalListHistory.filter(
        (key) => key !== PATCH_KEYWORD && !key.startsWith("version-")
      );
      const newListHistory = [...filteredListHistory, `version-${versionId2}`];
      const updateSuccess = await updateIssue({
        issueId: item.id,
        email: demo.email,
        listHistory: newListHistory
      });
      if (!updateSuccess) {
        console.error("Failed to update issue");
        return;
      }
      const currentPatches = patchesList;
      const updatedPatches = currentPatches.filter((patch) => patch.id !== item.id);
      const newPatch = {
        id: item.id,
        title: item.title,
        completed,
        tested: false,
        sunshines: item.sunshines
      };
      updatedPatches.push(newPatch);
      await updatePatches(versionId2, updatedPatches);
      if (fromVersionId) {
        await removePatch({
          patchId: item.id,
          versionId: fromVersionId
        });
      }
      setPatchesList(updatedPatches);
      if (hadPatcher) {
        window.dispatchEvent(new CustomEvent(PATCH_EVENT_TYPES.PATCH_CREATED, {
          detail: {
            patch: newPatch,
            versionId: versionId2
          }
        }));
      } else if (fromVersionId) {
        window.dispatchEvent(new CustomEvent(PATCH_EVENT_TYPES.PATCH_UPDATE, {
          detail: {
            fromVersionId,
            toVersionId: versionId2,
            patch: newPatch
          }
        }));
      }
    } catch (error) {
      console.error("Error changing patch list:", error);
    }
  };
  const MinimalDraggablePatch = memo(({ patch }) => {
    const [patchCompleted, setPatchCompleted] = useState(patch.completed || false);
    const [issue, setIssue] = useState(null);
    const [currentUser2, setCurrentUser2] = useState(null);
    const [contributorUser, setContributorUser] = useState(null);
    const [maintainerUser2, setMaintainerUser2] = useState(null);
    const [isLoadingIssue, setIsLoadingIssue] = useState(false);
    const [isToggling, setIsToggling] = useState(false);
    const [{ opacity, isDragging }, drag] = useDrag(
      () => ({
        type: "patch",
        item: { id: patch.id, title: patch.title, sunshines: patch.sunshines, versionId: versionId || "", completed: patchCompleted },
        collect: (monitor) => ({
          opacity: monitor.isDragging() ? 0.4 : 1,
          isDragging: monitor.isDragging()
        })
      }),
      [patch.id, patch.title, patch.sunshines, versionId, patchCompleted]
    );
    useEffect(() => {
      setPatchCompleted(patch.completed || false);
    }, [patch.completed]);
    useEffect(() => {
      setIsLoadingIssue(true);
      getIssueById(patch.id).then((issueData) => {
        if (issueData) {
          setIssue(issueData);
        }
      }).catch((error) => {
        console.error("Error fetching issue:", error);
      }).finally(() => {
        setIsLoadingIssue(false);
      });
    }, [patch.id]);
    useEffect(() => {
      const demo = getDemo();
      if (demo.email && demo.users && demo.role) {
        const user = demo.users.find((u) => u.role === demo.role) || demo.users[0];
        if (user && user._id) {
          getUserById(user._id.toString()).then((userData) => {
            if (userData) {
              setCurrentUser2(userData);
            }
          }).catch((error) => {
            console.error("Error fetching current user:", error);
          });
        }
      }
    }, []);
    useEffect(() => {
      if (issue?.contributor && typeof issue.contributor === "string") {
        getUserById(issue.contributor).then((userData) => {
          if (userData) {
            setContributorUser(userData);
          }
        }).catch((error) => {
          console.error("Error fetching contributor:", error);
        });
      } else {
        setContributorUser(null);
      }
    }, [issue?.contributor]);
    useEffect(() => {
      if (issue?.maintainer && typeof issue.maintainer === "string") {
        getUserById(issue.maintainer).then((userData) => {
          if (userData) {
            setMaintainerUser2(userData);
          }
        }).catch((error) => {
          console.error("Error fetching maintainer:", error);
        });
      } else {
        setMaintainerUser2(null);
      }
    }, [issue?.maintainer]);
    useEffect(() => {
      if (isDragging) {
        draggingPatchesCountRef.current += 1;
        setIsDraggingFromThisPanel(true);
      } else {
        draggingPatchesCountRef.current = Math.max(0, draggingPatchesCountRef.current - 1);
        if (draggingPatchesCountRef.current === 0) {
          setIsDraggingFromThisPanel(false);
        }
      }
    }, [isDragging]);
    const togglePatchCompletion = async () => {
      if (isToggling || !versionId) return;
      setIsToggling(true);
      try {
        const newCompleted = !patchCompleted;
        const success = await completePatch({
          versionId,
          patchId: patch.id,
          complete: newCompleted
        });
        if (success) {
          setPatchCompleted(newCompleted);
          setPatchesList(
            (prevPatches) => prevPatches.map(
              (p) => p.id === patch.id ? { ...p, completed: newCompleted } : p
            )
          );
        } else {
          console.error("Error toggling patch completion");
        }
      } catch (error) {
        console.error("Error calling completePatch:", error);
      } finally {
        setIsToggling(false);
      }
    };
    const isContributor = currentUser2 && issue?.contributor && currentUser2._id === issue.contributor;
    const isMaintainer2 = currentUser2 && issue?.maintainer && currentUser2._id === issue.maintainer;
    const isCheckboxDisabled = !(patchCompleted && (isMaintainer2 || isContributor) || !patchCompleted && isContributor);
    const getTooltipContent = () => {
      if (isLoadingIssue) {
        return /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Loading..." });
      }
      if (!issue) {
        return /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Issue not found" });
      }
      if (issue.contributor === currentUser2?._id && !patchCompleted) {
        return /* @__PURE__ */ jsx("div", { className: "text-sm", children: "You are a contributor. Mark as completed." });
      }
      if (issue.contributor !== currentUser2?._id && !patchCompleted) {
        return /* @__PURE__ */ jsxs("div", { className: "text-sm flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { children: "contributor" }),
          contributorUser && /* @__PURE__ */ jsx(MenuAvatar, { user: contributorUser }),
          /* @__PURE__ */ jsx("span", { children: "is working on this issue :)" })
        ] });
      }
      if (patchCompleted && (issue.maintainer === currentUser2?._id || issue.contributor === currentUser2?._id)) {
        return /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Unmark if the issue isn't solved" });
      }
      if (patchCompleted && issue.maintainer !== currentUser2?._id && issue.contributor !== currentUser2?._id) {
        return /* @__PURE__ */ jsxs("div", { className: "text-sm flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { children: "contributor" }),
          contributorUser && /* @__PURE__ */ jsx(MenuAvatar, { user: contributorUser }),
          /* @__PURE__ */ jsx("span", { children: "worked." }),
          /* @__PURE__ */ jsx("span", { children: "maintainer" }),
          maintainerUser2 && /* @__PURE__ */ jsx(MenuAvatar, { user: maintainerUser2 }),
          /* @__PURE__ */ jsx("span", { children: "reviewed." })
        ] });
      }
      return /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Patch completion status" });
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: drag,
        "data-testid": patch.id,
        style: { opacity },
        className: cn(
          "cursor-move border-1 border-amber-300/80 hover:border-amber-400",
          "dark:border-amber-400/70 dark:hover:border-amber-300/90",
          "bg-amber-50/50 dark:bg-amber-900/20",
          "transition-colors p-2 border-dashed rounded-md",
          "flex items-center justify-between gap-2"
        ),
        children: [
          /* @__PURE__ */ jsx(Component, { content: getTooltipContent(), children: /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: patchCompleted,
              disabled: isCheckboxDisabled || status !== "complete" || isToggling,
              onCheckedChange: togglePatchCompletion,
              className: "w-4 h-4 rounded-sm border-2 border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-600 data-[state=checked]:bg-slate-600 dark:data-[state=checked]:bg-slate-400 data-[state=checked]:border-slate-600 dark:data-[state=checked]:border-slate-400 flex items-center justify-center",
              children: /* @__PURE__ */ jsx(CheckboxIndicator, { className: "w-3 h-3 text-white dark:text-slate-700" })
            }
          ) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-700 dark:text-slate-300 flex-1 truncate", children: truncateStr(patch.title) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-amber-600 dark:text-amber-400", children: [
            getIcon({ iconType: "sunshine", className: "w-4 h-4", fill: "currentColor" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold", children: /* @__PURE__ */ jsx(
              NumberFlow,
              {
                value: patch.sunshines || 0,
                locales: "en-US",
                format: { useGrouping: false }
              }
            ) })
          ] })
        ]
      }
    );
  });
  MinimalDraggablePatch.displayName = "MinimalDraggablePatch";
  const MinimalTestablePatch = memo(({ patch }) => {
    const [isTested, setIsTested] = useState(!!patch.tested);
    const [issue, setIssue] = useState(null);
    const [authorUser, setAuthorUser] = useState(null);
    const [isLoadingIssue, setIsLoadingIssue] = useState(false);
    const [isToggling, setIsToggling] = useState(false);
    useEffect(() => {
      setIsLoadingIssue(true);
      getIssueById(patch.id).then((issueData) => {
        if (issueData) {
          setIssue(issueData);
        }
      }).catch((error) => {
        console.error("Error fetching issue:", error);
      }).finally(() => setIsLoadingIssue(false));
    }, [patch.id]);
    useEffect(() => {
      if (issue?.author && typeof issue.author === "string") {
        getUserById(issue.author).then((userData) => {
          if (userData) {
            setAuthorUser(userData);
          }
        }).catch((error) => console.error("Error fetching author:", error));
      }
    }, [issue?.author]);
    const isAuthor = currentUserId && issue?.author && currentUserId === issue.author;
    const toggleTested = async () => {
      if (isToggling || status !== "testing" || !isAuthor || !versionId) return;
      setIsToggling(true);
      const next = !isTested;
      try {
        const ok = await markPatchTested(versionId, patch.id, next);
        if (ok) {
          setIsTested(next);
          setPatchesList(
            (prev) => prev.map((p) => p.id === patch.id ? { ...p, tested: next } : p)
          );
        }
      } catch (error) {
        console.error("Error marking tested:", error);
      } finally {
        setIsToggling(false);
      }
    };
    const getTooltipContent = () => {
      if (isLoadingIssue) return /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Loading..." });
      if (!issue) return /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Issue not found" });
      if (!isAuthor) {
        return /* @__PURE__ */ jsxs("div", { className: "text-sm flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { children: "Only author" }),
          authorUser && /* @__PURE__ */ jsx(MenuAvatar, { user: authorUser }),
          /* @__PURE__ */ jsx("span", { children: "can mark tested" })
        ] });
      }
      if (isAuthor && !isTested) return /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Confirm this patch is tested" });
      if (isAuthor && isTested) return /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Unmark if testing failed" });
      return /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Testing status" });
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "border-1 border-amber-300/80 dark:border-amber-400/70 bg-amber-50/50 dark:bg-amber-900/20",
          "transition-colors p-2 border-dashed rounded-md",
          "flex items-center justify-between gap-2"
        ),
        children: [
          /* @__PURE__ */ jsx(Component, { content: getTooltipContent(), children: /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: isTested,
              disabled: !isAuthor || isToggling || status !== "testing",
              onCheckedChange: toggleTested,
              className: "w-4 h-4 rounded-sm border-2 border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-600 data-[state=checked]:bg-teal-600 dark:data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-600 dark:data-[state=checked]:border-teal-400 flex items-center justify-center",
              children: /* @__PURE__ */ jsx(CheckboxIndicator, { className: "w-3 h-3 text-white dark:text-slate-700" })
            }
          ) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-700 dark:text-slate-300 flex-1 truncate", children: truncateStr(patch.title) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-amber-600 dark:text-amber-400", children: [
            getIcon({ iconType: "sunshine", className: "w-4 h-4", fill: "currentColor" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold", children: /* @__PURE__ */ jsx(
              NumberFlow,
              {
                value: patch.sunshines || 0,
                locales: "en-US",
                format: { useGrouping: false }
              }
            ) })
          ] })
        ]
      }
    );
  });
  MinimalTestablePatch.displayName = "MinimalTestablePatch";
  const MinimalStaticPatch = memo(({ patch }) => {
    const badgeText = patch.tested ? "Tested" : patch.completed ? "Completed" : "Pending";
    const badgeColor = patch.tested ? "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-200" : patch.completed ? "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200" : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200";
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "cursor-not-allowed border border-dashed rounded-md p-2",
          "bg-slate-50/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-600/70",
          "flex items-center justify-between gap-2"
        ),
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wide", children: /* @__PURE__ */ jsx("span", { className: cn("px-2 py-0.5 rounded-sm font-semibold", badgeColor), children: badgeText }) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-700 dark:text-slate-300 flex-1 truncate", children: truncateStr(patch.title) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-amber-600 dark:text-amber-400", children: [
            getIcon({ iconType: "sunshine", className: "w-4 h-4", fill: "currentColor" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold", children: /* @__PURE__ */ jsx(
              NumberFlow,
              {
                value: patch.sunshines || 0,
                locales: "en-US",
                format: { useGrouping: false }
              }
            ) })
          ] })
        ]
      }
    );
  });
  MinimalStaticPatch.displayName = "MinimalStaticPatch";
  return /* @__PURE__ */ jsxs(
    PageLikePanel,
    {
      interactive: false,
      title: tag,
      rightHeader: status !== "archived" && (() => {
        const button = /* @__PURE__ */ jsx(
          Button,
          {
            variant: status === "release" && !isStatusButtonDisabled ? "primary" : "secondary",
            disabled: isStatusButtonDisabled,
            onClick: handleStatusUpdate,
            children: loading ? /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx(LoadingSpinner, {}) }) : getStatusText(status, readyForRelease)
          }
        );
        return statusButtonTooltip ? /* @__PURE__ */ jsx(Component, { content: statusButtonTooltip, children: button }) : button;
      })(),
      className: `w-full ${getStatusColor(status)} mb-4`,
      children: [
        status !== "archived" && /* @__PURE__ */ jsxs("div", { className: "w-full p-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex flex-row items-center gap-2",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-slate-500 dark:text-slate-400 text-sm", children: progressLabel }),
                  /* @__PURE__ */ jsx(
                    NumberFlow,
                    {
                      value: progressValue,
                      locales: "en-US",
                      format: { useGrouping: false },
                      className: "font-semibold text-slate-700 dark:text-slate-400 text-sm mb-0.2"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex flex-row items-center gap-2",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-slate-500 dark:text-slate-400 text-sm", children: "Total Amount" }),
                  /* @__PURE__ */ jsx(
                    NumberFlow,
                    {
                      value: totalIssues,
                      locales: "en-US",
                      format: { useGrouping: false },
                      className: "font-semibold text-slate-700 dark:text-slate-400 text-sm mb-0.2"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "my-2", children: /* @__PURE__ */ jsxs(
            RadixSlider.Root,
            {
              value: [progressValue],
              onValueChange: () => {
              },
              max: totalIssues,
              min: 0,
              step: 1,
              className: "relative flex h-5 w-full touch-none select-none items-center",
              children: [
                /* @__PURE__ */ jsx(RadixSlider.Track, { className: "relative h-2 grow rounded-full bg-slate-200 dark:bg-slate-700 transition-colors", children: /* @__PURE__ */ jsx(RadixSlider.Range, { className: "absolute h-full rounded-full bg-slate-600 dark:bg-teal-400/50 transition-all duration-300 ease-out" }) }),
                /* @__PURE__ */ jsx(RadixSlider.Thumb, { className: "relative block h-5 w-5 rounded-full bg-gray-100/50 dark:bg-slate-400/80 shadow-md ring-2 ring-slate-400/20 dark:ring-slate-500/30 hover:ring-slate-500/40 dark:hover:ring-slate-400/50 transition-all focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400", children: /* @__PURE__ */ jsx(
                  NumberFlow,
                  {
                    value: progressValue,
                    locales: "en-US",
                    format: { useGrouping: false },
                    className: "absolute left-1/2 -translate-x-1/2 text-xs text-slate-600 dark:text-slate-700 font-semibold"
                  }
                ) })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "my-6", children: [
          status === "complete" ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Component, { content: "Patches are the issues with the contributor and common agreement.", children: /* @__PURE__ */ jsx(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ jsx(
              C,
              {
                id: `version-${versionId || "unknown"}`,
                accept: ["patch", "issue"],
                onDrop: (item) => {
                  if (!versionId) return;
                  const completed = item.completed !== void 0 ? item.completed : false;
                  changePatchList(item, versionId, completed);
                },
                disabled: isDraggingFromThisPanel,
                children: /* @__PURE__ */ jsxs("h4", { className: "text-sm mb-2 font-medium text-slate-700 dark:text-slate-400 flex items-center gap-1.5 cursor-help", children: [
                  getIcon({ iconType: "info", className: "w-4 h-4 text-slate-500 dark:text-slate-400" }),
                  "Patches"
                ] })
              }
            ) }, versionId) }),
            /* @__PURE__ */ jsx(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ jsx("ul", { className: "space-y-2 min-h-[100px] mb-2", children: patchesList.map((patch) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(MinimalDraggablePatch, { patch }) }, patch.id)) }) }, `${versionId}-draggable`)
          ] }) : status === "testing" ? /* @__PURE__ */ jsx("ul", { className: "space-y-2 min-h-[100px] mb-2", children: patchesList.map((patch) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(MinimalTestablePatch, { patch }) }, patch.id)) }) : /* @__PURE__ */ jsx("ul", { className: "space-y-2 min-h-[100px] mb-2", children: patchesList.map((patch) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(MinimalStaticPatch, { patch }) }, patch.id)) }),
          notificationMessage && /* @__PURE__ */ jsx("div", { className: "mt-4 p-3 bg-green-50/10 border border-green-200 dark:border-green-700 rounded-xs text-green-700 dark:text-green-400 text-sm", children: notificationMessage }),
          /* @__PURE__ */ jsx(ByAuthor, { author: authorProfile, createdTime })
        ] }),
        /* @__PURE__ */ jsxs(PanelFooter, { children: [
          /* @__PURE__ */ jsx(
            Followings,
            {
              iconType: "sunshine",
              hint: "Total sunshines from all patches",
              fill: true,
              children: isLoadingSunshines ? /* @__PURE__ */ jsx(LoadingSpinner, {}) : /* @__PURE__ */ jsx(
                NumberFlow,
                {
                  value: totalSunshines,
                  locales: "en-US",
                  format: { useGrouping: true }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Followings,
            {
              iconType: status === "archived" ? "star" : "star",
              hint: "Stars calculated from sunshines (sunshines / 180)",
              fill: status === "archived",
              children: isLoadingSunshines ? /* @__PURE__ */ jsx(LoadingSpinner, {}) : /* @__PURE__ */ jsx(
                NumberFlow,
                {
                  value: stars,
                  locales: "en-US",
                  format: {
                    useGrouping: false,
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Followings,
            {
              iconType: status === "archived" ? "star" : "project",
              hint: "Version status",
              fill: status === "archived",
              children: status === "archived" ? "Archived" : status
            }
          )
        ] })
      ]
    }
  );
};

const RoadmapPanel = ({ versions }) => {
  return /* @__PURE__ */ jsx(BasePanel, { className: "space-y-6 p-0! border-none! min-h-[50vh]", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-4", children: versions.map(
    (version) => /* @__PURE__ */ jsx(ProjectVersionPanel, { ...version }, version._id)
  ) }) });
};

const RoadmapTabs = ({ galaxyId }) => {
  const [allVersions, setAllVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchVersions = useCallback(async () => {
    try {
      setLoading(true);
      const versions2 = await getVersions(galaxyId);
      setAllVersions(versions2);
    } catch (error) {
      console.error("Error fetching versions:", error);
    } finally {
      setLoading(false);
    }
  }, [galaxyId]);
  useEffect(() => {
    if (galaxyId) {
      fetchVersions();
    }
  }, [galaxyId, fetchVersions]);
  useEffect(() => {
    const handleVersionCreated = () => {
      fetchVersions();
    };
    window.addEventListener(ROADMAP_EVENT_TYPES.VERSION_CREATED, handleVersionCreated);
    return () => {
      window.removeEventListener(ROADMAP_EVENT_TYPES.VERSION_CREATED, handleVersionCreated);
    };
  }, [fetchVersions]);
  const versions = allVersions.filter((v) => v.status !== "archived");
  const archive = allVersions.filter((v) => v.status === "archived");
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-8", children: "Loading roadmap..." });
  }
  const tabs = [
    {
      label: /* @__PURE__ */ jsxs("div", { className: "", children: [
        "Roadmap ",
        /* @__PURE__ */ jsx(Badge, { variant: "gray", children: versions.length })
      ] }),
      key: "roadmap",
      content: /* @__PURE__ */ jsx(RoadmapPanel, { versions })
    },
    {
      label: /* @__PURE__ */ jsxs("div", { className: "", children: [
        "Archive ",
        /* @__PURE__ */ jsx(Badge, { variant: "gray", children: archive.length })
      ] }),
      key: "archive",
      content: /* @__PURE__ */ jsx(RoadmapPanel, { versions: archive })
    }
  ];
  return /* @__PURE__ */ jsx(C$1, { activeTab: "roadmap", tabs });
};

const $$Astro = createAstro();
const $$Roadmap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Roadmap;
  const galaxyIdParam = Astro2.url.searchParams.get("galaxy");
  if (!galaxyIdParam) {
    return Astro2.redirect("/project/404?method=getGalaxyParam");
  }
  try {
    new ObjectId(galaxyIdParam);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelViewLayout, { "hideLinks": Object.keys(MenuName) }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "RoadmapTabs", RoadmapTabs, { "slot": "center", "galaxyId": galaxyIdParam, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/roadmap/RoadmapTabs", "client:component-export": "default" })}${renderComponent($$result2, "CreateVersionCTA", null, { "slot": "center", "galaxyId": galaxyIdParam, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/roadmap/CreateVersionCTA", "client:component-export": "default" })}${renderComponent($$result2, "VersionSolarForge", null, { "slot": "center", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/roadmap/VersionSolarForge", "client:component-export": "default" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "MenuPanel", Panel, { "activeMenuItem": "roadmap", "slot": "left", "galaxy": galaxy, "projectIcon": project.socialLinks?.find((link) => link.type === "project")?.uri, "projectName": galaxy.name, "starCount": galaxy.stars })}`, "right": async ($$result2) => renderTemplate`${renderComponent($$result2, "PatcherPanel", null, { "slot": "right", "client:only": "react", "galaxyId": galaxyIdParam, "client:component-hydration": "only", "client:component-path": "@/components/roadmap/PatcherPanel", "client:component-export": "default" })}` })}`;
}, "/home/medet/ara-app/src/pages/project/roadmap.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/project/roadmap.astro";
const $$url = "/project/roadmap";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Roadmap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
