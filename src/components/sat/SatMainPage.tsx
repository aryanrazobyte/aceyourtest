import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Target,
  BookOpen,
  BarChart3,
  Rocket,
  Flag,
  GraduationCap,
  Briefcase,
  Globe2,
  Trophy,
  Sparkles,
  Laptop,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { BookConsultationButton } from "@/components/site/BookConsultationButton";
import { satMainContent as c } from "@/lib/sat-main-content";
import { SAT_MAIN_IMAGES } from "@/lib/sat-main-images";
import { cn } from "@/lib/utils";

const strategyIcons = [BookOpen, Target, BarChart3, Flag] as const;

const whoCandidates = [
  { title: "US University Aspirants", icon: Globe2 },
  { title: "High School Students", icon: GraduationCap },
  { title: "Scholarship Seekers", icon: Trophy },
  { title: "International Applicants", icon: Briefcase },
] as const;

function Pills({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-sm font-semibold text-navy"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Illustration({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn("mx-auto block h-auto w-full max-w-[420px] object-contain", className)}
    />
  );
}

function SplitSection({
  image,
  imageAlt,
  children,
  reverse = false,
  className,
}: {
  image: string;
  imageAlt: string;
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid items-start gap-4 lg:grid-cols-2 lg:gap-6",
        reverse && "lg:[&>*:first-child]:order-2",
        className,
      )}
    >
      <Illustration src={image} alt={imageAlt} />
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function PageBlock({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("space-y-5", className)}>{children}</div>;
}

