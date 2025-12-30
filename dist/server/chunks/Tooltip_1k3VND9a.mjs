import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import React__default from 'react';
import * as motion from 'motion/react-client';
import { isMotionComponent, motion as motion$1, LayoutGroup, AnimatePresence } from 'motion/react';
import { FloatingArrow, useFloating, offset, flip, shift, arrow, autoUpdate, FloatingPortal } from '@floating-ui/react';
import { c as cn } from './Analytics_DTGhDLP0.mjs';

function getStrictContext(name) {
  const Context = React.createContext(void 0);
  const Provider = ({
    value,
    children
  }) => /* @__PURE__ */ jsx(Context.Provider, { value, children });
  const useSafeContext = () => {
    const ctx = React.useContext(Context);
    if (ctx === void 0) {
      throw new Error(`useContext must be used within ${name ?? "a Provider"}`);
    }
    return ctx;
  };
  return [Provider, useSafeContext];
}

function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
      } else {
        ref.current = node;
      }
    });
  };
}
function mergeProps(childProps, slotProps) {
  const merged = { ...childProps, ...slotProps };
  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className,
      slotProps.className
    );
  }
  if (childProps.style || slotProps.style) {
    merged.style = {
      ...childProps.style,
      ...slotProps.style
    };
  }
  return merged;
}
function Slot({
  children,
  ref,
  ...props
}) {
  const isAlreadyMotion = typeof children.type === "object" && children.type !== null && isMotionComponent(children.type);
  const Base = React.useMemo(
    () => isAlreadyMotion ? children.type : motion$1.create(children.type),
    [isAlreadyMotion, children.type]
  );
  if (!React.isValidElement(children)) return null;
  const { ref: childRef, ...childProps } = children.props;
  const mergedProps = mergeProps(childProps, props);
  return /* @__PURE__ */ jsx(Base, { ...mergedProps, ref: mergeRefs(childRef, ref) });
}

