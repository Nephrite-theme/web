import {
	SiFirefoxbrowser,
	SiGooglechrome,
	SiSpotify,
} from "@icons-pack/react-simple-icons";
import { CodeSquareIcon, FileTerminalIcon } from "@solar-icons/react/linear";
import type { ComponentType } from "react";
import { m } from "#/paraglide/messages";
import { LINKS, VARIANTS, type Variant } from "./site";

export type PortStatus = "available" | "next" | "planned";
export type PortCategory = "browser" | "editor" | "terminal" | "music";

export type Port = {
	key: string;
	name: () => string;
	description: () => string;
	category: PortCategory;
	status: PortStatus;
	icon: ComponentType<{
		size?: number;
		className?: string;
		"aria-hidden"?: boolean;
	}>;
	// Source repository, once one exists.
	repo: string | null;
	// GitHub usernames credited on the card; omitted for ports the core team keeps.
	maintainers?: string[];
	// Store listings once the port ships: one per variant, or a single listing
	// (no variant) when one package bundles every flavor.
	installs: {
		name: string | (() => string);
		href: string;
		variant?: Variant;
	}[];
};

// Every app Nephrite targets, shipped or not. The home roadmap and /ports both
// read from here; to add a port, append an entry and its messages.
export const PORTS: Port[] = [
	{
		key: "chrome",
		name: () => m.rm_chrome_title(),
		description: () => m.rm_chrome_body(),
		category: "browser",
		status: "available",
		icon: SiGooglechrome,
		repo: `${LINKS.github}/chrome`,
		installs: VARIANTS.map((v) => ({
			name: v.name,
			href: v.store,
			variant: v,
		})),
	},
	{
		key: "firefox",
		name: () => m.rm_firefox_title(),
		description: () => m.rm_firefox_body(),
		category: "browser",
		status: "available",
		icon: SiFirefoxbrowser,
		repo: `${LINKS.github}/firefox`,
		installs: VARIANTS.map((v) => ({
			name: v.name,
			href: v.firefox,
			variant: v,
		})),
	},
	{
		key: "vscode",
		name: () => m.rm_vscode_title(),
		description: () => m.rm_vscode_body(),
		category: "editor",
		status: "available",
		icon: CodeSquareIcon,
		repo: `${LINKS.github}/vscode`,
		installs: [
			{
				name: "Visual Studio Marketplace",
				href: "https://marketplace.visualstudio.com/items?itemName=nephrite-theme.nephrite",
			},
			{
				name: "Open VSX",
				href: "https://open-vsx.org/extension/nephrite-theme/nephrite",
			},
		],
	},
	{
		key: "spotify",
		name: () => m.rm_spotify_title(),
		description: () => m.rm_spotify_body(),
		category: "music",
		status: "next",
		icon: SiSpotify,
		repo: null,
		installs: [],
	},
	{
		key: "terminal",
		name: () => m.rm_terminal_title(),
		description: () => m.rm_terminal_body(),
		category: "terminal",
		status: "available",
		icon: FileTerminalIcon,
		repo: `${LINKS.github}/terminal`,
		// Terminals have no store, so the README's install section stands in.
		installs: [
			{
				name: () => m.port_install_guide(),
				href: `${LINKS.github}/terminal#install`,
			},
		],
	},
];

export const PORT_CATEGORIES: PortCategory[] = [
	"browser",
	"editor",
	"terminal",
	"music",
];

export const TEMPLATE_URL = `${LINKS.github}/template/generate`;

// The contributing guide lives in the org's .github repository, in both locales.
export const CONTRIBUTING_URL = {
	en: `${LINKS.github}/.github/blob/main/CONTRIBUTING.md#building-a-port`,
	es: `${LINKS.github}/.github/blob/main/CONTRIBUTING.es.md`,
} as const;

export const REQUEST_PORT_URL = `${LINKS.github}/web/issues/new?template=port-request.yml`;

export const STATUS_LABEL: Record<PortStatus, () => string> = {
	available: () => m.status_available(),
	next: () => m.status_next(),
	planned: () => m.status_planned(),
};

export const CATEGORY_LABEL: Record<PortCategory, () => string> = {
	browser: () => m.kind_browser(),
	editor: () => m.kind_editor(),
	terminal: () => m.kind_terminal(),
	music: () => m.kind_music(),
};

export const CATEGORY_FILTER_LABEL: Record<PortCategory, () => string> = {
	browser: () => m.cat_browser(),
	editor: () => m.cat_editor(),
	terminal: () => m.cat_terminal(),
	music: () => m.cat_music(),
};
