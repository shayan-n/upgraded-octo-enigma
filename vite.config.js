import {vitePlugin as remix} from "@remix-run/dev";
import {installGlobals} from "@remix-run/node";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// import { nodePolyfills } from 'vite-plugin-node-polyfills'

installGlobals();

export default defineConfig({
    plugins: [
        remix(), 
        tsconfigPaths()
    ],
    optimizeDeps: {
        exclude: ['mui-color-input']
    },
    ssr: {
        noExternal: [
            "mui-color-input", 
            "remix-i18next",
        ],
    },
});