import { jsx } from 'react/jsx-runtime';

const Importer = ({ children, className, cols, gap }) => {
  cols = cols === void 0 ? 2 : cols;
  gap = gap === void 0 ? 6 : gap;
  return /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 md:grid-cols-${cols} gap-${gap} ${className || ""}`, children });
};

export { Importer as I };
