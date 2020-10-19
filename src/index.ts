import xs from "xstream";
import { run } from "@cycle/run";
import { p, makeDOMDriver } from "@cycle/dom";

const main = (sources) => {
  const sinks = {
    DOM: xs.of(true).map(() => p("Hello World")),
  };
  return sinks;
};

run(main, { DOM: makeDOMDriver("body") });
