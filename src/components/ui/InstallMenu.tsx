import { AltArrowDownIcon, ArrowRightUpIcon } from "@solar-icons/react/linear";
import { useEffect, useId, useRef, useState } from "react";
import { PillIcon, pillClass } from "#/components/ui/PillLink";
import { Swatch } from "#/components/ui/Swatch";
import { VARIANTS } from "#/lib/site";
import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

// "Get it for Chrome" opens a picker: each variant is its own Web Store listing.
export function InstallMenu({
	size = "md",
	align = "start",
	className,
}: {
	size?: "md" | "sm";
	align?: "start" | "end" | "center";
	className?: string;
}) {
	const [open, setOpen] = useState(false);
	const root = useRef<HTMLDivElement>(null);
	const menuId = useId();

	useEffect(() => {
		if (!open) return;
		const onPointer = (e: PointerEvent) => {
			if (!root.current?.contains(e.target as Node)) setOpen(false);
		};
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
		document.addEventListener("pointerdown", onPointer);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("pointerdown", onPointer);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);

	return (
		<div ref={root} className={cn("relative", className)}>
			<button
				type="button"
				aria-expanded={open}
				aria-controls={menuId}
				onClick={() => setOpen((v) => !v)}
				className={pillClass("primary", size)}
			>
				<span>{m.cta_chrome()}</span>
				<PillIcon variant="primary" size={size}>
					<AltArrowDownIcon
						size={size === "md" ? 18 : 15}
						strokeWidth={1.75}
						className={cn(
							"transition-transform duration-500 ease-fluid",
							open && "rotate-180",
						)}
					/>
				</PillIcon>
			</button>

			<div
				id={menuId}
				inert={!open}
				className={cn(
					"absolute top-full z-50 mt-3 w-[min(21rem,calc(100vw-2rem))] origin-top",
					align === "end" && "right-0",
					align === "center" && "left-1/2 -translate-x-1/2",
					align === "start" && "left-0",
					"transition-[opacity,scale,visibility] duration-500 ease-fluid",
					open
						? "visible scale-100 opacity-100"
						: "invisible scale-95 opacity-0",
				)}
			>
				<div className="bezel [--bezel-r:1.5rem]">
					<ul className="bezel-core p-1.5">
						{VARIANTS.map((v) => (
							<li key={v.key}>
								<a
									href={v.store}
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => setOpen(false)}
									className="group flex items-center gap-3 rounded-[1.1rem] px-3 py-3 transition-colors duration-300 ease-fluid hover:bg-white/[0.05]"
								>
									<Swatch variant={v} className="size-7" />
									<span className="min-w-0 flex-1 text-left">
										<span className="block text-sm font-medium text-fg">
											{v.name}
										</span>
										<span className="block truncate text-xs text-fg-muted">
											{v.description()}
										</span>
									</span>
									<ArrowRightUpIcon
										size={16}
										strokeWidth={1.75}
										aria-hidden
										className="text-fg-faint transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:text-jade-soft"
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
