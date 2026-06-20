import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  User,
  Target,
  BarChart3,
  BookOpen,
  Monitor,
  Clock,
  Video,
  FileText,
  Layers,
  Sparkles,
  Quote,
} from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { EnquiryForm } from "../components/site/EnquiryForm";
import { BOOK_CONSULTATION_PATH } from "../lib/site-constants";

export const Route = createFileRoute("/gre/private-tutoring")({
  head: () => ({
    meta: [
      {
        title: "GRE One-on-One Private Tutoring — Premium Coaching | AceYourTest",
      },
      {
        name: "description",
        content:
          "Elite 1-on-1 GRE mentorship with Tarun Kaushik. Personalized Quant, Verbal & Data Interpretation coaching, 5,000+ practice questions, and flexible pay-as-you-go sessions.",
      },
      {
        property: "og:title",
        content: "GRE Premium Private Coaching — AceYourTest",
      },
      {
        property: "og:description",
        content:
          "India's most personalized GRE preparation — private sessions, customized roadmap, and measurable score improvement.",
      },
      { property: "og:url", content: "/gre/private-tutoring" },
    ],
    links: [{ rel: "canonical", href: "/gre/private-tutoring" }],
  }),
  component: GrePrivateTutoringPage,
});

const whyChoose = [
  {
    icon: User,
    title: "Personalized One-on-One Learning",
    desc: "Work directly with GRE expert Tarun Kaushik in private, interactive sessions designed exclusively for you. Every minute focuses on your development — no distractions, no passive lectures, and no overcrowded classrooms.",
    benefits: [
      "Direct personal mentoring",
      "Individual attention throughout every session",
      "Real-time doubt resolution",
      "Customized learning roadmap",
      "Faster score improvement",
    ],
  },
  {
    icon: Target,
    title: "Customized Learning Framework",
    desc: "Your preparation strategy is built after analyzing your current performance, learning patterns, and target score requirements — not generic study plans.",
    benefits: [
      "Strengthening weak concepts",
      "Improving problem-solving efficiency",
      "Eliminating recurring mistakes",
      "Enhancing time management skills",
      "Building exam-specific strategies",
    ],
  },
  {
    icon: BarChart3,
    title: "Structured Accountability System",
    desc: "Success in the GRE requires consistency and accountability. Our premium coaching keeps you focused and productive throughout your journey.",
    benefits: [
      "Detailed performance tracking",
      "Personalized error analysis",
      "Progress monitoring reports",
      "Continuous feedback loops",
      "Strategic study recommendations",
    ],
  },
];

const trainingPhases = [
  {
    phase: "Phase 1",
    title: "Concept Mastery",
    desc: "Build strong foundations through deep conceptual understanding rather than rote memorization.",
    items: [
      "Advanced quantitative problem-solving techniques",
      "GRE-specific shortcuts and strategies",
      "Critical reasoning frameworks",
      "Reading comprehension methodologies",
      "Efficient decision-making processes",
    ],
    focus: [
      "High-frequency GRE Quant traps",
      "Logical reasoning structures",
      "Critical reading techniques",
      "Time-saving solution methods",
      "Accuracy enhancement strategies",
    ],
  },
  {
    phase: "Phase 2",
    title: "Guided Application",
    desc: "Students immediately apply newly learned concepts through interactive problem-solving.",
    items: [
      "Strengthen retention",
      "Improve confidence",
      "Identify conceptual gaps",
      "Build exam temperament",
      "Develop strategic thinking",
    ],
  },
  {
    phase: "Phase 3",
    title: "Performance Optimization",
    desc: "Once concepts are mastered, sessions focus on speed, accuracy, and target score planning.",
    items: [
      "Speed enhancement",
      "Error reduction",
      "Adaptive test strategies",
      "Section-specific optimization",
      "Target score achievement planning",
    ],
  },
];

const onlineFeatures = [
  "Interactive digital whiteboards",
  "Collaborative problem-solving tools",
  "Live annotation systems",
  "Personalized study resources",
  "Session recordings for revision",
];

const quantTopics = [
  "Number Systems",
  "Arithmetic",
  "Algebra",
  "Linear & Quadratic Equations",
  "Word Problems",
  "Ratios & Percentages",
  "Geometry",
  "Coordinate Geometry",
  "Statistics",
  "Probability",
  "Permutations & Combinations",
  "Data Analysis",
];