const [GlobalTooltipProvider, useGlobalTooltip] = getStrictContext("GlobalTooltipProvider");
const [LocalTooltipProvider, useTooltip] = getStrictContext(
  "LocalTooltipProvider"
);
function getResolvedSide(placement) {
  if (placement.includes("-")) {
    return placement.split("-")[0];
  }
  return placement;
}
function initialFromSide(side) {
  if (side === "top") return { y: 15 };
  if (side === "bottom") return { y: -15 };
  if (side === "left") return { x: 15 };
  return { x: -15 };
}
function TooltipProvider$1({
  children,
  id,
  openDelay = 700,
  closeDelay = 300,
  transition = { type: "spring", stiffness: 300, damping: 35 }
}) {
  const globalId = React.useId();
  const [currentTooltip, setCurrentTooltip] = React.useState(null);
  const timeoutRef = React.useRef(null);
  const lastCloseTimeRef = React.useRef(0);
  const referenceElRef = React.useRef(null);
  const showTooltip = React.useCallback(
    (data) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (currentTooltip !== null) {
        setCurrentTooltip(data);
        return;
      }
      const now = Date.now();
      const delay = now - lastCloseTimeRef.current < closeDelay ? 0 : openDelay;
      timeoutRef.current = window.setTimeout(
        () => setCurrentTooltip(data),
        delay
      );
    },
    [openDelay, closeDelay, currentTooltip]
  );
  const hideTooltip = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrentTooltip(null);
      lastCloseTimeRef.current = Date.now();
    }, closeDelay);
  }, [closeDelay]);
  const hideImmediate = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrentTooltip(null);
    lastCloseTimeRef.current = Date.now();
  }, []);
  const setReferenceEl = React.useCallback((el) => {
    referenceElRef.current = el;
  }, []);
  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") hideImmediate();
    };
    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("scroll", hideImmediate, true);
    window.addEventListener("resize", hideImmediate, true);
    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("scroll", hideImmediate, true);
      window.removeEventListener("resize", hideImmediate, true);
    };
  }, [hideImmediate]);
  return /* @__PURE__ */ jsxs(
    GlobalTooltipProvider,
    {
      value: {
        showTooltip,
        hideTooltip,
        hideImmediate,
        currentTooltip,
        transition,
        globalId: id ?? globalId,
        setReferenceEl,
        referenceElRef
      },
      children: [
        /* @__PURE__ */ jsx(LayoutGroup, { children }),
        /* @__PURE__ */ jsx(TooltipOverlay, {})
      ]
    }
  );
}
const [RenderedTooltipProvider, useRenderedTooltip] = getStrictContext("RenderedTooltipContext");
const [FloatingProvider, useFloatingContext] = getStrictContext("FloatingContext");
const MotionTooltipArrow = motion$1.create(FloatingArrow);
function TooltipArrow({
  ref,
  withTransition = true,
  ...props
}) {
  const { side, align, open } = useRenderedTooltip();
  const { context, arrowRef } = useFloatingContext();
  const { transition, globalId } = useGlobalTooltip();
  React.useImperativeHandle(ref, () => arrowRef.current);
  const deg = { top: 0, right: 90, bottom: 180, left: -90 }[side];
  return /* @__PURE__ */ jsx(
    MotionTooltipArrow,
    {
      ref: arrowRef,
      context,
      "data-state": open ? "open" : "closed",
      "data-side": side,
      "data-align": align,
      "data-slot": "tooltip-arrow",
      style: { rotate: deg },
      layoutId: withTransition ? `tooltip-arrow-${globalId}` : void 0,
      transition: withTransition ? transition : void 0,
      ...props
    }
  );
}
function TooltipPortal(props) {
  return /* @__PURE__ */ jsx(FloatingPortal, { ...props });
}
function TooltipOverlay() {
  const { currentTooltip, transition, globalId, referenceElRef } = useGlobalTooltip();
  const [rendered, setRendered] = React.useState({ data: null, open: false });
  const arrowRef = React.useRef(null);
  const side = rendered.data?.side ?? "top";
  const align = rendered.data?.align ?? "center";
  const { refs, x, y, strategy, context, update } = useFloating({
    placement: align === "center" ? side : `${side}-${align}`,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({
        mainAxis: rendered.data?.sideOffset ?? 0,
        crossAxis: rendered.data?.alignOffset ?? 0
      }),
      flip(),
      shift({ padding: 8 }),
      arrow({ element: arrowRef })
    ]
  });
  React.useEffect(() => {
    if (currentTooltip) {
      setRendered({ data: currentTooltip, open: true });
    } else {
      setRendered((p) => p.data ? { ...p, open: false } : p);
    }
  }, [currentTooltip]);
  React.useLayoutEffect(() => {
    if (referenceElRef.current) {
      refs.setReference(referenceElRef.current);
      update();
    }
  }, [referenceElRef, refs, update, rendered.data]);
  const ready = x != null && y != null;
  const Component = rendered.data?.contentAsChild ? Slot : motion$1.div;
  const resolvedSide = getResolvedSide(context.placement);
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: rendered.data && ready && /* @__PURE__ */ jsx(TooltipPortal, { children: /* @__PURE__ */ jsx(
    "div",
    {
      ref: refs.setFloating,
      "data-slot": "tooltip-overlay",
      "data-side": resolvedSide,
      "data-align": rendered.data.align,
      "data-state": rendered.open ? "open" : "closed",
      style: {
        position: strategy,
        top: 0,
        left: 0,
        zIndex: 50,
        transform: `translate3d(${x}px, ${y}px, 0)`
      },
      children: /* @__PURE__ */ jsx(FloatingProvider, { value: { context, arrowRef }, children: /* @__PURE__ */ jsx(
        RenderedTooltipProvider,
        {
          value: {
            side: resolvedSide,
            align: rendered.data.align,
            open: rendered.open
          },
          children: /* @__PURE__ */ jsx(
            Component,
            {
              "data-slot": "tooltip-content",
              "data-side": resolvedSide,
              "data-align": rendered.data.align,
              "data-state": rendered.open ? "open" : "closed",
              layoutId: `tooltip-content-${globalId}`,
              initial: {
                opacity: 0,
                scale: 0,
                ...initialFromSide(rendered.data.side)
              },
              animate: rendered.open ? { opacity: 1, scale: 1, x: 0, y: 0 } : {
                opacity: 0,
                scale: 0,
                ...initialFromSide(rendered.data.side)
              },
              exit: {
                opacity: 0,
                scale: 0,
                ...initialFromSide(rendered.data.side)
              },
              onAnimationComplete: () => {
                if (!rendered.open)
                  setRendered({ data: null, open: false });
              },
              transition,
              ...rendered.data.contentProps,
              style: {
                position: "relative",
                ...rendered.data.contentProps?.style || {}
              }
            }
          )
        }
      ) })
    }
  ) }) });
}
function Tooltip$1({
  children,
  side = "top",
  sideOffset = 0,
  align = "center",
  alignOffset = 0
}) {
  const id = React.useId();
  const [props, setProps] = React.useState({});
  const [asChild, setAsChild] = React.useState(false);
  return /* @__PURE__ */ jsx(
    LocalTooltipProvider,
    {
      value: {
        props,
        setProps,
        asChild,
        setAsChild,
        side,
        sideOffset,
        align,
        alignOffset,
        id
      },
      children
    }
  );
}
function shallowEqualWithoutChildren(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  const keysA = Object.keys(a).filter((k) => k !== "children");
  const keysB = Object.keys(b).filter((k) => k !== "children");
  if (keysA.length !== keysB.length) return false;
  for (const k of keysA) {
    if (a[k] !== b[k]) return false;
  }
  return true;
}
function TooltipContent$1({ asChild = false, ...props }) {
  const { setProps, setAsChild } = useTooltip();
  const lastPropsRef = React.useRef(
    void 0
  );
  React.useEffect(() => {
    if (!shallowEqualWithoutChildren(lastPropsRef.current, props)) {
      lastPropsRef.current = props;
      setProps(props);
    }
  }, [props, setProps]);
  React.useEffect(() => {
    setAsChild(asChild);
  }, [asChild, setAsChild]);
  return null;
}
function TooltipTrigger$1({
  ref,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onPointerDown,
  asChild = false,
  ...props
}) {
  const {
    props: contentProps,
    asChild: contentAsChild,
    side,
    sideOffset,
    align,
    alignOffset,
    id
  } = useTooltip();
  const {
    showTooltip,
    hideTooltip,
    hideImmediate,
    currentTooltip,
    setReferenceEl
  } = useGlobalTooltip();
  const triggerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => triggerRef.current);
  const suppressNextFocusRef = React.useRef(false);
  const handleOpen = React.useCallback(() => {
    if (!triggerRef.current) return;
    setReferenceEl(triggerRef.current);
    const rect = triggerRef.current.getBoundingClientRect();
    showTooltip({
      contentProps,
      contentAsChild,
      rect,
      side,
      sideOffset,
      align,
      alignOffset,
      id
    });
  }, [
    showTooltip,
    setReferenceEl,
    contentProps,
    contentAsChild,
    side,
    sideOffset,
    align,
    alignOffset,
    id
  ]);
  const handlePointerDown = React.useCallback(
    (e) => {
      onPointerDown?.(e);
      if (currentTooltip?.id === id) {
        suppressNextFocusRef.current = true;
        hideImmediate();
        Promise.resolve().then(() => {
          suppressNextFocusRef.current = false;
        });
      }
    },
    [onPointerDown, currentTooltip?.id, id, hideImmediate]
  );
  const handleMouseEnter = React.useCallback(
    (e) => {
      onMouseEnter?.(e);
      handleOpen();
    },
    [handleOpen, onMouseEnter]
  );
  const handleMouseLeave = React.useCallback(
    (e) => {
      onMouseLeave?.(e);
      hideTooltip();
    },
    [hideTooltip, onMouseLeave]
  );
  const handleFocus = React.useCallback(
    (e) => {
      onFocus?.(e);
      if (suppressNextFocusRef.current) return;
      handleOpen();
    },
    [handleOpen, onFocus]
  );
  const handleBlur = React.useCallback(
    (e) => {
      onBlur?.(e);
      hideTooltip();
    },
    [hideTooltip, onBlur]
  );
  const Component = asChild ? Slot : motion$1.div;
  return /* @__PURE__ */ jsx(
    Component,
    {
      ref: triggerRef,
      onPointerDown: handlePointerDown,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocus: handleFocus,
      onBlur: handleBlur,
      "data-slot": "tooltip-trigger",
      "data-side": side,
      "data-align": align,
      "data-state": currentTooltip?.id === id ? "open" : "closed",
      ...props
    }
  );
}

