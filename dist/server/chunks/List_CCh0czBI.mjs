import { jsx } from 'react/jsx-runtime';
import { c as cn } from './Analytics_DTGhDLP0.mjs';

const List = ({
  className,
  children,
  contentHeight
}) => {
  const contentStyle = contentHeight ? `${contentHeight} overflow-y-auto` : "";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "font-noto-sans text-sm text-gray-600 dark:text-gray-500 space-y-3",
        contentStyle,
        className
      ),
      children
    }
  );
};

export { List as L };
