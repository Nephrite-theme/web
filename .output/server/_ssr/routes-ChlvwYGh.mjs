import { __toESM } from "../_runtime.mjs";
import { gsapWithCSS, require_react, useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { SiGithub, require_jsx_runtime } from "../_libs/@icons-pack/react-simple-icons+[...].mjs";
import { getLocale } from "./ssr.mjs";
import { LINKS, PORTS, STATUS_LABEL, VARIANTS } from "./ports-CaKxqcHb.mjs";
import { i as i$1, i$3 as i } from "../_libs/solar-icons__react.mjs";
import { Closing, EASE_OUT, InstallMenu, MOTION_OK, Mark, PageShell, PillIcon, PillLink, Swatch, cn, cta_add, pillClass } from "./PageShell-BjYpOffM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ChlvwYGh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Cta_GithubInputs */
var en_cta_github = () => {
	return `View on GitHub`;
};
var es_cta_github = () => {
	return `Ver en GitHub`;
};
/**
* | output |
* | --- |
* | "View on GitHub" |
*
* @param {Cta_GithubInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var cta_github = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_cta_github(inputs);
	return en_cta_github(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Detail_Eyes_BodyInputs */
var en_detail_eyes_body = () => {
	return `Muted greens and tuned contrast keep long sessions comfortable, from the first tab to the fortieth.`;
};
var es_detail_eyes_body = () => {
	return `Verdes suaves y contraste afinado para sesiones largas, desde la primera pestaña hasta la cuadragésima.`;
};
/**
* | output |
* | --- |
* | "Muted greens and tuned contrast keep long sessions comfortable, from the first tab to the fortieth." |
*
* @param {Detail_Eyes_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var detail_eyes_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_detail_eyes_body(inputs);
	return en_detail_eyes_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Detail_Eyes_TitleInputs */
var en_detail_eyes_title = () => {
	return `Easy on the eyes`;
};
var es_detail_eyes_title = () => {
	return `Descanso para la vista`;
};
/**
* | output |
* | --- |
* | "Easy on the eyes" |
*
* @param {Detail_Eyes_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var detail_eyes_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_detail_eyes_title(inputs);
	return en_detail_eyes_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Detail_Open_BodyInputs */
var en_detail_open_body = () => {
	return `Every color lives in a public repository. Fork it, tweak it, send a pull request.`;
};
var es_detail_open_body = () => {
	return `Cada color vive en un repositorio público. Haz un fork, ajústalo, envía un pull request.`;
};
/**
* | output |
* | --- |
* | "Every color lives in a public repository. Fork it, tweak it, send a pull request." |
*
* @param {Detail_Open_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var detail_open_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_detail_open_body(inputs);
	return en_detail_open_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Detail_Open_TitleInputs */
var en_detail_open_title = () => {
	return `Built in the open`;
};
var es_detail_open_title = () => {
	return `Hecho en abierto`;
};
/**
* | output |
* | --- |
* | "Built in the open" |
*
* @param {Detail_Open_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var detail_open_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_detail_open_title(inputs);
	return en_detail_open_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Detail_Surfaces_BodyInputs */
var en_detail_surfaces_body = () => {
	return `Nephrite colors the parts of Chrome you look at all day.`;
};
var es_detail_surfaces_body = () => {
	return `Nephrite colorea las partes de Chrome que miras todo el día.`;
};
/**
* | output |
* | --- |
* | "Nephrite colors the parts of Chrome you look at all day." |
*
* @param {Detail_Surfaces_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var detail_surfaces_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_detail_surfaces_body(inputs);
	return en_detail_surfaces_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Detail_Surfaces_TitleInputs */
var en_detail_surfaces_title = () => {
	return `Every surface, themed`;
};
var es_detail_surfaces_title = () => {
	return `Cada superficie, con tema`;
};
/**
* | output |
* | --- |
* | "Every surface, themed" |
*
* @param {Detail_Surfaces_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var detail_surfaces_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_detail_surfaces_title(inputs);
	return en_detail_surfaces_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Details_TitleInputs */
var en_details_title = () => {
	return `Designed for the hours you spend in Chrome.`;
};
var es_details_title = () => {
	return `Pensado para las horas que pasas en Chrome.`;
};
/**
* | output |
* | --- |
* | "Designed for the hours you spend in Chrome." |
*
* @param {Details_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var details_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_details_title(inputs);
	return en_details_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Hero_BodyInputs */
var en_hero_body = () => {
	return `A free, low-glare theme for Chrome. Muted jade on every surface, so your eyes can rest while you work.`;
};
var es_hero_body = () => {
	return `Un tema gratis y sin deslumbramientos para Chrome. Jade suave en cada superficie, para que tu vista descanse mientras trabajas.`;
};
/**
* | output |
* | --- |
* | "A free, low-glare theme for Chrome. Muted jade on every surface, so your eyes can rest while you work." |
*
* @param {Hero_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var hero_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_hero_body(inputs);
	return en_hero_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Hero_Title_AInputs */
var en_hero_title_a = () => {
	return `The emerald standard`;
};
var es_hero_title_a = () => {
	return `El estándar esmeralda`;
};
/**
* | output |
* | --- |
* | "The emerald standard" |
*
* @param {Hero_Title_AInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var hero_title_a = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_hero_title_a(inputs);
	return en_hero_title_a(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Hero_Title_BInputs */
var en_hero_title_b = () => {
	return `for your browser.`;
};
var es_hero_title_b = () => {
	return `para tu navegador.`;
};
/**
* | output |
* | --- |
* | "for your browser." |
*
* @param {Hero_Title_BInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var hero_title_b = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_hero_title_b(inputs);
	return en_hero_title_b(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Roadmap_AllInputs */
var en_roadmap_all = () => {
	return `See all ports`;
};
var es_roadmap_all = () => {
	return `Ver todas las apps`;
};
/**
* | output |
* | --- |
* | "See all ports" |
*
* @param {Roadmap_AllInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var roadmap_all = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_roadmap_all(inputs);
	return en_roadmap_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Roadmap_EyebrowInputs */
var en_roadmap_eyebrow = () => {
	return `Roadmap`;
};
var es_roadmap_eyebrow = () => {
	return `Roadmap`;
};
/**
* | output |
* | --- |
* | "Roadmap" |
*
* @param {Roadmap_EyebrowInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var roadmap_eyebrow = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_roadmap_eyebrow(inputs);
	return en_roadmap_eyebrow(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Roadmap_TitleInputs */
var en_roadmap_title = () => {
	return `One palette, everywhere you work.`;
};
var es_roadmap_title = () => {
	return `Una paleta, donde sea que trabajes.`;
};
/**
* | output |
* | --- |
* | "One palette, everywhere you work." |
*
* @param {Roadmap_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var roadmap_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_roadmap_title(inputs);
	return en_roadmap_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ name: NonNullable<unknown> }} Shot_AltInputs */
var en_shot_alt = (i) => {
	return `Chrome with the ${i?.name} theme applied`;
};
var es_shot_alt = (i) => {
	return `Chrome con el tema ${i?.name} aplicado`;
};
/**
* | output |
* | --- |
* | "Chrome with the {name} theme applied" |
*
* @param {Shot_AltInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var shot_alt = ((inputs, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_shot_alt(inputs);
	return en_shot_alt(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ name: NonNullable<unknown> }} Shot_PendingInputs */
var en_shot_pending = (i) => {
	return `Screenshot pending: ${i?.name}`;
};
var es_shot_pending = (i) => {
	return `Captura pendiente: ${i?.name}`;
};
/**
* | output |
* | --- |
* | "Screenshot pending: {name}" |
*
* @param {Shot_PendingInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var shot_pending = ((inputs, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_shot_pending(inputs);
	return en_shot_pending(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Surface_BookmarksInputs */
var en_surface_bookmarks = () => {
	return `Bookmarks bar`;
};
var es_surface_bookmarks = () => {
	return `Marcadores`;
};
/**
* | output |
* | --- |
* | "Bookmarks bar" |
*
* @param {Surface_BookmarksInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var surface_bookmarks = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_surface_bookmarks(inputs);
	return en_surface_bookmarks(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Surface_NtpInputs */
var en_surface_ntp = () => {
	return `New tab page`;
};
var es_surface_ntp = () => {
	return `Nueva pestaña`;
};
/**
* | output |
* | --- |
* | "New tab page" |
*
* @param {Surface_NtpInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var surface_ntp = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_surface_ntp(inputs);
	return en_surface_ntp(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Surface_OmniboxInputs */
var en_surface_omnibox = () => {
	return `Address bar`;
};
var es_surface_omnibox = () => {
	return `Barra de direcciones`;
};
/**
* | output |
* | --- |
* | "Address bar" |
*
* @param {Surface_OmniboxInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var surface_omnibox = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_surface_omnibox(inputs);
	return en_surface_omnibox(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Surface_TabsInputs */
var en_surface_tabs = () => {
	return `Tab strip`;
};
var es_surface_tabs = () => {
	return `Pestañas`;
};
/**
* | output |
* | --- |
* | "Tab strip" |
*
* @param {Surface_TabsInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var surface_tabs = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_surface_tabs(inputs);
	return en_surface_tabs(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Surface_ToolbarInputs */
var en_surface_toolbar = () => {
	return `Toolbar`;
};
var es_surface_toolbar = () => {
	return `Barra de herramientas`;
};
/**
* | output |
* | --- |
* | "Toolbar" |
*
* @param {Surface_ToolbarInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var surface_toolbar = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_surface_toolbar(inputs);
	return en_surface_toolbar(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Swatch_FrameInputs */
var en_swatch_frame = () => {
	return `Frame`;
};
var es_swatch_frame = () => {
	return `Marco`;
};
/**
* | output |
* | --- |
* | "Frame" |
*
* @param {Swatch_FrameInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var swatch_frame = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_swatch_frame(inputs);
	return en_swatch_frame(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Swatch_TextInputs */
var en_swatch_text = () => {
	return `Tab text`;
};
var es_swatch_text = () => {
	return `Texto de pestaña`;
};
/**
* | output |
* | --- |
* | "Tab text" |
*
* @param {Swatch_TextInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var swatch_text = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_swatch_text(inputs);
	return en_swatch_text(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Swatch_ToolbarInputs */
var en_swatch_toolbar = () => {
	return `Toolbar`;
};
var es_swatch_toolbar = () => {
	return `Barra`;
};
/**
* | output |
* | --- |
* | "Toolbar" |
*
* @param {Swatch_ToolbarInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var swatch_toolbar = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_swatch_toolbar(inputs);
	return en_swatch_toolbar(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Variants_BodyInputs */
var en_variants_body = () => {
	return `Forest for late nights, Jade for long days, Mint for daylight. Installing another variant replaces the current one, so trying them costs a click.`;
};
var es_variants_body = () => {
	return `Forest para la noche, Jade para jornadas largas, Mint para el día. Instalar otra variante reemplaza la actual, así que probarlas cuesta un clic.`;
};
/**
* | output |
* | --- |
* | "Forest for late nights, Jade for long days, Mint for daylight. Installing another variant replaces the current one, so trying them costs a click." |
*
* @param {Variants_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var variants_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_variants_body(inputs);
	return en_variants_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Variants_TablistInputs */
var en_variants_tablist = () => {
	return `Theme variants`;
};
var es_variants_tablist = () => {
	return `Variantes del tema`;
};
/**
* | output |
* | --- |
* | "Theme variants" |
*
* @param {Variants_TablistInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var variants_tablist = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_variants_tablist(inputs);
	return en_variants_tablist(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Variants_TitleInputs */
var en_variants_title = () => {
	return `Pick the green that fits your light.`;
};
var es_variants_title = () => {
	return `Elige el verde que va con tu luz.`;
};
/**
* | output |
* | --- |
* | "Pick the green that fits your light." |
*
* @param {Variants_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var variants_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_variants_title(inputs);
	return en_variants_title(inputs);
});
function Details() {
	const root = (0, import_react.useRef)(null);
	useGSAP(() => {
		gsapWithCSS.matchMedia().add(MOTION_OK, () => {
			gsapWithCSS.fromTo("[data-stone]", {
				rotate: -8,
				yPercent: 6
			}, {
				rotate: 8,
				yPercent: -6,
				ease: "none",
				scrollTrigger: {
					trigger: root.current,
					start: "top bottom",
					end: "bottom top",
					scrub: .8
				}
			});
		});
	}, { scope: root });
	const surfaces = [
		surface_tabs(),
		surface_toolbar(),
		surface_omnibox(),
		surface_ntp(),
		surface_bookmarks()
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: root,
		id: "details",
		className: "relative mx-auto w-full max-w-[1400px] scroll-mt-24 px-4 py-24 md:px-8 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			"data-reveal": true,
			className: "max-w-[40rem] text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-6xl",
			children: details_title()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12 lg:grid-rows-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					"data-reveal": true,
					className: "bezel lg:col-span-7 lg:row-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bezel-core relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden p-8 md:p-10",
						style: { background: "radial-gradient(80% 70% at 70% 30%, rgb(61 184 122 / 0.28), transparent 70%), linear-gradient(160deg, #13261b, #0c150f)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-stone": true,
							className: "pointer-events-none absolute -top-6 -right-10 w-[62%] max-w-[26rem] drop-shadow-[0_40px_60px_rgb(2_10_6/0.7)] md:top-4 md:right-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "w-full" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative max-w-[26rem]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {
									size: 26,
									strokeWidth: 1.5,
									className: "mb-5 text-jade-soft"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-semibold tracking-tight md:text-3xl",
									children: detail_eyes_title()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 leading-relaxed text-fg-muted",
									children: detail_eyes_body()
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					"data-reveal": true,
					className: "bezel lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bezel-core flex h-full flex-col gap-6 p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i$1, {
								size: 26,
								strokeWidth: 1.5,
								className: "text-jade-soft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-semibold tracking-tight",
								children: detail_surfaces_title()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 leading-relaxed text-fg-muted",
								children: detail_surfaces_body()
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-auto flex flex-wrap gap-2",
								children: surfaces.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-full bg-jade/[0.08] px-3.5 py-1.5 text-sm text-jade-soft ring-1 ring-jade/15",
									children: s
								}, s))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					"data-reveal": true,
					className: "bezel lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bezel-core relative flex h-full flex-col gap-6 overflow-hidden bg-stone-800 p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiGithub, {
								"aria-hidden": true,
								size: 220,
								className: "pointer-events-none absolute -right-12 -bottom-16 text-white/[0.035]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-semibold tracking-tight",
									children: detail_open_title()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-[24rem] leading-relaxed text-fg-muted",
									children: detail_open_body()
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
									href: LINKS.github,
									variant: "ghost",
									size: "sm",
									leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiGithub, {
										size: 14,
										"aria-hidden": true
									}),
									children: cta_github()
								})
							})
						]
					})
				})
			]
		})]
	});
}
function Shot({ variant, className, priority }) {
	if (variant.shot) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: variant.shot,
		alt: shot_alt({ name: variant.name }),
		width: 1582,
		height: 991,
		loading: priority ? "eager" : "lazy",
		fetchPriority: priority ? "high" : "auto",
		className: cn("aspect-[1582/991] w-full object-cover", className)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "img",
		"aria-label": shot_pending({ name: variant.name }),
		className: cn("relative flex aspect-[1582/991] w-full items-center justify-center", className),
		style: { background: `linear-gradient(180deg, ${variant.frame} 0 12%, ${variant.toolbar} 12% 100%)` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-20 opacity-40 md:size-28" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute bottom-3 left-1/2 max-w-[90%] -translate-x-1/2 truncate whitespace-nowrap rounded-full px-3 py-1 font-mono text-[10px] md:bottom-4 md:text-[11px]",
			style: {
				color: variant.dark ? "rgb(255 255 255 / 0.55)" : "rgb(17 31 23 / 0.6)",
				background: variant.dark ? "rgb(255 255 255 / 0.06)" : "rgb(17 31 23 / 0.06)"
			},
			children: shot_pending({ name: variant.name })
		})]
	});
}
function Hero() {
	const root = (0, import_react.useRef)(null);
	useGSAP(() => {
		gsapWithCSS.matchMedia().add({
			motion: MOTION_OK,
			desktop: "(min-width: 1024px)"
		}, (ctx) => {
			const { motion, desktop } = ctx.conditions;
			if (!motion) return;
			gsapWithCSS.to("[data-hero-parallax]", {
				yPercent: desktop ? -12 : -4,
				rotate: desktop ? 2 : 0,
				ease: "none",
				scrollTrigger: {
					trigger: root.current,
					start: "top top",
					end: "bottom top",
					scrub: .6
				}
			});
		});
	}, { scope: root });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: root,
		id: "top",
		className: "relative mx-auto grid min-h-[100dvh] w-full max-w-[1400px] items-center gap-14 px-4 pt-28 pb-20 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 max-w-[40rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-[2.15rem] leading-[1.04] font-semibold tracking-[-0.035em] sm:text-6xl lg:text-[4.75rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block overflow-hidden pb-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-hero-line": true,
							className: "block",
							children: hero_title_a()
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block overflow-hidden pb-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-hero-line": true,
							className: "block text-fg-muted",
							style: { "--i": 1 },
							children: hero_title_b()
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-hero-fade": true,
					className: "mt-7 max-w-[34rem] text-lg leading-relaxed text-fg-muted md:text-xl",
					children: hero_body()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-hero-fade": true,
					className: "mt-10 flex flex-wrap items-center gap-3",
					style: { "--i": 1 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallMenu, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
						href: LINKS.github,
						variant: "ghost",
						leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiGithub, {
							size: 16,
							"aria-hidden": true
						}),
						children: cta_github()
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-hero-parallax": true,
			className: "relative will-change-transform",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-hero-shot": true,
				className: "bezel",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bezel-core",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shot, {
						variant: VARIANTS[0],
						priority: true
					})
				})
			})
		})]
	});
}
function Roadmap() {
	const wrap = (0, import_react.useRef)(null);
	const track = (0, import_react.useRef)(null);
	useGSAP(() => {
		gsapWithCSS.matchMedia().add(`${MOTION_OK} and (min-width: 1024px)`, () => {
			const el = track.current;
			if (!el) return;
			gsapWithCSS.set(el.parentElement, { overflow: "visible" });
			const distance = () => el.scrollWidth - el.clientWidth;
			gsapWithCSS.to(el, {
				x: () => -distance(),
				ease: "none",
				scrollTrigger: {
					trigger: wrap.current,
					start: "top top",
					end: () => `+=${distance()}`,
					pin: true,
					scrub: 1,
					invalidateOnRefresh: true
				}
			});
		});
	}, { scope: wrap });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: wrap,
		id: "roadmap",
		className: "relative flex min-h-[100dvh] scroll-mt-24 flex-col justify-center overflow-hidden py-24 md:py-36 lg:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-[1400px] px-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-reveal": true,
					className: "mb-6 inline-flex rounded-full bg-jade/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-jade-soft ring-1 ring-jade/20",
					children: roadmap_eyebrow()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					"data-reveal": true,
					className: "max-w-[40rem] text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-6xl",
					children: roadmap_title()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-reveal": true,
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/ports",
						className: pillClass("ghost", "sm"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: roadmap_all() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillIcon, {
							variant: "ghost",
							size: "sm",
							className: "group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105"
						})]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 lg:overflow-x-auto lg:[scrollbar-width:none]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: track,
				className: "mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-8 lg:flex lg:max-w-none lg:gap-5 lg:pr-[max(2rem,calc((100vw-1400px)/2+2rem))] lg:pl-[max(2rem,calc((100vw-1400px)/2+2rem))]",
				children: PORTS.map((item) => {
					const Icon = item.icon;
					const live = item.status === "available";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						"data-reveal": true,
						className: "bezel lg:w-[25rem] lg:shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bezel-core flex h-full min-h-[18rem] flex-col p-8 lg:min-h-[22rem]",
							style: live ? { background: "radial-gradient(90% 80% at 0% 0%, rgb(61 184 122 / 0.22), transparent 70%), var(--stone-850)" } : void 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									"aria-hidden": true,
									size: 28,
									className: live ? "text-jade-soft" : "text-fg-muted"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("rounded-full px-3 py-1 text-xs font-medium", live ? "bg-jade text-jade-ink" : "bg-white/[0.05] text-fg-muted ring-1 ring-hairline"),
									children: STATUS_LABEL[item.status]()
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto pt-16",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-3xl font-semibold tracking-tight",
									children: item.name()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 leading-relaxed text-fg-muted",
									children: item.description()
								})]
							})]
						})
					}, item.key);
				})
			})
		})]
	});
}
function Variants() {
	const [active, setActive] = (0, import_react.useState)(0);
	const root = (0, import_react.useRef)(null);
	const tabs = (0, import_react.useRef)([]);
	const variant = VARIANTS[active];
	useGSAP(() => {
		const motion = window.matchMedia(MOTION_OK).matches;
		const d = motion ? 1 : 0;
		gsapWithCSS.to("[data-variant-shot]", {
			opacity: (i) => i === active ? 1 : 0,
			scale: (i) => i === active ? 1 : 1.03,
			duration: .9 * d,
			ease: EASE_OUT
		});
		gsapWithCSS.fromTo("[data-variant-info] > *", {
			opacity: 0,
			y: motion ? 16 : 0
		}, {
			opacity: 1,
			y: 0,
			duration: .8 * d,
			ease: EASE_OUT,
			stagger: .05 * d
		});
	}, {
		scope: root,
		dependencies: [active]
	});
	const onKeyDown = (e) => {
		const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
		if (!step) return;
		e.preventDefault();
		const next = (active + step + VARIANTS.length) % VARIANTS.length;
		setActive(next);
		tabs.current[next]?.focus();
	};
	const swatches = [
		{
			label: swatch_frame(),
			value: variant.frame
		},
		{
			label: swatch_toolbar(),
			value: variant.toolbar
		},
		{
			label: swatch_text(),
			value: variant.tabText
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: root,
		id: "variants",
		className: "relative mx-auto w-full max-w-[1400px] scroll-mt-24 px-4 py-24 md:px-8 md:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				className: "max-w-[44rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-6xl",
					children: variants_title()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-[34rem] text-lg leading-relaxed text-fg-muted",
					children: variants_body()
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-reveal": true,
				role: "tablist",
				"aria-label": variants_tablist(),
				tabIndex: -1,
				onKeyDown,
				className: "-mx-4 mt-12 flex snap-x gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:px-0",
				children: VARIANTS.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					ref: (el) => {
						tabs.current[i] = el;
					},
					type: "button",
					role: "tab",
					id: `variant-tab-${v.key}`,
					"aria-selected": i === active,
					"aria-controls": "variant-panel",
					tabIndex: i === active ? 0 : -1,
					onClick: () => setActive(i),
					className: cn("flex shrink-0 snap-start items-center gap-3 rounded-full py-2 pr-5 pl-2 text-sm font-medium", "transition-[background-color,color,box-shadow] duration-500 ease-fluid", i === active ? "bg-white/[0.08] text-fg ring-1 ring-hairline-strong" : "text-fg-muted ring-1 ring-transparent hover:bg-white/[0.04] hover:text-fg"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatch, {
						variant: v,
						className: "size-7"
					}), v.name]
				}, v.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "variant-panel",
				role: "tabpanel",
				"aria-labelledby": `variant-tab-${variant.key}`,
				className: "mt-8 grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-end lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-reveal": true,
					className: "bezel",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bezel-core relative",
						children: VARIANTS.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-variant-shot": true,
							"aria-hidden": i !== active,
							className: cn(i === 0 ? "relative" : "absolute inset-0"),
							style: { opacity: i === 0 ? 1 : 0 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shot, { variant: v })
						}, v.key))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-variant-info": true,
						className: "flex flex-col gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-3xl font-semibold tracking-tight",
								children: variant.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-fg-muted",
								children: variant.description()
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "grid grid-cols-3 gap-3",
								children: swatches.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
										className: "flex flex-col gap-2.5 text-xs text-fg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											className: "h-16 w-full rounded-2xl ring-1 ring-white/10 lg:aspect-square lg:h-auto",
											style: { background: s.value }
										}), s.label]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-mono text-xs text-fg",
										children: s.value
									})]
								}, s.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
								href: variant.store,
								children: cta_add()
							}) })
						]
					}, variant.key)
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Variants, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roadmap, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Closing, {})
	] });
}
//#endregion
export { Home as component };
