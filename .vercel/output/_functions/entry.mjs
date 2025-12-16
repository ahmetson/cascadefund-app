import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Darwgycj.mjs';
import { manifest } from './manifest_CZToXpGz.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/all-stars.astro.mjs');
const _page3 = () => import('./pages/api-json.astro.mjs');
const _page4 = () => import('./pages/influencer/confirmed.astro.mjs');
const _page5 = () => import('./pages/influencer/history.astro.mjs');
const _page6 = () => import('./pages/influencer/project.astro.mjs');
const _page7 = () => import('./pages/influencer/welcome.astro.mjs');
const _page8 = () => import('./pages/influencer/work.astro.mjs');
const _page9 = () => import('./pages/issue.astro.mjs');
const _page10 = () => import('./pages/login/callback.astro.mjs');
const _page11 = () => import('./pages/login/getting-started.astro.mjs');
const _page12 = () => import('./pages/login.astro.mjs');
const _page13 = () => import('./pages/meta/contributor.astro.mjs');
const _page14 = () => import('./pages/meta/influencer.astro.mjs');
const _page15 = () => import('./pages/meta/policy.astro.mjs');
const _page16 = () => import('./pages/meta/quest.astro.mjs');
const _page17 = () => import('./pages/meta/team.astro.mjs');
const _page18 = () => import('./pages/meta/work.astro.mjs');
const _page19 = () => import('./pages/project/404.astro.mjs');
const _page20 = () => import('./pages/project/dependencies.astro.mjs');
const _page21 = () => import('./pages/project/donations.astro.mjs');
const _page22 = () => import('./pages/project/guide.astro.mjs');
const _page23 = () => import('./pages/project/issues.astro.mjs');
const _page24 = () => import('./pages/project/post.astro.mjs');
const _page25 = () => import('./pages/project/roadmap.astro.mjs');
const _page26 = () => import('./pages/project/share-btn.astro.mjs');
const _page27 = () => import('./pages/project/transactions.astro.mjs');
const _page28 = () => import('./pages/project.astro.mjs');
const _page29 = () => import('./pages/redirect.astro.mjs');
const _page30 = () => import('./pages/user/404.astro.mjs');
const _page31 = () => import('./pages/user/balance.astro.mjs');
const _page32 = () => import('./pages/user.astro.mjs');
const _page33 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.15.3_@types+node@24.10.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30._58817d952c9f18a1336cf05ca822fcb6/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.15.3_@types+node@24.10.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30._58817d952c9f18a1336cf05ca822fcb6/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/all-stars/index.astro", _page2],
    ["src/pages/api-json.ts", _page3],
    ["src/pages/influencer/confirmed.astro", _page4],
    ["src/pages/influencer/history.astro", _page5],
    ["src/pages/influencer/project.astro", _page6],
    ["src/pages/influencer/welcome.astro", _page7],
    ["src/pages/influencer/work.astro", _page8],
    ["src/pages/issue/index.astro", _page9],
    ["src/pages/login/callback.astro", _page10],
    ["src/pages/login/getting-started.astro", _page11],
    ["src/pages/login/index.astro", _page12],
    ["src/pages/meta/contributor.astro", _page13],
    ["src/pages/meta/influencer.astro", _page14],
    ["src/pages/meta/policy.astro", _page15],
    ["src/pages/meta/quest.astro", _page16],
    ["src/pages/meta/team.astro", _page17],
    ["src/pages/meta/work.astro", _page18],
    ["src/pages/project/404.astro", _page19],
    ["src/pages/project/dependencies.astro", _page20],
    ["src/pages/project/donations.astro", _page21],
    ["src/pages/project/guide.astro", _page22],
    ["src/pages/project/issues.astro", _page23],
    ["src/pages/project/post.astro", _page24],
    ["src/pages/project/roadmap.astro", _page25],
    ["src/pages/project/share-btn.astro", _page26],
    ["src/pages/project/transactions.astro", _page27],
    ["src/pages/project/index.astro", _page28],
    ["src/pages/redirect.astro", _page29],
    ["src/pages/user/404.astro", _page30],
    ["src/pages/user/balance.astro", _page31],
    ["src/pages/user/index.astro", _page32],
    ["src/pages/index.astro", _page33]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b340d13a-561c-43c0-a32e-710006940b6f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
