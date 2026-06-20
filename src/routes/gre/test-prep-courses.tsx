import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Users,
  Target,
  BarChart3,
  BookOpen,
  Clock,
  Video,
  Layers,
  Sparkles,
  MessageCircle,
  Zap,
  Calendar,
  Trophy,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { PageHero } from "../../components/site/PageHero";
import { SectionHeader } from "../../components/site/SectionHeader";
import { CtaBand } from "../../components/site/CtaBand";
import { EnquiryForm } from "../../components/site/EnquiryForm";
import { BOOK_CONSULTATION_PATH } from "../../lib/site-constants";

export const Route = createFileRoute("/gre/test-prep-courses")({
  head: () => ({
    meta: [
      {
        title: "GRE Test Prep Group Classes — Live Cohorts | AceYourTest",
      },
      {
        name: "description",
        content:
          "High-impact GRE group preparation with Tarun Kaushik. Small batches of 10, 50+ live hours, 5,000+ questions, mock tests, and collaborative cohort learning.",
      },
      {
        property: "og:title",
        content: "GRE Group Classes & Test Prep Programs — AceYourTest",
      },
      {
        property: "og:description",
        content:
          "Master the GRE in elite small cohorts — live classes, study vault, accountability, and top mentor access.",
      },
      { property: "og:url", content: "/gre/test-prep-courses" },
    ],
    links: [{ rel: "canonical", href: "/gre/test-prep-courses" }],
  }),
  component: GreTestPrepCoursesPage,
});

const cohortBenefits = [
  "Collaborative problem-solving and discussion",
  "Exposure to multiple solving strategies",
  "Healthy academic competition",
  "Continuous motivation and accountability",
  "Direct mentor interaction during every session",
];

const blueprintCards = [
  {
    icon: Users,
    title: "Small Batch Focus",
    desc: "Each batch is strictly limited to a maximum of 10 students so Tarun Kaushik can closely monitor performance and guide customized improvement strategies.",
    items: [
      "Personalized attention",
      "Interactive learning environment",
      "Better mentor accessibility",
      "Enhanced performance tracking",
      "Stronger student engagement",
    ],
  },
  {
    icon: Sparkles,
    title: "Peer Brainstorming",
    desc: "Learn alongside highly motivated GRE aspirants who share similar academic goals through active discussion and strategy comparison.",
    items: [
      "Verbal reasoning discussions",
      "Reading comprehension analysis",
      "Mathematical shortcut discovery",
      "Strategy comparisons",
      "Group error analysis",
    ],
  },
  {
    icon: Target,
    title: "Personal Support",
    desc: "Although the program operates in a group format, students receive personalized guidance whenever needed via one-on-one mentoring sessions.",
    items: [
      "Individual weaknesses",
      "Study planning challenges",
      "Score improvement strategies",
      "Test anxiety management",
      "Application-related concerns",
    ],
  },
];

const sessionStructure = [
  {
    step: "1",
    title: "Core Concept Delivery",
    desc: "Learn GRE concepts and solving algorithms using Tarun Kaushik's globally recognized study framework and proprietary notes.",
    outcome: "Deep conceptual clarity rather than memorization techniques.",
  },
  {
    step: "2",
    title: "Active Practice",
    desc: "Intensive timed drills designed to simulate actual GRE pressure.",
    outcome: "Speed, accuracy, decision-making skills, and time management.",
  },
  {
    step: "3",
    title: "Collective Deconstruction",
    desc: "Every question is analyzed thoroughly after practice.",
    outcome: "Common mistakes, test-maker traps, hidden patterns, and faster solution paths.",
  },
  {
    step: "4",
    title: "Score Action Planning",
    desc: "Personalized wrap-up at the end of every session.",
    outcome: "Study recommendations, daily action plans, performance diagnostics, and improvement priorities.",
  },
];

const programHighlights = [
  "50+ Hours of Live Interactive Classes",
  "Intensive Concept Workshops",
  "Advanced Problem-Solving Sessions",
  "Real GRE Strategy Discussions",
  "Expert-Led Performance Reviews",
  "Personalized Study Schedules",
];

const accountabilityItems = [
  "Weekly Performance Reviews",
  "Cohort Progress Check-ins",
  "Detailed Error Tracking",
  "Improvement Diagnostics",
  "Strategic Course Corrections",
];

const studyVault = [
  "Comprehensive GRE Study Notes",
  "Conceptual Learning Frameworks",
  "Advanced Quantitative Techniques",
  "Vocabulary Systems",
  "Verbal Logic Training Modules",
  "Practice Worksheets",
  "Session Recordings",
];

