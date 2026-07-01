import { createFileRoute, Link } from "@tanstack/react-router";
import {
  User,
  BookOpen,
  Target,
  BarChart3,
  Lightbulb,
  Clock,
  GraduationCap,
  Sparkles,
  Briefcase,
} from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { GmatProgramCard } from "../components/gmat/GmatProgramCard";
import { BOOK_CONSULTATION_PATH } from "../lib/site-constants";

export const Route = createFileRoute("/gmat/plans-pricing")({
  head: () => ({
    meta: [
      {
        title: "GMAT Plans & Pricing — Private, Group & Self-Study | AceYourTest",
      },
      {
        name: "description",
        content:
          "Compare GMAT Focus Edition programs: 1-on-1 coaching (₹4,999/hr), elite group classes (₹49,999), and self-study mastery (₹29,999). Mentorship from Tarun Kaushik.",
      },
      {
        property: "og:title",
        content: "GMAT Plans and Pricing — AceYourTest",
      },
      {
        property: "og:description",
        content:
          "Choose the GMAT program that fits your MBA goals — private coaching, interactive cohorts, or flexible self-study with premium resources.",
      },
      { property: "og:url", content: "/gmat/plans-pricing" },
    ],
    links: [{ rel: "canonical", href: "/gmat/plans-pricing" }],
  }),
  component: GmatPlansPricingPage,
});

const PROGRAM_IMAGES = {
  individual:
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781943926/5_toiten.png",
  group:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781943926/4_xhhqwf.png",
  selfStudy:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1781943926/6_nkxrv7.png",
  microBatch:
    "https://res.cloudinary.com/ddcx08e0s/image/upload/v1782808747/Group_Classes_1_bk7jyj.png",
} as const;

