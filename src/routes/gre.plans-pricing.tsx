import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  User,
  Users,
  BookOpen,
  Target,
  BarChart3,
  Lightbulb,
  Clock,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { BOOK_CONSULTATION_PATH } from "../lib/site-constants";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/gre/plans-pricing")({
  head: () => ({
    meta: [
      {
        title: "GRE Plans & Pricing — Private, Group & Self-Study | AceYourTest",
      },
      {
        name: "description",
        content:
          "Compare GRE preparation programs: 1-on-1 coaching (₹4,999/hr), elite group classes (₹49,999), and self-study mastery (₹29,999). Mentorship from Tarun Kaushik.",
      },
      {
        property: "og:title",
        content: "GRE Plans and Pricing — AceYourTest",
      },
      {
        property: "og:description",
        content:
          "Choose the GRE program that fits your goals — private coaching, interactive cohorts, or flexible self-study with premium resources.",
      },
      { property: "og:url", content: "/gre/plans-pricing" },
    ],
    links: [{ rel: "canonical", href: "/gre/plans-pricing" }],
  }),
  component: GrePlansPricingPage,
});

const PROGRAM_IMAGES = {
  individual:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781938709/indd_me5x10.png",
  group:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781938345/Group_Classes_xd0q68.png",
  selfStudy:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781938740/Self_z2hmav.png",
} as const;

const programCards = [
  {
    id: "private",
    badge: "Program 1",
    title: "Individual Classes",
    subtitle: "Private 1-on-1 Premium GRE Coaching",
    tagline: "The Most Personalized GRE Preparation Experience",
    price: "₹4,999",
    priceNote: "per hour",
    image: PROGRAM_IMAGES.individual,
    imageAlt: "GRE individual private coaching classes",
    idealFor: [
      "Students targeting 325–340+ scores",
      "Working professionals",
      "Students with limited preparation time",
      "Candidates seeking maximum personalization",
    ],
    highlights: [
      "Personalized Quantitative & Verbal Training",
      "Individualized Study Roadmap",
      "Direct Mentorship from Tarun Kaushik",
      "5,000+ Premium Practice Questions",
      "Flexible Weekday & Weekend Scheduling",
    ],
    cta: "Explore Private Coaching",
    to: "/gre/private-tutoring" as const,
    featured: true,
  },
  {
    id: "group",
    badge: "Program 2",
    title: "Group Classes",
    subtitle: "Elite Interactive GRE Group Preparation",
    tagline: "Learn. Compete. Improve. Succeed.",
    price: "₹49,999",
    priceNote: "full program",
    image: PROGRAM_IMAGES.group,
    imageAlt: "GRE group classes and cohort preparation",
    idealFor: [
      "Students targeting 315–330+",
      "Learners who thrive in competitive environments",
      "Students seeking premium preparation at optimized cost",
    ],
    highlights: [
      "Maximum 10 Students Per Batch",
      "50+ Hours of Live Interactive Classes",
      "40+ Sectional Practice Tests",
      "WhatsApp Support Community",
      "6 Months Recording Access",
    ],
    cta: "Explore Group Classes",
    to: "/gre/gre-test-prep-courses-group-classes-program" as const,
    featured: false,
  },
  {
    id: "self-study",
    badge: "Program 3",
    title: "Micro Batches Classes",
    subtitle: "GRE Mastery Program",
    tagline: "Self Study Package",
    price: "₹1,20,000",
    priceNote: "Full Program",
    image: PROGRAM_IMAGES.selfStudy,
    imageAlt: "GRE mastery program resources",
    idealFor: [
      "Students targeting 330+ GRE scores",
      "Beginners seeking structured preparation",
      "Working professionals with busy schedules",
      "Learners who value personalized mentoring",
    ],
    highlights: [
      "Micro Batches (3–4 Students)",
      "Live Interactive Classes",
      "Personalized Mentoring",
      "30+ Sectional Tests",
      "ecorded Sessions",
      "Proven 330+ Score Strategy",
    ],
    cta: "Get Self-Study Access",
    to: BOOK_CONSULTATION_PATH,
    featured: false,
  },
] as const;

