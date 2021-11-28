/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import multiInput from "rollup-plugin-multi-input";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
  input: ["components/**/*.(tsx)|(ts)"],
  output: [
    {
      dir: "lib",
      format: "cjs",
      sourcemap: false,
    },
    // {
    //   dir: "es",
    //   format: "esm",
    //   sourcemap: true,
    // },
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
    image({
      output: `lib/assets/images`, // default the root
      extensions: /\.(png|jpg|jpeg|gif|svg)$/, // support png|jpg|jpeg|gif|svg, and it's alse the default value
      exclude: 'node_modules/**'
    })
  ],
  external: ["fast-glob", "path", "styled-components"],
};
