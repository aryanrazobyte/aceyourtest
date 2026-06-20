import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  User,
  Target,
  BarChart3,
  BookOpen,
  Clock,
  Video,
  Sparkles,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { BOOK_CONSULTATION_PATH } from "@/lib/site-constants";
import type { GreCoachingCity } from "@/lib/gre-coaching-cities";

const tutoringBenefits = [
  "Customized Study Plan",
  "Personalized Quant & Verbal Training",
  "Flexible Class Scheduling",
  "Faster Score Improvement",
  "Direct Access to Expert Mentorship",
  "Intensive Weakness Analysis",
  "Unlimited Doubt Resolution",
  "Detailed Performance Tracking",
  "Individual Test-Taking Strategies",
  "University Admission Guidance",
];

const idealFor = [
  "Students targeting Top 50 Global Universities",
  "Working Professionals preparing alongside full-time jobs",
  "Final-year undergraduate students",
  "Candidates planning MS, MBA, MIM, or PhD admissions",
  "Students seeking scholarships and assistantships",
  "Learners who prefer individual attention over group classes",
];

const diagnosticAreas = [
  "Quantitative Aptitude",
  "Verbal Reasoning",
  "Reading Comprehension",
  "Vocabulary Strength",
  "Data Interpretation",
  "Time Management Skills",
];

const learningFramework = [
  {
    icon: BookOpen,
    title: "Concept Mastery",
    desc: "Build strong fundamentals and eliminate conceptual gaps.",
  },
  {
    icon: Target,
    title: "Strategic Problem Solving",
    desc: "Learn proven techniques for solving GRE questions quickly and accurately.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    desc: "Develop the pacing, decision-making, and test-taking discipline required for top GRE scores.",
  },
];

const quantTopics = [
  "Arithmetic",
  "Number Systems",
  "Algebra",
  "Geometry",
  "Coordinate Geometry",
  "Statistics",
  "Probability",
  "Permutations & Combinations",
  "Word Problems",
  "Data Interpretation",
];

const quantQuestionTypes = [
  "Quantitative Comparison",
  "Problem Solving",
  "Numeric Entry",
  "Data Analysis",
];

const verbalFocus = [
  "Vocabulary Development",
  "Text Completion",
  "Sentence Equivalence",
  "Reading Comprehension",
  "Critical Reasoning",
  "Logical Analysis",
];

const practiceResources = [
  "5,000+ GRE-Style Questions",
  "Topic-Wise Practice Sets",
  "Sectional Assessments",
  "Adaptive Difficulty Drills",
  "Official-Level Practice Material",
  "Full-Length Mock Exams",
];

const performanceTracking = [
  "Weekly Progress Reports",
  "Error Analysis",
  "Time Management Review",
  "Accuracy Tracking",
  "Improvement Recommendations",
];

const schedulingOptions = [
  "Weekday Sessions",
  "Weekend Sessions",
  "Fast-Track Preparation",
  "Long-Term Preparation Plans",
];

const beyondGre = [
  "University Selection",
  "SOP Planning",
  "Application Strategy",
  "Scholarship Opportunities",
  "Graduate Admissions Roadmaps",
];

const studentAchievements = [
  "330+ GRE Scores",
  "Admissions to Top Global Universities",
  "Scholarship Recipients",
  "Successful MS, MBA, and MIM Applicants",
  "Working Professionals Achieving Dream Scores",
];

