import { i as createComponent, w as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fdX1SiYK.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_Bt8c-AIX.mjs';
import { P as Panel } from '../../chunks/MenuPanel_Bwq8NR-S.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { a as mockTransactions } from '../../chunks/mock-data_DlL00DDQ.mjs';
export { renderers } from '../../renderers.mjs';

const TransactionRow = ({ transaction }) => {
  return /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-100 hover:bg-gray-50", children: [
    /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-sm text-gray-900", children: transaction.date }),
    /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 italic", children: transaction.comment === "No comment" ? /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "No comment" }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        '"',
        transaction.comment,
        '"'
      ] }),
      /* @__PURE__ */ jsx("button", { className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600", children: [
        '"',
        transaction.reply,
        '"'
      ] }),
      /* @__PURE__ */ jsx("button", { className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) }) }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: transaction.user.avatar,
          alt: transaction.user.name,
          className: "w-6 h-6 rounded-full",
          referrerPolicy: "no-referrer"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-600 hover:underline cursor-pointer", children: transaction.user.name })
    ] }) }),
    /* @__PURE__ */ jsxs("td", { className: "py-4 px-4 text-sm font-medium text-gray-900", children: [
      "$",
      transaction.given.toLocaleString()
    ] }),
    /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-green-600", children: [
      "+",
      transaction.vp,
      " (+2 bonus)"
    ] }) }),
    /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsx("span", { className: "bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full", children: transaction.issues }) }),
    /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-600 hover:underline cursor-pointer", children: transaction.transactionId }) }),
    /* @__PURE__ */ jsx("td", { className: "py-4 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-yellow-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-gray-900", children: [
        "+",
        transaction.rating,
        ".1"
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-500", children: [
        "/ ",
        transaction.ratingLeft,
        " left"
      ] })
    ] }) })
  ] });
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onPageChange(currentPage - 1),
        disabled: currentPage === 1,
        className: "px-3 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed",
        children: "Previous"
      }
    ),
    pages.map((page) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onPageChange(page),
        className: `px-3 py-2 text-sm rounded ${page === currentPage ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`,
        children: page
      },
      page
    )),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onPageChange(currentPage + 1),
        disabled: currentPage === totalPages,
        className: "px-3 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed",
        children: "Next"
      }
    )
  ] });
};

const TransactionTable = ({
  transactions,
  currentPage,
  totalPages,
  onPageChange
}) => {
  return /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-1", children: "Transactions" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-6", children: "Showing 5 of 42 transactions" }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-200", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-700", children: "Date" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-700", children: "Comment" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-700", children: "Reply" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-700", children: "Given" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-700", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-purple-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
          /* @__PURE__ */ jsx("span", { children: "VP" })
        ] }) }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-700", children: "Issues" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-700", children: "Transaction ID" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-700", children: "Rating" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: transactions.map((transaction, index) => /* @__PURE__ */ jsx(TransactionRow, { transaction }, transaction.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Pagination,
      {
        currentPage,
        totalPages,
        onPageChange
      }
    ) })
  ] }) });
};

const $$History = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, {}, { "center": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="max-w-full"> ${renderComponent($$result2, "TransactionTable", TransactionTable, { "transactions": mockTransactions, "currentPage": 1, "totalPages": 3, "onPageChange": console.log })} </div>`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "MainMenu", Panel, { "slot": "left", "activeMenuItem": "ihistory", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/menu/MenuPanel", "client:component-export": "default" })}` })}`;
}, "/home/medet/ara-app/src/pages/influencer/history.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/influencer/history.astro";
const $$url = "/influencer/history";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$History,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
