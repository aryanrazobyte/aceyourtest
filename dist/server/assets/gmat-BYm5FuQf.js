import { t as PageHero } from "./PageHero-DLl892_q.js";
import { t as SectionHeader } from "./SectionHeader-DpRfiz42.js";
import { t as CtaBand } from "./CtaBand-BmDkc44B.js";
import { t as EnquiryForm } from "./EnquiryForm-BdbcnP-t.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, ChevronDown } from "lucide-react";
//#region src/routes/gmat.tsx?tsr-split=component
var courseOptions = [
	{
		title: "Individual Coaching",
		desc: "1-on-1 sessions with Tarun — fully personalized pace, plan and problem sets.",
		price: "Custom Plan",
		popular: false
	},
	{
		title: "Group Coaching",
		desc: "Small-batch live classes with structured curriculum, drills and weekly mocks.",
		price: "Most Popular",
		popular: true
	},
	{
		title: "Self-Study Package",
		desc: "Recorded curriculum, problem sets, mocks and mentor check-ins on demand.",
		price: "Flexible",
		popular: false
	}
];
var faqs = [
	{
		q: "Which GMAT format do you prepare for?",
		a: "We prepare students for the GMAT Focus Edition — Quant, Verbal and Data Insights — with the latest official-style problem sets."
	},
	{
		q: "How long does the program take?",
		a: "Most students complete the core program in 10–14 weeks. Timelines flex based on your baseline and target score."
	},
	{
		q: "Are mocks included?",
		a: "Yes — full-length, timed mocks with detailed analytics and a 1-on-1 review session after each mock."
	},
	{
		q: "Do you help with admissions?",
		a: "Yes — SOP, LOR, university shortlisting and interview prep are included with most programs."
	}
];
function GmatPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "GMAT Program",
			title: "Crack GMAT Focus Edition with a mentor-led system",
			subtitle: "A structured Quant + Verbal + Data Insights program — built around the latest GMAT Focus syllabus, proven frameworks and small-batch attention."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "Why GMAT Matters",
						title: "The gateway to top global MBA programs",
						subtitle: "A strong GMAT score remains the single biggest scholarship and admission lever for leading business schools across the US, Europe and Asia."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2",
						children: [
							"Accepted by 7,700+ programs at 2,400+ schools",
							"Scholarships often unlocked above 700",
							"Score validity: 5 years",
							"Computer-adaptive, 2hr 15min format"
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
						className: "mt-12",
						children: [/* @__PURE__ */ jsx(SectionHeader, {
							eyebrow: "Course Options",
							title: "Pick the program that fits your goal"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-8 grid gap-5 sm:grid-cols-3",
							children: courseOptions.map((c) => /* @__PURE__ */ jsxs("div", {
								className: `rounded-2xl border bg-card p-6 shadow-card ${c.popular ? "border-primary ring-1 ring-primary/30" : "border-border"}`,
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-xs font-semibold tracking-widest uppercase text-primary",
										children: c.price
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-2 font-display text-lg font-bold text-navy",
										children: c.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-sm text-muted-foreground leading-relaxed",
										children: c.desc
									})
								]
							}, c.title))
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12",
						children: [/* @__PURE__ */ jsx(SectionHeader, {
							eyebrow: "Study Plan",
							title: "A 4-phase journey to your target score"
						}), /* @__PURE__ */ jsx("ol", {
							className: "mt-8 grid gap-5 sm:grid-cols-2",
							children: [
								{
									n: "01",
									t: "Diagnostic & Plan",
									d: "Baseline mock, gap analysis and a personalized 10–14 week study plan."
								},
								{
									n: "02",
									t: "Concept Mastery",
									d: "Live classes on Quant, Verbal and Data Insights with daily problem sets."
								},
								{
									n: "03",
									t: "Application & Drills",
									d: "Mixed-topic drills, timing strategy and full-length mock tests."
								},
								{
									n: "04",
									t: "Final Push & Admits",
									d: "Mock review, last-mile sprints and admissions guidance for target schools."
								}
							].map((s) => /* @__PURE__ */ jsxs("li", {
								className: "rounded-xl border border-border bg-card p-5 shadow-card",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "font-display text-2xl font-bold text-primary",
										children: s.n
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "mt-2 font-display font-semibold text-navy",
										children: s.t
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: s.d
									})
								]
							}, s.n))
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12",
						children: [/* @__PURE__ */ jsx(SectionHeader, {
							eyebrow: "FAQ",
							title: "GMAT prep — common questions"
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
					children: /* @__PURE__ */ jsx(EnquiryForm, { title: "Get your GMAT plan" })
				})]
			})
		}),
		/* @__PURE__ */ jsx(CtaBand, {
			title: "Ready to plan your GMAT journey?",
			subtitle: "Book a free strategy call with our mentor team today."
		})
	] });
}
//#endregion
export { GmatPage as component };
