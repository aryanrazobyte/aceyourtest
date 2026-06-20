import type { ComponentType, ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { BOOK_CONSULTATION_PATH } from "@/lib/site-constants";
import type { LucideIcon } from "lucide-react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ArrowRight,
  GraduationCap,
  Globe2,
  Trophy,
  MessageCircle,
} from "lucide-react";
import logoImg from "@/assets/logo.png";
import { GRE_COACHING_CITIES } from "@/lib/gre-coaching-cities";
import { GMAT_COACHING_CITIES } from "@/lib/gmat-coaching-cities";
import { SAT_COACHING_CITIES } from "@/lib/sat-coaching-cities";

function QuoraIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.738 18.701c-1.86 1.489-4.196 2.408-6.738 2.408-1.027 0-2.01-.17-2.919-.48l1.778-2.835c.518.175 1.07.27 1.642.27.99 0 1.9-.293 2.675-.793L5.21 7.3h3.42l2.41 5.36 2.41-5.36h3.42l-4.768 8.49 2.546 4.211z" />
    </svg>
  );
}

const socials: { icon: LucideIcon | ComponentType<{ className?: string }>; href: string; label: string }[] = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/ace-your-test-delhi", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/aceyourtestofficial", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/aceyourtest_official/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/Tarun_Tutor", label: "Twitter" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UC7ri7HaH02gDmRw6kM_1Clg", label: "YouTube" },
  { icon: QuoraIcon, href: "https://www.quora.com/profile/Tarun-Kaushik-14", label: "Quora" },
];

const programs = [
  { to: "/gmat", label: "GMAT Preparation" },
  { to: "/gre", label: "GRE Preparation" },
  { to: "/sat", label: "SAT Preparation" },
  { to: "/study-abroad", label: "Study Abroad" },
] as const;

const resources = [
  { to: "/about", label: "About Us" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const quickLinks = [
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund Policy" },
  { to: "/privacy-policy", label: "Privacy Policy" },
] as const;

const coachingRegions = [
  {
    exam: "GMAT",
    cities: GMAT_COACHING_CITIES.map((city) => ({
      to: `/gmat/${city.slug}`,
      label: city.label,
    })),
  },
  {
    exam: "GRE",
    cities: GRE_COACHING_CITIES.map((city) => ({
      to: `/gre/${city.slug}`,
      label: city.label,
    })),
  },
  {
    exam: "SAT",
    cities: SAT_COACHING_CITIES.map((city) => ({
      to: `/sat/${city.slug}`,
      label: city.label,
    })),
  },
] as const;

const highlights = [
  { icon: GraduationCap, value: "10,000+", label: "Students trained" },
  { icon: Trophy, value: "700+", label: "GMAT achievers" },
  { icon: Globe2, value: "Top", label: "Global admits" },
];

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-white/90">
      <span className="relative inline-block pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-6 after:rounded-full after:bg-primary">
        {children}
      </span>
    </h4>
  );
}

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-white"
    >
      <span className="h-px w-0 bg-primary transition-all group-hover:w-2" aria-hidden />
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]"
        aria-hidden
      />
      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent" aria-hidden />

      {/* CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Free strategy session</p>
            <p className="mt-1 text-base font-bold text-white sm:text-lg">
              Start your GMAT, GRE or SAT journey today
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-2 sm:w-auto">
            <Link
              to={BOOK_CONSULTATION_PATH}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:flex-none"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/918800338783"
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:flex-none"
            >
              <MessageCircle className="h-4 w-4 text-success" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-b border-white/10 bg-white/[0.03]">
        <div className="container-page grid grid-cols-3 gap-3 py-4 sm:gap-6">
          {highlights.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2 sm:gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary sm:h-10 sm:w-10">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white sm:text-base">{value}</p>
                <p className="text-[10px] text-white/55 sm:text-xs">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className="container-page relative py-8 sm:py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-3">
            <Link to="/" className="inline-flex items-center">
              <img src={logoImg} alt="AceYourTest" className="h-10 w-auto object-contain sm:h-11" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              India&apos;s trusted GMAT, GRE &amp; SAT coaching — personalized mentoring, proven
              systems, and admission support for top global universities.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-primary/40 hover:bg-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <FooterHeading>Programs</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {programs.map((item) => (
                <li key={item.to}>
                  <FooterLink to={item.to}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Coaching regions */}
          <div className="lg:col-span-3">
            <FooterHeading>Coaching Regions</FooterHeading>
            <div className="mt-4 space-y-4">
              {coachingRegions.map((group) => (
                <div key={group.exam}>
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-primary">
                    {group.exam}
                  </p>
                  <ul className="flex flex-wrap gap-x-3 gap-y-2">
                    {group.cities.map((city) => (
                      <li key={city.to}>
                        <Link
                          to={city.to}
                          className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70 transition hover:border-primary/30 hover:bg-primary/15 hover:text-white"
                        >
                          {city.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <FooterHeading>Resources</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {resources.map((item) => (
                <li key={item.to}>
                  <FooterLink to={item.to}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <FooterLink to={item.to}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-2">
            <FooterHeading>Get in Touch</FooterHeading>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-white/75">Alaknanda, New Delhi, India</span>
              </li>
              <li className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm">
                  <a href="tel:+918800338783" className="block text-white/75 hover:text-white">
                    +91 88003 38783
                  </a>
                  <a href="tel:+919310037791" className="block text-white/75 hover:text-white">
                    +91 93100 37791
                  </a>
                </span>
              </li>
              <li className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:tarunkaushik@aceyourtest.in"
                  className="break-all text-sm text-white/75 hover:text-white"
                >
                  tarunkaushik@aceyourtest.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-4 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} AceYourTest. All rights reserved.</p>
          <p className="text-center sm:text-right">
            <span className="text-white/60">Website created &amp; developed by </span>
            <a
              href="https://www.razobyte.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 hover:text-white underline"
            >
              Razobyte
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
