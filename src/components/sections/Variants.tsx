import { type KeyboardEvent, useRef, useState } from "react";
import { PillLink } from "#/components/ui/PillLink";
import { Shot } from "#/components/ui/Shot";
import { Swatch } from "#/components/ui/Swatch";
import { EASE_OUT, gsap, MOTION_OK, useGSAP } from "#/lib/gsap";
import { VARIANTS } from "#/lib/site";
import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

export function Variants() {
	const [active, setActive] = useState(0);
	const root = useRef<HTMLElement>(null);
	const tabs = useRef<(HTMLButtonElement | null)[]>([]);
	const variant = VARIANTS[active];

	// Crossfade the stacked screenshots and re-enter the info panel on change.
	useGSAP(
		() => {
			const motion = window.matchMedia(MOTION_OK).matches;
			const d = motion ? 1 : 0;
			gsap.to("[data-variant-shot]", {
				opacity: (i) => (i === active ? 1 : 0),
				scale: (i) => (i === active ? 1 : 1.03),
				duration: 0.9 * d,
				ease: EASE_OUT,
			});
			gsap.fromTo(
				"[data-variant-info] > *",
				{ opacity: 0, y: motion ? 16 : 0 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8 * d,
					ease: EASE_OUT,
					stagger: 0.05 * d,
				},
			);
		},
		{ scope: root, dependencies: [active] },
	);

	const onKeyDown = (e: KeyboardEvent) => {
		const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
		if (!step) return;
		e.preventDefault();
		const next = (active + step + VARIANTS.length) % VARIANTS.length;
		setActive(next);
		tabs.current[next]?.focus();
	};

	const swatches = [
		{ label: m.swatch_frame(), value: variant.frame },
		{ label: m.swatch_toolbar(), value: variant.toolbar },
		{ label: m.swatch_text(), value: variant.tabText },
	];

	return (
		<section
			ref={root}
			id="variants"
			className="relative mx-auto w-full max-w-[1400px] scroll-mt-24 px-4 py-24 md:px-8 md:py-36"
		>
			<div data-reveal className="max-w-[44rem]">
				<h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-6xl">
					{m.variants_title()}
				</h2>
				<p className="mt-5 max-w-[34rem] text-lg leading-relaxed text-fg-muted">
					{m.variants_body()}
				</p>
			</div>

			{/* Scrolls horizontally when more variants are added. */}
			<div
				data-reveal
				role="tablist"
				aria-label={m.variants_tablist()}
				tabIndex={-1}
				onKeyDown={onKeyDown}
				className="-mx-4 mt-12 flex snap-x gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:px-0"
			>
				{VARIANTS.map((v, i) => (
					<button
						key={v.key}
						ref={(el) => {
							tabs.current[i] = el;
						}}
						type="button"
						role="tab"
						id={`variant-tab-${v.key}`}
						aria-selected={i === active}
						aria-controls="variant-panel"
						tabIndex={i === active ? 0 : -1}
						onClick={() => setActive(i)}
						className={cn(
							"flex shrink-0 snap-start items-center gap-3 rounded-full py-2 pr-5 pl-2 text-sm font-medium",
							"transition-[background-color,color,box-shadow] duration-500 ease-fluid",
							i === active
								? "bg-white/[0.08] text-fg ring-1 ring-hairline-strong"
								: "text-fg-muted ring-1 ring-transparent hover:bg-white/[0.04] hover:text-fg",
						)}
					>
						<Swatch variant={v} className="size-7" />
						{v.name}
					</button>
				))}
			</div>

			<div
				id="variant-panel"
				role="tabpanel"
				aria-labelledby={`variant-tab-${variant.key}`}
				className="mt-8 grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-end lg:gap-12"
			>
				<div data-reveal className="bezel">
					<div className="bezel-core relative">
						{VARIANTS.map((v, i) => (
							<div
								key={v.key}
								data-variant-shot
								aria-hidden={i !== active}
								className={cn(i === 0 ? "relative" : "absolute inset-0")}
								style={{ opacity: i === 0 ? 1 : 0 }}
							>
								<Shot variant={v} />
							</div>
						))}
					</div>
				</div>

				<div data-reveal>
					<div
						data-variant-info
						key={variant.key}
						className="flex flex-col gap-8"
					>
						<div>
							<h3 className="text-3xl font-semibold tracking-tight">
								{variant.name}
							</h3>
							<p className="mt-2 text-fg-muted">{variant.description()}</p>
						</div>

						<dl className="grid grid-cols-3 gap-3">
							{swatches.map((s) => (
								<div key={s.label} className="flex flex-col gap-2.5">
									<dt className="flex flex-col gap-2.5 text-xs text-fg-muted">
										<span
											aria-hidden
											className="h-16 w-full rounded-2xl ring-1 ring-white/10 lg:aspect-square lg:h-auto"
											style={{ background: s.value }}
										/>
										{s.label}
									</dt>
									<dd className="font-mono text-xs text-fg">{s.value}</dd>
								</div>
							))}
						</dl>

						<div>
							<PillLink href={variant.store}>{m.cta_add()}</PillLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