const trustStats = [
  { value: "10,000+", label: "Students Mentored" },
  { value: "500+", label: "Admissions to Top Universities" },
  { value: "330+", label: "GRE Score Achievers" },
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

export function GreCityCoachingPage({ city }: { city: GreCoachingCity }) {
  const cityName = city.name;

  return (
    <>
      <PageHero
        eyebrow={`Personalized 1-on-1 GRE Tutoring in ${cityName}`}
        title="Achieve Your Target GRE Score with Private Expert Mentorship"
        subtitle={`Preparing for the GRE in ${cityName} takes more than solving questions — master the test, build strategic thinking, and gain the confidence to perform under pressure with direct mentorship from Tarun Kaushik.`}
      >
        <Link
          to={BOOK_CONSULTATION_PATH}
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors"
        >
          Book Free GRE Consultation
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page space-y-8 sm:space-y-10">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <MapPin className="h-3.5 w-3.5" />
              GRE Coaching in {cityName}
            </div>
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              At Ace Your Test, our 1-on-1 GRE Tutoring Program in {cityName} is designed for
              ambitious students who want personalized guidance, accelerated improvement, and direct
              mentorship from one of India&apos;s most trusted GRE mentors, Tarun Kaushik.
            </p>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Whether you are targeting a 320+, 330+, or elite 335+ score, our private tutoring
              program creates a customized preparation roadmap based on your current ability, target
              score, academic background, and university goals — with flexible online sessions
              accessible to students across {cityName} and beyond.
            </p>
          </div>

          <div>
            <SectionHeader
              eyebrow="Why Private Tutoring"
              title="Why Choose Private GRE Tutoring?"
              subtitle="Most students struggle because they follow generic preparation plans that fail to address their specific weaknesses. Private tutoring eliminates this problem."
            />
            <div className="section-gap grid gap-2 sm:grid-cols-2">
              {tutoringBenefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-border bg-card p-4 text-sm shadow-card"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
            <SectionHeader
              eyebrow="Ideal Students"
              title="Designed for Serious GRE Aspirants"
            />
            <ul className="section-gap grid gap-2 sm:grid-cols-2">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader
              eyebrow="Our Difference"
              title="What Makes Ace Your Test Different?"
            />
            <div className="section-gap grid gap-4 md:grid-cols-2">
              <article className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-surface p-5 sm:p-6">
                <div className="flex items-center gap-2 text-primary">
                  <User className="h-5 w-5" />
                  <h3 className="text-lg font-bold text-navy">Learn Directly from Tarun Kaushik</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Unlike large coaching institutes where classes are handled by multiple trainers,
                  every session is personally conducted and supervised by Tarun Kaushik. Students in{" "}
                  {cityName} receive direct guidance developed through years of mentoring successful
                  applicants admitted to leading universities worldwide.
                </p>
              </article>

              <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                <h3 className="text-lg font-bold text-navy">Customized Diagnostic Assessment</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Your preparation begins with a detailed evaluation. Based on the assessment, a
                  personalized roadmap is created to maximize score improvement efficiently.
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {diagnosticAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {area}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Methodology" title="Strategic Learning Framework" />
            <div className="section-gap grid gap-4 sm:grid-cols-3">
              {learningFramework.map((item) => (
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

          <div>
            <SectionHeader
              eyebrow="Curriculum"
              title="Comprehensive GRE Curriculum"
              subtitle="Structured training across Quant and Verbal — with extensive practice for every question type."
            />
            <div className="section-gap space-y-4">
              <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                <h3 className="text-xl font-bold text-navy">Quantitative Reasoning</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Master every GRE Quant topic through structured concept-building and advanced
                  practice.
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
                  Develop the analytical reading and reasoning skills necessary for high GRE Verbal
                  performance. Learn how to approach difficult passages with confidence while
                  improving both speed and accuracy.
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
                  Areas of Focus
                </p>
                <div className="mt-2">
                  <TopicPills items={verbalFocus} />
                </div>
              </article>
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Practice"
              title="Intensive Practice System"
              subtitle="Success on the GRE comes through deliberate practice."
            />
            <div className="section-gap grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {practiceResources.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 shadow-card text-sm"
                >
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
            <SectionHeader
              eyebrow="Tracking"
              title="Continuous Performance Tracking"
              subtitle="Every student receives detailed performance reviews throughout the program."
            />
            <ul className="section-gap grid gap-2 sm:grid-cols-2">
              {performanceTracking.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-surface p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-navy">Flexible Learning Experience</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Classes are available in online 1-on-1 mode — learn from anywhere in {cityName} with
              interactive live sessions. Choose timings that fit your academic or professional
              commitments.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {schedulingOptions.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-navy sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader
              eyebrow="Admissions"
              title="Beyond GRE Preparation"
              subtitle="Our support extends beyond the examination itself."
            />
            <div className="section-gap grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {beyondGre.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3 text-sm"
                >
                  <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Results" title="Results That Inspire Confidence" />
            <ul className="section-gap grid gap-2 sm:grid-cols-2">
              {studentAchievements.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="section-gap grid gap-4 sm:grid-cols-3">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-5 text-center shadow-card"
              >
                <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-navy to-secondary p-6 text-white shadow-elevated sm:p-8">
            <Clock className="h-8 w-8 text-accent" />
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Book Your Free GRE Consultation</h3>
            <p className="mt-3 text-sm text-white/85 leading-relaxed sm:text-base">
              Take the first step toward your dream university. Speak directly with an expert mentor
              in {cityName}, evaluate your current preparation level, and receive a personalized GRE
              success roadmap.
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
        title={`Your Dream University Starts with the Right GRE Score`}
        subtitle={`Join Ace Your Test in ${cityName} and experience a personalized GRE preparation system built for ambitious students who refuse to settle for average results.`}
      />
    </>
  );
}
