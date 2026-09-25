import { SiFirefoxbrowser, SiGooglechrome, SiSpotify } from "../_libs/@icons-pack/react-simple-icons+[...].mjs";
import { getLocale } from "./ssr.mjs";
import { i$2 as i$1, i$6 as i } from "../_libs/solar-icons__react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-BKUVfd4q.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Flavor_Forest_DescInputs */
var en_flavor_forest_desc = () => {
	return `Deep and dark, for late nights`;
};
var es_flavor_forest_desc = () => {
	return `Oscuro y profundo, para la noche`;
};
/**
* | output |
* | --- |
* | "Deep and dark, for late nights" |
*
* @param {Flavor_Forest_DescInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var flavor_forest_desc = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_flavor_forest_desc(inputs);
	return en_flavor_forest_desc(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Flavor_Jade_DescInputs */
var en_flavor_jade_desc = () => {
	return `Dark with more green, for long days`;
};
var es_flavor_jade_desc = () => {
	return `Oscuro con más verde, para jornadas largas`;
};
/**
* | output |
* | --- |
* | "Dark with more green, for long days" |
*
* @param {Flavor_Jade_DescInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var flavor_jade_desc = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_flavor_jade_desc(inputs);
	return en_flavor_jade_desc(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Flavor_Mint_DescInputs */
