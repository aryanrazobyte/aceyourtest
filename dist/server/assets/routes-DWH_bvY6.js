import { t as mentor_tarun_default } from "./mentor-tarun-Cs-yT3Xs.js";
import { t as SectionHeader } from "./SectionHeader-DpRfiz42.js";
import { t as CtaBand } from "./CtaBand-BmDkc44B.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, BarChart3, BookOpen, CheckCircle2, ClipboardList, Globe2, GraduationCap, MessageSquare, Star, Target, Trophy, Users } from "lucide-react";
//#region src/assets/hero-students.jpg
var hero_students_default = "/assets/hero-students-Bk3SWfnL.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var stats = [
	{
		value: "10,000+",
		label: "Students Trained"
	},
	{
		value: "15+",
		label: "Years of Experience"
	},
	{
		value: "700+",
		label: "GMAT Achievers"
	},
	{
		value: "325+",
		label: "GRE Achievers"
	},
	{
		value: "1,450+",
		label: "SAT Achievers"
	},
	{
		value: "Top",
		label: "University Admits"
	}
];
var features = [
	{
		icon: Target,
		title: "Personalized Learning Plans",
		desc: "Tailored study paths built around your baseline, target score and timeline."
	},
	{
		icon: Users,
		title: "Live Interactive Sessions",
		desc: "Small-batch live classes with structured doubt resolution and active practice."
	},
	{
		icon: BookOpen,
		title: "5,000+ Practice Questions",
		desc: "Curated official-style problem sets with detailed solutions and analytics."
	},
	{
		icon: GraduationCap,
		title: "Expert Mentorship",
		desc: "1-on-1 mentoring with a coach who has guided 10,000+ test-takers."
	},
	{
		icon: Globe2,
		title: "Study Abroad Guidance",
		desc: "End-to-end support — university shortlisting, SOP, LOR, interview prep."
	},
	{
		icon: MessageSquare,
		title: "Dedicated Doubt Support",
		desc: "Same-day responses on WhatsApp and email between sessions."
	},
	{
		icon: ClipboardList,
		title: "Small Batch Sizes",
		desc: "Capped enrollments so every student gets personal attention."
	},
	{
		icon: BarChart3,
		title: "Performance Analytics",
		desc: "Track accuracy, timing and topic mastery after every mock."
	}
];
var programs = [
	{
		code: "GMAT",
		to: "/gmat",
		title: "GMAT Program",
		desc: "Crack GMAT Focus Edition with a structured Quant + Verbal mastery plan.",
		bullets: [
			"Individual Coaching",
			"Group Classes",
			"Self-Study Plans",
			"Full-length Mock Tests",
			"Quant + Verbal Support"
		]
	},
	{
		code: "GRE",
		to: "/gre",
		title: "GRE Program",
		desc: "60+ live hours, structured curriculum and intensive practice for top GRE scores.",
		bullets: [
			"60+ Live Hours",
			"Structured Curriculum",
			"Practice Questions",
			"Full Mock Exams"
		],
		featured: true
	},
	{
		code: "SAT",
		to: "/sat",
		title: "SAT Program",
		desc: "Foundation to mastery for the Digital SAT — built for US university admissions.",
		bullets: [
			"Foundation Building",
			"Concept Mastery",
			"University Preparation"
		]
	}
];
var testimonials = [
	{
		name: "Aarav Mehta",
		score: "GMAT 745",
		uni: "INSEAD",
		test: "GMAT",
		quote: "Tarun sir's quant frameworks turned my weakest section into my strongest. The mocks felt easier than the real test."
	},
	{
		name: "Riya Sharma",
		score: "GRE 332",
		uni: "Cornell University",
		test: "GRE",
		quote: "Personalized study plan, weekly check-ins and brilliant verbal strategies. Couldn't have asked for better mentorship."
	},
	{
		name: "Kabir Anand",
		score: "SAT 1530",
		uni: "NYU",
		test: "SAT",
		quote: "Small batches, focused attention and razor-sharp practice. AceYourTest made the SAT feel manageable."
	},
	{
		name: "Ishita Verma",
		score: "GMAT 730",
		uni: "MIT Sloan",
		test: "GMAT",
		quote: "The admissions guidance was as good as the coaching. From shortlisting to interview prep, they had my back."
	}
];
var universities = [
	"MIT",
	"Stanford",
	"Oxford",
	"Cambridge",
	"INSEAD",
	"Cornell",
	"Purdue",
	"NYU",
	"NUS"
];
function HomePage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative bg-navy text-navy-foreground overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]",
				"aria-hidden": true
			}), /* @__PURE__ */ jsxs("div", {
				className: "container-page relative grid gap-12 lg:grid-cols-[1.1fr_1fr] py-16 lg:py-24 items-center",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-white/90",
						children: [/* @__PURE__ */ jsx(Award, { className: "h-3.5 w-3.5 text-primary" }), " 15+ Years · 10,000+ Mentored"]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]",
						children: [
							"India's Trusted ",
							/* @__PURE__ */ jsx("span", {
								className: "text-primary",
								children: "GMAT, GRE & SAT"
							}),
							" Coaching Platform"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-lg text-white/75 max-w-xl leading-relaxed",
						children: "Personalized mentoring, expert guidance and proven study systems — built to secure top scores and global university admits."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors shadow-sm",
								children: "Book Free Consultation"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#programs",
								className: "inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors",
								children: "Explore Programs"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "https://wa.me/918800338783",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center justify-center rounded-md bg-success px-5 py-3 text-sm font-semibold text-success-foreground hover:opacity-90 transition-opacity",
								children: "Talk To Mentor"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-success" }), " Live Online & Classroom"]
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-success" }), " Small Batches"]
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-success" }), " Admission Support"]
							})
						]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "absolute -inset-6 bg-primary/20 rounded-3xl blur-2xl",
							"aria-hidden": true
						}),
						/* @__PURE__ */ jsx("img", {
							src: hero_students_default,
							alt: "Students preparing for GMAT, GRE and SAT exams with AceYourTest",
							width: 1536,
							height: 1024,
							className: "relative rounded-2xl shadow-elevated w-full h-auto object-cover aspect-[4/3]"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-xl bg-white text-foreground px-4 py-3 shadow-elevated",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid h-10 w-10 place-items-center rounded-full bg-success/10 text-success",
								children: /* @__PURE__ */ jsx(Trophy, { className: "h-5 w-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground",
								children: "Top GMAT score"
							}), /* @__PURE__ */ jsx("p", {
								className: "font-display font-bold text-navy",
								children: "765 / 805"
							})] })]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-b border-border bg-surface",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-page py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6",
				children: stats.map((s) => /* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-display text-2xl sm:text-3xl font-bold text-navy",
						children: s.value
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-xs sm:text-sm text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page",
				children: [/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Why AceYourTest",
					title: "A premium prep experience, end-to-end",
					subtitle: "Everything you need to score high and land at your dream university — under one roof.",
					center: true
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: features.map((f) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ jsx(f.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-4 font-display text-lg font-semibold text-navy",
								children: f.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: f.desc
							})
						]
					}, f.title))
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
						alt: "Tarun Kaushik, Founder and Lead Mentor at AceYourTest",
						loading: "lazy",
						width: 1024,
						height: 1280,
						className: "relative rounded-2xl shadow-elevated w-full h-auto object-cover"
					})]
				}), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "Meet Your Mentor",
						title: "Tarun Kaushik — Quant Expert & Lead Mentor",
						subtitle: "A coach trusted by 10,000+ students across GMAT, GRE and SAT. Tarun has worked with leading test-prep organisations and built one of India's most respected quant programs."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: [
							"15+ Years Experience",
							"10,000+ Students Mentored",
							"Worked with reputed test-prep brands",
							"Quant Expert: GMAT, GRE & SAT"
						].map((b) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2 text-sm text-foreground",
							children: [
								/* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-success shrink-0 mt-0.5" }),
								" ",
								b
							]
						}, b))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors",
							children: ["Schedule Free Session ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
						}), /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-navy hover:bg-muted transition-colors",
							children: "Read Mentor Story"
						})]
					})
				] })]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			id: "programs",
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page",
				children: [/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Programs",
					title: "Choose the program built for your goal",
					subtitle: "Three flagship programs — built around proven curriculum, mentorship and outcomes.",
					center: true
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-3",
					children: programs.map((p) => /* @__PURE__ */ jsxs("div", {
						className: `relative rounded-2xl border bg-card p-7 shadow-card flex flex-col ${p.featured ? "border-primary ring-1 ring-primary/30" : "border-border"}`,
						children: [
							p.featured && /* @__PURE__ */ jsx("span", {
								className: "absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground",
								children: "Most Popular"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "inline-flex items-center justify-center rounded-md bg-navy text-navy-foreground px-2.5 py-1 text-xs font-bold tracking-wider w-fit",
								children: p.code
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-4 font-display text-2xl font-bold text-navy",
								children: p.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: p.desc
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-5 space-y-2.5 text-sm flex-1",
								children: p.bullets.map((b) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [
										/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-success shrink-0 mt-0.5" }),
										" ",
										b
									]
								}, b))
							}),
							/* @__PURE__ */ jsxs(Link, {
								to: p.to,
								className: "mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors",
								children: [
									"Explore ",
									p.code,
									" Program ",
									/* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
								]
							})
						]
					}, p.code))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y bg-surface",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ jsx(SectionHeader, {
						eyebrow: "Student Success",
						title: "Real students. Real scores. Real admits.",
						subtitle: "A few stories from the AceYourTest community.",
						center: true
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2",
						children: testimonials.map((t) => /* @__PURE__ */ jsxs("figure", {
							className: "rounded-2xl border border-border bg-card p-7 shadow-card",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-1 text-primary",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i))
								}),
								/* @__PURE__ */ jsxs("blockquote", {
									className: "mt-4 text-foreground leading-relaxed",
									children: [
										"\"",
										t.quote,
										"\""
									]
								}),
								/* @__PURE__ */ jsxs("figcaption", {
									className: "mt-5 flex items-center gap-4 border-t border-border pt-4",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "grid h-11 w-11 place-items-center rounded-full bg-navy text-navy-foreground font-display font-bold",
											children: t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "text-sm",
											children: [/* @__PURE__ */ jsx("p", {
												className: "font-semibold text-navy",
												children: t.name
											}), /* @__PURE__ */ jsxs("p", {
												className: "text-muted-foreground",
												children: [
													t.score,
													" · ",
													t.uni
												]
											})]
										}),
										/* @__PURE__ */ jsx("span", {
											className: "ml-auto rounded-md bg-primary/10 text-primary px-2.5 py-1 text-xs font-semibold",
											children: t.test
										})
									]
								})
							]
						}, t.name))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/success-stories",
							className: "inline-flex items-center text-sm font-semibold text-primary hover:text-secondary",
							children: ["View all success stories ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-y",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page",
				children: [/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Our Students Are At",
					title: "Top global universities",
					center: true
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-4",
					children: universities.map((u) => /* @__PURE__ */ jsx("div", {
						className: "grid place-items-center rounded-xl border border-border bg-card px-3 py-5 font-display font-semibold text-navy text-sm sm:text-base hover:bg-muted transition-colors",
						children: u
					}, u))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CtaBand, {})
	] });
}
//#endregion
export { HomePage as component };
