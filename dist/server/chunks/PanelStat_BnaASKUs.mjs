import { jsx, jsxs } from 'react/jsx-runtime';
import { C as Component } from './Tooltip_1k3VND9a.mjs';
import { g as getIcon, C as Component$1 } from './Analytics_DTGhDLP0.mjs';
import { B as Button } from './Button_DKAQNAd0.mjs';

const PanelFooter = ({ children, className }) => {
  return /* @__PURE__ */ jsx("div", { className: `flex items-center justify-between mb-2 border-t-2 border-gray-200/20 dark:border-gray-600/20 pt-1 ${className}`, children });
};

const Followings = ({ href, onClick = void 0, ...props }) => {
  const content = /* @__PURE__ */ jsx("div", { className: "text-sm", children: props.hint });
  const trigger = /* @__PURE__ */ jsxs("div", { className: `flex items-center space-x-1 justify-center ${onClick === void 0 && href === void 0 && "text-slate-500 dark:text-slate-400"} ${props.triggerClassName}`, children: [
    getIcon({ iconType: props.iconType, fill: props.fill ? "currentColor" : "none", className: `w-5 h-5 mt-0.5 mr-1 ${props.iconClassName}` }),
    props.children
  ] });
  return /* @__PURE__ */ jsx(Component, { content, openDelay: 500, children: href ? /* @__PURE__ */ jsx(Component$1, { uri: href, asNewTab: props.asNewTab ?? false, children: trigger }) : onClick ? /* @__PURE__ */ jsx(Button, { onClick, children: trigger }) : trigger });
};

export { Followings as F, PanelFooter as P };