const quantQuestionTypes = [
  "Quantitative Comparison",
  "Problem Solving",
  "Numeric Entry",
  "Data Interpretation",
];

const verbalFocus = [
  "Vocabulary Development",
  "Contextual Word Usage",
  "Sentence Logic",
  "Critical Reasoning",
  "Reading Comprehension",
  "Argument Analysis",
  "Inference Building",
];

const verbalQuestionTypes = ["Text Completion", "Sentence Equivalence", "Reading Comprehension"];

const dataInterpSkills = [
  "Graph Analysis",
  "Table Interpretation",
  "Chart Analysis",
  "Trend Identification",
  "Data Comparison",
  "Percentage Calculations",
  "Ratios & Averages",
  "Growth Analysis",
];

const practiceResources = [
  {
    title: "5,000+ Practice Questions",
    desc: "Carefully selected and structured according to current GRE standards.",
  },
  {
    title: "20+ Full-Length Sectional Tests",
    desc: "Simulate actual exam conditions and build test-taking confidence.",
  },
  {
    title: "Topic-Wise Practice Sets",
    desc: "Focused exercises for targeted improvement.",
  },
  {
    title: "Adaptive Difficulty Progression",
    desc: "Practice evolves alongside your performance level.",
  },
];

const studyMaterials = [
  "Detailed Concept Notes",
  "Visual Learning Maps",
  "Shortcut Techniques",
  "Strategy Guides",
  "Quantitative Frameworks",
  "Verbal Logic Systems",
  "Error Analysis Templates",
];

