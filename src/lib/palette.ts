// The Nephrite palette: three flavors, ten neutrals and nine accents named
// after minerals. Derived in OKLCH with jade-tinted neutrals; every accent
// clears 4.5:1 contrast on its flavor's base. Source of truth for ports.

export const NEUTRAL_KEYS = [
	"crust",
	"mantle",
	"base",
	"surface0",
	"surface1",
	"surface2",
	"overlay0",
	"overlay1",
	"subtext",
	"text",
] as const;

export const ACCENT_KEYS = [
	"garnet",
	"carnelian",
	"citrine",
	"jade",
	"mint",
	"lagoon",
	"sapphire",
	"amethyst",
	"rhodonite",
] as const;

export type NeutralKey = (typeof NEUTRAL_KEYS)[number];
export type AccentKey = (typeof ACCENT_KEYS)[number];
export type FlavorKey = "forest" | "jade" | "mint";

export type Flavor = {
	key: FlavorKey;
	name: string;
	dark: boolean;
	neutrals: Record<NeutralKey, string>;
	accents: Record<AccentKey, string>;
};

export const FLAVORS: Flavor[] = [
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
			text: "#e0ebe5",
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
			rhodonite: "#f99dc6",
		},
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
			text: "#e7f2eb",
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
			rhodonite: "#fea4cc",
		},
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
			overlay1: "#607268",
			subtext: "#3f5247",
			text: "#192e23",
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
			rhodonite: "#a54a77",
		},
	},
];

// Suggested ANSI mapping for terminal ports (normal colors).
export const ANSI: { name: string; token: NeutralKey | AccentKey }[] = [
	{ name: "black", token: "surface1" },
	{ name: "red", token: "garnet" },
	{ name: "green", token: "jade" },
	{ name: "yellow", token: "citrine" },
	{ name: "blue", token: "sapphire" },
	{ name: "magenta", token: "amethyst" },
	{ name: "cyan", token: "lagoon" },
	{ name: "white", token: "subtext" },
];

export function color(flavor: Flavor, token: NeutralKey | AccentKey) {
	return token in flavor.neutrals
		? flavor.neutrals[token as NeutralKey]
		: flavor.accents[token as AccentKey];
}

export function toCss(flavor: Flavor) {
	const lines = [...NEUTRAL_KEYS, ...ACCENT_KEYS].map(
		(k) => `  --nephrite-${k}: ${color(flavor, k)};`,
	);
	return `/* Nephrite ${flavor.name} */\n:root {\n${lines.join("\n")}\n}`;
}

export function toJson(flavor: Flavor) {
	const { neutrals, accents, dark } = flavor;
	return JSON.stringify(
		{ name: `Nephrite ${flavor.name}`, dark, ...neutrals, ...accents },
		null,
		2,
	);
}
