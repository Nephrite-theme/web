import { SiGithub } from "@icons-pack/react-simple-icons";
import { useRef } from "react";
import { InstallMenu } from "#/components/ui/InstallMenu";
import { PillLink } from "#/components/ui/PillLink";
import { Shot } from "#/components/ui/Shot";
import { gsap, MOTION_OK, useGSAP } from "#/lib/gsap";
import { LINKS, VARIANTS } from "#/lib/site";
import { m } from "#/paraglide/messages";

export function Hero() {
	const root = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const mm = gsap.matchMedia();
			mm.add({ motion: MOTION_OK, desktop: "(min-width: 1024px)" }, (ctx) => {
				const { motion, desktop } = ctx.conditions as {
					motion: boolean;
					desktop: boolean;
				};
				if (!motion) return;
				// The intro itself is CSS (styles.css) so it paints before hydration.
				// The screenshot drifts and straightens as the page scrolls away.
				gsap.to("[data-hero-parallax]", {
					yPercent: desktop ? -12 : -4,
					rotate: desktop ? 2 : 0,
					ease: "none",
					scrollTrigger: {
						trigger: root.current,
						start: "top top",
						end: "bottom top",
						scrub: 0.6,
					},
				});
			});
		},
		{ scope: root },
	);

	return (
		<section
			ref={root}
			id="top"
			className="relative mx-auto grid min-h-[100dvh] w-full max-w-[1400px] items-center gap-14 px-4 pt-28 pb-20 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-24"
		>
			<div className="relative z-10 max-w-[40rem]">
				<h1 className="text-[2.15rem] leading-[1.04] font-semibold tracking-[-0.035em] sm:text-6xl lg:text-[4.75rem]">
					<span className="block overflow-hidden pb-1">
						<span data-hero-line className="block">
							{m.hero_title_a()}
						</span>
					</span>
					<span className="block overflow-hidden pb-2">
						<span
							data-hero-line
							className="block text-fg-muted"
							style={{ "--i": 1 } as React.CSSProperties}
						>
							{m.hero_title_b()}
						</span>
					</span>
				</h1>

				<p
					data-hero-fade
					className="mt-7 max-w-[34rem] text-lg leading-relaxed text-fg-muted md:text-xl"
				>
					{m.hero_body()}
				</p>

				<div
					data-hero-fade
					className="mt-10 flex flex-wrap items-center gap-3"
					style={{ "--i": 1 } as React.CSSProperties}
				>
					<InstallMenu />
					<PillLink
						href={LINKS.github}
						variant="ghost"
						leading={<SiGithub size={16} aria-hidden />}
					>
						{m.cta_github()}
					</PillLink>
				</div>
			</div>

			<div data-hero-parallax className="relative will-change-transform">
				<div data-hero-shot className="bezel">
					<div className="bezel-core">
						<Shot variant={VARIANTS[0]} priority />
					</div>
				</div>
			</div>
		</section>
	);
}
