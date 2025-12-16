import { jsx, jsxs } from 'react/jsx-runtime';
import { ChevronDownIcon } from 'lucide-react';
import { R as RippleButton$1, b as buttonVariants, a as RippleButtonRipples$1, B as BorderBeam, A as Accordion$1, c as AccordionItem$1, d as AccordionHeader, e as AccordionTrigger$1, f as AccordionContent$1 } from './accordion_CHQBqGdC.mjs';
import { c as cn } from './utils_CRaJ9uIg.mjs';
import React__default from 'react';
import { R as RoundedSize, E as ElectricBorder, C as Component } from './eventTypes_PbqAZmEg.mjs';

const rippleButtonVariants = {
  default: "[--ripple-button-ripple-color:var(--primary-foreground)]",
  accent: "[--ripple-button-ripple-color:var(--accent-foreground)]",
  destructive: "[--ripple-button-ripple-color:var(--destructive-foreground)]",
  outline: "[--ripple-button-ripple-color:var(--foreground)]",
  secondary: "[--ripple-button-ripple-color:var(--secondary-foreground)]",
  ghost: "[--ripple-button-ripple-color:var(--foreground)]",
  link: "[--ripple-button-ripple-color:var(--primary-foreground)]"
};
function RippleButton({
  className,
  variant,
  size,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    RippleButton$1,
    {
      className: cn(
        buttonVariants({ variant, size, className }),
        rippleButtonVariants[variant]
      ),
      ...props
    }
  );
}
function RippleButtonRipples(props) {
  return /* @__PURE__ */ jsx(RippleButtonRipples$1, { ...props });
}

const getAnimationColors = (variant) => {
  switch (variant) {
    case "primary":
      return { colorFrom: "#4f46e5", colorTo: "#2563eb" };
    // indigo-600 to blue-600
    case "secondary":
      return { colorFrom: "#64748b", colorTo: "#475569" };
    // slate-500 to slate-600 (subtle)
    case "danger":
      return { colorFrom: "#dc2626", colorTo: "#b91c1c" };
    // red-600 to red-700
    case "success":
      return { colorFrom: "#059669", colorTo: "#047857" };
    // emerald-600 to emerald-700
    default:
      return { colorFrom: "#94a3b8", colorTo: "#cbd5e1" };
  }
};
const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className = "",
  outline = false,
  focus = false
}) => {
  const getDisabledButtonStyles = () => {
    const defaultStyle = "border! text-slate-400! border-slate-300! bg-slate-200! hover:bg-slate-200! dark:border-slate-600! dark:bg-slate-700! dark:text-slate-500! dark:hover:bg-slate-700!";
    switch (variant) {
      case "primary":
        return "text-white! bg-indigo-400! opacity-60! cursor-not-allowed! dark:bg-indigo-600! dark:opacity-60!";
      case "secondary":
        return "text-slate-300! bg-slate-400! opacity-60! cursor-not-allowed! dark:bg-slate-600! dark:text-slate-400! dark:opacity-60!";
      case "danger":
        return "text-white! bg-red-400! opacity-60! cursor-not-allowed! dark:bg-red-600! dark:opacity-60!";
      case "success":
        return "text-white! bg-emerald-400! opacity-60! cursor-not-allowed! dark:bg-emerald-600! dark:opacity-60!";
      default:
        return defaultStyle;
    }
  };
  const getVariantStyles = () => {
    const defaultStyle = "border text-slate-700 border-slate-300 bg-slate-200 hover:bg-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600";
    switch (variant) {
      case "primary":
        return "bg-indigo-600 text-white font-semibold hover:bg-indigo-700 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600 shadow-sm hover:shadow-md transition-all";
      case "secondary":
        return "bg-slate-500 text-slate-100 hover:bg-slate-600 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-500";
      case "danger":
        return "bg-red-600 text-white font-semibold hover:bg-red-700 dark:bg-red-500 dark:text-white dark:hover:bg-red-600 shadow-sm hover:shadow-md transition-all";
      case "success":
        return "bg-emerald-600 text-white font-semibold hover:bg-emerald-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-600 shadow-sm hover:shadow-md transition-all";
      default:
        return defaultStyle;
    }
  };
  const getOutlineStyles = () => {
    if (!outline) {
      return "";
    }
    let outlineStyle = "bg-transparent! text-slate-600! dark:text-slate-300! hover:text-slate-700 dark:hover:text-slate-200 border-1 border-slate-300! dark:border-slate-600! ";
    switch (variant) {
      case "primary":
        outlineStyle += "border-indigo-500! text-indigo-600! hover:border-indigo-600! hover:bg-indigo-50! dark:border-indigo-400! dark:text-indigo-400! dark:hover:bg-indigo-950/20!";
        break;
      case "secondary":
        outlineStyle += "border-slate-400! text-slate-600! hover:border-slate-500! hover:bg-slate-50! dark:border-slate-500! dark:text-slate-400! dark:hover:bg-slate-800/30!";
        break;
      case "danger":
        outlineStyle += "border-red-500! text-red-600! hover:border-red-600! hover:bg-red-50! dark:border-red-400! dark:text-red-400! dark:hover:bg-red-950/20!";
        break;
      case "success":
        outlineStyle += "border-emerald-500! text-emerald-600! hover:border-emerald-600! hover:bg-emerald-50! dark:border-emerald-400! dark:text-emerald-400! dark:hover:bg-emerald-950/20!";
        break;
      default:
        outlineStyle += "border-slate-300! text-slate-500! hover:border-slate-400! hover:bg-slate-50! dark:border-slate-600! dark:text-slate-400! dark:hover:bg-slate-800/30!";
        break;
    }
    return outlineStyle;
  };
  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-3 pr-2 py-1 text-sm";
      case "md":
        return "px-4 pr-3 py-2 text-sm";
      case "lg":
        return "px-6 pr-5 py-3 text-base";
      default:
        return "px-4 pr-3 py-2 text-sm";
    }
  };
  return /* @__PURE__ */ jsx(BorderBeam, { size: 12, colorFrom: getAnimationColors(variant).colorFrom, colorTo: getAnimationColors(variant).colorTo, children: /* @__PURE__ */ jsxs(
    RippleButton,
    {
      onClick,
      disabled,
      className: `
          ${disabled ? "" : "hyperlink"}
          ${disabled ? getDisabledButtonStyles() : getVariantStyles()}
          ${getOutlineStyles()}
          ${focus ? "" : getSizeStyles()}
          ${RoundedSize.roundedXs} font-medium transition-colors duration-200
          ${className}
          `,
      children: [
        /* @__PURE__ */ jsx(
          ElectricBorder,
          {
            color: getAnimationColors(variant).colorFrom,
            speed: 1,
            chaos: 0.5,
            thickness: 2,
            style: { borderRadius: 2 },
            className: cn(
              `${getSizeStyles()}`,
              "mr-1 "
            ),
            disabled: !focus,
            children
          }
        ),
        /* @__PURE__ */ jsx(RippleButtonRipples, { color: getAnimationColors(variant).colorFrom })
      ]
    }
  ) });
};

