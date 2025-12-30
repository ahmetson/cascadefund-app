import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { c as cn, g as getIcon, p as peekParent, q as popUrl } from './Analytics_DTGhDLP0.mjs';
import { C as Component } from './Tooltip_1k3VND9a.mjs';

const BackButton = () => {
  const [backUrl, setBackUrl] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const loadBackButton = () => {
    if (typeof window === "undefined") return;
    try {
      const url = peekParent();
      setBackUrl(url);
      setIsDisabled(url === null);
    } catch (error) {
      console.error("Error in updateBackButton:", error);
    }
  };
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setIsMounted(true);
    const timeoutId = setTimeout(() => {
      loadBackButton();
    }, 100);
    const handleStackChange = () => {
      loadBackButton();
    };
    window.addEventListener("browse-stack-changed", handleStackChange);
    window.addEventListener("storage", handleStackChange);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("browse-stack-changed", handleStackChange);
      window.removeEventListener("storage", handleStackChange);
    };
  }, []);
  if (!isMounted) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "no-underline! flex items-center justify-between px-3 py-1 rounded-sm transition-colors",
          "text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          getIcon({ iconType: "lock" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Back" })
        ] })
      }
    );
  }
  const handleClick = (e) => {
    if (isDisabled || !backUrl) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    e.preventDefault();
    const parentUrl = peekParent();
    popUrl();
    if (parentUrl) {
      window.location.href = parentUrl;
    }
  };
  if (isDisabled || !backUrl) {
    return /* @__PURE__ */ jsx(Component, { content: "Page was entered directly. Back Button is part of the semantic navigation only", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "no-underline! flex items-center justify-between px-3 py-1 rounded-sm transition-colors",
          "text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          getIcon({ iconType: "lock" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Back" })
        ] })
      }
    ) });
  }
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: backUrl,
      onClick: handleClick,
      className: cn(
        "no-underline! flex items-center justify-between px-3 py-1 rounded-sm cursor-pointer transition-colors",
        "text-slate-600 dark:text-slate-400 hover:bg-slate-50/40 dark:hover:bg-slate-800/30 hover:text-slate-700 dark:hover:text-slate-300"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
        getIcon({ iconType: "arrow-left" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Back" })
      ] })
    }
  );
};

export { BackButton as B };
