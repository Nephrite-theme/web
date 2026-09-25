import type { ReactNode } from "react";
import { Reveals } from "#/components/Reveals";
import { SmoothScroll } from "#/components/SmoothScroll";
import { Footer } from "#/components/sections/Closing";
import { Nav } from "#/components/sections/Nav";
import { m } from "#/paraglide/messages";

// Shared frame for every page: ambient light, grain, skip link, nav, smooth
// scrolling content and footer. Fixed layers stay outside the smoother.
export function PageShell({ children }: { children: ReactNode }) {
	return (
		<>
			<div aria-hidden className="ambient" />
			<div aria-hidden className="grain" />
			<a
				href="#main"
				className="fixed top-3 left-3 z-50 -translate-y-24 rounded-full bg-jade px-4 py-2 text-sm font-medium text-jade-ink transition-transform duration-300 ease-fluid focus:translate-y-0"
			>
				{m.skip_link()}
			</a>
			<Nav />
			<SmoothScroll>
				<main id="main" tabIndex={-1} className="relative outline-none">
					{children}
				</main>
				<Footer />
				<Reveals />
			</SmoothScroll>
		</>
	);
}
