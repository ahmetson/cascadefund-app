import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'motion/react';
import { B as BasePanel } from './Panel_5oXz7djo.mjs';
import { B as BorderBeam } from './ripple_B-0pZuOp.mjs';
import { c as cn } from './utils_CRaJ9uIg.mjs';
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent, P as PanelAction } from './PanelAction_BPm-vUQ5.mjs';
import { g as getIcon } from './BrowseTracker_CjQaYJF4.mjs';

const InteractivePanel = ({
  children,
  expandableTitle,
  defaultExpanded = false,
  expandableAnchor = "center",
  onHover,
  onClick,
  onBackClick,
  onElementClick,
  onActionClick,
  className = "",
  ...baseProps
}) => {
  const [isExpanded, setIsExpanded] = useState(expandableTitle ? defaultExpanded : false);
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = (hovered) => {
    setIsHovered(hovered);
    onHover?.(hovered);
  };
  const handleClick = () => {
    if (expandableTitle) {
      setIsExpanded(!isExpanded);
    }
    onClick?.(true);
  };
  const panelID = "1";
  const panelContent = /* @__PURE__ */ jsx(BorderBeam, { children: /* @__PURE__ */ jsxs(
    BasePanel,
    {
      ...baseProps,
      className: cn(
        "transition-all duration-300",
        "hover:shadow-lg ",
        className
      ),
      onClick: handleClick,
      onMouseEnter: () => handleHover(true),
      onMouseLeave: () => handleHover(false),
      children: [
        expandableTitle ? /* @__PURE__ */ jsx(Accordion, { defaultValue: defaultExpanded ? panelID : void 0, type: "single", collapsible: true, children: /* @__PURE__ */ jsxs(AccordionItem, { value: panelID, children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { onClick: handleClick, className: "flex items-center justify-between h-4 no-underline!", children: expandableTitle }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "AccordionContent", expandableAnchor, children })
        ] }) }) : children,
        isHovered && /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.2 }
          }
        )
      ]
    }
  ) });
  return panelContent;
};

const PageLikePanel = ({
  icon,
  title,
  subtitle,
  titleCenter = false,
  rightHeader,
  actions,
  children,
  expandable = false,
  className = "",
  interactive = true,
  ...interactiveProps
}) => {
  const renderHeader = () => {
    const titleColor = "text-slate-700 dark:text-slate-300/75";
    if (titleCenter) {
      return /* @__PURE__ */ jsx("div", { className: "mb-4 text-center", children: /* @__PURE__ */ jsxs("h2", { className: `font-georgia flex items-center justify-center gap-1 text-2xl ${titleColor}`, children: [
        icon && getIcon({ iconType: icon, width: "w-5", height: "h-5", className: "mt-1 text-slate-600 dark:text-slate-400" }),
        /* @__PURE__ */ jsx("span", { children: title })
      ] }) });
    }
    return /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("h2", { className: `font-georgia flex items-center gap-1 h-5 ${titleColor}`, children: [
        icon && getIcon({ iconType: icon, width: "w-5", height: "h-5", className: "mt-0.5 text-slate-600 dark:text-slate-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-lg lg:text-xl", children: title })
      ] }),
      rightHeader
    ] });
  };
  const renderContent = () => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: "font-noto-sans space-y-3 text-sm text-slate-600 dark:text-slate-400 overflow-y-auto",
        children
      }
    );
  };
  return interactive ? /* @__PURE__ */ jsxs(
    InteractivePanel,
    {
      ...interactiveProps,
      expandableTitle: expandable ? title : void 0,
      className: cn("space-y-4 z-10", className),
      children: [
        renderHeader(),
        subtitle && /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 -mt-2 mb-4", children: subtitle }),
        renderContent(),
        /* @__PURE__ */ jsx(PanelAction, { actions })
      ]
    }
  ) : /* @__PURE__ */ jsxs(
    BasePanel,
    {
      ...interactiveProps,
      className: cn("space-y-4 z-10", className),
      children: [
        renderHeader(),
        subtitle && /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 -mt-2 mb-4", children: subtitle }),
        renderContent(),
        /* @__PURE__ */ jsx(PanelAction, { actions })
      ]
    }
  );
};

export { PageLikePanel as P };
