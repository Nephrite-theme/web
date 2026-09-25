import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import LocaleSwitcher from "#/components/LocaleSwitcher";
import { InstallMenu } from "#/components/ui/InstallMenu";
import { Logo } from "#/components/ui/Logo";
import { LINKS } from "#/lib/site";
import { m } from "#/paraglide/messages";

const socials = [
	{ href: LINKS.github, label: "GitHub", icon: SiGithub },
	{ href: LINKS.x, label: "X", icon: SiX },
];

export function Closing() {
	return (
		<section className="relative isolate z-10 mx-auto w-full max-w-[1400px] px-4 py-28 md:px-8 md:py-44">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[28rem] max-w-[48rem] -translate-y-1/2 rounded-full bg-jade/10 blur-[120px]"
			/>
			<div className="mx-auto flex max-w-[44rem] flex-col items-center text-center">
				<img
					data-reveal
					src="/logo.png"
					alt=""
					loading="lazy"
					className="mb-10 size-20 md:size-24"
				/>
				<h2
					data-reveal
					className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] md:text-7xl"
				>
					{m.closing_title()}
				</h2>
				<p
					data-reveal
					className="mt-6 max-w-[30rem] text-lg leading-relaxed text-fg-muted"
				>
					{m.closing_body()}
				</p>
				<div data-reveal className="mt-10">
					<InstallMenu align="center" />
				</div>
			</div>
		</section>
	);
}

export function Footer() {
	return (
		<footer className="relative mx-auto w-full max-w-[1400px] px-4 pb-10 md:px-8">
			<div className="flex flex-col gap-8 rounded-[2rem] bg-white/[0.02] px-6 py-8 ring-1 ring-hairline md:flex-row md:items-center md:justify-between md:px-10">
				<div className="flex flex-col gap-2">
					<Logo />
					<p className="text-sm text-fg-muted">{m.footer_tagline()}</p>
				</div>

				<div className="flex flex-wrap items-center gap-3">
					<LocaleSwitcher />
					{socials.map(({ href, label, icon: Icon }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={label}
							className="flex size-10 items-center justify-center rounded-full bg-white/[0.04] text-fg-muted ring-1 ring-hairline transition-colors duration-300 ease-fluid hover:text-fg"
						>
							<Icon size={16} />
						</a>
					))}
					<p className="w-full text-xs text-fg-faint md:ml-3 md:w-auto">
						{m.footer_rights({ year: String(new Date().getFullYear()) })}
					</p>
				</div>
			</div>
		</footer>
	);
}
