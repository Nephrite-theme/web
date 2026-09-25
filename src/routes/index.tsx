import { createFileRoute } from "@tanstack/react-router";
import { Reveals } from "#/components/Reveals";
import { SmoothScroll } from "#/components/SmoothScroll";
import { Closing, Footer } from "#/components/sections/Closing";
import { Details } from "#/components/sections/Details";
import { Hero } from "#/components/sections/Hero";
import { Nav } from "#/components/sections/Nav";
import { Roadmap } from "#/components/sections/Roadmap";
import { Variants } from "#/components/sections/Variants";
import { m } from "#/paraglide/messages";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
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
					<Hero />
					<Variants />
					<Details />
					<Roadmap />
					<Closing />
				</main>
				<Footer />
				<Reveals />
			</SmoothScroll>
		</>
	);
}
