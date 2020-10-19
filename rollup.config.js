import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from "rollup-plugin-serve";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "./src/index.ts",
    output: {
        file: "./dist/bundle.js",
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        serve('dist')
    ]
};
