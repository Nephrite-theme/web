import { SiGithub } from "@icons-pack/react-simple-icons";
import { EyeIcon, WindowFrameIcon } from "@solar-icons/react/linear";
import { useRef } from "react";
import { Mark } from "#/components/ui/Logo";
import { PillLink } from "#/components/ui/PillLink";
import { gsap, MOTION_OK, useGSAP } from "#/lib/gsap";
import { LINKS } from "#/lib/site";
import { m } from "#/paraglide/messages";

export function Details() {
	const root = useRef<HTMLElement>(null);

	// The stone turns slowly as the section passes: a quiet nod to the logo.
	useGSAP(
		() => {
			const mm = gsap.matchMedia();
			mm.add(MOTION_OK, () => {
				gsap.fromTo(
					"[data-stone]",
					{ rotate: -8, yPercent: 6 },
					{
						rotate: 8,
						yPercent: -6,
						ease: "none",
						scrollTrigger: {
							trigger: root.current,
							start: "top bottom",
							end: "bottom top",
							scrub: 0.8,
						},
					},
				);
			});
		},
		{ scope: root },
	);

	const surfaces = [
		m.surface_tabs(),
		m.surface_toolbar(),
		m.surface_omnibox(),
		m.surface_ntp(),
		m.surface_bookmarks(),
	];

	return (
		<section
			ref={root}
			id="details"
			className="relative mx-auto w-full max-w-[1400px] scroll-mt-24 px-4 py-24 md:px-8 md:py-36"
		>
			<h2
				data-reveal
				className="max-w-[40rem] text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-6xl"
			>
				{m.details_title()}
			</h2>

			<div className="mt-14 grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12 lg:grid-rows-2">
				{/* Eye comfort: the one cell with real imagery. */}
				<article data-reveal className="bezel lg:col-span-7 lg:row-span-2">
					<div
						className="bezel-core relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden p-8 md:p-10"
						style={{
							background:
								"radial-gradient(80% 70% at 70% 30%, rgb(61 184 122 / 0.28), transparent 70%), linear-gradient(160deg, #13261b, #0c150f)",
						}}
					>
						<div
							data-stone
							className="pointer-events-none absolute -top-6 -right-10 w-[62%] max-w-[26rem] drop-shadow-[0_40px_60px_rgb(2_10_6/0.7)] md:top-4 md:right-4"
						>
							<Mark className="w-full" />
						</div>
						<div className="relative max-w-[26rem]">
							<EyeIcon
								size={26}
								strokeWidth={1.5}
								className="mb-5 text-jade-soft"
							/>
							<h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
								{m.detail_eyes_title()}
							</h3>
							<p className="mt-3 leading-relaxed text-fg-muted">
								{m.detail_eyes_body()}
							</p>
						</div>
					</div>
				</article>

				<article data-reveal className="bezel lg:col-span-5">
					<div className="bezel-core flex h-full flex-col gap-6 p-8 md:p-10">
						<WindowFrameIcon
							size={26}
							strokeWidth={1.5}
							className="text-jade-soft"
						/>
						<div>
							<h3 className="text-2xl font-semibold tracking-tight">
								{m.detail_surfaces_title()}
							</h3>
							<p className="mt-3 leading-relaxed text-fg-muted">
								{m.detail_surfaces_body()}
							</p>
						</div>
						<ul className="mt-auto flex flex-wrap gap-2">
							{surfaces.map((s) => (
								<li
									key={s}
									className="rounded-full bg-jade/[0.08] px-3.5 py-1.5 text-sm text-jade-soft ring-1 ring-jade/15"
								>
									{s}
								</li>
							))}
						</ul>
					</div>
				</article>

				<article data-reveal className="bezel lg:col-span-5">
					<div className="bezel-core relative flex h-full flex-col gap-6 overflow-hidden bg-stone-800 p-8 md:p-10">
						<SiGithub
							aria-hidden
							size={220}
							className="pointer-events-none absolute -right-12 -bottom-16 text-white/[0.035]"
						/>
						<div className="relative">
							<h3 className="text-2xl font-semibold tracking-tight">
								{m.detail_open_title()}
							</h3>
							<p className="mt-3 max-w-[24rem] leading-relaxed text-fg-muted">
								{m.detail_open_body()}
							</p>
						</div>
						<div className="relative mt-auto">
							<PillLink
								href={LINKS.github}
								variant="ghost"
								size="sm"
								leading={<SiGithub size={14} aria-hidden />}
							>
								{m.cta_github()}
							</PillLink>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
}
