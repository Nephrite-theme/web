import { paraglideVitePlugin } from "@inlang/paraglide-js";
import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	ssr: {
		// GSAP ships ESM syntax without "type": "module", so Node on Netlify
		// loads its plugins as CommonJS and named imports fail. Bundle it.
		noExternal: ["gsap", "@gsap/react"],
	},
	plugins: [
		devtools(),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/paraglide",
			strategy: ["url", "baseLocale"],
		}),
		tailwindcss(),
		tanstackStart(),
		// Builds for Netlify (SSR function + static assets) and emulates it in dev.
		netlify(),
		viteReact(),
	],
});

export default config;
