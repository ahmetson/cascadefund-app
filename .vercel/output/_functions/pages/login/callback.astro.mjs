import { i as createComponent, w as renderComponent, r as renderTemplate } from '../../chunks/astro/server_WCbI3U70.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_aQb_8Ejw.mjs';
import { I as ItemName } from '../../chunks/LandingNavbar_x5WCuRyq.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { L as LoadingSpinner } from '../../chunks/LoadingSpinner_DhXAEzrZ.mjs';
import { B as BasePanel } from '../../chunks/Panel_5oXz7djo.mjs';
import { C as Component } from '../../chunks/BrowseTracker_CjQaYJF4.mjs';
export { renderers } from '../../renderers.mjs';

const AuthSuccessCard = ({ gotoLink, gotoLabel, title, children }) => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsx(BasePanel, { className: "w-full max-w-md mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx(LoadingSpinner, {}) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-2", children: title }),
    children,
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "You will be redirected to the Ara alpha version shortly" }),
    /* @__PURE__ */ jsx("p", { children: showButton && /* @__PURE__ */ jsx(Component, { uri: gotoLink, className: "font-medium text-blue-600 dark:text-blue-500 hover:underline", children: gotoLabel }) })
  ] }) });
};

const $$Callback = createComponent(($$result, $$props, $$slots) => {
  const sectionInfo = {
    title: "Successful Authentication",
    children: "Please wait for automatic redirection",
    gotoLink: "/login/getting-started",
    gotoLabel: "Getting Started"
  };
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "hideLinks": Object.values(ItemName), "subtitle": "Wait a bit please..." }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "Loading", AuthSuccessCard, { "slot": "center", "client:load": true, ...sectionInfo, "client:component-hydration": "load", "client:component-path": "@/components/utilitified_decorations/LoadingPanel", "client:component-export": "default" })}` })}`;
}, "/home/medet/ara-app/src/pages/login/callback.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/login/callback.astro";
const $$url = "/login/callback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Callback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
