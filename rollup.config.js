/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import multiInput from "rollup-plugin-multi-input";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import svg from "rollup-plugin-svg";
import typescript from "rollup-plugin-typescript2";

export default {
  input: ["components/**/*.(tsx)|(ts)"],
  output: [
    {
      dir: "lib",
      format: "cjs",
      sourcemap: false,
    },
    {
      dir: "es",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    multiInput({
      transformOutputPath: (output, input) => {
        let entry = "index.js";

        if (input.includes("components")) {
          entry = input.slice(input.lastIndexOf("components/") + 11, -3) + "js";
        }

        return entry;
      },
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    json(),
    typescript({ useTsconfigDeclarationDir: true }),
    image(),
    scss({
      output: "lib/bundle.css"
    }),
    svg(),
  ],
  external: ["fast-glob", "path", "styled-components"],
};
