import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { EnquiryForm } from "../components/site/EnquiryForm";

export const Route = createFileRoute("/gre")({
  head: () => ({
    meta: [
      { title: "GRE Coaching — 60+ Live Hours, Mentor-Led | AceYourTest" },
      { name: "description", content: "Premium GRE coaching with structured curriculum, 60+ live hours, mock exams and proven Quant + Verbal strategies." },
      { property: "og:title", content: "GRE Coaching — AceYourTest" },
      { property: "og:description", content: "Structured GRE program with Quant + Verbal mastery and admissions support." },
      { property: "og:url", content: "/gre" },
    ],
    links: [{ rel: "canonical", href: "/gre" }],
  }),
  component: GrePage,
});

const faqs = [
  { q: "How many live hours are included?", a: "60+ live class hours covering Quant, Verbal Reasoning and Analytical Writing, plus mock-review sessions." },
  { q: "Which study material is used?", a: "Curated material covering official-style problems, our proprietary problem sets and ETS PowerPrep mocks." },
  { q: "Do you support MS admissions?", a: "Yes — university shortlisting, SOP, LOR review and interview prep are included." },
];

function GrePage() {
  return (
    <>
      <PageHero eyebrow="GRE Program" title="Score higher on the GRE with a structured, mentor-led program" subtitle="60+ live hours of curriculum, intensive practice and full-length mocks — designed for top MS and PhD admissions." />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeader eyebrow="GRE Overview" title="The most flexible test for graduate admissions" subtitle="Accepted by thousands of MS, MBA and PhD programs worldwide. The shorter GRE format rewards a focused, well-trained test-taker." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "60+ Live Hours of structured curriculum",
                "Quant + Verbal strategy frameworks",
                "Full-length, timed mock exams",
                "Mentor-led mock reviews",
                "AWA writing feedback",
                "Admissions and SOP support",
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 rounded-lg bg-surface border border-border p-4 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" /> {b}
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-xl font-bold text-navy">Quant Strategy</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">From arithmetic foundations to advanced data interpretation — we drill the exact patterns the GRE tests, with timing tactics for each question type.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-xl font-bold text-navy">Verbal Strategy</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Targeted vocabulary, RC frameworks and a logic-first approach to text completion and sentence equivalence.</p>
              </div>
            </div>

            <div className="mt-12">
              <SectionHeader eyebrow="Success Stories" title="Students who hit their target GRE score" />
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { name: "Riya S.", score: "332", uni: "Cornell" },
                  { name: "Arjun P.", score: "329", uni: "Purdue" },
                  { name: "Meera K.", score: "325", uni: "NUS" },
                ].map((s) => (
                  <div key={s.name} className="rounded-xl border border-border bg-card p-5 shadow-card text-center">
                    <p className="font-display text-3xl font-bold text-primary">{s.score}</p>
                    <p className="mt-1 font-semibold text-navy">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.uni}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <SectionHeader eyebrow="FAQ" title="GRE prep — common questions" />
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
            <EnquiryForm title="Plan your GRE prep" />
          </aside>
        </div>
      </section>

      <CtaBand title="Aiming for a 325+?" subtitle="Talk to a mentor and get a personalized GRE roadmap." />
    </>
  );
}
