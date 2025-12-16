import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { C as Component } from './Tooltip_w0cA3QON.mjs';
import { E as Editable } from './Editable_-ZF1-7I4.mjs';

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

export { FormField as F };
