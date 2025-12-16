import { jsx, jsxs } from 'react/jsx-runtime';
import { C as Component, g as getIcon } from './eventTypes_PbqAZmEg.mjs';
import { B as Badge } from './Badge_B8Esv6UX.mjs';

const MenuItem = ({ icon, label, badges, uri, active, focus = false, className = "" }) => {
  const baseClassName = `no-underline! flex items-center justify-between px-3 py-1 rounded-sm cursor-pointer transition-colors`;
  const activeClassName = `bg-slate-100/60 dark:bg-slate-700/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-700/60`;
  const inactiveClassName = `text-slate-600 dark:text-slate-400 hover:bg-slate-50/40 dark:hover:bg-slate-800/30 hover:text-slate-700 dark:hover:text-slate-300`;
  const linkClassName = `${baseClassName} ${active ? activeClassName : inactiveClassName} ${className}`;
  return /* @__PURE__ */ jsx(Component, { focus, uri, className: linkClassName, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
      getIcon(icon),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: label })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center ml-1 -space-x-2", children: badges && badges.map((badge) => /* @__PURE__ */ jsx(Badge, { ...badge, children: badge.children })) })
  ] }) });
};

export { MenuItem as M };
