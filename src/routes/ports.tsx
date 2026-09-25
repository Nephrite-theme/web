import { SiGithub } from "@icons-pack/react-simple-icons";
import { MagnifierIcon } from "@solar-icons/react/linear";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useId } from "react";
import { PageShell } from "#/components/PageShell";
import { PillLink } from "#/components/ui/PillLink";
import { Swatch } from "#/components/ui/Swatch";
import { pageHead } from "#/lib/head";
import {
	CATEGORY_FILTER_LABEL,
	CATEGORY_LABEL,
	PORT_CATEGORIES,
	PORTS,
	type Port,
	type PortCategory,
	REQUEST_PORT_URL,
	STATUS_LABEL,
} from "#/lib/ports";
import { LINKS } from "#/lib/site";
import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

type PortsSearch = { q?: string; category?: PortCategory };

export const Route = createFileRoute("/ports")({
	// Filters live in the URL so a filtered view can be shared.
	validateSearch: (search: Record<string, unknown>): PortsSearch => ({
		q: typeof search.q === "string" && search.q ? search.q : undefined,
		category: PORT_CATEGORIES.includes(search.category as PortCategory)
			? (search.category as PortCategory)
			: undefined,
	}),
	head: () =>
		pageHead({
			path: "/ports",
			title: m.ports_meta_title(),
			description: m.ports_meta_description(),
		}),
	component: PortsPage,
});

const STATUS_ORDER = { available: 0, next: 1, planned: 2 } as const;

function PortsPage() {
	const { q = "", category } = Route.useSearch();
	const navigate = useNavigate({ from: Route.fullPath });
	const searchId = useId();

	const setSearch = (next: PortsSearch) =>
		navigate({
			search: (prev) => ({ ...prev, ...next }),
			replace: true,
			resetScroll: false,
		});

	const query = q.trim().toLowerCase();
	const results = PORTS.filter(
		(p) =>
			(!category || p.category === category) &&
			(!query ||
				p.name().toLowerCase().includes(query) ||
				p.description().toLowerCase().includes(query)),
	).sort((a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]);

	const filters: { value?: PortCategory; label: string }[] = [
		{ value: undefined, label: m.cat_all() },
		...PORT_CATEGORIES.map((c) => ({
			value: c,
			label: CATEGORY_FILTER_LABEL[c](),
		})),
	];

	return (
		<PageShell>
			<section className="mx-auto w-full max-w-[1400px] px-4 pt-36 pb-12 md:px-8 md:pt-44">
				<h1
					data-reveal
					className="max-w-[44rem] text-4xl leading-[1.05] font-semibold tracking-[-0.035em] md:text-7xl"
				>
					{m.ports_title()}
				</h1>
				<p
					data-reveal
					className="mt-6 max-w-[34rem] text-lg leading-relaxed text-fg-muted"
				>
					{m.ports_body()}
				</p>

				<div
					data-reveal
					className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
				>
					<div className="flex flex-col gap-2 md:w-80">
						<label htmlFor={searchId} className="text-sm text-fg-muted">
							{m.ports_search_label()}
						</label>
						<div className="relative">
							<MagnifierIcon
								aria-hidden
								size={18}
								strokeWidth={1.75}
								className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-fg-faint"
							/>
							<input
								id={searchId}
								type="search"
								value={q}
								onChange={(e) => setSearch({ q: e.target.value || undefined })}
								placeholder={m.ports_search_placeholder()}
								autoComplete="off"
								className="h-12 w-full rounded-full bg-white/[0.04] pr-4 pl-11 text-fg ring-1 ring-hairline-strong transition-shadow duration-300 ease-fluid placeholder:text-fg-faint focus:ring-jade/60 focus:outline-none"
							/>
						</div>
					</div>

					<fieldset className="m-0 flex min-w-0 flex-wrap gap-2 border-0 p-0">
						<legend className="sr-only">{m.ports_filter_label()}</legend>
						{filters.map((f) => {
							const active = category === f.value;
							return (
								<button
									key={f.label}
									type="button"
									aria-pressed={active}
									onClick={() => setSearch({ category: f.value })}
									className={cn(
										"h-10 rounded-full px-4 text-sm font-medium transition-colors duration-300 ease-fluid",
										active
											? "bg-jade text-jade-ink"
											: "bg-white/[0.04] text-fg-muted ring-1 ring-hairline hover:text-fg",
									)}
								>
									{f.label}
								</button>
							);
						})}
					</fieldset>
				</div>
			</section>

			<section className="mx-auto w-full max-w-[1400px] px-4 pb-24 md:px-8">
				<p aria-live="polite" className="mb-5 text-sm text-fg-muted">
					{m.ports_results({
						count: String(results.length),
						total: String(PORTS.length),
					})}
				</p>

				{results.length > 0 ? (
					<ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
						{results.map((port) => (
							<li key={port.key} className="flex">
								<PortCard port={port} />
							</li>
						))}
					</ul>
				) : (
					<div className="flex flex-col items-start gap-5 rounded-[2rem] bg-white/[0.02] p-10 ring-1 ring-hairline">
						<p className="text-lg">{m.ports_empty()}</p>
						<button
							type="button"
							onClick={() => setSearch({ q: undefined, category: undefined })}
							className="h-10 rounded-full bg-white/[0.06] px-4 text-sm font-medium ring-1 ring-hairline-strong transition-colors duration-300 ease-fluid hover:bg-white/[0.09]"
						>
							{m.ports_clear()}
						</button>
					</div>
				)}
			</section>

			<section className="mx-auto w-full max-w-[1400px] px-4 pb-28 md:px-8 md:pb-40">
				<div data-reveal className="bezel">
					<div className="bezel-core flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
						<div>
							<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
								{m.ports_request_title()}
							</h2>
							<p className="mt-3 text-fg-muted">{m.ports_request_body()}</p>
						</div>
						<PillLink href={REQUEST_PORT_URL}>{m.ports_request_cta()}</PillLink>
					</div>
				</div>
			</section>
		</PageShell>
	);
}

