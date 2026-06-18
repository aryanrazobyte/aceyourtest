import { t as PageHero } from "./PageHero-DLl892_q.js";
import { t as SectionHeader } from "./SectionHeader-DpRfiz42.js";
import { t as CtaBand } from "./CtaBand-BmDkc44B.js";
import { t as EnquiryForm } from "./EnquiryForm-BdbcnP-t.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, ChevronDown } from "lucide-react";
//#region src/routes/gre.tsx?tsr-split=component
var faqs = [
	{
		q: "How many live hours are included?",
		a: "60+ live class hours covering Quant, Verbal Reasoning and Analytical Writing, plus mock-review sessions."
	},
	{
		q: "Which study material is used?",
		a: "Curated material covering official-style problems, our proprietary problem sets and ETS PowerPrep mocks."
	},
	{
		q: "Do you support MS admissions?",
		a: "Yes — university shortlisting, SOP, LOR review and interview prep are included."
	}
];
function GrePage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "GRE Program",
			title: "Score higher on the GRE with a structured, mentor-led program",
			subtitle: "60+ live hours of curriculum, intensive practice and full-length mocks — designed for top MS and PhD admissions."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "GRE Overview",
						title: "The most flexible test for graduate admissions",
						subtitle: "Accepted by thousands of MS, MBA and PhD programs worldwide. The shorter GRE format rewards a focused, well-trained test-taker."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2",
						children: [
							"60+ Live Hours of structured curriculum",
							"Quant + Verbal strategy frameworks",
							"Full-length, timed mock exams",
							"Mentor-led mock reviews",
							"AWA writing feedback",
							"Admissions and SOP support"
						].map((b) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-2 rounded-lg bg-surface border border-border p-4 text-sm",
							children: [
								/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-success shrink-0 mt-0.5" }),
								" ",
								b
							]
						}, b))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12 grid gap-5 md:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "rounded-2xl border border-border bg-card p-6 shadow-card",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-display text-xl font-bold text-navy",
								children: "Quant Strategy"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: "From arithmetic foundations to advanced data interpretation — we drill the exact patterns the GRE tests, with timing tactics for each question type."
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "rounded-2xl border border-border bg-card p-6 shadow-card",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-display text-xl font-bold text-navy",
								children: "Verbal Strategy"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: "Targeted vocabulary, RC frameworks and a logic-first approach to text completion and sentence equivalence."
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12",
						children: [/* @__PURE__ */ jsx(SectionHeader, {
							eyebrow: "Success Stories",
							title: "Students who hit their target GRE score"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-6 grid gap-4 sm:grid-cols-3",
							children: [
								{
									name: "Riya S.",
									score: "332",
									uni: "Cornell"
								},
								{
									name: "Arjun P.",
									score: "329",
									uni: "Purdue"
								},
								{
									name: "Meera K.",
									score: "325",
									uni: "NUS"
								}
							].map((s) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-border bg-card p-5 shadow-card text-center",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "font-display text-3xl font-bold text-primary",
										children: s.score
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1 font-semibold text-navy",
										children: s.name
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-muted-foreground",
										children: s.uni
									})
								]
							}, s.name))
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12",
						children: [/* @__PURE__ */ jsx(SectionHeader, {
							eyebrow: "FAQ",
							title: "GRE prep — common questions"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-6 space-y-3",
							children: faqs.map((f) => /* @__PURE__ */ jsxs("details", {
								className: "group rounded-xl border border-border bg-card p-5 shadow-card",
								children: [/* @__PURE__ */ jsxs("summary", {
									className: "flex items-center justify-between cursor-pointer list-none",
									children: [/* @__PURE__ */ jsx("span", {
										className: "font-display font-semibold text-navy",
										children: f.q
									}), /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" })]
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm text-muted-foreground leading-relaxed",
									children: f.a
								})]
							}, f.q))
						})]
					})
				] }), /* @__PURE__ */ jsx("aside", {
					className: "lg:sticky lg:top-24 h-fit",
					children: /* @__PURE__ */ jsx(EnquiryForm, { title: "Plan your GRE prep" })
				})]
			})
		}),
		/* @__PURE__ */ jsx(CtaBand, {
			title: "Aiming for a 325+?",
			subtitle: "Talk to a mentor and get a personalized GRE roadmap."
		})
	] });
}
//#endregion
export { GrePage as component };
