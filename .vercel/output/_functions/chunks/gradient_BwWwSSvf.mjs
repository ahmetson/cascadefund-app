import { i as createComponent, j as createAstro, m as maybeRenderHead, l as addAttribute, x as renderSlot, w as renderComponent, r as renderTemplate } from './astro/server_fdX1SiYK.mjs';
import { g as getIcon, C as Component, $ as $$Logo } from './eventTypes_PbqAZmEg.mjs';
import { M as MenuItem } from './MenuItem_CUb43d71.mjs';
import { motion } from 'framer-motion';
import { jsxs, jsx } from 'react/jsx-runtime';
import { FaTwitter, FaTelegram, FaGithub } from 'react-icons/fa';
import { B as Badge } from './Badge_B8Esv6UX.mjs';
/* empty css                         */
import { c as cn } from './utils_CRaJ9uIg.mjs';
import * as React from 'react';
import { motion as motion$1 } from 'motion/react';

const $$Astro$1 = createAstro();
var MenuName = /* @__PURE__ */ ((MenuName2) => {
  MenuName2["ProjectList"] = "ProjectList";
  MenuName2["ProjectName"] = "ProjectName";
  return MenuName2;
})(MenuName || {});
const $$WorkNavbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
  github: {
    url: "https://github.com/ara-foundation/app",
    type: "github",
    useCustomIcon: false
  },
  telegram: {
    url: "https://t.me/arasangha",
    type: "telegram",
    useCustomIcon: false
  },
  twitter: {
    url: "https://x.com/ara_foundation_",
    type: "twitter",
    useCustomIcon: false
  },
  bluesky: {
    url: "https://bsky.app/profile/ara.foundation.bsky.social",
    type: "bluesky",
    useCustomIcon: true
  }
};

const SocialLink = ({
  link,
  className = "flex rounded-sm w-8 h-8"
}) => {
  const brandColors = {
    github: "#00accc",
    // GitHub dark gray/black
    telegram: "#0088cc",
    // Telegram blue
    twitter: "#00acee"};
  const brandColorClasses = {
    github: "text-black w-5 h-5",
    // GitHub dark gray/black
    telegram: "text-[#0088cc] w-5 h-5",
    // Telegram blue
    twitter: "text-blue-500 w-5 h-5",
    // Twitter/X black
    bluesky: "text-[#00A3FF] w-5 h-5"
    // Bluesky blue
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
      twitter: /* @__PURE__ */ jsx(FaTwitter, { color: brandColors.twitter, size: 20, className: brandColorClasses.twitter }),
      bluesky: getIcon({ iconType: "bluesky", className: brandColorClasses.bluesky })
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

const $$Astro = createAstro();
const $$HeaderCosmic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderCosmic;
  const { active, hideLinks, hideAuth, additional } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`shadow-sm border-b border-purple-200/10 dark:border-purple-700/10 fixed top-0 right-0 left-0 z-900`, "class")}> <div class="navbar bg-base-transparent dark:bg-transparent shadow-sm items-start min-h-6"> <div class="navbar-start h-6"> <div class="dropdown"> <div${addAttribute(0, "tabindex")} role="button" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path> </svg> </div> ${renderComponent($$result, "WorkNavbar", $$WorkNavbar, { "tabIndex": "-1", "additional": additional, "className": "menu menu-sm dropdown-content bg-base-100 dark:bg-slate-800 rounded-box z-1 mt-3 w-52 p-2 shadow dark:shadow-slate-700", "active": active ? active : void 0, "hideLinks": hideLinks ? hideLinks : void 0, "vertical": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div> ${renderComponent($$result, "Logo", $$Logo, {})} ${renderComponent($$result, "Badge", Badge, { "variant": "purple", "className": "text-slate-500 dark:text-slate-400 text-sm" }, { "default": ($$result2) => renderTemplate`Demo` })} ${renderComponent($$result, "motion.div", motion.div, { "className": "flex flex-row items-center space-x-2 ml-4 w-full" }, { "default": ($$result2) => renderTemplate`${Object.values(socialLinks).map((link) => renderTemplate`${renderComponent($$result2, "SocialLink", SocialLink, { "className": "flex rounded-sm w-8 h-8 mt-3", "link": link })}`)}` })} </div> <div class="navbar-center h-6 hidden lg:flex lg:min-w-[50vw]"> ${renderComponent($$result, "WorkNavbar", $$WorkNavbar, { "className": "space-x-6", "active": active ? active : void 0, "hideLinks": hideLinks ? hideLinks : void 0 }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div> <div class="navbar-end flex h-6 items-center gap-3"> ${!hideAuth && renderTemplate`${renderComponent($$result, "AuthNavItem", null, { "className": "py-2! px-2!", "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/medet/ara-app/src/components/utilitified_decorations/AuthNavItem", "client:component-export": "default" })}`} </div> </div> </header> `;
}, "/home/medet/ara-app/src/components/utilitified_decorations/HeaderCosmic.astro", void 0);

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

export { $$HeaderCosmic as $, GradientBackground as G, MenuName as M, GridSmallBackground as a, GravityStarsBackground as b, socialLinks as s };
