globalThis.__nitro_main__ = import.meta.url;
import { H3Core, HTTPError, NodeResponse, composeMiddleware, createMatcherFromFind, defineHandler, defineLazyEventHandler, headers, memoizeRouteRulesMatcher, serve, toEventHandler } from "./_libs/h3+rou3+srvx.mjs";
import { HookableCore } from "./_libs/hookable.mjs";
import { decodePath, joinURL, withLeadingSlash, withoutTrailingSlash } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"b16-MugOu5fXGooNKqCluIpx+jzESbg\"",
		"mtime": "2026-09-25T03:07:30.171Z",
		"size": 2838,
		"path": "../public/apple-touch-icon.png"
	},
	"/favicon-32.png": {
		"type": "image/png",
		"etag": "\"2e4-MStQa4tOcds3ISN2yRP9rrkQe8M\"",
		"mtime": "2026-09-25T03:07:30.167Z",
		"size": 740,
		"path": "../public/favicon-32.png"
	},
	"/logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"3e8-X0Ng7F/lbvNpZrdem1Y895JLUco\"",
		"mtime": "2026-09-25T02:58:00.228Z",
		"size": 1e3,
		"path": "../public/logo.svg"
	},
	"/logo-512.png": {
		"type": "image/png",
		"etag": "\"25cc-Ll8D5HI1TCdtTVT5ivdk8Rf6rHc\"",
		"mtime": "2026-09-25T03:07:30.164Z",
		"size": 9676,
		"path": "../public/logo-512.png"
	},
	"/assets/geist-cyrillic-ext-wght-normal-DjL33-gN.woff2": {
		"type": "font/woff2",
		"etag": "\"1cfc-yYSDXNlt/tTRaj6rJo8ZMqvY7pQ\"",
		"mtime": "2026-09-25T06:38:04.990Z",
		"size": 7420,
		"path": "../public/assets/geist-cyrillic-ext-wght-normal-DjL33-gN.woff2"
	},
	"/assets/geist-cyrillic-wght-normal-BEAKL7Jp.woff2": {
		"type": "font/woff2",
		"etag": "\"3aec-5kpQSZEtAzzU5kdiuro3Zr2YR54\"",
		"mtime": "2026-09-25T06:38:04.991Z",
		"size": 15084,
		"path": "../public/assets/geist-cyrillic-wght-normal-BEAKL7Jp.woff2"
	},
	"/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2": {
		"type": "font/woff2",
		"etag": "\"4080-mZu3Z7sOWqglha+kefNbUA9Pp+Q\"",
		"mtime": "2026-09-25T06:38:04.991Z",
		"size": 16512,
		"path": "../public/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2"
	},
	"/assets/geist-mono-cyrillic-ext-wght-normal-X_5orZeX.woff2": {
		"type": "font/woff2",
		"etag": "\"1820-nQACIwCsmkduQK2CSMidMhmLR9U\"",
		"mtime": "2026-09-25T06:38:04.992Z",
		"size": 6176,
		"path": "../public/assets/geist-mono-cyrillic-ext-wght-normal-X_5orZeX.woff2"
	},
	"/assets/geist-latin-wght-normal-BgDaEnEv.woff2": {
		"type": "font/woff2",
		"etag": "\"72d8-9J+D7/6th5UzRxIgoFX9awJv47A\"",
		"mtime": "2026-09-25T06:38:04.991Z",
		"size": 29400,
		"path": "../public/assets/geist-latin-wght-normal-BgDaEnEv.woff2"
	},
	"/assets/geist-mono-cyrillic-wght-normal-DiZS0aHC.woff2": {
		"type": "font/woff2",
		"etag": "\"328c-3kQUs7xjzfvJdLvI58iU6DHlynA\"",
		"mtime": "2026-09-25T06:38:04.992Z",
		"size": 12940,
		"path": "../public/assets/geist-mono-cyrillic-wght-normal-DiZS0aHC.woff2"
	},
	"/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2": {
		"type": "font/woff2",
		"etag": "\"3968-BV9ZbqWHVAcipAKX5y8la3JkUQs\"",
		"mtime": "2026-09-25T06:38:04.992Z",
		"size": 14696,
		"path": "../public/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"45-NOamYkjKEaPcp1w70BsFpsPoLkw\"",
		"mtime": "2026-09-25T02:16:19.037Z",
		"size": 69,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"864-UJpAh7ddNEJdbfJ5BiGrXZHbjsg\"",
		"mtime": "2026-09-25T04:44:12.954Z",
		"size": 2148,
		"path": "../public/sitemap.xml"
	},
	"/og-image.png": {
		"type": "image/png",
		"etag": "\"13f11-Qx1u0lBKpBo1VZjxdfq4U4riFxQ\"",
		"mtime": "2026-09-25T03:07:30.659Z",
		"size": 81681,
		"path": "../public/og-image.png"
	},
	"/assets/geist-mono-symbols2-wght-normal-CO5SzqOn.woff2": {
		"type": "font/woff2",
		"etag": "\"16b4-aZoLOGWoEYW7gmwZamfz5kTfFco\"",
		"mtime": "2026-09-25T06:38:04.993Z",
		"size": 5812,
		"path": "../public/assets/geist-mono-symbols2-wght-normal-CO5SzqOn.woff2"
	},
	"/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2": {
		"type": "font/woff2",
		"etag": "\"5a58-jDy+14PX7OhwqFZsiKzuRax9xZ8\"",
		"mtime": "2026-09-25T06:38:04.993Z",
		"size": 23128,
		"path": "../public/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2"
	},
	"/assets/geist-mono-vietnamese-wght-normal-DadHysG0.woff2": {
		"type": "font/woff2",
		"etag": "\"1e10-mpU2OlFk4DakDO4paRfgJ2LHDsM\"",
		"mtime": "2026-09-25T06:38:04.993Z",
		"size": 7696,
		"path": "../public/assets/geist-mono-vietnamese-wght-normal-DadHysG0.woff2"
	},
	"/assets/IconBase-B_QnVcmU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e0c-FzwihmzNVzPeNdchDG1VEDNi0X8\"",
		"mtime": "2026-09-25T06:38:04.981Z",
		"size": 28172,
		"path": "../public/assets/IconBase-B_QnVcmU.js"
	},
	"/assets/geist-vietnamese-wght-normal-6IgcOCM7.woff2": {
		"type": "font/woff2",
		"etag": "\"1f44-6MZ7/PEEOeDVF0eHI650KpwKQV8\"",
		"mtime": "2026-09-25T06:38:04.994Z",
		"size": 8004,
		"path": "../public/assets/geist-vietnamese-wght-normal-6IgcOCM7.woff2"
	},
	"/assets/ports-DwUmyEtT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21ad-bRP1HaMwKs1fSCQU0fi+uRasn1Y\"",
		"mtime": "2026-09-25T06:38:04.982Z",
		"size": 8621,
		"path": "../public/assets/ports-DwUmyEtT.js"
	},
	"/assets/PageShell-c4CHaJNg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a8d9-Q16mONbv/EhmAq/LidJgkVDKVg4\"",
		"mtime": "2026-09-25T06:38:04.981Z",
		"size": 174297,
		"path": "../public/assets/PageShell-c4CHaJNg.js"
	},
	"/assets/palette-DpORK7FC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3708-Ghra+T5AMkzpfKw+8zAoyoUZd5s\"",
		"mtime": "2026-09-25T06:38:04.981Z",
		"size": 14088,
		"path": "../public/assets/palette-DpORK7FC.js"
	},
	"/assets/ports-UA9Mwd_I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e91-Lc+6aH+EsP9RpRaUZRImQkqPFCE\"",
		"mtime": "2026-09-25T06:38:04.988Z",
		"size": 7825,
		"path": "../public/assets/ports-UA9Mwd_I.js"
	},
	"/assets/index-CIewEqvT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4db9c-VZD9QeFTWkb0Vq74YhK/5raMpME\"",
		"mtime": "2026-09-25T06:38:04.980Z",
		"size": 318364,
		"path": "../public/assets/index-CIewEqvT.js"
	},
	"/assets/preload-helper-bUXbFpIU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1646-QdJQuNCsyiFWeOx5ghdrXVM94Pc\"",
		"mtime": "2026-09-25T06:38:04.989Z",
		"size": 5702,
		"path": "../public/assets/preload-helper-bUXbFpIU.js"
	},
	"/assets/routes-DSWNLMuk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42ad-UXsQ/GMrlMdV5yO78wvEWAN65/U\"",
		"mtime": "2026-09-25T06:38:04.990Z",
		"size": 17069,
		"path": "../public/assets/routes-DSWNLMuk.js"
	},
	"/assets/styles-B-PRyYrz.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"b99f-OU8EYwKC45LoE+zVJRNqyFWg6H0\"",
		"mtime": "2026-09-25T06:38:04.995Z",
		"size": 47519,
		"path": "../public/assets/styles-B-PRyYrz.css"
	},
	"/shots/forest.webp": {
		"type": "image/webp",
		"etag": "\"d928-MStNXQmm7nWuSp9BRqWgzDxpAyE\"",
		"mtime": "2026-09-25T06:37:14.688Z",
		"size": 55592,
		"path": "../public/shots/forest.webp"
	},
	"/shots/jade.webp": {
		"type": "image/webp",
		"etag": "\"ee04-CRtmt8p2884XsIkddlI+4IG62yY\"",
		"mtime": "2026-09-25T06:37:16.228Z",
		"size": 60932,
		"path": "../public/shots/jade.webp"
	},
	"/shots/mint.webp": {
		"type": "image/webp",
		"etag": "\"ecec-sRXh3pIIgk5/ikN3/irmk7CjxnA\"",
		"mtime": "2026-09-25T06:37:17.726Z",
		"size": 60652,
		"path": "../public/shots/mint.webp"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260903-beta/node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = {
		route: "/assets/**",
		rank: 1,
		rules: [{
			name: "headers",
			route: "/assets/**",
			handler: headers,
			options: {
				"X-Content-Type-Options": "nosniff",
				"Referrer-Policy": "strict-origin-when-cross-origin",
				"X-Frame-Options": "DENY",
				"Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
				"cache-control": "public, max-age=31536000, immutable"
			},
			paramRoutes: ["/**", "/assets/**"]
		}]
	}, $1 = {
		route: "/**",
		rank: 0,
		rules: [{
			name: "headers",
			route: "/**",
			handler: headers,
			options: {
				"X-Content-Type-Options": "nosniff",
				"Referrer-Policy": "strict-origin-when-cross-origin",
				"X-Frame-Options": "DENY",
				"Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()"
			}
		}]
	};
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1);
		let s = p.split("/");
		if (s.length > 1 && s[s.length - 1] === "") {
			s.pop();
			p = p.slice(0, -1);
		}
		if (s.length > 1) {
			if (s[1] === "assets") r.push({
				data: $0,
				params: { "_": p.slice(8) }
			});
		}
		r.push({
			data: $1,
			params: { "_": p.slice(1) }
		});
		return r.reverse();
	};
})();
var _lazy_4fcdda30a85a5bcb = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_4fcdda30a85a5bcb
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260903-beta/node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => {
		event.context.routeRules = getRouteRules(event.req.method, event.url.pathname).routeRules;
		return findRoute(event.req.method, event.url.pathname);
	};
	h3App["~middleware"].push(createRouteRulesMiddleware());
	h3App["~middleware"].push(...globalMiddleware);
	return h3App;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260903-beta/node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
