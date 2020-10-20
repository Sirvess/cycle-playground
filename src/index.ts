import { just } from "most";
import { run } from "@cycle/most-run";
import { p, makeDOMDriver } from "@cycle/dom";

const main = (sources) => {
  const sinks = {
    DOM: just(null).constant(p("Hello World")),
  };
  return sinks;
};

run(main, { DOM: makeDOMDriver("body") });
