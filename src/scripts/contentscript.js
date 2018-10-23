import { safeElementReady, enableFeature } from "./libs/utils";
import domLoaded from "dom-loaded";
import * as pageDetect from "./libs/page-detect";
import select from "select-dom";
import hideHomepageLeftCol from "./features/hide-homepage-left-col";
import hideHomepageRightCol from "./features/hide-homepage-right-col";
import expandContentContainer from "./features/expand-content-container";

window.select = select;

async function init() {
  await safeElementReady("body");

  if (!pageDetect.isFbPage()) {
    return;
  }

  await domLoaded;

  onDomReady();
}

async function onDomReady() {
  if (pageDetect.isHome()) {
    enableFeature(hideHomepageLeftCol);
    enableFeature(hideHomepageRightCol);
    enableFeature(expandContentContainer);
  }
}

init();