const quantTopics = [
  "Number Systems",
  "Algebra",
  "Arithmetic",
  "Word Problems",
  "Geometry",
  "Coordinate Geometry",
  "Statistics",
  "Probability",
  "Permutations & Combinations",
];

const quantTypes = [
  "Quantitative Comparison",
  "Problem Solving",
  "Numeric Entry",
  "Data Interpretation",
];

const verbalFocus = [
  "Academic Vocabulary Development",
  "Sentence Logic",
  "Critical Reading Skills",
  "Argument Analysis",
  "Passage Interpretation",
  "Author Intent Recognition",
];

const verbalTypes = ["Text Completion", "Sentence Equivalence", "Reading Comprehension"];

const diTopics = [
  "Tables",
  "Charts",
  "Graphs",
  "Multiple Data Sets",
  "Trend Analysis",
  "Comparative Analysis",
];

const diSkills = [
  "Rapid Calculations",
  "Percentage Analysis",
  "Ratio Applications",
  "Average Calculations",
  "Growth Rate Interpretation",
];

const practiceComponents = [
  "Full-Length GRE Mock Tests",
  "Sectional Mock Tests",
  "Adaptive Practice Modules",
  "Timed Drill Sessions",
  "Performance Analytics",
];

const communityBenefits = [
  "24/7 Doubt Resolution",
  "Peer Collaboration",
  "Study Accountability",
  "Resource Sharing",
  "Instant Announcements",
];

const drillFeatures = [
  "Topic-Wise Drills",
  "Difficulty Analysis",
  "Performance Tracking",
  "Gap Identification",
  "Improvement Recommendations",
];

const deliverables = [
  {
    component: "Live Training",
    deliverables: "50+ Hours of Interactive Classes",
    benefits: "Direct Mentorship",
  },
  {
    component: "Small Cohorts",
    deliverables: "Maximum 10 Students",
    benefits: "Personalized Attention",
  },
  {
    component: "Practice Arsenal",
    deliverables: "5,000+ Questions & Mock Tests",
    benefits: "Complete Test Readiness",
  },
  {
    component: "Study Materials",
    deliverables: "Global Notes & Resources",
    benefits: "Comprehensive Preparation",
  },
  {
    component: "Recording Access",
    deliverables: "6 Months Access",
    benefits: "Flexible Revision",
  },
  {
    component: "Study Planning",
    deliverables: "Daily Study Plans",
    benefits: "Structured Progress",
  },
  {
    component: "Support System",
    deliverables: "WhatsApp & Mentor Support",
    benefits: "Continuous Guidance",
  },
];

