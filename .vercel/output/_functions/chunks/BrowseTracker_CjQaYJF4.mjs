import { i as createComponent, j as createAstro, l as addAttribute, z as renderScript, r as renderTemplate, w as renderComponent, m as maybeRenderHead, y as renderSlot } from './astro/server_WCbI3U70.mjs';
import 'clsx';
/* empty css                         */
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { FaLinkedin, FaDiscord, FaTelegram, FaGithub } from 'react-icons/fa';
import { h as hexToRgba, c as cn } from './utils_CRaJ9uIg.mjs';
import * as React from 'react';
import React__default, { useId, useRef, useEffect, useLayoutEffect, useMemo } from 'react';
import { motion as motion$1 } from 'motion/react';

const $$Astro$4 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/medet/ara-app/node_modules/.pnpm/astro@5.15.3_@types+node@24.10.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30._9a9bea42e0c44ef794a5a52fe5586ada/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/medet/ara-app/node_modules/.pnpm/astro@5.15.3_@types+node@24.10.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30._9a9bea42e0c44ef794a5a52fe5586ada/node_modules/astro/components/ClientRouter.astro", void 0);

const ElectricBorder = React__default.memo(({
  children,
  color = "#5227FF",
  speed = 1,
  chaos = 1,
  thickness = 2,
  className,
  style,
  disabled = false
}) => {
  if (disabled) return /* @__PURE__ */ jsx(Fragment, { children });
  const rawId = useId().replace(/[:]/g, "");
  const filterId = `turbulent-displace-${rawId}`;
  const svgRef = useRef(null);
  const rootRef = useRef(null);
  const strokeRef = useRef(null);
  const updateAnim = () => {
    const svg = svgRef.current;
    const host = rootRef.current;
    if (!svg || !host) return;
    if (strokeRef.current) {
      strokeRef.current.style.filter = `url(#${filterId})`;
    }
    const width = Math.max(1, Math.round(host.clientWidth || host.getBoundingClientRect().width || 0));
    const height = Math.max(1, Math.round(host.clientHeight || host.getBoundingClientRect().height || 0));
    const dyAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dy"]'));
    if (dyAnims.length >= 2) {
      dyAnims[0].setAttribute("values", `${height}; 0`);
      dyAnims[1].setAttribute("values", `0; -${height}`);
    }
    const dxAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dx"]'));
    if (dxAnims.length >= 2) {
      dxAnims[0].setAttribute("values", `${width}; 0`);
      dxAnims[1].setAttribute("values", `0; -${width}`);
    }
    const baseDur = 6;
    const dur = Math.max(1e-3, baseDur / (speed || 1));
    [...dyAnims, ...dxAnims].forEach((a) => a.setAttribute("dur", `${dur}s`));
    const disp = svg.querySelector("feDisplacementMap");
    if (disp) disp.setAttribute("scale", String(30 * (chaos || 1)));
    const filterEl = svg.querySelector(`#${CSS.escape(filterId)}`);
    if (filterEl) {
      filterEl.setAttribute("x", "-200%");
      filterEl.setAttribute("y", "-200%");
      filterEl.setAttribute("width", "500%");
      filterEl.setAttribute("height", "500%");
    }
    requestAnimationFrame(() => {
      [...dyAnims, ...dxAnims].forEach((a) => {
        if (typeof a.beginElement === "function") {
          try {
            a.beginElement();
          } catch {
          }
        }
      });
    });
  };
  useEffect(() => {
    updateAnim();
  }, [speed, chaos]);
  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const ro = new ResizeObserver(() => updateAnim());
    ro.observe(rootRef.current);
    updateAnim();
    return () => ro.disconnect();
  }, []);
  const inheritRadius = {
    borderRadius: style?.borderRadius ?? "inherit"
  };
  const strokeStyle = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: color
  };
  const glow1Style = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: hexToRgba(color, 0.6),
    filter: `blur(${0.5 + thickness * 0.25}px)`,
    opacity: 0.5
  };
  const glow2Style = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: color,
    filter: `blur(${2 + thickness * 0.5}px)`,
    opacity: 0.5
  };
  const bgGlowStyle = {
    ...inheritRadius,
    transform: "scale(1.08)",
    filter: "blur(32px)",
    opacity: 0.3,
    zIndex: -1,
    background: `linear-gradient(-30deg, ${hexToRgba(color, 0.8)}, transparent, ${color})`
  };
  const memoizedChildren = useMemo(() => children, [children]);
  return /* @__PURE__ */ jsxs("div", { ref: rootRef, className: "relative isolate " + (className ?? ""), style, children: [
    /* @__PURE__ */ jsx(
      "svg",
      {
        ref: svgRef,
        className: "fixed -left-[10000px] -top-[10000px] w-[10px] h-[10px] opacity-[0.001] pointer-events-none",
        "aria-hidden": true,
        focusable: "false",
        children: /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("filter", { id: filterId, colorInterpolationFilters: "sRGB", x: "-20%", y: "-20%", width: "140%", height: "140%", children: [
          /* @__PURE__ */ jsx("feTurbulence", { type: "turbulence", baseFrequency: "0.02", numOctaves: "10", result: "noise1", seed: "1" }),
          /* @__PURE__ */ jsx("feOffset", { in: "noise1", dx: "0", dy: "0", result: "offsetNoise1", children: /* @__PURE__ */ jsx("animate", { attributeName: "dy", values: "700; 0", dur: "6s", repeatCount: "indefinite", calcMode: "linear" }) }),
          /* @__PURE__ */ jsx("feTurbulence", { type: "turbulence", baseFrequency: "0.02", numOctaves: "10", result: "noise2", seed: "1" }),
          /* @__PURE__ */ jsx("feOffset", { in: "noise2", dx: "0", dy: "0", result: "offsetNoise2", children: /* @__PURE__ */ jsx("animate", { attributeName: "dy", values: "0; -700", dur: "6s", repeatCount: "indefinite", calcMode: "linear" }) }),
          /* @__PURE__ */ jsx("feTurbulence", { type: "turbulence", baseFrequency: "0.02", numOctaves: "10", result: "noise1", seed: "2" }),
          /* @__PURE__ */ jsx("feOffset", { in: "noise1", dx: "0", dy: "0", result: "offsetNoise3", children: /* @__PURE__ */ jsx("animate", { attributeName: "dx", values: "490; 0", dur: "6s", repeatCount: "indefinite", calcMode: "linear" }) }),
          /* @__PURE__ */ jsx("feTurbulence", { type: "turbulence", baseFrequency: "0.02", numOctaves: "10", result: "noise2", seed: "2" }),
          /* @__PURE__ */ jsx("feOffset", { in: "noise2", dx: "0", dy: "0", result: "offsetNoise4", children: /* @__PURE__ */ jsx("animate", { attributeName: "dx", values: "0; -490", dur: "6s", repeatCount: "indefinite", calcMode: "linear" }) }),
          /* @__PURE__ */ jsx("feComposite", { in: "offsetNoise1", in2: "offsetNoise2", result: "part1" }),
          /* @__PURE__ */ jsx("feComposite", { in: "offsetNoise3", in2: "offsetNoise4", result: "part2" }),
          /* @__PURE__ */ jsx("feBlend", { in: "part1", in2: "part2", mode: "color-dodge", result: "combinedNoise" }),
          /* @__PURE__ */ jsx(
            "feDisplacementMap",
            {
              in: "SourceGraphic",
              in2: "combinedNoise",
              scale: "30",
              xChannelSelector: "R",
              yChannelSelector: "B"
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", style: inheritRadius, children: [
      /* @__PURE__ */ jsx("div", { ref: strokeRef, className: "absolute inset-0 box-border", style: strokeStyle }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 box-border", style: glow1Style }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 box-border", style: glow2Style }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: bgGlowStyle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative flex items-center justify-center", style: inheritRadius, children: memoizedChildren })
  ] });
}, (prevProps, nextProps) => {
  return prevProps.disabled === nextProps.disabled && prevProps.color === nextProps.color && prevProps.thickness === nextProps.thickness && prevProps.className === nextProps.className && // Compare style objects by reference (shallow comparison)
  prevProps.style === nextProps.style && // Children comparison - if children reference is the same, skip re-render
  // useMemo inside will handle actual children content changes
  prevProps.children === nextProps.children;
});
ElectricBorder.displayName = "ElectricBorder";

const Component = ({ ref, asNewTab = false, className, uri, children, focus = false }) => {
  const fullClassName = `hyperlink text-blue-500 dark:text-blue-200 hover:text-teal-300 dark:hover:text-teal-200 ${focus && "py-2"} transition-colors ${className}`;
  return /* @__PURE__ */ jsx("a", { ref, target: asNewTab ? "_blank" : "_self", href: uri, className: fullClassName, children: /* @__PURE__ */ jsx(
    ElectricBorder,
    {
      color: "#0ea5e950",
      speed: 1,
      chaos: 0.5,
      thickness: 2,
      style: { borderRadius: 2 },
      className: "py-2 px-2 w-full",
      disabled: !focus,
      children
    }
  ) }, uri);
};

const $$Astro$3 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Logo;
  const { className, imgClassName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Link", Component, { "id": "logo", "uri": "/", "className": " flex flex-start h-14 items-center " + (className || ""), "data-astro-cid-nlmvrfkw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`w-8 h-8 bg-transparent rounded flex items-center justify-center relative ${imgClassName}`, "class")} data-astro-cid-nlmvrfkw> <img src="/ara_logo.png" id="logoImg" alt="Ara Logo" class="w-full h-full absolute inset-0" loading="eager" fetchpriority="high" decoding="async" data-astro-cid-nlmvrfkw> <img src="/ara_logo_hover.png" id="hoveredLogoImg" alt="Ara Logo" class="w-full h-full absolute inset-0" loading="lazy" decoding="async" data-astro-cid-nlmvrfkw> </div> ` })} `;
}, "/home/medet/ara-app/src/components/utilitified_decorations/Logo.astro", void 0);

const getIcon = (props) => {
  const iconType = typeof props === "string" ? props : props.iconType;
  const width = typeof props === "object" && props.width ? props.width : "w-4";
  const height = typeof props === "object" && props.height ? props.height : "h-4";
  const fill = typeof props === "object" && props.fill ? props.fill : "none";
  const className = `${width} ${height} ${typeof props === "object" && props.className ? props.className : ""}`;
  switch (iconType) {
    case "github":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z", clipRule: "evenodd" }) });
    case "analytics":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" }) });
    case "money":
      return /* @__PURE__ */ jsxs("svg", { className, fill: "currentColor", viewBox: "0 0 20 20", children: [
        /* @__PURE__ */ jsx("path", { d: "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" }),
        /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z", clipRule: "evenodd" })
      ] });
    case "email":
      return /* @__PURE__ */ jsxs("svg", { className, fill: "currentColor", viewBox: "0 0 20 20", children: [
        /* @__PURE__ */ jsx("path", { d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" }),
        /* @__PURE__ */ jsx("path", { d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" })
      ] });
    case "info":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd", fill: "#6B7280" }) });
    case "new-file":
      return /* @__PURE__ */ jsx("svg", { className, viewBox: "0 0 24 24", fill, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11V21H5V3H13V9H21Z", fill: "#22C55E" }) });
    case "question":
      return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill, xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "2" }),
        /* @__PURE__ */ jsx("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M12 17h.01", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
      ] });
    case "likes":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" }) });
    case "clock":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }) });
    case "heart":
      return /* @__PURE__ */ jsx("svg", { className: `${className} text-rose-700 dark:text-rose-500`, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z", clipRule: "evenodd" }) });
    case "vote-priority":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" }) });
    case "energy":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) });
    case "project":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" }) });
    case "star":
      return /* @__PURE__ */ jsx("svg", { className: `${className}`, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) });
    case "star-filled":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) });
    case "fork":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
    case "settings":
      return /* @__PURE__ */ jsxs("svg", { className: className + " mr", fill, stroke: "currentColor", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
        /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
      ] });
    case "maintainer":
      return /* @__PURE__ */ jsxs("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
        /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
      ] });
    case "contributor":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) });
    case "influencer":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }) });
    case "play":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z", clipRule: "evenodd" }) });
    case "user":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" }) });
    case "dev":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" }) });
    case "person":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }) });
    case "chat":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) });
    case "navigation":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) });
    case "advantage":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
    case "description":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
    case "warning":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
    case "pioneer-recognition":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) });
    case "first-access":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" }) });
    case "influence-platform":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }) });
    case "early-visibility":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" }) });
    case "ten-pm-ten-min":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) });
    case "fire":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) });
    case "connection":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) });
    case "recognition":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) });
    case "better-features":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }) });
    case "new-project":
      return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 20 20", fill, xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsx("path", { d: "M10 2L15 7H12V13H8V7H5L10 2Z", fill: "#22C55E" }),
        /* @__PURE__ */ jsx("path", { d: "M4 15H16V17H4V15Z", fill: "#22C55E" })
      ] });
    case "success":
      return /* @__PURE__ */ jsx("svg", { className: `${className} text-green-600 dark:text-green-600`, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) });
    case "arrow":
      return /* @__PURE__ */ jsxs("svg", { className, width: "20", height: "10", viewBox: "0 0 20 10", fill, children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z",
            className: "fill-[canvas]"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z",
            className: "fill-gray-200 dark:fill-none"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z",
            className: "dark:fill-gray-300"
          }
        )
      ] });
    case "arrow-left":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 19l-7-7m0 0l7-7m-7 7h18" }) });
    case "arrow-right":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14 5l7 7m0 0l-7 7m7-7H3" }) });
    case "arrow-right-down":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 12L15 12M15 12L15 18M13 16L15 18L17 16" }) });
    case "check":
      return /* @__PURE__ */ jsx("svg", { className: `text-green ${className}`, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) });
    case "ara":
      return /* @__PURE__ */ jsx(
        "img",
        {
          src: "/ara_logo.png",
          alt: "Ara Logo",
          className,
          style: { objectFit: "contain" }
        }
      );
    case "issue":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) });
    case "influencer-history":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) });
    case "influencer-work":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) });
    case "balance":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z" }) });
    case "cascading-balance":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" }) });
    case "project-info":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" }) });
    case "marketing":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" }) });
    case "work":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" }) });
    case "cascading-work":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" }) });
    case "bluesky":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", stroke: "currentColor", viewBox: "0 0 600 530", preserveAspectRatio: "xMidYMid meet", children: /* @__PURE__ */ jsx("path", { d: "M407.8 294.7c-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3 61.6-9.4 37.5-1.7 21.6 5.5 3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7 3.3-.5 6.6-.9 10-1.4-3.3 .5-6.6 1-10 1.4-93.9 14-177.3 48.2-67.9 169.9 120.3 124.6 164.8-26.7 187.7-103.4 22.9 76.7 49.2 222.5 185.6 103.4 102.4-103.4 28.1-156-65.8-169.9-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3 64.1 7.1 133.6-15.1 153.2-80.7 5.9-19.9 15-138.9 15-155.5s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8-66.1 46.6-137.1 141.1-163.2 191.8z" }) });
    case "wallet":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 10h18M7 15h1m-1 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" }) });
    case "sunshine":
      return /* @__PURE__ */ jsxs("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3", fill: "currentColor" }),
        /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83M12 5.5l1.5 1.5M12 17l1.5 1.5M5.5 12l1.5-1.5M17 12l1.5-1.5M7.76 7.76l1.06 1.06M15.18 15.18l1.06 1.06M7.76 16.24l1.06-1.06M15.18 8.82l1.06-1.06" })
      ] });
    case "percentage":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 7a2 2 0 11-4 0 2 2 0 014 0zM9 17a2 2 0 11-4 0 2 2 0 014 0zM19 7a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM7 7l10 10" }) });
    case "unattached":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" }) });
    case "arrow-to-br-corner":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" }) });
    case "multiple-users":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" }) });
    case "revert":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" }) });
    case "lock":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }) });
    case "trophy":
      return /* @__PURE__ */ jsx("svg", { className: `${className} text-yellow-500 dark:text-yellow-400/60 hover:text-yellow-500/80 dark:hover:text-yellow-400/80 transition-all duration-100`, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" }) });
    case "mekga":
      return /* @__PURE__ */ jsxs("svg", { className: `${className} text-blue-500 dark:text-blue-400`, fill: "currentColor", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "7", r: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "17", r: "1.5", fill: "currentColor" })
      ] });
    case "copy":
      return /* @__PURE__ */ jsx("svg", { className, fill, stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }) });
    case "discord":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" }) });
    case "youtube":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }) });
    case "x":
      return /* @__PURE__ */ jsx("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) });
    default:
      return /* @__PURE__ */ jsx("svg", { className: `${className} text-purple-600`, fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
  }
};

const Badge = ({ children, variant = "gray", active = false, static: disableAnimation = true, className = "" }) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-normal border";
  const variantClasses = {
    gray: active ? "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600" : "bg-transparent dark:bg-transparent text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700",
    blue: active ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800" : "bg-transparent dark:bg-transparent text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    green: active ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800" : "bg-transparent dark:bg-transparent text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
    red: active ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800" : "bg-transparent dark:bg-transparent text-red-600 dark:text-red-400 border-red-200 dark:border-red-800",
    yellow: active ? "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800" : "bg-transparent dark:bg-transparent text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
    purple: active ? "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800" : "bg-transparent dark:bg-transparent text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
    orange: active ? "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800" : "bg-transparent dark:bg-transparent text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
    success: active ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800" : "bg-transparent dark:bg-transparent text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
    warning: active ? "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800" : "bg-transparent dark:bg-transparent text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
    danger: active ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800" : "bg-transparent dark:bg-transparent text-red-600 dark:text-red-400 border-red-200 dark:border-red-800",
    info: active ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800" : "bg-transparent dark:bg-transparent text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    teal: active ? "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800" : "bg-transparent dark:bg-transparent text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800",
    default: active ? "bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800" : "bg-transparent dark:bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800"
  };
  const animationClasses = "animate-ping";
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: `relative ${className}`,
      children: [
        disableAnimation ? null : /* @__PURE__ */ jsx("span", { className: `${animationClasses} inset-0 rounded-md text-xs w-100/50 ${variantClasses[variant]} absolute` }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `${baseClasses} ${variantClasses[variant]} relative flex items-center`,
            children
          }
        )
      ]
    }
  );
};

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

