import select from "select-dom";
import observerEl from "../libs/simplified-element-observer";

export default function() {
  observerEl("#content", () => {
    select("body").classList.add("rfb-hide-homepage-right-col");
  });
}
