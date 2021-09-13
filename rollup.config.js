import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "browser/midiplayer.js",
        format: "iife",
        name: "MidiPlayer",
      },
      {
        file: "build/index.browser.js",
        format: "es",
        name: "MidiPlayer",
      },
    ],
    plugins: [
      replace({
        "process.browser": true,
        "preventAssignment": true 
      }),
      babel({
        exclude: "node_modules/**", // only transpile our source code
        plugins: ["@babel/plugin-transform-destructuring"],
      }),
    ],
  },
  {
    input: "src/index.js",
    output: [
      {
        file: "build/index.js",
        format: "cjs",
      },
    ],
    plugins: [
      replace({
        "process.browser": false,
        "preventAssignment": true
      }),
      babel({
        exclude: "node_modules/**", // only transpile our source code
        plugins: ["@babel/plugin-transform-destructuring"],
      }),
    ],
  },
];
