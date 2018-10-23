import elementReady from "element-ready";
import domLoaded from "dom-loaded";
import OptionsSync from "webext-options-sync";

const options = new OptionsSync().getAll();

/**
 * Enable toggling each feature via options.
 * Prevent fn's errors from blocking the remaining tasks.
 * https://github.com/sindresorhus/refined-github/issues/678
 */
export const enableFeature = async fn => {
  const { disabledFeatures = "", logging = false } = await options;
  const log = logging ? console.log : () => {};

  const filename = fn.name.replace(/_/g, "-");
  if (/^$|^anonymous$/.test(filename)) {
    console.warn("This feature is nameless", fn);
  } else if (disabledFeatures.includes(filename)) {
    log("↩️", "Skipping", filename);
    return;
  }
  try {
    await fn();
    log("✅", filename);
  } catch (error) {
    console.log("❌", filename);
    console.error(error);
  }
};

export const isFeatureEnabled = async featureName => {
  const { disabledFeatures = "" } = await options;
  return disabledFeatures.includes(featureName);
};

/**
 * Automatically stops checking for an element to appear once the DOM is ready.
 */
export const safeElementReady = selector => {
  const waiting = elementReady(selector);

  // Don't check ad-infinitum
  domLoaded.then(() => requestAnimationFrame(() => waiting.cancel()));

  // If cancelled, return null like a regular select() would
  return waiting.catch(() => null);
};
