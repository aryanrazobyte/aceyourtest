import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  User,
  BookOpen,
  Target,
  BarChart3,
  Lightbulb,
  Clock,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Laptop,
} from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { BOOK_CONSULTATION_PATH } from "../lib/site-constants";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/sat/plans-pricing")({
  head: () => ({
    meta: [
      {
        title: "SAT Plans & Pricing — Private & Group Coaching | AceYourTest",
      },
      {
        name: "description",
        content:
          "Compare Digital SAT programs: 1-on-1 coaching (₹4,999/hr) and elite group classes (₹74,999). Mentorship from Tarun Kaushik for US university admissions.",
      },
      {
        property: "og:title",
        content: "SAT Plans and Pricing — AceYourTest",
      },
      {
        property: "og:description",
        content:
          "Choose the Digital SAT program that fits your goals — private coaching or interactive cohort learning with premium resources.",
      },
      { property: "og:url", content: "/sat/plans-pricing" },
    ],
    links: [{ rel: "canonical", href: "/sat/plans-pricing" }],
  }),
  component: SatPlansPricingPage,
});

const PROGRAM_IMAGES = {
  individual:
"https://res.cloudinary.com/ddcx08e0s/image/upload/v1781944317/7_c49tl5.png",
  group:
"https://res.cloudinary.com/ddcx08e0s/image/upload/v1781944317/8_ie1fqq.png",
} as const;

const programCards = [
  {
    id: "private",
    badge: "Program 1",
    title: "Individual Classes",
    subtitle: "Private 1-on-1 Premium SAT Coaching",
    tagline: "The Most Personalized Digital SAT Experience",
    price: "₹4,999",
    priceNote: "per hour",
    image: PROGRAM_IMAGES.individual,
    imageAlt: "SAT individual private coaching classes",
    idealFor: [
      "Students targeting 1450–1600 scores",
      "High schoolers with busy schedules",
      "Applicants to top US universities",
      "Candidates seeking maximum personalization",
    ],
    highlights: [
      "Personalized Math & Reading/Writing Training",
      "Individualized Study Roadmap",
      "Direct Mentorship from Tarun Kaushik",
      "5,000+ Premium Practice Questions",
      "Flexible Weekday & Weekend Scheduling",
    ],
    cta: "Explore Private Coaching",
    to: BOOK_CONSULTATION_PATH,
    featured: true,
  },
  {
    id: "group",
    badge: "Program 2",
    title: "Group Classes",
    subtitle: "Elite Interactive SAT Group Preparation",
    tagline: "Learn. Compete. Improve. Succeed.",
    price: "₹74,999",
    priceNote: "full program",
    image: PROGRAM_IMAGES.group,
    imageAlt: "SAT group classes and cohort preparation",
    idealFor: [
      "Students targeting 1350–1500+",
      "Learners who thrive in competitive environments",
      "Students seeking premium prep at optimized cost",
    ],
    highlights: [
      "Maximum 10 Students Per Batch",
      "50+ Hours of Live Interactive Classes",
      "40+ Sectional Practice Tests",
      "WhatsApp Support Community",
      "6 Months Recording Access",
    ],
    cta: "Explore Group Classes",
    to: BOOK_CONSULTATION_PATH,
    featured: false,
  },
] as const;

const impactStats = [
  // { value: "1000+", label: "Students with SAT Scores Above 1500" },
  // { value: "2000+", label: "Students with GMAT Scores Above 705" },
  { value: "1500+", label: "Students with GRE Scores Above 330" },
  { value: "500+", label: "Admits to Top-Ranked Global Universities" },
];

const universities = [
  "MIT",
  "Stanford University",
  "Yale University",
  "Princeton University",
  "Columbia University",
  "University of Pennsylvania",
];

const methodology = [
  {
    icon: Lightbulb,
    title: "Concept First Approach",
    desc: "Understand the logic behind every Digital SAT question instead of memorizing shortcuts.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Identify weaknesses early and eliminate score-limiting patterns before test day.",
  },
  {
    icon: Target,
    title: "Strategic Test Taking",
    desc: "Learn module pacing, adaptive strategy, and when to solve, skip, or estimate.",
  },
  {
    icon: Clock,
    title: "Continuous Accountability",
    desc: "Stay disciplined with structured plans, mock reviews, and progress check-ins.",
  },
  {
    icon: User,
    title: "Direct Expert Mentorship",
    desc: "Learn directly from one of India's most experienced Digital SAT mentors.",
  },
];

function ProgramImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex aspect-[5/4] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-primary/5 via-white to-surface">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-auto max-h-[200px] w-full object-contain object-center px-4 py-3 sm:max-h-[220px]"
      />
    </div>
  );
}

function ProgramCard({
  program,
}: {
  program: (typeof programCards)[number];
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-card transition-shadow hover:shadow-elevated",
        program.featured ? "border-primary/40 ring-1 ring-primary/20" : "border-border",
      )}
    >
      <div className="relative">
        <ProgramImage src={program.image} alt={program.imageAlt} />
        <span className="absolute left-3 top-3 z-10 rounded-full bg-navy/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {program.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-primary">
          {program.subtitle}
        </p>
        <h3 className="mt-1 text-xl font-bold text-navy">{program.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{program.tagline}</p>

        <div className="mt-4 flex items-baseline gap-1.5">
          <span className="text-2xl font-bold text-primary sm:text-3xl">
            {program.price}
          </span>
          <span className="text-sm text-muted-foreground">{program.priceNote}</span>
        </div>

        <ul className="mt-4 flex-1 space-y-2">
          {program.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-4 rounded-lg border border-border bg-surface p-3">
          <p className="text-xs font-bold uppercase tracking-wider text-navy">Ideal For</p>
          <ul className="mt-2 space-y-1">
            {program.idealFor.map((item) => (
              <li key={item} className="text-xs text-muted-foreground sm:text-sm">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={program.to}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {program.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function SatPlansPricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital SAT Preparation Programs 2026"
        title="Build the Score That Opens US University Doors"
        subtitle="Your SAT score is more than a test result—it is a gateway to top US universities, scholarships, and undergraduate opportunities. Choose the program that fits your goals."
      >
        <Link
          to={BOOK_CONSULTATION_PATH}
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors"
        >
          Book Free Consultation
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page space-y-8 sm:space-y-10">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <Laptop className="h-3.5 w-3.5" />
              Digital SAT
            </div>
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              At Ace Your Test, every SAT program is designed around one objective: helping
              ambitious students maximize their Digital SAT score through proven strategies,
              structured learning systems, and direct mentorship from Tarun Kaushik.
            </p>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Whether you prefer private coaching or collaborative group learning, our two core
              programs provide everything required to achieve exceptional SAT results and
              strengthen your US university applications.
            </p>
          </div>

          <div>
            <SectionHeader
              eyebrow="Compare Programs"
              title="Choose Your SAT Preparation Path"
              subtitle="Two focused programs — each built on the same elite methodology, tailored to how you learn best."
            />
            <div className="section-gap mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
              {programCards.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Why Ace Your Test"
              title="Results That Speak For Themselves"
              subtitle="Over the years, thousands of students have trusted Ace Your Test to help them achieve their academic goals."
            />
            <div className="section-gap grid gap-4 sm:grid-cols-2">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-5 text-center shadow-card"
                >
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-surface p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-navy">
                US Universities Our Students Have Reached
              </h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Our students have earned undergraduate admissions offers from leading US
              institutions, including:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {universities.map((uni) => (
                <li
                  key={uni}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-navy"
                >
                  <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                  {uni}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground italic">
              and many other top-ranked US universities.
            </p>
          </div>

          <div>
            <SectionHeader eyebrow="Methodology" title="Why Our Methodology Works" />
            <div className="section-gap grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {methodology.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-5 shadow-card"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-bold text-navy">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-navy to-secondary p-6 text-white shadow-elevated sm:p-8">
            <BookOpen className="h-8 w-8 text-accent" />
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Start Your SAT Success Journey
            </h3>
            <p className="mt-3 text-sm text-white/85 leading-relaxed sm:text-base">
              Seats are intentionally limited to maintain coaching quality. Book a consultation
              and discover the preparation path best suited to your target score and university
              goals.
            </p>
            <Link
              to={BOOK_CONSULTATION_PATH}
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Start Your SAT Success Journey"
        subtitle="Book a consultation and discover the preparation path best suited to your target score and US university goals."
      />
    </>
  );
}