const programCards = [
  {
    id: "private",
    badge: "Program 1",
    title: "Individual Classes",
    subtitle: "Private 1-on-1 Premium GMAT Coaching",
    tagline: "The Most Personalized GMAT Focus Edition Experience",
    price: "₹4,999",
    priceNote: "per hour",
    image: PROGRAM_IMAGES.individual,
    imageAlt: "GMAT individual private coaching classes",
    idealFor: [
      "Students targeting 705–755+ scores",
      "Working professionals pursuing MBA",
      "Candidates with limited preparation time",
      "Applicants seeking maximum personalization",
    ],
    highlights: [
      "Personalized 1-on-1 GMAT Coaching",
      "Customized Study Plan & Score Strategy",
      "Comprehensive Diagnostic Assessment",
      "Official GMAT Study Material",
      "Exclusive, Instructor-Curated Study Notes",
    ],
    extendedHighlights: [
      "Personalized 1-on-1 GMAT Coaching",
      "Customized Study Plan & Score Strategy",
      "Comprehensive Diagnostic Assessment",
      "Official GMAT Study Material",
      "Exclusive, Instructor-Curated Study Notes",
      "100,000+ Curated Practice Questions",
      "20+ Sectional Mock Tests",
      "Quant, Verbal & Data Insights Mastery",
      "Adaptive Learning & Targeted Practice",
      "Detailed Performance Analytics",
      "Expert Error Analysis & Feedback",
      "Advanced Time Management Strategies",
      "Instant Doubt Resolution",
      "Flexible Scheduling (Weekdays & Weekends)",
      "Continuous Progress Tracking",
      "Results-Driven Score Improvement",
    ],
    cta: "Explore Private Coaching",
    to: "/gmat/individual-tutoring" as const,
    featured: true,
  },
  {
    id: "group",
    badge: "Program 2",
    title: "Group Classes",
    subtitle: "Elite Interactive GMAT Group Preparation",
    tagline: "Learn. Compete. Improve. Succeed.",
    price: "₹49,999",
    priceNote: "full program",
    image: PROGRAM_IMAGES.group,
    imageAlt: "GMAT group classes and cohort preparation",
    idealFor: [
      "Students targeting 655–705+",
      "Learners who thrive in competitive environments",
      "MBA aspirants seeking premium prep at optimized cost",
    ],
    highlights: [
      "50+ Hours of Live, Interactive Classes",
      "Small Batches (Maximum 10 Students)",
      "Personalized Study Plan & Daily Targets",
      "5,000+ GMAT-Focused Practice Questions",
      "20 Sectional Tests with Performance Analytics",
    ],
    extendedHighlights: [
      "50+ Hours of Live, Interactive Classes",
      "Small Batches (Maximum 10 Students)",
      "Personalized Study Plan & Daily Targets",
      "5,000+ GMAT-Focused Practice Questions",
      "20 Sectional Tests with Performance Analytics",
      "Official GMAT-Style Practice Material",
      "Exclusive, Instructor-Curated Study Notes",
      "Topic-Wise Quant, Verbal & Data Insights Practice",
      "Expert Test Strategy & Review Sessions",
      "Personalized Error Analysis & Feedback",
      "Instant Doubt Resolution During & Beyond Class",
      "Weekly Progress Reviews & Score Tracking",
      "Collaborative Learning with Peer Discussions",
      "Dedicated WhatsApp Support",
      "Class Recordings with 6-Month Access",
      "Optional 1-on-1 Mentoring",
    ],
    cta: "Explore Group Classes",
    to: "/gmat/group-classes" as const,
    featured: false,
  },
  {
    id: "self-study",
    badge: "Program 3",
    title: "GMAT Self Study Plan",
    subtitle: "GMAT Self-Study Mastery Program",
    tagline: "Premium Preparation. Complete Flexibility.",
    price: "₹29,999",
    priceNote: "one-time",
    image: PROGRAM_IMAGES.selfStudy,
    imageAlt: "GMAT self-study mastery program resources",
    idealFor: [
      "Independent learners",
      "Budget-conscious MBA applicants",
      "Students preparing alongside work commitments",
    ],
    highlights: [
      "Recorded Lessons for complete flexibility",
      "Structured Self-Study Roadmap for guided preparation",
      "Personalized Strategy Plan based on diagnostic assessment",
      "5,000+ Practice Questions for concept mastery",
      "Exclusive Study Notes & Revision Material",
    ],
    extendedHighlights: [
      "Recorded Lessons for complete flexibility",
      "Structured Self-Study Roadmap for guided preparation",
      "Personalized Strategy Plan based on diagnostic assessment",
      "5,000+ Practice Questions for concept mastery",
      "Exclusive Study Notes & Revision Material",
      "Step-by-Step Concept Modules for Quant, Verbal & DI",
      "Error Analysis Framework for continuous improvement",
      "Progress Tracking System to monitor performance",
      "Advanced Test Strategies for higher accuracy & speed",
      "Anytime, Anywhere Access for self-paced learning",
    ],
    cta: "Get Self-Study Access",
    to: "/gmat/self-study-plan" as const,
    featured: false,
  },
  {
    id: "micro-batch",
    badge: "Program 4",
    title: "GMAT Micro Batch Sessions",
    subtitle: "Intensive Small-Group GMAT Focus",
    tagline: "Live expert-led micro batches with personalized mentoring & score strategy",
    price: "₹1,20,000",
    priceNote: "full program",
    image: PROGRAM_IMAGES.microBatch,
    imageAlt: "GMAT micro batch group coaching sessions",
    idealFor: [],
    highlights: [
      "Intensive 3-Month GMAT Preparation",
      "Live Expert-Led Classes with Recording Access",
      "Exclusive Micro Batches (Up to 4 Students)",
      "Personalized Mentoring & Score Strategy",
      "20+ Sectional Tests with Smart Analytics",
    ],
    extendedHighlights: [
      "Intensive 3-Month GMAT Preparation",
      "Live Expert-Led Classes with Recording Access",
      "Exclusive Micro Batches (Up to 4 Students)",
      "Personalized Mentoring & Score Strategy",
      "20+ Sectional Tests with Smart Analytics",
      "Quant, Verbal & Data Insights Mastery",
      "Customized Study Roadmap",
      "Targeted Practice & Assignments",
      "Expert Error Analysis",
      "Continuous Performance Tracking",
      "Advanced Test-Taking Techniques",
      "Flexible Online Learning",
    ],
    cta: "Explore Micro Batch Program",
    to: "/gmat/microbatch-classes" as const,
    featured: false,
    layout: "landscape" as const,
  },
] as const;

