import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Laptop,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import {
  BOOK_CONSULTATION_PATH,
  MENTOR_IMAGE,
  MENTOR_NAME,
} from "@/lib/site-constants";
import { SAT_CITY_IMAGES } from "@/lib/sat-city-images";
import type { SatCoachingCity } from "@/lib/sat-coaching-cities";
import { cn } from "@/lib/utils";

const individualFeatures = [
  "Personalized coaching covering Math and Reading & Writing sections",
  "Comprehensive diagnostic assessment",
  "Customized study plan based on current performance",
  "Access to 5,000+ SAT-style practice questions",
  "Flexible weekday and weekend scheduling",
  "Regular progress monitoring and feedback",
  "Direct mentor support",
  "Session recordings for revision",
  "Advanced problem-solving strategies",
  "Topic-wise drills and mock tests",
] as const;

const groupFeatures = [
  "50+ Hours of Live Interactive Classes",
  "Instant Doubt Resolution",
  "Daily Study Plans",
  "Weekly Performance Reviews",
  "5,000+ Practice Questions",
  "Sectional and Full-Length Mock Tests",
  "Official SAT-style Study Material",
  "Expert Test Strategy Sessions",
  "Access to Class Recordings",
  "Dedicated WhatsApp Support Group",
  "Small Batch Size for Maximum Engagement",
] as const;

const programBenefits = [
  "Structured Learning Framework",
  "Personalized Mentorship",
  "Extensive Practice Resources",
  "Performance Analytics",
  "Application Guidance",
  "Continuous Improvement Tracking",
] as const;

const whyChooseRows = [
  { advantage: "Personalized Coaching", benefit: "Tailored preparation strategy" },
  { advantage: "Expert Mentorship", benefit: "Direct learning from experienced trainers" },
  { advantage: "Flexible Learning", benefit: "Online access from anywhere" },
  { advantage: "Comprehensive Resources", benefit: "Notes, practice tests, and recordings" },
  { advantage: "Performance Analytics", benefit: "Continuous improvement tracking" },
  { advantage: "Application Support", benefit: "Guidance beyond test preparation" },
] as const;

const successHighlights = [
  "Individualized Mentorship",
  "Structured Preparation Roadmaps",
  "Consistent Score Improvement",
  "Admission Guidance",
  "Scholarship Support",
] as const;

const learningSteps = [
  {
    step: "1",
    title: "Schedule Your Free Demo",
    desc: "Understand the program structure and evaluate your current preparation level.",
  },
  {
    step: "2",
    title: "Choose Your Learning Plan",
    desc: "Select between Individual Coaching or Group Coaching based on your goals.",
  },
  {
    step: "3",
    title: "Learn with Confidence",
    desc: "Master concepts through structured classes and guided practice.",
  },
  {
    step: "4",
    title: "Practice Smartly",
    desc: "Use strategic question-solving techniques and targeted drills.",
  },
  {
    step: "5",
    title: "Take Mock Tests",
    desc: "Simulate real SAT exam conditions through full-length tests.",
  },
  {
    step: "6",
    title: "Analyze & Improve",
    desc: "Identify weaknesses and optimize performance through detailed analytics.",
  },
  {
    step: "7",
    title: "Ace the SAT",
    desc: "Enter the exam with confidence and proven strategies.",
  },
] as const;

const examStructure = [
  { section: "Reading & Writing Module 1", questions: "54", duration: "64 Minutes" },
  { section: "Reading & Writing Module 2", questions: "54", duration: "64 Minutes" },
  { section: "Math Module 1", questions: "44", duration: "70 Minutes" },
  { section: "Math Module 2", questions: "44", duration: "70 Minutes" },
] as const;

const examHighlights = [
  "Fully Digital SAT Format",
  "Adaptive Testing Model",
  "Calculator Allowed",
  "Faster Score Reporting",
  "Shorter Exam Duration",
] as const;

const studentBenefits = [
  "Industry's Best Trainers",
  "Customized Study Plans",
  "50+ Hours of Live Classes",
  "5,000+ Practice Questions",
  "Full-Length Mock Tests",
  "WhatsApp Doubt Clearing Group",
  "Application Mentoring",
  "Expert Test Strategies",
] as const;

const universities = [
  "Imperial College London",
  "IE Business School",
  "INSEAD",
  "ESADE Business School",
  "London Business School",
  "Other Leading Global Institutions",
] as const;

const faqs = [
  {
    q: "What's the biggest change in the SAT?",
    a: "The SAT is now fully digital and delivered through the College Board's Bluebook platform. The test is adaptive, shorter, and more efficient than previous versions.",
  },
  {
    q: "Can I use a calculator on the SAT?",
    a: "Yes. Students are permitted to use approved calculators during the Math section.",
  },
  {
    q: "How is the Digital SAT scored?",
    a: "Scores range from 400–1600 and are based on Reading & Writing and Math performance.",
  },
  {
    q: "When will I receive my SAT score?",
    a: "Digital SAT scores are typically released much faster than previous paper-based formats.",
  },
] as const;

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