export function SatMainPage() {
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} subtitle={c.hero.subtitle}>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <BookConsultationButton className="rounded-md px-5 py-2.5 text-sm" />
          <Link
            to="/sat/plans-pricing"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Plans & Pricing
          </Link>
        </div>
      </PageHero>

      <section className="section-y !py-8 sm:!py-10">
        <div className="container-page space-y-7 sm:space-y-9">
          <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary to-secondary p-5 text-white shadow-elevated sm:p-6">
            <h2 className="text-xl font-bold text-white sm:text-2xl">{c.introBanner.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">{c.introBanner.body}</p>
          </div>

          <PageBlock>
            <SectionHeader eyebrow="Exam Overview" title={c.aboutSat.title} center />
            <SplitSection image={SAT_MAIN_IMAGES.aboutIllustration} imageAlt="Digital SAT preparation illustration">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{c.aboutSat.intro}</p>
              <div className="mt-4">
                <Pills items={c.aboutSat.skills} />
              </div>
              <p className="mt-4 text-sm font-medium text-navy sm:text-base">{c.aboutSat.footer}</p>
            </SplitSection>
          </PageBlock>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-card sm:p-6">
            <SectionHeader
              eyebrow="Test Format"
              title={c.digitalSatOverview.title}
              subtitle={c.digitalSatOverview.intro}
              center
            />
            <div className="mt-4">
              <p className="text-center text-sm font-bold uppercase tracking-wider text-primary">Key Features</p>
              <div className="mt-3">
                <Pills items={c.digitalSatOverview.improvements} />
              </div>
            </div>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
              {c.examStructure.summary.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-border bg-surface px-3 py-2.5 text-center text-sm"
                >
                  <span className="font-semibold text-navy">{item.label}:</span>{" "}
                  <span className="text-muted-foreground">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead>
                  <tr className="bg-navy text-navy-foreground">
                    <th className="px-4 py-3 font-semibold">Component</th>
                    <th className="px-4 py-3 font-semibold">Duration</th>
                    <th className="px-4 py-3 font-semibold">Questions</th>
                  </tr>
                </thead>
                <tbody>
                  {c.examStructure.rows.map((row, i) => (
                    <tr key={row.section} className={i % 2 === 0 ? "bg-card" : "bg-surface/80"}>
                      <td className="px-4 py-3 font-medium text-navy">{row.section}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.duration}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.questions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-5 space-y-2">
              {c.digitalSatOverview.additionalFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <PageBlock>
            <SectionHeader eyebrow="Deep Dive" title="Section-wise Breakdown" center />
            <div className="space-y-3">
              {c.sectionDetails.map((section, index) => (
                <details
                  key={section.title}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-card"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between bg-navy px-4 py-3.5 text-navy-foreground sm:px-5">
                    <span className="font-semibold">{section.title}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <div className="space-y-3 p-4 sm:p-5">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-navy">Focus:</strong> {section.focus}
                    </p>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-navy">Key Topics</p>
                      <ul className="mt-2 space-y-1.5">
                        {section.topics.map((t) => (
                          <li key={t} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-navy">Skills Tested</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">{section.skills.join(" · ")}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
            <div className="grid gap-3 rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-surface p-4 sm:grid-cols-3 sm:p-5">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Total Score Range</p>
                <p className="mt-1 text-lg font-bold text-navy">{c.scoring.total}</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Section Scores</p>
                <p className="mt-1 text-sm font-bold leading-snug text-navy sm:text-base">{c.scoring.section}</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Target Score</p>
                <p className="mt-1 text-lg font-bold text-navy">1500+</p>
              </div>
            </div>
            <p className="text-center text-sm leading-relaxed text-muted-foreground">{c.scoring.adaptive}</p>
          </PageBlock>

          <PageBlock>
            <SectionHeader
              eyebrow="Global Reach"
              title="Top Universities Accepting SAT"
              subtitle="Score ranges our students target at leading institutions worldwide."
              center
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {c.universities.map((region) => (
                <article
                  key={region.country}
                  className="rounded-xl border border-border bg-card p-4 shadow-card sm:p-5"
                >
                  <h3 className="text-lg font-bold text-navy">{region.country}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {region.schools.map((school) => (
                      <li key={school} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                        {school}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </PageBlock>

          <SplitSection image={SAT_MAIN_IMAGES.aboutIllustration} imageAlt="Why the Digital SAT matters">
            <SectionHeader eyebrow="Why It Matters" title="Why SAT Matters" />
            <ul className="mt-3 space-y-2">
              {c.keyAdvantages.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </SplitSection>

          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] via-card to-surface p-5 sm:p-6">
            <SectionHeader
              eyebrow="Target Score"
              title={c.score1500.title}
              subtitle={c.score1500.subtitle}
              center
            />
            <ul className="mx-auto mt-4 grid max-w-3xl gap-2 sm:grid-cols-2">
              {c.score1500.items.map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <SectionHeader
              eyebrow="AceYourTest"
              title="Your Preparation Partner"
              subtitle="What you get with structured Digital SAT coaching"
              center
            />
            <SplitSection
              reverse
              className="mt-2"
              image={SAT_MAIN_IMAGES.partnerIllustration}
              imageAlt="AceYourTest as your SAT preparation partner"
            >
              <ul className="space-y-2">
                {c.whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/sat/plans-pricing"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary"
              >
                Explore all SAT programs <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </SplitSection>
          </div>

          <PageBlock>
            <SectionHeader eyebrow="Roadmap" title="Preparation Strategy" center />
            <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
              <Illustration
                src={SAT_MAIN_IMAGES.strategyIllustration}
                alt="Structured Digital SAT preparation strategy"
              />
              <div className="grid gap-3">
                {c.preparationStrategy.map((step, index) => {
                  const Icon = strategyIcons[index] ?? BookOpen;
                  return (
                    <article
                      key={step.title}
                      className="flex gap-3 rounded-xl border border-border bg-card p-4 shadow-card"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </PageBlock>

          <div className="rounded-xl border border-border bg-card p-5 text-center shadow-card sm:p-6">
            <SectionHeader
              eyebrow="Programs"
              title={c.programsIntro.title}
              subtitle={c.programsIntro.subtitle}
              center
            />
            <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {c.programsIntro.body}
            </p>
          </div>

          <PageBlock>
            <SectionHeader eyebrow="Ideal Candidates" title="Who Should Take the SAT?" center />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {whoCandidates.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-card"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-snug text-navy">{title}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              Start your SAT journey today — prepare smarter, score 1500+, and get into your dream US university.
            </p>
          </PageBlock>

          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] via-card to-surface p-5 sm:p-6">
            <SectionHeader
              eyebrow="Proven Results"
              title="Why Choose AceYourTest for SAT Coaching?"
              subtitle="Join thousands of students who achieved top scores with our proven system."
              center
            />
            <div className="mx-auto mt-5 grid max-w-2xl grid-cols-2 gap-5 sm:gap-8">
              {c.stats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border-[3px] border-primary bg-card shadow-card sm:h-24 sm:w-24">
                    <span className="text-lg font-bold text-navy sm:text-xl">{stat.value}</span>
                  </div>
                  <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <SplitSection
            reverse
            image={SAT_MAIN_IMAGES.trustedIllustration}
            imageAlt="Why thousands of SAT aspirants trust AceYourTest"
          >
            <SectionHeader eyebrow="Trust" title="Why 10,000+ Aspirants Trusted Us" />
            <ul className="mt-3 space-y-3">
              {c.trustedFeatures.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-semibold text-navy">{f.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </SplitSection>

          <div className="pt-1">
            <SectionHeader
              eyebrow="Our Promise"
              title="Everything You Need to Reach Your Target Score"
              subtitle="Structured training, live accountability, and expert reviews."
              center
            />
            <div className="mt-4 w-full">
              <img
                src={SAT_MAIN_IMAGES.featuresHub}
                alt="AceYourTest SAT coaching features — target score assurance, live classes, customized learning paths"
                loading="lazy"
                decoding="async"
                className="mx-auto block h-auto w-full max-w-6xl"
              />
            </div>
          </div>

          <SplitSection image={SAT_MAIN_IMAGES.journeyIllustration} imageAlt="SAT success journey">
            <SectionHeader eyebrow="Your Path" title="Let's Get Started" />
            <ol className="mt-3 space-y-2.5">
              {c.journeySteps.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-sm text-foreground sm:text-base">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </SplitSection>

          <PageBlock>
            <SectionHeader eyebrow="Success Stories" title="SAT Success Stories: Students Who Scored 1500+" center />
            <div className="grid gap-4 sm:grid-cols-2">
              {c.successStories.map((story) => (
                <blockquote
                  key={story.name}
                  className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{story.quote}&rdquo;</p>
                  <footer className="mt-4 border-t border-border pt-4">
                    <p className="font-semibold text-navy">{story.name}</p>
                    <p className="text-xs text-muted-foreground">{story.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </PageBlock>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-7">
            <div>
              <SectionHeader eyebrow="Differentiation" title="Stand Out from the Crowd" />
              <ul className="mt-3 space-y-2">
                {c.standOut.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-success/[0.07] px-3 py-2.5"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-hidden />
                    <span className="text-sm font-medium leading-snug text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader eyebrow="Edge" title="Gain a Competitive Advantage" />
              <ul className="mt-3 space-y-2">
                {c.competitiveEdge.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-primary/[0.07] px-3 py-2.5"
                  >
                    <Target className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span className="text-sm font-medium leading-snug text-navy">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center gap-2.5 rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 px-3 py-2.5 text-sm font-medium text-navy">
                <Rocket className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Free SAT study resources, strategy guides & tips with every program
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <div className="grid gap-5 lg:grid-cols-2 lg:items-center">
              <Illustration src={SAT_MAIN_IMAGES.aboutIllustration} alt="Why SAT for students" />
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                  <Laptop className="h-3.5 w-3.5" aria-hidden />
                  Digital SAT
                </div>
                <h3 className="text-xl font-bold text-navy sm:text-2xl">{c.whyForStudents.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {c.whyForStudents.body}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:gap-6">
            <div>
              <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
              <div className="mt-4 space-y-2.5">
                {c.faqs.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-border bg-card p-4 shadow-card sm:p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                      <span className="font-semibold text-navy">{f.q}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
                    </summary>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <aside className="lg:sticky lg:top-24 h-fit">
              <EnquiryForm title="Get your SAT study plan" />
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to plan your SAT journey?"
        subtitle="Book a free strategy call with Tarun Kaushik and receive a personalized Digital SAT preparation roadmap."
      />
    </>
  );
}
