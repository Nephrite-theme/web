import { m } from "#/paraglide/messages";

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
	// TODO: add real screenshots at public/shots/{key}.webp (1600x1000) and set the path here.
	shot: string | null;
};

// Single source of truth for every published variant. To add one, append an
// entry here and a `variant_{key}_desc` message in messages/*.json.
// Colors come from each variant's Chrome theme manifest.
export const VARIANTS: Variant[] = [
	{
		key: "forest",
		name: "Nephrite Forest",
		description: () => m.variant_forest_desc(),
		store:
			"https://chromewebstore.google.com/detail/nephrite-chrome-theme-for/efhfempmenojdgamociancffkcbncffp",
		frame: "#111F17",
		toolbar: "#16291E",
		tabText: "#FFFFFF",
		dark: true,
		shot: null,
	},
	{
		key: "mint",
		name: "Nephrite Mint",
		description: () => m.variant_mint_desc(),
		store:
			"https://chromewebstore.google.com/detail/nephrite-chrome-theme-min/ogfckpiocojbdmefjoogcmjmgfofijpg",
		frame: "#6BC4A8",
		toolbar: "#ECFDF5",
		tabText: "#111F17",
		dark: false,
		shot: null,
	},
	{
		key: "jade",
		name: "Nephrite Jade",
		description: () => m.variant_jade_desc(),
		store:
			"https://chromewebstore.google.com/detail/nephrite-chrome-theme-jad/ijmbncbgabefgapchogbdnhfgbiiimcm",
		frame: "#266E48",
		toolbar: "#F0FDF4",
		tabText: "#111F17",
		dark: false,
		shot: null,
	},
];

// Absolute URL of the landing page in a given locale (base locale lives at "/").
export function localeUrl(locale: string, base = "en") {
	return locale === base ? `${LINKS.site}/` : `${LINKS.site}/${locale}/`;
}
