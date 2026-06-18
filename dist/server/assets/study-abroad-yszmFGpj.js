import { t as PageHero } from "./PageHero-DLl892_q.js";
import { t as SectionHeader } from "./SectionHeader-DpRfiz42.js";
import { t as CtaBand } from "./CtaBand-BmDkc44B.js";
import { t as EnquiryForm } from "./EnquiryForm-BdbcnP-t.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ClipboardCheck, FileText, GraduationCap, Mic, ScrollText, Wallet } from "lucide-react";
//#region src/routes/study-abroad.tsx?tsr-split=component
var services = [
	{
		icon: GraduationCap,
		title: "University Selection",
		desc: "Data-driven shortlist of safe, target and stretch universities matched to your profile and goals."
	},
	{
		icon: FileText,
		title: "SOP Guidance",
		desc: "Multiple drafts, structured frameworks and editorial review for a compelling personal narrative."
	},
	{
		icon: ScrollText,
		title: "LOR Assistance",
		desc: "Strategy on recommenders, framing and templates that highlight your strongest signals."
	},
	{
		icon: ClipboardCheck,
		title: "Application Strategy",
		desc: "Deadline planning, supplemental essays and end-to-end application management."
	},
	{
		icon: Mic,
		title: "Interview Preparation",
		desc: "Mock interviews with detailed feedback, school-specific questions and presence coaching."
	},
	{
		icon: Wallet,
		title: "Scholarship Guidance",
		desc: "Identify merit and need-based scholarships, and craft a strong scholarship application narrative."
	}
];
function StudyAbroadPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Study Abroad",
			title: "End-to-end mentoring for top global admissions",
			subtitle: "From the first university shortlist to the final scholarship application — we walk every step with you."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "What We Cover",
					title: "Premium admissions support, end-to-end"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2",
					children: services.map((s) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-4 font-display text-lg font-bold text-navy",
								children: s.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: s.desc
							})
						]
					}, s.title))
				})] }), /* @__PURE__ */ jsx("aside", {
					className: "lg:sticky lg:top-24 h-fit",
					children: /* @__PURE__ */ jsx(EnquiryForm, { title: "Plan your admit" })
				})]
			})
		}),
		/* @__PURE__ */ jsx(CtaBand, {
			title: "Dreaming of a top global university?",
			subtitle: "Talk to a mentor and start your application journey today."
		})
	] });
}
//#endregion
export { StudyAbroadPage as component };
