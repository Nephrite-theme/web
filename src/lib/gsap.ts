import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
	// Dev-only handle for inspecting timelines from the console.
	if (import.meta.env.DEV) {
		Object.assign(window, { gsap, ScrollTrigger, ScrollSmoother });
	}
}

// Shared easing so every tween on the page carries the same weight.
export const EASE_OUT = "expo.out";
export const EASE_INOUT = "power3.inOut";

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

// Clearance for the floating nav when jumping to a section.
export const NAV_OFFSET = 96;

export { gsap, ScrollSmoother, ScrollTrigger, useGSAP };