var en_flavor_mint_desc = () => {
	return `Light and airy, for daylight`;
};
var es_flavor_mint_desc = () => {
	return `Claro y ligero, para el día`;
};
/**
* | output |
* | --- |
* | "Light and airy, for daylight" |
*
* @param {Flavor_Mint_DescInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var flavor_mint_desc = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_flavor_mint_desc(inputs);
	return en_flavor_mint_desc(inputs);
});
var NEUTRAL_KEYS = [
	"crust",
	"mantle",
	"base",
	"surface0",
	"surface1",
	"surface2",
	"overlay0",
	"overlay1",
	"subtext",
	"text"
];
var ACCENT_KEYS = [
	"garnet",
	"carnelian",
	"citrine",
	"jade",
	"mint",
	"lagoon",
	"sapphire",
	"amethyst",
	"rhodonite"
];
var FLAVORS = [
	{
		key: "forest",
		name: "Forest",
		dark: true,
		neutrals: {
			crust: "#050e09",
			mantle: "#09150e",
			base: "#0d1c14",
			surface0: "#192820",
			surface1: "#25342c",
			surface2: "#324139",
			overlay0: "#59675f",
			overlay1: "#76847c",
			subtext: "#b4c1ba",
			text: "#e0ebe5"
		},
		accents: {
			garnet: "#ffa09c",
			carnelian: "#fba773",
			citrine: "#d9bb5c",
			jade: "#4dbf74",
			mint: "#5ed7b5",
			lagoon: "#43d5dc",
			sapphire: "#89c3fe",
			amethyst: "#d0aafc",
			rhodonite: "#f99dc6"
		}
	},
	{
		key: "jade",
		name: "Jade",
		dark: true,
		neutrals: {
			crust: "#0b1d13",
			mantle: "#0e2419",
			base: "#132e20",
			surface0: "#20392c",
			surface1: "#2e4639",
			surface2: "#3c5346",
			overlay0: "#63776c",
			overlay1: "#7f9187",
			subtext: "#bdccc3",
			text: "#e7f2eb"
		},
		accents: {
			garnet: "#ffaaa7",
			carnelian: "#ffaf7e",
			citrine: "#e0c262",
			jade: "#4dbf74",
			mint: "#65ddbb",
			lagoon: "#4cdbe3",
			sapphire: "#96c9fe",
			amethyst: "#d5b2ff",
			rhodonite: "#fea4cc"
		}
	},
	{
		key: "mint",
		name: "Mint",
		dark: false,
		neutrals: {
			crust: "#c7ded1",
			mantle: "#d7eadf",
			base: "#edfbf3",
			surface0: "#daeee2",
			surface1: "#cbe1d4",
			surface2: "#bdd5c7",
			overlay0: "#83988c",
			overlay1: "#6d8075",
			subtext: "#3f5247",
			text: "#192e23"
		},
		accents: {
			garnet: "#ad4b4b",
			carnelian: "#a85514",
			citrine: "#866c02",
			jade: "#048149",
			mint: "#037e65",
			lagoon: "#017b80",
			sapphire: "#2672b7",
			amethyst: "#8058ab",
			rhodonite: "#a54a77"
		}
	}
];
var ANSI = [
	{
		name: "black",
		token: "surface1"
	},
	{
		name: "red",
		token: "garnet"
	},
	{
		name: "green",
		token: "jade"
	},
	{
		name: "yellow",
		token: "citrine"
	},
	{
		name: "blue",
		token: "sapphire"
	},
	{
		name: "magenta",
		token: "amethyst"
	},
	{
		name: "cyan",
		token: "lagoon"
	},
	{
		name: "white",
		token: "subtext"
	}
];
function color(flavor, token) {
	return token in flavor.neutrals ? flavor.neutrals[token] : flavor.accents[token];
}
function toCss(flavor) {
	const lines = [...NEUTRAL_KEYS, ...ACCENT_KEYS].map((k) => `  --nephrite-${k}: ${color(flavor, k)};`);
	return `/* Nephrite ${flavor.name} */\n:root {\n${lines.join("\n")}\n}`;
}
function toJson(flavor) {
	const { neutrals, accents, dark } = flavor;
	return JSON.stringify({
		name: `Nephrite ${flavor.name}`,
		dark,
		...neutrals,
		...accents
	}, null, 2);
}
var LINKS = {
	github: "https://github.com/Nephrite-theme",
	x: "https://x.com/NephriteTheme",
	site: "https://getnephrite.dev"
};
var chromeColors = (key) => {
	const f = FLAVORS.find((flavor) => flavor.key === key);
	return {
		frame: f.neutrals.mantle,
		toolbar: f.neutrals.base,
		tabText: f.neutrals.text,
		dark: f.dark
	};
};
var VARIANTS = [
	{
		key: "forest",
		name: "Nephrite Forest",
		description: () => flavor_forest_desc(),
		store: "https://chromewebstore.google.com/detail/nephrite-chrome-theme-for/efhfempmenojdgamociancffkcbncffp",
		...chromeColors("forest"),
		shot: "/shots/forest.webp"
	},
	{
		key: "jade",
		name: "Nephrite Jade",
		description: () => flavor_jade_desc(),
		store: "https://chromewebstore.google.com/detail/nephrite-chrome-theme-jad/ijmbncbgabefgapchogbdnhfgbiiimcm",
		...chromeColors("jade"),
		shot: "/shots/jade.webp"
	},
	{
		key: "mint",
		name: "Nephrite Mint",
		description: () => flavor_mint_desc(),
		store: "https://chromewebstore.google.com/detail/nephrite-chrome-theme-min/ogfckpiocojbdmefjoogcmjmgfofijpg",
		...chromeColors("mint"),
		shot: "/shots/mint.webp"
	}
];
function localeUrl(locale, path = "/", base = "en") {
	if (locale === base) return `${LINKS.site}${path}`;
	return `${LINKS.site}/${locale}${path === "/" ? "/" : path}`;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/ports-CaKxqcHb.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Cat_BrowserInputs */
var en_cat_browser = () => {
	return `Browsers`;
};
var es_cat_browser = () => {
	return `Navegadores`;
};
/**
* | output |
* | --- |
* | "Browsers" |
*
* @param {Cat_BrowserInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var cat_browser = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_cat_browser(inputs);
	return en_cat_browser(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Cat_EditorInputs */
var en_cat_editor = () => {
	return `Editors`;
};
var es_cat_editor = () => {
	return `Editores`;
};
/**
* | output |
* | --- |
* | "Editors" |
*
* @param {Cat_EditorInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var cat_editor = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_cat_editor(inputs);
	return en_cat_editor(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Cat_MusicInputs */
var en_cat_music = () => {
	return `Music`;
};
var es_cat_music = () => {
	return `Música`;
};
/**
* | output |
* | --- |
* | "Music" |
*
* @param {Cat_MusicInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var cat_music = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_cat_music(inputs);
	return en_cat_music(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Cat_TerminalInputs */
var en_cat_terminal = () => {
	return `Terminals`;
};
var es_cat_terminal = () => {
	return `Terminales`;
};
/**
* | output |
* | --- |
* | "Terminals" |
*
* @param {Cat_TerminalInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var cat_terminal = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_cat_terminal(inputs);
	return en_cat_terminal(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Kind_BrowserInputs */
var en_kind_browser = () => {
	return `Browser`;
};
var es_kind_browser = () => {
	return `Navegador`;
};
/**
* | output |
* | --- |
* | "Browser" |
*
* @param {Kind_BrowserInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var kind_browser = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_kind_browser(inputs);
	return en_kind_browser(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Kind_EditorInputs */
var en_kind_editor = () => {
	return `Editor`;
};
var es_kind_editor = () => {
	return `Editor`;
};
/**
* | output |
* | --- |
* | "Editor" |
*
* @param {Kind_EditorInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var kind_editor = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_kind_editor(inputs);
	return en_kind_editor(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Kind_MusicInputs */
var en_kind_music = () => {
	return `Music`;
};
var es_kind_music = () => {
	return `Música`;
};
/**
* | output |
* | --- |
* | "Music" |
*
* @param {Kind_MusicInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var kind_music = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_kind_music(inputs);
	return en_kind_music(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Kind_TerminalInputs */
var en_kind_terminal = () => {
	return `Terminal`;
};
var es_kind_terminal = () => {
	return `Terminal`;
};
/**
* | output |
* | --- |
* | "Terminal" |
*
* @param {Kind_TerminalInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var kind_terminal = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_kind_terminal(inputs);
	return en_kind_terminal(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Rm_Chrome_BodyInputs */
var en_rm_chrome_body = () => {
	return `The flagship theme, in every variant.`;
};
var es_rm_chrome_body = () => {
	return `El tema principal, en todas sus variantes.`;
};
/**
* | output |
* | --- |
* | "The flagship theme, in every variant." |
*
* @param {Rm_Chrome_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var rm_chrome_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_rm_chrome_body(inputs);
	return en_rm_chrome_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Rm_Chrome_TitleInputs */
var en_rm_chrome_title = () => {
	return `Chrome`;
};
var es_rm_chrome_title = () => {
	return `Chrome`;
};
/**
* | output |
* | --- |
* | "Chrome" |
*
* @param {Rm_Chrome_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var rm_chrome_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_rm_chrome_title(inputs);
	return en_rm_chrome_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Rm_Firefox_BodyInputs */
var en_rm_firefox_body = () => {
	return `The same jade palette, adapted to Firefox's toolbar and sidebar.`;
};
var es_rm_firefox_body = () => {
	return `La misma paleta jade, adaptada a la barra y el panel lateral de Firefox.`;
};
/**
* | output |
* | --- |
* | "The same jade palette, adapted to Firefox's toolbar and sidebar." |
*
* @param {Rm_Firefox_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var rm_firefox_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_rm_firefox_body(inputs);
	return en_rm_firefox_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Rm_Firefox_TitleInputs */