export function SatCityCoachingPage({ city }: { city: SatCoachingCity }) {
  const cityName = city.name;

  return (
    <>
      <PageHero
        eyebrow={`SAT Online Coaching in ${cityName}`}
        title="Achieve Your Target SAT Score"
        subtitle={`Ace Your Test provides comprehensive SAT preparation in ${cityName} for students aiming to secure admission to top international universities — expert-led coaching with personalized mentorship and proven strategies.`}
      >
        <Link
          to={BOOK_CONSULTATION_PATH}
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors"
        >
          Book Free Demo
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page space-y-8 sm:space-y-10">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                <Laptop className="h-3.5 w-3.5" />
                Digital SAT · {cityName}
              </div>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                Our expert-led coaching combines personalized mentorship, proven strategies, and
                extensive practice resources to help students in {cityName} maximize their SAT
                performance.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you are preparing for the SAT from {cityName} or anywhere in India, our
                online coaching platform provides the flexibility and effectiveness needed to achieve
                exceptional results.
              </p>
            </div>
            <ContentImage
              src={SAT_CITY_IMAGES.studentsStudy}
              alt={`SAT online coaching students in ${cityName}`}
              className="aspect-[16/10]"
            />
          </div>

          <div>
            <SectionHeader
              eyebrow="Best SAT Coaching"
              title="Best SAT Online Coaching – Ace Your Test"
              subtitle="Two focused programs designed for serious SAT aspirants."
            />
            <div className="section-gap grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-card ring-1 ring-primary/10">
                <ContentImage
                  src={SAT_CITY_IMAGES.individualCoaching}
                  alt="SAT individual classes"
                  contain
                  className="rounded-none border-0 border-b border-border"
                />
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Individual Classes</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Personalized SAT tutoring for students who require individual attention and
                    customized study plans.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {individualFeatures.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-navy">
                    Fee Structure
                  </p>
                  <p className="mt-1 text-2xl font-bold text-primary">₹4,999 Per Hour</p>
                  <Link
                    to="/sat/plans-pricing"
                    className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
                  >
                    View SAT plans & pricing →
                  </Link>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <ContentImage
                  src={SAT_CITY_IMAGES.groupClasses}
                  alt="SAT group classes"
                  contain
                  className="rounded-none border-0 border-b border-border"
                />
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Group Classes</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Learn alongside motivated students in highly interactive small batches.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {groupFeatures.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-navy">
                    Program Fee
                  </p>
                  <p className="mt-1 text-2xl font-bold text-primary">₹39,999</p>
                  <Link
                    to="/sat/plans-pricing"
                    className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
                  >
                    View SAT plans & pricing →
                  </Link>
                </div>
              </article>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <SectionHeader
              eyebrow="Programs"
              title="Personalized SAT Preparation Programs"
              subtitle="Every student has unique strengths and weaknesses. Our SAT preparation framework identifies your current level and builds a customized pathway toward your target score."
            />
            <div className="section-gap grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {programBenefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-card"
                >
                  <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Why Us" title="Why Choose AceYourTest?" />
            <div className="section-gap overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-navy text-navy-foreground">
                      <th className="px-4 py-3 font-semibold">Advantage</th>
                      <th className="px-4 py-3 font-semibold">Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {whyChooseRows.map((row, i) => (
                      <tr
                        key={row.advantage}
                        className={i % 2 === 0 ? "bg-card" : "bg-surface/80"}
                      >
                        <td className="px-4 py-3 font-semibold text-navy">{row.advantage}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-[1fr_minmax(240px,300px)]">
            <div>
              <SectionHeader
                eyebrow="Trusted"
                title="Trusted By Students & Parents"
                subtitle="Our students consistently achieve strong SAT scores and secure admissions to globally recognized institutions."
              />
              <p className="text-sm font-bold text-navy">Student Success Highlights</p>
              <ul className="mt-3 space-y-2">
                {successHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ContentImage
              src={MENTOR_IMAGE}
              alt={`${MENTOR_NAME} — SAT mentor`}
              className="aspect-[4/5] max-h-[360px] lg:max-h-none"
            />
          </div>

          <div>
            <SectionHeader
              eyebrow="Process"
              title="Our SAT Learning Process"
              subtitle="A proven seven-step pathway from demo to test day."
            />
            <div className="section-gap grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {learningSteps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-xl border border-border bg-card p-4 shadow-card"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Exam Format" title="SAT Exam Structure" />
            <div className="section-gap overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-primary text-primary-foreground">
                      <th className="px-4 py-3 font-semibold">Section</th>
                      <th className="px-4 py-3 font-semibold">Questions</th>
                      <th className="px-4 py-3 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examStructure.map((row, i) => (
                      <tr
                        key={row.section}
                        className={i % 2 === 0 ? "bg-card" : "bg-surface/80"}
                      >
                        <td className="px-4 py-3 font-medium text-navy">{row.section}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.questions}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="section-gap mt-4 flex flex-wrap gap-2">
              {examHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-navy sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Benefits" title="Benefits of Choosing AceYourTest" />
            <div className="section-gap grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {studentBenefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm shadow-card"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-surface p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-navy">Our Students Have Reached</h3>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Global Universities</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {universities.map((uni) => (
                <li
                  key={uni}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-navy"
                >
                  <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                  {uni}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
            <div className="section-gap space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-border bg-card shadow-card"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5">
                    <span className="font-semibold text-navy">{f.q}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="border-t border-border px-5 pb-5 pt-3 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-navy to-secondary p-6 text-white shadow-elevated sm:p-8">
            <h3 className="text-2xl font-bold sm:text-3xl">Start Your SAT Journey in {cityName}</h3>
            <p className="mt-3 text-sm text-white/85 leading-relaxed sm:text-base">
              Book a free demo and receive a personalized Digital SAT preparation roadmap.
            </p>
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
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={`SAT Online Coaching in ${cityName}`}
        subtitle="Join Ace Your Test and achieve the Digital SAT score that opens doors to top global universities."
      />
    </>
  );
}
