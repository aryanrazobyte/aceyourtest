import { t as PageHero } from "./PageHero-DLl892_q.js";
import { t as SectionHeader } from "./SectionHeader-DpRfiz42.js";
import { t as CtaBand } from "./CtaBand-BmDkc44B.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { PlayCircle, Star } from "lucide-react";
//#region src/routes/testimonials.tsx?tsr-split=component
var videos = [
	{
		name: "Aarav Mehta",
		score: "GMAT 745"
	},
	{
		name: "Riya Sharma",
		score: "GRE 332"
	},
	{
		name: "Kabir Anand",
		score: "SAT 1530"
	}
];
var reviews = [
	{
		name: "Sneha P.",
		body: "The mentor support is on another level. Tarun sir personally tracked my progress and pushed me to score 720 on the GMAT.",
		rating: 5
	},
	{
		name: "Rohan G.",
		body: "Best decision I made for my GRE prep. Structured, intense and outcome-focused.",
		rating: 5
	},
	{
		name: "Aditi K.",
		body: "The SAT program is genuinely premium — small batches, modern material and clear results.",
		rating: 5
	},
	{
		name: "Nikhil S.",
		body: "Admissions support was as strong as the test prep. Got into my dream school.",
		rating: 5
	},
	{
		name: "Priya M.",
		body: "Worth every rupee. The mocks and analytics are next level.",
		rating: 5
	},
	{
		name: "Devansh R.",
		body: "Doubt resolution on WhatsApp within hours — saved me so many times.",
		rating: 5
	}
];
function TestimonialsPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Reviews & Testimonials",
			title: "Trusted by 10,000+ students and parents",
			subtitle: "Hear directly from our students — across GMAT, GRE, SAT and study abroad."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page",
				children: [/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Video Reviews",
					title: "Stories from our students"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: videos.map((v) => /* @__PURE__ */ jsxs("div", {
						className: "group relative aspect-video overflow-hidden rounded-2xl border border-border bg-navy shadow-card",
						children: [/* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 grid place-items-center text-white",
							children: /* @__PURE__ */ jsx(PlayCircle, { className: "h-14 w-14 opacity-80 group-hover:opacity-100 transition-opacity" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-display font-semibold",
								children: v.name
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-white/80",
								children: v.score
							})]
						})]
					}, v.name))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y bg-surface",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page",
				children: [/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Written Reviews",
					title: "Real reviews from our community"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: reviews.map((r) => /* @__PURE__ */ jsxs("figure", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-1 text-primary",
								children: Array.from({ length: r.rating }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i))
							}),
							/* @__PURE__ */ jsxs("blockquote", {
								className: "mt-3 text-sm text-foreground leading-relaxed",
								children: [
									"\"",
									r.body,
									"\""
								]
							}),
							/* @__PURE__ */ jsxs("figcaption", {
								className: "mt-4 text-sm font-semibold text-navy",
								children: ["— ", r.name]
							})
						]
					}, r.name))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CtaBand, {})
	] });
}
//#endregion
export { TestimonialsPage as component };
