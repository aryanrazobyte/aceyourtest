import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Target,
  GraduationCap,
  Briefcase,
  Users,
  FileText,
  Mic,
  ArrowRight,
  TrendingUp,
  BarChart3,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { BOOK_CONSULTATION_PATH } from "../lib/site-constants";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/gmat/top-university-cutoff")({
  head: () => ({
    meta: [
      {
        title: "Top University GMAT Scores & Cut-offs 2026 | AceYourTest",
      },
      {
        name: "description",
        content:
          "GMAT score benchmarks for Stanford, Harvard, Wharton, MIT Sloan, Kellogg, Booth and more. Average scores, typical ranges, and target score guidance for top MBA programs.",
      },
      {
        property: "og:title",
        content: "Top University GMAT Cut-off — AceYourTest",
      },
      {
        property: "og:description",
        content:
          "Understand average GMAT scores and admission benchmarks at leading global business schools — plus how to build a competitive MBA profile.",
      },
      { property: "og:url", content: "/gmat/top-university-cutoff" },
    ],
    links: [{ rel: "canonical", href: "/gmat/top-university-cutoff" }],
  }),
  component: GmatTopUniversityCutoffPage,
});

const universityBenchmarks = [
  { university: "Stanford University", average: "715", range: "645 – 795" },
  { university: "Yale University", average: "725", range: "715 – 765" },
  {
    university: "UCLA Anderson School of Management",
    average: "705",
    range: "615 – 705",
  },
  {
    university: "Northwestern University (Kellogg)",
    average: "685",
    range: "645 – 785",
  },
  {
    university: "University of Chicago (Booth)",
    average: "685",
    range: "675 – 715",
  },
  { university: "Harvard University", average: "675", range: "515 – 685" },
  { university: "Columbia University", average: "675", range: "515 – 695" },
  {
    university: "Massachusetts Institute of Technology (MIT Sloan)",
    average: "675",
    range: "645 – 765",
  },
  {
    university: "University of Pennsylvania (Wharton)",
    average: "645",
    range: "635 – 685",
  },
  { university: "Dartmouth College (Tuck)", average: "585", range: "565 – 595" },
] as const;

type ScoreTargetCard = {
  score: string;
  label: string;
  accent: string;
  border: string;
  schools: readonly string[];
  desc: string;
  muted?: boolean;
};

const scoreTargetCards: ScoreTargetCard[] = [
  {
    score: "750+",
    label: "GMAT Score",
    accent: "from-navy to-secondary",
    border: "border-primary/30",
    schools: [
      "Stanford GSB",
      "Harvard Business School",
      "Wharton",
      "MIT Sloan",
      "Yale SOM",
    ],
    desc: "Suitable for applicants targeting the most selective global MBA programs.",
  },
  {
    score: "700–750",
    label: "GMAT Score",
    accent: "from-primary/90 to-primary",
    border: "border-primary/20",
    schools: [
      "Chicago Booth",
      "Kellogg School of Management",
      "Columbia Business School",
      "UCLA Anderson",
      "Top 20 MBA Programs",
    ],
    desc: "Strongly competitive for elite US and global business schools.",
  },
  {
    score: "650–700",
    label: "GMAT Score",
    accent: "from-secondary/90 to-secondary",
    border: "border-secondary/20",
    schools: [
      "Top 30 MBA Programs",
      "International MBA Programs",
      "Specialized Master's Programs",
    ],
    desc: "Competitive for strong regional and international MBA options.",
  },
  {
    score: "Below 650",
    label: "GMAT Score",
    accent: "from-surface to-card",
    border: "border-border",
    schools: [
      "Academic profile strengthening",
      "Professional experience",
      "Essays & SOPs",
      "Leadership achievements",
      "Interview performance",
    ],
    desc: "Focus on holistic profile building alongside score improvement.",
    muted: true,
  },
];

const holisticFactors = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    desc: "Strong undergraduate performance and quantitative readiness.",
  },
  {
    icon: Briefcase,
    title: "Professional Experience",
    desc: "Impactful work experience, leadership progression, and measurable achievements.",
  },
  {
    icon: Users,
    title: "Leadership Potential",
    desc: "Evidence of initiative, decision-making ability, and influence.",
  },
  {
    icon: FileText,
    title: "Essays & Personal Story",
    desc: "A compelling narrative that clearly communicates goals, motivations, and career aspirations.",
  },
  {
    icon: Mic,
    title: "Interview Performance",
    desc: "Communication skills, confidence, and alignment with the school's values.",
  },
];

const programHighlights = [
  "Personalized Study Plans",
  "One-on-One Coaching",
  "Small Interactive Cohorts",
  "5,000+ Practice Questions",
  "Official GMAT-Level Material",
  "Advanced Quant & Verbal Strategies",
  "Full-Length Mock Tests",
  "Performance Analytics & Error Tracking",
  "Application & Admissions Guidance",
];

const trustStats = [
  { value: "10,000+", label: "Students Mentored" },
  { value: "2,000+", label: "Students with GMAT Scores Above 705" },
  { value: "500+", label: "Admits to Top Global Universities" },
];


