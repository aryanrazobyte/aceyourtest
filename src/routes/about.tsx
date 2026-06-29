import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Flag, Users } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { MENTOR_IMAGE, MENTOR_NAME } from "../lib/site-constants";

const corePillars = [
  {
    title: "Concept-First Learning",
    text: "Building deep understanding before speed",
  },
  {
    title: "Intensive Practice Framework",
    text: "Exam-level pressure training for real performance",
  },
  {
    title: "Mentor-Led Guidance",
    text: "Personalised feedback and strategic improvement",
  },
  {
    title: "Outcome-Driven Approach",
    text: "Focused on scores, admits, and scholarships",
  },
] as const;

function OrangeCheck() {
  return (
    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary shadow-sm">
      <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden>
        <path
          d="M5 10l3.5 3.5L15 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

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
            <SectionHeader eyebrow="Our Story & Philosophy" title="From one mentor to 10,000+ students" />
            <div className="mt-5 space-y-4 text-foreground leading-relaxed">
              <p>AceYourTest began over a decade ago as a small group of GMAT aspirants gathering around a whiteboard in Delhi. What started as informal mentoring quickly grew into something far more powerful—students were not only improving scores, but learning how to think clearly, solve under pressure, and perform when it mattered most.</p>
              <p>Founded by Tarun Kaushik, driven by a deep passion for teaching and simplifying complex problem-solving, AceYourTest was built on a single belief: great outcomes come from great thinking, not rote preparation. His focus was always on clarity, discipline, and transforming the way students approach competitive exams.</p>
              <p>Today, AceYourTest is one of India’s most trusted GMAT, GRE, and SAT preparation platforms, offering live online and classroom programs, along with mentor-led admissions guidance. Our students have secured admits across MIT, Stanford, Oxford, Cambridge, INSEAD, Cornell, NYU, NUS, and many other leading global universities.</p>
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

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="What Sets Us Apart"
            title="Our core pillars"
            subtitle="What sets us apart are our core pillars — the principles behind every program, every mock, and every admit we chase together."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group flex gap-4 rounded-xl border border-border bg-card p-5 sm:p-6 shadow-card transition hover:border-primary/40 hover:shadow-elevated"
              >
                <OrangeCheck />
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-navy group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_1.2fr] items-center">
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-4 rounded-3xl bg-primary/15" aria-hidden />
            <img src={MENTOR_IMAGE} alt={MENTOR_NAME} loading="lazy" width={800} height={800} className="relative rounded-2xl shadow-elevated w-full h-auto object-cover" />
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
            { v: "330+", l: "GRE Achievers" },
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
