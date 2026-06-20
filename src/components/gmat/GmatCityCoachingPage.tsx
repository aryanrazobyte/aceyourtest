import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Quote,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import {
  BOOK_CONSULTATION_PATH,
  MENTOR_IMAGE,
  MENTOR_NAME,
} from "@/lib/site-constants";
import { GMAT_CITY_IMAGES } from "@/lib/gmat-city-images";
import type { GmatCoachingCity } from "@/lib/gmat-coaching-cities";
import { cn } from "@/lib/utils";

const whyChooseFeatures = [
  { feature: "Personalized Study Plan", benefit: "Customized according to your current score and target score" },
  { feature: "Expert Mentorship", benefit: "Learn directly from Tarun Kaushik" },
  { feature: "5000+ Practice Questions", benefit: "Extensive question bank for mastery" },
  { feature: "Mock Tests & Analytics", benefit: "Measure progress continuously" },
  { feature: "Small Batch Learning", benefit: "Maximum interaction and attention" },
  { feature: "Flexible Scheduling", benefit: "Weekday and weekend options" },
  { feature: "Application Support", benefit: "MBA admissions guidance" },
] as const;

const resultStats = [
  { metric: "Students Mentored", achievement: "10,000+" },
  { metric: "GMAT 705+ Scores", achievement: "2,000+" },
  { metric: "Top University Admits", achievement: "500+" },
  { metric: "Years of Mentoring Experience", achievement: "15+" },
] as const;

const universities = [
  "Harvard Business School",
  "Stanford Graduate School of Business",
  "Wharton School",
  "MIT Sloan",
  "Yale SOM",
  "Columbia Business School",
  "Kellogg School of Management",
  "Chicago Booth",
] as const;

const quantTopics = [
  "Arithmetic",
  "Number Systems",
  "Algebra",
  "Geometry",
  "Word Problems",
  "Statistics",
  "Probability",
];

const verbalTopics = [
  "Critical Reasoning",
  "Reading Comprehension",
  "Data Analysis",
  "Logic-Based Decision Making",
];

const dataInsightsTopics = [
  "Graph Interpretation",
  "Multi-Source Reasoning",
  "Data Analysis",
  "Business Analytics Questions",
];

const learningStages = [
  { stage: "Diagnostic Assessment", objective: "Identify strengths and weaknesses" },
  { stage: "Personalized Plan", objective: "Create a roadmap" },
  { stage: "Concept Mastery", objective: "Build fundamentals" },
  { stage: "Guided Practice", objective: "Apply concepts" },
  { stage: "Mock Testing", objective: "Simulate actual exam" },
  { stage: "Performance Review", objective: "Eliminate weaknesses" },
  { stage: "Final Strategy Phase", objective: "Maximize score potential" },
] as const;

const mentorExpertise = [
  "GMAT Focus Edition",
  "Quantitative Reasoning",
  "Verbal Reasoning",
  "Data Insights",
  "MBA Admissions Strategy",
];

const resourceRows = [
  { resource: "Study Notes", access: "Included" },
  { resource: "Practice Questions", access: "5000+" },
  { resource: "Mock Tests", access: "Included" },
  { resource: "Class Recordings", access: "Included" },
  { resource: "Doubt Support", access: "Included" },
  { resource: "Application Guidance", access: "Included" },
] as const;

const successAreas = [
  "Score Improvement",
  "University Admissions",
  "Scholarship Wins",
  "MBA Career Transitions",
];

function ContentImage({
  src,
  alt,
  className,
  contain = false,
}: {
  src: string;
  alt: string;
  className?: string;
  contain?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-surface shadow-card",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "h-full w-full",
          contain ? "object-contain p-4 sm:p-6" : "object-cover",
        )}
      />
    </div>
  );
}

