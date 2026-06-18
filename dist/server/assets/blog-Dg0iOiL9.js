import { t as PageHero } from "./PageHero-DLl892_q.js";
import { t as CtaBand } from "./CtaBand-BmDkc44B.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Calendar } from "lucide-react";
//#region src/routes/blog.tsx?tsr-split=component
var categories = [
	"All",
	"GMAT Tips",
	"GRE Tips",
	"SAT Tips",
	"Study Abroad",
	"Success Stories",
	"Admissions"
];
var posts = [
	{
		cat: "GMAT Tips",
		title: "How to break 700 on the GMAT Focus Edition",
		desc: "A four-phase plan used by our top scorers — built around Quant, Verbal and Data Insights.",
		date: "May 12, 2026",
		read: "8 min"
	},
	{
		cat: "GRE Tips",
		title: "GRE Quant: the 12 patterns that drive every question",
		desc: "Stop solving question-by-question. Start recognizing the patterns the GRE actually tests.",
		date: "May 04, 2026",
		read: "6 min"
	},
	{
		cat: "SAT Tips",
		title: "Digital SAT: pacing strategy for the adaptive module",
		desc: "How to manage time on Module 1 to unlock the higher-difficulty Module 2.",
		date: "Apr 22, 2026",
		read: "5 min"
	},
	{
		cat: "Study Abroad",
		title: "How to build a stand-out university shortlist",
		desc: "A repeatable framework to pick safe, target and stretch schools — without guesswork.",
		date: "Apr 10, 2026",
		read: "7 min"
	},
	{
		cat: "Admissions",
		title: "The 5 mistakes that quietly sink strong SOPs",
		desc: "Even great writers make these. A simple editing checklist before you hit submit.",
		date: "Mar 28, 2026",
		read: "6 min"
	},
	{
		cat: "Success Stories",
		title: "From 620 to 745: Aarav's INSEAD journey",
		desc: "How a structured 14-week plan and weekly mentor reviews turned things around.",
		date: "Mar 16, 2026",
		read: "9 min"
	}
];
function BlogPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Blog & Resources",
			title: "Strategies, tips and stories from the AceYourTest mentor team",
			subtitle: "In-depth articles to help you prep smarter, apply better and choose wisely."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2",
					children: categories.map((c, i) => /* @__PURE__ */ jsx("button", {
						className: `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${i === 0 ? "bg-navy text-navy-foreground border-navy" : "border-border bg-card text-foreground hover:bg-muted"}`,
						children: c
					}, c))
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: posts.map((p) => /* @__PURE__ */ jsxs("article", {
						className: "group rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elevated transition-shadow flex flex-col",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-[16/9] bg-gradient-to-br from-navy to-secondary relative",
							children: /* @__PURE__ */ jsx("span", {
								className: "absolute top-4 left-4 rounded-md bg-white/95 text-navy px-2.5 py-1 text-xs font-semibold",
								children: p.cat
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-6 flex-1 flex flex-col",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-lg font-bold text-navy group-hover:text-primary transition-colors",
									children: p.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed flex-1",
									children: p.desc
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-5 flex items-center justify-between text-xs text-muted-foreground",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
											" ",
											p.date,
											" · ",
											p.read
										]
									}), /* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1 text-primary font-semibold",
										children: ["Read ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
									})]
								})
							]
						})]
					}, p.title))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CtaBand, {})
	] });
}
//#endregion
export { BlogPage as component };