function TooltipProvider({ openDelay = 0, ...props }) {
  return /* @__PURE__ */ jsx(TooltipProvider$1, { openDelay, ...props });
}
function Tooltip({ sideOffset = 10, ...props }) {
  return /* @__PURE__ */ jsx(Tooltip$1, { sideOffset, ...props });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(TooltipTrigger$1, { ...props });
}
function TooltipContent({
  className,
  children,
  layout = "preserve-aspect",
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    TooltipContent$1,
    {
      className: cn(
        "z-50 w-fit rounded-md",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(motion.div, { className: "overflow-hidden px-3 py-1.5 text-xs text-balance", children: /* @__PURE__ */ jsx(motion.div, { layout, children }) }),
        /* @__PURE__ */ jsx(
          TooltipArrow,
          {
            className: "size-3 data-[side='bottom']:translate-y-[1px] data-[side='right']:translate-x-[1px] data-[side='left']:translate-x-[-1px] data-[side='top']:translate-y-[-1px]",
            tipRadius: 2
          }
        )
      ]
    }
  );
}

const Component = ({ children, content, openDelay = 50, tooltipClassName }) => {
  const [contentKey, setContentKey] = React__default.useState(0);
  React__default.useEffect(() => {
    setContentKey((prev) => prev + 1);
  }, [content]);
  return /* @__PURE__ */ jsx(TooltipProvider, { openDelay, children: /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { className: ``, children }),
    /* @__PURE__ */ jsx(
      TooltipContent,
      {
        autoFocus: true,
        className: cn(
          "rounded-xs max-w-2xl h-auto",
          "bg-white/90 backdrop-blur-md text-slate-800",
          "dark:bg-white/10 dark:backdrop-blur-md dark:text-slate-100",
          "border border-slate-200/50 dark:border-slate-700/50",
          "shadow-lg text-lg",
          tooltipClassName
          // Allow custom className override
        ),
        children: content
      },
      contentKey
    )
  ] }) });
};

export { Component as C, Slot as S, getStrictContext as g };