var _matchRouteRules;
function getRouteRules(method, pathname) {
	return (_matchRouteRules ??= memoizeRouteRulesMatcher(createMatcherFromFind(findRouteRules)))(method, pathname);
}
function createRouteRulesMiddleware() {
	const composed = /* @__PURE__ */ new WeakMap();
	const middleware = (event, next) => {
		const ruleMiddleware = getRouteRules(event.req.method, event.url.pathname).routeRuleMiddleware;
		if (ruleMiddleware.length === 0) return next();
		let chain = composed.get(ruleMiddleware);
		if (!chain) {
			chain = composeMiddleware(ruleMiddleware);
			composed.set(ruleMiddleware, chain);
		}
		return chain(event, next);
	};
	return markUntraced(middleware);
}
function markUntraced(middleware) {
	middleware.__traced__ = true;
	return middleware;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260903-beta/node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260903-beta/node_modules/nitro/dist/runtime/internal/shutdown.mjs
function setupCloseHooks(server) {
	const closeServer = server.close.bind(server);
	let closeHooks;
	server.close = (closeActiveConnections) => closeServer(closeActiveConnections).finally(() => closeHooks ??= callCloseHooks());
}
async function callCloseHooks() {
	try {
		await useNitroHooks().callHook("close");
	} catch (error) {
		console.error("[nitro] Error while calling `close` hooks:", error);
	}
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260903-beta/node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
setupCloseHooks(serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
}));
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
