import { useSyncExternalStore } from "react";
import { m } from "#/paraglide/messages";
import type { Variant } from "./site";

// Browsers Nephrite ships a theme for. Edge, Brave, Opera, Vivaldi and other
// Chromium browsers install from the Chrome Web Store, so they count as Chrome.
export type Browser = "chrome" | "firefox";

let override: Browser | null = null;
const listeners = new Set<() => void>();

function detect(): Browser {
	return /\bFirefox\//.test(navigator.userAgent) ? "firefox" : "chrome";
}

function subscribe(listener: () => void) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}

// The server can't know the browser, so it (and hydration) always renders
// Chrome; the client snapshot then switches to the detected browser.
export function useBrowser() {
	const browser = useSyncExternalStore(
		subscribe,
		() => override ?? detect(),
		(): Browser => "chrome",
	);
	return browser;
}

// Manual switch for when detection is wrong or someone installs elsewhere.
export function setBrowser(browser: Browser) {
	override = browser;
	for (const listener of listeners) listener();
}

export function installUrl(variant: Variant, browser: Browser) {
	return browser === "firefox" ? variant.firefox : variant.store;
}

export const BROWSER_COPY: Record<
	Browser,
	{ cta: () => string; add: () => string; switchTo: () => string }
> = {
	chrome: {
		cta: () => m.cta_chrome(),
		add: () => m.cta_add(),
		switchTo: () => m.install_switch_chrome(),
	},
	firefox: {
		cta: () => m.cta_firefox(),
		add: () => m.cta_add_firefox(),
		switchTo: () => m.install_switch_firefox(),
	},
};
