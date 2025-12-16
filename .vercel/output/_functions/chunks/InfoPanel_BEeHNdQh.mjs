import { jsx, jsxs } from 'react/jsx-runtime';
import { B as BasePanel } from './Panel_CqTuM3BW.mjs';
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent, B as Button } from './PanelAction_DPZy3U8T.mjs';
import { d as BorderSize, g as getIcon, C as Component } from './eventTypes_PbqAZmEg.mjs';
import { c as cn } from './utils_CRaJ9uIg.mjs';

const infoPanelIcon = (iconType) => {
  if (typeof iconType === "object") {
    return iconType;
  }
  if (iconType === void 0) {
    iconType = "info";
  }
  return iconType;
};
const InfoPanel = ({
  key,
  icon,
  title,
  actions,
  children,
  expandable = false,
  defaultExpanded = false,
  className = "",
  titleClassName = "",
  ...baseProps
}) => {
  const panelID = "infopanel-1";
  const hasContent = children || actions && actions.length > 0;
  const titleBottomMargin = hasContent ? "mb-4" : void 0;
  const contentTopMargin = "mt-4";
  const titleColor = "text-slate-600 dark:text-slate-400";
  const textColor = "text-gray-600 dark:text-gray-500";
  const borderColor = "border-slate-200 dark:border-slate-700/10";
  const blurredBorder = "border-blur-xs";
  const renderHeader = () => {
    if (!title) return null;
    const iconProps = infoPanelIcon(icon);
    return /* @__PURE__ */ jsx("div", { className: `${titleBottomMargin}`, children: /* @__PURE__ */ jsxs("h2", { className: `font-georgia flex items-center gap-2 h-5 ${titleColor} ${titleClassName}`, children: [
      getIcon(iconProps),
      /* @__PURE__ */ jsx("span", { children: title })
    ] }) }, key);
  };
  const renderContent = () => {
    return /* @__PURE__ */ jsx("div", { className: `font-noto-sans ${textColor} `, children });
  };
  const renderActions = () => {
    if (!actions || actions.length === 0) return null;
    return /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-3 mt-6", children: actions.map((action, index) => action.uri ? /* @__PURE__ */ jsx(
      Component,
      {
        uri: action.uri,
        className: cn("flex-1 inline-flex items-center font-bold py-2 px-4 rounded transition-colors", action.className),
        children: action.children
      },
      index
    ) : /* @__PURE__ */ jsx(
      Button,
      {
        variant: action.variant,
        onClick: action.onClick,
        className: cn("flex-1", action.className),
        children: action.children
      },
      index
    )) });
  };
  const transparentBg = `bg-white dark:bg-blue-500/10 backdrop-blur-xs border-none ${textColor}`;
  if (hasContent && expandable) {
    return /* @__PURE__ */ jsx(
      BasePanel,
      {
        ...baseProps,
        border: { size: BorderSize.border1, color: `${borderColor} ${blurredBorder}`, className: "filter" },
        bg: "bg-transparent",
        className: cn(
          "shadow-none",
          transparentBg,
          className
        ),
        children: /* @__PURE__ */ jsx(Accordion, { defaultValue: defaultExpanded ? panelID : void 0, type: "single", collapsible: true, children: /* @__PURE__ */ jsxs(AccordionItem, { value: panelID, children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: `flex items-center justify-between h-auto no-underline! p-0`, children: /* @__PURE__ */ jsxs("div", { className: "font-georgia font-semibold text-base flex items-center gap-2", children: [
            icon && getIcon({ iconType: icon.iconType || icon, fill: "currentColor", className: textColor }),
            /* @__PURE__ */ jsx("span", { children: title })
          ] }) }),
          /* @__PURE__ */ jsxs(AccordionContent, { className: `AccordionContent ${contentTopMargin}`, children: [
            renderContent(),
            renderActions()
          ] })
        ] }) })
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    BasePanel,
    {
      ...baseProps,
      border: { size: BorderSize.border2, color: `${borderColor} ${blurredBorder}` },
      bg: "bg-transparent",
      className: cn(
        `shadow-none ${textColor}`,
        transparentBg,
        className
      ),
      children: [
        renderHeader(),
        children && renderContent(),
        actions && renderActions()
      ]
    }
  );
};

export { InfoPanel as I };
