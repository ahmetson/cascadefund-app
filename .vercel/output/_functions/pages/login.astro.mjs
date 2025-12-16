import { i as createComponent, w as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_fdX1SiYK.mjs';
import { $ as $$PanelViewLayout } from '../chunks/PanelViewLayout_Bt8c-AIX.mjs';
import { P as PageLikePanel } from '../chunks/PageLikePanel_CRfOVdJz.mjs';
import { C as Component } from '../chunks/eventTypes_PbqAZmEg.mjs';
import { M as MenuName } from '../chunks/gradient_BwWwSSvf.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PanelViewLayout", $$PanelViewLayout, { "hideLinks": Object.keys(MenuName), "hideAuth": true }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "PageLikePanel", PageLikePanel, { "slot": "center", "title": "Welcome to Ara", "titleCenter": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center space-y-2 mt-8"> ${renderComponent($$result3, "Link", Component, { "uri": "/login/callback", "className": "inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors" }, { "default": ($$result4) => renderTemplate`
Start` })} <p class="text-sm">
Demo version! Your account will be created automatically for a session.
</p> <!-- <Link
        uri="/login/callback"
        className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >Sign in</Link
      > --> <!-- <p class="text-sm mt-4">
        By signing in, you agree to our{" "}
        <Link
          uri="/meta/policy"
          className="text-blue-600 hover:text-blue-800"
          asNewTab={true}
        >
          Privacy Policy
        </Link>
      </p> --> </div> ` })}` })}`;
}, "/home/medet/ara-app/src/pages/login/index.astro", void 0);

const $$file = "/home/medet/ara-app/src/pages/login/index.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
