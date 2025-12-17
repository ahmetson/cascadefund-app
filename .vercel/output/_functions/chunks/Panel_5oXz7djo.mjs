import { jsxs, jsx } from 'react/jsx-runtime';
import { c as cn } from './utils_CRaJ9uIg.mjs';
import { R as RoundedSize, S as ShadowSize } from './BrowseTracker_CjQaYJF4.mjs';

const BasePanel = ({
  key,
  children,
  className = "",
  padding = "p-4",
  bg = "bg-white dark:bg-slate-900",
  border = {
    size: "border-1",
    color: "border-slate-200 dark:border-slate-500/10",
    className: ""
  },
  shadowSize = ShadowSize.shadowMd,
  roundedSize = RoundedSize.roundedXs
}) => {
  const getBackgroundStyles = () => {
    if (typeof bg === "object" && bg.src) {
      return "backdrop-blur-sm";
    }
    return bg || "";
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        `${roundedSize} ${shadowSize} relative overflow-hidden`,
        `${border.size} ${border.color} ${border.className}`,
        getBackgroundStyles(),
        padding,
        className
      ),
      children: [
        typeof bg === "object" && bg.src && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: bg.src,
            alt: bg.label || "Background",
            referrerPolicy: "no-referrer",
            className: cn(
              `w-full h-full object-cover blur-xs scale-110 ${bg.className || ""}`
            )
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10", children })
      ]
    },
    key
  );
};

export { BasePanel as B };