const programFeatures = [
  { icon: User, label: "Premium 1-on-1 coaching with Tarun Kaushik" },
  { icon: Clock, label: "Flexible weekday & weekend scheduling" },
  { icon: Video, label: "Session recordings for unlimited revision" },
  { icon: BookOpen, label: "5,000+ GRE practice questions" },
  { icon: Layers, label: "20+ sectional mock examinations" },
  { icon: FileText, label: "Exclusive study vault & premium notes" },
  { icon: BarChart3, label: "Personalized progress tracking" },
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

function GrePrivateTutoringPage() {
  return (
    <>
      <PageHero
        eyebrow="GRE Premium Private Coaching"
        title="Achieve Your Target GRE Score with Elite 1-on-1 Mentorship"
        subtitle="Experience India's most personalized GRE preparation program — designed for ambitious students targeting top universities worldwide."
      >
        <Link
          to={BOOK_CONSULTATION_PATH}
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors"
        >
          Schedule Free Consultation
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8 sm:space-y-10">
            <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                Unlike traditional coaching institutes that follow a one-size-fits-all approach,
                our private coaching model is built around your individual learning style,
                strengths, weaknesses, and score goals.
              </p>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Every session is carefully customized to maximize your improvement in Quantitative
                Reasoning, Verbal Reasoning, and Data Interpretation while ensuring measurable
                progress toward your target GRE score.
              </p>
            </div>

            <div>
              <SectionHeader
                eyebrow="Why Choose Us"
                title="Why Choose Our Premium GRE Coaching?"
              />
              <div className="section-gap grid gap-4 sm:gap-5">
                {whyChoose.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {item.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Live Training"
                title="How Our Live Training Sessions Work"
              />
              <div className="section-gap grid gap-4">
                {trainingPhases.map((phase) => (
                  <article
                    key={phase.title}
                    className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6"
                  >
                    <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-primary">
                      {phase.phase}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-navy">{phase.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {phase.desc}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {phase.focus && (
                      <div className="mt-4 rounded-lg border border-border bg-surface p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-navy">
                          Key Focus Areas
                        </p>
                        <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                          {phase.focus.map((f) => (
                            <li key={f} className="text-sm text-muted-foreground">
                              • {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-surface p-5 sm:p-6">
              <div className="flex items-center gap-2 text-primary">
                <Monitor className="h-5 w-5" />
                <h3 className="text-lg font-bold text-navy">Modern Online Learning Experience</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Our virtual classroom environment is designed to provide a learning experience
                superior to conventional offline coaching. All classes are conducted through
                advanced online platforms — learn effectively from anywhere in the world.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {onlineFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeader
                eyebrow="Curriculum"
                title="Comprehensive GRE Curriculum"
                subtitle="Structured training across Quant, Verbal, and Data Interpretation — with extensive practice for every question type."
              />
              <div className="section-gap space-y-4">
                <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Quantitative Reasoning</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Master every major GRE Quant topic through structured training and extensive
                    practice. Learn proven methods to solve complex questions accurately and
                    efficiently.
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
                    Topics Covered
                  </p>
                  <div className="mt-2">
                    <TopicPills items={quantTopics} />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
                    Question Types
                  </p>
                  <div className="mt-2">
                    <TopicPills items={quantQuestionTypes} />
                  </div>
                </article>

                <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Verbal Reasoning</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Develop the analytical reading and language skills required for high GRE
                    Verbal scores. Learn to analyze complex passages, identify author intent,
                    and answer verbal questions with confidence.
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
                    Areas of Focus
                  </p>
                  <div className="mt-2">
                    <TopicPills items={verbalFocus} />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
                    Question Types
                  </p>
                  <div className="mt-2">
                    <TopicPills items={verbalQuestionTypes} />
                  </div>
                </article>

                <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Data Interpretation</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Develop expertise in analyzing and interpreting data quickly and accurately.
                    Special emphasis on speed and accuracy for GRE adaptive testing environments.
                  </p>
                  <div className="mt-4">
                    <TopicPills items={dataInterpSkills} />
                  </div>
                </article>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Practice"
                title="Extensive Practice Resources"
              />
              <div className="section-gap grid gap-4 sm:grid-cols-2">
                {practiceResources.map((r) => (
                  <div
                    key={r.title}
                    className="rounded-xl border border-border bg-card p-5 shadow-card"
                  >
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="mt-2 font-bold text-navy">{r.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Study Vault"
                title="Exclusive Study Materials"
                subtitle="Premium resources developed through years of GRE coaching experience — designed to simplify complex concepts and accelerate learning."
              />
              <div className="section-gap grid gap-2 sm:grid-cols-2">
                {studyMaterials.map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3 text-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                    {m}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="Program" title="Program Features" />
              <div className="section-gap grid gap-3 sm:grid-cols-2">
                {programFeatures.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <f.icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-medium text-navy leading-snug">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-navy to-secondary p-6 text-white shadow-elevated sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Investment
              </p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Premium Private Coaching</h3>
              <p className="mt-3 text-3xl font-bold text-accent sm:text-4xl">₹4,999 per Hour</p>
              <p className="mt-1 text-sm text-white/70">Flexible pay-as-you-go model</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  "No long-term commitments",
                  "Book sessions as needed",
                  "Fully customized learning schedule",
                  "Ideal for working professionals & students",
                ].map((item) => (
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
                Book Your First Session
              </Link>
            </div>

            <blockquote className="relative rounded-xl border border-border bg-surface p-5 sm:p-6">
              <Quote className="h-8 w-8 text-primary/30" aria-hidden />
              <p className="mt-2 text-sm sm:text-base text-foreground leading-relaxed italic">
                Every GRE aspirant possesses unique strengths, challenges, and learning patterns.
                My goal is not simply to teach concepts, but to identify conceptual blind spots,
                refine problem-solving approaches, and build a strategic roadmap that leads to
                measurable score improvement. Through personalized mentorship, focused practice,
                and structured accountability, students develop the confidence and skills required
                to achieve their target scores and secure admission to leading global universities.
              </p>
              <footer className="mt-4 border-t border-border pt-4">
                <p className="font-bold text-navy">Tarun Kaushik</p>
                <p className="text-sm text-muted-foreground">Founder &amp; Lead Mentor</p>
              </footer>
            </blockquote>

            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <SectionHeader
                eyebrow="About AceYourTest"
                title="India's leading online GRE, GMAT & SAT coaching"
              />
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                AceYourTest is one of India&apos;s leading online coaching platforms for GRE,
                GMAT, and SAT preparation. Trusted by thousands of students, we combine
                personalized mentoring, adaptive learning methodologies, strategic preparation
                frameworks, and performance-focused coaching to help students achieve exceptional
                results in competitive examinations and admissions processes worldwide.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-20 h-fit space-y-4">
            <EnquiryForm title="Plan your GRE private coaching" />
            <div className="rounded-xl border border-border bg-surface p-4 text-center text-sm">
              <p className="font-semibold text-navy">Pay-as-you-go flexibility</p>
              <p className="mt-1 text-muted-foreground">
                ₹4,999/hour · No long-term lock-in
              </p>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Start Your GRE Success Journey"
        subtitle="Ready to achieve your dream GRE score and unlock opportunities at top international universities? Schedule your personalized consultation today."
      />
    </>
  );
}
