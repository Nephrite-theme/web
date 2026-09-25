import { CopyIcon } from "@solar-icons/react/linear";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { PageShell } from "#/components/PageShell";
import { PillIcon, pillClass } from "#/components/ui/PillLink";
import { pageHead } from "#/lib/head";
import {
	ACCENT_KEYS,
	type AccentKey,
	ANSI,
	color,
	FLAVORS,
	type Flavor,
	type FlavorKey,
	NEUTRAL_KEYS,
	type NeutralKey,
	toCss,
	toJson,
} from "#/lib/palette";
import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

type PaletteSearch = { flavor?: FlavorKey };

export const Route = createFileRoute("/palette")({
	validateSearch: (search: Record<string, unknown>): PaletteSearch => ({
		flavor: FLAVORS.some((f) => f.key === search.flavor)
			? (search.flavor as FlavorKey)
			: undefined,
	}),
	head: () =>
		pageHead({
			path: "/palette",
			title: m.palette_meta_title(),
			description: m.palette_meta_description(),
		}),
	component: PalettePage,
});

const FLAVOR_DESC: Record<FlavorKey, () => string> = {
	forest: () => m.flavor_forest_desc(),
	jade: () => m.flavor_jade_desc(),
	mint: () => m.flavor_mint_desc(),
};

// Copies to the clipboard and exposes the last copied value for a live region.
function useCopy() {
	const [copied, setCopied] = useState<string | null>(null);
	const timer = useRef<number>(undefined);
	useEffect(() => () => window.clearTimeout(timer.current), []);

	const copy = async (text: string, label = text) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(label);
			window.clearTimeout(timer.current);
			timer.current = window.setTimeout(() => setCopied(null), 1800);
		} catch {
			// Clipboard can be blocked (insecure context, permissions); fail quietly.
		}
	};
	return { copied, copy };
}

