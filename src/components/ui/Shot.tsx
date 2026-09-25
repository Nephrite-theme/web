import { Mark } from "#/components/ui/Logo";
import type { Variant } from "#/lib/site";
import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

// Screenshot slot. Until real captures land in public/shots, renders a
// clearly labelled placeholder tinted with the variant's own colors.
export function Shot({
	variant,
	className,
	priority,
}: {
	variant: Variant;
	className?: string;
	priority?: boolean;
}) {
	if (variant.shot) {
		return (
			<img
				src={variant.shot}
				alt={m.shot_alt({ name: variant.name })}
				width={1918}
				height={1030}
				loading={priority ? "eager" : "lazy"}
				fetchPriority={priority ? "high" : "auto"}
				className={cn("aspect-[1918/1030] w-full object-cover", className)}
			/>
		);
	}

	return (
		<div
			role="img"
			aria-label={m.shot_pending({ name: variant.name })}
			className={cn(
				"relative flex aspect-[1918/1030] w-full items-center justify-center",
				className,
			)}
			style={{
				background: `linear-gradient(180deg, ${variant.frame} 0 12%, ${variant.toolbar} 12% 100%)`,
			}}
		>
			<Mark className="size-20 opacity-40 md:size-28" />
			<span
				className="absolute bottom-3 left-1/2 max-w-[90%] -translate-x-1/2 truncate whitespace-nowrap rounded-full px-3 py-1 font-mono text-[10px] md:bottom-4 md:text-[11px]"
				style={{
					color: variant.dark
						? "rgb(255 255 255 / 0.55)"
						: "rgb(17 31 23 / 0.6)",
					background: variant.dark
						? "rgb(255 255 255 / 0.06)"
						: "rgb(17 31 23 / 0.06)",
				}}
			>
				{m.shot_pending({ name: variant.name })}
			</span>
		</div>
	);
}
