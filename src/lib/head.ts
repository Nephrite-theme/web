import { baseLocale, getLocale, locales } from "#/paraglide/runtime";
import { localeUrl } from "./site";

// Per-page title, description, canonical and hreflang alternates. Site-wide
// tags (icons, OG image, JSON-LD) live in the root route.
export function pageHead({
	path,
	title,
	description,
}: {
	path: string;
	title: string;
	description: string;
}) {
	const url = localeUrl(getLocale(), path, baseLocale);

	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			{ property: "og:url", content: url },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: description },
		],
		links: [
			{ rel: "canonical", href: url },
			...locales.map((l) => ({
				rel: "alternate",
				hrefLang: l,
				href: localeUrl(l, path, baseLocale),
			})),
			{
				rel: "alternate",
				hrefLang: "x-default",
				href: localeUrl(baseLocale, path, baseLocale),
			},
		],
	};
}