function Accordion(props) {
  return /* @__PURE__ */ jsx(Accordion$1, { ...props });
}
function AccordionItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    AccordionItem$1,
    {
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  showArrow = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(AccordionHeader, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionTrigger$1,
    {
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        showArrow && /* @__PURE__ */ jsx(ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  expandableAnchor = "center",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AccordionContent$1,
    {
      ...props,
      "data-anchor": expandableAnchor,
      className: "AccordionContent",
      children: /* @__PURE__ */ jsx("div", { className: cn("text-sm pt-0 pb-4", className), children })
    }
  );
}

const PanelAction = ({ actions, className = "mt-6" }) => {
  if (!actions || Array.isArray(actions) && actions.length === 0) return null;
  if (!Array.isArray(actions)) {
    if (!React__default.isValidElement(actions)) return null;
    return /* @__PURE__ */ jsx("div", { className: cn("flex justify-center gap-3", className), children: actions });
  }
  return /* @__PURE__ */ jsx("div", { className: cn("flex justify-center gap-3 pt-1", className), children: actions.map((action, index) => action.uri ? /* @__PURE__ */ jsx(
    Component,
    {
      uri: action.uri,
      className: cn(
        "flex-1 inline-flex items-center font-normal py-1 px-4 rounded transition-colors text-blue-600 dark:text-blue-400",
        action.className,
        actions.length - 1 === index ? "justify-end" : index === 0 ? "justify-start" : "justify-center"
      ),
      children: action.children
    },
    index
  ) : /* @__PURE__ */ jsx(
    Button,
    {
      disabled: action.disabled,
      variant: action.variant,
      onClick: action.onClick,
      className: cn("flex-1", action.className),
      children: action.children
    },
    index
  )) });
};

export { Accordion as A, Button as B, PanelAction as P, AccordionItem as a, AccordionTrigger as b, AccordionContent as c, getAnimationColors as g };
