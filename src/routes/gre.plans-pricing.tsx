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
import { GreProgramCard } from "../components/gre/GreProgramCard";
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
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1782751324/Group_Classes_fwpsm2.png",
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
      "High-score aspirants (330-335)",
      "Working professionals",
      "Students requiring flexible scheduling",
      "Learners seeking individual attention",
      "Candidates who want a personalized preparation strategy",
    ],
    highlights: [
      "Personalized 1:1 Mentoring",
      "Customized Study Roadmap",
      "Quant & Verbal Mastery",
      "100,000+ Curated Questions",
      "30+ Sectional Tests",
    ],
    extendedHighlights: [
      "Personalized 1:1 Mentoring",
      "Customized Study Roadmap",
      "Quant & Verbal Mastery",
      "100,000+ Curated Questions",
      "30+ Sectional Tests",
      "Official GRE-Level Practice",
      "Full-Length Mock Tests",
      "Practice Drills",
      "Advanced Test-Taking Strategies",
      "Time Management Techniques",
      "Personalized Error Analysis",
      "Unlimited Doubt Support",
      "Vocabulary Enhancement Program",
      "Flexible Learning Schedule",
      "Recorded Sessions",
      "Expert Performance Reviews",
      "Score Improvement Strategy",
      "Exam-Day Preparation",
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
      "50 Hours of Live, Interactive Instruction",
      "Small Batches (Maximum 10 Students)",
      "5,000+ Curated GRE Practice Questions",
      "30+ Sectional Tests with Detailed Analytics",
      "Official GRE-Style Practice Material",
    ],
    extendedHighlights: [
      "50 Hours of Live, Interactive Instruction",
      "Small Batches (Maximum 10 Students)",
      "5,000+ Curated GRE Practice Questions",
      "30+ Sectional Tests with Detailed Analytics",
      "Official GRE-Style Practice Material",
      "Comprehensive Study Notes for Every Topic",
      "Daily Study Targets for Consistent Progress",
      "Topic-Wise Practice & Concept Reinforcement",
      "Expert Test Reviews & Score-Boosting Strategies",
      "Personalized Performance Analysis",
      "Instant Doubt Resolution During & Beyond Class",
      "Weekly Progress Reviews & Action Plans",
      "Collaborative Learning with Peer Discussions",
      "Dedicated WhatsApp Support for Quick Assistance",
      "Class Recordings with 6-Month Access",
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
      "3-Month Intensive GRE Preparation",
      "Live Interactive Online Classes with recorded access",
      "Micro Batches (Up to 4 Students) for personalized attention",
      "Expert Faculty with 1:1 Mentoring Support",
      "30+ Sectional Tests with in-depth performance analysis",
    ],
    extendedHighlights: [
      "3-Month Intensive GRE Preparation",
      "Live Interactive Online Classes with recorded access",
      "Micro Batches (Up to 4 Students) for personalized attention",
      "Expert Faculty with 1:1 Mentoring Support",
      "30+ Sectional Tests with in-depth performance analysis",
      "Structured Topic-Wise Practice for Quant & Verbal mastery",
      "Customized Assignments based on individual progress",
      "Comprehensive Study Plan aligned with target score",
      "Detailed Error Analysis for continuous improvement",
      "Regular Performance Tracking with actionable insights",
      "Flexible Learning Schedule for working professionals & students",
      "Strategy Sessions focused on high-score techniques",
    ],
    cta: "Explore Micro Batches ",
    to: BOOK_CONSULTATION_PATH,
    featured: false,
  },
] as const;

const privateFeatures = [
  "Personalized 1:1 Mentoring",
  "Customized Study Roadmap",
  "Quant & Verbal Mastery",
  "100,000+ Curated Questions",
  "30+ Sectional Tests",
  "Official GRE-Level Practice",
  "Full-Length Mock Tests",
  "Practice Drills",
  "Advanced Test-Taking Strategies",
  "Time Management Techniques",
  "Personalized Error Analysis",
  "Unlimited Doubt Support",
  "Vocabulary Enhancement Program",
  "Flexible Learning Schedule",
  "Recorded Sessions",
  "Expert Performance Reviews",
  "Score Improvement Strategy",
  "Exam-Day Preparation",
];

const groupFeatures = [
  "50 Hours of Live, Interactive Instruction",
  "Small Batches (Maximum 10 Students)",
  "5,000+ Curated GRE Practice Questions",
  "30+ Sectional Tests with Detailed Analytics",
  "Official GRE-Style Practice Material",
  "Comprehensive Study Notes for Every Topic",
  "Daily Study Targets for Consistent Progress",
  "Topic-Wise Practice & Concept Reinforcement",
  "Expert Test Reviews & Score-Boosting Strategies",
  "Personalized Performance Analysis",
  "Instant Doubt Resolution During & Beyond Class",
  "Weekly Progress Reviews & Action Plans",
  "Collaborative Learning with Peer Discussions",
  "Dedicated WhatsApp Support for Quick Assistance",
  "Class Recordings with 6-Month Access",
];

const cohortAdvantages = [
  "Strategic discussions",
  "Alternate solving approaches",
  "Verbal reasoning debates",
  "Quantitative shortcut discovery",
  "Collaborative error analysis",
];

const selfStudyFeatures = [
  "3-Month Intensive GRE Preparation",
  "Live Interactive Online Classes with recorded access",
  "Micro Batches (Up to 4 Students) for personalized attention",
  "Expert Faculty with 1:1 Mentoring Support",
  "30+ Sectional Tests with in-depth performance analysis",
  "Structured Topic-Wise Practice for Quant & Verbal mastery",
  "Customized Assignments based on individual progress",
  "Comprehensive Study Plan aligned with target score",
  "Detailed Error Analysis for continuous improvement",
  "Regular Performance Tracking with actionable insights",
  "Flexible Learning Schedule for working professionals & students",
  "Strategy Sessions focused on high-score techniques",
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
                  <GreProgramCard key={program.id} program={program} />
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
