import { EASE_OUT, gsap, MOTION_OK, ScrollTrigger, useGSAP } from "#/lib/gsap";

// Fades up every [data-reveal] element once as it enters the viewport.
// Initial hidden state lives in CSS behind `.motion-ok`, so nothing is
// hidden without JS or under reduced motion.
export function Reveals() {
	useGSAP(() => {
		const mm = gsap.matchMedia();
		mm.add(MOTION_OK, () => {
			ScrollTrigger.batch("[data-reveal]", {
				start: "top 88%",
				once: true,
				onEnter: (els) =>
					gsap.to(els, {
						opacity: 1,
						y: 0,
						duration: 1.2,
						ease: EASE_OUT,
						stagger: 0.09,
					}),
			});
		});
	});

	return null;
}