const impactStats = [
  // { value: "2000+", label: "Students with GMAT Scores Above 705" },
  { value: "1500+", label: "Students with GRE Scores Above 330" },
  // { value: "1000+", label: "Students with SAT Scores Above 1500" },
  { value: "500+", label: "Admits to Top-Ranked Global Universities" },
];

const businessSchools = [
  "Harvard Business School",
  "Stanford GSB",
  "INSEAD",
  "London Business School",
  "Wharton",
  "Columbia Business School",
];

const methodology = [
  {
    icon: Lightbulb,
    title: "Concept First Approach",
    desc: "Understand the logic behind every GMAT question instead of memorizing shortcuts.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Identify weaknesses early and eliminate score-limiting patterns before test day.",
  },
  {
    icon: Target,
    title: "Strategic Test Taking",
    desc: "Master pacing, guessing strategy, and section-order decisions for the Focus Edition.",
  },
  {
    icon: Clock,
    title: "Continuous Accountability",
    desc: "Stay disciplined with structured plans, mock reviews, and progress check-ins.",
  },
  {
    icon: User,
    title: "Direct Expert Mentorship",
    desc: "Learn directly from one of India's most experienced GMAT Focus Edition mentors.",
  },
];

function GmatPlansPricingPage() {
  return (
    <>
      <PageHero
        eyebrow="GMAT Focus Edition Programs 2026"
        title="Build the Score That Opens Top MBA Doors"
        subtitle="Your GMAT score is more than a number—it is your gateway to elite business schools, scholarships, and global career opportunities. Choose the program that fits your goals."
      >
        <Link
          to={BOOK_CONSULTATION_PATH}
          className="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white hover:bg-secondary/90 transition-colors"
        >
          Book Free Consultation
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page space-y-8 sm:space-y-10">
          <div className="rounded-2xl border border-secondary/20 bg-gradient-to-r from-secondary/5 to-surface p-5 sm:p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
              <Briefcase className="h-3.5 w-3.5" />
              GMAT Focus Edition
            </div>
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              At Ace Your Test, every GMAT program is designed around one objective: helping
              ambitious MBA aspirants maximize their Focus Edition score through proven strategies,
              structured learning systems, and direct mentorship from Tarun Kaushik.
            </p>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Whether you prefer private coaching, collaborative group learning, or self-paced
              preparation, our programs provide everything required to achieve exceptional GMAT
              results and strengthen your business school applications.
            </p>
          </div>

          <div>
            <SectionHeader
              eyebrow="Compare Programs"
              title="Choose Your GMAT Preparation Path"
              subtitle="Four distinct programs — each built on the same elite methodology, tailored to how you learn best."
            />
            <div className="section-gap grid gap-5 lg:grid-cols-3">
              {programCards.map((program) => (
                <GmatProgramCard key={program.id} program={program} />
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
                  className="rounded-2xl border border-border bg-card p-5 text-center shadow-card"
                >
                  <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-secondary/5 to-surface p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-secondary" />
              <h3 className="text-lg font-bold text-navy">
                Business Schools Our Students Have Reached
              </h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Our students have earned admissions offers from some of the world&apos;s most
              prestigious MBA programs, including:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {businessSchools.map((school) => (
                <li
                  key={school}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-navy"
                >
                  <Sparkles className="h-4 w-4 shrink-0 text-secondary" />
                  {school}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground italic">
              and many other globally ranked institutions.
            </p>
          </div>

          <div>
            <SectionHeader eyebrow="Methodology" title="Why Our Methodology Works" />
            <div className="section-gap grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {methodology.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-card"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/10 text-secondary">
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

         
        </div>
      </section>

      <CtaBand
        title="Start Your GMAT Success Journey"
        subtitle="Book a consultation and discover the preparation path best suited to your target score and business school goals."
      />
    </>
  );
}