function PalettePage() {
	const { flavor: flavorKey = "forest" } = Route.useSearch();
	const navigate = useNavigate({ from: Route.fullPath });
	const flavor = FLAVORS.find((f) => f.key === flavorKey) ?? FLAVORS[0];
	const index = FLAVORS.indexOf(flavor);
	const tabs = useRef<(HTMLButtonElement | null)[]>([]);
	const { copied, copy } = useCopy();

	const pick = (key: FlavorKey) =>
		navigate({
			search: { flavor: key === "forest" ? undefined : key },
			replace: true,
			resetScroll: false,
		});

	const onKeyDown = (e: KeyboardEvent) => {
		const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
		if (!step) return;
		e.preventDefault();
		const next = (index + step + FLAVORS.length) % FLAVORS.length;
		pick(FLAVORS[next].key);
		tabs.current[next]?.focus();
	};

	return (
		<PageShell>
			<section className="mx-auto w-full max-w-[1400px] px-4 pt-36 pb-10 md:px-8 md:pt-44">
				<h1
					data-reveal
					className="max-w-[44rem] text-4xl leading-[1.05] font-semibold tracking-[-0.035em] md:text-7xl"
				>
					{m.palette_title()}
				</h1>
				<p
					data-reveal
					className="mt-6 max-w-[38rem] text-lg leading-relaxed text-fg-muted"
				>
					{m.palette_body()}
				</p>

				<div
					data-reveal
					role="tablist"
					aria-label={m.palette_flavors()}
					tabIndex={-1}
					onKeyDown={onKeyDown}
					className="mt-12 flex flex-wrap gap-2"
				>
					{FLAVORS.map((f, i) => {
						const active = f.key === flavor.key;
						return (
							<button
								key={f.key}
								ref={(el) => {
									tabs.current[i] = el;
								}}
								type="button"
								role="tab"
								id={`flavor-tab-${f.key}`}
								aria-selected={active}
								aria-controls="flavor-panel"
								tabIndex={active ? 0 : -1}
								onClick={() => pick(f.key)}
								className={cn(
									"flex items-center gap-3 rounded-full py-2 pr-5 pl-2 text-left transition-[background-color,color,box-shadow] duration-500 ease-fluid",
									active
										? "bg-white/[0.08] text-fg ring-1 ring-hairline-strong"
										: "text-fg-muted ring-1 ring-transparent hover:bg-white/[0.04] hover:text-fg",
								)}
							>
								<span
									aria-hidden
									className="size-8 shrink-0 rounded-full ring-1 ring-white/15"
									style={{
										background: `linear-gradient(135deg, ${f.neutrals.base} 50%, ${f.accents.jade} 50%)`,
									}}
								/>
								<span className="flex flex-col">
									<span className="text-sm font-medium">{f.name}</span>
									<span className="text-xs text-fg-muted">
										{FLAVOR_DESC[f.key]()}
									</span>
								</span>
							</button>
						);
					})}
				</div>
			</section>

			<section className="mx-auto w-full max-w-[1400px] px-4 pb-20 md:px-8">
				<div
					id="flavor-panel"
					role="tabpanel"
					aria-labelledby={`flavor-tab-${flavor.key}`}
					className="bezel"
				>
					<div
						className="bezel-core grid gap-10 p-6 md:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12"
						style={{
							background: flavor.neutrals.base,
							color: flavor.neutrals.text,
							colorScheme: flavor.dark ? "dark" : "light",
						}}
					>
						<div className="flex flex-col gap-10">
							<Swatches
								title={m.palette_accents()}
								flavor={flavor}
								keys={ACCENT_KEYS}
								onCopy={copy}
								large
							/>
							<Swatches
								title={m.palette_neutrals()}
								flavor={flavor}
								keys={NEUTRAL_KEYS}
								onCopy={copy}
							/>
							<p className="text-sm" style={{ color: flavor.neutrals.subtext }}>
								{m.palette_copy_hint()}
							</p>
						</div>

						<div className="flex flex-col gap-8">
							<CodePreview flavor={flavor} />
							<TerminalPreview flavor={flavor} />
						</div>
					</div>
				</div>
				<p aria-live="polite" className="sr-only">
					{copied ? m.palette_copied({ value: copied }) : ""}
				</p>
			</section>

			<section className="mx-auto w-full max-w-[1400px] px-4 pb-28 md:px-8 md:pb-40">
				<div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
					<div data-reveal className="flex flex-col gap-5">
						<h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
							{m.palette_export()}
						</h2>
						<p className="max-w-[28rem] text-fg-muted">
							{m.palette_export_body()}
						</p>
						<div className="flex flex-wrap gap-3">
							<button
								type="button"
								onClick={() => copy(toCss(flavor), `CSS ${flavor.name}`)}
								className={pillClass("primary", "md")}
							>
								<span>{m.palette_copy_css()}</span>
								<PillIcon variant="primary" size="md">
									<CopyIcon size={17} strokeWidth={1.75} />
								</PillIcon>
							</button>
							<button
								type="button"
								onClick={() => copy(toJson(flavor), `JSON ${flavor.name}`)}
								className={pillClass("ghost", "md")}
							>
								<span>{m.palette_copy_json()}</span>
								<PillIcon variant="ghost" size="md">
									<CopyIcon size={17} strokeWidth={1.75} />
								</PillIcon>
							</button>
						</div>
						<Link
							to="/ports"
							className="w-max text-sm text-fg-muted underline decoration-hairline-strong underline-offset-4 transition-colors duration-300 ease-fluid hover:text-fg hover:decoration-jade"
						>
							{m.palette_ports_cta()}
						</Link>
					</div>
					<div data-reveal className="bezel">
						<pre className="bezel-core max-h-[26rem] overflow-auto p-6 font-mono text-[13px] leading-relaxed text-fg-muted">
							<code>{toCss(flavor)}</code>
						</pre>
					</div>
				</div>
			</section>
		</PageShell>
	);
}

