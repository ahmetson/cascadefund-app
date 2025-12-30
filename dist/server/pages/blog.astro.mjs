import { j as createComponent, k as createAstro, x as renderComponent, r as renderTemplate } from '../chunks/astro/server_BV1oLWnF.mjs';
import { $ as $$PanelViewLayout } from '../chunks/PanelViewLayout_B3DF1IZV.mjs';
import { B as BackButton } from '../chunks/BackButton_DebJpsQG.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { B as BasePanel } from '../chunks/Panel_DWVED1GX.mjs';
import '../chunks/ripple_9Dkz2kyJ.mjs';
import 'clsx';
import '../chunks/accordion_DMCf7rKz.mjs';
import { B as Badge, g as getIcon, M as MenuName } from '../chunks/Analytics_DTGhDLP0.mjs';
import { A as AuthStar, T as TimeAgo } from '../chunks/timeago-react_DifsiZcg.mjs';
import { g as getStarById } from '../chunks/star_-Q-sM4qq.mjs';
import { g as getAuthUserById } from '../chunks/auth_XMWIZkTi.mjs';
import { b as getBlogById } from '../chunks/blog_Cn2jrrO-.mjs';
import { ObjectId } from 'mongodb';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const BlogPanel = (blog) => {
  const [blogData, setBlogData] = useState(blog);
  const [authorUser, setAuthorUser] = useState(null);
  const [isLoadingAuthor, setIsLoadingAuthor] = useState(false);
  useEffect(() => {
    setBlogData(blog);
  }, [blog._id, blog.title, blog.content, blog.author]);
  useEffect(() => {
    if (blogData.author) {
      setIsLoadingAuthor(true);
      getStarById(blogData.author).then(async (star) => {
        if (star && star.userId) {
          const authUser = await getAuthUserById(star.userId);
          if (authUser) {
            setAuthorUser(authUser);
          }
        }
      }).catch((error) => {
        console.error("Error fetching author:", error);
      }).finally(() => {
        setIsLoadingAuthor(false);
      });
    }
  }, [blogData.author]);
  const renderMarkdown = (content) => {
    if (!content) return "";
    let processedContent = content.trim();
    const titleMatch = processedContent.match(/^#\s+(.+?)(\n|$)/);
    if (titleMatch && titleMatch[1].trim() === blogData.title.trim()) {
      processedContent = processedContent.replace(/^#\s+.+?(\n|$)/, "").trim();
    }
    let html = processedContent.replace(/```(\w+)?\n?([\s\S]*?)```/gim, (match, lang, code) => {
      return `<pre class="bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-x-auto my-4"><code class="text-sm">${code.trim()}</code></pre>`;
    }).replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-6 mb-3">$1</h3>').replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-8 mb-4">$1</h2>').replace(/^# (.*$)/gim, '<h2 class="text-3xl font-bold mt-8 mb-4">$1</h2>').replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>').replace(/(?<!`)\*([^*`]+)\*(?!`)/gim, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">$1</a>').replace(/`([^`\n]+)`/gim, '<code class="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>').split(/\n\n+/).map((para) => para.trim()).filter((para) => para.length > 0).map((para) => {
      para = para.replace(/\n/g, "<br>");
      return `<p class="mb-4 leading-relaxed">${para}</p>`;
    }).join("");
    return html || "<p>No content</p>";
  };
  return /* @__PURE__ */ jsx(BasePanel, { className: "max-w-4xl w-full mx-auto", children: /* @__PURE__ */ jsxs("article", { className: "space-y-6 p-6 md:p-8", children: [
    /* @__PURE__ */ jsxs("header", { className: "space-y-4 border-b border-slate-200 dark:border-slate-700 pb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 flex-1", children: blogData.title }),
        /* @__PURE__ */ jsx(
          Badge,
          {
            variant: blogData.draft ? "warning" : "success",
            static: true,
            children: blogData.draft ? "Draft" : "Published"
          }
        )
      ] }),
      blogData.description && /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 dark:text-slate-400", children: blogData.description }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2 text-slate-600 dark:text-slate-400", children: isLoadingAuthor ? /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Loading..." }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "By" }),
            /* @__PURE__ */ jsx(
              AuthStar,
              {
                src: authorUser?.image,
                className: "w-8 h-8",
                starId: blogData.author
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: authorUser?.name || authorUser?.username || authorUser?.displayUsername || authorUser?.email?.split("@")[0] || "Unknown" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400", children: [
            blogData.createdTime && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              getIcon({ iconType: "clock", className: "w-4 h-4" }),
              /* @__PURE__ */ jsx(TimeAgo, { datetime: blogData.createdTime * 1e3 })
            ] }),
            blogData.updatedTime && blogData.updatedTime !== blogData.createdTime && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxs("span", { className: "text-slate-400 dark:text-slate-500", children: [
              "Updated ",
              /* @__PURE__ */ jsx(TimeAgo, { datetime: blogData.updatedTime * 1e3 })
            ] }) })
          ] })
        ] }),
        blogData.tags && blogData.tags.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-2", children: blogData.tags.map((tag, index) => /* @__PURE__ */ jsx(
          Badge,
          {
            variant: tag.toLowerCase() === "bug" ? "danger" : tag.toLowerCase() === "feature" ? "blue" : tag.toLowerCase() === "improvement" ? "success" : tag.toLowerCase() === "enhancement" ? "warning" : "info",
            static: true,
            children: tag
          },
          index
        )) }),
        blogData.projects && blogData.projects.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400", children: [
          getIcon({ iconType: "project", className: "w-4 h-4" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Linked to ",
            blogData.projects.length,
            " ",
            blogData.projects.length === 1 ? "project" : "projects"
          ] })
        ] }),
        blogData.projectTypes && blogData.projectTypes.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Project Types:" }),
          blogData.projectTypes.map((type, index) => /* @__PURE__ */ jsx(Badge, { variant: "purple", static: true, children: type }, index))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "prose prose-slate dark:prose-invert max-w-none",
        dangerouslySetInnerHTML: { __html: renderMarkdown(blogData.content) }
      }
    )
  ] }) });
};

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const blogIdParam = Astro2.url.searchParams.get("id");
  if (!blogIdParam) {
    return Astro2.redirect("/star/404?method=getBlogIdParam");
  }
  try {
    new ObjectId(blogIdParam);
  } catch (error) {
    return Astro2.redirect("/star/404?method=validateBlogId");
  }
  const blog = await getBlogById(blogIdParam);
  if (!blog) {
    return Astro2.redirect("/star/404?method=getBlogById");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelViewLayout, { "hideLinks": Object.keys(MenuName) }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "BlogPanel", BlogPanel, { "slot": "center", ...blog })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/BackButton", "client:component-export": "default" })}` })} `;
}, "/home/medet/ara-app/src/pages/blog/index.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
