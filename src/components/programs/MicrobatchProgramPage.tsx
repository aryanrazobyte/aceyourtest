import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Users,
  Target,
  BarChart3,
  BookOpen,
  Layers,
  Sparkles,
  MessageCircle,
  Zap,
  Trophy,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { MicrobatchPromoBanner } from "@/components/site/MicrobatchPromoBanner";
import { BOOK_CONSULTATION_PATH } from "@/lib/site-constants";
import type { MicrobatchProgramContent } from "@/lib/microbatch-program-content";

const blueprintIcons = [Users, Target, Sparkles] as const;

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

export function MicrobatchProgramPage({ content }: { content: MicrobatchProgramContent }) {
  const { exam } = content;
  const labels = {
    promoBadge: content.labels?.promoBadge ?? "Micro Batch",
    batchBadge: content.labels?.batchBadge ?? "Max 4 per batch",
    whyEyebrow: content.labels?.whyEyebrow ?? `Why ${exam} Micro Batches`,
    advantageTitle: content.labels?.advantageTitle ?? "The Micro Batch Advantage",
    sessionTitle: content.labels?.sessionTitle ?? "Structure of Every Micro Batch Session",
    communityTitle: content.labels?.communityTitle ?? "Private Study Community",
    whatsIncludedTitle: content.labels?.whatsIncludedTitle ?? "Intensive Preparation Program",
    whatsIncludedSubtitle:
      content.labels?.whatsIncludedSubtitle ??
      "A comprehensive program covering every aspect of the exam with a personalized approach.",
    contactBody:
      content.labels?.contactBody ??
      `Join an exclusive ${exam} Micro Batch and experience personalized preparation with expert mentorship.`,
    sidebarNote: content.labels?.sidebarNote ?? "Free 30-min strategy session · Max 4 students",
    practiceTitle: content.labels?.practiceTitle ?? "Intensive Practice Framework",
    practiceSubtitle:
      content.labels?.practiceSubtitle ??
      "Consistent practice transforms preparation into performance.",
    learningTitle: content.labels?.learningTitle ?? "High-Impact Learning Experience",
    learningSubtitle:
      content.labels?.learningSubtitle ??
      `Master every section of the ${exam} through intensive mentor-led instruction.`,
  };

  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
      >
        <Link
          to={BOOK_CONSULTATION_PATH}
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors"
        >
          {content.hero.cta}
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page">
          <MicrobatchPromoBanner
            examLabel={exam}
            posterImage={content.posterImage}
            posterAlt={content.posterAlt}
            visualImage={content.bannerVisual}
            visualAlt={content.bannerVisualAlt}
            badgeLabel={labels.promoBadge}
            batchLabel={labels.batchBadge}
          />
        </div>

        <div className="container-page mt-8 grid gap-6 sm:mt-10 lg:grid-cols-[1.4fr_1fr] lg:mt-12">
          <div className="space-y-8 sm:space-y-10">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="flex items-center justify-center border-b border-border bg-gradient-to-br from-white via-white to-surface p-6 sm:p-8">
                <img
                  src={content.programImage}
                  alt={content.programImageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-auto max-h-[260px] w-full max-w-md object-contain"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  {content.intro[0]}
                </p>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {content.intro[1]}
                </p>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow={labels.whyEyebrow}
                title={content.whyChoose.title}
                subtitle={content.whyChoose.subtitle}
              />
              <div className="section-gap grid gap-2 sm:grid-cols-2">
                {content.whyChoose.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm shadow-card"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-card">
              <SectionHeader
                eyebrow="What's Included"
                title={labels.whatsIncludedTitle}
                subtitle={labels.whatsIncludedSubtitle}
              />
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {content.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeader eyebrow="The Advantage" title={labels.advantageTitle} />
              <div className="section-gap grid gap-4">
                {content.blueprintCards.map((card, index) => {
                  const Icon = blueprintIcons[index] ?? Users;
                  return (
                    <article
                      key={card.title}
                      className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6"
                    >
                      <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-navy">{card.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {card.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="Every Session" title={labels.sessionTitle} />
              <div className="section-gap grid gap-3 sm:grid-cols-2">
                {content.sessionStructure.map((s) => (
                  <div
                    key={s.title}
                    className="relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-card"
                  >
                    <span className="absolute right-3 top-3 text-3xl font-bold text-primary/15">
                      {s.step}
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {s.step}
                    </span>
                    <h3 className="mt-3 font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-navy">
                      Builds
                    </p>
                    <p className="mt-1 text-sm text-foreground">{s.outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
              <SectionHeader
                eyebrow="Learning Experience"
                title={labels.learningTitle}
                subtitle={labels.learningSubtitle}
              />
              <div className="section-gap grid gap-2 sm:grid-cols-2">
                {content.learningHighlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm"
                  >
                    <Zap className="h-4 w-4 shrink-0 text-primary" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center gap-2 text-primary">
                  <BarChart3 className="h-5 w-5" />
                  <h3 className="font-bold text-navy">Performance Tracking System</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Track measurable improvement throughout your preparation.
                </p>
                <ul className="mt-4 space-y-2">
                  {content.performanceTracking.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center gap-2 text-primary">
                  <MessageCircle className="h-5 w-5" />
                  <h3 className="font-bold text-navy">{labels.communityTitle}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {content.communityBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Curriculum"
                title={`Comprehensive ${exam} Curriculum`}
              />
              <div className="section-gap space-y-4">
                <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Quantitative Reasoning</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Develop mastery across every quantitative topic tested on the {exam}.
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">Topics</p>
                  <div className="mt-2">
                    <TopicPills items={content.curriculum.quant.topics} />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
                    {content.curriculum.quant.skills ? "Skills Developed" : "Question Types"}
                  </p>
                  <div className="mt-2">
                    <TopicPills
                      items={
                        content.curriculum.quant.skills ??
                        content.curriculum.quant.questionTypes ??
                        []
                      }
                    />
                  </div>
                </article>
                <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                  <h3 className="text-xl font-bold text-navy">Verbal Reasoning</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Build advanced reading, vocabulary, and reasoning skills for top {exam} scores.
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
                    Focus Areas
                  </p>
                  <div className="mt-2">
                    <TopicPills items={content.curriculum.verbal.focusAreas} />
                  </div>
                  {content.curriculum.verbal.skills && (
                    <>
                      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
                        Skills Developed
                      </p>
                      <div className="mt-2">
                        <TopicPills items={content.curriculum.verbal.skills} />
                      </div>
                    </>
                  )}
                </article>
                <article className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
                  <h3 className="text-xl font-bold text-navy">{content.curriculum.data.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Master real {exam}-style datasets through focused practice.
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">Topics</p>
                  <div className="mt-2">
                    <TopicPills items={content.curriculum.data.topics} />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-navy">
                    Skills Developed
                  </p>
                  <div className="mt-2">
                    <TopicPills items={content.curriculum.data.skills} />
                  </div>
                </article>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Practice"
                title={labels.practiceTitle}
                subtitle={labels.practiceSubtitle}
              />
              <div className="section-gap grid gap-4 sm:grid-cols-2">
                {content.practiceFramework.map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 rounded-xl border border-border bg-card p-4 text-sm shadow-card"
                  >
                    <Layers className="h-4 w-4 shrink-0 text-primary" />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-surface p-5 sm:p-6">
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap className="h-5 w-5" />
                <h3 className="font-bold text-navy">Ideal For</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {content.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-accent/30 bg-accent/10 p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-navy">Free Strategy Session</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Book a free 30-minute 1-on-1 consultation with Tarun Kaushik — 100% free, personalized
                to your target score and timeline.
              </p>
            </div>

            <div>
              <SectionHeader eyebrow="Deliverables" title="Program Deliverables" />
              <div className="section-gap overflow-hidden rounded-xl border border-border bg-card shadow-card">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[520px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-border bg-navy text-navy-foreground">
                        <th className="px-4 py-3 font-semibold">Program Component</th>
                        <th className="px-4 py-3 font-semibold">Deliverables</th>
                        <th className="px-4 py-3 font-semibold">Student Benefits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.deliverables.map((row, i) => (
                        <tr
                          key={row.component}
                          className={i % 2 === 0 ? "bg-card" : "bg-surface/80"}
                        >
                          <td className="px-4 py-3 font-semibold text-navy">{row.component}</td>
                          <td className="px-4 py-3 text-foreground">{row.deliverables}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.benefits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-navy to-secondary p-6 text-white shadow-elevated sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                Program Investment
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Full Course Fee</h3>
              <p className="mt-2 text-3xl font-bold text-accent sm:text-4xl">
                {content.pricing.amount}
              </p>
              <p className="mt-1 text-sm text-white/70">{content.pricing.note}</p>
              <p className="mt-4 text-sm font-semibold text-white/90">Includes:</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {content.pricing.includes.map((item) => (
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
                {content.pricing.cta}
              </Link>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <SectionHeader eyebrow="Contact" title={`Start Your ${exam} Success Journey`} />
              <p className="mt-2 text-sm text-muted-foreground">{labels.contactBody}</p>
              <ul className="section-gap mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3 font-semibold text-navy">Tarun Kaushik</li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href="tel:+918800338783" className="hover:text-navy">
                    +91 88003 38783
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:tarunkaushik@aceyourtest.in" className="break-all hover:text-navy">
                    tarunkaushik@aceyourtest.in
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Alaknanda, New Delhi, India
                </li>
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-20 h-fit space-y-4">
            <EnquiryForm title={content.enquiryTitle} />
            <div className="rounded-xl border border-border bg-surface p-4 space-y-3 text-sm">
              {content.sidebarHighlights.map((item, index) => (
                <div
                  key={item.label}
                  className={
                    index < content.sidebarHighlights.length - 1
                      ? "flex justify-between border-b border-border pb-2"
                      : "flex justify-between"
                  }
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span
                    className={
                      item.label === "Fee"
                        ? "font-bold text-primary"
                        : "font-semibold text-navy"
                    }
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center text-sm">
              <p className="font-semibold text-navy">100% Personalized Mentorship</p>
              <p className="mt-1 text-muted-foreground">{labels.sidebarNote}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                <BookOpen className="h-4 w-4 text-primary" />
                Compare all programs
              </div>
              <Link
                to={content.comparePath}
                className="mt-2 block text-sm text-primary hover:underline"
              >
                {exam} Plans &amp; Pricing →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand title={content.ctaBand.title} subtitle={content.ctaBand.subtitle} />
    </>
  );
}
