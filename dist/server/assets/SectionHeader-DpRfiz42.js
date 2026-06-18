import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/SectionHeader.tsx
function SectionHeader({ eyebrow, title, subtitle, center = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `max-w-3xl ${center ? "mx-auto text-center" : ""}`,
		children: [
			eyebrow && /* @__PURE__ */ jsx("span", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "mt-3 font-display text-3xl sm:text-4xl font-bold text-navy",
				children: title
			}),
			subtitle && /* @__PURE__ */ jsx("p", {
				className: "mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed",
				children: subtitle
			})
		]
	});
}
//#endregion
export { SectionHeader as t };
