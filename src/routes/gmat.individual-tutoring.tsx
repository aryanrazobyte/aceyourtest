import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  User,
  Target,
  BarChart3,
  BookOpen,
  Clock,
  Layers,
  Sparkles,
  Zap,
  Calendar,
  Trophy,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { EnquiryForm } from "../components/site/EnquiryForm";
import { BOOK_CONSULTATION_PATH } from "../lib/site-constants";

export const Route = createFileRoute("/gmat/individual-tutoring")({
  head: () => ({
    meta: [
      {
        title: "GMAT Private Tutoring — Elite 1-on-1 Coaching | AceYourTest",
      },
      {
        name: "description",
        content:
          "Elite 1-on-1 GMAT Focus Edition coaching with Tarun Kaushik. Personalized study plans, 100,000+ practice questions, 20+ mock tests, and flexible pay-as-you-go sessions at ₹4,999/hour.",
      },
      {
        property: "og:title",
        content: "GMAT Private Tutoring — AceYourTest",
      },
      {
        property: "og:description",
        content:
          "Achieve your target GMAT score through completely personalized private coaching — customized roadmap, adaptive learning, and direct mentor access.",
      },
      { property: "og:url", content: "/gmat/individual-tutoring" },
    ],
    links: [{ rel: "canonical", href: "/gmat/individual-tutoring" }],
  }),
  component: GmatPrivateTutoringPage,
});

const PROGRAM_IMAGE =
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781943926/5_toiten.png";

const whyChooseItems = [
  "Fully Personalized 1-on-1 Coaching",
  "Customized Learning Roadmap",
  "Flexible Learning Pace",
  "Direct Mentor Access",
  "Faster Score Improvement",
  "Individual Performance Tracking",
];

const blueprintCards = [
  {
    icon: Target,
    title: "Personalized Study Plan & Score Strategy",
    desc: "Every student begins with a detailed evaluation that forms the foundation of a customized preparation strategy.",
    items: [
      "Comprehensive Diagnostic Assessment",
      "Target Score Planning",
      "Personalized Weekly Study Schedule",
      "Strength & Weakness Analysis",
      "Improvement Roadmap",
    ],
  },
  {
    icon: BookOpen,
    title: "Comprehensive Concept Mastery",
    desc: "Master every section of the GMAT with structured learning designed around your individual learning needs.",
    items: [
      "Quantitative Reasoning",
      "Verbal Reasoning",
      "Data Insights",
      "Critical Thinking",
      "Test Strategy",
      "Decision-Making Skills",
    ],
  },
  {
    icon: BarChart3,
    title: "Adaptive Learning System",
    desc: "Your study plan continuously adapts based on your performance, ensuring you spend time only where improvement is needed.",
    items: [
      "Personalized Assignments",
      "Adaptive Practice Sets",
      "Difficulty-Based Learning",
      "Continuous Progress Optimization",
      "Efficient Preparation",
    ],
  },
  {
    icon: User,
    title: "Direct Mentor Guidance",
    desc: "Receive uninterrupted access to expert mentorship throughout your preparation journey.",
    items: [
      "Instant Doubt Resolution",
      "Question-by-Question Discussion",
      "Strategy Sessions",
      "Mock Test Reviews",
      "MBA Admission Guidance",
    ],
  },
];

const sessionStructure = [
  {
    step: "1",
    title: "Personalized Concept Learning",
    desc: "Learn complex GMAT concepts through structured explanations designed specifically for your current preparation level.",
    outcome: "Strong conceptual foundation, logical reasoning, and exam confidence.",
  },
  {
    step: "2",
    title: "Guided Problem Solving",
    desc: "Practice carefully selected GMAT-level questions under expert supervision.",
    outcome: "Speed, accuracy, decision-making, and time management.",
  },
  {
    step: "3",
    title: "Performance Analysis",
    desc: "Every mistake is carefully reviewed to eliminate recurring errors and improve future performance.",
    outcome: "Error correction, pattern recognition, smarter solving methods, and score consistency.",
  },
  {
    step: "4",
    title: "Personalized Action Plan",
    desc: "Conclude every session with a customized roadmap for independent study before your next class.",
    outcome: "Daily study goals, revision planning, practice recommendations, and weekly milestones.",
  },
];

