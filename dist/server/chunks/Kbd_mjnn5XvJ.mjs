import { jsx } from 'react/jsx-runtime';
import { useHotkeys } from 'react-hotkeys-hook';
import { d as capitalizeFirstLetter, c as cn } from './Analytics_DTGhDLP0.mjs';

const Kbd = ({ className, children, overwrittenChildren, onPress }) => {
  useHotkeys(overwrittenChildren || children, () => {
    onPress?.(overwrittenChildren || children);
  }, { enableOnFormTags: true });
  return /* @__PURE__ */ jsx("kbd", { className: cn("kbd border border-gray-300 dark:border-gray-600 rounded-sm border-solid px-1 py-2 w-12 text-xs flex text-center items-center dark:bg-slate-500 text-gray-600 dark:text-gray-300 h-4!", className), children: capitalizeFirstLetter(children) });
};

export { Kbd as K };
