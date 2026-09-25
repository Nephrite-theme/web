import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/gsap+gsap__react+react.mjs";
import { useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { SiGithub, require_jsx_runtime } from "../_libs/@icons-pack/react-simple-icons+[...].mjs";
import { getLocale } from "./ssr.mjs";
import { CATEGORY_FILTER_LABEL, CATEGORY_LABEL, LINKS, PORTS, PORT_CATEGORIES, REQUEST_PORT_URL, STATUS_LABEL } from "./ports-CaKxqcHb.mjs";
import { i$1 as i } from "../_libs/solar-icons__react.mjs";
import { PageShell, PillLink, Swatch, cn } from "./PageShell-BjYpOffM.mjs";
import { Route } from "./router-D3cy_axw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ports-CHVubuSo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Cat_AllInputs */
var en_cat_all = () => {
	return `All`;
};
var es_cat_all = () => {
	return `Todas`;
};
/**
* | output |
* | --- |
* | "All" |
*
* @param {Cat_AllInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var cat_all = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_cat_all(inputs);
	return en_cat_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Port_FollowInputs */
var en_port_follow = () => {
	return `Follow progress`;
};
var es_port_follow = () => {
	return `Seguir el progreso`;
};
/**
* | output |
* | --- |
* | "Follow progress" |
*
* @param {Port_FollowInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var port_follow = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_port_follow(inputs);
	return en_port_follow(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Port_SourceInputs */
var en_port_source = () => {
	return `Source`;
};
var es_port_source = () => {
	return `Código`;
};
/**
* | output |
* | --- |
* | "Source" |
*
* @param {Port_SourceInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var port_source = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_port_source(inputs);
	return en_port_source(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ports_BodyInputs */
var en_ports_body = () => {
	return `Jade themes for the apps you use every day, from your browser to your terminal.`;
};
var es_ports_body = () => {
	return `Temas jade para las apps que usas a diario, del navegador a la terminal.`;
};
/**
* | output |
* | --- |
* | "Jade themes for the apps you use every day, from your browser to your terminal." |
*
* @param {Ports_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_body(inputs);
	return en_ports_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ports_ClearInputs */
var en_ports_clear = () => {
	return `Clear filters`;
};
var es_ports_clear = () => {
	return `Limpiar filtros`;
};
/**
* | output |
* | --- |
* | "Clear filters" |
*
* @param {Ports_ClearInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_clear = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_clear(inputs);
	return en_ports_clear(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ports_EmptyInputs */
var en_ports_empty = () => {
	return `No ports match your search.`;
};
var es_ports_empty = () => {
	return `Ninguna app coincide con tu búsqueda.`;
};
/**
* | output |
* | --- |
* | "No ports match your search." |
*
* @param {Ports_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_empty = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_empty(inputs);
	return en_ports_empty(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ports_Filter_LabelInputs */
var en_ports_filter_label = () => {
	return `Category`;
};
var es_ports_filter_label = () => {
	return `Categoría`;
};
/**
* | output |
* | --- |
* | "Category" |
*
* @param {Ports_Filter_LabelInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_filter_label = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_filter_label(inputs);
	return en_ports_filter_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ports_Request_BodyInputs */
var en_ports_request_body = () => {
	return `Tell us which one you want themed next.`;
};
var es_ports_request_body = () => {
	return `Dinos cuál quieres ver con tema Nephrite.`;
};
/**
* | output |
* | --- |
* | "Tell us which one you want themed next." |
*
* @param {Ports_Request_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_request_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_request_body(inputs);
	return en_ports_request_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ports_Request_CtaInputs */
var en_ports_request_cta = () => {
	return `Request a port`;
};
var es_ports_request_cta = () => {
	return `Pedir una app`;
};
/**
* | output |
* | --- |
* | "Request a port" |
*
* @param {Ports_Request_CtaInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_request_cta = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_request_cta(inputs);
	return en_ports_request_cta(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ports_Request_TitleInputs */
var en_ports_request_title = () => {
	return `Missing an app?`;
};
var es_ports_request_title = () => {
	return `¿Falta una app?`;
};
/**
* | output |
* | --- |
* | "Missing an app?" |
*
* @param {Ports_Request_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_request_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_request_title(inputs);
	return en_ports_request_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown>, total: NonNullable<unknown> }} Ports_ResultsInputs */
var en_ports_results = (i) => {
	return `Showing ${i?.count} of ${i?.total}`;
};
var es_ports_results = (i) => {
	return `Mostrando ${i?.count} de ${i?.total}`;
};
/**
* | output |
* | --- |
* | "Showing {count} of {total}" |
*
* @param {Ports_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_results = ((inputs, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_results(inputs);
	return en_ports_results(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ports_Search_LabelInputs */
var en_ports_search_label = () => {
	return `Search`;
};
var es_ports_search_label = () => {
	return `Buscar`;
};
/**
* | output |
* | --- |
* | "Search" |
*
* @param {Ports_Search_LabelInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_search_label = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_search_label(inputs);
	return en_ports_search_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ports_Search_PlaceholderInputs */
var en_ports_search_placeholder = () => {
	return `Chrome, VS Code…`;
};
var es_ports_search_placeholder = () => {
	return `Chrome, VS Code…`;
};
/**
* | output |
* | --- |
* | "Chrome, VS Code…" |
*
* @param {Ports_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_search_placeholder = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_search_placeholder(inputs);
	return en_ports_search_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Ports_TitleInputs */
var en_ports_title = () => {
	return `Nephrite for every app`;
};
var es_ports_title = () => {
	return `Nephrite en todas tus apps`;
};
/**
* | output |
* | --- |
* | "Nephrite for every app" |
*
* @param {Ports_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var ports_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_ports_title(inputs);
	return en_ports_title(inputs);
});
var STATUS_ORDER = {
	available: 0,
	next: 1,
	planned: 2
};
function PortsPage() {
	const { q = "", category } = Route.useSearch();
	const navigate = useNavigate({ from: Route.fullPath });
	const searchId = (0, import_react.useId)();
	const setSearch = (next) => navigate({
		search: (prev) => ({
			...prev,
			...next
		}),
		replace: true,
		resetScroll: false
	});
	const query = q.trim().toLowerCase();
	const results = PORTS.filter((p) => (!category || p.category === category) && (!query || p.name().toLowerCase().includes(query) || p.description().toLowerCase().includes(query))).sort((a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]);
	const filters = [{
		value: void 0,
		label: cat_all()
	}, ...PORT_CATEGORIES.map((c) => ({
		value: c,
		label: CATEGORY_FILTER_LABEL[c]()
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto w-full max-w-[1400px] px-4 pt-36 pb-12 md:px-8 md:pt-44",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-reveal": true,
					className: "max-w-[44rem] text-4xl leading-[1.05] font-semibold tracking-[-0.035em] md:text-7xl",
					children: ports_title()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-reveal": true,
					className: "mt-6 max-w-[34rem] text-lg leading-relaxed text-fg-muted",
					children: ports_body()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					className: "mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 md:w-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: searchId,
							className: "text-sm text-fg-muted",
							children: ports_search_label()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {
								"aria-hidden": true,
								size: 18,
								strokeWidth: 1.75,
								className: "pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-fg-faint"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: searchId,
								type: "search",
								value: q,
								onChange: (e) => setSearch({ q: e.target.value || void 0 }),
								placeholder: ports_search_placeholder(),
								autoComplete: "off",
								className: "h-12 w-full rounded-full bg-white/[0.04] pr-4 pl-11 text-fg ring-1 ring-hairline-strong transition-shadow duration-300 ease-fluid placeholder:text-fg-faint focus:ring-jade/60 focus:outline-none"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "m-0 flex min-w-0 flex-wrap gap-2 border-0 p-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "sr-only",
							children: ports_filter_label()
						}), filters.map((f) => {
							const active = category === f.value;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": active,
								onClick: () => setSearch({ category: f.value }),
								className: cn("h-10 rounded-full px-4 text-sm font-medium transition-colors duration-300 ease-fluid", active ? "bg-jade text-jade-ink" : "bg-white/[0.04] text-fg-muted ring-1 ring-hairline hover:text-fg"),
								children: f.label
							}, f.label);
						})]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto w-full max-w-[1400px] px-4 pb-24 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"aria-live": "polite",
				className: "mb-5 text-sm text-fg-muted",
				children: ports_results({
					count: String(results.length),
					total: String(PORTS.length)
				})
			}), results.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3",
				children: results.map((port) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortCard, { port })
				}, port.key))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start gap-5 rounded-[2rem] bg-white/[0.02] p-10 ring-1 ring-hairline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg",
					children: ports_empty()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSearch({
						q: void 0,
						category: void 0
					}),
					className: "h-10 rounded-full bg-white/[0.06] px-4 text-sm font-medium ring-1 ring-hairline-strong transition-colors duration-300 ease-fluid hover:bg-white/[0.09]",
					children: ports_clear()
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto w-full max-w-[1400px] px-4 pb-28 md:px-8 md:pb-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-reveal": true,
				className: "bezel",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bezel-core flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-semibold tracking-tight md:text-4xl",
						children: ports_request_title()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-fg-muted",
						children: ports_request_body()
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
						href: REQUEST_PORT_URL,
						children: ports_request_cta()
					})]
				})
			})
		})
	] });
}
function PortCard({ port }) {
	const Icon = port.icon;
	const live = port.status === "available";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "bezel flex w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bezel-core flex w-full flex-col gap-6 p-7",
			style: live ? { background: "radial-gradient(90% 80% at 0% 0%, rgb(61 184 122 / 0.2), transparent 70%), var(--stone-850)" } : void 0,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-12 items-center justify-center rounded-2xl bg-white/[0.04] ring-1 ring-hairline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								"aria-hidden": true,
								size: 24,
								className: live ? "text-jade-soft" : "text-fg-muted"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold tracking-tight",
							children: port.name()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-fg-muted",
							children: CATEGORY_LABEL[port.category]()
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("shrink-0 rounded-full px-3 py-1 text-xs font-medium", live ? "bg-jade text-jade-ink" : "bg-white/[0.05] text-fg-muted ring-1 ring-hairline"),
						children: STATUS_LABEL[port.status]()
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "leading-relaxed text-fg-muted",
					children: port.description()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex flex-col gap-3",
					children: [port.installs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-wrap gap-2",
						children: port.installs.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: i.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex h-10 items-center gap-2 rounded-full bg-white/[0.05] pr-4 pl-2 text-sm font-medium ring-1 ring-hairline transition-colors duration-300 ease-fluid hover:bg-white/[0.09]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatch, {
								variant: i.variant,
								className: "size-6"
							}), i.name.replace("Nephrite ", "")]
						}) }, i.href))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: port.repo ?? LINKS.github,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex w-max items-center gap-2 text-sm text-fg-muted underline decoration-hairline-strong underline-offset-4 transition-colors duration-300 ease-fluid hover:text-fg hover:decoration-jade",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiGithub, {
							"aria-hidden": true,
							size: 14
						}), live ? port_source() : port_follow()]
					})]
				})
			]
		})
	});
}
//#endregion
export { PortsPage as component };