const privateFeatures = [
  "Personalized Quantitative & Verbal Training",
  "Individualized Study Roadmap",
  "Comprehensive Diagnostic Assessment",
  "Direct Mentorship from Tarun Kaushik",
  "Advanced Time Management Strategies",
  "Unlimited Doubt Resolution",
  "Performance Tracking & Analytics",
  "5,000+ Premium Practice Questions",
  "Topic-Wise Diagnostic Drills",
  "Official GRE-Level Material",
  "Flexible Weekday & Weekend Scheduling",
  "Session Recordings & Revision Resources",
];

const groupFeatures = [
  "Maximum 10 Students Per Batch",
  "50+ Hours of Live Interactive Classes",
  "Daily Study Plans & Progress Tracking",
  "Weekly Performance Reviews",
  "5,000+ Practice Questions",
  "40+ Sectional Practice Tests",
  "Detailed Error Analysis Framework",
  "Official GRE-Level Practice Material",
  "Collaborative Peer Learning",
  "WhatsApp Support Community",
  "6 Months Recording Access",
  "Optional 1-on-1 Mentorship Sessions",
];

const cohortAdvantages = [
  "Strategic discussions",
  "Alternate solving approaches",
  "Verbal reasoning debates",
  "Quantitative shortcut discovery",
  "Collaborative error analysis",
];

const selfStudyFeatures = [
  "Elite GRE Study Notes",
  "Structured Preparation Roadmap",
  "Concept Mastery Framework",
  "Quantitative Strategy Guides",
  "Verbal Reasoning Systems",
  "Official GRE-Style Practice Material",
  "5,000+ Practice Questions",
  "Topic-Wise Practice Sets",
  "Progress Monitoring Framework",
  "Exam-Day Strategy Modules",
];

const impactStats = [
  // { value: "2000+", label: "Students with GMAT Scores Above 705" },
  { value: "1500+", label: "Students with GRE Scores Above 330" },
  // { value: "1000+", label: "Students with SAT Scores Above 1500" },
  { value: "500+", label: "Admits to Top-Ranked Global Universities" },
];

const universities = [
  "Harvard University",
  "Stanford University",
  "University of Oxford",
  "University of Cambridge",
  "Wharton school of the university of Pennsylvania",
  "Cornell University",
];

const methodology = [
  {
    icon: Lightbulb,
    title: "Concept First Approach",
    desc: "Understand the logic behind every question instead of memorizing shortcuts.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Identify weaknesses early and eliminate score-limiting patterns.",
  },
  {
    icon: Target,
    title: "Strategic Test Taking",
    desc: "Learn when to solve, skip, estimate, and optimize time.",
  },
  {
    icon: Clock,
    title: "Continuous Accountability",
    desc: "Stay disciplined with structured plans and progress reviews.",
  },
  {
    icon: User,
    title: "Direct Expert Mentorship",
    desc: "Learn directly from one of India's most experienced GRE mentors.",
  },
];

