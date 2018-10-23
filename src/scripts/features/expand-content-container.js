import select from "select-dom";
import observerEl from "../libs/simplified-element-observer";

export default function() {
  // TODO: not ready to publish
  observerEl("#content", () => {
    select("body").classList.add("rfb-expand-content-container");
  });
}
