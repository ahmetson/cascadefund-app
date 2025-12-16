import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
import { c as cn } from './utils_CRaJ9uIg.mjs';
import { B as Button } from './PanelAction_DPZy3U8T.mjs';
import { S as SearchBar } from './SearchBar_CwTEXagJ.mjs';
import { L as List } from './List_B2fiJoaU.mjs';
import { B as Badge } from './Badge_B8Esv6UX.mjs';
import NumberFlow from '@number-flow/react';

const FilterToggle = ({
  className,
  onValueChange,
  filters,
  defaultFilterId
}) => {
  const initialFilterId = defaultFilterId || filters[0]?.id;
  const [activeFilterId, setActiveFilterId] = useState(initialFilterId);
  const currentFilter = filters.find((f) => f.id === activeFilterId);
  const currentSortOptions = currentFilter?.sortIds || [];
  const [activeSortId, setActiveSortId] = useState(
    currentSortOptions[0]?.id || ""
  );
  useEffect(() => {
    if (currentSortOptions.length > 0) {
      const firstSortId = currentSortOptions[0].id;
      setActiveSortId(firstSortId);
      onValueChange(activeFilterId, firstSortId);
    }
  }, [activeFilterId, currentSortOptions, onValueChange]);
  const handleFilterChange = (value) => {
    if (value) {
      setActiveFilterId(value);
    }
  };
  const handleSortChange = (event) => {
    const newSortId = event.target.value;
    setActiveSortId(newSortId);
    onValueChange(activeFilterId, newSortId);
  };
  useEffect(() => {
    if (activeFilterId && activeSortId) {
      onValueChange(activeFilterId, activeSortId);
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center justify-between mb-6", className), children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: filters.map((filter) => {
      const isActive = activeFilterId === filter.id;
      return /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "sm",
          disabled: isActive,
          onClick: () => handleFilterChange(filter.id),
          className: cn(
            "rounded-xs",
            filter.className
          ),
          children: filter.label
        },
        filter.id
      );
    }) }),
    currentSortOptions.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 ml-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Sort" }),
      /* @__PURE__ */ jsx(
        "select",
        {
          value: activeSortId,
          onChange: handleSortChange,
          className: "border border-gray-300 hover:border-teal-500! hover:bg-teal-100/10! dark:hover:bg-teal-900/10! dark:border-teal-700! cursor-pointer rounded-xs px-3 py-2 text-sm bg-white dark:bg-gray-700 dark:text-gray-400",
          children: currentSortOptions.map((sortOption) => /* @__PURE__ */ jsx("option", { value: sortOption.id, children: sortOption.label }, sortOption.id))
        }
      )
    ] })
  ] });
};

const FilterableList = ({
  items,
  itemComponent: ItemComponent,
  filters,
  onFilterChange,
  title,
  titleCenter = false,
  searchPlaceholder = "Search...",
  hideSearchbar = false,
  searchableFields,
  className,
  children,
  showNumber = true,
  contentHeight
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setCurrentFilter] = useState();
  const [, setCurrentSort] = useState();
  const getSearchableFields = () => {
    if (searchableFields) {
      return searchableFields;
    }
    if (items.length > 0) {
      const firstItem = items[0];
      return Object.keys(firstItem).filter(
        (key) => typeof firstItem[key] === "string"
      );
    }
    return [];
  };
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return items;
    }
    const fields = getSearchableFields();
    const query = searchQuery.toLowerCase();
    return items.filter((item) => {
      return fields.some((field) => {
        const value = item[field];
        return typeof value === "string" && value.toLowerCase().includes(query);
      });
    });
  }, [items, searchQuery, searchableFields]);
  const handleFilterChange = (filterId, sortId) => {
    setCurrentFilter(filterId);
    setCurrentSort(sortId);
    onFilterChange?.(filterId, sortId);
  };
  return /* @__PURE__ */ jsxs("div", { className: `text-slate-600 dark:text-slate-400 ${className}`, children: [
    title ? /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-1 mb-2 ${titleCenter ? "justify-center" : ""}`, children: [
      title,
      showNumber && /* @__PURE__ */ jsx(Badge, { variant: "info", children: /* @__PURE__ */ jsx(
        NumberFlow,
        {
          value: filteredItems.length,
          locales: "en-US",
          format: { useGrouping: false }
        }
      ) })
    ] }) : showNumber ? /* @__PURE__ */ jsx("h3", { className: "text-md font-medium mb-2", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1", children: [
      "Items ",
      /* @__PURE__ */ jsx(Badge, { variant: "info", children: /* @__PURE__ */ jsx(
        NumberFlow,
        {
          value: filteredItems.length,
          locales: "en-US",
          format: { useGrouping: false }
        }
      ) })
    ] }) }) : null,
    filters && filters.length > 0 && /* @__PURE__ */ jsx(
      FilterToggle,
      {
        filters,
        className: "mb-6 text-sm",
        onValueChange: handleFilterChange
      }
    ),
    !hideSearchbar && /* @__PURE__ */ jsx(
      SearchBar,
      {
        className: "mb-4",
        value: searchQuery,
        onChange: setSearchQuery,
        placeholder: searchPlaceholder
      }
    ),
    /* @__PURE__ */ jsx(List, { className: "space-y-4", contentHeight, children: filteredItems.map((item, index) => {
      return /* @__PURE__ */ jsx(ItemComponent, { ...item }, index);
    }) }),
    children
  ] });
};

export { FilterableList as F };
