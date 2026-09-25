import { ArrowRightUpIcon } from "@solar-icons/react/linear";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "#/lib/utils";

type PillLinkProps = ComponentProps<"a"> & {
	variant?: "primary" | "ghost";
	size?: "md" | "sm";
	leading?: ReactNode;
};

// Island CTA: pill shell with the trailing arrow nested in its own circle.
export function PillLink({
	variant = "primary",
	size = "md",
	leading,
	className,
	children,
	...props
}: PillLinkProps) {
	const external = props.href?.startsWith("http");

	return (
		<a
			{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
			{...props}
			className={cn(
				"group inline-flex shrink-0 items-center whitespace-nowrap rounded-full font-medium",
				"transition-[transform,background-color,box-shadow] duration-500 ease-fluid active:scale-[0.98]",
				size === "md"
					? "gap-3 py-2 pr-2 pl-6 text-[15px]"
					: "gap-2 py-1.5 pr-1.5 pl-4 text-sm",
				variant === "primary"
					? "bg-jade text-jade-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_12px_32px_-12px_rgb(61_184_122/0.55)] hover:bg-jade-soft"
					: "bg-white/[0.04] text-fg ring-1 ring-hairline-strong hover:bg-white/[0.07]",
				className,
			)}
		>
			{leading}
			<span>{children}</span>
			<span
				aria-hidden
				className={cn(
					"flex items-center justify-center rounded-full transition-transform duration-500 ease-fluid",
					"group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105",
					size === "md" ? "size-9" : "size-7",
					variant === "primary" ? "bg-jade-ink/10" : "bg-white/[0.06]",
				)}
			>
				<ArrowRightUpIcon size={size === "md" ? 18 : 15} strokeWidth={1.75} />
			</span>
		</a>
	);
}
