import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/gsap+gsap__react+react.mjs";
import { Link, require_react_dom, useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@icons-pack/react-simple-icons+[...].mjs";
import { getLocale } from "./ssr.mjs";
import { ACCENT_KEYS, ANSI, FLAVORS, NEUTRAL_KEYS, color, flavor_forest_desc, flavor_jade_desc, flavor_mint_desc, toCss, toJson } from "./ports-CaKxqcHb.mjs";
import { i$4 as i$1, i$5 as i$2, i$7 as i } from "../_libs/solar-icons__react.mjs";
import { PageShell, PillIcon, cn, pillClass } from "./PageShell-BjYpOffM.mjs";
import { Route$1 } from "./router-D3cy_axw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/palette-CIYAhqAN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_AccentsInputs */
var en_palette_accents = () => {
	return `Accents`;
};
var es_palette_accents = () => {
	return `Acentos`;
};
/**
* | output |
* | --- |
* | "Accents" |
*
* @param {Palette_AccentsInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_accents = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_accents(inputs);
	return en_palette_accents(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_BodyInputs */
var en_palette_body = () => {
	return `Three flavors, ten jade-tinted neutrals and nine accents named after minerals. Every accent clears 4.5:1 contrast on its base.`;
};
var es_palette_body = () => {
	return `Tres sabores, diez neutros con tinte jade y nueve acentos con nombres de minerales. Cada acento supera 4.5:1 de contraste sobre su fondo.`;
};
/**
* | output |
* | --- |
* | "Three flavors, ten jade-tinted neutrals and nine accents named after minerals. Every accent clears 4.5:1 contrast on its base." |
*
* @param {Palette_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_body(inputs);
	return en_palette_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ value: NonNullable<unknown> }} Palette_CopiedInputs */
var en_palette_copied = (i) => {
	return `Copied ${i?.value}`;
};
var es_palette_copied = (i) => {
	return `Copiado ${i?.value}`;
};
/**
* | output |
* | --- |
* | "Copied {value}" |
*
* @param {Palette_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_copied = ((inputs, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_copied(inputs);
	return en_palette_copied(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_Copied_ShortInputs */
var en_palette_copied_short = () => {
	return `Copied`;
};
var es_palette_copied_short = () => {
	return `Copiado`;
};
/**
* | output |
* | --- |
* | "Copied" |
*
* @param {Palette_Copied_ShortInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_copied_short = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_copied_short(inputs);
	return en_palette_copied_short(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_Copy_CssInputs */
var en_palette_copy_css = () => {
	return `Copy CSS`;
};
var es_palette_copy_css = () => {
	return `Copiar CSS`;
};
/**
* | output |
* | --- |
* | "Copy CSS" |
*
* @param {Palette_Copy_CssInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_copy_css = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_copy_css(inputs);
	return en_palette_copy_css(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_Copy_FailedInputs */
var en_palette_copy_failed = () => {
	return `Couldn't copy. Select the value and copy it manually.`;
};
var es_palette_copy_failed = () => {
	return `No se pudo copiar. Selecciona el valor y cópialo a mano.`;
};
/**
* | output |
* | --- |
* | "Couldn't copy. Select the value and copy it manually." |
*
* @param {Palette_Copy_FailedInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_copy_failed = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_copy_failed(inputs);
	return en_palette_copy_failed(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_Copy_HintInputs */
var en_palette_copy_hint = () => {
	return `Select a color to copy its hex.`;
};
var es_palette_copy_hint = () => {
	return `Elige un color para copiar su hex.`;
};
/**
* | output |
* | --- |
* | "Select a color to copy its hex." |
*
* @param {Palette_Copy_HintInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_copy_hint = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_copy_hint(inputs);
	return en_palette_copy_hint(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_Copy_JsonInputs */
var en_palette_copy_json = () => {
	return `Copy JSON`;
};
var es_palette_copy_json = () => {
	return `Copiar JSON`;
};
/**
* | output |
* | --- |
* | "Copy JSON" |
*
* @param {Palette_Copy_JsonInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_copy_json = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_copy_json(inputs);
	return en_palette_copy_json(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_ExportInputs */
var en_palette_export = () => {
	return `Use it`;
};
var es_palette_export = () => {
	return `Úsala`;
};
/**
* | output |
* | --- |
* | "Use it" |
*
* @param {Palette_ExportInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_export = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_export(inputs);
	return en_palette_export(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_Export_BodyInputs */
var en_palette_export_body = () => {
	return `Copy the flavor as CSS variables or JSON and start a port.`;
};
var es_palette_export_body = () => {
	return `Copia el sabor como variables CSS o JSON y empieza un port.`;
};
/**
* | output |
* | --- |
* | "Copy the flavor as CSS variables or JSON and start a port." |
*
* @param {Palette_Export_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_export_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_export_body(inputs);
	return en_palette_export_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_FlavorsInputs */
var en_palette_flavors = () => {
	return `Flavors`;
};
var es_palette_flavors = () => {
	return `Sabores`;
};
/**
* | output |
* | --- |
* | "Flavors" |
*
* @param {Palette_FlavorsInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_flavors = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_flavors(inputs);
	return en_palette_flavors(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_NeutralsInputs */
var en_palette_neutrals = () => {
	return `Neutrals`;
};
var es_palette_neutrals = () => {
	return `Neutros`;
};
/**
* | output |
* | --- |
* | "Neutrals" |
*
* @param {Palette_NeutralsInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_neutrals = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_neutrals(inputs);
	return en_palette_neutrals(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_Ports_CtaInputs */
var en_palette_ports_cta = () => {
	return `See the ports`;
};
var es_palette_ports_cta = () => {
	return `Ver las apps`;
};
/**
* | output |
* | --- |
* | "See the ports" |
*
* @param {Palette_Ports_CtaInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_ports_cta = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_ports_cta(inputs);
	return en_palette_ports_cta(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_Preview_CodeInputs */
var en_palette_preview_code = () => {
	return `In an editor`;
};
var es_palette_preview_code = () => {
	return `En un editor`;
};
/**
* | output |
* | --- |
* | "In an editor" |
*
* @param {Palette_Preview_CodeInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_preview_code = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_preview_code(inputs);
	return en_palette_preview_code(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_Preview_TerminalInputs */
var en_palette_preview_terminal = () => {
	return `In a terminal`;
};
var es_palette_preview_terminal = () => {
	return `En una terminal`;
};
/**
* | output |
* | --- |
* | "In a terminal" |
*
* @param {Palette_Preview_TerminalInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_preview_terminal = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_preview_terminal(inputs);
	return en_palette_preview_terminal(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Palette_TitleInputs */
var en_palette_title = () => {
	return `The Nephrite palette`;
};
var es_palette_title = () => {
	return `La paleta Nephrite`;
};
/**
* | output |
* | --- |
* | "The Nephrite palette" |
*
* @param {Palette_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var palette_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_palette_title(inputs);
	return en_palette_title(inputs);
});
var FLAVOR_DESC = {
	forest: () => flavor_forest_desc(),
	jade: () => flavor_jade_desc(),
	mint: () => flavor_mint_desc()
};
function useCopy() {
	const [state, setState] = (0, import_react.useState)(null);
	const timer = (0, import_react.useRef)(void 0);
	(0, import_react.useEffect)(() => () => window.clearTimeout(timer.current), []);
	const copy = async (text, { id, label = text, swatch }) => {
		let ok = true;
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			ok = false;
		}
		setState((prev) => ({
			id,
			label,
			swatch,
			ok,
			nonce: (prev?.nonce ?? 0) + 1
		}));
		window.clearTimeout(timer.current);
		timer.current = window.setTimeout(() => setState(null), ok ? 1800 : 3200);
	};
	return {
		copied: state,
		copy
	};
}
function isCopied(state, id) {
	return Boolean(state?.ok && state.id === id);
}
function inkOn(hex) {
	const [r, g, b] = [
		1,
		3,
		5
	].map((i) => Number.parseInt(hex.slice(i, i + 2), 16));
	return .299 * r + .587 * g + .114 * b > 150 ? "#0c130f" : "#ffffff";
}
function CopyToast({ state }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const last = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => setMounted(true), []);
	if (state) last.current = state;
	const shown = last.current;
	if (!mounted || !shown) return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: cn("pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4", "transition-[opacity,translate] duration-500 ease-fluid", state ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 rounded-full bg-stone-850/95 py-2.5 pr-5 pl-3 text-sm text-fg shadow-[0_20px_50px_-20px_rgb(2_10_6/0.9)] ring-1 ring-hairline-strong backdrop-blur-xl",
			children: [
				shown.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {
					size: 20,
					strokeWidth: 1.75,
					className: "text-jade"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$1, {
					size: 20,
					strokeWidth: 1.75,
					className: "text-[#ffa09c]"
				}),
				shown.ok && shown.swatch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "size-4 rounded-full ring-1 ring-white/20",
					style: { background: shown.swatch }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shown.ok ? palette_copied({ value: shown.label }) : palette_copy_failed() })
			]
		})
	}), document.body);
}
function PalettePage() {
	const { flavor: flavorKey = "forest" } = Route$1.useSearch();
	const navigate = useNavigate({ from: Route$1.fullPath });
	const flavor = FLAVORS.find((f) => f.key === flavorKey) ?? FLAVORS[0];
	const index = FLAVORS.indexOf(flavor);
	const tabs = (0, import_react.useRef)([]);
	const { copied, copy } = useCopy();
	const pick = (key) => navigate({
		search: { flavor: key === "forest" ? void 0 : key },
		replace: true,
		resetScroll: false
	});
	const onKeyDown = (e) => {
		const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
		if (!step) return;
		e.preventDefault();
		const next = (index + step + FLAVORS.length) % FLAVORS.length;
		pick(FLAVORS[next].key);
		tabs.current[next]?.focus();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto w-full max-w-[1400px] px-4 pt-36 pb-10 md:px-8 md:pt-44",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-reveal": true,
					className: "max-w-[44rem] text-4xl leading-[1.05] font-semibold tracking-[-0.035em] md:text-7xl",
					children: palette_title()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-reveal": true,
					className: "mt-6 max-w-[38rem] text-lg leading-relaxed text-fg-muted",
					children: palette_body()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-reveal": true,
					role: "tablist",
					"aria-label": palette_flavors(),
					tabIndex: -1,
					onKeyDown,
					className: "mt-12 flex flex-wrap gap-2",
					children: FLAVORS.map((f, i) => {
						const active = f.key === flavor.key;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: (el) => {
								tabs.current[i] = el;
							},
							type: "button",
							role: "tab",
							id: `flavor-tab-${f.key}`,
							"aria-selected": active,
							"aria-controls": "flavor-panel",
							tabIndex: active ? 0 : -1,
							onClick: () => pick(f.key),
							className: cn("flex items-center gap-3 rounded-full py-2 pr-5 pl-2 text-left transition-[background-color,color,box-shadow] duration-500 ease-fluid", active ? "bg-white/[0.08] text-fg ring-1 ring-hairline-strong" : "text-fg-muted ring-1 ring-transparent hover:bg-white/[0.04] hover:text-fg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "size-8 shrink-0 rounded-full ring-1 ring-white/15",
								style: { background: `linear-gradient(135deg, ${f.neutrals.base} 50%, ${f.accents.jade} 50%)` }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: f.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-fg-muted",
									children: FLAVOR_DESC[f.key]()
								})]
							})]
						}, f.key);
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto w-full max-w-[1400px] px-4 pb-20 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "flavor-panel",
					role: "tabpanel",
					"aria-labelledby": `flavor-tab-${flavor.key}`,
					className: "bezel",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bezel-core grid gap-10 p-6 md:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12",
						style: {
							background: flavor.neutrals.base,
							color: flavor.neutrals.text,
							colorScheme: flavor.dark ? "dark" : "light"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatches, {
									title: palette_accents(),
									flavor,
									keys: ACCENT_KEYS,
									onCopy: copy,
									copied,
									large: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatches, {
									title: palette_neutrals(),
									flavor,
									keys: NEUTRAL_KEYS,
									onCopy: copy,
									copied
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									style: { color: flavor.neutrals.subtext },
									children: palette_copy_hint()
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodePreview, { flavor }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalPreview, { flavor })]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"aria-live": "polite",
					className: "sr-only",
					children: copied ? copied.ok ? palette_copied({ value: copied.label }) : palette_copy_failed() : ""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyToast, { state: copied })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto w-full max-w-[1400px] px-4 pb-28 md:px-8 md:pb-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					className: "flex flex-col gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-semibold tracking-tight md:text-5xl",
							children: palette_export()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-[28rem] text-fg-muted",
							children: palette_export_body()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => copy(toCss(flavor), {
									id: "css",
									label: `CSS · ${flavor.name}`
								}),
								className: pillClass("primary", "md"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isCopied(copied, "css") ? palette_copied_short() : palette_copy_css() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillIcon, {
									variant: "primary",
									size: "md",
									children: isCopied(copied, "css") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {
										size: 17,
										strokeWidth: 1.75
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$2, {
										size: 17,
										strokeWidth: 1.75
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => copy(toJson(flavor), {
									id: "json",
									label: `JSON · ${flavor.name}`
								}),
								className: pillClass("ghost", "md"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isCopied(copied, "json") ? palette_copied_short() : palette_copy_json() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillIcon, {
									variant: "ghost",
									size: "md",
									children: isCopied(copied, "json") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {
										size: 17,
										strokeWidth: 1.75,
										className: "text-jade"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$2, {
										size: 17,
										strokeWidth: 1.75
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ports",
							className: "w-max text-sm text-fg-muted underline decoration-hairline-strong underline-offset-4 transition-colors duration-300 ease-fluid hover:text-fg hover:decoration-jade",
							children: palette_ports_cta()
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-reveal": true,
					className: "bezel",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "bezel-core max-h-[26rem] overflow-auto p-6 font-mono text-[13px] leading-relaxed text-fg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: toCss(flavor) })
					})
				})]
			})
		})
	] });
}
function Swatches({ title, flavor, keys, onCopy, copied, large }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mb-4 text-sm font-medium",
		style: { color: flavor.neutrals.subtext },
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: cn("grid gap-3", large ? "grid-cols-3" : "grid-cols-5 sm:grid-cols-10 sm:gap-2"),
		children: keys.map((k) => {
			const hex = color(flavor, k);
			const id = `${flavor.key}-${k}`;
			const done = isCopied(copied, id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onCopy(hex, {
					id,
					swatch: hex
				}),
				"aria-label": `${k} ${hex}`,
				className: "group flex w-full flex-col gap-2 rounded-2xl text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: cn("flex w-full items-center justify-center rounded-2xl transition-transform duration-500 ease-fluid group-hover:-translate-y-0.5 group-active:scale-[0.97]", large ? "h-20" : "h-12"),
					style: {
						background: hex,
						boxShadow: `inset 0 0 0 1px ${flavor.dark ? "rgb(255 255 255 / 0.08)" : "rgb(0 0 0 / 0.08)"}`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: cn("flex items-center gap-1.5 text-xs font-medium", done ? "copy-pop" : "opacity-0"),
						style: { color: inkOn(hex) },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {
							size: large ? 22 : 16,
							strokeWidth: 2
						}), large && palette_copied_short()]
					}, done ? copied?.nonce : "idle")
				}), large ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					"aria-hidden": true,
					className: "flex flex-col px-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium capitalize",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs",
						style: { color: flavor.neutrals.subtext },
						children: hex
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "truncate px-0.5 font-mono text-[10px]",
					style: { color: flavor.neutrals.subtext },
					children: k
				})]
			}) }, k);
		})
	})] });
}
var CODE = [
	[["// Paint the editor with a flavor", "overlay1"]],
	[
		["import ", "amethyst"],
		["{ flavors } ", "text"],
		["from ", "amethyst"],
		["\"./palette\"", "jade"],
		[";", "subtext"]
	],
	[],
	[
		["export function ", "amethyst"],
		["accent", "sapphire"],
		["(", "subtext"],
		["name", "text"],
		[": ", "subtext"],
		["string", "citrine"],
		[", ", "subtext"],
		["depth ", "text"],
		["= ", "subtext"],
		["3", "carnelian"],
		[") {", "subtext"]
	],
	[
		["  const ", "amethyst"],
		["shade ", "text"],
		["= ", "subtext"],
		["flavors", "text"],
		[".", "subtext"],
		["forest", "lagoon"],
		["[", "subtext"],
		["name", "text"],
		["];", "subtext"]
	],
	[
		["  return ", "amethyst"],
		["`${", "rhodonite"],
		["shade", "text"],
		["}", "rhodonite"],
		["/", "jade"],
		["${", "rhodonite"],
		["depth", "text"],
		["}`", "rhodonite"],
		[";", "subtext"]
	],
	[["}", "subtext"]]
];
function Window({ flavor, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "m-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mb-3 text-sm font-medium",
			style: { color: flavor.neutrals.subtext },
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-2xl",
			style: {
				background: flavor.neutrals.mantle,
				boxShadow: `inset 0 0 0 1px ${flavor.neutrals.surface0}`
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "flex gap-1.5 px-4 py-3",
				style: { background: flavor.neutrals.crust },
				children: [
					"garnet",
					"citrine",
					"jade"
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "size-2.5 rounded-full",
					style: { background: flavor.accents[k] }
				}, k))
			}), children]
		})]
	});
}
function CodePreview({ flavor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Window, {
		flavor,
		title: palette_preview_code(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "m-0 overflow-x-auto p-5 font-mono text-[13px] leading-relaxed",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: CODE.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "block min-h-[1.6em]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "mr-4 inline-block w-4 text-right select-none",
					style: { color: flavor.neutrals.overlay0 },
					children: i + 1
				}), line.map(([text, token], j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: color(flavor, token) },
					children: text
				}, j))]
			}, i)) })
		})
	});
}
function TerminalPreview({ flavor }) {
	const c = (k) => ({ color: color(flavor, k) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Window, {
		flavor,
		title: palette_preview_terminal(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-1 p-5 font-mono text-[13px] leading-relaxed",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "m-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: c("jade"),
							children: "~/nephrite"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: c("sapphire"),
							children: "main"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: c("subtext"),
							children: "$"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: c("text"),
							children: "git status --short"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "m-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: c("jade"),
							children: " M"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: c("text"),
							children: "palette.json"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "m-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: c("garnet"),
							children: " D"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: c("text"),
							children: "legacy.css"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "m-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: c("citrine"),
							children: "??"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: c("text"),
							children: "ports/terminal.toml"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "mt-4 grid grid-cols-8 gap-1.5",
					children: ANSI.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						title: `${a.name}: ${a.token}`,
						className: "h-6 rounded-md",
						style: { background: color(flavor, a.token) }
					}, a.name))
				})
			]
		})
	});
}
//#endregion
export { PalettePage as component };
