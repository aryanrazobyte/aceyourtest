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

import { posts, categories } from "../lib/blog-data";

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
