import { jsx, jsxs } from 'react/jsx-runtime';

const LoadingSpinner = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "0px", left: "18px", animationDelay: "0s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "6px", left: "30px", animationDelay: "0.1s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "18px", left: "36px", animationDelay: "0.2s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "30px", left: "30px", animationDelay: "0.3s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "36px", left: "18px", animationDelay: "0.4s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "30px", left: "6px", animationDelay: "0.5s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "18px", left: "0px", animationDelay: "0.6s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "6px", left: "6px", animationDelay: "0.7s" } })
  ] }) }) }) });
};

export { LoadingSpinner as L };
