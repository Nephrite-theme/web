import { cn } from "#/lib/utils";

export function Logo({
	className,
	label,
}: {
	className?: string;
	label?: string;
}) {
	return (
		<span className={cn("inline-flex items-center gap-2.5", className)}>
			<img src="/logo.png" alt="" width={28} height={28} className="size-7" />
			<span className="font-semibold tracking-tight">Nephrite</span>
			{label && <span className="sr-only">{label}</span>}
		</span>
	);
}
