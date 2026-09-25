import { useEffect, useRef, useState } from "react";
import LocaleSwitcher from "#/components/LocaleSwitcher";
import { Logo } from "#/components/ui/Logo";
import { PillLink } from "#/components/ui/PillLink";
import { EASE_OUT, gsap, MOTION_OK, useGSAP } from "#/lib/gsap";
import { LINKS } from "#/lib/site";
import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

const sections = [
	{ id: "variants", label: () => m.nav_variants() },
	{ id: "details", label: () => m.nav_details() },
	{ id: "roadmap", label: () => m.nav_roadmap() },
];

export function Nav() {
	const [open, setOpen] = useState(false);
	const root = useRef<HTMLDivElement>(null);
	const tl = useRef<gsap.core.Timeline>(null);

	useGSAP(
		() => {
			const mm = gsap.matchMedia();
			mm.add(
				{ motion: MOTION_OK, reduce: "(prefers-reduced-motion: reduce)" },
				(ctx) => {
					const { motion } = ctx.conditions as { motion: boolean };
					if (motion) {
						gsap.to("[data-nav-pill]", {
							y: 0,
							opacity: 1,
							duration: 1.2,
							ease: EASE_OUT,
							delay: 0.2,
						});
					}
					tl.current = gsap
						.timeline({ paused: true })
						.set("[data-nav-overlay]", { autoAlpha: 1 })
						.fromTo(
							"[data-nav-overlay]",
							{ opacity: 0 },
							{ opacity: 1, duration: motion ? 0.5 : 0.01, ease: "power2.out" },
						)
						.fromTo(
							"[data-nav-item]",
							{ yPercent: motion ? 110 : 0, opacity: 0 },
							{
								yPercent: 0,
								opacity: 1,
								duration: motion ? 0.9 : 0.01,
								ease: EASE_OUT,
								stagger: motion ? 0.06 : 0,
							},
							motion ? "-=0.25" : 0,
						);
				},
			);
		},
		{ scope: root },
	);

	useEffect(() => {
		if (!tl.current) return;
		if (open) tl.current.timeScale(1).play();
		else tl.current.timeScale(1.6).reverse();

		document.documentElement.style.overflow = open ? "hidden" : "";
		if (!open) return;
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	return (
		<div ref={root}>
			<header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 md:pt-6">
				<nav
					data-nav-pill
					className="glass pointer-events-auto flex w-full max-w-[960px] items-center justify-between gap-6 rounded-full bg-stone-900/70 py-2 pr-2 pl-5 ring-1 ring-hairline backdrop-blur-xl"
				>
					<a href="#top" aria-label={m.nav_home()} className="shrink-0">
						<Logo />
					</a>

					<ul className="hidden items-center gap-1 md:flex">
						{sections.map((s) => (
							<li key={s.id}>
								<a
									href={`#${s.id}`}
									className="rounded-full px-3.5 py-2 text-sm text-fg-muted transition-colors duration-300 ease-fluid hover:text-fg"
								>
									{s.label()}
								</a>
							</li>
						))}
					</ul>

					<div className="flex items-center gap-2">
						<LocaleSwitcher className="hidden md:inline-flex" />
						<PillLink
							href={LINKS.chrome}
							size="sm"
							className="hidden md:inline-flex"
						>
							{m.cta_chrome()}
						</PillLink>

						<button
							type="button"
							onClick={() => setOpen((v) => !v)}
							aria-expanded={open}
							aria-controls="mobile-menu"
							aria-label={open ? m.nav_menu_close() : m.nav_menu_open()}
							className="relative z-50 flex size-10 items-center justify-center rounded-full bg-white/[0.05] ring-1 ring-hairline md:hidden"
						>
							<span
								className={cn(
									"absolute h-px w-4 bg-fg transition-transform duration-500 ease-fluid",
									open ? "rotate-45" : "-translate-y-[3px]",
								)}
							/>
							<span
								className={cn(
									"absolute h-px w-4 bg-fg transition-transform duration-500 ease-fluid",
									open ? "-rotate-45" : "translate-y-[3px]",
								)}
							/>
						</button>
					</div>
				</nav>
			</header>

			<div
				id="mobile-menu"
				data-nav-overlay
				aria-hidden={!open}
				inert={!open}
				className="glass invisible fixed inset-0 z-30 flex flex-col justify-between bg-stone-950/85 px-6 pt-32 pb-10 backdrop-blur-2xl md:hidden"
			>
				<ul className="flex flex-col gap-2">
					{sections.map((s) => (
						<li key={s.id} className="overflow-hidden">
							<a
								data-nav-item
								href={`#${s.id}`}
								onClick={() => setOpen(false)}
								className="block py-1 text-5xl font-medium tracking-tight"
							>
								{s.label()}
							</a>
						</li>
					))}
				</ul>
				<div className="flex flex-col items-start gap-6 overflow-hidden">
					<div data-nav-item>
						<LocaleSwitcher />
					</div>
					<div data-nav-item>
						<PillLink href={LINKS.chrome}>{m.cta_chrome()}</PillLink>
					</div>
				</div>
			</div>
		</div>
	);
}