function Swatches({
	title,
	flavor,
	keys,
	onCopy,
	large,
}: {
	title: string;
	flavor: Flavor;
	keys: readonly (AccentKey | NeutralKey)[];
	onCopy: (text: string) => void;
	large?: boolean;
}) {
	return (
		<div>
			<h2
				className="mb-4 text-sm font-medium"
				style={{ color: flavor.neutrals.subtext }}
			>
				{title}
			</h2>
			<ul
				className={cn(
					"grid gap-3",
					large ? "grid-cols-3" : "grid-cols-5 sm:grid-cols-10 sm:gap-2",
				)}
			>
				{keys.map((k) => {
					const hex = color(flavor, k);
					return (
						<li key={k}>
							<button
								type="button"
								onClick={() => onCopy(hex)}
								aria-label={`${k} ${hex}`}
								className="group flex w-full flex-col gap-2 rounded-2xl text-left"
							>
								<span
									aria-hidden
									className={cn(
										"w-full rounded-2xl transition-transform duration-500 ease-fluid group-hover:-translate-y-0.5 group-active:scale-[0.97]",
										large ? "h-20" : "h-12",
									)}
									style={{
										background: hex,
										boxShadow: `inset 0 0 0 1px ${flavor.dark ? "rgb(255 255 255 / 0.08)" : "rgb(0 0 0 / 0.08)"}`,
									}}
								/>
								{large ? (
									<span aria-hidden className="flex flex-col px-1">
										<span className="text-sm font-medium capitalize">{k}</span>
										<span
											className="font-mono text-xs"
											style={{ color: flavor.neutrals.subtext }}
										>
											{hex}
										</span>
									</span>
								) : (
									<span
										aria-hidden
										className="truncate px-0.5 font-mono text-[10px]"
										style={{ color: flavor.neutrals.subtext }}
									>
										{k}
									</span>
								)}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

type Seg = [string, AccentKey | NeutralKey];

// A short TypeScript snippet, tokenized by hand, painted with the flavor.
const CODE: Seg[][] = [
	[["// Paint the editor with a flavor", "overlay1"]],
	[
		["import ", "amethyst"],
		["{ flavors } ", "text"],
		["from ", "amethyst"],
		['"./palette"', "jade"],
		[";", "subtext"],
	],
	[],
	[
		["export function ", "amethyst"],
		["accent", "sapphire"],
		["(", "subtext"],
		["name", "text"],
		[": ", "subtext"],
		["string", "citrine"],
		[", ", "subtext"],
		["depth ", "text"],
		["= ", "subtext"],
		["3", "carnelian"],
		[") {", "subtext"],
	],
	[
		["  const ", "amethyst"],
		["shade ", "text"],
		["= ", "subtext"],
		["flavors", "text"],
		[".", "subtext"],
		["forest", "lagoon"],
		["[", "subtext"],
		["name", "text"],
		["];", "subtext"],
	],
	[
		["  return ", "amethyst"],
		["`${", "rhodonite"],
		["shade", "text"],
		["}", "rhodonite"],
		["/", "jade"],
		["${", "rhodonite"],
		["depth", "text"],
		["}`", "rhodonite"],
		[";", "subtext"],
	],
	[["}", "subtext"]],
];

function Window({
	flavor,
	title,
	children,
}: {
	flavor: Flavor;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<figure className="m-0">
			<figcaption
				className="mb-3 text-sm font-medium"
				style={{ color: flavor.neutrals.subtext }}
			>
				{title}
			</figcaption>
			<div
				className="overflow-hidden rounded-2xl"
				style={{
					background: flavor.neutrals.mantle,
					boxShadow: `inset 0 0 0 1px ${flavor.neutrals.surface0}`,
				}}
			>
				<div
					aria-hidden
					className="flex gap-1.5 px-4 py-3"
					style={{ background: flavor.neutrals.crust }}
				>
					{(["garnet", "citrine", "jade"] as const).map((k) => (
						<span
							key={k}
							className="size-2.5 rounded-full"
							style={{ background: flavor.accents[k] }}
						/>
					))}
				</div>
				{children}
			</div>
		</figure>
	);
}

function CodePreview({ flavor }: { flavor: Flavor }) {
	return (
		<Window flavor={flavor} title={m.palette_preview_code()}>
			<pre className="m-0 overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
				<code>
					{CODE.map((line, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: static snippet
						<span key={i} className="block min-h-[1.6em]">
							<span
								aria-hidden
								className="mr-4 inline-block w-4 text-right select-none"
								style={{ color: flavor.neutrals.overlay0 }}
							>
								{i + 1}
							</span>
							{line.map(([text, token], j) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: static snippet
								<span key={j} style={{ color: color(flavor, token) }}>
									{text}
								</span>
							))}
						</span>
					))}
				</code>
			</pre>
		</Window>
	);
}

function TerminalPreview({ flavor }: { flavor: Flavor }) {
	const c = (k: AccentKey | NeutralKey) => ({ color: color(flavor, k) });
	return (
		<Window flavor={flavor} title={m.palette_preview_terminal()}>
			<div className="flex flex-col gap-1 p-5 font-mono text-[13px] leading-relaxed">
				<p className="m-0">
					<span style={c("jade")}>~/nephrite</span>{" "}
					<span style={c("sapphire")}>main</span>{" "}
					<span style={c("subtext")}>$</span>{" "}
					<span style={c("text")}>git status --short</span>
				</p>
				<p className="m-0">
					<span style={c("jade")}> M</span>{" "}
					<span style={c("text")}>palette.json</span>
				</p>
				<p className="m-0">
					<span style={c("garnet")}> D</span>{" "}
					<span style={c("text")}>legacy.css</span>
				</p>
				<p className="m-0">
					<span style={c("citrine")}>??</span>{" "}
					<span style={c("text")}>ports/terminal.toml</span>
				</p>
				<div aria-hidden className="mt-4 grid grid-cols-8 gap-1.5">
					{ANSI.map((a) => (
						<span
							key={a.name}
							title={`${a.name}: ${a.token}`}
							className="h-6 rounded-md"
							style={{ background: color(flavor, a.token) }}
						/>
					))}
				</div>
			</div>
		</Window>
	);
}
