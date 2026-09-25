import { HeadContent, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@icons-pack/react-simple-icons+[...].mjs";
import { deLocalizeUrl, getLocale, locales, localizeUrl } from "./ssr.mjs";
import { FLAVORS, LINKS, PORT_CATEGORIES, VARIANTS, localeUrl } from "./ports-CaKxqcHb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D3cy_axw.js
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Meta_DescriptionInputs */
var en_meta_description = () => {
	return `A calm, low-glare jade theme for Chrome, with a variant for any light. Firefox and VS Code are next.`;
};
var es_meta_description = () => {
	return `Un tema jade sereno y sin deslumbramientos para Chrome, con una variante para cada luz. Firefox y VS Code vienen en camino.`;
};
/**
* | output |
* | --- |
* | "A calm, low-glare jade theme for Chrome, with a variant for any light. Firefox and VS Code are next." |
*
* @param {Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var meta_description = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_meta_description(inputs);
	return en_meta_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Meta_TitleInputs */
var en_meta_title = () => {
	return `Nephrite: The emerald standard for your browser`;
};
var es_meta_title = () => {
	return `Nephrite: el estándar esmeralda para tu navegador`;
};
/**
* | output |
* | --- |
* | "Nephrite: The emerald standard for your browser" |
*
* @param {Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var meta_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_meta_title(inputs);
	return en_meta_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Og_Image_AltInputs */
var en_og_image_alt = () => {
	return `Nephrite, a jade theme for Chrome, shown on a browser window`;
};
var es_og_image_alt = () => {
	return `Nephrite, un tema jade para Chrome, en una ventana del navegador`;
};
/**
* | output |
* | --- |
* | "Nephrite, a jade theme for Chrome, shown on a browser window" |
*
* @param {Og_Image_AltInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var og_image_alt = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_og_image_alt(inputs);
	return en_og_image_alt(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_Meta_DescriptionInputs */
var en_palette_meta_description = () => {
	return `Three flavors, ten jade-tinted neutrals and nine mineral accents, each above 4.5:1 contrast. Copy the colors as CSS or JSON.`;
};
var es_palette_meta_description = () => {
	return `Tres sabores, diez neutros con tinte jade y nueve acentos minerales, todos sobre 4.5:1 de contraste. Copia los colores en CSS o JSON.`;
};
/**
* | output |
* | --- |
* | "Three flavors, ten jade-tinted neutrals and nine mineral accents, each above 4.5:1 contrast. Copy the colors as CSS or JSON." |
*
* @param {Palette_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_meta_description = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_meta_description(inputs);
	return en_palette_meta_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_Meta_TitleInputs */
var en_palette_meta_title = () => {
	return `The Nephrite palette: jade colors for themes and ports`;
};
var es_palette_meta_title = () => {
	return `La paleta Nephrite: colores jade para temas y ports`;
};
/**
* | output |
* | --- |
* | "The Nephrite palette: jade colors for themes and ports" |
*
* @param {Palette_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_meta_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_meta_title(inputs);
	return en_palette_meta_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ports_Meta_DescriptionInputs */
var en_ports_meta_description = () => {
	return `Every app with a Nephrite theme, and the ones on the way: Chrome today, Firefox and VS Code next.`;
};
var es_ports_meta_description = () => {
	return `Todas las apps con tema Nephrite y las que vienen en camino: Chrome hoy, Firefox y VS Code después.`;
};
/**
* | output |
* | --- |
* | "Every app with a Nephrite theme, and the ones on the way: Chrome today, Firefox and VS Code next." |
*
* @param {Ports_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_meta_description = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_meta_description(inputs);
	return en_ports_meta_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ports_Meta_TitleInputs */
var en_ports_meta_title = () => {
	return `Nephrite ports: jade themes for your apps`;
};
var es_ports_meta_title = () => {
	return `Nephrite para tus apps: temas jade`;
};
/**
* | output |
* | --- |
* | "Nephrite ports: jade themes for your apps" |
*
* @param {Ports_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_meta_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_meta_title(inputs);
	return en_ports_meta_title(inputs);
});
var styles_default = "/assets/styles-B-PRyYrz.css";
var motionScript = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ok')`;
var Route$3 = createRootRoute({
	beforeLoad: async () => {
		if (typeof document !== "undefined") document.documentElement.setAttribute("lang", getLocale());
	},
	head: () => {
		const locale = getLocale();
		const ogImage = `${LINKS.site}/og-image.png`;
		const ogLocale = {
			en: "en_US",
			es: "es_419"
		};
		const jsonLd = {
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "Organization",
					"@id": `${LINKS.site}/#org`,
					name: "Nephrite",
					url: `${LINKS.site}/`,
					logo: `${LINKS.site}/logo-512.png`,
					sameAs: [LINKS.github, LINKS.x]
				},
				{
					"@type": "WebSite",
					"@id": `${LINKS.site}/#website`,
					name: "Nephrite",
					url: `${LINKS.site}/`,
					inLanguage: locales,
					publisher: { "@id": `${LINKS.site}/#org` }
				},
				...VARIANTS.map((v) => ({
					"@type": "SoftwareApplication",
					name: v.name,
					description: v.description(),
					url: v.store,
					applicationCategory: "BrowserApplication",
					operatingSystem: "Google Chrome",
					offers: {
						"@type": "Offer",
						price: "0",
						priceCurrency: "USD"
					},
					publisher: { "@id": `${LINKS.site}/#org` }
				}))
			]
		};
		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{
					name: "theme-color",
					content: "#080d0a"
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:site_name",
					content: "Nephrite"
				},
				{
					property: "og:locale",
					content: ogLocale[locale]
				},
				...locales.filter((l) => l !== locale).map((l) => ({
					property: "og:locale:alternate",
					content: ogLocale[l]
				})),
				{
					property: "og:image",
					content: ogImage
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: og_image_alt()
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:site",
					content: "@NephriteTheme"
				},
				{
					name: "twitter:image",
					content: ogImage
				},
				{
					name: "twitter:image:alt",
					content: og_image_alt()
				}
			],
			links: [
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "icon",
					type: "image/svg+xml",
					href: "/logo.svg"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon-32.png"
				},
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon.png"
				}
			],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(jsonLd)
			}]
		};
	},
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: getLocale(),
		className: "dark",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: motionScript } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			children,
			false,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function pageHead({ path, title, description }) {
	const url = localeUrl(getLocale(), path, "en");
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:url",
				content: url
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			}
		],
		links: [
			{
				rel: "canonical",
				href: url
			},
			...locales.map((l) => ({
				rel: "alternate",
				hrefLang: l,
				href: localeUrl(l, path, "en")
			})),
			{
				rel: "alternate",
				hrefLang: "x-default",
				href: localeUrl("en", path, "en")
			}
		]
	};
}
var $$splitComponentImporter$2 = () => import("./routes-ChlvwYGh.mjs");
var Route$2 = createFileRoute("/")({
	head: () => pageHead({
		path: "/",
		title: meta_title(),
		description: meta_description()
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./palette-CIYAhqAN.mjs");
var Route$1 = createFileRoute("/palette")({
	validateSearch: (search) => ({ flavor: FLAVORS.some((f) => f.key === search.flavor) ? search.flavor : void 0 }),
	head: () => pageHead({
		path: "/palette",
		title: palette_meta_title(),
		description: palette_meta_description()
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./ports-CHVubuSo.mjs");
var Route = createFileRoute("/ports")({
	validateSearch: (search) => ({
		q: typeof search.q === "string" && search.q ? search.q : void 0,
		category: PORT_CATEGORIES.includes(search.category) ? search.category : void 0
	}),
	head: () => pageHead({
		path: "/ports",
		title: ports_meta_title(),
		description: ports_meta_description()
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	PaletteRoute: Route$1.update({
		id: "/palette",
		path: "/palette",
		getParentRoute: () => Route$3
	}),
	PortsRoute: Route.update({
		id: "/ports",
		path: "/ports",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		rewrite: {
			input: ({ url }) => deLocalizeUrl(url),
			output: ({ url }) => localizeUrl(url)
		}
	});
}
//#endregion
export { Route, Route$1, router_exports };
