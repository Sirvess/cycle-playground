import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from "@rollup/plugin-typescript";
import html from "@rollup/plugin-html";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
    input: "./src/index.ts",
    output: {
        file: "./dist/bundle.js",
    },
    plugins: [
        resolve(),
        commonjs({
            transformMixedEsModules: true
        }),
        typescript(),
        html(),
    ]
};
