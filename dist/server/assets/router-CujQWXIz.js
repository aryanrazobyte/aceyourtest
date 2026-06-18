import * as React from "react";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Check, ChevronDown, ChevronRight, Circle, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, MessageCircle, Phone, X, Youtube } from "lucide-react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/styles.css?url
var styles_default = "/assets/styles-PcA4TuVF.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/assets/logo.png
var logo_default = "/assets/logo-PcsUndlc.png";
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/Components/ui/dropdown-menu.tsx
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.SubTrigger, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.SubContent, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.Content, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Item, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.CheckboxItem, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.RadioItem, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Label, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ jsx("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
//#endregion
//#region src/components/site/Header.tsx
var mainNav = [
	{
		to: "/",
		label: "Home",
		exact: true
	},
	{
		to: "/gmat",
		label: "GMAT"
	},
	{
		to: "/gre",
		label: "GRE"
	},
	{
		to: "/sat",
		label: "SAT"
	},
	{
		to: "/study-abroad",
		label: "Study Abroad"
	},
	{
		to: "/success-stories",
		label: "Success Stories"
	}
];
var contactMenu = [
	{
		to: "/contact",
		label: "Contact Us"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/blog",
		label: "Blog"
	}
];
var contactPaths = [
	"/contact",
	"/about",
	"/blog"
];
var navLinkBase = "px-3.5 py-2.5 text-sm font-semibold text-white/90 rounded-lg hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap";
var navLinkActive = "bg-white text-[#081f3d] shadow-sm hover:bg-white hover:text-[#081f3d]";
function Header() {
	const [open, setOpen] = useState(false);
	const { location } = useRouterState();
	const isContactActive = contactPaths.includes(location.pathname);
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-40 border-b text-white shadow-md",
		style: {
			backgroundColor: "#081f3d",
			borderColor: "#0a2a52"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-page flex h-24 items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "flex shrink-0 items-center py-1",
					children: /* @__PURE__ */ jsx("img", {
						src: logo_default,
						alt: "AceYourTest",
						className: "h-14 w-auto min-w-[160px] max-w-[220px] object-contain object-left sm:h-16 sm:min-w-[180px] sm:max-w-[240px]"
					})
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: [mainNav.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						activeOptions: { exact: "exact" in n ? n.exact : false },
						className: navLinkBase,
						activeProps: { className: cn(navLinkBase, navLinkActive) },
						children: n.label
					}, n.to)), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsxs(DropdownMenuTrigger, {
						className: cn("inline-flex items-center gap-1 outline-none", navLinkBase, isContactActive && navLinkActive),
						children: ["Contact", /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-80" })]
					}), /* @__PURE__ */ jsx(DropdownMenuContent, {
						align: "end",
						className: "min-w-[11rem]",
						children: contactMenu.map((item) => /* @__PURE__ */ jsx(DropdownMenuItem, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Link, {
								to: item.to,
								className: "w-full cursor-pointer font-medium",
								activeProps: { className: "w-full cursor-pointer font-semibold text-primary" },
								children: item.label
							})
						}, item.to))
					})] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden md:flex items-center gap-3",
					children: [/* @__PURE__ */ jsxs("a", {
						href: "tel:+918800338783",
						className: "hidden xl:inline-flex items-center gap-2 text-sm font-semibold text-white/95 hover:text-white transition-colors",
						children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), " +91 88003 38783"]
					}), /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary transition-colors whitespace-nowrap",
						children: "Book Free Consultation"
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					"aria-label": "Menu",
					className: "lg:hidden p-2 -mr-2 text-white",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ jsx(X, { className: "h-7 w-7" }) : /* @__PURE__ */ jsx(Menu, { className: "h-7 w-7" })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "lg:hidden border-t",
			style: {
				borderColor: "#0a2a52",
				backgroundColor: "#081f3d"
			},
			children: /* @__PURE__ */ jsxs("nav", {
				className: "container-page py-4 flex flex-col gap-1",
				children: [
					mainNav.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						activeOptions: { exact: "exact" in n ? n.exact : false },
						onClick: () => setOpen(false),
						className: "px-3 py-3 text-sm font-semibold text-white/85 rounded-lg hover:bg-white/10",
						activeProps: { className: "px-3 py-3 text-sm font-semibold rounded-lg bg-white text-[#081f3d]" },
						children: n.label
					}, n.to)),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-2 border-t border-white/10 pt-3",
						children: [/* @__PURE__ */ jsx("p", {
							className: "px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-white/50",
							children: "Contact"
						}), contactMenu.map((item) => /* @__PURE__ */ jsx(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: "block px-3 py-2.5 text-sm font-medium text-white/85 rounded-lg hover:bg-white/10",
							activeProps: { className: "block px-3 py-2.5 text-sm font-semibold rounded-lg bg-white text-[#081f3d]" },
							children: item.label
						}, item.to))]
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white",
						children: "Book Free Consultation"
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "mt-16 bg-navy text-navy-foreground",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display font-bold",
							children: "A"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-display text-lg font-bold",
							children: "AceYourTest"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-sm text-white/70 leading-relaxed",
						children: "India's trusted GMAT, GRE & SAT coaching platform — personalized mentoring, proven systems, and admission support for global universities."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-5 flex gap-3",
						children: [
							Linkedin,
							Instagram,
							Facebook,
							Youtube
						].map((Icon, i) => /* @__PURE__ */ jsx("a", {
							href: "#",
							"aria-label": "Social",
							className: "grid h-9 w-9 place-items-center rounded-md bg-white/5 hover:bg-primary transition-colors",
							children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-semibold text-white uppercase tracking-wider",
					children: "Programs"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm text-white/70",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/gmat",
							className: "hover:text-white",
							children: "GMAT Preparation"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/gre",
							className: "hover:text-white",
							children: "GRE Preparation"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/sat",
							className: "hover:text-white",
							children: "SAT Preparation"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/study-abroad",
							className: "hover:text-white",
							children: "Study Abroad"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-semibold text-white uppercase tracking-wider",
					children: "Quick Links"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm text-white/70",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "hover:text-white",
							children: "About Us"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/success-stories",
							className: "hover:text-white",
							children: "Success Stories"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/blog",
							className: "hover:text-white",
							children: "Blog"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "hover:text-white",
							children: "Contact"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-semibold text-white uppercase tracking-wider",
					children: "Contact"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-3 text-sm text-white/75",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mt-0.5 shrink-0 text-primary" }), " Alaknanda, New Delhi, India"]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mt-0.5 shrink-0 text-primary" }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("a", {
								href: "tel:+918800338783",
								className: "block hover:text-white",
								children: "+91 88003 38783"
							}), /* @__PURE__ */ jsx("a", {
								href: "tel:+919310037791",
								className: "block hover:text-white",
								children: "+91 93100 37791"
							})] })]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mt-0.5 shrink-0 text-primary" }), /* @__PURE__ */ jsx("a", {
								href: "mailto:tarunkaushik@aceyourtest.in",
								className: "hover:text-white break-all",
								children: "tarunkaushik@aceyourtest.in"
							})]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-white/60",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" AceYourTest. All rights reserved."
				] }), /* @__PURE__ */ jsx("p", { children: "Made with care for ambitious students." })]
			})
		})]
	});
}
//#endregion
//#region src/components/site/WhatsAppFloat.tsx
function WhatsAppFloat() {
	return /* @__PURE__ */ jsxs("a", {
		href: "https://wa.me/918800338783?text=Hi%20AceYourTest%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs.",
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-success text-success-foreground px-4 py-3 shadow-elevated hover:scale-105 transition-transform",
		children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }), /* @__PURE__ */ jsx("span", {
			className: "hidden sm:inline text-sm font-semibold",
			children: "WhatsApp Us"
		})]
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-navy",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-navy",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-navy",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "AceYourTest — India's Trusted GMAT, GRE & SAT Coaching" },
			{
				name: "description",
				content: "Personalized GMAT, GRE & SAT coaching with expert mentor Tarun Kaushik. 10,000+ students trained, 700+ GMAT achievers, top global university admits."
			},
			{
				name: "author",
				content: "AceYourTest"
			},
			{
				property: "og:title",
				content: "AceYourTest — India's Trusted GMAT, GRE & SAT Coaching"
			},
			{
				property: "og:description",
				content: "Premium test prep & study abroad mentoring led by Tarun Kaushik — 15+ years experience, 10,000+ students trained."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "AceYourTest"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col bg-background",
			children: [
				/* @__PURE__ */ jsx(Header, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(Footer, {}),
				/* @__PURE__ */ jsx(WhatsAppFloat, {})
			]
		})
	});
}
//#endregion
//#region src/routes/testimonials.tsx
var $$splitComponentImporter$9 = () => import("./testimonials-6LFbye2f.js");
var Route$10 = createFileRoute("/testimonials")({
	head: () => ({
		meta: [
			{ title: "Testimonials & Reviews | AceYourTest" },
			{
				name: "description",
				content: "Video and written reviews from AceYourTest students — see why we're trusted by 10,000+ test takers."
			},
			{
				property: "og:title",
				content: "Testimonials — AceYourTest"
			},
			{
				property: "og:description",
				content: "Video and written reviews from AceYourTest students and parents."
			},
			{
				property: "og:url",
				content: "/testimonials"
			}
		],
		links: [{
			rel: "canonical",
			href: "/testimonials"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/success-stories.tsx
var $$splitComponentImporter$8 = () => import("./success-stories-Dp-Uqgl6.js");
var Route$9 = createFileRoute("/success-stories")({
	head: () => ({
		meta: [
			{ title: "Student Success Stories — GMAT, GRE, SAT | AceYourTest" },
			{
				name: "description",
				content: "Read inspiring success stories from AceYourTest students — top scores, global university admits and mentor-led journeys."
			},
			{
				property: "og:title",
				content: "Student Success Stories — AceYourTest"
			},
			{
				property: "og:description",
				content: "Real students. Real scores. Real admits — across MIT, Stanford, Oxford, Cornell and more."
			},
			{
				property: "og:url",
				content: "/success-stories"
			}
		],
		links: [{
			rel: "canonical",
			href: "/success-stories"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/study-abroad.tsx
var $$splitComponentImporter$7 = () => import("./study-abroad-yszmFGpj.js");
var Route$8 = createFileRoute("/study-abroad")({
	head: () => ({
		meta: [
			{ title: "Study Abroad Mentoring — Admissions Support | AceYourTest" },
			{
				name: "description",
				content: "End-to-end study abroad guidance — university shortlisting, SOP, LOR, applications, interviews and scholarships."
			},
			{
				property: "og:title",
				content: "Study Abroad Mentoring — AceYourTest"
			},
			{
				property: "og:description",
				content: "Premium admissions support — from university shortlist to scholarship guidance."
			},
			{
				property: "og:url",
				content: "/study-abroad"
			}
		],
		links: [{
			rel: "canonical",
			href: "/study-abroad"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$7 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/gmat",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/gre",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/sat",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/study-abroad",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/success-stories",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/testimonials",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/blog",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.8"
		}
	].map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/sat.tsx
var $$splitComponentImporter$6 = () => import("./sat-CG-QRTmF.js");
var Route$6 = createFileRoute("/sat")({
	head: () => ({
		meta: [
			{ title: "SAT Coaching — Digital SAT Mentor-Led Program | AceYourTest" },
			{
				name: "description",
				content: "Digital SAT coaching — foundation to mastery. Math + Reading + Writing prep for top US university admissions."
			},
			{
				property: "og:title",
				content: "SAT Coaching — AceYourTest"
			},
			{
				property: "og:description",
				content: "Foundation to mastery for the Digital SAT — built for US university admissions."
			},
			{
				property: "og:url",
				content: "/sat"
			}
		],
		links: [{
			rel: "canonical",
			href: "/sat"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/gre.tsx
var $$splitComponentImporter$5 = () => import("./gre-C0tqUTct.js");
var Route$5 = createFileRoute("/gre")({
	head: () => ({
		meta: [
			{ title: "GRE Coaching — 60+ Live Hours, Mentor-Led | AceYourTest" },
			{
				name: "description",
				content: "Premium GRE coaching with structured curriculum, 60+ live hours, mock exams and proven Quant + Verbal strategies."
			},
			{
				property: "og:title",
				content: "GRE Coaching — AceYourTest"
			},
			{
				property: "og:description",
				content: "Structured GRE program with Quant + Verbal mastery and admissions support."
			},
			{
				property: "og:url",
				content: "/gre"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gre"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/gmat.tsx
var $$splitComponentImporter$4 = () => import("./gmat-BYm5FuQf.js");
var Route$4 = createFileRoute("/gmat")({
	head: () => ({
		meta: [
			{ title: "GMAT Coaching in India — Live Classes, Mentor-Led | AceYourTest" },
			{
				name: "description",
				content: "Premium GMAT Focus Edition coaching with individual, group and self-study options. Quant + Verbal mastery, mock tests and admissions support."
			},
			{
				property: "og:title",
				content: "GMAT Coaching — AceYourTest"
			},
			{
				property: "og:description",
				content: "Crack GMAT Focus Edition with India's most trusted mentor-led prep program."
			},
			{
				property: "og:url",
				content: "/gmat"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gmat"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$3 = () => import("./contact-BW1L3WlE.js");
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact AceYourTest — Book a Free Consultation" },
			{
				name: "description",
				content: "Get in touch with AceYourTest — call, email or visit our Delhi office. Book a free consultation with our mentor team."
			},
			{
				property: "og:title",
				content: "Contact AceYourTest"
			},
			{
				property: "og:description",
				content: "Book a free consultation with our GMAT, GRE & SAT mentor team."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/blog.tsx
var $$splitComponentImporter$2 = () => import("./blog-Dg0iOiL9.js");
var Route$2 = createFileRoute("/blog")({
	head: () => ({
		meta: [
			{ title: "Blog — GMAT, GRE, SAT Tips & Admissions | AceYourTest" },
			{
				name: "description",
				content: "Expert insights, strategies and success stories for GMAT, GRE, SAT and study abroad admissions."
			},
			{
				property: "og:title",
				content: "AceYourTest Blog — Test Prep & Admissions Insights"
			},
			{
				property: "og:description",
				content: "Tips, strategies and stories from India's leading GMAT, GRE & SAT mentors."
			},
			{
				property: "og:url",
				content: "/blog"
			}
		],
		links: [{
			rel: "canonical",
			href: "/blog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-CsD6jUD6.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About AceYourTest — Our Story, Mission & Mentor" },
			{
				name: "description",
				content: "Learn how AceYourTest became one of India's most trusted GMAT, GRE & SAT coaching brands — led by quant expert Tarun Kaushik."
			},
			{
				property: "og:title",
				content: "About AceYourTest — Our Story, Mission & Mentor"
			},
			{
				property: "og:description",
				content: "How AceYourTest started, our mission, and the mentor journey of Tarun Kaushik."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-DWH_bvY6.js");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "AceYourTest — India's Trusted GMAT, GRE & SAT Coaching" },
			{
				name: "description",
				content: "Personalized mentoring, expert guidance, proven study systems, and admission support to secure top scores and global university admits."
			},
			{
				property: "og:title",
				content: "AceYourTest — India's Trusted GMAT, GRE & SAT Coaching"
			},
			{
				property: "og:description",
				content: "Personalized mentoring and admission support for GMAT, GRE & SAT — 10,000+ students trained."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var TestimonialsRoute = Route$10.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$11
});
var SuccessStoriesRoute = Route$9.update({
	id: "/success-stories",
	path: "/success-stories",
	getParentRoute: () => Route$11
});
var StudyAbroadRoute = Route$8.update({
	id: "/study-abroad",
	path: "/study-abroad",
	getParentRoute: () => Route$11
});
var SitemapDotxmlRoute = Route$7.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$11
});
var SatRoute = Route$6.update({
	id: "/sat",
	path: "/sat",
	getParentRoute: () => Route$11
});
var GreRoute = Route$5.update({
	id: "/gre",
	path: "/gre",
	getParentRoute: () => Route$11
});
var GmatRoute = Route$4.update({
	id: "/gmat",
	path: "/gmat",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var BlogRoute = Route$2.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AboutRoute,
	BlogRoute,
	ContactRoute,
	GmatRoute,
	GreRoute,
	SatRoute,
	SitemapDotxmlRoute,
	StudyAbroadRoute,
	SuccessStoriesRoute,
	TestimonialsRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
