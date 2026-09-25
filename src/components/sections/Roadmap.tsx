import {
	SiFirefoxbrowser,
	SiGooglechrome,
	SiSpotify,
} from "@icons-pack/react-simple-icons";
import { CodeSquareIcon, FileTerminalIcon } from "@solar-icons/react/linear";
import { type ComponentType, useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "#/lib/gsap";
import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

type Status = "available" | "next" | "planned";

type Item = {
	key: string;
	icon: ComponentType<{
		size?: number;
		className?: string;
		"aria-hidden"?: boolean;
	}>;
	title: () => string;
	body: () => string;
	status: Status;
};

const ITEMS: Item[] = [
	{
		key: "chrome",
		icon: SiGooglechrome,
		title: () => m.rm_chrome_title(),
		body: () => m.rm_chrome_body(),
		status: "available",
	},
	{
		key: "firefox",
		icon: SiFirefoxbrowser,
		title: () => m.rm_firefox_title(),
		body: () => m.rm_firefox_body(),
		status: "next",
	},
	{
		key: "vscode",
		icon: CodeSquareIcon,
		title: () => m.rm_vscode_title(),
		body: () => m.rm_vscode_body(),
		status: "next",
	},
	{
		key: "spotify",
		icon: SiSpotify,
		title: () => m.rm_spotify_title(),
		body: () => m.rm_spotify_body(),
		status: "planned",
	},
	{
		key: "terminal",
		icon: FileTerminalIcon,
		title: () => m.rm_terminal_title(),
		body: () => m.rm_terminal_body(),
		status: "planned",
	},
];

const statusLabel: Record<Status, () => string> = {
	available: () => m.status_available(),
	next: () => m.status_next(),
	planned: () => m.status_planned(),
};

export function Roadmap() {
	const wrap = useRef<HTMLElement>(null);
	const track = useRef<HTMLDivElement>(null);

	// Desktop: pin the section and pan the track as the page scrolls, so the
	// roadmap reads left to right like a timeline. Elsewhere it simply stacks.
	useGSAP(
		() => {
			const mm = gsap.matchMedia();
			mm.add(`${MOTION_OK} and (min-width: 1024px)`, () => {
				const el = track.current;
				if (!el) return;
				gsap.set(el.parentElement, { overflow: "visible" });
				const distance = () => el.scrollWidth - el.clientWidth;
				gsap.to(el, {
					x: () => -distance(),
					ease: "none",
					scrollTrigger: {
						trigger: wrap.current,
						start: "top top",
						end: () => `+=${distance()}`,
						pin: true,
						scrub: 1,
						invalidateOnRefresh: true,
					},
				});
			});
		},
		{ scope: wrap },
	);

	return (
		<section
			ref={wrap}
			id="roadmap"
			className="relative flex min-h-[100dvh] scroll-mt-24 flex-col justify-center overflow-hidden py-24 md:py-36 lg:py-24"
		>
			<div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
				<p
					data-reveal
					className="mb-6 inline-flex rounded-full bg-jade/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-jade-soft ring-1 ring-jade/20"
				>
					{m.roadmap_eyebrow()}
				</p>
				<h2
					data-reveal
					className="max-w-[40rem] text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-6xl"
				>
					{m.roadmap_title()}
				</h2>
			</div>

			{/* Native horizontal scroll is the fallback when the pan is off. */}
			<div className="mt-14 lg:overflow-x-auto lg:[scrollbar-width:none]">
				<div
					ref={track}
					className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-8 lg:flex lg:max-w-none lg:gap-5 lg:pr-[max(2rem,calc((100vw-1400px)/2+2rem))] lg:pl-[max(2rem,calc((100vw-1400px)/2+2rem))]"
				>
					{ITEMS.map((item) => {
						const Icon = item.icon;
						const live = item.status === "available";
						return (
							<article
								key={item.key}
								data-reveal
								className="bezel lg:w-[25rem] lg:shrink-0"
							>
								<div
									className="bezel-core flex h-full min-h-[18rem] flex-col p-8 lg:min-h-[22rem]"
									style={
										live
											? {
													background:
														"radial-gradient(90% 80% at 0% 0%, rgb(61 184 122 / 0.22), transparent 70%), var(--stone-850)",
												}
											: undefined
									}
								>
									<div className="flex items-center justify-between">
										<Icon
											aria-hidden
											size={28}
											className={live ? "text-jade-soft" : "text-fg-muted"}
										/>
										<span
											className={cn(
												"rounded-full px-3 py-1 text-xs font-medium",
												live
													? "bg-jade text-jade-ink"
													: "bg-white/[0.05] text-fg-muted ring-1 ring-hairline",
											)}
										>
											{statusLabel[item.status]()}
										</span>
									</div>
									<div className="mt-auto pt-16">
										<h3 className="text-3xl font-semibold tracking-tight">
											{item.title()}
										</h3>
										<p className="mt-3 leading-relaxed text-fg-muted">
											{item.body()}
										</p>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
