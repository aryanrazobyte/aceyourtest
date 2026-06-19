import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { CtaBand } from "../components/site/CtaBand";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Student Success Stories — GMAT, GRE, SAT | AceYourTest" },
      { name: "description", content: "Read inspiring success stories from AceYourTest students — top scores, global university admits and mentor-led journeys." },
      { property: "og:title", content: "Student Success Stories — AceYourTest" },
      { property: "og:description", content: "Real students. Real scores. Real admits — across MIT, Stanford, Oxford, Cornell and more." },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
  component: SuccessPage,
});

const stories = [
  { name: "Aarav Mehta", score: "GMAT 745", uni: "INSEAD", test: "GMAT", story: "From a baseline of 620 to 745 in 14 weeks. The quant frameworks and weekly mentor reviews made the difference." },
  { name: "Riya Sharma", score: "GRE 332", uni: "Cornell University", test: "GRE", story: "Personalized study plan, brilliant verbal strategies and admissions support — Cornell felt achievable from week one." },
  { name: "Kabir Anand", score: "SAT 1530", uni: "NYU", test: "SAT", story: "Small batches, focused attention and razor-sharp practice. The Digital SAT format clicked within the first month." },
  { name: "Ishita Verma", score: "GMAT 730", uni: "MIT Sloan", test: "GMAT", story: "AceYourTest helped me build my profile, ace the GMAT and tell a story Sloan couldn't ignore." },
  { name: "Arjun Pillai", score: "GRE 329", uni: "Purdue", test: "GRE", story: "The mock-review sessions were game-changing. Each mock made me sharper, faster and more confident." },
  { name: "Ananya R.", score: "SAT 1510", uni: "Purdue", test: "SAT", story: "Crisp curriculum, mentor accountability and a clear path to my dream school." },
  { name: "Meera K.", score: "GRE 325", uni: "NUS", test: "GRE", story: "From struggling with quant to a 167 on test day — I owe it to Tarun sir's frameworks." },
  { name: "Vihaan M.", score: "SAT 1490", uni: "Cornell", test: "SAT", story: "The strategy on reading and writing was the unlock — went from 1320 to 1490 in 3 months." },
];

function SuccessPage() {
  return (
    <>
      <PageHero eyebrow="Success Stories" title="Real students. Real scores. Real admits." subtitle="A growing community of students placed across the world's most competitive universities." />

      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <article key={s.name} className="rounded-2xl border border-border bg-card p-6 shadow-card flex flex-col">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-navy text-navy-foreground font-bold text-lg">
                  {s.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-navy">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.test} · {s.uni}</p>
                </div>
                <span className="ml-auto rounded-md bg-primary/10 text-primary px-2.5 py-1 text-xs font-semibold">{s.score}</span>
              </div>
              <div className="mt-4 flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-3 text-sm text-foreground leading-relaxed flex-1">"{s.story}"</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Be the next success story." subtitle="Book a free strategy call with our mentor team." />
    </>
  );
}
