import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_RnqGXXGD.mjs';
import { manifest } from './manifest_CF4I7xLa.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/all-stars.astro.mjs');
const _page4 = () => import('./pages/api/auth/_---all_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page7 = () => import('./pages/how-it-works.astro.mjs');
const _page8 = () => import('./pages/issue.astro.mjs');
const _page9 = () => import('./pages/people.astro.mjs');
const _page10 = () => import('./pages/privacy-policy.astro.mjs');
const _page11 = () => import('./pages/project/404.astro.mjs');
const _page12 = () => import('./pages/project/dependencies.astro.mjs');
const _page13 = () => import('./pages/project/donations.astro.mjs');
const _page14 = () => import('./pages/project/guide.astro.mjs');
const _page15 = () => import('./pages/project/issues.astro.mjs');
const _page16 = () => import('./pages/project/roadmap.astro.mjs');
const _page17 = () => import('./pages/project/share-btn.astro.mjs');
const _page18 = () => import('./pages/project/transactions.astro.mjs');
const _page19 = () => import('./pages/project.astro.mjs');
const _page20 = () => import('./pages/star/404.astro.mjs');
const _page21 = () => import('./pages/star/balance.astro.mjs');
const _page22 = () => import('./pages/star.astro.mjs');
const _page23 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.15.3_@types+node@24.10.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30._9a9bea42e0c44ef794a5a52fe5586ada/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.15.3_@types+node@24.10.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30._9a9bea42e0c44ef794a5a52fe5586ada/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/all-stars/index.astro", _page3],
    ["src/pages/api/auth/[...all].ts", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/blog/[...slug].astro", _page6],
    ["src/pages/how-it-works.astro", _page7],
    ["src/pages/issue/index.astro", _page8],
    ["src/pages/people.astro", _page9],
    ["src/pages/privacy-policy.astro", _page10],
    ["src/pages/project/404.astro", _page11],
    ["src/pages/project/dependencies.astro", _page12],
    ["src/pages/project/donations.astro", _page13],
    ["src/pages/project/guide.astro", _page14],
    ["src/pages/project/issues.astro", _page15],
    ["src/pages/project/roadmap.astro", _page16],
    ["src/pages/project/share-btn.astro", _page17],
    ["src/pages/project/transactions.astro", _page18],
    ["src/pages/project/index.astro", _page19],
    ["src/pages/star/404.astro", _page20],
    ["src/pages/star/balance.astro", _page21],
    ["src/pages/star/index.astro", _page22],
    ["src/pages/index.astro", _page23]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "40930bfb-b1f4-408d-a49f-e47bac576f55",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
