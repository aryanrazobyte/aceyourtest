import { t as PageHero } from "./PageHero-DLl892_q.js";
import { t as SectionHeader } from "./SectionHeader-DpRfiz42.js";
import { t as CtaBand } from "./CtaBand-BmDkc44B.js";
import { t as EnquiryForm } from "./EnquiryForm-BdbcnP-t.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2 } from "lucide-react";
//#region src/routes/sat.tsx?tsr-split=component
function SatPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "SAT Program",
			title: "Master the Digital SAT — built for US university admits",
			subtitle: "A foundation-to-mastery program for Math and Reading & Writing — paired with university preparation for top US admissions."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "SAT Overview",
						title: "The Digital SAT, decoded",
						subtitle: "Shorter, adaptive and module-based — the Digital SAT rewards students who train on the exact format and pacing."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 grid gap-5 md:grid-cols-2",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-border bg-card p-6 shadow-card",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-xl font-bold text-navy",
									children: "Math Section"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: "Algebra, advanced math, problem-solving and data analysis — drilled with calculator strategy and time-boxed practice."
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-border bg-card p-6 shadow-card",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-xl font-bold text-navy",
									children: "Reading Section"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: "Vocabulary in context, evidence-based comprehension and the Digital SAT's short-passage logic patterns."
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-border bg-card p-6 shadow-card",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-xl font-bold text-navy",
									children: "Writing Section"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: "Standard English conventions, rhetoric and editing strategies that consistently raise section scores."
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-border bg-card p-6 shadow-card",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-xl font-bold text-navy",
									children: "University Admissions Benefits"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: "A strong SAT score unlocks scholarships, merit awards and stronger admission outcomes at US universities."
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12",
						children: [/* @__PURE__ */ jsx(SectionHeader, {
							eyebrow: "What's Included",
							title: "Foundation, mastery and beyond"
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-6 grid gap-3 sm:grid-cols-2",
							children: [
								"Foundation Building modules",
								"Concept Mastery deep dives",
								"Full-length Bluebook-style mocks",
								"Personalized study plans",
								"Weekly mentor check-ins",
								"University shortlist & application support"
							].map((b) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2 text-sm",
								children: [
									/* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-success shrink-0 mt-0.5" }),
									" ",
									b
								]
							}, b))
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12",
						children: [/* @__PURE__ */ jsx(SectionHeader, {
							eyebrow: "Student Success",
							title: "Top SAT scorers from AceYourTest"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-6 grid gap-4 sm:grid-cols-3",
							children: [
								{
									name: "Kabir A.",
									score: "1530",
									uni: "NYU"
								},
								{
									name: "Ananya R.",
									score: "1510",
									uni: "Purdue"
								},
								{
									name: "Vihaan M.",
									score: "1490",
									uni: "Cornell"
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
					})
				] }), /* @__PURE__ */ jsx("aside", {
					className: "lg:sticky lg:top-24 h-fit",
					children: /* @__PURE__ */ jsx(EnquiryForm, { title: "Plan your SAT prep" })
				})]
			})
		}),
		/* @__PURE__ */ jsx(CtaBand, {
			title: "Targeting a top US university?",
			subtitle: "Speak with a mentor and build your SAT + admissions strategy."
		})
	] });
}
//#endregion
export { SatPage as component };