var en_rm_firefox_title = () => {
	return `Firefox`;
};
var es_rm_firefox_title = () => {
	return `Firefox`;
};
/**
* | output |
* | --- |
* | "Firefox" |
*
* @param {Rm_Firefox_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var rm_firefox_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_rm_firefox_title(inputs);
	return en_rm_firefox_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Rm_Spotify_BodyInputs */
var en_rm_spotify_body = () => {
	return `A quieter player to match the rest of your desk.`;
};
var es_rm_spotify_body = () => {
	return `Un reproductor más tranquilo, a juego con tu escritorio.`;
};
/**
* | output |
* | --- |
* | "A quieter player to match the rest of your desk." |
*
* @param {Rm_Spotify_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var rm_spotify_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_rm_spotify_body(inputs);
	return en_rm_spotify_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Rm_Spotify_TitleInputs */
var en_rm_spotify_title = () => {
	return `Spotify`;
};
var es_rm_spotify_title = () => {
	return `Spotify`;
};
/**
* | output |
* | --- |
* | "Spotify" |
*
* @param {Rm_Spotify_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var rm_spotify_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_rm_spotify_title(inputs);
	return en_rm_spotify_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Rm_Terminal_BodyInputs */
var en_rm_terminal_body = () => {
	return `Profiles for Windows Terminal, iTerm2 and Hyper.`;
};
var es_rm_terminal_body = () => {
	return `Perfiles para Windows Terminal, iTerm2 y Hyper.`;
};
/**
* | output |
* | --- |
* | "Profiles for Windows Terminal, iTerm2 and Hyper." |
*
* @param {Rm_Terminal_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var rm_terminal_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_rm_terminal_body(inputs);
	return en_rm_terminal_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Rm_Terminal_TitleInputs */
var en_rm_terminal_title = () => {
	return `Terminal`;
};
var es_rm_terminal_title = () => {
	return `Terminal`;
};
/**
* | output |
* | --- |
* | "Terminal" |
*
* @param {Rm_Terminal_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var rm_terminal_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_rm_terminal_title(inputs);
	return en_rm_terminal_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Rm_Vscode_BodyInputs */