function TopicPills({ items }: { items: readonly string[] }) {
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

export function GmatCityCoachingPage({ city }: { city: GmatCoachingCity }) {
  const cityName = city.name;

  return (
    <>
      <PageHero
        eyebrow={`Top GMAT Focus Coaching in ${cityName}`}
        title="Personalized GMAT Preparation for Ambitious MBA Applicants"
        subtitle={`Achieve your target GMAT score in ${cityName} through a structured preparation system designed by Tarun Kaushik — one of India's most trusted GMAT mentors.`}
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
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-xs font-semibold text-secondary">
                <MapPin className="h-3.5 w-3.5" />
                GMAT Coaching in {cityName}
              </div>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                Whether you are targeting a 655+, 705+, or elite 755+ score, our personalized
                coaching programs in {cityName} combine expert mentorship, advanced strategy
                training, comprehensive practice resources, and continuous performance tracking to
                maximize your success.
              </p>
            </div>
            <ContentImage
              src={GMAT_CITY_IMAGES.mentorPortrait}
              alt={`${MENTOR_NAME} — GMAT mentor in ${cityName}`}
              className="aspect-[4/5] max-h-[420px] lg:max-h-none"
            />
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.1fr]">
            <ContentImage
              src={GMAT_CITY_IMAGES.studentsStudy}
              alt={`Students preparing for GMAT in ${cityName}`}
              className="aspect-[16/10] order-2 lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <SectionHeader
                eyebrow="Why Ace Your Test"
                title="The Smart Choice for Serious MBA Aspirants"
                subtitle="Thousands of students struggle with GMAT preparation because they follow generic study plans and inconsistent strategies."
              />
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                At Ace Your Test, every student in {cityName} receives a structured roadmap tailored
                to their academic background, strengths, weaknesses, and target score.
              </p>
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Our Difference" title="What Makes Us Different?" />
            <div className="section-gap overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-navy text-navy-foreground">
                      <th className="px-4 py-3 font-semibold">Feature</th>
                      <th className="px-4 py-3 font-semibold">Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {whyChooseFeatures.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={i % 2 === 0 ? "bg-card" : "bg-surface/80"}
                      >
                        <td className="px-4 py-3 font-semibold text-navy">{row.feature}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Results"
              title="Our Results Speak for Themselves"
              subtitle="Proven track record of success for MBA aspirants across India."
            />
            <div className="section-gap grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {resultStats.map((stat) => (
                <div
                  key={stat.metric}
                  className="rounded-xl border border-border bg-card p-5 text-center shadow-card"
                >
                  <p className="text-2xl font-bold text-secondary sm:text-3xl">
                    {stat.achievement}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.metric}</p>
                </div>
              ))}
            </div>
            <div className="section-gap mt-6 rounded-xl border border-secondary/20 bg-gradient-to-br from-secondary/5 to-surface p-5 sm:p-6">
              <h3 className="text-lg font-bold text-navy">Universities Our Students Have Reached</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {universities.map((uni) => (
                  <li
                    key={uni}
                    className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-navy"
                  >
                    <GraduationCap className="h-4 w-4 shrink-0 text-secondary" />
                    {uni}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[1fr_minmax(260px,340px)]">
            <div>
              <SectionHeader
                eyebrow="Curriculum"
                title="Complete GMAT Curriculum"
                subtitle="Structured mastery across Quant, Verbal, and Data Insights for the GMAT Focus Edition."
              />
              <div className="section-gap space-y-4">
                <article className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <h3 className="text-lg font-bold text-navy">Quantitative Reasoning</h3>
                  <div className="mt-3">
                    <TopicPills items={quantTopics} />
                  </div>
                </article>
                <article className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <h3 className="text-lg font-bold text-navy">Verbal Reasoning</h3>
                  <div className="mt-3">
                    <TopicPills items={verbalTopics} />
                  </div>
                </article>
                <article className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <h3 className="text-lg font-bold text-navy">Data Insights</h3>
                  <div className="mt-3">
                    <TopicPills items={dataInsightsTopics} />
                  </div>
                </article>
              </div>
            </div>
            <ContentImage
              src={GMAT_CITY_IMAGES.classroomTraining}
              alt="GMAT classroom training"
              contain
              className="min-h-[240px]"
            />
          </div>

          <div>
            <SectionHeader
              eyebrow="Framework"
              title="Our Learning Framework"
              subtitle="A step-by-step success system designed to maximize your GMAT score."
            />
            <div className="section-gap overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary text-white">
                      <th className="px-4 py-3 font-semibold">Stage</th>
                      <th className="px-4 py-3 font-semibold">Objective</th>
                    </tr>
                  </thead>
                  <tbody>
                    {learningStages.map((row, i) => (
                      <tr
                        key={row.stage}
                        className={i % 2 === 0 ? "bg-card" : "bg-surface/80"}
                      >
                        <td className="px-4 py-3 font-semibold text-navy">{row.stage}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.objective}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grid items-center gap-6 rounded-2xl border border-border bg-card p-5 shadow-card sm:p-6 lg:grid-cols-[minmax(220px,280px)_1fr]">
            <ContentImage
              src={MENTOR_IMAGE}
              alt={MENTOR_NAME}
              className="aspect-[4/5] max-w-xs mx-auto lg:mx-0"
            />
            <div>
              <SectionHeader
                eyebrow="Your Mentor"
                title={`Meet ${MENTOR_NAME}`}
                subtitle="Your Personal Guide to GMAT Success"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                With over 15 years of mentoring experience and thousands of successful students,{" "}
                {MENTOR_NAME} has helped applicants from {cityName} and across India gain admission
                to top MBA programs across the world.
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">Expertise</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {mentorExpertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-navy"
                  >
                    {item}
                  </span>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Programs" title="Program Options" />
            <div className="section-gap grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-secondary/30 bg-card shadow-card">
                <ContentImage
                  src={GMAT_CITY_IMAGES.privateCoaching}
                  alt="Private 1-on-1 GMAT coaching"
                  contain
                  className="rounded-none border-0 border-b border-border"
                />
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Private 1-on-1 GMAT Coaching</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-secondary">
                    Best For
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {["Working Professionals", "High Score Targets", "Fast Improvement"].map(
                      (item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-success" />
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
                    Includes
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {[
                      "Personalized Classes",
                      "Flexible Schedule",
                      "Direct Mentorship",
                      "Performance Tracking",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/gmat/plans-pricing"
                    className="mt-4 inline-flex text-sm font-semibold text-secondary hover:underline"
                  >
                    View plans & pricing →
                  </Link>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <ContentImage
                  src={GMAT_CITY_IMAGES.groupLearning}
                  alt="Interactive GMAT group program"
                  contain
                  className="rounded-none border-0 border-b border-border"
                />
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Interactive Group Program</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-secondary">
                    Best For
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {[
                      "Collaborative Learning",
                      "Structured Preparation",
                      "Competitive Environment",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
                    Includes
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {[
                      "Small Cohorts",
                      "Live Classes",
                      "Weekly Reviews",
                      "Community Support",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/gmat/plans-pricing"
                    className="mt-4 inline-flex text-sm font-semibold text-secondary hover:underline"
                  >
                    View plans & pricing →
                  </Link>
                </div>
              </article>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <SectionHeader eyebrow="Success Stories" title="Real Results. Real Transformations." />
            <blockquote className="relative mt-4 rounded-xl border border-border bg-card p-5">
              <Quote className="h-8 w-8 text-secondary/30" aria-hidden />
              <p className="mt-2 text-sm sm:text-base italic text-foreground leading-relaxed">
                &ldquo;I increased my GMAT score significantly after joining Ace Your Test. The
                structured strategy and personalized mentorship completely changed my
                preparation.&rdquo;
              </p>
            </blockquote>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
              Featured Success Areas
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {successAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-navy"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[1fr_minmax(260px,340px)]">
            <div>
              <SectionHeader
                eyebrow="Resources"
                title="Free Resources & Support"
                subtitle="What students receive as part of their GMAT preparation journey."
              />
              <div className="section-gap overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[400px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-border bg-navy text-navy-foreground">
                        <th className="px-4 py-3 font-semibold">Resource</th>
                        <th className="px-4 py-3 font-semibold">Access</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resourceRows.map((row, i) => (
                        <tr
                          key={row.resource}
                          className={i % 2 === 0 ? "bg-card" : "bg-surface/80"}
                        >
                          <td className="px-4 py-3 font-medium text-navy">{row.resource}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.access}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <ContentImage
              src={GMAT_CITY_IMAGES.studyMaterials}
              alt="GMAT study materials and resources"
              contain
              className="min-h-[240px]"
            />
          </div>

          <div className="rounded-3xl border-2 border-secondary/30 bg-gradient-to-br from-navy via-secondary to-navy p-6 text-white shadow-elevated sm:p-8">
            <SectionHeader
              eyebrow="Get Started"
              title="Start Your MBA Journey Today"
              subtitle={`Book a free consultation and receive a personalized GMAT preparation roadmap for ${cityName}.`}
            />
            <ul className="section-gap mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3 font-semibold">{MENTOR_NAME}</li>
              <li className="flex items-center gap-3 text-white/85">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+918800338783" className="hover:text-white">
                  +91 88003 38783
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/85">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+919310037791" className="hover:text-white">
                  +91 93100 37791
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/85">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:tarunkaushik@aceyourtest.in"
                  className="hover:text-white break-all"
                >
                  tarunkaushik@aceyourtest.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/85">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Alaknanda, New Delhi, India
              </li>
            </ul>
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
        title={`Top GMAT Focus Coaching in ${cityName}`}
        subtitle="Join Ace Your Test and build the score that opens doors to the world's best MBA programs."
      />
    </>
  );
}
