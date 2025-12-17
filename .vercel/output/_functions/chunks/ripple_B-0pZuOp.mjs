import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { c as cn } from './utils_CRaJ9uIg.mjs';
import { Accordion as Accordion$1 } from 'radix-ui';
import { AnimatePresence, motion } from 'motion/react';
import { g as getStrictContext, S as Slot } from './slot_C0HxhKXe.mjs';
import { cva } from 'class-variance-authority';
import 'clsx';

const BorderBeam = React__default.memo(({
  className,
  size = 48,
  // 3rem = 48px
  duration = 2,
  colorFrom = "#8b82f6",
  colorTo = "#8b5cf6",
  children
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSide, setCurrentSide] = useState(0);
  const [shapes, setShapes] = useState([]);
  const [lightPosition, setLightPosition] = useState(0);
  const containerRef = useRef(null);
  const beamRef = useRef(null);
  const shapeIdRef = useRef(0);
  const rainbowColors = ["#ff0000", "#ff8000", "#ffff00", "#80ff00", "#00ff00", "#00ff80", "#00ffff", "#0080ff", "#0000ff", "#8000ff", "#ff00ff", "#ff0080"];
  const shapesList = ["circle", "square", "triangle", "diamond"];
  useEffect(() => {
    const startAnimation = () => {
      const timer2 = setTimeout(() => {
        if (!isHovered) {
          setIsVisible(true);
        }
      }, Math.floor(Math.random() * 50));
      return timer2;
    };
    const timer = startAnimation();
    return () => clearTimeout(timer);
  }, [isHovered, currentSide]);
  const handleAnimationEnd = () => {
    setIsVisible(false);
    if (!isHovered) {
      setCurrentSide((prev) => (prev + 1) % 4);
      setTimeout(() => {
        if (!isHovered) {
          setIsVisible(true);
        }
      }, 200);
    }
  };
  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setLightPosition((prev) => (prev + 1) % 100);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isHovered]);
  useEffect(() => {
    if (isHovered && isVisible) {
      const interval = setInterval(() => {
        const newShape = {
          id: shapeIdRef.current++,
          x: Math.random() * 100,
          // Random position along the beam
          y: Math.random() * 100,
          color: rainbowColors[Math.floor(Math.random() * rainbowColors.length)],
          shape: shapesList[Math.floor(Math.random() * shapesList.length)],
          direction: ["up", "down", "left", "right"][Math.floor(Math.random() * 4)]
        };
        setShapes((prev) => [...prev.slice(-8), newShape]);
        setTimeout(() => {
          setShapes((prev) => prev.filter((shape) => shape.id !== newShape.id));
        }, 2e3);
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isHovered, isVisible]);
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setShapes([]);
    setTimeout(() => {
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    }, 100);
  };
  const normalStyle = {};
  const hoveredStyle = {};
  const createGradient = useCallback((direction) => {
    return `linear-gradient(${direction}, 
      transparent 0%, 
      transparent 20%, 
      ${colorFrom}40 30%, 
      ${colorTo}80 50%, 
      ${colorFrom}40 70%, 
      transparent 80%, 
      transparent 100%
    )`;
  }, [colorFrom, colorTo]);
  const getBeamStyle = useMemo(() => {
    const baseStyle = {
      animationDuration: `${duration}s`,
      filter: "blur(0.5px)"
    };
    switch (currentSide) {
      case 0:
        return {
          ...baseStyle,
          position: "absolute",
          top: 0,
          left: 0,
          width: `${size}px`,
          height: "3px",
          background: createGradient("90deg"),
          animation: "beamTop 10s ease-in-out"
        };
      case 1:
        return {
          ...baseStyle,
          position: "absolute",
          top: 0,
          right: 0,
          width: "3px",
          height: `${size}px`,
          background: createGradient("180deg"),
          animation: "beamRight 4s ease-in-out"
        };
      case 2:
        return {
          ...baseStyle,
          position: "absolute",
          bottom: 0,
          right: 0,
          width: `${size}px`,
          height: "3px",
          background: createGradient("270deg"),
          animation: "beamBottom 8s ease-in-out"
        };
      case 3:
        return {
          ...baseStyle,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "3px",
          height: `${size}px`,
          background: createGradient("0deg"),
          animation: "beamLeft 4s ease-in-out"
        };
      default:
        return baseStyle;
    }
  }, [currentSide, size, duration, createGradient]);
  const renderShape = useCallback((shape) => {
    const shapeSize = Math.random() * 2 + 3;
    const shapeStyle = {
      position: "absolute",
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shapeSize}px`,
      height: `${shapeSize}px`,
      backgroundColor: shape.color,
      opacity: 0.8,
      animation: `flyOut${shape.direction} 2s ease-out forwards`,
      zIndex: 20,
      pointerEvents: "none"
    };
    switch (shape.shape) {
      case "circle":
        return /* @__PURE__ */ jsx("div", { style: { ...shapeStyle, borderRadius: "50%", pointerEvents: "none" } }, shape.id);
      case "square":
        return /* @__PURE__ */ jsx("div", { style: { ...shapeStyle, pointerEvents: "none" } }, shape.id);
      case "triangle":
        return /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              ...shapeStyle,
              width: 0,
              height: 0,
              backgroundColor: "transparent",
              borderLeft: `${shapeSize / 2}px solid transparent`,
              borderRight: `${shapeSize / 2}px solid transparent`,
              borderBottom: `${shapeSize}px solid ${shape.color}`,
              pointerEvents: "none"
            }
          },
          shape.id
        );
      case "diamond":
        return /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              ...shapeStyle,
              transform: "rotate(45deg)",
              pointerEvents: "none"
            }
          },
          shape.id
        );
      default:
        return /* @__PURE__ */ jsx("div", { style: { ...shapeStyle, pointerEvents: "none" } }, shape.id);
    }
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: cn(
        "relative overflow-hidden bg-transparent",
        className
      ),
      style: isHovered ? hoveredStyle : normalStyle,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        isVisible && !isHovered && /* @__PURE__ */ jsx(
          "div",
          {
            ref: beamRef,
            className: "absolute z-10",
            style: getBeamStyle,
            onAnimationEnd: handleAnimationEnd
          }
        ),
        isHovered && shapes.map(renderShape),
        isHovered && /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute z-10 ",
            style: {
              position: "absolute",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${colorTo} 0%, ${colorFrom} 50%, transparent 100%)`,
              animation: `moveLight 5s linear infinite`,
              transform: `translate(${lightPosition * 4}px, 0)`,
              // This will be overridden by CSS animation
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative z-0 hover:z-0", children: useMemo(() => children, [children]) }),
        /* @__PURE__ */ jsx("style", { children: `
        @keyframes beamTop {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }
        
        @keyframes beamRight {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes beamBottom {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(-100vw);
            opacity: 0;
          }
        }
        
        @keyframes beamLeft {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }

        @keyframes flyOutup {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(0, -32px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flyOutdown {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(0, 32px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flyOutleft {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(-32px, 0) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flyOutright {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(32px, 0) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes moveLight {
          0% {
            top: 0;
            left: 0;
            transform: translate(-4px, -4px);
          }
          25% {
            top: 0;
            left: 100%;
            transform: translate(-4px, -4px);
          }
          50% {
            top: 100%;
            left: 100%;
            transform: translate(-4px, -4px);
          }
          75% {
            top: 100%;
            left: 0;
            transform: translate(-4px, -4px);
          }
          100% {
            top: 0;
            left: 0;
            transform: translate(-4px, -4px);
          }
        }
      ` })
      ]
    }
  );
}, (prevProps, nextProps) => {
  return prevProps.className === nextProps.className && prevProps.size === nextProps.size && prevProps.duration === nextProps.duration && prevProps.colorFrom === nextProps.colorFrom && prevProps.colorTo === nextProps.colorTo && // Children comparison - if children reference is the same, skip re-render
  // useMemo inside will handle actual children content changes
  prevProps.children === nextProps.children;
});
BorderBeam.displayName = "BorderBeam";

