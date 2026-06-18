import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { EnquiryForm } from "../components/site/EnquiryForm";

export const Route = createFileRoute("/gmat")({
  head: () => ({
    meta: [
      { title: "GMAT Coaching in India — Live Classes, Mentor-Led | AceYourTest" },
      { name: "description", content: "Premium GMAT Focus Edition coaching with individual, group and self-study options. Quant + Verbal mastery, mock tests and admissions support." },
      { property: "og:title", content: "GMAT Coaching — AceYourTest" },
      { property: "og:description", content: "Crack GMAT Focus Edition with India's most trusted mentor-led prep program." },
      { property: "og:url", content: "/gmat" },
    ],
    links: [{ rel: "canonical", href: "/gmat" }],
  }),
  component: GmatPage,
});

const courseOptions = [
  { title: "Individual Coaching", desc: "1-on-1 sessions with Tarun — fully personalized pace, plan and problem sets.", price: "Custom Plan", popular: false },
  { title: "Group Coaching", desc: "Small-batch live classes with structured curriculum, drills and weekly mocks.", price: "Most Popular", popular: true },
  { title: "Self-Study Package", desc: "Recorded curriculum, problem sets, mocks and mentor check-ins on demand.", price: "Flexible", popular: false },
];

const faqs = [
  { q: "Which GMAT format do you prepare for?", a: "We prepare students for the GMAT Focus Edition — Quant, Verbal and Data Insights — with the latest official-style problem sets." },
  { q: "How long does the program take?", a: "Most students complete the core program in 10–14 weeks. Timelines flex based on your baseline and target score." },
  { q: "Are mocks included?", a: "Yes — full-length, timed mocks with detailed analytics and a 1-on-1 review session after each mock." },
  { q: "Do you help with admissions?", a: "Yes — SOP, LOR, university shortlisting and interview prep are included with most programs." },
];

function GmatPage() {
  return (
    <>
      <PageHero eyebrow="GMAT Program" title="Crack GMAT Focus Edition with a mentor-led system" subtitle="A structured Quant + Verbal + Data Insights program — built around the latest GMAT Focus syllabus, proven frameworks and small-batch attention." />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeader eyebrow="Why GMAT Matters" title="The gateway to top global MBA programs" subtitle="A strong GMAT score remains the single biggest scholarship and admission lever for leading business schools across the US, Europe and Asia." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Accepted by 7,700+ programs at 2,400+ schools",
                "Scholarships often unlocked above 700",
                "Score validity: 5 years",
                "Computer-adaptive, 2hr 15min format",
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 rounded-lg bg-surface border border-border p-4 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" /> {b}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <SectionHeader eyebrow="Course Options" title="Pick the program that fits your goal" />
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {courseOptions.map((c) => (
                  <div key={c.title} className={`rounded-2xl border bg-card p-6 shadow-card ${c.popular ? "border-primary ring-1 ring-primary/30" : "border-border"}`}>
                    <p className="text-xs font-semibold tracking-widest uppercase text-primary">{c.price}</p>
                    <h3 className="mt-2 font-display text-lg font-bold text-navy">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <SectionHeader eyebrow="Study Plan" title="A 4-phase journey to your target score" />
              <ol className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { n: "01", t: "Diagnostic & Plan", d: "Baseline mock, gap analysis and a personalized 10–14 week study plan." },
                  { n: "02", t: "Concept Mastery", d: "Live classes on Quant, Verbal and Data Insights with daily problem sets." },
                  { n: "03", t: "Application & Drills", d: "Mixed-topic drills, timing strategy and full-length mock tests." },
                  { n: "04", t: "Final Push & Admits", d: "Mock review, last-mile sprints and admissions guidance for target schools." },
                ].map((s) => (
                  <li key={s.n} className="rounded-xl border border-border bg-card p-5 shadow-card">
                    <p className="font-display text-2xl font-bold text-primary">{s.n}</p>
                    <h4 className="mt-2 font-display font-semibold text-navy">{s.t}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12">
              <SectionHeader eyebrow="FAQ" title="GMAT prep — common questions" />
              <div className="mt-6 space-y-3">
                {faqs.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-border bg-card p-5 shadow-card">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="font-display font-semibold text-navy">{f.q}</span>
                      <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm title="Get your GMAT plan" />
          </aside>
        </div>
      </section>

      <CtaBand title="Ready to plan your GMAT journey?" subtitle="Book a free strategy call with our mentor team today." />
    </>
  );
}
