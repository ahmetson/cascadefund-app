import { jsx, jsxs } from 'react/jsx-runtime';
import { P as PageLikePanel } from './PageLikePanel_CRfOVdJz.mjs';
import { C as Component } from './eventTypes_PbqAZmEg.mjs';

const C = ({
  id,
  title,
  description,
  buttonText,
  buttonVariant,
  icon,
  avatar,
  iconBgColor,
  href
}) => {
  return /* @__PURE__ */ jsx("div", { className: `${iconBgColor} card image-full text-gray-100 w-36 h-60 shadow-sm p-0!`, children: /* @__PURE__ */ jsxs(PageLikePanel, { titleCenter: true, icon, title, bg: { src: avatar, label: `${title} avatar` }, children: [
    /* @__PURE__ */ jsx("p", { className: "h-20 flex items-center text-gray-300 dark:text-gray-100 mt-8", children: description }),
    /* @__PURE__ */ jsx("div", { className: "card-actions justify-center overflow-hidden", children: buttonVariant === "primary" ? /* @__PURE__ */ jsx(Component, { uri: href || "#", className: "inline-flex items-center bg-rose-500 hover:bg-rose-600 text-white dark:text-gray-100 hover:text-blue-50! font-bold py-2 px-4 rounded transition-colors", children: buttonText }) : /* @__PURE__ */ jsx(Component, { uri: href || "#", className: buttonVariant, children: buttonText }) })
  ] }, id) });
};

export { C };
