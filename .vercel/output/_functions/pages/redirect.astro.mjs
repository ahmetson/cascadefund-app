import { i as createComponent, j as createAstro } from '../chunks/astro/server_fdX1SiYK.mjs';
import 'clsx';
import '../chunks/PanelViewLayout_Bt8c-AIX.mjs';
import 'react/jsx-runtime';
import 'react';
import '../chunks/accordion_CHQBqGdC.mjs';
import '../chunks/eventTypes_PbqAZmEg.mjs';
import '../chunks/gradient_BwWwSSvf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Redirect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Redirect;
  return Astro2.redirect("/all-stars");
}, "/home/medet/ara-app/src/pages/redirect.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/redirect.astro";
const $$url = "/redirect";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Redirect,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
