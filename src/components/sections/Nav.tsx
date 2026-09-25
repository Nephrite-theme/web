import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode, useEffect, useRef, useState } from "react";
import LocaleSwitcher from "#/components/LocaleSwitcher";
import { InstallMenu } from "#/components/ui/InstallMenu";
import { Wordmark } from "#/components/ui/Logo";
import { Swatch } from "#/components/ui/Swatch";
import { BROWSER_COPY, installUrl, useBrowser } from "#/lib/browser";
import { EASE_OUT, gsap, MOTION_OK, ScrollSmoother, useGSAP } from "#/lib/gsap";
import { VARIANTS } from "#/lib/site";
import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

const sections = [
	{ id: "variants", label: () => m.nav_variants() },
	{ id: "details", label: () => m.nav_details() },
	{ id: "roadmap", label: () => m.nav_roadmap() },
];

// Home sections: a plain hash on the home page (SmoothScroll glides to it),
// a route link to "/#id" from any other page.
function SectionLink({
	id,
	onHome,
	className,
	onClick,
	children,
	...rest
}: {
	id: string;
	onHome: boolean;
	className?: string;
	onClick?: () => void;
	children: ReactNode;
	"data-nav-item"?: boolean;
}) {
	if (onHome) {
		return (
			<a href={`#${id}`} className={className} onClick={onClick} {...rest}>
				{children}
			</a>
		);
	}
	return (
		<Link
			to="/"
			hash={id === "top" ? undefined : id}
			className={className}
			onClick={onClick}
			{...rest}
		>
			{children}
		</Link>
	);
}

export function Nav() {
	const [open, setOpen] = useState(false);
	const root = useRef<HTMLDivElement>(null);
	const tl = useRef<gsap.core.Timeline>(null);
	const toggle = useRef<HTMLButtonElement>(null);
	const wasOpen = useRef(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const onHome = pathname === "/";
	const browser = useBrowser();
	const onPorts = pathname.startsWith("/ports");
	const onPalette = pathname.startsWith("/palette");
	const pages = [
		{ to: "/ports" as const, label: m.nav_ports(), current: onPorts },
		{ to: "/palette" as const, label: m.nav_palette(), current: onPalette },
	];

	useGSAP(
		() => {
			const mm = gsap.matchMedia();
			mm.add(
				{ motion: MOTION_OK, reduce: "(prefers-reduced-motion: reduce)" },
				(ctx) => {
					const { motion } = ctx.conditions as { motion: boolean };
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

		// Freeze page scroll behind the overlay (smoother when active, else native).
		const smoother = ScrollSmoother.get();
		if (smoother) smoother.paused(open);
		else document.documentElement.style.overflow = open ? "hidden" : "";
		// Keep focus inside the overlay while it is open, then hand it back.
		const page = document.getElementById("smooth-wrapper");
		page?.toggleAttribute("inert", open);
		if (open) {
			// The overlay turns visible on the timeline's first tick; focus after it.
			const first = root.current?.querySelector<HTMLElement>("[data-nav-item]");
			window.setTimeout(() => first?.focus(), 60);
		} else if (wasOpen.current) {
			toggle.current?.focus();
		}
		wasOpen.current = open;

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
					className="glass pointer-events-auto flex w-full max-w-[1040px] items-center justify-between gap-6 rounded-full lg:grid lg:grid-cols-[1fr_auto_1fr] bg-stone-900/70 p-2 ring-1 ring-hairline backdrop-blur-xl"
				>
					<SectionLink
						id="top"
						onHome={onHome}
						className="shrink-0 justify-self-start pl-3"
					>
						<span className="sr-only">{m.nav_home()}</span>
						<Wordmark plain className="text-[22px]" />
					</SectionLink>

					<ul className="hidden items-center gap-1 lg:flex">
						{sections.map((s) => (
							<li key={s.id}>
								<SectionLink
									id={s.id}
									onHome={onHome}
									className="rounded-full px-3.5 py-2 text-sm text-fg-muted transition-colors duration-300 ease-fluid hover:text-fg"
								>
									{s.label()}
								</SectionLink>
							</li>
						))}
						{pages.map((p) => (
							<li key={p.to}>
								<Link
									to={p.to}
									aria-current={p.current ? "page" : undefined}
									className={cn(
										"rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ease-fluid hover:text-fg",
										p.current ? "bg-white/[0.06] text-fg" : "text-fg-muted",
									)}
								>
									{p.label}
								</Link>
							</li>
						))}
					</ul>

					<div className="flex items-center gap-2 justify-self-end">
						<LocaleSwitcher className="hidden lg:inline-flex" />
						<InstallMenu size="sm" align="end" className="hidden lg:block" />

						<button
							ref={toggle}
							type="button"
							onClick={() => setOpen((v) => !v)}
							aria-expanded={open}
							aria-controls="mobile-menu"
							aria-label={open ? m.nav_menu_close() : m.nav_menu_open()}
							className="relative z-50 flex size-10 items-center justify-center rounded-full bg-white/[0.05] ring-1 ring-hairline lg:hidden"
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
				className="glass invisible fixed inset-0 z-30 flex flex-col justify-between bg-stone-950/85 px-6 pt-32 pb-10 backdrop-blur-2xl lg:hidden"
			>
				<ul className="flex flex-col gap-2">
					{sections.map((s) => (
						<li key={s.id} className="overflow-hidden">
							<SectionLink
								data-nav-item
								id={s.id}
								onHome={onHome}
								onClick={() => setOpen(false)}
								className="block py-1 text-5xl font-medium tracking-tight"
							>
								{s.label()}
							</SectionLink>
						</li>
					))}
					{pages.map((p) => (
						<li key={p.to} className="overflow-hidden">
							<Link
								data-nav-item
								to={p.to}
								aria-current={p.current ? "page" : undefined}
								onClick={() => setOpen(false)}
								className="block py-1 text-5xl font-medium tracking-tight"
							>
								{p.label}
							</Link>
						</li>
					))}
				</ul>
				<div className="flex flex-col items-start gap-6">
					<div data-nav-item>
						<LocaleSwitcher />
					</div>
					<ul className="flex w-full flex-col gap-2">
						{VARIANTS.map((v) => (
							<li key={v.key} data-nav-item>
								<a
									href={installUrl(v, browser)}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 rounded-2xl bg-white/[0.04] px-4 py-3 ring-1 ring-hairline"
								>
									<Swatch variant={v} className="size-6" />
									<span className="flex-1 text-sm font-medium">{v.name}</span>
									<span className="text-xs text-jade-soft">
										{BROWSER_COPY[browser].add()}
									</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