function PortCard({ port }: { port: Port }) {
	const Icon = port.icon;
	const live = port.status === "available";

	return (
		<article className="bezel flex w-full">
			<div
				className="bezel-core flex w-full flex-col gap-6 p-7"
				style={
					live
						? {
								background:
									"radial-gradient(90% 80% at 0% 0%, rgb(61 184 122 / 0.2), transparent 70%), var(--stone-850)",
							}
						: undefined
				}
			>
				<div className="flex items-start justify-between gap-4">
					<div className="flex items-center gap-4">
						<span className="flex size-12 items-center justify-center rounded-2xl bg-white/[0.04] ring-1 ring-hairline">
							<Icon
								aria-hidden
								size={24}
								className={live ? "text-jade-soft" : "text-fg-muted"}
							/>
						</span>
						<div>
							<h2 className="text-xl font-semibold tracking-tight">
								{port.name()}
							</h2>
							<p className="text-sm text-fg-muted">
								{CATEGORY_LABEL[port.category]()}
							</p>
						</div>
					</div>
					<span
						className={cn(
							"shrink-0 rounded-full px-3 py-1 text-xs font-medium",
							live
								? "bg-jade text-jade-ink"
								: "bg-white/[0.05] text-fg-muted ring-1 ring-hairline",
						)}
					>
						{STATUS_LABEL[port.status]()}
					</span>
				</div>

				<p className="leading-relaxed text-fg-muted">{port.description()}</p>

				<div className="mt-auto flex flex-col gap-3">
					{port.installs.length > 0 && (
						<ul className="flex flex-wrap gap-2">
							{port.installs.map((i) => (
								<li key={i.href}>
									<a
										href={i.href}
										target="_blank"
										rel="noopener noreferrer"
										className="flex h-10 items-center gap-2 rounded-full bg-white/[0.05] pr-4 pl-2 text-sm font-medium ring-1 ring-hairline transition-colors duration-300 ease-fluid hover:bg-white/[0.09]"
									>
										<Swatch variant={i.variant} className="size-6" />
										{i.name.replace("Nephrite ", "")}
									</a>
								</li>
							))}
						</ul>
					)}
					<a
						href={port.repo ?? LINKS.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex w-max items-center gap-2 text-sm text-fg-muted underline decoration-hairline-strong underline-offset-4 transition-colors duration-300 ease-fluid hover:text-fg hover:decoration-jade"
					>
						<SiGithub aria-hidden size={14} />
						{live ? m.port_source() : m.port_follow()}
					</a>
				</div>
			</div>
		</article>
	);
}
