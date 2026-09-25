import { __commonJSMin, __toESM } from "../../_runtime.mjs";
import { require_react } from "../gsap+gsap__react+react.mjs";
//#region node_modules/.pnpm/react@19.3.0/node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/.pnpm/react@19.3.0/node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
//#region node_modules/.pnpm/@icons-pack+react-simple-icons@13.15.1_react@19.3.0/node_modules/@icons-pack/react-simple-icons/icons/SiFirefoxbrowser.mjs
var import_jsx_runtime = require_jsx_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var defaultColor$4 = "#FF7139";
var SiFirefoxbrowser = import_react.forwardRef(function SiFirefoxbrowser2({ title = "Firefox Browser", color = "currentColor", size = 24, ...others }, ref) {
	if (color === "default") color = defaultColor$4;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: size,
		height: size,
		fill: color,
		viewBox: "0 0 24 24",
		ref,
		...others,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.824 7.287c.008 0 .004 0 0 0zm-2.8-1.4c.006 0 .003 0 0 0zm16.754 2.161c-.505-1.215-1.53-2.528-2.333-2.943.654 1.283 1.033 2.57 1.177 3.53l.002.02c-1.314-3.278-3.544-4.6-5.366-7.477-.091-.147-.184-.292-.273-.446a3.545 3.545 0 01-.13-.24 2.118 2.118 0 01-.172-.46.03.03 0 00-.027-.03.038.038 0 00-.021 0l-.006.001a.037.037 0 00-.01.005L15.624 0c-2.585 1.515-3.657 4.168-3.932 5.856a6.197 6.197 0 00-2.305.587.297.297 0 00-.147.37c.057.162.24.24.396.17a5.622 5.622 0 012.008-.523l.067-.005a5.847 5.847 0 011.957.222l.095.03a5.816 5.816 0 01.616.228c.08.036.16.073.238.112l.107.055a5.835 5.835 0 01.368.211 5.953 5.953 0 012.034 2.104c-.62-.437-1.733-.868-2.803-.681 4.183 2.09 3.06 9.292-2.737 9.02a5.164 5.164 0 01-1.513-.292 4.42 4.42 0 01-.538-.232c-1.42-.735-2.593-2.121-2.74-3.806 0 0 .537-2 3.845-2 .357 0 1.38-.998 1.398-1.287-.005-.095-2.029-.9-2.817-1.677-.422-.416-.622-.616-.8-.767a3.47 3.47 0 00-.301-.227 5.388 5.388 0 01-.032-2.842c-1.195.544-2.124 1.403-2.8 2.163h-.006c-.46-.584-.428-2.51-.402-2.913-.006-.025-.343.176-.389.206-.406.29-.787.616-1.136.974-.397.403-.76.839-1.085 1.303a9.816 9.816 0 00-1.562 3.52c-.003.013-.11.487-.19 1.073-.013.09-.026.181-.037.272a7.8 7.8 0 00-.069.667l-.002.034-.023.387-.001.06C.386 18.795 5.593 24 12.016 24c5.752 0 10.527-4.176 11.463-9.661.02-.149.035-.298.052-.448.232-1.994-.025-4.09-.753-5.844z" })]
	});
});
//#endregion
//#region node_modules/.pnpm/@icons-pack+react-simple-icons@13.15.1_react@19.3.0/node_modules/@icons-pack/react-simple-icons/icons/SiGithub.mjs
var defaultColor$3 = "#181717";
var SiGithub = import_react.forwardRef(function SiGithub2({ title = "GitHub", color = "currentColor", size = 24, ...others }, ref) {
	if (color === "default") color = defaultColor$3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: size,
		height: size,
		fill: color,
		viewBox: "0 0 24 24",
		ref,
		...others,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })]
	});
});
//#endregion
//#region node_modules/.pnpm/@icons-pack+react-simple-icons@13.15.1_react@19.3.0/node_modules/@icons-pack/react-simple-icons/icons/SiGooglechrome.mjs
var defaultColor$2 = "#4285F4";
var SiGooglechrome = import_react.forwardRef(function SiGooglechrome2({ title = "Google Chrome", color = "currentColor", size = 24, ...others }, ref) {
	if (color === "default") color = defaultColor$2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: size,
		height: size,
		fill: color,
		viewBox: "0 0 24 24",
		ref,
		...others,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" })]
	});
});
//#endregion
//#region node_modules/.pnpm/@icons-pack+react-simple-icons@13.15.1_react@19.3.0/node_modules/@icons-pack/react-simple-icons/icons/SiSpotify.mjs
var defaultColor$1 = "#1ED760";
var SiSpotify = import_react.forwardRef(function SiSpotify2({ title = "Spotify", color = "currentColor", size = 24, ...others }, ref) {
	if (color === "default") color = defaultColor$1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: size,
		height: size,
		fill: color,
		viewBox: "0 0 24 24",
		ref,
		...others,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" })]
	});
});
//#endregion
//#region node_modules/.pnpm/@icons-pack+react-simple-icons@13.15.1_react@19.3.0/node_modules/@icons-pack/react-simple-icons/icons/SiX.mjs
var defaultColor = "#000000";
var SiX = import_react.forwardRef(function SiX2({ title = "X", color = "currentColor", size = 24, ...others }, ref) {
	if (color === "default") color = defaultColor;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: size,
		height: size,
		fill: color,
		viewBox: "0 0 24 24",
		ref,
		...others,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" })]
	});
});
//#endregion
export { SiFirefoxbrowser, SiGithub, SiGooglechrome, SiSpotify, SiX, require_jsx_runtime };
