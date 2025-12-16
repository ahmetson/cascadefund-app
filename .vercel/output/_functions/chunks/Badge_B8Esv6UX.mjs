import { jsxs, jsx } from 'react/jsx-runtime';

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

export { Badge as B };
