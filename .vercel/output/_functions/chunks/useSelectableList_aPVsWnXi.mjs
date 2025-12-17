import { jsxs, jsx } from 'react/jsx-runtime';
import { R as RoundedSize, S as ShadowSize, g as getIcon } from './BrowseTracker_CjQaYJF4.mjs';
import { useState } from 'react';

const SelectableItem = ({ ref, onClick, iconClassName, id, children, selectedId }) => {
  const className = `flex items-center p-3 w-full ${RoundedSize.roundedXs} border hover:cursor-pointer ${ShadowSize.shadowLg} `;
  const selected = "bg-green-100 border-green-600 hover:bg-green-200 dark:bg-green-500/10 dark:border-green-600/10 dark:hover:bg-green-800";
  const unselected = "bg-white hover:bg-gray-200 border-gray-300 hover:border-green-400 dark:bg-slate-900 dark:hover:bg-gray-800 dark:border-slate-700 dark:hover:border-green-400";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      onClick: () => {
        onClick(id);
      },
      className: `${className} ${selectedId === id ? selected : unselected}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-3 mt-0.5", children: /* @__PURE__ */ jsx("div", { className: `w-4 h-4 rounded-full border-2 ${iconClassName}`, children: selectedId === id && getIcon("check") }) }),
        /* @__PURE__ */ jsx("div", { className: "ml-1 flex justify-between w-full items-center", children })
      ]
    }
  );
};

class SelectedItem {
  _ids = [];
  allowMany;
  constructor({ allowMany }) {
    this.allowMany = allowMany;
  }
  get amount() {
    return this._ids.length;
  }
  get asArray() {
    return [...this._ids];
  }
  has(id) {
    return this._ids.includes(id);
  }
  toggle(id) {
    const newSelectedItem = new SelectedItem({ allowMany: this.allowMany });
    if (this.has(id)) {
      newSelectedItem._ids = this._ids.filter((existingId) => existingId !== id);
    } else {
      if (this.allowMany) {
        newSelectedItem._ids = [...this._ids, id];
      } else {
        newSelectedItem._ids = [id];
      }
    }
    return newSelectedItem;
  }
  // Custom comparison for === operator
  [Symbol.toPrimitive]() {
    return this._ids.length === 0 ? void 0 : this._ids.length === 1 ? this._ids[0] : this._ids;
  }
  // Override valueOf for comparison
  valueOf() {
    return this._ids.length === 0 ? void 0 : this._ids.length === 1 ? this._ids[0] : this._ids;
  }
  // Custom equals method for explicit comparison
  equals(other) {
    if (other === void 0) {
      return this._ids.length === 0;
    }
    return this._ids.includes(other);
  }
}
function useSelectableList({ allowMany = false } = {}) {
  const [selectedItem, setSelectedItemState] = useState(
    new SelectedItem({ allowMany })
  );
  const setSelectedItem = (id) => {
    setSelectedItemState((prev) => prev.toggle(id));
  };
  return { selectedItem, setSelectedItem };
}

export { SelectableItem as S, useSelectableList as u };
