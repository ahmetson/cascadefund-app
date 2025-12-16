import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { P as PageLikePanel } from './PageLikePanel_CRfOVdJz.mjs';
import { M as MenuItem } from './MenuItem_CUb43d71.mjs';
import { C as Component } from './Tooltip_w0cA3QON.mjs';
import { g as getIcon, C as Component$1 } from './eventTypes_PbqAZmEg.mjs';
import { Renderer, Triangle, Program, Color, Mesh } from 'ogl';
import { useRef, useEffect } from 'react';

function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`,
      children: [
        showBorder && /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient",
            style: {
              ...gradientStyle,
              backgroundSize: "300% 100%"
            },
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 bg-black rounded-[1.25rem] z-[-1]",
                style: {
                  width: "calc(100% - 2px)",
                  height: "calc(100% - 2px)",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "inline-block relative z-2 text-transparent bg-cover animate-gradient",
            style: {
              ...gradientStyle,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              backgroundSize: "300% 100%"
            },
            children
          }
        )
      ]
    }
  );
}

const GALAXY_ZOOM_EVENTS = {
  ZOOM_CHANGE: "galaxy-zoom-change"
};

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;
const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform vec2 uMouse;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uMouseRepulsion;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uMouseActiveFactor;
uniform float uAutoCenterRepulsion;
uniform bool uTransparent;

varying vec2 vUv;

#define NUM_LAYER 4.0
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float tri(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

float tris(float x) {
  float t = fract(x);
  return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
}

float trisn(float x) {
  float t = fract(x);
  return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}

vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);

  vec2 gv = fract(uv) - 0.5; 
  vec2 id = floor(uv);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + vec2(float(x), float(y));
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);
      
      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
      hue = fract(hue + uHueShift / 360.0);
      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
      float val = max(max(base.r, base.g), base.b);
      base = hsv2rgb(vec3(hue, sat, val));

      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;

      float star = Star(gv - offset - pad, flareSize);
      vec3 color = base;

      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      star *= twinkle;
      
      col += star * size * color;
    }
  }

  return col;
}

void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;

  vec2 mouseNorm = uMouse - vec2(0.5);
  
  if (uAutoCenterRepulsion > 0.0) {
    vec2 centerUV = vec2(0.0, 0.0);
    float centerDist = length(uv - centerUV);
    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
    uv += repulsion * 0.05;
  } else if (uMouseRepulsion) {
    vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
    float mouseDist = length(uv - mousePosUV);
    vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
    uv += repulsion * 0.05 * uMouseActiveFactor;
  } else {
    vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
    uv += mouseOffset;
  }

  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;

  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

  vec3 col = vec3(0.0);

  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.9, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }

  if (uTransparent) {
    float alpha = length(col);
    alpha = smoothstep(0.0, 0.3, alpha);
    alpha = min(alpha, 1.0);
    gl_FragColor = vec4(col, alpha);
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`;
function Galaxy({
  focal = [0.5, 0.5],
  rotation = [1, 0],
  starSpeed = 0.5,
  density = 1,
  hueShift = 140,
  disableAnimation = false,
  speed = 1,
  mouseInteraction = true,
  glowIntensity = 0.3,
  saturation = 0,
  mouseRepulsion = true,
  repulsionStrength = 2,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  autoCenterRepulsion = 0,
  transparent = true,
  ...rest
}) {
  const ctnDom = useRef(null);
  const targetMousePos = useRef({ x: 0.5, y: 0.5 });
  const smoothMousePos = useRef({ x: 0.5, y: 0.5 });
  const targetMouseActive = useRef(0);
  const smoothMouseActive = useRef(0);
  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    const renderer = new Renderer({
      alpha: transparent,
      premultipliedAlpha: false
    });
    const gl = renderer.gl;
    if (transparent) {
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
    } else {
      gl.clearColor(0, 0, 0, 1);
    }
    let program;
    function resize(event) {
      const customEvent = event;
      const zoom = customEvent?.detail?.zoom;
      const scale = 1 + (zoom ? 1 - zoom / 100 : 0);
      renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }
    function handleZoomChange(event) {
      resize(event);
    }
    window.addEventListener("resize", resize, false);
    window.addEventListener(GALAXY_ZOOM_EVENTS.ZOOM_CHANGE, resize);
    resize();
    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
        },
        uFocal: { value: new Float32Array(focal) },
        uRotation: { value: new Float32Array(rotation) },
        uStarSpeed: { value: starSpeed },
        uDensity: { value: density },
        uHueShift: { value: hueShift },
        uSpeed: { value: speed },
        uMouse: {
          value: new Float32Array([smoothMousePos.current.x, smoothMousePos.current.y])
        },
        uGlowIntensity: { value: glowIntensity },
        uSaturation: { value: saturation },
        uMouseRepulsion: { value: mouseRepulsion },
        uTwinkleIntensity: { value: twinkleIntensity },
        uRotationSpeed: { value: rotationSpeed },
        uRepulsionStrength: { value: repulsionStrength },
        uMouseActiveFactor: { value: 0 },
        uAutoCenterRepulsion: { value: autoCenterRepulsion },
        uTransparent: { value: transparent }
      }
    });
    const mesh = new Mesh(gl, { geometry, program });
    let animateId;
    function update(t) {
      animateId = requestAnimationFrame(update);
      if (!disableAnimation) {
        program.uniforms.uTime.value = t * 1e-3;
        program.uniforms.uStarSpeed.value = t * 1e-3 * starSpeed / 10;
      }
      const lerpFactor = 0.05;
      smoothMousePos.current.x += (targetMousePos.current.x - smoothMousePos.current.x) * lerpFactor;
      smoothMousePos.current.y += (targetMousePos.current.y - smoothMousePos.current.y) * lerpFactor;
      smoothMouseActive.current += (targetMouseActive.current - smoothMouseActive.current) * lerpFactor;
      program.uniforms.uMouse.value[0] = smoothMousePos.current.x;
      program.uniforms.uMouse.value[1] = smoothMousePos.current.y;
      program.uniforms.uMouseActiveFactor.value = smoothMouseActive.current;
      renderer.render({ scene: mesh });
    }
    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);
    function handleMouseMove(e) {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      targetMousePos.current = { x, y };
      targetMouseActive.current = 1;
    }
    function handleMouseLeave() {
      targetMouseActive.current = 0;
    }
    if (mouseInteraction) {
      ctn.addEventListener("mousemove", handleMouseMove);
      ctn.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      window.removeEventListener(GALAXY_ZOOM_EVENTS.ZOOM_CHANGE, handleZoomChange);
      if (mouseInteraction) {
        ctn.removeEventListener("mousemove", handleMouseMove);
        ctn.removeEventListener("mouseleave", handleMouseLeave);
      }
      ctn.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    focal,
    rotation,
    starSpeed,
    density,
    hueShift,
    disableAnimation,
    speed,
    mouseInteraction,
    glowIntensity,
    saturation,
    mouseRepulsion,
    twinkleIntensity,
    rotationSpeed,
    repulsionStrength,
    autoCenterRepulsion,
    transparent
  ]);
  return /* @__PURE__ */ jsx("div", { ref: ctnDom, className: "w-full h-full relative", ...rest });
}

