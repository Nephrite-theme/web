import type { Variant } from "#/lib/site";
import { cn } from "#/lib/utils";

// Split disc: top half is the frame color, bottom half the toolbar color.
export function Swatch({
	variant,
	className,
}: {
	variant: Variant;
	className?: string;
}) {
	return (
		<span
			aria-hidden
			className={cn(
				"inline-block size-5 shrink-0 rounded-full ring-1 ring-white/15",
				className,
			)}
			style={{
				background: `linear-gradient(180deg, ${variant.frame} 50%, ${variant.toolbar} 50%)`,
			}}
		/>
	);
}