const programHighlights = [
  "Personalized 1-on-1 Coaching",
  "Customized Study Plans",
  "Comprehensive Diagnostic Assessment",
  "Official GMAT Study Material",
  "Instructor-Curated Study Notes",
  "Adaptive Learning Framework",
  "Advanced Test Strategies",
  "Continuous Mentor Feedback",
];

const studyResources = [
  "Official GMAT Study Material",
  "Premium Instructor Notes",
  "Concept Frameworks",
  "Practice Worksheets",
  "Advanced Strategy Guides",
  "Mock Test Library",
  "Session Summaries",
  "Personalized Assignments",
];

const analyticsItems = [
  "Accuracy Analysis",
  "Speed Analysis",
  "Topic-Wise Performance",
  "Time Management Reports",
  "Weak Area Identification",
  "Improvement Trends",
];

const progressTracking = [
  "Weekly Progress Reviews",
  "Score Improvement Reports",
  "Study Plan Adjustments",
  "Goal Tracking",
  "Personalized Recommendations",
];

const quantTopics = [
  "Arithmetic",
  "Algebra",
  "Word Problems",
  "Number Properties",
  "Statistics",
  "Geometry Foundations",
  "Ratios & Percentages",
  "Data Sufficiency Techniques",
];

const verbalFocus = [
  "Reading Comprehension",
  "Critical Reasoning",
  "Sentence Analysis",
  "Logical Evaluation",
  "Argument Strengthening",
  "Inference Skills",
];

const dataInsightsTopics = [
  "Data Sufficiency",
  "Multi-Source Reasoning",
  "Table Analysis",
  "Graphics Interpretation",
  "Two-Part Analysis",
  "Integrated Data Evaluation",
];

const scheduleOptions = [
  "Weekday Sessions",
  "Weekend Sessions",
  "Morning Slots",
  "Evening Slots",
  "Flexible Rescheduling",
  "Personalized Learning Calendar",
];

const idealFor = [
  "Students targeting 705–755+ GMAT scores",
  "Working professionals preparing alongside full-time jobs",
  "MBA applicants with limited preparation time",
  "Candidates seeking maximum personalization",
  "Students retaking the GMAT",
  "Applicants aiming for top global business schools",
];

const practiceComponents = [
  "100,000+ Curated Practice Questions",
  "20+ Sectional Mock Tests",
  "Adaptive Practice Modules",
  "Topic-Wise Practice Sessions",
  "Exam Simulation Exercises",
];

const deliverables = [
  {
    component: "Private Coaching",
    deliverables: "100% One-on-One Sessions",
    benefits: "Personalized Learning",
  },
  {
    component: "Study Strategy",
    deliverables: "Customized Study Plan",
    benefits: "Faster Score Improvement",
  },
  {
    component: "Diagnostic Assessment",
    deliverables: "Complete Performance Evaluation",
    benefits: "Targeted Preparation",
  },
  {
    component: "Practice Library",
    deliverables: "100,000+ Questions",
    benefits: "Extensive Practice",
  },
  {
    component: "Mock Tests",
    deliverables: "20+ Sectional Tests",
    benefits: "Exam Readiness",
  },
  {
    component: "Study Material",
    deliverables: "Official + Premium Notes",
    benefits: "Comprehensive Learning",
  },
  {
    component: "Performance Analytics",
    deliverables: "Detailed Reports",
    benefits: "Continuous Improvement",
  },
  {
    component: "Mentor Support",
    deliverables: "Instant Doubt Resolution",
    benefits: "Direct Expert Guidance",
  },
];

const pricingIncludes = [
  "Personalized 1-on-1 Coaching",
  "Customized Study Plan",
  "Comprehensive Diagnostic Assessment",
  "Official GMAT Study Material",
  "Premium Instructor Notes",
  "100,000+ Practice Questions",
  "20+ Sectional Mock Tests",
  "Advanced Performance Analytics",
  "Continuous Mentor Support",
  "Flexible Scheduling",
];

function TopicPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-navy sm:text-sm"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function GmatPrivateTutoringPage() {
  return (
    <>
      <PageHero
        eyebrow="GMAT Private Tutoring"
        title="Elite 1-on-1 GMAT Private Tutoring"
        subtitle="Achieve your target GMAT score through completely personalized coaching with Tarun Kaushik — tailored to your strengths, timeline, and MBA aspirations."
      >
        <Link
          to={BOOK_CONSULTATION_PATH}
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors"
        >
          Book Your Private GMAT Coaching
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8 sm:space-y-10">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="flex items-center justify-center border-b border-border bg-gradient-to-br from-white via-white to-surface p-6 sm:p-8">
                <img
                  src={PROGRAM_IMAGE}
                  alt="GMAT private one on one tutoring"
                  loading="lazy"
                  decoding="async"
                  className="h-auto max-h-[260px] w-full max-w-md object-contain"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  Every session is tailored to your strengths, weaknesses, timeline, and MBA
                  aspirations — ensuring maximum efficiency and measurable score improvement.
                </p>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Whether you&apos;re targeting a top global MBA program or looking to significantly
                  improve your GMAT performance, our premium private tutoring program delivers a
                  personalized roadmap designed exclusively for you.
                </p>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Why Private Tutoring"
                title="A Coaching Experience Built Around You"
                subtitle="Unlike traditional classroom programs, every lesson is fully customized to your current ability, learning style, and target score. Your preparation evolves based on your progress — not a fixed curriculum."
              />
              <div className="section-gap grid gap-2 sm:grid-cols-2">
                {whyChooseItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm shadow-card"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="The Advantage" title="The Private Tutoring Advantage" />
              <div className="section-gap grid gap-4">
                {blueprintCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                        <card.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy">{card.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Every Session"
                title="Structure of Every Private Session"
              />
              <div className="section-gap grid gap-3 sm:grid-cols-2">
                {sessionStructure.map((s) => (
                  <div
                    key={s.title}
                    className="relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-card"
                  >
                    <span className="absolute right-3 top-3 text-3xl font-bold text-primary/15">
                      {s.step}
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {s.step}
                    </span>
                    <h3 className="mt-3 font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-navy">
                      Builds
                    </p>
                    <p className="mt-1 text-sm text-foreground">{s.outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
              <SectionHeader
                eyebrow="Learning Experience"
                title="Premium Learning Experience"
                subtitle="Designed to maximize your GMAT score through focused, personalized instruction."
              />
              <div className="section-gap grid gap-2 sm:grid-cols-2">
                {programHighlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm"
                  >
                    <Zap className="h-4 w-4 shrink-0 text-primary" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center gap-2 text-primary">
                  <BookOpen className="h-5 w-5" />
                  <h3 className="font-bold text-navy">Complete GMAT Preparation Resources</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {studyResources.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center gap-2 text-primary">
                  <BarChart3 className="h-5 w-5" />
                  <h3 className="font-bold text-navy">Advanced Performance Analytics</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Every practice session generates detailed insights to guide future improvement.
                </p>
                <ul className="mt-4 space-y-2">
                  {analyticsItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Practice"
                title="Intensive Practice Framework"
                subtitle="Preparation is driven by consistent, targeted practice."
              />
              <div className="section-gap grid gap-4 sm:grid-cols-2">
                {practiceComponents.map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 rounded-xl border border-border bg-card p-4 text-sm shadow-card"
                  >
                    <Layers className="h-4 w-4 shrink-0 text-primary" />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="Curriculum" title="Master Every GMAT Section" />
              <div className="section-gap space-y-4">
                <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Quantitative Reasoning</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Build strong mathematical reasoning and efficient problem-solving techniques.
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">Topics</p>
                  <div className="mt-2">
                    <TopicPills items={quantTopics} />
                  </div>
                </article>
                <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Verbal Reasoning</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Develop advanced reading, reasoning, and language skills required for high GMAT
                    scores.
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
                    Focus Areas
                  </p>
                  <div className="mt-2">
                    <TopicPills items={verbalFocus} />
                  </div>
                </article>
                <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Data Insights</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Master the newest GMAT section through strategic data interpretation and
                    analytical thinking.
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">Topics</p>
                  <div className="mt-2">
                    <TopicPills items={dataInsightsTopics} />
                  </div>
                </article>
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="Schedules" title="Flexible Scheduling" />
              <p className="mb-4 text-sm text-muted-foreground">
                Designed around your professional and academic commitments.
              </p>
              <div className="flex flex-wrap gap-2">
                {scheduleOptions.map((option) => (
                  <span
                    key={option}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-navy"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  <h3 className="font-bold text-navy">Continuous Progress Tracking</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {progressTracking.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-surface p-5 shadow-card">
                <div className="flex items-center gap-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                  <h3 className="font-bold text-navy">Ideal For</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-accent/30 bg-accent/10 p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-navy">Pay-As-You-Go Flexibility</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                No long-term lock-in — book sessions as you need them. Ideal for working
                professionals and students who want full control over their preparation pace.
              </p>
            </div>

            <div>
              <SectionHeader eyebrow="Deliverables" title="Program Deliverables" />
              <div className="section-gap overflow-hidden rounded-xl border border-border bg-card shadow-card">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[520px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-border bg-navy text-navy-foreground">
                        <th className="px-4 py-3 font-semibold">Program Component</th>
                        <th className="px-4 py-3 font-semibold">Deliverables</th>
                        <th className="px-4 py-3 font-semibold">Student Benefits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deliverables.map((row, i) => (
                        <tr
                          key={row.component}
                          className={i % 2 === 0 ? "bg-card" : "bg-surface/80"}
                        >
                          <td className="px-4 py-3 font-semibold text-navy">{row.component}</td>
                          <td className="px-4 py-3 text-foreground">{row.deliverables}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.benefits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-navy to-secondary p-6 text-white shadow-elevated sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                Program Investment
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Premium GMAT Private Tutoring
              </h3>
              <p className="mt-2 text-3xl font-bold text-accent sm:text-4xl">₹4,999</p>
              <p className="mt-1 text-sm text-white/70">Per Hour · Flexible pay-as-you-go</p>
              <p className="mt-4 text-sm font-semibold text-white/90">Includes:</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {pricingIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to={BOOK_CONSULTATION_PATH}
                className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a Free Strategy Consultation
              </Link>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <SectionHeader eyebrow="Contact" title="Start Your GMAT Success Journey" />
              <p className="mt-2 text-sm text-muted-foreground">
                Book a personalized consultation and discover how private tutoring can help you
                achieve your target GMAT score.
              </p>
              <ul className="section-gap mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3 font-semibold text-navy">Tarun Kaushik</li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href="tel:+918800338783" className="hover:text-navy">
                    +91 88003 38783
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:tarunkaushik@aceyourtest.in" className="break-all hover:text-navy">
                    tarunkaushik@aceyourtest.in
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Alaknanda, New Delhi, India
                </li>
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-20 h-fit space-y-4">
            <EnquiryForm title="Book a Free Strategy Consultation" />
            <div className="rounded-xl border border-border bg-surface p-4 space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Coaching format</span>
                <span className="font-semibold text-navy">100% Private 1-on-1</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Practice Qs</span>
                <span className="font-semibold text-navy">100,000+</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Mock tests</span>
                <span className="font-semibold text-navy">20+</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Schedule</span>
                <span className="font-semibold text-navy">Flexible</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Fee</span>
                <span className="font-bold text-primary">₹4,999/hr</span>
              </div>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center text-sm">
              <p className="font-semibold text-navy">Direct mentorship with Tarun Kaushik</p>
              <p className="mt-1 text-muted-foreground">
                Personalized roadmap · No long-term lock-in
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Sparkles className="h-4 w-4 text-primary" />
                Compare all programs
              </div>
              <Link
                to="/gmat/plans-pricing"
                className="mt-2 block text-sm text-primary hover:underline"
              >
                GMAT Plans &amp; Pricing →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Transform Your GMAT Preparation"
        subtitle="Experience a completely personalized coaching journey built around your goals. With expert mentorship, adaptive learning, detailed performance analysis, and flexible scheduling, GMAT Private Tutoring provides everything you need to maximize your score."
      />
    </>
  );
}
