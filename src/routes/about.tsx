import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Flag, Users } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { MentorProfile } from "../components/site/MentorProfile";
import { shipraMentor, tarunMentor } from "../lib/mentors-content";

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
      { title: "About AceYourTest — Our Story, Mission & Mentors" },
      { name: "description", content: "Learn how AceYourTest became one of India's most trusted GMAT, GRE & SAT coaching brands — led by quant expert Tarun Kaushik and verbal expert Shipra Sharma." },
      { property: "og:title", content: "About AceYourTest — Our Story, Mission & Mentors" },
      { property: "og:description", content: "How AceYourTest started, our mission, and the mentor journeys of Tarun Kaushik and Shipra Sharma." },
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

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page space-y-12 sm:space-y-14 lg:space-y-16">
          <SectionHeader
            eyebrow="Our Mentors"
            title="Meet the mentors behind your success"
            subtitle="Two lead mentors — one for Quant mastery, one for Verbal excellence — guiding thousands of GMAT, GRE and SAT aspirants toward top scores and global admits."
            center
          />

          <MentorProfile
            eyebrow="Mentor Journey"
            image={tarunMentor.image}
            imageAlt={tarunMentor.imageAlt}
            title={tarunMentor.title}
            subtitle={tarunMentor.homeSubtitle}
            highlights={tarunMentor.highlights}
            paragraphs={tarunMentor.aboutParagraphs}
            hideStoryLink
          />

          <div className="relative">
            <div
              className="absolute inset-x-0 -top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent sm:block lg:-top-8"
              aria-hidden
            />
            <MentorProfile
              reversed
              eyebrow="Mentor Journey"
              image={shipraMentor.image}
              imageAlt={shipraMentor.imageAlt}
              title={shipraMentor.title}
              subtitle={shipraMentor.homeSubtitle}
              highlights={shipraMentor.highlights}
              paragraphs={shipraMentor.aboutParagraphs}
              hideStoryLink
            />
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
