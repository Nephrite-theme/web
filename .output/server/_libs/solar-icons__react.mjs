import { __toESM } from "../_runtime.mjs";
import { require_react } from "./gsap+gsap__react+react.mjs";
import { require_jsx_runtime } from "./@icons-pack/react-simple-icons+[...].mjs";
//#region node_modules/.pnpm/@solar-icons+react@2.3.1_re_f17f1cb15b51dbedddad460c131bb0b8/node_modules/@solar-icons/react/dist/lib/IconBase.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var r$10 = `solar`;
function i$8(e) {
	return e[`aria-label`] !== void 0 || e.title !== void 0;
}
var a = (0, import_react.forwardRef)(({ alt: e, color: a, size: o, strokeWidth: s, secondaryColor: c, secondaryOpacity: l, iconName: u, isolated: d, children: f, ...p }, m) => {
	let h = u ? `${r$10} solar-${u}` : r$10, g = p.className, _ = g ? `${h} ${g}` : h, v = !!e || i$8(p), y = { ...p.style ?? {} };
	if (d && (y[`--solar-secondary-color`] = `initial`, y[`--solar-secondary-opacity`] = `initial`), a !== void 0 && (y.color = a), o !== void 0) {
		let e = typeof o == `number` ? `${o}px` : o;
		y.width = e, y.height = e;
	}
	s !== void 0 && (y.strokeWidth = String(s)), c && (y[`--solar-secondary-color`] = c), l != null && (y[`--solar-secondary-opacity`] = String(l));
	let b = o === void 0 ? d ? `24px` : `1em` : void 0, x = o === void 0 ? d ? `24px` : `1em` : void 0;
	o === void 0 && !d && (`fontSize` in y || (y.fontSize = `var(--solar-size, 24px)`));
	let S = a === void 0 ? d ? `currentColor` : `var(--solar-color, currentColor)` : void 0, C = s === void 0 ? d ? `1.5` : `var(--solar-stroke-width, 1.5)` : void 0;
	return (0, import_jsx_runtime.jsxs)(`svg`, {
		ref: m,
		xmlns: `http://www.w3.org/2000/svg`,
		fill: `none`,
		viewBox: `0 0 24 24`,
		...p,
		className: _,
		style: Object.keys(y).length > 0 ? y : void 0,
		width: b,
		height: x,
		color: S,
		strokeWidth: C,
		...!v && { "aria-hidden": `true` },
		children: [!!e && (0, import_jsx_runtime.jsx)(`title`, { children: e }), f]
	});
});
//#endregion
//#region node_modules/.pnpm/@solar-icons+react@2.3.1_re_f17f1cb15b51dbedddad460c131bb0b8/node_modules/@solar-icons/react/dist/icons/linear/alt-arrow-down.mjs
var r$9 = (0, import_react.forwardRef)((t, r) => (0, import_jsx_runtime.jsx)(a, {
	ref: r,
	...t,
	iconName: `alt-arrow-down-linear`,
	children: (0, import_jsx_runtime.jsx)(`path`, {
		d: `M19 9L12 15L5 9`,
		stroke: `currentColor`,
		strokeLinecap: `round`,
		strokeLinejoin: `round`
	})
}));
//#endregion
//#region node_modules/.pnpm/@solar-icons+react@2.3.1_re_f17f1cb15b51dbedddad460c131bb0b8/node_modules/@solar-icons/react/dist/icons/linear/arrow-right-up.mjs
var r$8 = (0, import_react.forwardRef)((t, r) => (0, import_jsx_runtime.jsx)(a, {
	ref: r,
	...t,
	iconName: `arrow-right-up-linear`,
	children: (0, import_jsx_runtime.jsx)(`path`, {
		d: `M6 18L18 6M18 15V6H9`,
		stroke: `currentColor`,
		strokeLinecap: `round`,
		strokeLinejoin: `round`
	})
}));
//#endregion
//#region node_modules/.pnpm/@solar-icons+react@2.3.1_re_f17f1cb15b51dbedddad460c131bb0b8/node_modules/@solar-icons/react/dist/icons/linear/check-circle.mjs
var i$7 = (0, import_react.forwardRef)((t, i) => (0, import_jsx_runtime.jsxs)(a, {
	ref: i,
	...t,
	iconName: `check-circle-linear`,
	children: [(0, import_jsx_runtime.jsx)(`circle`, {
		cx: `12`,
		cy: `12`,
		r: `10`,
		stroke: `currentColor`,
		strokeLinecap: `round`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		d: `M8.5 12.5L10.5 14.5L15.5 9.5`,
		stroke: `currentColor`,
		strokeLinecap: `round`,
		strokeLinejoin: `round`
	})]
}));
//#endregion
//#region node_modules/.pnpm/@solar-icons+react@2.3.1_re_f17f1cb15b51dbedddad460c131bb0b8/node_modules/@solar-icons/react/dist/icons/linear/code-square.mjs
var i$6 = (0, import_react.forwardRef)((t, i) => (0, import_jsx_runtime.jsxs)(a, {
	ref: i,
	...t,
	iconName: `code-square-linear`,
	children: [
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15`,
			stroke: `currentColor`,
			strokeLinecap: `round`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M13.2939 7.17041L11.9998 12L10.7058 16.8297`,
			stroke: `currentColor`,
			strokeLinecap: `round`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M8.50019 9L8.32861 9.17157C6.99528 10.5049 6.32861 11.1716 6.32861 12C6.32861 12.8284 6.99528 13.4951 8.32861 14.8284L8.50019 15`,
			stroke: `currentColor`,
			strokeLinecap: `round`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z`,
			stroke: `currentColor`,
			strokeLinecap: `round`
		})
	]
}));
//#endregion
//#region node_modules/.pnpm/@solar-icons+react@2.3.1_re_f17f1cb15b51dbedddad460c131bb0b8/node_modules/@solar-icons/react/dist/icons/linear/copy.mjs
var i$5 = (0, import_react.forwardRef)((t, i) => (0, import_jsx_runtime.jsxs)(a, {
	ref: i,
	...t,
	iconName: `copy-linear`,
	children: [(0, import_jsx_runtime.jsx)(`path`, {
		d: `M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z`,
		stroke: `currentColor`,
		strokeLinecap: `round`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		d: `M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5`,
		stroke: `currentColor`,
		strokeLinecap: `round`
	})]
}));
//#endregion
//#region node_modules/.pnpm/@solar-icons+react@2.3.1_re_f17f1cb15b51dbedddad460c131bb0b8/node_modules/@solar-icons/react/dist/icons/linear/danger-circle.mjs
var i$4 = (0, import_react.forwardRef)((t, i) => (0, import_jsx_runtime.jsxs)(a, {
	ref: i,
	...t,
	iconName: `danger-circle-linear`,
	children: [
		(0, import_jsx_runtime.jsx)(`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`,
			stroke: `currentColor`,
			strokeLinecap: `round`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M12 7V13`,
			stroke: `currentColor`,
			strokeLinecap: `round`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M12 16H12.0001`,
			stroke: `currentColor`,
			strokeLinecap: `round`,
			strokeLinejoin: `round`
		})
	]
}));
//#endregion
//#region node_modules/.pnpm/@solar-icons+react@2.3.1_re_f17f1cb15b51dbedddad460c131bb0b8/node_modules/@solar-icons/react/dist/icons/linear/eye.mjs
var i$3 = (0, import_react.forwardRef)((t, i) => (0, import_jsx_runtime.jsxs)(a, {
	ref: i,
	...t,
	iconName: `eye-linear`,
	children: [(0, import_jsx_runtime.jsx)(`path`, {
		d: `M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z`,
		stroke: `currentColor`,
		strokeLinecap: `round`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		d: `M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z`,
		stroke: `currentColor`,
		strokeLinecap: `round`
	})]
}));
//#endregion
//#region node_modules/.pnpm/@solar-icons+react@2.3.1_re_f17f1cb15b51dbedddad460c131bb0b8/node_modules/@solar-icons/react/dist/icons/linear/file-terminal.mjs
var i$2 = (0, import_react.forwardRef)((t, i) => (0, import_jsx_runtime.jsxs)(a, {
	ref: i,
	...t,
	iconName: `file-terminal-linear`,
	children: [
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M16.0146 18.5H11.0146M6.01465 13.5L6.24905 13.6953C7.53073 14.7634 8.17157 15.2974 8.17157 16C8.17157 16.7026 7.53073 17.2366 6.24905 18.3047L6.01465 18.5`,
			stroke: `currentColor`,
			strokeLinecap: `round`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M13 2.2627V5.0003C13 7.35732 13 8.53583 13.7322 9.26806C14.4645 10.0003 15.643 10.0003 18 10.0003H21.58`,
			stroke: `currentColor`,
			strokeLinecap: `round`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M3.17139 3.17157C4.34296 2 6.23851 2 10.0296 2C11.5546 2 12.3173 2.00011 13.0093 2.26562C13.7012 2.53114 14.2651 3.03857 15.3929 4.05365L19.3516 7.61621C20.6558 8.78998 21.3078 9.3774 21.6538 10.1543C21.9998 10.9312 22 11.8079 22 13.5625V14C22 17.7712 22 19.6566 20.8284 20.8281C19.6569 21.9997 17.7712 22 14 22L9.9969 21.9997C6.22761 21.9997 4.34284 21.9997 3.17157 20.8284C2 19.6569 2 17.7712 2 14V9.9982C2 6.22817 2 4.34296 3.17139 3.17157Z`,
			stroke: `currentColor`,
			strokeLinecap: `round`,
			strokeLinejoin: `round`
		})
	]
}));
//#endregion
//#region node_modules/.pnpm/@solar-icons+react@2.3.1_re_f17f1cb15b51dbedddad460c131bb0b8/node_modules/@solar-icons/react/dist/icons/linear/magnifier.mjs
var i$1 = (0, import_react.forwardRef)((t, i) => (0, import_jsx_runtime.jsxs)(a, {
	ref: i,
	...t,
	iconName: `magnifier-linear`,
	children: [(0, import_jsx_runtime.jsx)(`circle`, {
		cx: `11.5`,
		cy: `11.5`,
		r: `9.5`,
		stroke: `currentColor`,
		strokeLinecap: `round`
	}), (0, import_jsx_runtime.jsx)(`path`, {
		d: `M18.2173 18.2178L21.9999 22.0004`,
		stroke: `currentColor`,
		strokeLinecap: `round`
	})]
}));
//#endregion
//#region node_modules/.pnpm/@solar-icons+react@2.3.1_re_f17f1cb15b51dbedddad460c131bb0b8/node_modules/@solar-icons/react/dist/icons/linear/window-frame.mjs
var i = (0, import_react.forwardRef)((t, i) => (0, import_jsx_runtime.jsxs)(a, {
	ref: i,
	...t,
	iconName: `window-frame-linear`,
	children: [
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z`,
			stroke: `currentColor`,
			strokeLinecap: `round`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M2 9.5H22`,
			stroke: `currentColor`,
			strokeLinecap: `round`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M9 21.9797L9 9.5`,
			stroke: `currentColor`,
			strokeLinecap: `round`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M12 6H12.0001`,
			stroke: `currentColor`,
			strokeLinecap: `round`,
			strokeLinejoin: `round`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M9 6H9.0001`,
			stroke: `currentColor`,
			strokeLinecap: `round`,
			strokeLinejoin: `round`
		}),
		(0, import_jsx_runtime.jsx)(`path`, {
			d: `M6 6H6.0001`,
			stroke: `currentColor`,
			strokeLinecap: `round`,
			strokeLinejoin: `round`
		})
	]
}));
//#endregion
export { i, i$1, i$2, i$3, i$4, i$5, i$6, i$7, r$8 as r, r$9 as r$1 };
