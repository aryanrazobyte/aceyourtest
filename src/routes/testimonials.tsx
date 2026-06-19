import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle, Star } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials & Reviews | AceYourTest" },
      { name: "description", content: "Video and written reviews from AceYourTest students — see why we're trusted by 10,000+ test takers." },
      { property: "og:title", content: "Testimonials — AceYourTest" },
      { property: "og:description", content: "Video and written reviews from AceYourTest students and parents." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const videos = [
  { name: "Aarav Mehta", score: "GMAT 745" },
  { name: "Riya Sharma", score: "GRE 332" },
  { name: "Kabir Anand", score: "SAT 1530" },
];

const reviews = [
  { name: "Sneha P.", body: "The mentor support is on another level. Tarun sir personally tracked my progress and pushed me to score 720 on the GMAT.", rating: 5 },
  { name: "Rohan G.", body: "Best decision I made for my GRE prep. Structured, intense and outcome-focused.", rating: 5 },
  { name: "Aditi K.", body: "The SAT program is genuinely premium — small batches, modern material and clear results.", rating: 5 },
  { name: "Nikhil S.", body: "Admissions support was as strong as the test prep. Got into my dream school.", rating: 5 },
  { name: "Priya M.", body: "Worth every rupee. The mocks and analytics are next level.", rating: 5 },
  { name: "Devansh R.", body: "Doubt resolution on WhatsApp within hours — saved me so many times.", rating: 5 },
];

function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Reviews & Testimonials" title="Trusted by 10,000+ students and parents" subtitle="Hear directly from our students — across GMAT, GRE, SAT and study abroad." />

      <section className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Video Reviews" title="Stories from our students" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <div key={v.name} className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-navy shadow-card">
                <div className="absolute inset-0 grid place-items-center text-white">
                  <PlayCircle className="h-14 w-14 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <p className="font-semibold">{v.name}</p>
                  <p className="text-xs text-white/80">{v.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader eyebrow="Written Reviews" title="Real reviews from our community" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-3 text-sm text-foreground leading-relaxed">"{r.body}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-navy">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
