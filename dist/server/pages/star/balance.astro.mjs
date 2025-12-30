import { j as createComponent, x as renderComponent, r as renderTemplate } from '../../chunks/astro/server_BV1oLWnF.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_B3DF1IZV.mjs';
import { g as getIcon, M as MenuName } from '../../chunks/Analytics_DTGhDLP0.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { P as PageLikePanel } from '../../chunks/PageLikePanel_tQY1YL9T.mjs';
import NumberFlow from '@number-flow/react';
import { C as Component } from '../../chunks/Tooltip_1k3VND9a.mjs';
import { E as Editable } from '../../chunks/Editable_-ZF1-7I4.mjs';
import { Popover } from '@base-ui-components/react/popover';
import { B as BackButton } from '../../chunks/BackButton_DebJpsQG.mjs';
export { renderers } from '../../renderers.mjs';

const Label = ({ children }) => {
  return /* @__PURE__ */ jsx("label", { className: "block text-sm text-gray-600 dark:text-gray-400 mb-2 w-full", children });
};

const FormField = ({
  id,
  label,
  value,
  type,
  placeholder,
  onChange,
  disabled = false,
  tooltipDelay = 500,
  autofocus = true
}) => {
  const [idle, setIdle] = useState(true);
  const className = "w-full min-w-40 px-2 py-1 border border-teal-300 rounded-xs shadow-sm focus:outline-none focus:ring-1 focus:ring-cascade-blue focus:border-cascade-blue bg-gray-100 text-gray-600";
  const classNameDark = " dark:border-gray-700 dark:bg-gray-700 dark:text-gray-500";
  const classNameIdle = "min-h-2 flex w-full min-w-40 px-2 py-1 border border-gray-200 dark:border-gray-700 rounded-xs hover:shadow-sm focus:outline-none focus:ring-1 focus:ring-cascade-blue focus:border-cascade-blue hover:bg-gray-100 dark:hover:bg-gray-700 cursor-text text-gray-600 dark:text-gray-100";
  return /* @__PURE__ */ jsx(
    Component,
    {
      openDelay: tooltipDelay,
      content: /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
        "Click to edit. ",
        placeholder
      ] }),
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full", children: [
        /* @__PURE__ */ jsx(Label, { children: label }),
        idle ? /* @__PURE__ */ jsx("div", { onClick: () => setIdle(false), className: classNameIdle, children: value.length > 0 ? value : /* @__PURE__ */ jsx("span", { className: "text-gray-500 dark:text-gray-500 italic", children: placeholder }) }) : /* @__PURE__ */ jsx(
          Editable,
          {
            id,
            autofocus,
            content: value,
            editable: !disabled,
            className: className + classNameDark,
            onBlur: (e, editor) => {
              onChange?.(editor?.getText() || "");
              setIdle(true);
            },
            onCancel: (e, editor) => {
              onChange?.(editor?.getText() || "");
              setIdle(true);
            }
          }
        )
      ] })
    }
  );
};

const BalanceInfoItem = ({ icon, iconColor = "bg-blue-600", children }) => {
  const getBackgroundColor = (iconLetter) => {
    const colors = {
      "G": "bg-gray-700",
      "R": "bg-red-600",
      "E": "bg-green-600",
      "P": "bg-purple-600",
      "A": "bg-blue-600",
      "X": "bg-orange-600",
      "H": "bg-indigo-600",
      "B": "bg-blue-600",
      "D": "bg-green-600",
      "C": "bg-indigo-600"
    };
    return colors[iconLetter] || iconColor;
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
    /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full ${getBackgroundColor(icon)} flex items-center justify-center flex-shrink-0`, children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-bold", children: icon }) }),
    /* @__PURE__ */ jsx("div", { className: "text-gray-700 dark:text-gray-300 leading-relaxed flex-1", children })
  ] });
};
const UserBalancePanel = () => {
  const [disabled, setDisabled] = useState(false);
  const cascadingBalanceTooltip = /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
    "Indirectly received funds from other projects. Withdraw, and transfer or use for yourself. Check out",
    " ",
    /* @__PURE__ */ jsx("a", { href: "#", className: "text-cascade-blue hover:underline", children: "Work page" }),
    " ",
    "to improve the rating to have more funds."
  ] });
  return /* @__PURE__ */ jsxs(PageLikePanel, { interactive: false, title: "Balance", actions: [
    {
      variant: "primary",
      children: "Withdraw",
      onClick: () => {
      },
      disabled
    }
  ], children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex flex-row gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(BalanceInfoItem, { icon: "B", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1", children: "Current Balance" }),
        /* @__PURE__ */ jsx(
          NumberFlow,
          {
            value: 3.45928,
            locales: "en-US",
            format: { style: "currency", currency: "USD", maximumFractionDigits: 2, signDisplay: "negative" },
            className: "text-lg font-semibold text-gray-700 dark:text-gray-300"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(BalanceInfoItem, { icon: "D", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1", children: "Total User donations" }),
        /* @__PURE__ */ jsx(
          NumberFlow,
          {
            value: 1250,
            locales: "en-US",
            format: { style: "currency", currency: "USD", maximumFractionDigits: 2, signDisplay: "negative" },
            className: "text-lg font-semibold text-gray-700 dark:text-gray-300"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(BalanceInfoItem, { icon: "C", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxs(Popover.Root, { children: [
          /* @__PURE__ */ jsxs(Popover.Trigger, { className: "hyperlink flex items-center justify-center shadow-none gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Total cascading donations" }),
            getIcon({ iconType: "info", className: "w-3 h-3 cursor-help" })
          ] }),
          /* @__PURE__ */ jsx(Popover.Portal, { children: /* @__PURE__ */ jsx(Popover.Positioner, { sideOffset: 8, side: "bottom", className: "z-999!", children: /* @__PURE__ */ jsxs(Popover.Popup, { className: "w-80 origin-[var(--transform-origin)] rounded-xs bg-[canvas] px-6 py-4 text-gray-900 shadow-sm shadow-gray-900 dark:text-slate-300 dark:shadow-slate-300 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0", children: [
            /* @__PURE__ */ jsx(Popover.Arrow, { className: "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180" }),
            /* @__PURE__ */ jsx(Popover.Description, { className: "text-gray-600 dark:text-slate-400 text-sm", children: cascadingBalanceTooltip })
          ] }) }) })
        ] }) }),
        /* @__PURE__ */ jsx(
          NumberFlow,
          {
            value: 3.45928,
            locales: "en-US",
            format: { style: "currency", currency: "USD", maximumFractionDigits: 2, signDisplay: "negative" },
            className: "text-lg font-semibold text-gray-700 dark:text-gray-300"
          }
        )
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx(FormField, { id: "address", label: "Withdraw wallet address", value: "0x8F5a2bD707D9a654bbF5dFC3A27737BDc1d24A8", type: "text", placeholder: "Enter your Ethereum network address" }) })
  ] });
};

const $$Balance = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelViewLayout, { "hideLinks": Object.keys(MenuName) }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "UserBalancePanel", UserBalancePanel, { "slot": "center" })}`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}` })}`;
}, "/home/medet/ara-app/src/pages/star/balance.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/star/balance.astro";
const $$url = "/star/balance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Balance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
