import { jsx } from 'react/jsx-runtime';
import { I as InfoPanel } from './InfoPanel_BEeHNdQh.mjs';

const NotificationBanner = ({ className, icon, type, title, children, expandable }) => {
  const getStyles = () => {
    switch (type) {
      case "warning":
        return "bg-yellow-50/10 border-yellow-100/50 dark:border-yellow-700/50 border-l-yellow-600 dark:border-l-yellow-300";
      case "info":
        return "bg-blue-50/10 border-slate-300 dark:border-slate-600/50 border-l-blue-600 dark:border-l-blue-300";
      case "success":
        return "bg-green-50/10 border-green-100 dark:border-green-600/50 border-l-green-600 dark:border-l-green-300";
      case "error":
        return "bg-red-50/10 border-rose-100 dark:border-rose-400/40 border-l-red-600 dark:border-l-rose-500";
      default:
        return "bg-gray-50/10 border-gray-50 border-l-gray-600 dark:border-l-gray-300";
    }
  };
  const getDefaultIcon = () => {
    switch (type) {
      case "warning":
        return "warning";
      case "info":
        return "info";
      case "success":
        return "success";
      case "error":
        return "warning";
      default:
        return "info";
    }
  };
  const fullClassName = `p-4 
    border-2
    border-dashed 
    flex 
    items-start 
    rounded-xs 
    shadow-md
    ${getStyles()} 
    ${className}
  `;
  return /* @__PURE__ */ jsx(
    InfoPanel,
    {
      title,
      icon: icon || getDefaultIcon(),
      expandable,
      className: `dark:text-slate-200 text-slate-800 ${fullClassName} ${className}`,
      children
    }
  );
};

export { NotificationBanner as N };
