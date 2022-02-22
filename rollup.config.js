/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

import cleaner from "rollup-plugin-cleaner";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import multiInput from "rollup-plugin-multi-input";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: ["components/**/*.(tsx|ts)"],
  output: [
    {
      dir: "lib",
      format: "cjs",
      sourcemap: "inline",
    },
  ],
  exclude: ["__test__/*"],
  watch: {
    exclude: ["node_modules/"],
  },
  plugins: [
    cleaner({
      targets: ["./lib"],
    }),
    multiInput({
      transformOutputPath: (output, input) => {
        let entry = "index.js";

        if (input.includes("components")) {
          entry =
            input.slice(
              input.lastIndexOf("components/") + 11,
              input.includes("tsx") ? -3 : -2
            ) + "js";
        }

        return entry;
      },
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    json(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
    image({
      output: `lib/assets/images`, // default the root
      extensions: /\.(png|jpg|jpeg|gif|svg)$/, // support png|jpg|jpeg|gif|svg, and it's alse the default value
      exclude: "node_modules/**",
    }),
  ],
  external: ["fast-glob", "path", "styled-components", "react", "react-dom"],
};
