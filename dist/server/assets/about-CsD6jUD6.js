import { t as mentor_tarun_default } from "./mentor-tarun-Cs-yT3Xs.js";
import { t as PageHero } from "./PageHero-DLl892_q.js";
import { t as SectionHeader } from "./SectionHeader-DpRfiz42.js";
import { t as CtaBand } from "./CtaBand-BmDkc44B.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, Eye, Flag, Target, Users } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "About Us",
			title: "A mentor-led prep platform built for ambitious students",
			subtitle: "AceYourTest was founded with a simple belief — every focused student, with the right mentor and system, can score in the top percentile and earn an admit at a world-class university."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Our Story",
					title: "From one mentor to 10,000+ students"
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-5 space-y-4 text-foreground leading-relaxed",
					children: [/* @__PURE__ */ jsx("p", { children: "AceYourTest began over a decade ago as a small batch of GMAT aspirants meeting around a whiteboard in Delhi. Word spread quickly — students were not just scoring higher, they were learning how to think under pressure." }), /* @__PURE__ */ jsx("p", { children: "Today, AceYourTest is one of India's most trusted GMAT, GRE and SAT coaching platforms — with live online and classroom programs, mentor-led admissions support, and a community of students placed across MIT, Stanford, Oxford, Cambridge, INSEAD, Cornell, NYU, NUS and more." })]
				})] }), /* @__PURE__ */ jsx("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						{
							icon: Target,
							title: "Mission",
							text: "Help every student achieve their global education goals through personalized mentoring and proven prep systems."
						},
						{
							icon: Eye,
							title: "Vision",
							text: "Be India's most trusted GMAT, GRE & SAT coaching platform — known for outcomes and integrity."
						},
						{
							icon: Flag,
							title: "Approach",
							text: "Small batches, structured curriculum, weekly mentor check-ins and data-driven mocks."
						},
						{
							icon: Users,
							title: "Community",
							text: "An active alumni network across global universities, available to guide our current students."
						}
					].map((c) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ jsx(c.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-4 font-display text-lg font-semibold text-navy",
								children: c.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: c.text
							})
						]
					}, c.title))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y bg-surface",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative max-w-md mx-auto lg:mx-0",
					children: [/* @__PURE__ */ jsx("div", {
						className: "absolute -inset-4 rounded-3xl bg-primary/15",
						"aria-hidden": true
					}), /* @__PURE__ */ jsx("img", {
						src: mentor_tarun_default,
						alt: "Tarun Kaushik",
						loading: "lazy",
						width: 1024,
						height: 1280,
						className: "relative rounded-2xl shadow-elevated w-full h-auto object-cover"
					})]
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Mentor Journey",
					title: "Tarun Kaushik — 15+ years guiding test-takers",
					subtitle: "A quant expert across GMAT, GRE and SAT, Tarun has trained 10,000+ students and worked with several leading test-prep organisations before founding AceYourTest."
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-6 grid gap-3 sm:grid-cols-2",
					children: [
						"15+ years of full-time test-prep coaching",
						"10,000+ students mentored 1-on-1 and in batches",
						"Specialist in Quant for GMAT, GRE & SAT",
						"Built proprietary frameworks for problem-solving",
						"Mentor for top-percentile scorers across cohorts",
						"Hands-on with each student's study plan"
					].map((b) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-2 text-sm text-foreground",
						children: [
							/* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-success shrink-0 mt-0.5" }),
							" ",
							b
						]
					}, b))
				})] })]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center",
				children: [
					{
						v: "10,000+",
						l: "Students Trained"
					},
					{
						v: "700+",
						l: "GMAT Achievers"
					},
					{
						v: "325+",
						l: "GRE Achievers"
					},
					{
						v: "1,450+",
						l: "SAT Achievers"
					}
				].map((s) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-7 shadow-card",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-display text-3xl font-bold text-navy",
						children: s.v
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: s.l
					})]
				}, s.l))
			})
		}),
		/* @__PURE__ */ jsx(CtaBand, {})
	] });
}
//#endregion
export { AboutPage as component };
