import type { Component } from "solid-js";

import { green } from "./page.css.ts";

export const Page: Component = function () {
  return <h1 class={green}>Hello World</h1>;
};
