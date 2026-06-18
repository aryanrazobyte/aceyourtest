import { createFileRoute } from "@tanstack/react-router";
import { Calendar, ArrowRight } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { CtaBand } from "../components/site/CtaBand";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — GMAT, GRE, SAT Tips & Admissions | AceYourTest" },
      { name: "description", content: "Expert insights, strategies and success stories for GMAT, GRE, SAT and study abroad admissions." },
      { property: "og:title", content: "AceYourTest Blog — Test Prep & Admissions Insights" },
      { property: "og:description", content: "Tips, strategies and stories from India's leading GMAT, GRE & SAT mentors." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const categories = ["All", "GMAT Tips", "GRE Tips", "SAT Tips", "Study Abroad", "Success Stories", "Admissions"];

const posts = [
  { cat: "GMAT Tips", title: "How to break 700 on the GMAT Focus Edition", desc: "A four-phase plan used by our top scorers — built around Quant, Verbal and Data Insights.", date: "May 12, 2026", read: "8 min" },
  { cat: "GRE Tips", title: "GRE Quant: the 12 patterns that drive every question", desc: "Stop solving question-by-question. Start recognizing the patterns the GRE actually tests.", date: "May 04, 2026", read: "6 min" },
  { cat: "SAT Tips", title: "Digital SAT: pacing strategy for the adaptive module", desc: "How to manage time on Module 1 to unlock the higher-difficulty Module 2.", date: "Apr 22, 2026", read: "5 min" },
  { cat: "Study Abroad", title: "How to build a stand-out university shortlist", desc: "A repeatable framework to pick safe, target and stretch schools — without guesswork.", date: "Apr 10, 2026", read: "7 min" },
  { cat: "Admissions", title: "The 5 mistakes that quietly sink strong SOPs", desc: "Even great writers make these. A simple editing checklist before you hit submit.", date: "Mar 28, 2026", read: "6 min" },
  { cat: "Success Stories", title: "From 620 to 745: Aarav's INSEAD journey", desc: "How a structured 14-week plan and weekly mentor reviews turned things around.", date: "Mar 16, 2026", read: "9 min" },
];

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog & Resources" title="Strategies, tips and stories from the AceYourTest mentor team" subtitle="In-depth articles to help you prep smarter, apply better and choose wisely." />

      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button key={c} className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${i === 0 ? "bg-navy text-navy-foreground border-navy" : "border-border bg-card text-foreground hover:bg-muted"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article key={p.title} className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elevated transition-shadow flex flex-col">
                <div className="aspect-[16/9] bg-gradient-to-br from-navy to-secondary relative">
                  <span className="absolute top-4 left-4 rounded-md bg-white/95 text-navy px-2.5 py-1 text-xs font-semibold">{p.cat}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-navy group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date} · {p.read}</span>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold">Read <ArrowRight className="h-3.5 w-3.5" /></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
