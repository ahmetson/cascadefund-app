import { jsx, jsxs } from 'react/jsx-runtime';
import { LoaderIcon, LoaderCircleIcon, LoaderPinwheelIcon } from 'lucide-react';
import { c as cn } from './utils_CRaJ9uIg.mjs';

const Default = ({ className, ...props }) => /* @__PURE__ */ jsx(LoaderIcon, { className: cn("animate-spin", className), ...props });
const Circle = ({ className, ...props }) => /* @__PURE__ */ jsx(LoaderCircleIcon, { className: cn("animate-spin", className), ...props });
const Pinwheel = ({ className, ...props }) => /* @__PURE__ */ jsx(LoaderPinwheelIcon, { className: cn("animate-spin", className), ...props });
const CircleFilled = ({
  className,
  size = 24,
  ...props
}) => /* @__PURE__ */ jsxs("div", { className: "relative", style: { width: size, height: size }, children: [
  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rotate-180", children: /* @__PURE__ */ jsx(
    LoaderCircleIcon,
    {
      className: cn("animate-spin", className, "text-foreground opacity-20"),
      size,
      ...props
    }
  ) }),
  /* @__PURE__ */ jsx(
    LoaderCircleIcon,
    {
      className: cn("relative animate-spin", className),
      size,
      ...props
    }
  )
] });
const Ellipsis = ({ size = 24, ...props }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      height: size,
      viewBox: "0 0 24 24",
      width: size,
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ jsx("title", { children: "Loading..." }),
        /* @__PURE__ */ jsx("circle", { cx: "4", cy: "12", fill: "currentColor", r: "2", children: /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "cy",
            begin: "0;ellipsis3.end+0.25s",
            calcMode: "spline",
            dur: "0.6s",
            id: "ellipsis1",
            keySplines: ".33,.66,.66,1;.33,0,.66,.33",
            values: "12;6;12"
          }
        ) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", fill: "currentColor", r: "2", children: /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "cy",
            begin: "ellipsis1.begin+0.1s",
            calcMode: "spline",
            dur: "0.6s",
            keySplines: ".33,.66,.66,1;.33,0,.66,.33",
            values: "12;6;12"
          }
        ) }),
        /* @__PURE__ */ jsx("circle", { cx: "20", cy: "12", fill: "currentColor", r: "2", children: /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "cy",
            begin: "ellipsis1.begin+0.2s",
            calcMode: "spline",
            dur: "0.6s",
            id: "ellipsis3",
            keySplines: ".33,.66,.66,1;.33,0,.66,.33",
            values: "12;6;12"
          }
        ) })
      ]
    }
  );
};
const Ring = ({ size = 24, ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    height: size,
    stroke: "currentColor",
    viewBox: "0 0 44 44",
    width: size,
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx("title", { children: "Loading..." }),
      /* @__PURE__ */ jsxs("g", { fill: "none", fillRule: "evenodd", strokeWidth: "2", children: [
        /* @__PURE__ */ jsxs("circle", { cx: "22", cy: "22", r: "1", children: [
          /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "r",
              begin: "0s",
              calcMode: "spline",
              dur: "1.8s",
              keySplines: "0.165, 0.84, 0.44, 1",
              keyTimes: "0; 1",
              repeatCount: "indefinite",
              values: "1; 20"
            }
          ),
          /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "stroke-opacity",
              begin: "0s",
              calcMode: "spline",
              dur: "1.8s",
              keySplines: "0.3, 0.61, 0.355, 1",
              keyTimes: "0; 1",
              repeatCount: "indefinite",
              values: "1; 0"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("circle", { cx: "22", cy: "22", r: "1", children: [
          /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "r",
              begin: "-0.9s",
              calcMode: "spline",
              dur: "1.8s",
              keySplines: "0.165, 0.84, 0.44, 1",
              keyTimes: "0; 1",
              repeatCount: "indefinite",
              values: "1; 20"
            }
          ),
          /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "stroke-opacity",
              begin: "-0.9s",
              calcMode: "spline",
              dur: "1.8s",
              keySplines: "0.3, 0.61, 0.355, 1",
              keyTimes: "0; 1",
              repeatCount: "indefinite",
              values: "1; 0"
            }
          )
        ] })
      ] })
    ]
  }
);
const Bars = ({ size = 24, ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    height: size,
    viewBox: "0 0 24 24",
    width: size,
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx("title", { children: "Loading..." }),
      /* @__PURE__ */ jsx("style", { children: `
      .spinner-bar {
        animation: spinner-bars-animation .8s linear infinite;
        animation-delay: -.8s;
      }
      .spinner-bars-2 {
        animation-delay: -.65s;
      }
      .spinner-bars-3 {
        animation-delay: -0.5s;
      }
      @keyframes spinner-bars-animation {
        0% {
          y: 1px;
          height: 22px;
        }
        93.75% {
          y: 5px;
          height: 14px;
          opacity: 0.2;
        }
      }
    ` }),
      /* @__PURE__ */ jsx(
        "rect",
        {
          className: "spinner-bar",
          fill: "currentColor",
          height: "22",
          width: "6",
          x: "1",
          y: "1"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          className: "spinner-bar spinner-bars-2",
          fill: "currentColor",
          height: "22",
          width: "6",
          x: "9",
          y: "1"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          className: "spinner-bar spinner-bars-3",
          fill: "currentColor",
          height: "22",
          width: "6",
          x: "17",
          y: "1"
        }
      )
    ]
  }
);
const Infinite = ({ size = 24, ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    height: size,
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 100 100",
    width: size,
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx("title", { children: "Loading..." }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z",
          fill: "none",
          stroke: "currentColor",
          strokeDasharray: "205.271142578125 51.317785644531256",
          strokeLinecap: "round",
          strokeWidth: "10",
          style: {
            transform: "scale(0.8)",
            transformOrigin: "50px 50px"
          },
          children: /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "stroke-dashoffset",
              dur: "2s",
              keyTimes: "0;1",
              repeatCount: "indefinite",
              values: "0;256.58892822265625"
            }
          )
        }
      )
    ]
  }
);
const Spinner = ({ variant, ...props }) => {
  switch (variant) {
    case "circle":
      return /* @__PURE__ */ jsx(Circle, { ...props });
    case "pinwheel":
      return /* @__PURE__ */ jsx(Pinwheel, { ...props });
    case "circle-filled":
      return /* @__PURE__ */ jsx(CircleFilled, { ...props });
    case "ellipsis":
      return /* @__PURE__ */ jsx(Ellipsis, { ...props });
    case "ring":
      return /* @__PURE__ */ jsx(Ring, { ...props });
    case "bars":
      return /* @__PURE__ */ jsx(Bars, { ...props });
    case "infinite":
      return /* @__PURE__ */ jsx(Infinite, { ...props });
    default:
      return /* @__PURE__ */ jsx(Default, { ...props });
  }
};

export { Spinner as S };
