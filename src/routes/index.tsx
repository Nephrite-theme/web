import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "#/components/PageShell";
import { Closing } from "#/components/sections/Closing";
import { Details } from "#/components/sections/Details";
import { Hero } from "#/components/sections/Hero";
import { Roadmap } from "#/components/sections/Roadmap";
import { Variants } from "#/components/sections/Variants";
import { pageHead } from "#/lib/head";
import { m } from "#/paraglide/messages";

export const Route = createFileRoute("/")({
	head: () =>
		pageHead({
			path: "/",
			title: m.meta_title(),
			description: m.meta_description(),
		}),
	component: Home,
});

function Home() {
	return (
		<PageShell>
			<Hero />
			<Variants />
			<Details />
			<Roadmap />
			<Closing />
		</PageShell>
	);
}
