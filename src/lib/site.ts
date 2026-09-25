import { m } from "#/paraglide/messages";
import { FLAVORS, type Flavor, type FlavorKey } from "./palette";

export const LINKS = {
	github: "https://github.com/Nephrite-theme",
	x: "https://x.com/NephriteTheme",
	site: "https://getnephrite.dev",
} as const;

export type Variant = {
	key: string;
	name: string;
	description: () => string;
	store: string;
	frame: string;
	toolbar: string;
	tabText: string;
	dark: boolean;
	// Browser-window capture at public/shots/{key}.webp (1188x640), or null for a placeholder.
	shot: string | null;
};

// Single source of truth for every published variant. Colors come from the
// palette flavor each Chrome theme is built from (frame = mantle, toolbar =
// base, tab text = text), so the site always matches the published themes.
const chromeColors = (key: FlavorKey) => {
	const f = FLAVORS.find((flavor) => flavor.key === key) as Flavor;
	return {
		frame: f.neutrals.mantle,
		toolbar: f.neutrals.base,
		tabText: f.neutrals.text,
		dark: f.dark,
	};
};

export const VARIANTS: Variant[] = [
	{
		key: "forest",
		name: "Nephrite Forest",
		description: () => m.flavor_forest_desc(),
		store:
			"https://chromewebstore.google.com/detail/nephrite-chrome-theme-for/efhfempmenojdgamociancffkcbncffp",
		...chromeColors("forest"),
		shot: "/shots/forest.webp",
	},
	{
		key: "jade",
		name: "Nephrite Jade",
		description: () => m.flavor_jade_desc(),
		store:
			"https://chromewebstore.google.com/detail/nephrite-chrome-theme-jad/ijmbncbgabefgapchogbdnhfgbiiimcm",
		...chromeColors("jade"),
		// TODO: recapture after the palette-based Jade (now dark) ships to the store.
		shot: null,
	},
	{
		key: "mint",
		name: "Nephrite Mint",
		description: () => m.flavor_mint_desc(),
		store:
			"https://chromewebstore.google.com/detail/nephrite-chrome-theme-min/ogfckpiocojbdmefjoogcmjmgfofijpg",
		...chromeColors("mint"),
		// TODO: recapture after the palette-based Mint ships to the store.
		shot: null,
	},
];

// Absolute URL of a page in a given locale; the base locale has no prefix.
// Mirrors Paraglide's URL strategy: "/" -> "/es/", "/ports" -> "/es/ports".
export function localeUrl(locale: string, path = "/", base = "en") {
	if (locale === base) return `${LINKS.site}${path}`;
	return `${LINKS.site}/${locale}${path === "/" ? "/" : path}`;
}