const $$Astro$2 = createAstro();
var MenuName = /* @__PURE__ */ ((MenuName2) => {
  MenuName2["ProjectList"] = "ProjectList";
  MenuName2["ProjectName"] = "ProjectName";
  return MenuName2;
})(MenuName || {});
const $$WorkNavbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WorkNavbar;
  const { tabIndex, vertical, active, hideLinks, className, additional } = Astro2.props;
  const isItemShown = (item) => {
    return active !== item && (hideLinks === void 0 || hideLinks.findIndex((el) => el === item) == -1);
  };
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(` ${className || ""} z-999! ${vertical ? "shadow-lg w-40" : "w-full"}`, "class")}${addAttribute(tabIndex, "tabindex")}> ${renderSlot($$result, $$slots["default"])} <div${addAttribute(vertical ? "text-sm " : "breadcrumbs text-sm", "class")}> <ul${addAttribute(vertical ? "flex flex-col " : "w-full justify-center", "class")}> ${additional?.map((item) => renderTemplate`<li> ${renderComponent($$result, "MenuItem", MenuItem, { ...item })} </li>`)} ${isItemShown("ProjectList" /* ProjectList */) && renderTemplate`<li class=""> ${renderComponent($$result, "MenuItem", MenuItem, { "icon": "project-info", "label": "Projects", "uri": "/data/projects", "active": active === "ProjectList" /* ProjectList */, "badges": [
    {
      children: "2",
      variant: "blue",
      active: active === "ProjectList" /* ProjectList */
    },
    {
      children: "2",
      variant: "red",
      active: active === "ProjectList" /* ProjectList */
    }
  ] }, { "default": ($$result2) => renderTemplate`
Projects
` })} </li>`} ${isItemShown("ProjectName" /* ProjectName */) && renderTemplate`<li> ${renderComponent($$result, "MenuItem", MenuItem, { "icon": "project-info", "label": "Reflect", "uri": "/data/project", "active": active === "ProjectName" /* ProjectName */ }, { "default": ($$result2) => renderTemplate`
Reflect
` })} </li>`} </ul> </div> </nav>`;
}, "/home/medet/ara-app/src/components/navbar/WorkNavbar.astro", void 0);

({
  ["formalResponsibleCollaborationAccent" /* formalResponsibleCollaborationAccent */]: {
    howTo: /* @__PURE__ */ jsxs(motion.ul, { className: "space-y-3", children: [
      /* @__PURE__ */ jsxs(motion.li, { className: "flex items-start gap-3 ml-4", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-1 flex-shrink-0", children: getIcon({ iconType: "project", className: "w-5 h-5 text-blue-500" }) }),
        /* @__PURE__ */ jsx("span", { children: "Turn your open-source projects into structured, accountable collaborations:" })
      ] }),
      /* @__PURE__ */ jsxs(motion.li, { className: "flex items-start gap-3 ml-4", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-1 flex-shrink-0", children: getIcon({ iconType: "issue", className: "w-5 h-5 text-purple-500" }) }),
        /* @__PURE__ */ jsx("span", { children: "Users open issues, contributors submit patches, and maintainers review and release them." })
      ] }),
      /* @__PURE__ */ jsxs(motion.li, { className: "flex items-start gap-3 ml-4", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-1 flex-shrink-0", children: getIcon({ iconType: "work", className: "w-5 h-5 text-green-500" }) }),
        /* @__PURE__ */ jsx("span", { children: "A self-checking to-do automates the routine, making formal process seamless." })
      ] })
    ] })
  },
  ["questSystemAccent" /* questSystemAccent */]: {
    howTo: /* @__PURE__ */ jsxs(motion.div, { className: "space-y-3", children: [
      "Here is how collaboration is implemented as a gamified guide within Ara:",
      /* @__PURE__ */ jsxs("ul", { className: "space-y-3 mt-2", children: [
        /* @__PURE__ */ jsx("li", { children: "🔌 Todo Tasks are automatically generated after certain user actions. 😌 You don't have to create them yourself." }),
        /* @__PURE__ */ jsx("li", { children: "🎮 Web pages show these tasks inside an interactive mini-player." }),
        /* @__PURE__ */ jsxs("li", { children: [
          '🚀 When you "play":',
          /* @__PURE__ */ jsxs("ul", { className: "ml-6 mt-2 space-y-2 list-disc", children: [
            /* @__PURE__ */ jsx("li", { children: "the system opens the exact page 📄" }),
            /* @__PURE__ */ jsx("li", { children: "scrolls to the correct section ✍️" }),
            /* @__PURE__ */ jsx("li", { children: "and focuses the required element ⚡" }),
            /* @__PURE__ */ jsx("li", { children: "might add three quick solutions by 🤖" }),
            /* @__PURE__ */ jsxs("li", { children: [
              "after you:",
              /* @__PURE__ */ jsx("div", { className: "ml-6 mt-1 space-y-1", children: /* @__PURE__ */ jsx("div", { children: "wrote the data  | choose one of the options" }) }),
              "the task is automatically checked off ✅."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("li", { children: "⏭️ The player automatically proceeds to the next task, letting you keep momentum without interruption." })
      ] })
    ] })
  },
  ["timeSavedProjectManagementAccent" /* timeSavedProjectManagementAccent */]: {
    howTo: /* @__PURE__ */ jsxs(motion.div, { className: "space-y-3", children: [
      "In Ara collaboration is done using todo tasks.",
      /* @__PURE__ */ jsxs("ul", { className: "space-y-3 mt-2", children: [
        /* @__PURE__ */ jsx("li", { children: "🔌 Todo Tasks are automatically generated after certain user actions. 😌 You don't have to create them yourself." }),
        /* @__PURE__ */ jsx("li", { children: "🎮 Web pages show these tasks inside an interactive mini-player." }),
        /* @__PURE__ */ jsxs("li", { children: [
          '🚀 When you "play":',
          /* @__PURE__ */ jsxs("ul", { className: "ml-6 mt-2 space-y-2 list-disc", children: [
            /* @__PURE__ */ jsx("li", { children: "the system opens the exact page 📄" }),
            /* @__PURE__ */ jsx("li", { children: "scrolls to the correct section ✍️" }),
            /* @__PURE__ */ jsx("li", { children: "and focuses the required element ⚡" }),
            /* @__PURE__ */ jsx("li", { children: "might show solutions by 🤖" }),
            /* @__PURE__ */ jsxs("li", { children: [
              "after you:",
              /* @__PURE__ */ jsx("div", { className: "ml-6 mt-1 space-y-1", children: /* @__PURE__ */ jsx("div", { children: "wrote the data  | choose one of the options" }) }),
              "the task is automatically checked off ✅."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("li", { children: "⏭️ The player automatically proceeds to the next task, letting you keep momentum without interruption." })
      ] })
    ] })
  }
  // [Accent.visionaryAccent]: {
  // title1: "The first platform for maintainers to grow PRs and support",
  // title2: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
  // },
});
const socialLinks = {
  // News links
  twitter: {
    url: "https://x.com/ara_foundation_",
    type: "twitter",
    category: "news",
    useCustomIcon: false,
    label: "X (Twitter)"
  },
  bluesky: {
    url: "https://bsky.app/profile/ara.foundation",
    type: "bluesky",
    category: "news",
    useCustomIcon: true,
    label: "Bluesky"
  },
  // Community links
  telegram: {
    url: "https://t.me/arasangha",
    type: "telegram",
    category: "community",
    useCustomIcon: false,
    label: "Telegram"
  },
  discord: {
    url: "https://discord.gg/u4dMgVsq",
    type: "discord",
    category: "community",
    useCustomIcon: false,
    label: "Discord"
  },
  // External links
  github: {
    url: "https://github.com/ara-foundation/app",
    type: "github",
    category: "external",
    useCustomIcon: false,
    label: "GitHub"
  },
  linkedin: {
    url: "https://www.linkedin.com/company/ara-foundation",
    type: "linkedin",
    category: "external",
    useCustomIcon: false,
    label: "LinkedIn"
  }
};
const companyInfo = {
  copyrightYear: 2026,
  email: "info@ara.foundation",
  registeredName: "Pak Unity Ltd.",
  address: "11 vong ha, hanoi, vietnam"
};

const SocialLink = ({
  link,
  className = "flex rounded-sm w-8 h-8"
}) => {
  const brandColors = {
    github: "#00accc",
    // GitHub dark gray/black
    telegram: "#0088cc",
    // Bluesky blue
    discord: "#5865F2",
    // Discord blurple
    linkedin: "#0077B5"
    // LinkedIn blue
  };
  const brandColorClasses = {
    github: "text-black w-5 h-5",
    // GitHub dark gray/black
    telegram: "text-[#0088cc] w-5 h-5",
    // Telegram blue
    twitter: "text-blue-500 w-5 h-5",
    // Twitter/X black
    bluesky: "text-[#00A3FF] w-5 h-5",
    // Bluesky blue
    discord: "text-[#5865F2] w-5 h-5",
    // Discord blurple
    linkedin: "text-[#0077B5] w-5 h-5"
    // LinkedIn blue
  };
  const renderIcon = () => {
    if (link.useCustomIcon) {
      return getIcon({
        iconType: link.type,
        className: brandColorClasses[link.type]
      });
    }
    const iconMap = {
      github: /* @__PURE__ */ jsx(FaGithub, { color: brandColors.github, size: 20, className: brandColorClasses.github }),
      telegram: /* @__PURE__ */ jsx(FaTelegram, { color: brandColors.telegram, size: 20, className: brandColorClasses.telegram }),
      twitter: getIcon({ iconType: "x", className: brandColorClasses.twitter }),
      bluesky: getIcon({ iconType: "bluesky", className: brandColorClasses.bluesky }),
      discord: /* @__PURE__ */ jsx(FaDiscord, { color: brandColors.discord, size: 20, className: brandColorClasses.discord }),
      linkedin: /* @__PURE__ */ jsx(FaLinkedin, { color: brandColors.linkedin, size: 20, className: brandColorClasses.linkedin })
    };
    return iconMap[link.type];
  };
  return /* @__PURE__ */ jsx(
    Component,
    {
      uri: link.url,
      asNewTab: true,
      className,
      "aria-label": `Visit our ${link.type} page`,
      children: renderIcon()
    }
  );
};

const $$Astro$1 = createAstro();
const $$HeaderCosmic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeaderCosmic;
  const { active, hideLinks, hideAuth, additional } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`shadow-sm border-b border-purple-200/10 dark:border-purple-700/10 fixed top-0 right-0 left-0 z-900`, "class")}> <div class="navbar bg-base-transparent dark:bg-transparent shadow-sm items-start min-h-6"> <div class="navbar-start h-6"> <div class="dropdown"> <div${addAttribute(0, "tabindex")} role="button" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path> </svg> </div> ${renderComponent($$result, "WorkNavbar", $$WorkNavbar, { "tabIndex": "-1", "additional": additional, "className": "menu menu-sm dropdown-content bg-base-100 dark:bg-slate-800 rounded-box z-1 mt-3 w-52 p-2 shadow dark:shadow-slate-700", "active": active ? active : void 0, "hideLinks": hideLinks ? hideLinks : void 0, "vertical": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div> ${renderComponent($$result, "Logo", $$Logo, {})} ${renderComponent($$result, "Badge", Badge, { "variant": "purple", "className": "text-slate-500 dark:text-slate-400 text-sm" }, { "default": ($$result2) => renderTemplate`Demo` })} ${renderComponent($$result, "motion.div", motion.div, { "className": "flex flex-row items-center space-x-2 ml-4 w-full" }, { "default": ($$result2) => renderTemplate`${Object.values(socialLinks).map((link) => renderTemplate`${renderComponent($$result2, "SocialLink", SocialLink, { "className": "flex rounded-sm w-8 h-8 mt-3", "link": link })}`)}` })} </div> <div class="navbar-center h-6 hidden lg:flex lg:min-w-[50vw]"> ${renderComponent($$result, "WorkNavbar", $$WorkNavbar, { "className": "space-x-6", "active": active ? active : void 0, "hideLinks": hideLinks ? hideLinks : void 0 }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div> <div class="navbar-end flex h-6 items-center gap-3"> ${!hideAuth && renderTemplate`${renderComponent($$result, "AuthNavItem", null, { "className": "py-2! px-2!", "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/medet/ara-app/src/components/utilitified_decorations/AuthNavItem", "client:component-export": "default" })}`} </div> </div> </header> `;
}, "/home/medet/ara-app/src/components/utilitified_decorations/HeaderCosmic.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`backdrop-blur-lg text-slate-500 dark:text-slate-500 flex justify-between p-2 items-center overflow-hidden `, "class")}> <div${addAttribute(`flex space-x-4`, "class")}> ${renderComponent($$result, "Link", Component, { "uri": "/how-it-works", "className": " text-slate-600 dark:text-slate-400 transition-colors" }, { "default": ($$result2) => renderTemplate`How it Works?` })} ${renderComponent($$result, "Link", Component, { "uri": "/people", "className": " text-slate-600 dark:text-slate-400 transition-colors" }, { "default": ($$result2) => renderTemplate`People` })} ${renderComponent($$result, "Link", Component, { "uri": "/privacy-policy", "className": " text-slate-600 dark:text-slate-400 transition-colors" }, { "default": ($$result2) => renderTemplate`Privacy Policy (fun-storylike-edition)` })} </div> <div class="text-sm">
(c) ${companyInfo.copyrightYear}, <a${addAttribute("mailto:" + companyInfo.email, "href")} class="text-slate-600 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400">${companyInfo.email}</a>, registered: ${companyInfo.registeredName}, ${companyInfo.address} </div> </footer>`;
}, "/home/medet/ara-app/src/components/utilitified_decorations/Footer.astro", void 0);

var RoundedSize = /* @__PURE__ */ ((RoundedSize2) => {
  RoundedSize2["roundedXs"] = "rounded-xs";
  RoundedSize2["roundedNone"] = "rounded-none";
  RoundedSize2["roundedSm"] = "rounded-sm";
  RoundedSize2["roundedMd"] = "rounded-md";
  RoundedSize2["roundedLg"] = "rounded-lg";
  RoundedSize2["roundedXl"] = "rounded-xl";
  RoundedSize2["rounded2xl"] = "rounded-2xl";
  RoundedSize2["rounded3xl"] = "rounded-3xl";
  RoundedSize2["roundedFull"] = "rounded-full";
  return RoundedSize2;
})(RoundedSize || {});
var ShadowSize = /* @__PURE__ */ ((ShadowSize2) => {
  ShadowSize2["shadowSm"] = "shadow-sm";
  ShadowSize2["shadowXs"] = "shadow-xs";
  ShadowSize2["shadowMd"] = "shadow-md";
  ShadowSize2["shadowLg"] = "shadow-lg";
  ShadowSize2["shadowXl"] = "shadow-xl";
  ShadowSize2["shadow2xl"] = "shadow-2xl";
  ShadowSize2["shadow3xl"] = "shadow-3xl";
  ShadowSize2["shadow4xl"] = "shadow-4xl";
  ShadowSize2["shadow5xl"] = "shadow-5xl";
  ShadowSize2["shadowNone"] = "shadow-none";
  return ShadowSize2;
})(ShadowSize || {});
var BorderSize = /* @__PURE__ */ ((BorderSize2) => {
  BorderSize2["border0"] = "border-0";
  BorderSize2["border1"] = "border-1";
  BorderSize2["border2"] = "border-2";
  BorderSize2["border4"] = "border-4";
  BorderSize2["borderNone"] = "border-none";
  return BorderSize2;
})(BorderSize || {});
const GridStyle = {
  panel: {
    gap: {
      y: "space-y-4"},
    margin: {
      x: "mx-4",
      left: "ml-4",
      right: "mr-4",
      top: "mt-4",
      bottom: "mb-6"
    }
  },
  content: {
    padding: {
      x: "px-1"}}
};
const bgClassNames = {
  ["listContent" /* listContent */]: "bg-gradient-to-b from-gray-200 via-transparent to-gray-300 dark:text-gray-900 dark:from-gray-800 dark:via-transparent dark:to-gray-800"
};

const $$Astro = createAstro();
const $$ThreeColumnGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThreeColumnGrid;
  let {
    className,
    centerPercents,
    centerClassName,
    leftClassName,
    rightClassName
  } = Astro2.props;
  if (className === void 0) {
    className = " mx-auto ";
  }
  if (centerPercents === void 0) {
    centerPercents = 50;
  }
  const cols = centerPercents === "1/3" ? "lg:grid-cols-3" : centerPercents === 50 ? "lg:grid-cols-4" : centerPercents === "3/4" ? "lg:grid-cols-8" : centerPercents === "4/5" ? "lg:grid-cols-10" : "lg:grid-cols-10";
  const centerSpan = centerPercents === "1/3" ? "lg:col-span-1" : centerPercents === 50 ? "lg:col-span-2" : centerPercents === "3/4" ? "lg:col-span-6" : centerPercents === "4/5" ? "lg:col-span-8" : "lg:col-span-6";
  const leftSpan = centerPercents === "3/5" ? "lg:col-span-2" : "lg:col-span-1";
  const rightSpan = centerPercents === "3/5" ? "lg:col-span-2" : "lg:col-span-1";
  return renderTemplate`${maybeRenderHead()}<main${addAttribute(`grid grid-cols-1 ${cols} ${className}`, "class")}> <div${addAttribute(`${leftSpan} ${GridStyle.panel.gap.y} ${GridStyle.panel.margin.right} ${leftClassName || ""}`, "class")}> ${renderSlot($$result, $$slots["left"])} </div> <div${addAttribute(`${centerSpan} ${GridStyle.panel.gap.y} ${GridStyle.panel.margin.x} ${centerClassName || ""}`, "class")}> ${renderSlot($$result, $$slots["center"])} </div> <div${addAttribute(`${rightSpan} ${GridStyle.panel.gap.y} ${GridStyle.panel.margin.left} ${rightClassName || ""}`, "class")}> ${renderSlot($$result, $$slots["right"])} </div> </main>`;
}, "/home/medet/ara-app/src/components/grid/ThreeColumnGrid.astro", void 0);

function GridSmallBackground() {
  return /* @__PURE__ */ jsxs("div", { className: "fixed h-screen w-screen z-0 bg-transparent", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "absolute inset-0 bg-fixed",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "bg-fixed pointer-events-none absolute inset-0 flex items-center justify-center bg-white/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black/50" })
  ] });
}

function GravityStarsBackground({
  starsCount = 75,
  starsSize = 2,
  starsOpacity = 0.75,
  glowIntensity = 15,
  glowAnimation = "ease",
  movementSpeed = 0.3,
  mouseInfluence = 100,
  mouseGravity = "attract",
  gravityStrength = 75,
  starsInteraction = false,
  starsInteractionType = "bounce",
  className,
  ...props
}) {
  const containerRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const animRef = React.useRef(null);
  const starsRef = React.useRef([]);
  const mouseRef = React.useRef({ x: 0, y: 0 });
  const [dpr, setDpr] = React.useState(1);
  const [canvasSize, setCanvasSize] = React.useState({
    width: 800,
    height: 600
  });
  const readColor = React.useCallback(() => {
    const el = containerRef.current;
    if (!el) return "#ffffff";
    const cs = getComputedStyle(el);
    return cs.color || "#ffffff";
  }, []);
  const initStars = React.useCallback(
    (w, h) => {
      starsRef.current = Array.from({ length: starsCount }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const speed = movementSpeed * (0.5 + Math.random() * 0.5);
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * starsSize + 1,
          opacity: starsOpacity,
          baseOpacity: starsOpacity,
          mass: Math.random() * 0.5 + 0.5,
          glowMultiplier: 1,
          glowVelocity: 0
        };
      });
    },
    [starsCount, movementSpeed, starsOpacity, starsSize]
  );
  const redistributeStars = React.useCallback((w, h) => {
    starsRef.current.forEach((p) => {
      p.x = Math.random() * w;
      p.y = Math.random() * h;
    });
  }, []);
  const resizeCanvas = React.useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    const nextDpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    setDpr(nextDpr);
    canvas.width = Math.max(1, Math.floor(rect.width * nextDpr));
    canvas.height = Math.max(1, Math.floor(rect.height * nextDpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    setCanvasSize({ width: rect.width, height: rect.height });
    if (starsRef.current.length === 0) {
      initStars(rect.width, rect.height);
    } else {
      redistributeStars(rect.width, rect.height);
    }
  }, [initStars, redistributeStars]);
  const handlePointerMove = React.useCallback(
    (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;
      if ("touches" in e) {
        const t = e.touches[0];
        if (!t) return;
        clientX = t.clientX;
        clientY = t.clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      mouseRef.current = { x: clientX - rect.left, y: clientY - rect.top };
    },
    []
  );
  const updateStars = React.useCallback(() => {
    const w = canvasSize.width;
    const h = canvasSize.height;
    const mouse = mouseRef.current;
    for (let i = 0; i < starsRef.current.length; i++) {
      const p = starsRef.current[i];
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist < mouseInfluence && dist > 0) {
        const force = (mouseInfluence - dist) / mouseInfluence;
        const nx = dx / dist;
        const ny = dy / dist;
        const g = force * (gravityStrength * 1e-3);
        if (mouseGravity === "attract") {
          p.vx += nx * g;
          p.vy += ny * g;
        } else if (mouseGravity === "repel") {
          p.vx -= nx * g;
          p.vy -= ny * g;
        }
        p.opacity = Math.min(1, p.baseOpacity + force * 0.4);
        const targetGlow = 1 + force * 2;
        const currentGlow = p.glowMultiplier || 1;
        if (glowAnimation === "instant") {
          p.glowMultiplier = targetGlow;
        } else if (glowAnimation === "ease") {
          const ease = 0.15;
          p.glowMultiplier = currentGlow + (targetGlow - currentGlow) * ease;
        } else {
          const spring = (targetGlow - currentGlow) * 0.2;
          const damping = 0.85;
          p.glowVelocity = (p.glowVelocity || 0) * damping + spring;
          p.glowMultiplier = currentGlow + (p.glowVelocity || 0);
        }
      } else {
        p.opacity = Math.max(p.baseOpacity * 0.3, p.opacity - 0.02);
        const targetGlow = 1;
        const currentGlow = p.glowMultiplier || 1;
        if (glowAnimation === "instant") {
          p.glowMultiplier = targetGlow;
        } else if (glowAnimation === "ease") {
          const ease = 0.08;
          p.glowMultiplier = Math.max(
            1,
            currentGlow + (targetGlow - currentGlow) * ease
          );
        } else {
          const spring = (targetGlow - currentGlow) * 0.15;
          const damping = 0.9;
          p.glowVelocity = (p.glowVelocity || 0) * damping + spring;
          p.glowMultiplier = Math.max(1, currentGlow + (p.glowVelocity || 0));
        }
      }
      if (starsInteraction) {
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const o = starsRef.current[j];
          const dx2 = o.x - p.x;
          const dy2 = o.y - p.y;
          const d = Math.hypot(dx2, dy2);
          const minD = p.size + o.size + 5;
          if (d < minD && d > 0) {
            if (starsInteractionType === "bounce") {
              const nx = dx2 / d;
              const ny = dy2 / d;
              const rvx = p.vx - o.vx;
              const rvy = p.vy - o.vy;
              const speed = rvx * nx + rvy * ny;
              if (speed < 0) continue;
              const impulse = 2 * speed / (p.mass + o.mass);
              p.vx -= impulse * o.mass * nx;
              p.vy -= impulse * o.mass * ny;
              o.vx += impulse * p.mass * nx;
              o.vy += impulse * p.mass * ny;
              const overlap = minD - d;
              const sx = nx * overlap * 0.5;
              const sy = ny * overlap * 0.5;
              p.x -= sx;
              p.y -= sy;
              o.x += sx;
              o.y += sy;
            } else {
              const mergeForce = (minD - d) / minD;
              p.glowMultiplier = (p.glowMultiplier || 1) + mergeForce * 0.5;
              o.glowMultiplier = (o.glowMultiplier || 1) + mergeForce * 0.5;
              const af = mergeForce * 0.01;
              p.vx += dx2 * af;
              p.vy += dy2 * af;
              o.vx -= dx2 * af;
              o.vy -= dy2 * af;
            }
          }
        }
      }
      p.x += p.vx;
      p.y += p.vy;
      p.vx += (Math.random() - 0.5) * 1e-3;
      p.vy += (Math.random() - 0.5) * 1e-3;
      p.vx *= 0.999;
      p.vy *= 0.999;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
    }
  }, [
    canvasSize.width,
    canvasSize.height,
    mouseInfluence,
    mouseGravity,
    gravityStrength,
    glowAnimation,
    starsInteraction,
    starsInteractionType
  ]);
  const drawStars = React.useCallback(
    (ctx) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const color = readColor();
      for (const p of starsRef.current) {
        ctx.save();
        ctx.shadowColor = color;
        ctx.shadowBlur = glowIntensity * (p.glowMultiplier || 1) * 2;
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    [dpr, glowIntensity, readColor]
  );
  const animate = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    updateStars();
    drawStars(ctx);
    animRef.current = requestAnimationFrame(animate);
  }, [updateStars, drawStars]);
  React.useEffect(() => {
    resizeCanvas();
    const container = containerRef.current;
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resizeCanvas) : null;
    if (container && ro) ro.observe(container);
    const onResize = () => resizeCanvas();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (ro && container) ro.disconnect();
    };
  }, [resizeCanvas]);
  React.useEffect(() => {
    if (starsRef.current.length === 0) {
      initStars(canvasSize.width, canvasSize.height);
    } else {
      starsRef.current.forEach((p) => {
        p.baseOpacity = starsOpacity;
        p.opacity = starsOpacity;
        const spd = Math.hypot(p.vx, p.vy);
        if (spd > 0) {
          const ratio = movementSpeed / spd;
          p.vx *= ratio;
          p.vy *= ratio;
        }
      });
    }
  }, [
    starsCount,
    starsOpacity,
    movementSpeed,
    canvasSize.width,
    canvasSize.height,
    initStars
  ]);
  React.useEffect(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      animRef.current = null;
    };
  }, [animate]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      "data-slot": "gravity-stars-background",
      className: cn("relative size-full overflow-hidden", className),
      onMouseMove: (e) => handlePointerMove(e),
      onTouchMove: (e) => handlePointerMove(e),
      ...props,
      children: /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "w-full h-full" })
    }
  );
}

function GradientBackground({
  className,
  transition = { duration: 15, ease: "easeInOut", repeat: Infinity },
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion$1.div,
    {
      "data-slot": "gradient-background",
      className: cn(
        // Light theme: light grayish colors
        "size-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300",
        // Dark theme: cosmic universe colors (deep purples, blues, dark colors)
        "dark:from-slate-900 dark:via-purple-950 dark:to-indigo-950",
        "bg-[length:400%_400%]",
        className
      ),
      animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
      transition,
      ...props
    }
  );
}

const STORAGE_KEY = "ara-browse-stack";
const MAX_STACK_SIZE = 100;
function getStack() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      return parsed.filter((item) => typeof item === "string");
    }
    return [];
  } catch (error) {
    console.error("Error reading browse stack from localStorage:", error);
    return [];
  }
}
function saveStack(stack) {
  try {
    const limitedStack = stack.slice(-MAX_STACK_SIZE);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedStack));
    window.dispatchEvent(new CustomEvent("browse-stack-changed", {
      detail: { stackSize: limitedStack.length, topUrl: limitedStack[limitedStack.length - 1] || null }
    }));
  } catch (error) {
    console.error("Error saving browse stack to localStorage:", error);
  }
}
function pushUrl(url) {
  if (!url || typeof url !== "string") {
    console.warn("Invalid URL provided to pushUrl:", url);
    return;
  }
  const stack = getStack();
  const topUrl = stack[stack.length - 1];
  if (topUrl === url) {
    return;
  }
  const parentIndex = stack.indexOf(url);
  if (parentIndex !== -1) {
    const newStack = stack.slice(0, parentIndex + 1);
    saveStack(newStack);
    return;
  }
  stack.push(url);
  saveStack(stack);
}
function popUrl() {
  const stack = getStack();
  if (stack.length === 0) {
    return null;
  }
  const url = stack.pop() || null;
  saveStack(stack);
  return url;
}
function peekParent() {
  const stack = getStack();
  if (stack.length < 2) {
    return null;
  }
  return stack[stack.length - 2] || null;
}

const BrowseTracker = () => {
  useEffect(() => {
    const currentUrl = window.location.pathname + window.location.search;
    pushUrl(currentUrl);
  }, []);
  return null;
};

export { $$ClientRouter as $, Badge as B, Component as C, ElectricBorder as E, GridStyle as G, MenuName as M, RoundedSize as R, ShadowSize as S, BorderSize as a, bgClassNames as b, MenuItem as c, BrowseTracker as d, GradientBackground as e, GridSmallBackground as f, getIcon as g, GravityStarsBackground as h, $$HeaderCosmic as i, $$ThreeColumnGrid as j, $$Footer as k, popUrl as l, peekParent as p, socialLinks as s };