const isOnlyInfluencerMenu = (activeMenuItem) => {
  return activeMenuItem === "ihistory" || activeMenuItem === "iwork";
};
const GalaxyObject = ({ projectIcon, projectName = "Ara", starCount = 0, active, focus, galaxyId }) => {
  const isZeroStars = starCount === 0;
  const starColorClass = isZeroStars ? "text-rose-500" : "";
  const projectIconElement = projectIcon ? /* @__PURE__ */ jsx(
    "img",
    {
      src: projectIcon,
      alt: `${projectName} icon`,
      className: "w-12 h-12 object-contain"
    }
  ) : /* @__PURE__ */ jsx("div", { className: "w-12 h-12 flex items-center justify-center", children: getIcon({ iconType: "ara", width: "w-12", height: "h-12" }) });
  const starIcon = getIcon({
    iconType: "star-filled",
    width: "w-5",
    height: "h-5",
    className: starColorClass
  });
  const tooltipStarIcon = getIcon({
    iconType: "star-filled",
    width: "w-4",
    height: "h-4",
    className: `inline ${starColorClass}`
  });
  const tooltipContent = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
    "View the '",
    projectName,
    "' galaxy ",
    tooltipStarIcon,
    " ",
    starCount
  ] });
  const projectUri = galaxyId ? `/project?galaxy=${galaxyId}` : "/project";
  return /* @__PURE__ */ jsx(Component, { content: tooltipContent, openDelay: 300, children: /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(
    Component$1,
    {
      uri: projectUri,
      className: `flex flex-col items-center justify-center py-4 px-3 rounded-sm cursor-pointer transition-colors relative ${active ? "bg-slate-100/60 dark:bg-slate-700/40" : "hover:bg-slate-50/40 dark:hover:bg-slate-800/30"}`,
      focus,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 bottom-0", children: /* @__PURE__ */ jsx(Galaxy, { mouseRepulsion: false, autoCenterRepulsion: 1, glowIntensity: 0.2, density: 0.1, rotationSpeed: 0.01 }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 relative", children: [
          projectIconElement,
          /* @__PURE__ */ jsx(
            GradientText,
            {
              colors: ["#ffaa40", "#9c40ff", "#ffaa40"],
              animationSpeed: 8,
              className: "font-semibold text-lg text-center",
              children: projectName
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-1 ${starColorClass}`, children: [
            starIcon,
            /* @__PURE__ */ jsx("span", { className: `text-sm font-medium ${starColorClass}`, children: starCount })
          ] })
        ] })
      ]
    }
  ) }) });
};
const maintainerMainItems = (activeMenuItem, focusMenuItem, projectIcon, projectName, starCount, galaxyId) => {
  return [
    /* @__PURE__ */ jsx(
      GalaxyObject,
      {
        projectIcon,
        projectName,
        starCount,
        active: activeMenuItem === "project",
        focus: focusMenuItem === "project",
        galaxyId
      },
      "galaxy"
    )
  ];
};
const influencerMainItems = (activeMenuItem, focusMenuItem) => {
  return [
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "influencer-history",
        label: "Transaction History",
        uri: "/influencer/history",
        active: activeMenuItem === "ihistory",
        focus: focusMenuItem === "ihistory"
      }
    )
  ];
};
const maintainerCollabItems = (activeMenuItem, focusMenuItem, galaxyId) => {
  const baseUri = (path) => galaxyId ? `${path}?galaxy=${galaxyId}` : path;
  return [
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "info",
        label: "Guide",
        uri: baseUri("/project/guide"),
        active: activeMenuItem === "guide",
        focus: focusMenuItem === "guide"
      },
      "guide"
    ),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "connection",
        label: "Dependencies",
        uri: baseUri("/project/dependencies"),
        active: activeMenuItem === "dependencies",
        focus: focusMenuItem === "dependencies"
      },
      "dependencies"
    ),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "navigation",
        label: "Roadmap",
        uri: baseUri("/project/roadmap"),
        active: activeMenuItem === "roadmap",
        focus: focusMenuItem === "roadmap"
      },
      "roadmap"
    ),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "issue",
        label: "Issues",
        uri: baseUri("/project/issues"),
        active: activeMenuItem === "issues",
        focus: focusMenuItem === "issues"
      },
      "issues"
    ),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "arrow-right",
        label: "Share Button",
        uri: baseUri("/project/share-btn"),
        active: activeMenuItem === "share-btn",
        focus: focusMenuItem === "share-btn"
      },
      "share-btn"
    ),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "money",
        label: "Donations",
        uri: baseUri("/project/donations"),
        active: activeMenuItem === "donations",
        focus: focusMenuItem === "donations"
      },
      "donations"
    )
  ];
};
const influencerCollabItems = (activeMenuItem, focusMenuItem, galaxyId) => {
  const baseUri = (path) => galaxyId ? `${path}?galaxy=${galaxyId}` : path;
  return [
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        icon: "influencer-work",
        label: "Influencer Work",
        uri: baseUri("/influencer/work"),
        focus: focusMenuItem === "iwork",
        active: activeMenuItem === "iwork"
      },
      "iwork"
    )
  ];
};
const noChildren = /* @__PURE__ */ jsxs("div", { className: "text-center py-8 text-slate-500 dark:text-slate-400", children: [
  /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-400", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z" }) }),
  /* @__PURE__ */ jsx("p", { className: "text-sm", children: "No menu items available" }),
  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mt-1", children: "Add some items to get started" })
] });
const Panel = ({
  activeMenuItem,
  focusMenuItem,
  title = "Main Menu",
  onlyCustomChildren = false,
  children,
  projectIcon,
  projectName,
  starCount,
  galaxy
}) => {
  const titleC = /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-slate-500 dark:text-slate-400", children: title });
  const galaxyId = galaxy?._id?.toString();
  const finalProjectIcon = projectIcon || (galaxy ? void 0 : void 0);
  const finalProjectName = projectName || galaxy?.name || "Ara";
  const finalStarCount = starCount !== void 0 ? starCount : galaxy?.stars || 0;
  return /* @__PURE__ */ jsx(PageLikePanel, { interactive: false, title: titleC, children: /* @__PURE__ */ jsxs("div", { className: "p-1 z-10 w-full overflow-hidden justify-between", children: [
    onlyCustomChildren && !children ? noChildren : children,
    !onlyCustomChildren && (!isOnlyInfluencerMenu(activeMenuItem) ? maintainerMainItems(activeMenuItem, focusMenuItem, finalProjectIcon, finalProjectName, finalStarCount, galaxyId) : influencerMainItems(activeMenuItem, focusMenuItem)),
    !onlyCustomChildren && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 mt-3", children: "Collaboration Menu" }),
      /* @__PURE__ */ jsx("div", { className: "p-1 w-full overflow-hidden justify-between", children: !isOnlyInfluencerMenu(activeMenuItem) ? maintainerCollabItems(activeMenuItem, focusMenuItem, galaxyId) : influencerCollabItems(activeMenuItem, focusMenuItem, galaxyId) })
    ] })
  ] }) });
};

export { Panel as P };
