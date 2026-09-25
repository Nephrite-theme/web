import { ArrowRightUpIcon } from "@solar-icons/react/linear";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "#/lib/utils";

type PillVariant = "primary" | "ghost";
type PillSize = "md" | "sm";

// Island CTA: pill shell with the trailing icon nested in its own circle.
export function pillClass(variant: PillVariant, size: PillSize) {
	return cn(
		"group inline-flex shrink-0 items-center whitespace-nowrap rounded-full font-medium",
		"transition-[transform,background-color,box-shadow] duration-500 ease-fluid active:scale-[0.98]",
		size === "md"
			? "gap-3 py-2 pr-2 pl-6 text-[15px]"
			: "gap-2 py-1.5 pr-1.5 pl-4 text-sm",
		variant === "primary"
			? "bg-jade text-jade-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_12px_32px_-12px_rgb(61_184_122/0.55)] hover:bg-jade-soft"
			: "bg-white/[0.04] text-fg ring-1 ring-hairline-strong hover:bg-white/[0.07]",
	);
}

export function PillIcon({
	variant,
	size,
	children,
	className,
}: {
	variant: PillVariant;
	size: PillSize;
	children?: ReactNode;
	className?: string;
}) {
	return (
		<span
			aria-hidden
			className={cn(
				"flex items-center justify-center rounded-full transition-transform duration-500 ease-fluid",
				size === "md" ? "size-9" : "size-7",
				variant === "primary" ? "bg-jade-ink/10" : "bg-white/[0.06]",
				className,
			)}
		>
			{children ?? (
				<ArrowRightUpIcon size={size === "md" ? 18 : 15} strokeWidth={1.75} />
			)}
		</span>
	);
}

type PillLinkProps = ComponentProps<"a"> & {
	variant?: PillVariant;
	size?: PillSize;
	leading?: ReactNode;
};

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
			className={cn(pillClass(variant, size), className)}
		>
			{leading}
			<span>{children}</span>
			<PillIcon
				variant={variant}
				size={size}
				className="group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105"
			/>
		</a>
	);
}
