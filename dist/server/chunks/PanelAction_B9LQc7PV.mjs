import { jsx, jsxs } from 'react/jsx-runtime';
import { ChevronDownIcon } from 'lucide-react';
import { A as Accordion$1, a as AccordionItem$1, b as AccordionHeader, c as AccordionTrigger$1, d as AccordionContent$1 } from './accordion_DMCf7rKz.mjs';
import { c as cn, C as Component } from './Analytics_DTGhDLP0.mjs';
import React__default from 'react';
import { B as Button } from './Button_DKAQNAd0.mjs';

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

export { Accordion as A, PanelAction as P, AccordionItem as a, AccordionTrigger as b, AccordionContent as c };
