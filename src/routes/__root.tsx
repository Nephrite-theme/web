import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { LINKS, VARIANTS } from "#/lib/site";
import { m } from "#/paraglide/messages";
import { getLocale, locales } from "#/paraglide/runtime";
import appCss from "../styles.css?url";

// Runs before paint: opts into GSAP initial states only when motion is welcome.
const motionScript = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ok')`;

export const Route = createRootRoute({
	beforeLoad: async () => {
		if (typeof document !== "undefined") {
			document.documentElement.setAttribute("lang", getLocale());
		}
	},

	head: () => {
		const locale = getLocale();
		const ogImage = `${LINKS.site}/og-image.png`;
		const ogLocale = { en: "en_US", es: "es_419" } as const;

		// Describes only what the page shows: the project and its store listings.
		const jsonLd = {
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "Organization",
					"@id": `${LINKS.site}/#org`,
					name: "Nephrite",
					url: `${LINKS.site}/`,
					logo: `${LINKS.site}/logo-512.png`,
					sameAs: [LINKS.github, LINKS.x],
				},
				{
					"@type": "WebSite",
					"@id": `${LINKS.site}/#website`,
					name: "Nephrite",
					url: `${LINKS.site}/`,
					inLanguage: locales,
					publisher: { "@id": `${LINKS.site}/#org` },
				},
				...VARIANTS.map((v) => ({
					"@type": "SoftwareApplication",
					name: v.name,
					description: v.description(),
					url: v.store,
					applicationCategory: "BrowserApplication",
					operatingSystem: "Google Chrome",
					offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					publisher: { "@id": `${LINKS.site}/#org` },
				})),
			],
		};

		return {
			meta: [
				{ charSet: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "theme-color", content: "#080d0a" },
				{ property: "og:type", content: "website" },
				{ property: "og:site_name", content: "Nephrite" },
				{ property: "og:locale", content: ogLocale[locale] },
				...locales
					.filter((l) => l !== locale)
					.map((l) => ({
						property: "og:locale:alternate",
						content: ogLocale[l],
					})),
				{ property: "og:image", content: ogImage },
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ property: "og:image:alt", content: m.og_image_alt() },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:site", content: "@NephriteTheme" },
				{ name: "twitter:image", content: ogImage },
				{ name: "twitter:image:alt", content: m.og_image_alt() },
			],
			links: [
				{ rel: "stylesheet", href: appCss },
				{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon-32.png",
				},
				{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
			],
			scripts: [
				{ type: "application/ld+json", children: JSON.stringify(jsonLd) },
			],
		};
	},
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang={getLocale()} className="dark" suppressHydrationWarning>
			<head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: static, first-party snippet */}
				<script dangerouslySetInnerHTML={{ __html: motionScript }} />
				<HeadContent />
			</head>
			<body>
				{children}
				{import.meta.env.DEV && (
					<TanStackDevtools
						config={{ position: "bottom-right" }}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
						]}
					/>
				)}
				<Scripts />
			</body>
		</html>
	);
}
