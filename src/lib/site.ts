export const LINKS = {
	chrome: "https://github.com/Nephrite-theme/chrome",
	github: "https://github.com/Nephrite-theme",
	x: "https://x.com/NephriteTheme",
	site: "https://getnephrite.dev",
} as const;

export type VariantKey = "forest" | "mint" | "jade";

export type Variant = {
	key: VariantKey;
	name: string;
	frame: string;
	toolbar: string;
	tabText: string;
	dark: boolean;
	// TODO: add real screenshots at public/shots/{key}.webp (1600x1000) and set the path here.
	shot: string | null;
};

// Colors taken from the published Chrome theme manifests.
export const VARIANTS: Variant[] = [
	{
		key: "forest",
		name: "Nephrite Forest",
		frame: "#111F17",
		toolbar: "#16291E",
		tabText: "#FFFFFF",
		dark: true,
		shot: null,
	},
	{
		key: "mint",
		name: "Nephrite Mint",
		frame: "#6BC4A8",
		toolbar: "#ECFDF5",
		tabText: "#111F17",
		dark: false,
		shot: null,
	},
	{
		key: "jade",
		name: "Nephrite Jade",
		frame: "#266E48",
		toolbar: "#F0FDF4",
		tabText: "#111F17",
		dark: false,
		shot: null,
	},
];
