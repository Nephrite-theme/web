import { __toESM } from "../_runtime.mjs";
import { gsapWithCSS, require_react, useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { Link, useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { SiGithub, SiX, require_jsx_runtime } from "../_libs/@icons-pack/react-simple-icons+[...].mjs";
import { getLocale, locales, setLocale } from "./ssr.mjs";
import { LINKS, VARIANTS } from "./ports-CaKxqcHb.mjs";
import { r, r$1 } from "../_libs/solar-icons__react.mjs";
import { ScrollSmoother, ScrollTrigger } from "../_libs/gsap.mjs";
import { clsx } from "../_libs/clsx.mjs";
import { twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-BjYpOffM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Closing_BodyInputs */
var en_closing_body = () => {
	return `Firefox and VS Code are next.`;
};
var es_closing_body = () => {
	return `Firefox y VS Code son lo siguiente.`;
};
/**
* | output |
* | --- |
* | "Firefox and VS Code are next." |
*
* @param {Closing_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var closing_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_closing_body(inputs);
	return en_closing_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Closing_FollowInputs */
var en_closing_follow = () => {
	return `Follow the progress on`;
};
var es_closing_follow = () => {
	return `Sigue el progreso en`;
};
/**
* | output |
* | --- |
* | "Follow the progress on" |
*
* @param {Closing_FollowInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var closing_follow = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_closing_follow(inputs);
	return en_closing_follow(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Closing_OrInputs */
var en_closing_or = () => {
	return `or`;
};
var es_closing_or = () => {
	return `o`;
};
/**
* | output |
* | --- |
* | "or" |
*
* @param {Closing_OrInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var closing_or = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_closing_or(inputs);
	return en_closing_or(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Closing_TitleInputs */
var en_closing_title = () => {
	return `Give your browser some quiet.`;
};
var es_closing_title = () => {
	return `Dale calma a tu navegador.`;
};
/**
* | output |
* | --- |
* | "Give your browser some quiet." |
*
* @param {Closing_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var closing_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_closing_title(inputs);
	return en_closing_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Cta_AddInputs */
var en_cta_add = () => {
	return `Add to Chrome`;
};
var es_cta_add = () => {
	return `Añadir a Chrome`;
};
/**
* | output |
* | --- |
* | "Add to Chrome" |
*
* @param {Cta_AddInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var cta_add = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_cta_add(inputs);
	return en_cta_add(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Cta_ChromeInputs */
var en_cta_chrome = () => {
	return `Get it for Chrome`;
};
var es_cta_chrome = () => {
	return `Obtener para Chrome`;
};
/**
* | output |
* | --- |
* | "Get it for Chrome" |
*
* @param {Cta_ChromeInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var cta_chrome = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_cta_chrome(inputs);
	return en_cta_chrome(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ year: NonNullable<unknown> }} Footer_RightsInputs */
var en_footer_rights = (i) => {
	return `© ${i?.year} Nephrite`;
};
var es_footer_rights = (i) => {
	return `© ${i?.year} Nephrite`;
};
/**
* | output |
* | --- |
* | "© {year} Nephrite" |
*
* @param {Footer_RightsInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var footer_rights = ((inputs, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_footer_rights(inputs);
	return en_footer_rights(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Footer_TaglineInputs */
var en_footer_tagline = () => {
	return `The emerald standard for your browser.`;
};
var es_footer_tagline = () => {
	return `El estándar esmeralda para tu navegador.`;
};
/**
* | output |
* | --- |
* | "The emerald standard for your browser." |
*
* @param {Footer_TaglineInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var footer_tagline = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_footer_tagline(inputs);
	return en_footer_tagline(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Language_LabelInputs */
var en_language_label = () => {
	return `Language`;
};
var es_language_label = () => {
	return `Idioma`;
};
/**
* | output |
* | --- |
* | "Language" |
*
* @param {Language_LabelInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var language_label = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_language_label(inputs);
	return en_language_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Nav_DetailsInputs */
var en_nav_details = () => {
	return `Details`;
};
var es_nav_details = () => {
	return `Detalles`;
};
/**
* | output |
* | --- |
* | "Details" |
*
* @param {Nav_DetailsInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var nav_details = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_nav_details(inputs);
	return en_nav_details(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Nav_HomeInputs */
var en_nav_home = () => {
	return `Nephrite home`;
};
var es_nav_home = () => {
	return `Inicio de Nephrite`;
};
/**
* | output |
* | --- |
* | "Nephrite home" |
*
* @param {Nav_HomeInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var nav_home = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_nav_home(inputs);
	return en_nav_home(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Nav_Menu_CloseInputs */
var en_nav_menu_close = () => {
	return `Close menu`;
};
var es_nav_menu_close = () => {
	return `Cerrar menú`;
};
/**
* | output |
* | --- |
* | "Close menu" |
*
* @param {Nav_Menu_CloseInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var nav_menu_close = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_nav_menu_close(inputs);
	return en_nav_menu_close(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Nav_Menu_OpenInputs */
var en_nav_menu_open = () => {
	return `Open menu`;
};
var es_nav_menu_open = () => {
	return `Abrir menú`;
};
/**
* | output |
* | --- |
* | "Open menu" |
*
* @param {Nav_Menu_OpenInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var nav_menu_open = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_nav_menu_open(inputs);
	return en_nav_menu_open(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Nav_PaletteInputs */
var en_nav_palette = () => {
	return `Palette`;
};
var es_nav_palette = () => {
	return `Paleta`;
};
/**
* | output |
* | --- |
* | "Palette" |
*
* @param {Nav_PaletteInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var nav_palette = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_nav_palette(inputs);
	return en_nav_palette(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Nav_PortsInputs */
var en_nav_ports = () => {
	return `Ports`;
};
var es_nav_ports = () => {
	return `Apps`;
};
/**
* | output |
* | --- |
* | "Ports" |
*
* @param {Nav_PortsInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var nav_ports = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_nav_ports(inputs);
	return en_nav_ports(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Nav_RoadmapInputs */
var en_nav_roadmap = () => {
	return `Roadmap`;
};
var es_nav_roadmap = () => {
	return `Roadmap`;
};
/**
* | output |
* | --- |
* | "Roadmap" |
*
* @param {Nav_RoadmapInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var nav_roadmap = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_nav_roadmap(inputs);
	return en_nav_roadmap(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Nav_VariantsInputs */
var en_nav_variants = () => {
	return `Variants`;
};
var es_nav_variants = () => {
	return `Variantes`;
};
/**
* | output |
* | --- |
* | "Variants" |
*
* @param {Nav_VariantsInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var nav_variants = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_nav_variants(inputs);
	return en_nav_variants(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Skip_LinkInputs */
var en_skip_link = () => {
	return `Skip to content`;
};
var es_skip_link = () => {
	return `Saltar al contenido`;
};
/**
* | output |
* | --- |
* | "Skip to content" |
*
* @param {Skip_LinkInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var skip_link = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_skip_link(inputs);
	return en_skip_link(inputs);
});
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
var EASE_OUT = "expo.out";
var MOTION_OK = "(prefers-reduced-motion: no-preference)";
function Reveals() {
	useGSAP(() => {
		gsapWithCSS.matchMedia().add(MOTION_OK, () => {
			ScrollTrigger.batch("[data-reveal]", {
				start: "top 88%",
				once: true,
				onEnter: (els) => gsapWithCSS.to(els, {
					opacity: 1,
					y: 0,
					duration: 1.2,
					ease: EASE_OUT,
					stagger: .09
				})
			});
		});
	});
	return null;
}
function SmootherInit() {
	useGSAP(() => {
		if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
		const smoother = ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			smooth: 1.1,
			smoothTouch: false
		});
		return () => smoother.kill();
	});
	(0, import_react.useEffect)(() => {
		const refresh = () => ScrollTrigger.refresh();
		document.fonts?.ready.then(refresh);
		window.addEventListener("load", refresh);
		return () => window.removeEventListener("load", refresh);
	}, []);
	return null;
}
function scrollToTarget(target, smooth) {
	const smoother = ScrollSmoother.get();
	if (smoother) {
		const pin = ScrollTrigger.getAll().find((st) => st.pin === target);
		const y = pin ? pin.start : smoother.offset(target, `top 96px`);
		smoother.scrollTo(y, smooth);
	} else target.scrollIntoView({ behavior: smooth && window.matchMedia("(prefers-reduced-motion: no-preference)").matches ? "smooth" : "auto" });
	if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
	target.focus({ preventScroll: true });
}
function SmoothScroll({ children }) {
	(0, import_react.useEffect)(() => {
		const onClick = (e) => {
			if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
			const id = e.target.closest("a[href^=\"#\"]")?.getAttribute("href")?.slice(1);
			if (!id) return;
			const target = document.getElementById(id);
			if (!target) return;
			e.preventDefault();
			scrollToTarget(target, true);
			history.replaceState(null, "", `#${id}`);
		};
		document.addEventListener("click", onClick);
		const id = decodeURIComponent(window.location.hash.slice(1));
		const target = id ? document.getElementById(id) : null;
		const timer = target ? window.setTimeout(() => {
			ScrollTrigger.refresh();
			scrollToTarget(target, false);
		}, 120) : void 0;
		return () => {
			document.removeEventListener("click", onClick);
			window.clearTimeout(timer);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: "smooth-wrapper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "smooth-content",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmootherInit, {}), children]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function LocaleSwitcher({ className }) {
	const current = getLocale();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("fieldset", {
		"aria-label": language_label(),
		className: cn("m-0 inline-flex min-w-0 items-center rounded-full border-0 p-0.5 ring-1 ring-hairline", className),
		children: locales.map((locale) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setLocale(locale),
			"aria-pressed": locale === current,
			className: cn("min-h-6 min-w-8 rounded-full px-2.5 py-1 font-mono text-[11px] uppercase transition-colors duration-300 ease-fluid", locale === current ? "bg-white/[0.08] text-fg" : "text-fg-faint hover:text-fg-muted"),
			children: locale
		}, locale))
	});
}
function pillClass(variant, size) {
	return cn("group inline-flex shrink-0 items-center whitespace-nowrap rounded-full font-medium", "transition-[transform,background-color,box-shadow] duration-500 ease-fluid active:scale-[0.98]", size === "md" ? "gap-3 py-2 pr-2 pl-6 text-[15px]" : "gap-2 py-1.5 pr-1.5 pl-4 text-sm", variant === "primary" ? "bg-jade text-jade-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_12px_32px_-12px_rgb(61_184_122/0.55)] hover:bg-jade-soft" : "bg-white/[0.04] text-fg ring-1 ring-hairline-strong hover:bg-white/[0.07]");
}
function PillIcon({ variant, size, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: cn("flex items-center justify-center rounded-full transition-transform duration-500 ease-fluid", size === "md" ? "size-9" : "size-7", variant === "primary" ? "bg-jade-ink/10" : "bg-white/[0.06]", className),
		children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {
			size: size === "md" ? 18 : 15,
			strokeWidth: 1.75
		})
	});
}
function PillLink({ variant = "primary", size = "md", leading, className, children, ...props }) {
	const external = props.href?.startsWith("http");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		...external ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		...props,
		className: cn(pillClass(variant, size), className),
		children: [
			leading,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillIcon, {
				variant,
				size,
				className: "group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105"
			})
		]
	});
}
function Swatch({ variant, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: cn("inline-block size-5 shrink-0 rounded-full ring-1 ring-white/15", className),
		style: { background: `linear-gradient(180deg, ${variant.frame} 50%, ${variant.toolbar} 50%)` }
	});
}
function InstallMenu({ size = "md", align = "start", className }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const root = (0, import_react.useRef)(null);
	const button = (0, import_react.useRef)(null);
	const menuId = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onPointer = (e) => {
			if (!root.current?.contains(e.target)) setOpen(false);
		};
		const onKey = (e) => {
			if (e.key !== "Escape") return;
			setOpen(false);
			button.current?.focus();
		};
		const onFocus = (e) => {
			if (!root.current?.contains(e.target)) setOpen(false);
		};
		document.addEventListener("focusin", onFocus);
		document.addEventListener("pointerdown", onPointer);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("pointerdown", onPointer);
			document.removeEventListener("keydown", onKey);
			document.removeEventListener("focusin", onFocus);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: cn("relative", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			ref: button,
			type: "button",
			"aria-expanded": open,
			"aria-controls": menuId,
			onClick: () => setOpen((v) => !v),
			className: pillClass("primary", size),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cta_chrome() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillIcon, {
				variant: "primary",
				size,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r$1, {
					size: size === "md" ? 18 : 15,
					strokeWidth: 1.75,
					className: cn("transition-transform duration-500 ease-fluid", open && "rotate-180")
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: menuId,
			inert: !open,
			className: cn("absolute top-full z-50 mt-3 w-[min(21rem,calc(100vw-2rem))] origin-top", align === "end" && "right-0", align === "center" && "left-1/2 -translate-x-1/2", align === "start" && "left-0", "transition-[opacity,scale,visibility] duration-500 ease-fluid", open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bezel [--bezel-r:1.5rem]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "bezel-core p-1.5",
					children: VARIANTS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: v.store,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => setOpen(false),
						className: "group flex items-center gap-3 rounded-[1.1rem] px-3 py-3 transition-colors duration-300 ease-fluid hover:bg-white/[0.05]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatch, {
								variant: v,
								className: "size-7"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium text-fg",
									children: v.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-xs text-fg-muted",
									children: v.description()
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {
								size: 16,
								strokeWidth: 1.75,
								"aria-hidden": true,
								className: "text-fg-faint transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:text-jade-soft"
							})
						]
					}) }, v.key))
				})
			})
		})]
	});
}
var PEBBLE = "M246 78C356 66 446 138 446 246C446 360 360 440 250 436C142 432 66 360 66 256C66 158 140 90 246 78Z";
function Mark({ className, label }) {
	const id = `m${(0, import_react.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`;
	const clip = `${id}-clip`;
	const mask = `${id}-mask`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 512 512",
		className,
		role: label ? "img" : void 0,
		"aria-label": label,
		"aria-hidden": label ? void 0 : true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
			id: clip,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: PEBBLE })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mask", {
			id: mask,
			maskUnits: "userSpaceOnUse",
			x: "0",
			y: "0",
			width: "512",
			height: "512",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "512",
				height: "512",
				fill: "#fff"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "none",
				stroke: "#000",
				strokeWidth: "18",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 214C190 130 330 262 512 178" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 336C190 252 330 384 512 300" })]
			})]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			clipPath: `url(#${clip})`,
			mask: `url(#${mask})`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "512",
					height: "512",
					fill: "#1f6b45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 214C190 130 330 262 512 178V300C330 384 190 252 0 336Z",
					fill: "#3db87a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 0H512V178C330 262 190 130 0 214Z",
					fill: "#6bc4a8"
				})
			]
		})]
	});
}
function Wordmark({ className, plain }) {
	const base = cn("inline-flex items-baseline font-semibold leading-none tracking-[-0.05em]", className);
	if (plain) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: base,
		children: "nephrite"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		role: "img",
		"aria-label": "Nephrite",
		className: base,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				children: "nephr"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				"aria-hidden": true,
				className: "relative inline-block",
				children: ["ı", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					"aria-hidden": true,
					viewBox: "0 0 512 512",
					className: "absolute top-[-0.02em] left-1/2 size-[0.26em] -translate-x-1/2 text-jade",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: PEBBLE,
						fill: "currentColor"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				children: "te"
			})
		]
	});
}
function Lockup({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-[0.35em]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-[1.25em]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})]
	});
}
var socials = [{
	href: LINKS.github,
	label: "GitHub",
	icon: SiGithub
}, {
	href: LINKS.x,
	label: "X",
	icon: SiX
}];
function Closing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate z-10 mx-auto w-full max-w-[1400px] px-4 py-28 md:px-8 md:py-44",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[28rem] max-w-[48rem] -translate-y-1/2 rounded-full bg-jade/10 blur-[120px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[44rem] flex-col items-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-reveal": true,
					className: "mb-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-20 md:size-24" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					"data-reveal": true,
					className: "text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-7xl",
					children: closing_title()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					"data-reveal": true,
					className: "mt-6 max-w-[30rem] text-lg leading-relaxed text-fg-muted",
					children: [
						closing_body(),
						" ",
						closing_follow(),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.github,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-fg underline decoration-jade/50 underline-offset-4 transition-colors duration-300 ease-fluid hover:decoration-jade",
							children: "GitHub"
						}),
						" ",
						closing_or(),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.x,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-fg underline decoration-jade/50 underline-offset-4 transition-colors duration-300 ease-fluid hover:decoration-jade",
							children: "X"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-reveal": true,
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallMenu, { align: "center" })
				})
			]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative mx-auto w-full max-w-[1400px] px-4 pb-10 md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-8 rounded-[2rem] bg-white/[0.02] px-6 py-8 ring-1 ring-hairline md:flex-row md:items-center md:justify-between md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lockup, { className: "text-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-fg-muted",
					children: footer_tagline()
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleSwitcher, {}),
					socials.map(({ href, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": label,
						className: "flex size-10 items-center justify-center rounded-full bg-white/[0.04] text-fg-muted ring-1 ring-hairline transition-colors duration-300 ease-fluid hover:text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 })
					}, label)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "w-full text-xs text-fg-faint md:ml-3 md:w-auto",
						children: footer_rights({ year: String((/* @__PURE__ */ new Date()).getFullYear()) })
					})
				]
			})]
		})
	});
}
var sections = [
	{
		id: "variants",
		label: () => nav_variants()
	},
	{
		id: "details",
		label: () => nav_details()
	},
	{
		id: "roadmap",
		label: () => nav_roadmap()
	}
];
function SectionLink({ id, onHome, className, onClick, children, ...rest }) {
	if (onHome) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `#${id}`,
		className,
		onClick,
		...rest,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		hash: id === "top" ? void 0 : id,
		className,
		onClick,
		...rest,
		children
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const root = (0, import_react.useRef)(null);
	const tl = (0, import_react.useRef)(null);
	const toggle = (0, import_react.useRef)(null);
	const wasOpen = (0, import_react.useRef)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const onHome = pathname === "/";
	const onPorts = pathname.startsWith("/ports");
	const onPalette = pathname.startsWith("/palette");
	const pages = [{
		to: "/ports",
		label: nav_ports(),
		current: onPorts
	}, {
		to: "/palette",
		label: nav_palette(),
		current: onPalette
	}];
	useGSAP(() => {
		gsapWithCSS.matchMedia().add({
			motion: MOTION_OK,
			reduce: "(prefers-reduced-motion: reduce)"
		}, (ctx) => {
			const { motion } = ctx.conditions;
			tl.current = gsapWithCSS.timeline({ paused: true }).set("[data-nav-overlay]", { autoAlpha: 1 }).fromTo("[data-nav-overlay]", { opacity: 0 }, {
				opacity: 1,
				duration: motion ? .5 : .01,
				ease: "power2.out"
			}).fromTo("[data-nav-item]", {
				yPercent: motion ? 110 : 0,
				opacity: 0
			}, {
				yPercent: 0,
				opacity: 1,
				duration: motion ? .9 : .01,
				ease: EASE_OUT,
				stagger: motion ? .06 : 0
			}, motion ? "-=0.25" : 0);
		});
	}, { scope: root });
	(0, import_react.useEffect)(() => {
		if (!tl.current) return;
		if (open) tl.current.timeScale(1).play();
		else tl.current.timeScale(1.6).reverse();
		const smoother = ScrollSmoother.get();
		if (smoother) smoother.paused(open);
		else document.documentElement.style.overflow = open ? "hidden" : "";
		document.getElementById("smooth-wrapper")?.toggleAttribute("inert", open);
		if (open) {
			const first = root.current?.querySelector("[data-nav-item]");
			window.setTimeout(() => first?.focus(), 60);
		} else if (wasOpen.current) toggle.current?.focus();
		wasOpen.current = open;
		if (!open) return;
		const onKey = (e) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 md:pt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"data-nav-pill": true,
				className: "glass pointer-events-auto flex w-full max-w-[1040px] items-center justify-between gap-6 rounded-full lg:grid lg:grid-cols-[1fr_auto_1fr] bg-stone-900/70 p-2 ring-1 ring-hairline backdrop-blur-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionLink, {
						id: "top",
						onHome,
						className: "shrink-0 justify-self-start pl-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: nav_home()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {
							plain: true,
							className: "text-[22px]"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "hidden items-center gap-1 lg:flex",
						children: [sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
							id: s.id,
							onHome,
							className: "rounded-full px-3.5 py-2 text-sm text-fg-muted transition-colors duration-300 ease-fluid hover:text-fg",
							children: s.label()
						}) }, s.id)), pages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: p.to,
							"aria-current": p.current ? "page" : void 0,
							className: cn("rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ease-fluid hover:text-fg", p.current ? "bg-white/[0.06] text-fg" : "text-fg-muted"),
							children: p.label
						}) }, p.to))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 justify-self-end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleSwitcher, { className: "hidden lg:inline-flex" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallMenu, {
								size: "sm",
								align: "end",
								className: "hidden lg:block"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								ref: toggle,
								type: "button",
								onClick: () => setOpen((v) => !v),
								"aria-expanded": open,
								"aria-controls": "mobile-menu",
								"aria-label": open ? nav_menu_close() : nav_menu_open(),
								className: "relative z-50 flex size-10 items-center justify-center rounded-full bg-white/[0.05] ring-1 ring-hairline lg:hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute h-px w-4 bg-fg transition-transform duration-500 ease-fluid", open ? "rotate-45" : "-translate-y-[3px]") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute h-px w-4 bg-fg transition-transform duration-500 ease-fluid", open ? "-rotate-45" : "translate-y-[3px]") })]
							})
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "mobile-menu",
			"data-nav-overlay": true,
			"aria-hidden": !open,
			inert: !open,
			className: "glass invisible fixed inset-0 z-30 flex flex-col justify-between bg-stone-950/85 px-6 pt-32 pb-10 backdrop-blur-2xl lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col gap-2",
				children: [sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
						"data-nav-item": true,
						id: s.id,
						onHome,
						onClick: () => setOpen(false),
						className: "block py-1 text-5xl font-medium tracking-tight",
						children: s.label()
					})
				}, s.id)), pages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						"data-nav-item": true,
						to: p.to,
						"aria-current": p.current ? "page" : void 0,
						onClick: () => setOpen(false),
						className: "block py-1 text-5xl font-medium tracking-tight",
						children: p.label
					})
				}, p.to))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-nav-item": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleSwitcher, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex w-full flex-col gap-2",
					children: VARIANTS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						"data-nav-item": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: v.store,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center gap-3 rounded-2xl bg-white/[0.04] px-4 py-3 ring-1 ring-hairline",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatch, {
									variant: v,
									className: "size-6"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 text-sm font-medium",
									children: v.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-jade-soft",
									children: cta_add()
								})
							]
						})
					}, v.key))
				})]
			})]
		})]
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "ambient"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "grain"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "fixed top-3 left-3 z-50 -translate-y-24 rounded-full bg-jade px-4 py-2 text-sm font-medium text-jade-ink transition-transform duration-300 ease-fluid focus:translate-y-0",
			children: skip_link()
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SmoothScroll, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				tabIndex: -1,
				className: "relative outline-none",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveals, {})
		] })
	] });
}
//#endregion
export { Closing, EASE_OUT, InstallMenu, MOTION_OK, Mark, PageShell, PillIcon, PillLink, Swatch, cn, cta_add, pillClass };