function GmatTopUniversityCutoffPage() {
  return (
    <>
      <PageHero
        eyebrow="GMAT Admissions Guide 2026"
        title="Top University GMAT Scores & Admission Benchmarks"
        subtitle="The GMAT remains one of the most important components of a competitive MBA application. Understand score ranges at leading business schools and set a target that matches your goals."
      >
        <Link
          to={BOOK_CONSULTATION_PATH}
          className="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white hover:bg-secondary/90 transition-colors"
        >
          Book Free GMAT Consultation
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page space-y-8 sm:space-y-10">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              While there is no official minimum GMAT score required by most universities,
              admitted students typically fall within a specific score range. A strong GMAT score
              demonstrates analytical ability, quantitative reasoning, verbal proficiency, and
              readiness for the academic rigor of a world-class MBA program.
            </p>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              The table below provides a snapshot of average GMAT scores and typical score ranges
              observed among admitted students at leading global business schools.
            </p>
          </div>

          <div>
            <SectionHeader
              eyebrow="Benchmarks"
              title="Top University GMAT Score Benchmarks"
              subtitle="Average scores and typical admitted-student ranges at leading MBA programs."
            />
            <div className="section-gap overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-navy text-navy-foreground">
                      <th className="px-4 py-3.5 font-semibold">University</th>
                      <th className="px-4 py-3.5 font-semibold whitespace-nowrap">
                        Average GMAT Score
                      </th>
                      <th className="px-4 py-3.5 font-semibold whitespace-nowrap">
                        Typical GMAT Range
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {universityBenchmarks.map((row, i) => (
                      <tr
                        key={row.university}
                        className={cn(
                          "border-b border-border/60 last:border-0",
                          i % 2 === 0 ? "bg-card" : "bg-surface/80",
                        )}
                      >
                        <td className="px-4 py-3.5 font-medium text-navy">
                          {row.university}
                        </td>
                        <td className="px-4 py-3.5">
                          <span className="inline-flex min-w-[3rem] justify-center rounded-md bg-primary/10 px-2.5 py-1 font-bold text-primary">
                            {row.average}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-muted-foreground">{row.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Target Scores"
              title="What GMAT Score Should You Target?"
              subtitle="Your target score depends on the universities you plan to apply to and the competitiveness of your overall profile."
            />
            <div className="section-gap grid gap-4 sm:grid-cols-2">
              {scoreTargetCards.map((card) => (
                <article
                  key={card.score}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-card shadow-card",
                    card.border,
                    card.muted && "bg-surface",
                  )}
                >
                  <div
                    className={cn(
                      "px-5 py-4 text-white",
                      card.muted
                        ? "bg-navy/90"
                        : `bg-gradient-to-r ${card.accent}`,
                    )}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold sm:text-3xl">{card.score}</span>
                      <span className="text-sm font-medium text-white/80">{card.label}</span>
                    </div>
                    <p className="mt-1 text-xs text-white/75 sm:text-sm">{card.desc}</p>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-navy">
                      {card.muted ? "Students should focus on strengthening" : "Suitable for"}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {card.schools.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Holistic Admissions"
              title="Beyond GMAT: What Top Universities Look For"
              subtitle="A high GMAT score alone does not guarantee admission. Leading business schools evaluate applicants holistically."
            />
            <div className="section-gap grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {holisticFactors.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-5 shadow-card"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary/10 text-secondary">
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

          <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-secondary/5 to-surface p-5 sm:p-6">
            <SectionHeader
              eyebrow="Ace Your Test"
              title="How Ace Your Test Helps Students Achieve Competitive GMAT Scores"
              subtitle="Structured preparation designed to maximize score improvement and strengthen your overall MBA application profile."
            />
            <div className="section-gap grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {programHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-card"
                >
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/gmat/plans-pricing"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:underline"
              >
                View GMAT plans & pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={BOOK_CONSULTATION_PATH}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Book free consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Our Impact" title="Why Students Choose Ace Your Test" />
            <div className="section-gap grid gap-4 sm:grid-cols-3">
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-5 text-center shadow-card"
                >
                  <TrendingUp className="mx-auto h-6 w-6 text-secondary" />
                  <p className="mt-2 text-2xl font-bold text-secondary sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="section-gap mt-4 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm">
                <Target className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium text-navy">
                  Personalized Mentorship by Tarun Kaushik
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm">
                <BarChart3 className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium text-navy">
                  Proven Results Across GMAT, GRE &amp; SAT
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-secondary/30 bg-gradient-to-br from-navy via-secondary to-navy p-6 text-white shadow-elevated sm:p-8">
            <BookOpen className="h-8 w-8 text-accent" />
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Book Your Free GMAT Consultation
            </h3>
            <p className="mt-3 text-sm text-white/85 leading-relaxed sm:text-base">
              Whether you are targeting a 650, 700, or 750+ GMAT score, our mentors can help build
              a preparation roadmap tailored to your goals and dream business schools.
            </p>
            <Link
              to={BOOK_CONSULTATION_PATH}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-navy hover:bg-accent/90 transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Target the Right GMAT Score for Your Dream MBA"
        subtitle="Speak with an expert mentor and get a personalized score roadmap aligned with your target universities."
      />
    </>
  );
}
