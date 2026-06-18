import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { z } from "zod";
//#region src/components/site/EnquiryForm.tsx
var schema = z.object({
	name: z.string().trim().min(2, "Enter your name").max(80),
	email: z.string().trim().email("Enter a valid email").max(120),
	phone: z.string().trim().min(7, "Enter a valid phone").max(20),
	exam: z.string().min(1, "Select an exam"),
	message: z.string().trim().max(600).optional().or(z.literal(""))
});
function EnquiryForm({ title = "Book a Free Consultation", compact = false }) {
	const [errors, setErrors] = useState({});
	const [sent, setSent] = useState(false);
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const data = Object.fromEntries(fd.entries());
		const result = schema.safeParse(data);
		if (!result.success) {
			const errs = {};
			result.error.issues.forEach((i) => errs[i.path[0]] = i.message);
			setErrors(errs);
			return;
		}
		setErrors({});
		setSent(true);
	}
	if (sent) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl bg-success/10 border border-success/30 p-6 text-center",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "font-display text-xl font-semibold text-navy",
			children: "Thank you!"
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: "Our mentor team will reach out within 24 hours."
		})]
	});
	return /* @__PURE__ */ jsxs("form", {
		onSubmit,
		className: `rounded-2xl bg-card border border-border p-6 sm:p-7 shadow-card ${compact ? "" : "sm:p-8"}`,
		children: [
			/* @__PURE__ */ jsx("h3", {
				className: "font-display text-xl font-semibold text-navy",
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Speak with a mentor — no obligations."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-5 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ jsx(Field, {
						label: "Full Name",
						name: "name",
						error: errors.name
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "Phone",
						name: "phone",
						type: "tel",
						error: errors.phone
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "Email",
						name: "email",
						type: "email",
						error: errors.email,
						className: "sm:col-span-2"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "sm:col-span-2",
						children: [
							/* @__PURE__ */ jsx("label", {
								className: "text-sm font-medium text-navy",
								children: "Exam Interested In"
							}),
							/* @__PURE__ */ jsxs("select", {
								name: "exam",
								defaultValue: "",
								className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring",
								children: [
									/* @__PURE__ */ jsx("option", {
										value: "",
										disabled: true,
										children: "Select an exam"
									}),
									/* @__PURE__ */ jsx("option", { children: "GMAT" }),
									/* @__PURE__ */ jsx("option", { children: "GRE" }),
									/* @__PURE__ */ jsx("option", { children: "SAT" }),
									/* @__PURE__ */ jsx("option", { children: "Study Abroad" }),
									/* @__PURE__ */ jsx("option", { children: "Quantitative Aptitude" })
								]
							}),
							errors.exam && /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.exam
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ jsx("label", {
							className: "text-sm font-medium text-navy",
							children: "Message (optional)"
						}), /* @__PURE__ */ jsx("textarea", {
							name: "message",
							rows: 3,
							className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring",
							placeholder: "Tell us your target score or university"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("button", {
				type: "submit",
				className: "mt-5 w-full inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors",
				children: "Request Free Consultation"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 text-xs text-muted-foreground text-center",
				children: "By submitting, you agree to be contacted by AceYourTest."
			})
		]
	});
}
function Field({ label, name, type = "text", error, className = "" }) {
	return /* @__PURE__ */ jsxs("div", {
		className,
		children: [
			/* @__PURE__ */ jsx("label", {
				className: "text-sm font-medium text-navy",
				children: label
			}),
			/* @__PURE__ */ jsx("input", {
				name,
				type,
				className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
			}),
			error && /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-xs text-destructive",
				children: error
			})
		]
	});
}
//#endregion
export { EnquiryForm as t };