function ProgramImage({
  src,
  alt,
  variant = "card",
}: {
  src: string;
  alt: string;
  variant?: "card" | "detail";
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-white to-surface",
        variant === "card"
          ? "aspect-[5/4] border-b border-border"
          : "min-h-[220px] border-b border-border p-6 sm:min-h-[260px] sm:p-8 md:min-h-full md:border-b-0 md:border-r",
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "h-auto w-full object-contain object-center",
          variant === "card" ? "max-h-[200px] px-4 py-3 sm:max-h-[220px]" : "max-w-[300px]",
        )}
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
        <ProgramImage src={program.image} alt={program.imageAlt} variant="card" />
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

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function GrePlansPricingPage() {
  return (
    <>
      <PageHero
        eyebrow="GRE Preparation Programs 2026"
        title="Build the Score That Opens Global Opportunities"
        subtitle="Your GRE score is more than a test result—it is a gateway to world-class universities, scholarships, and career opportunities. Choose the program that fits your goals."
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
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                At Ace Your Test, every GRE program is designed around one objective: helping
                ambitious students maximize their score through proven strategies, structured
                learning systems, and direct mentorship from Tarun Kaushik.
              </p>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you prefer private coaching, collaborative group learning, or self-paced
                preparation, our programs provide everything required to achieve exceptional GRE
                results.
              </p>
            </div>

            <div>
              <SectionHeader
                eyebrow="Compare Programs"
                title="Choose Your GRE Preparation Path"
                subtitle="Three distinct programs — each built on the same elite methodology, tailored to how you learn best."
              />
              <div className="section-gap grid gap-5 lg:grid-cols-3">
                {programCards.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </div>

            {/* <div id="private-coaching">
              <SectionHeader
                eyebrow="Program 1"
                title="Private 1-on-1 Premium GRE Coaching"
                subtitle="Designed for students targeting top universities and elite GRE scores — a completely customized learning journey."
              />
              <div className="section-gap overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="grid md:grid-cols-[minmax(240px,340px)_1fr]">
                  <ProgramImage
                    src={PROGRAM_IMAGES.individual}
                    alt="GRE individual private coaching"
                    variant="detail"
                  />
                  <div className="p-5 sm:p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every class is tailored around your strengths, weaknesses, learning style,
                      and target score.
                    </p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">
                      What You Receive
                    </p>
                    <div className="mt-3">
                      <FeatureList items={privateFeatures} />
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <p className="text-2xl font-bold text-primary">
                        ₹4,999 <span className="text-base font-medium text-muted-foreground">per hour</span>
                      </p>
                      <Link
                        to="/gre/private-tutoring"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        View full program details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="group-classes">
              <SectionHeader
                eyebrow="Program 2"
                title="Elite Interactive GRE Group Preparation"
                subtitle="Experience collaborative learning inside a highly focused GRE cohort — limited batches for meaningful participation and accountability."
              />
              <div className="section-gap overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="grid md:grid-cols-[minmax(240px,340px)_1fr]">
                  <ProgramImage
                    src={PROGRAM_IMAGES.group}
                    alt="GRE group classes cohort learning"
                    variant="detail"
                  />
                  <div className="p-5 sm:p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Unlike overcrowded coaching batches, our groups are intentionally limited to
                      ensure meaningful participation, mentor interaction, and accountability.
                    </p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">
                      What Makes Our Cohorts Different
                    </p>
                    <div className="mt-3">
                      <FeatureList items={groupFeatures} />
                    </div>
                    <div className="mt-4 rounded-lg border border-border bg-surface p-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <p className="text-sm font-bold text-navy">The Cohort Learning Advantage</p>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Students learn from the collective intelligence of highly motivated peers.
                        Every session encourages:
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {cohortAdvantages.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-navy"
                          >
                            {item}
                          </span>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <p className="text-2xl font-bold text-primary">₹49,999</p>
                      <Link
                        to="/gre/gre-test-prep-courses-group-classes-program"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        View full program details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="self-study">
              <SectionHeader
                eyebrow="Program 3"
                title="GRE Mastery Program"
                subtitle="Premium preparation with complete flexibility — the same conceptual framework used in our guided coaching programs."
              />
              <div className="section-gap overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="grid md:grid-cols-[minmax(240px,340px)_1fr]">
                  <ProgramImage
                    src={PROGRAM_IMAGES.selfStudy}
                    alt="GRE smastery program"
                    variant="detail"
                  />
                  <div className="p-5 sm:p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For disciplined students who prefer independent preparation — access elite
                      study resources and structured roadmaps at your own pace.
                    </p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">
                      Included Resources
                    </p>
                    <div className="mt-3">
                      <FeatureList items={selfStudyFeatures} />
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <p className="text-2xl font-bold text-primary">₹29,999</p>
                      <Link
                        to={BOOK_CONSULTATION_PATH}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        Enquire about self-study access
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

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
                  Universities Our Students Have Reached
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Our students have earned admissions offers from some of the world&apos;s most
                prestigious institutions, including:
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
                and many other globally ranked institutions.
              </p>
            </div>

            <div>
              <SectionHeader
                eyebrow="Methodology"
                title="Why Our Methodology Works"
              />
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

            {/* <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-navy to-secondary p-6 text-white shadow-elevated sm:p-8">
              <BookOpen className="h-8 w-8 text-accent" />
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Start Your GRE Success Journey
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
            </div> */}
        </div>
      </section>

      <CtaBand
        title="Start Your GRE Success Journey"
        subtitle="Book a consultation and discover the preparation path best suited to your target score and university goals."
      />
    </>
  );
}
