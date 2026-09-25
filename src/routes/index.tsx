import { createFileRoute } from "@tanstack/react-router";
import { Reveals } from "#/components/Reveals";
import { Closing, Footer } from "#/components/sections/Closing";
import { Details } from "#/components/sections/Details";
import { Hero } from "#/components/sections/Hero";
import { Nav } from "#/components/sections/Nav";
import { Roadmap } from "#/components/sections/Roadmap";
import { Variants } from "#/components/sections/Variants";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<>
			<div aria-hidden className="ambient" />
			<div aria-hidden className="grain" />
			<Nav />
			<main className="relative">
				<Hero />
				<Variants />
				<Details />
				<Roadmap />
				<Closing />
			</main>
			<Footer />
			<Reveals />
		</>
	);
}