var en_rm_vscode_body = () => {
	return `Syntax and interface colors from the same palette, for long coding sessions.`;
};
var es_rm_vscode_body = () => {
	return `Colores de sintaxis e interfaz de la misma paleta, para sesiones largas de código.`;
};
/**
* | output |
* | --- |
* | "Syntax and interface colors from the same palette, for long coding sessions." |
*
* @param {Rm_Vscode_BodyInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var rm_vscode_body = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_rm_vscode_body(inputs);
	return en_rm_vscode_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Rm_Vscode_TitleInputs */
var en_rm_vscode_title = () => {
	return `VS Code`;
};
var es_rm_vscode_title = () => {
	return `VS Code`;
};
/**
* | output |
* | --- |
* | "VS Code" |
*
* @param {Rm_Vscode_TitleInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var rm_vscode_title = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_rm_vscode_title(inputs);
	return en_rm_vscode_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Status_AvailableInputs */
var en_status_available = () => {
	return `Available`;
};
var es_status_available = () => {
	return `Disponible`;
};
/**
* | output |
* | --- |
* | "Available" |
*
* @param {Status_AvailableInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var status_available = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_status_available(inputs);
	return en_status_available(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Status_NextInputs */
var en_status_next = () => {
	return `In progress`;
};
var es_status_next = () => {
	return `En progreso`;
};
/**
* | output |
* | --- |
* | "In progress" |
*
* @param {Status_NextInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var status_next = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_status_next(inputs);
	return en_status_next(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Status_PlannedInputs */
var en_status_planned = () => {
	return `Planned`;
};
var es_status_planned = () => {
	return `Planeado`;
};
/**
* | output |
* | --- |
* | "Planned" |
*
* @param {Status_PlannedInputs} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
var status_planned = ((inputs = {}, options = {}) => {
	if ((options.locale ?? getLocale()) === "es") return es_status_planned(inputs);
	return en_status_planned(inputs);
});
var PORTS = [
	{
		key: "chrome",
		name: () => rm_chrome_title(),
		description: () => rm_chrome_body(),
		category: "browser",
		status: "available",
		icon: SiGooglechrome,
		repo: `${LINKS.github}/chrome`,
		installs: VARIANTS.map((v) => ({
			name: v.name,
			href: v.store,
			variant: v
		}))
	},
	{
		key: "firefox",
		name: () => rm_firefox_title(),
		description: () => rm_firefox_body(),
		category: "browser",
		status: "next",
		icon: SiFirefoxbrowser,
		repo: `${LINKS.github}/firefox`,
		installs: []
	},
	{
		key: "vscode",
		name: () => rm_vscode_title(),
		description: () => rm_vscode_body(),
		category: "editor",
		status: "next",
		icon: i,
		repo: null,
		installs: []
	},
	{
		key: "spotify",
		name: () => rm_spotify_title(),
		description: () => rm_spotify_body(),
		category: "music",
		status: "planned",
		icon: SiSpotify,
		repo: null,
		installs: []
	},
	{
		key: "terminal",
		name: () => rm_terminal_title(),
		description: () => rm_terminal_body(),
		category: "terminal",
		status: "planned",
		icon: i$1,
		repo: null,
		installs: []
	}
];
var PORT_CATEGORIES = [
	"browser",
	"editor",
	"terminal",
	"music"
];
var REQUEST_PORT_URL = `${LINKS.github}/web/issues/new?template=port-request.yml`;
var STATUS_LABEL = {
	available: () => status_available(),
	next: () => status_next(),
	planned: () => status_planned()
};
var CATEGORY_LABEL = {
	browser: () => kind_browser(),
	editor: () => kind_editor(),
	terminal: () => kind_terminal(),
	music: () => kind_music()
};
var CATEGORY_FILTER_LABEL = {
	browser: () => cat_browser(),
	editor: () => cat_editor(),
	terminal: () => cat_terminal(),
	music: () => cat_music()
};
//#endregion
export { ACCENT_KEYS, ANSI, CATEGORY_FILTER_LABEL, CATEGORY_LABEL, FLAVORS, LINKS, NEUTRAL_KEYS, PORTS, PORT_CATEGORIES, REQUEST_PORT_URL, STATUS_LABEL, VARIANTS, color, flavor_forest_desc, flavor_jade_desc, flavor_mint_desc, localeUrl, toCss, toJson };
