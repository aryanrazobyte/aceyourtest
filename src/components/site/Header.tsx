import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { BookConsultationButton } from "@/components/site/BookConsultationButton";

const mainNav = [
  { to: "/", label: "Home", exact: true },
  { to: "/gmat", label: "GMAT" },
  { to: "/gre", label: "GRE" },
  { to: "/sat", label: "SAT" },
  { to: "/study-abroad", label: "Study Abroad" },
  { to: "/success-stories", label: "Success Stories" },
] as const;

const contactMenu = [
  { to: "/contact", label: "Contact Us" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
] as const;

const gmatMenu = [
  { to: "/gmat/plans-pricing", label: "GMAT Plans and Pricing" },
  // { to: "/gmat/hyderabad", label: "GMAT Coaching in Hyderabad" },
  // { to: "/gmat/mumbai", label: "GMAT Coaching in Mumbai" },
  // { to: "/gmat/noida", label: "GMAT Coaching in Noida" },
  // { to: "/gmat/gurgaon", label: "GMAT Coaching in Gurgaon" },
  // { to: "/gmat/pune", label: "GMAT Coaching in Pune" },
  { to: "/gmat/top-university-cutoff", label: "Top University GMAT Cut-off" },
] as const;

const greMenu = [
  { to: "/gre/private-tutoring", label: "GRE One On One Private Tutoring" },
  { to: "/gre/test-prep-courses", label: "GRE Test Prep Courses Group Classes Programs" },
  { to: "/gre/plans-pricing", label: "GRE Plans and Pricing" },
  // { to: "/gre/gurgaon", label: "GRE Coaching" },
  // { to: "/gre/mumbai", label: "GRE Coaching in Mumbai" },
  // { to: "/gre/noida", label: "GRE Coaching in Noida" },
  // { to: "/gre/pune", label: "GRE Coaching in Pune" },
  // { to: "/gre/hyderabad", label: "GRE Coaching in Hyderabad" },
] as const;

const satMenu = [
  { to: "/sat/plans-pricing", label: "SAT Plans and Pricing" },
  // { to: "/sat/gurgaon", label: "SAT Coaching in Gurgaon" },
  // { to: "/sat/noida", label: "SAT Coaching in Noida" },
  // { to: "/sat/mumbai", label: "SAT Coaching in Mumbai" },
  // { to: "/sat/hyderabad", label: "SAT Coaching in Hyderabad" },
  // { to: "/sat/pune", label: "SAT Coaching in Pune" },
] as const;

const contactPaths = ["/contact", "/about", "/blog"];

const examMenus: Record<string, readonly { to: string; label: string }[]> = {
  GMAT: gmatMenu,
  GRE: greMenu,
  SAT: satMenu,
};

const navLinkInactive =
  "px-3.5 py-2.5 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap text-white/90 hover:text-white hover:bg-white/10";

const navLinkActive =
  "px-3.5 py-2.5 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap bg-primary text-white shadow-md hover:bg-primary hover:text-white";

function isNavActive(pathname: string, to: string, exact = false) {
  if (exact) return pathname === to;
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [openExamMenu, setOpenExamMenu] = useState<string | null>(null);
  const { location } = useRouterState();
  const isContactActive = contactPaths.includes(location.pathname);

  useEffect(() => {
    setOpenExamMenu(null);
  }, [location.pathname]);

  return (
    <header
      className="border-b shadow-md"
      style={{ backgroundColor: "#081f3d", borderColor: "#0a2a52" }}
    >
      <div className="container-page flex h-14 sm:h-16 items-center justify-between gap-3 sm:gap-4">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logoImg}
            alt="AceYourTest"
            className="h-10 w-auto max-w-[160px] object-contain object-left sm:h-12 sm:max-w-[200px]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {mainNav.map((n) => {
            const active = isNavActive(
              location.pathname,
              n.to,
              "exact" in n ? n.exact : false,
            );

            if (n.label in examMenus) {
              const menu = examMenus[n.label];
              const isExamMenuOpen = openExamMenu === n.label;

              return (
                <div
                  key={n.to}
                  className="relative"
                  onMouseEnter={() => setOpenExamMenu(n.label)}
                  onMouseLeave={() => setOpenExamMenu(null)}
                >
                  <div
                    className={cn(
                      "inline-flex items-center rounded-lg",
                      active ? navLinkActive : navLinkInactive,
                    )}
                  >
                    <Link
                      to={n.to}
                      className="px-3.5 py-2.5 hover:bg-white/10 transition-colors rounded-l-lg"
                      onClick={() => setOpenExamMenu(null)}
                    >
                      {n.label}
                    </Link>
                    <span
                      className="px-2 py-2.5 border-l border-white/15 rounded-r-lg"
                      aria-hidden
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 opacity-80 transition-transform duration-200",
                          isExamMenuOpen && "rotate-180",
                        )}
                      />
                    </span>
                  </div>

                  {isExamMenuOpen && (
                    <div className="absolute left-0 top-full z-50 pt-1">
                      <div className="min-w-[16rem] rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md">
                        {menu.map((item) => {
                          const itemActive = location.pathname === item.to;
                          return (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={() => setOpenExamMenu(null)}
                              className={cn(
                                "block w-full rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                                itemActive && "font-semibold text-primary",
                              )}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={n.to} to={n.to} className={active ? navLinkActive : navLinkInactive}>
                {n.label}
              </Link>
            );
          })}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "inline-flex items-center gap-1 outline-none",
                isContactActive ? navLinkActive : navLinkInactive,
              )}
            >
              Contact
              <ChevronDown className="h-4 w-4 opacity-80" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[11rem]">
              {contactMenu.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link
                      to={item.to}
                      className={cn(
                        "w-full cursor-pointer font-medium",
                        active && "font-semibold text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <BookConsultationButton className="rounded-lg px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm whitespace-nowrap" />
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden p-2 -mr-2 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden border-t"
          style={{ borderColor: "#0a2a52", backgroundColor: "#081f3d" }}
        >
          <nav className="container-page py-3 flex flex-col gap-0.5">
            {mainNav.map((n) => {
              const active = isNavActive(
                location.pathname,
                n.to,
                "exact" in n ? n.exact : false,
              );
              const subMenu = examMenus[n.label];

              if (subMenu) {
                return (
                  <div key={n.to} className="rounded-lg">
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-3 py-3 text-sm font-semibold rounded-lg",
                        active
                          ? "bg-primary text-white shadow-md"
                          : "text-white/85 hover:bg-white/10",
                      )}
                    >
                      {n.label}
                    </Link>
                    <div className="ml-3 mt-0.5 border-l border-white/10 pl-2">
                      {subMenu.map((item) => {
                        const subActive = location.pathname === item.to;
                        return (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "block px-3 py-2 text-xs rounded-lg leading-snug",
                              subActive
                                ? "bg-primary/90 text-white font-semibold"
                                : "text-white/70 hover:bg-white/10 hover:text-white",
                            )}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-3 text-sm font-semibold rounded-lg",
                    active
                      ? "bg-primary text-white shadow-md"
                      : "text-white/85 hover:bg-white/10",
                  )}
                >
                  {n.label}
                </Link>
              );
            })}

            <div className="mt-2 border-t border-white/10 pt-3">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                Contact
              </p>
              {contactMenu.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block px-3 py-2.5 text-sm rounded-lg",
                      active
                        ? "bg-primary text-white shadow-md font-semibold"
                        : "font-medium text-white/85 hover:bg-white/10",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <BookConsultationButton
              onClick={() => setOpen(false)}
              className="mt-4 w-full rounded-lg px-4 py-3 text-sm"
            />
          </nav>
        </div>
      )}
    </header>
  );
}
