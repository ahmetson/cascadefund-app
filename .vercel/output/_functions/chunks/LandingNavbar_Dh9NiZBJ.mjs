import { i as createComponent, j as createAstro, m as maybeRenderHead, l as addAttribute, w as renderComponent, r as renderTemplate } from './astro/server_fdX1SiYK.mjs';
import { G as GridStyle, C as Component$1 } from './eventTypes_PbqAZmEg.mjs';
import { C as Component } from './Tooltip_w0cA3QON.mjs';

const $$Astro = createAstro();
var ItemName = /* @__PURE__ */ ((ItemName2) => {
  ItemName2["ContributorLanding"] = "ContributorLanding";
  ItemName2["InfluencerLanding"] = "InfluencerLanding";
  ItemName2["MaintainerLanding"] = "MaintainerLanding";
  ItemName2["HowItWork"] = "HowItWork";
  ItemName2["Check"] = "Check";
  return ItemName2;
})(ItemName || {});
const $$LandingNavbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LandingNavbar;
  const { tabIndex, className, active, hideLinks, vertical } = Astro2.props;
  const isItemShown = (itemName) => {
    const hidden = active === itemName || hideLinks?.findIndex((hiddenItemName) => hiddenItemName === itemName);
    return hidden === -1 || hidden === void 0;
  };
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(tabIndex, "tabindex")}${addAttribute(`flex ${vertical ? " flex-col " : ` items-center justify-between w-full text-sm center h-14 ${GridStyle.content.padding.x}`} ${className || ""}`, "class")}> ${isItemShown("ContributorLanding" /* ContributorLanding */) && renderTemplate`${renderComponent($$result, "Tooltip", Component, { "content": "Contributing to Open Source? We made a special landing page for you", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/Tooltip", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", Component$1, { "uri": "/meta/contributor" }, { "default": ($$result3) => renderTemplate`Contributors` })} ` })}`} ${isItemShown("InfluencerLanding" /* InfluencerLanding */) && renderTemplate`${renderComponent($$result, "Tooltip", Component, { "content": "You want to help open-source, but something makes it not motivating? We made a special landing page for you", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/custom-ui/Tooltip", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center w-full"> ${renderComponent($$result2, "Link", Component$1, { "uri": "/meta/influencer" }, { "default": ($$result3) => renderTemplate`"Maybe" a donator?` })} </div> ` })}`} ${isItemShown("HowItWork" /* HowItWork */) && renderTemplate`${renderComponent($$result, "Link", Component$1, { "uri": "/meta/work" }, { "default": ($$result2) => renderTemplate`How it works?` })}`} <!-- {
    isItemShown(ItemName.Check) && (
      <Tooltip
        content={
          "According to hyperpayment protocol, part of all project donations goes to the libraries/assets used in the project. Check if your 'asset' recieved an indirect donation"
        }
        client:load
      >
        <div class="flex items-center w-full">
          <Link uri="/maintainer/check">Check Balance</Link>
        </div>
      </Tooltip>
    )
  } --> </nav>`;
}, "/home/medet/ara-app/src/components/utilitified_decorations/LandingNavbar.astro", void 0);

export { $$LandingNavbar as $, ItemName as I };
