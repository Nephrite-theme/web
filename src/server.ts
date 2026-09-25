import handler from "@tanstack/react-start/server-entry";
import { paraglideMiddleware } from "./paraglide/server";

// Hardening headers for every server-rendered response. Static assets get
// the same set from netlify.toml.
const SECURITY_HEADERS: Record<string, string> = {
	"X-Content-Type-Options": "nosniff",
	"Referrer-Policy": "strict-origin-when-cross-origin",
	"X-Frame-Options": "DENY",
	"Permissions-Policy":
		"camera=(), microphone=(), geolocation=(), interest-cohort=()",
};

export default {
	async fetch(req: Request): Promise<Response> {
		const res = await paraglideMiddleware(req, () => handler.fetch(req));
		// Copy into a fresh Response: some runtimes return immutable headers.
		const headers = new Headers(res.headers);
		for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
			if (!headers.has(name)) headers.set(name, value);
		}
		return new Response(res.body, {
			status: res.status,
			statusText: res.statusText,
			headers,
		});
	},
};
