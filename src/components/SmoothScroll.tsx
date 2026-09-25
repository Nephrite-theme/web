import { type ReactNode, useEffect } from "react";
import {
	MOTION_OK,
	NAV_OFFSET,
	ScrollSmoother,
	ScrollTrigger,
	useGSAP,
} from "#/lib/gsap";

// Rendered as the first child of the content layer so its layout effect runs
// before any section creates a ScrollTrigger. Pinned triggers then pick up the
// smoother's transform-based pinning instead of position: fixed.
function SmootherInit() {
	useGSAP(() => {
		if (!window.matchMedia(MOTION_OK).matches) return;
		const smoother = ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			smooth: 1.1,
			smoothTouch: false,
		});
		return () => smoother.kill();
	});

	// Re-measure once fonts and images have settled.
	useEffect(() => {
		const refresh = () => ScrollTrigger.refresh();
		document.fonts?.ready.then(refresh);
		window.addEventListener("load", refresh);
		return () => window.removeEventListener("load", refresh);
	}, []);

	return null;
}

// Scrolls to a section below the floating nav, with or without the glide.
function scrollToTarget(target: HTMLElement, smooth: boolean) {
	const smoother = ScrollSmoother.get();
	if (smoother) {
		// Passing a pinned element to scrollTo() makes ScrollSmoother measure
		// it mid-pin and land at the wrong spot (0 or the page end). Resolve
		// a number instead: the pin start for pinned sections, else offset().
		const pin = ScrollTrigger.getAll().find((st) => st.pin === target);
		const y = pin ? pin.start : smoother.offset(target, `top ${NAV_OFFSET}px`);
		smoother.scrollTo(y, smooth);
	} else {
		target.scrollIntoView({
			behavior:
				smooth && window.matchMedia(MOTION_OK).matches ? "smooth" : "auto",
		});
	}
	// Move keyboard focus with the jump so Tab continues from the section.
	if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
	target.focus({ preventScroll: true });
}

// Inertial scrolling via GSAP ScrollSmoother. Fixed UI (nav, overlays, grain)
// must live outside this wrapper, since the content layer is transformed.
export function SmoothScroll({ children }: { children: ReactNode }) {
	// In-page anchors: glide to the section and clear the floating nav.
	useEffect(() => {
		const onClick = (e: MouseEvent) => {
			if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) {
				return;
			}
			const link = (e.target as Element).closest<HTMLAnchorElement>(
				'a[href^="#"]',
			);
			const id = link?.getAttribute("href")?.slice(1);
			if (!id) return;
			const target = document.getElementById(id);
			if (!target) return;
			e.preventDefault();
			scrollToTarget(target, true);
			history.replaceState(null, "", `#${id}`);
		};
		document.addEventListener("click", onClick);

		// Arriving with a hash (e.g. /#details from another page): the router's
		// own hash scroll runs before the smoother and pinned sections exist, so
		// jump once everything is measured.
		const id = decodeURIComponent(window.location.hash.slice(1));
		const target = id ? document.getElementById(id) : null;
		const timer = target
			? window.setTimeout(() => {
					ScrollTrigger.refresh();
					scrollToTarget(target, false);
				}, 120)
			: undefined;

		return () => {
			document.removeEventListener("click", onClick);
			window.clearTimeout(timer);
		};
	}, []);

	return (
		<div id="smooth-wrapper">
			<div id="smooth-content">
				<SmootherInit />
				{children}
			</div>
		</div>
	);
}
