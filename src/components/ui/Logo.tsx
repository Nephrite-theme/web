import { useId } from "react";
import { cn } from "#/lib/utils";

const PEBBLE =
	"M246 78C356 66 446 138 446 246C446 360 360 440 250 436C142 432 66 360 66 256C66 158 140 90 246 78Z";

// The banded stone: one band per theme variant (Mint, Jade, Forest). Seams are
// masked out so the mark sits on any background. Mirrors public/logo.svg.
export function Mark({
	className,
	label,
}: {
	className?: string;
	label?: string;
}) {
	// useId output can hold characters that break url(#…) references.
	const id = `m${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
	const clip = `${id}-clip`;
	const mask = `${id}-mask`;

	return (
		<svg
			viewBox="0 0 512 512"
			className={className}
			role={label ? "img" : undefined}
			aria-label={label}
			aria-hidden={label ? undefined : true}
		>
			<defs>
				<clipPath id={clip}>
					<path d={PEBBLE} />
				</clipPath>
				<mask
					id={mask}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="512"
					height="512"
				>
					<rect width="512" height="512" fill="#fff" />
					<g fill="none" stroke="#000" strokeWidth="18">
						<path d="M0 214C190 130 330 262 512 178" />
						<path d="M0 336C190 252 330 384 512 300" />
					</g>
				</mask>
			</defs>
			<g clipPath={`url(#${clip})`} mask={`url(#${mask})`}>
				<rect width="512" height="512" fill="#1f6b45" />
				<path
					d="M0 214C190 130 330 262 512 178V300C330 384 190 252 0 336Z"
					fill="#3db87a"
				/>
				<path d="M0 0H512V178C330 262 190 130 0 214Z" fill="#6bc4a8" />
			</g>
		</svg>
	);
}

// "nephrite" set in Geist, with a jade pebble in place of the i's dot;
// `plain` keeps the regular i for small or busy placements like the nav.
export function Wordmark({
	className,
	plain,
}: {
	className?: string;
	plain?: boolean;
}) {
	const base = cn(
		"inline-flex items-baseline font-semibold leading-none tracking-[-0.05em]",
		className,
	);

	if (plain) return <span className={base}>nephrite</span>;

	return (
		<span role="img" aria-label="Nephrite" className={base}>
			<span aria-hidden>nephr</span>
			<span aria-hidden className="relative inline-block">
				ı
				<svg
					aria-hidden
					viewBox="0 0 512 512"
					className="absolute top-[-0.02em] left-1/2 size-[0.26em] -translate-x-1/2 text-jade"
				>
					<path d={PEBBLE} fill="currentColor" />
				</svg>
			</span>
			<span aria-hidden>te</span>
		</span>
	);
}

// Horizontal lockup: symbol + wordmark.
export function Lockup({ className }: { className?: string }) {
	return (
		<span className={cn("inline-flex items-center gap-[0.35em]", className)}>
			<Mark className="size-[1.25em]" />
			<Wordmark />
		</span>
	);
}
