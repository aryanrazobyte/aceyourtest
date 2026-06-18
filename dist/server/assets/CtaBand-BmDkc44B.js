import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/CtaBand.tsx
function CtaBand({ title = "Ready to start your journey?", subtitle = "Book a free 30-minute strategy session with our mentor team." }) {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-surface border-y border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-page py-12 sm:py-14 grid gap-6 md:grid-cols-[1fr_auto] items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
				className: "font-display text-2xl sm:text-3xl font-bold text-navy",
				children: title
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-2 text-muted-foreground",
				children: subtitle
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ jsx(Link, {
					to: "/contact",
					className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors",
					children: "Book Free Consultation"
				}), /* @__PURE__ */ jsx("a", {
					href: "https://wa.me/918800338783",
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-navy hover:bg-muted transition-colors",
					children: "WhatsApp Us"
				})]
			})]
		})
	});
}
//#endregion
export { CtaBand as t };
