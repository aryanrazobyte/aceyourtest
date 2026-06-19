import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Flag, Users } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AceYourTest — Our Story, Mission & Mentor" },
      { name: "description", content: "Learn how AceYourTest became one of India's most trusted GMAT, GRE & SAT coaching brands — led by quant expert Tarun Kaushik." },
      { property: "og:title", content: "About AceYourTest — Our Story, Mission & Mentor" },
      { property: "og:description", content: "How AceYourTest started, our mission, and the mentor journey of Tarun Kaushik." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A mentor-led prep platform built for ambitious students"
        subtitle="AceYourTest was founded with a simple belief — every focused student, with the right mentor and system, can score in the top percentile and earn an admit at a world-class university."
      />

      <section className="section-y">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Our Story" title="From one mentor to 10,000+ students" />
            <div className="mt-5 space-y-4 text-foreground leading-relaxed">
              <p>AceYourTest began over a decade ago as a small batch of GMAT aspirants meeting around a whiteboard in Delhi. Word spread quickly — students were not just scoring higher, they were learning how to think under pressure.</p>
              <p>Today, AceYourTest is one of India's most trusted GMAT, GRE and SAT coaching platforms — with live online and classroom programs, mentor-led admissions support, and a community of students placed across MIT, Stanford, Oxford, Cambridge, INSEAD, Cornell, NYU, NUS and more.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Target, title: "Mission", text: "Help every student achieve their global education goals through personalized mentoring and proven prep systems." },
              { icon: Eye, title: "Vision", text: "Be India's most trusted GMAT, GRE & SAT coaching platform — known for outcomes and integrity." },
              { icon: Flag, title: "Approach", text: "Small batches, structured curriculum, weekly mentor check-ins and data-driven mocks." },
              { icon: Users, title: "Community", text: "An active alumni network across global universities, available to guide our current students." },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><c.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_1.2fr] items-center">
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-4 rounded-3xl bg-primary/15" aria-hidden />
            <img src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1781780949/arb_qebzqg.png" alt="Tarun Kaushik" loading="lazy" width={1024} height={1280} className="relative rounded-2xl shadow-elevated w-full h-auto object-cover" />
          </div>
          <div>
            <SectionHeader eyebrow="Mentor Journey" title="Tarun Kaushik — 15+ years guiding test-takers" subtitle="A quant expert across GMAT, GRE and SAT, Tarun has trained 10,000+ students and worked with several leading test-prep organisations before founding AceYourTest." />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "15+ years of full-time test-prep coaching",
                "10,000+ students mentored 1-on-1 and in batches",
                "Specialist in Quant for GMAT, GRE & SAT",
                "Built proprietary frameworks for problem-solving",
                "Mentor for top-percentile scorers across cohorts",
                "Hands-on with each student's study plan",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground"><CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" /> {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            { v: "10,000+", l: "Students Trained" },
            { v: "700+", l: "GMAT Achievers" },
            { v: "325+", l: "GRE Achievers" },
            { v: "1,450+", l: "SAT Achievers" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <p className="text-3xl font-bold text-navy">{s.v}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
