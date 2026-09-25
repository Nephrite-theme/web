import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "#/components/sections/Hero";
import { Nav } from "#/components/sections/Nav";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<>
			<div aria-hidden className="ambient" />
			<div aria-hidden className="grain" />
			<Nav />
			<main className="relative">
				<Hero />
			</main>
		</>
	);
}
