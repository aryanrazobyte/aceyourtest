import { t as PageHero } from "./PageHero-DLl892_q.js";
import { t as CtaBand } from "./CtaBand-BmDkc44B.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Star } from "lucide-react";
//#region src/routes/success-stories.tsx?tsr-split=component
var stories = [
	{
		name: "Aarav Mehta",
		score: "GMAT 745",
		uni: "INSEAD",
		test: "GMAT",
		story: "From a baseline of 620 to 745 in 14 weeks. The quant frameworks and weekly mentor reviews made the difference."
	},
	{
		name: "Riya Sharma",
		score: "GRE 332",
		uni: "Cornell University",
		test: "GRE",
		story: "Personalized study plan, brilliant verbal strategies and admissions support — Cornell felt achievable from week one."
	},
	{
		name: "Kabir Anand",
		score: "SAT 1530",
		uni: "NYU",
		test: "SAT",
		story: "Small batches, focused attention and razor-sharp practice. The Digital SAT format clicked within the first month."
	},
	{
		name: "Ishita Verma",
		score: "GMAT 730",
		uni: "MIT Sloan",
		test: "GMAT",
		story: "AceYourTest helped me build my profile, ace the GMAT and tell a story Sloan couldn't ignore."
	},
	{
		name: "Arjun Pillai",
		score: "GRE 329",
		uni: "Purdue",
		test: "GRE",
		story: "The mock-review sessions were game-changing. Each mock made me sharper, faster and more confident."
	},
	{
		name: "Ananya R.",
		score: "SAT 1510",
		uni: "Purdue",
		test: "SAT",
		story: "Crisp curriculum, mentor accountability and a clear path to my dream school."
	},
	{
		name: "Meera K.",
		score: "GRE 325",
		uni: "NUS",
		test: "GRE",
		story: "From struggling with quant to a 167 on test day — I owe it to Tarun sir's frameworks."
	},
	{
		name: "Vihaan M.",
		score: "SAT 1490",
		uni: "Cornell",
		test: "SAT",
		story: "The strategy on reading and writing was the unlock — went from 1320 to 1490 in 3 months."
	}
];
function SuccessPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Success Stories",
			title: "Real students. Real scores. Real admits.",
			subtitle: "A growing community of students placed across the world's most competitive universities."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: stories.map((s) => /* @__PURE__ */ jsxs("article", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-card flex flex-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "grid h-14 w-14 place-items-center rounded-full bg-navy text-navy-foreground font-display font-bold text-lg",
									children: s.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
								}),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "font-display font-semibold text-navy",
									children: s.name
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-xs text-muted-foreground",
									children: [
										s.test,
										" · ",
										s.uni
									]
								})] }),
								/* @__PURE__ */ jsx("span", {
									className: "ml-auto rounded-md bg-primary/10 text-primary px-2.5 py-1 text-xs font-semibold",
									children: s.score
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 flex items-center gap-1 text-primary",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i))
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-3 text-sm text-foreground leading-relaxed flex-1",
							children: [
								"\"",
								s.story,
								"\""
							]
						})
					]
				}, s.name))
			})
		}),
		/* @__PURE__ */ jsx(CtaBand, {
			title: "Be the next success story.",
			subtitle: "Book a free strategy call with our mentor team."
		})
	] });
}
//#endregion
export { SuccessPage as component };