const pricingIncludes = [
  "Complete GRE Curriculum",
  "Live Interactive Sessions",
  "Study Materials",
  "Mock Tests",
  "Recording Access",
  "WhatsApp Support",
  "Performance Tracking",
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

function GreTestPrepCoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="GRE Group Preparation"
        title="High-Impact Interactive GRE Group Preparation Program"
        subtitle="Master the GRE with India's premier exam mentor — elite cohorts, structured preparation, intensive practice, and the power of peer learning."
      >
        <Link
          to={BOOK_CONSULTATION_PATH}
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors"
        >
          Enroll in a Cohort
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8 sm:space-y-10">
            <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-surface p-5 sm:p-6 animate-fade-in-up">
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                Achieve your target GRE score through an elite, collaborative learning environment
                led directly by <strong>Tarun Kaushik</strong>. Designed for ambitious students
                aiming for top graduate programs worldwide.
              </p>
            </div>

            <div>
              <SectionHeader
                eyebrow="Cohort Learning"
                title="Learn, Compete, and Excel Together"
                subtitle="Small, high-performing cohorts with collaborative learning and personalized attention — unlike large classrooms where individual performance goes unnoticed."
              />
              <div className="section-gap grid gap-2 sm:grid-cols-2">
                {cohortBenefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm shadow-card"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="Blueprint" title="The Elite Cohort Blueprint" />
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
                title="Structure of Every Group Session"
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
                eyebrow="Interactive Core"
                title="High-Impact Engagement"
                subtitle="Master Quantitative and Verbal Reasoning under continuous expert mentorship."
              />
              <div className="section-gap grid gap-2 sm:grid-cols-2">
                {programHighlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 rounded-lg bg-card border border-border px-3 py-2.5 text-sm">
                    <Zap className="h-4 w-4 shrink-0 text-primary" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center gap-2 text-primary">
                  <BarChart3 className="h-5 w-5" />
                  <h3 className="font-bold text-navy">Accountability System</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {accountabilityItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center gap-2 text-primary">
                  <BookOpen className="h-5 w-5" />
                  <h3 className="font-bold text-navy">Revolutionary Study Vault</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {studyVault.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Video className="h-3.5 w-3.5" />
                  Up to 6 months recording access
                </p>
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="Schedules" title="Flexible Learning Options" />
              <div className="section-gap grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border-2 border-primary/30 bg-card p-5 shadow-card">
                  <Calendar className="h-6 w-6 text-primary" />
                  <h3 className="mt-2 text-lg font-bold text-navy">Regular Program</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Ideal for students preparing 3–6 months before their GRE.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="mt-2 text-lg font-bold text-navy">Fast-Track Program</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Designed for students targeting the GRE within a shorter preparation window.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Weekday Batches", "Weekend Batches"].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-navy"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="Curriculum" title="Comprehensive Core Curriculum" />
              <div className="section-gap space-y-4">
                <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Quantitative Reasoning</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Develop mastery across every GRE Quant topic — speed, accuracy, confidence, and
                    strategic efficiency.
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">Topics</p>
                  <div className="mt-2"><TopicPills items={quantTopics} /></div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">Question Types</p>
                  <div className="mt-2"><TopicPills items={quantTypes} /></div>
                </article>
                <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Verbal Reasoning</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Build advanced verbal skills for top GRE scores and challenging passage analysis.
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">Focus Areas</p>
                  <div className="mt-2"><TopicPills items={verbalFocus} /></div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">Question Types</p>
                  <div className="mt-2"><TopicPills items={verbalTypes} /></div>
                </article>
                <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Data Interpretation (DI)</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Master real exam-style datasets through extensive practice.
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">Topics</p>
                  <div className="mt-2"><TopicPills items={diTopics} /></div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">Skills Developed</p>
                  <div className="mt-2"><TopicPills items={diSkills} /></div>
                </article>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Practice"
                title="Rigorous Practice Framework"
                subtitle="Build exam stamina — success requires more than knowledge."
              />
              <div className="section-gap grid gap-4 sm:grid-cols-2">
                {practiceComponents.map((p) => (
                  <div key={p} className="flex items-center gap-2 rounded-xl border border-border bg-card p-4 text-sm shadow-card">
                    <Layers className="h-4 w-4 shrink-0 text-primary" />
                    {p}
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                <p className="text-2xl font-bold text-primary">5,000+</p>
                <p className="text-sm text-muted-foreground">
                  GRE-style practice questions aligned with actual exam difficulty
                </p>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <Zap className="h-5 w-5 text-primary" />
                <h3 className="mt-2 font-bold text-navy">Instant Resolutions</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Rapid doubt-solving during and after classes for Quant, Verbal, strategy, and mock analysis.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <MessageCircle className="h-5 w-5 text-success" />
                <h3 className="mt-2 font-bold text-navy">Private Study Community</h3>
                <ul className="mt-3 space-y-1.5">
                  {communityBenefits.map((b) => (
                    <li key={b} className="text-xs sm:text-sm text-muted-foreground">• {b}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h3 className="mt-2 font-bold text-navy">Performance Drills</h3>
                <ul className="mt-3 space-y-1.5">
                  {drillFeatures.map((f) => (
                    <li key={f} className="text-xs sm:text-sm text-muted-foreground">• {f}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-accent/30 bg-accent/10 p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-navy">Collaborative Peer Energy</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Typically <strong>6–10 students per batch</strong> — healthy competition, faster
                learning, enhanced engagement, and higher accountability.
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
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Program Investment</p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Full Course Fee</h3>
              <p className="mt-2 text-3xl font-bold text-accent sm:text-4xl">₹49,999/-</p>
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
                Enroll &amp; Master the GRE
              </Link>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <SectionHeader eyebrow="Contact" title="Your GRE Success Starts Here" />
              <ul className="section-gap space-y-3 text-sm">
                <li className="flex items-center gap-3 font-semibold text-navy">
                  Tarun Kaushik
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href="tel:+918800338783" className="hover:text-navy">+91 88003 38783</a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:tarunkaushik@aceyourtest.in" className="hover:text-navy break-all">
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
            <EnquiryForm title="Join a GRE cohort" />
            <div className="rounded-xl border border-border bg-surface p-4 space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Batch size</span>
                <span className="font-semibold text-navy">Max 10</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Live hours</span>
                <span className="font-semibold text-navy">50+</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Practice Qs</span>
                <span className="font-semibold text-navy">5,000+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Course fee</span>
                <span className="font-bold text-primary">₹49,999</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Enroll & Master the GRE"
        subtitle="Join a limited-seat cohort and learn directly under Tarun Kaushik. Transform your preparation through structured mentorship and collaborative learning."
      />
    </>
  );
}
