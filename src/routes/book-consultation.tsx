import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Clock,
  GraduationCap,
  Sparkles,
  Star,
  Trophy,
  Users,
  Video,
} from "lucide-react";
import DemoForm from "../components/site/Popup/DemoForm";
import { MENTOR_IMAGE, MENTOR_NAME } from "../lib/site-constants";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book Free Consultation — GMAT, GRE & SAT | AceYourTest" },
      {
        name: "description",
        content:
          "Schedule a free 30-minute strategy session with Tarun Kaushik. Personalized GMAT, GRE & SAT mentoring for top global university admits.",
      },
      { property: "og:title", content: "Book Free Consultation — AceYourTest" },
      {
        property: "og:description",
        content:
          "Free 1-on-1 demo session with India's trusted GMAT, GRE & SAT mentor.",
      },
      { property: "og:url", content: "/book-consultation" },
    ],
    links: [{ rel: "canonical", href: "/book-consultation" }],
  }),
  component: BookConsultationPage,
});

const perks = [
  { icon: Clock, label: "30-min free session" },
  { icon: Video, label: "Live online demo" },
  { icon: Users, label: "1-on-1 with mentor" },
  { icon: GraduationCap, label: "Admissions guidance" },
];

const highlights = [
  "Personalized score roadmap",
  "Quant + Verbal strategy review",
  "No obligation · 100% free",
];

const stats = [
  { value: "10,000+", label: "Students mentored" },
  { value: "15+", label: "Years experience" },
  { value: "99th", label: "Percentile focus" },
];

function BookConsultationPage() {
  return (
    <div className="relative overflow-hidden bg-surface">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,color-mix(in_oklch,var(--navy)_8%,transparent)_1px,transparent_0)] [background-size:22px_22px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl" aria-hidden />

      {/* Top banner */}
      <section className="relative border-b border-border bg-navy text-white">
        <div className="container-page py-6 sm:py-8 animate-fade-in-up">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <span className="eyebrow text-primary">Free strategy session</span>
          </div>
          <h1 className="mt-2 text-2xl font-bold sm:text-4xl">
            Book Your <span className="text-primary">Free Consultation</span>
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/75 sm:text-base">
            Schedule a one-on-one demo with {MENTOR_NAME} — focused on maximizing your
            GMAT / GRE score and your dream university admit.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main form layout */}
      <section className="section-y relative">
        <div className="container-page">
          <div
            className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-elevated lg:grid-cols-[1fr_1.1fr] animate-scale-in"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Mentor panel */}
            <div className="relative min-h-[280px] lg:min-h-[640px]">
              <img
                src={MENTOR_IMAGE}
                alt={`${MENTOR_NAME}, Founder and Lead Mentor at AceYourTest`}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10" />

              <div className="relative flex h-full flex-col justify-between p-5 sm:p-7 lg:p-8">
                <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                  <p className="inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    Lead Mentor
                  </p>
                  
                  
                </div>

                <div className="mt-6 space-y-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-lg font-bold text-white">{MENTOR_NAME}</p>
                    <p className="text-sm text-white/70">Founder &amp; Lead Mentor · Quant Expert</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-lg border border-white/10 bg-white/5 px-2 py-2.5 text-center backdrop-blur-sm"
                      >
                        <p className="text-sm font-bold text-accent sm:text-base">{s.value}</p>
                        <p className="text-[10px] text-white/65 sm:text-xs">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute right-6 top-8 hidden animate-float-gentle rounded-full border border-accent/40 bg-accent/20 p-3 lg:block">
                <Trophy className="h-6 w-6 text-accent" />
              </div>
            </div>

            {/* Form panel */}
            <div className="p-5 sm:p-7 lg:p-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="mb-6">
                <p className="text-2xl font-bold text-navy sm:text-3xl leading-tight">
                  The start to your <span className="text-primary">99.9% Score</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill in your details — our team will confirm your free demo session within 24 hours.
                </p>
              </div>

              <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {perks.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center rounded-xl border border-border bg-surface px-2 py-3 text-center transition hover:border-primary/30 hover:shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <p className="mt-1.5 text-[10px] font-semibold text-navy sm:text-xs leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <DemoForm />

              <p className="mt-4 text-center text-xs text-muted-foreground">
                By submitting you agree to our{" "}
                <a href="#" className="text-primary underline hover:text-secondary">
                  terms and conditions
                </a>
                . Your information is kept confidential.
              </p>
            </div>
          </div>

          {/* Bottom trust row */}
          <div
            className="mt-6 grid gap-3 sm:grid-cols-3 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              "Trusted by students placed at MIT, Stanford, INSEAD & more",
              "Small batches · Personalized attention · Proven frameworks",
              "GMAT, GRE, SAT & study abroad admissions support",
            ].map((text) => (
              <div
                key={text}
                className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
