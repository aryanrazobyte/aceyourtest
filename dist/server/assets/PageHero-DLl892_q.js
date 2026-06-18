import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/PageHero.tsx
function PageHero({ eyebrow, title, subtitle, children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative bg-navy text-white overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]",
			"aria-hidden": true
		}), /* @__PURE__ */ jsxs("div", {
			className: "container-page relative py-20 sm:py-28",
			children: [
				eyebrow && /* @__PURE__ */ jsx("span", {
					className: "inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-white/90",
					children: eyebrow
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl",
					children: title
				}),
				subtitle && /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-white/75 max-w-2xl leading-relaxed",
					children: subtitle
				}),
				children && /* @__PURE__ */ jsx("div", {
					className: "mt-7",
					children
				})
			]
		})]
	});
}
//#endregion
export { PageHero as t };
