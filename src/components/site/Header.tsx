import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logoImg from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

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
  { to: "/gmat/hyderabad", label: "GMAT Coaching in Hyderabad" },
  { to: "/gmat/mumbai", label: "GMAT Coaching in Mumbai" },
  { to: "/gmat/noida", label: "GMAT Coaching in Noida" },
  { to: "/gmat/gurgaon", label: "GMAT Coaching in Gurgaon" },
  { to: "/gmat/pune", label: "GMAT Coaching in Pune" },
  { to: "/gmat/top-university-cutoff", label: "Top University GMAT Cut-off" },
] as const;

const greMenu = [
  { to: "/gre/private-tutoring", label: "GRE One On One Private Tutoring" },
  { to: "/gre/test-prep-courses", label: "GRE Test Prep Courses Group Classes Programs" },
  { to: "/gre/plans-pricing", label: "GRE Plans and Pricing" },
  { to: "/gre/gurgaon", label: "GRE Coaching in Gurgaon" },
  // { to: "/gre/mumbai", label: "GRE Coaching in Mumbai" },
  // { to: "/gre/noida", label: "GRE Coaching in Noida" },
  // { to: "/gre/pune", label: "GRE Coaching in Pune" },
  // { to: "/gre/hyderabad", label: "GRE Coaching in Hyderabad" },
] as const;

const satMenu = [
  { to: "/sat/plans-pricing", label: "SAT Plans and Pricing" },
  { to: "/sat/gurgaon", label: "SAT Coaching in Gurgaon" },
  { to: "/sat/noida", label: "SAT Coaching in Noida" },
  { to: "/sat/mumbai", label: "SAT Coaching in Mumbai" },
  { to: "/sat/hyderabad", label: "SAT Coaching in Hyderabad" },
  { to: "/sat/pune", label: "SAT Coaching in Pune" },
] as const;

const contactPaths = ["/contact", "/about", "/blog"];

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
  const [gmatOpen, setGmatOpen] = useState(false);
  const [greOpen, setGreOpen] = useState(false);
  const [satOpen, setSatOpen] = useState(false);
  const { location } = useRouterState();
  const isContactActive = contactPaths.includes(location.pathname);

  return (
    <header
      className="border-b shadow-md"
      style={{ backgroundColor: "#081f3d", borderColor: "#0a2a52" }}
    >
      <div className="container-page flex h-28 items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center py-1">
          <img
            src={logoImg}
            alt="AceYourTest"
            className="h-16 w-auto min-w-[200px] max-w-[280px] object-contain object-left sm:h-[4.5rem] sm:min-w-[220px] sm:max-w-[300px]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {mainNav.map((n) => {
            const active = isNavActive(
              location.pathname,
              n.to,
              "exact" in n ? n.exact : false,
            );

            // Render a dropdown for GMAT / GRE / SAT items
            if (n.label === "GMAT" || n.label === "GRE" || n.label === "SAT") {
              const isGmat = n.label === "GMAT";
              const isGre = n.label === "GRE";
              const isSat = n.label === "SAT";
              const menu = isGmat ? gmatMenu : isGre ? greMenu : satMenu;
              const openState = isGmat ? gmatOpen : isGre ? greOpen : satOpen;
              const setOpenState = isGmat ? setGmatOpen : isGre ? setGreOpen : setSatOpen;
              const basePath = isGmat ? "/gmat" : isGre ? "/gre" : "/sat";

              return (
                <DropdownMenu key={n.to} open={openState} onOpenChange={setOpenState}>
                  <div onMouseEnter={() => setOpenState(true)} onMouseLeave={() => setOpenState(false)}>
                    <DropdownMenuTrigger asChild>
                      <div className={cn("inline-flex items-center gap-1 outline-none cursor-pointer", active ? navLinkActive : navLinkInactive)}>
                        <Link to={basePath} className="block">{n.label}</Link>
                        <ChevronDown className="h-4 w-4 opacity-80" />
                      </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="start"
                      className="min-w-[16rem]"
                      onMouseEnter={() => setOpenState(true)}
                      onMouseLeave={() => setOpenState(false)}
                    >
                      {menu.map((item) => {
                        const itemActive = location.pathname === item.to;
                        return (
                          <DropdownMenuItem key={item.to} asChild>
                            <Link to={item.to as any} className={cn("w-full block py-2 px-3 text-sm", itemActive && "font-semibold text-primary")}>{item.label}</Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </div>
                </DropdownMenu>
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

        <div className="hidden md:flex items-center gap-3">
          
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary transition-colors whitespace-nowrap"
          >
            Book Free Consultation
          </Link>
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
          <nav className="container-page py-4 flex flex-col gap-1">
            {mainNav.map((n) => {
              const active = isNavActive(
                location.pathname,
                n.to,
                "exact" in n ? n.exact : false,
              );
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

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white"
            >
              Book Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
