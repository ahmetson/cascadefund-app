import { jsx } from 'react/jsx-runtime';

const ProgressBar = ({ percentage, color = "blue" }) => {
  const colorClasses = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500"
  };
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `h-2 rounded-full ${colorClasses[color]}`,
      style: { width: `${percentage}%` }
    }
  ) });
};

export { ProgressBar as P };
