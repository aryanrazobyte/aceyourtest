import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { EnquiryForm } from "../components/site/EnquiryForm";

export const Route = createFileRoute("/sat")({
  head: () => ({
    meta: [
      { title: "SAT Coaching — Digital SAT Mentor-Led Program | AceYourTest" },
      { name: "description", content: "Digital SAT coaching — foundation to mastery. Math + Reading + Writing prep for top US university admissions." },
      { property: "og:title", content: "SAT Coaching — AceYourTest" },
      { property: "og:description", content: "Foundation to mastery for the Digital SAT — built for US university admissions." },
      { property: "og:url", content: "/sat" },
    ],
    links: [{ rel: "canonical", href: "/sat" }],
  }),
  component: SatPage,
});

function SatPage() {
  return (
    <>
      <PageHero eyebrow="SAT Program" title="Master the Digital SAT — built for US university admits" subtitle="A foundation-to-mastery program for Math and Reading & Writing — paired with university preparation for top US admissions." />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeader eyebrow="SAT Overview" title="The Digital SAT, decoded" subtitle="Shorter, adaptive and module-based — the Digital SAT rewards students who train on the exact format and pacing." />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-xl font-bold text-navy">Math Section</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Algebra, advanced math, problem-solving and data analysis — drilled with calculator strategy and time-boxed practice.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-xl font-bold text-navy">Reading Section</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Vocabulary in context, evidence-based comprehension and the Digital SAT's short-passage logic patterns.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-xl font-bold text-navy">Writing Section</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Standard English conventions, rhetoric and editing strategies that consistently raise section scores.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-xl font-bold text-navy">University Admissions Benefits</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">A strong SAT score unlocks scholarships, merit awards and stronger admission outcomes at US universities.</p>
              </div>
            </div>

            <div className="mt-12">
              <SectionHeader eyebrow="What's Included" title="Foundation, mastery and beyond" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Foundation Building modules",
                  "Concept Mastery deep dives",
                  "Full-length Bluebook-style mocks",
                  "Personalized study plans",
                  "Weekly mentor check-ins",
                  "University shortlist & application support",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" /> {b}</li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <SectionHeader eyebrow="Student Success" title="Top SAT scorers from AceYourTest" />
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { name: "Kabir A.", score: "1530", uni: "NYU" },
                  { name: "Ananya R.", score: "1510", uni: "Purdue" },
                  { name: "Vihaan M.", score: "1490", uni: "Cornell" },
                ].map((s) => (
                  <div key={s.name} className="rounded-xl border border-border bg-card p-5 shadow-card text-center">
                    <p className="font-display text-3xl font-bold text-primary">{s.score}</p>
                    <p className="mt-1 font-semibold text-navy">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.uni}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm title="Plan your SAT prep" />
          </aside>
        </div>
      </section>

      <CtaBand title="Targeting a top US university?" subtitle="Speak with a mentor and build your SAT + admissions strategy." />
    </>
  );
}
