import { j as createComponent, k as createAstro } from '../../chunks/astro/server_BV1oLWnF.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const BLOG_REDIRECTS = {
    "turning-code-piece-into-restful-api-with-sds-package": "694afd931c334e53420abeb9",
    "turning-reflect-into-restful-api-with-sds-package": "694afd931c334e53420abeba"
  };
  const slugParam = Astro2.params.slug;
  let slug;
  if (Array.isArray(slugParam)) {
    slug = slugParam.join("/");
  } else if (typeof slugParam === "string") {
    slug = slugParam;
  } else {
    slug = "";
  }
  const blogId = BLOG_REDIRECTS[slug];
  if (blogId) {
    return new Response(null, {
      status: 301,
      headers: {
        Location: `/blog?id=${blogId}`
      }
    });
  } else {
    return Astro2.redirect("/star/404?method=blogSlugNotFound");
  }
}, "/home/medet/ara-app/src/pages/blog/[...slug].astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
