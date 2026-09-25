import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";
import { getLocale, locales, setLocale } from "#/paraglide/runtime";

export default function LocaleSwitcher({ className }: { className?: string }) {
	const current = getLocale();

	return (
		<fieldset
			aria-label={m.language_label()}
			className={cn(
				"m-0 inline-flex min-w-0 items-center rounded-full border-0 p-0.5 ring-1 ring-hairline",
				className,
			)}
		>
			{locales.map((locale) => (
				<button
					key={locale}
					type="button"
					onClick={() => setLocale(locale)}
					aria-pressed={locale === current}
					className={cn(
						"min-h-6 min-w-8 rounded-full px-2.5 py-1 font-mono text-[11px] uppercase transition-colors duration-300 ease-fluid",
						locale === current
							? "bg-white/[0.08] text-fg"
							: "text-fg-faint hover:text-fg-muted",
					)}
				>
					{locale}
				</button>
			))}
		</fieldset>
	);
}