function useControlledState(props) {
  const { value, defaultValue, onChange } = props;
  const [state, setInternalState] = React.useState(
    value !== void 0 ? value : defaultValue
  );
  React.useEffect(() => {
    if (value !== void 0) setInternalState(value);
  }, [value]);
  const setState = React.useCallback(
    (next, ...args) => {
      setInternalState(next);
      onChange?.(next, ...args);
    },
    [onChange]
  );
  return [state, setState];
}

const [AccordionProvider, useAccordion] = getStrictContext("AccordionContext");
const [AccordionItemProvider, useAccordionItem] = getStrictContext("AccordionItemContext");
function Accordion(props) {
  const [value, setValue] = useControlledState({
    value: props?.value,
    defaultValue: props?.defaultValue,
    onChange: props?.onValueChange
  });
  return /* @__PURE__ */ jsx(AccordionProvider, { value: { value, setValue }, children: /* @__PURE__ */ jsx(
    Accordion$1.Root,
    {
      "data-slot": "accordion",
      ...props,
      onValueChange: setValue
    }
  ) });
}
function AccordionItem(props) {
  const { value } = useAccordion();
  const [isOpen, setIsOpen] = React.useState(
    value?.includes(props?.value) ?? false
  );
  React.useEffect(() => {
    setIsOpen(value?.includes(props?.value) ?? false);
  }, [value, props?.value]);
  return /* @__PURE__ */ jsx(AccordionItemProvider, { value: { isOpen, setIsOpen, value: props.value }, children: /* @__PURE__ */ jsx(Accordion$1.Item, { "data-slot": "accordion-item", ...props }) });
}
function AccordionHeader(props) {
  return /* @__PURE__ */ jsx(Accordion$1.Header, { "data-slot": "accordion-header", ...props });
}
function AccordionTrigger(props) {
  return /* @__PURE__ */ jsx(Accordion$1.Trigger, { "data-slot": "accordion-trigger", ...props });
}
function AccordionContent({
  keepRendered = false,
  transition = { type: "spring", stiffness: 150, damping: 22 },
  ...props
}) {
  const { isOpen } = useAccordionItem();
  return /* @__PURE__ */ jsx(AnimatePresence, { children: keepRendered ? /* @__PURE__ */ jsx(Accordion$1.Content, { asChild: true, forceMount: true, children: /* @__PURE__ */ jsx(
    motion.div,
    {
      "data-slot": "accordion-content",
      initial: { height: 0, opacity: 0, "--mask-stop": "0%" },
      animate: isOpen ? { height: "auto", opacity: 1, "--mask-stop": "100%" } : { height: 0, opacity: 0, "--mask-stop": "0%" },
      transition,
      style: {
        maskImage: "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
        WebkitMaskImage: "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
        overflow: "hidden"
      },
      ...props
    },
    "accordion-content"
  ) }) : isOpen && /* @__PURE__ */ jsx(Accordion$1.Content, { asChild: true, forceMount: true, children: /* @__PURE__ */ jsx(
    motion.div,
    {
      "data-slot": "accordion-content",
      initial: { height: 0, opacity: 0, "--mask-stop": "0%" },
      animate: { height: "auto", opacity: 1, "--mask-stop": "100%" },
      exit: { height: 0, opacity: 0, "--mask-stop": "0%" },
      transition,
      style: {
        maskImage: "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
        WebkitMaskImage: "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
        overflow: "hidden"
      },
      ...props
    },
    "accordion-content"
  ) }) });
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[box-shadow,_color,_background-color,_border-color,_outline-color,_text-decoration-color,_fill,_stroke] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        accent: "bg-accent text-accent-foreground shadow-xs hover:bg-accent/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-10 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

const [RippleButtonProvider, useRippleButton] = getStrictContext("RippleButtonContext");
function RippleButton({
  ref,
  onClick,
  hoverScale = 1.05,
  tapScale = 0.95,
  asChild = false,
  style,
  ...props
}) {
  const [ripples, setRipples] = React.useState([]);
  const buttonRef = React.useRef(null);
  React.useImperativeHandle(ref, () => buttonRef.current);
  const createRipple = React.useCallback(
    (event) => {
      const button = buttonRef.current;
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const newRipple = {
        id: Date.now(),
        x,
        y
      };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    },
    []
  );
  const handleClick = React.useCallback(
    (event) => {
      createRipple(event);
      if (onClick) {
        onClick(event);
      }
    },
    [createRipple, onClick]
  );
  const Component = asChild ? Slot : motion.button;
  return /* @__PURE__ */ jsx(RippleButtonProvider, { value: { ripples, setRipples }, children: /* @__PURE__ */ jsx(
    Component,
    {
      ref: buttonRef,
      "data-slot": "ripple-button",
      onClick: handleClick,
      whileTap: { scale: tapScale },
      whileHover: { scale: hoverScale },
      style: {
        position: "relative",
        overflow: "hidden",
        ...style
      },
      ...props
    }
  ) });
}
function RippleButtonRipples({
  color = "var(--ripple-button-ripple-color)",
  scale = 10,
  transition = { duration: 0.6, ease: "easeOut" },
  asChild = false,
  style,
  ...props
}) {
  const { ripples } = useRippleButton();
  const Component = asChild ? Slot : motion.span;
  return ripples.map((ripple) => /* @__PURE__ */ jsx(
    Component,
    {
      initial: { scale: 0, opacity: 0.5 },
      animate: { scale, opacity: 0 },
      transition,
      style: {
        position: "absolute",
        borderRadius: "50%",
        pointerEvents: "none",
        width: "20px",
        height: "20px",
        backgroundColor: color,
        top: ripple.y - 10,
        left: ripple.x - 10,
        ...style
      },
      ...props
    },
    ripple.id
  ));
}

export { Accordion as A, BorderBeam as B, RippleButton as R, AccordionItem as a, AccordionHeader as b, AccordionTrigger as c, AccordionContent as d, buttonVariants as e, RippleButtonRipples as f, useControlledState as u };
