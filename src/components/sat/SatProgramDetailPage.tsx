import { Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles, Target } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { BOOK_CONSULTATION_PATH } from "@/lib/site-constants";
import type { SatProgramPageConfig } from "@/lib/sat-program-pages";

export function SatProgramDetailPage({ program }: { program: SatProgramPageConfig }) {
  return (
    <>
      <PageHero eyebrow={program.eyebrow} title={program.title} subtitle={program.subtitle}>
        <Link
          to={BOOK_CONSULTATION_PATH}
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors"
        >
          {program.heroCta}
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8 sm:space-y-10">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="flex items-center justify-center border-b border-border bg-gradient-to-br from-white via-white to-surface p-6 sm:p-8">
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-auto max-h-[260px] w-full max-w-md object-contain"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-sm sm:text-base text-foreground leading-relaxed">{program.intro[0]}</p>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {program.intro[1]}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-card">
              <SectionHeader eyebrow="Program" title="What's Included" />
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {program.features.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {program.idealFor.length > 0 && (
              <div className="rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-surface p-5 sm:p-6">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                  <Target className="h-3.5 w-3.5 text-primary" />
                  Ideal for
                </p>
                <ul className="mt-3 space-y-2">
                  {program.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-navy to-secondary p-6 text-white shadow-elevated sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Program Investment</p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Full Course Fee</h3>
              <p className="mt-2 text-3xl font-bold text-accent sm:text-4xl">{program.price}</p>
              <p className="mt-1 text-sm text-white/70">{program.priceNote}</p>
              <Link
                to={BOOK_CONSULTATION_PATH}
                className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {program.heroCta}
              </Link>
            </div>
          </div>

          <aside className="h-fit space-y-4 lg:sticky lg:top-20">
            <EnquiryForm title={program.enquiryTitle} />
            <div className="rounded-xl border border-border bg-surface p-4 space-y-3 text-sm">
              {program.sidebarHighlights.map((item, index) => (
                <div
                  key={item.label}
                  className={
                    index < program.sidebarHighlights.length - 1
                      ? "flex justify-between border-b border-border pb-2"
                      : "flex justify-between"
                  }
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span
                    className={
                      item.label === "Fee" ? "font-bold text-primary" : "font-semibold text-navy"
                    }
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Sparkles className="h-4 w-4 text-primary" />
                Compare all programs
              </div>
              <Link
                to="/sat/plans-pricing"
                className="mt-2 block text-sm text-primary hover:underline"
              >
                SAT Plans &amp; Pricing →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title={`Start Your ${program.eyebrow} Journey`}
        subtitle="Book a consultation with Tarun Kaushik and discover the Digital SAT preparation path best suited to your US university goals."
      />
    </>
  );
}
