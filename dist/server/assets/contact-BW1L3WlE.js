import { t as PageHero } from "./PageHero-DLl892_q.js";
import { t as EnquiryForm } from "./EnquiryForm-BdbcnP-t.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "Contact",
		title: "Talk to a mentor — book a free consultation",
		subtitle: "Tell us about your goals and we'll design a personalized prep + admissions plan."
	}), /* @__PURE__ */ jsx("section", {
		className: "section-y",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-page grid gap-10 lg:grid-cols-[1fr_1.1fr]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-card",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-lg font-bold text-navy",
							children: "Office"
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "mt-4 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ jsxs("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: "Alaknanda, New Delhi, India" })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("a", {
										className: "block hover:text-primary",
										href: "tel:+918800338783",
										children: "+91 88003 38783"
									}), /* @__PURE__ */ jsx("a", {
										className: "block hover:text-primary",
										href: "tel:+919310037791",
										children: "+91 93100 37791"
									})] })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("a", {
										className: "hover:text-primary break-all",
										href: "mailto:tarunkaushik@aceyourtest.in",
										children: "tarunkaushik@aceyourtest.in"
									})]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: "Mon–Sat · 9:00 AM – 8:00 PM" })]
								})
							]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "https://wa.me/918800338783",
							target: "_blank",
							rel: "noreferrer",
							className: "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-success px-4 py-3 text-sm font-semibold text-success-foreground hover:opacity-90 transition-opacity",
							children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), " Chat on WhatsApp"]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "rounded-2xl overflow-hidden border border-border bg-card shadow-card",
					children: /* @__PURE__ */ jsx("iframe", {
						title: "AceYourTest Office Location",
						src: "https://www.google.com/maps?q=Alaknanda,+New+Delhi&output=embed",
						width: "100%",
						height: "320",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						className: "block w-full"
					})
				})]
			}), /* @__PURE__ */ jsx(EnquiryForm, { title: "Book a Free Consultation" })]
		})
	})] });
}
//#endregion
export { ContactPage as component };
