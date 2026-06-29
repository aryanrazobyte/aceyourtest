import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap, Users, Target, Trophy, BookOpen, MessageSquare, BarChart3, ClipboardList,
  CheckCircle2, Star, ArrowRight, Award, Globe2,
} from "lucide-react";
import heroImg from "../assets/hero-students.jpg";
import mentorHomeImg from "../assets/mentor-home.png";
import { SectionHeader } from "../components/site/SectionHeader";
import UniversitiesSection from "../components/site/UniversitiesSection";
import BlogPreviewSection from "../components/site/BlogPreviewSection";
import VocabSeminarSection from "../components/site/VocabSeminarSection";
import BSchoolSection from "../components/site/BSchoolSection";
import { StatsBar } from "../components/site/StatsBar";
import { CtaBand } from "../components/site/CtaBand";
import { BookConsultationButton } from "../components/site/BookConsultationButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AceYourTest — India's Trusted GMAT, GRE & SAT Coaching" },
      { name: "description", content: "Personalized mentoring, expert guidance, proven study systems, and admission support to secure top scores and global university admits." },
      { property: "og:title", content: "AceYourTest — India's Trusted GMAT, GRE & SAT Coaching" },
      { property: "og:description", content: "Personalized mentoring and admission support for GMAT, GRE & SAT — 10,000+ students trained." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const features = [
  { icon: Target, title: "Personalized Learning Plans", desc: "Tailored study paths built around your baseline, target score and timeline." },
  { icon: Users, title: "Live Interactive Sessions", desc: "Small-batch live classes with structured doubt resolution and active practice." },
  { icon: BookOpen, title: "5,000+ Practice Questions", desc: "Curated official-style problem sets with detailed solutions and analytics." },
  { icon: GraduationCap, title: "Expert Mentorship", desc: "1-on-1 mentoring with a coach who has guided 10,000+ test-takers." },
  { icon: Globe2, title: "Study Abroad Guidance", desc: "End-to-end support — university shortlisting, SOP, LOR, interview prep." },
  { icon: MessageSquare, title: "Dedicated Doubt Support", desc: "Same-day responses on WhatsApp and email between sessions." },
  { icon: ClipboardList, title: "Small Batch Sizes", desc: "Capped enrollments so every student gets personal attention." },
  { icon: BarChart3, title: "Performance Analytics", desc: "Track accuracy, timing and topic mastery after every mock." },
];

const programs = [
  {
    code: "GMAT",
    to: "/gmat",
    title: "GMAT Program",
    desc: "Crack GMAT Focus Edition with a structured Quant + Verbal mastery plan.",
    bullets: ["Individual Coaching","Micro-Batches", "Group Classes",  "Self-Study Plans", "Sectional Mock Tests"],
  },
  {
    code: "GRE",
    to: "/gre",
    title: "GRE Program",
    desc: "Master the GRE with Structured Learning and Focused Practice.",
    bullets: ["Individual Coaching","Micro-Batches", "Group Classes", "Sectional Mock Tests"],
    featured: true,
  },
  {
    code: "SAT",
    to: "/sat",
    title: "SAT Program",
    desc: "From Foundation to 1500+ on the Digital SAT.",
    bullets: ["Individual Coaching","Micro-Batches", "Group Classes"],
  },
];

const testimonials = [
  { name: "Aarav Mehta", score: "GMAT 745", uni: "INSEAD", test: "GMAT", quote: "Tarun sir's quant frameworks turned my weakest section into my strongest. The mocks felt easier than the real test." },
  { name: "Riya Sharma", score: "GRE 332", uni: "Cornell University", test: "GRE", quote: "Personalized study plan, weekly check-ins and brilliant verbal strategies. Couldn't have asked for better mentorship." },
  { name: "Kabir Anand", score: "SAT 1530", uni: "NYU", test: "SAT", quote: "Small batches, focused attention and razor-sharp practice. AceYourTest made the SAT feel manageable." },
  { name: "Ishita Verma", score: "GMAT 730", uni: "MIT Sloan", test: "GMAT", quote: "The admissions guidance was as good as the coaching. From shortlisting to interview prep, they had my back." },
];

const universities = ["MIT", "Stanford", "Oxford", "Cambridge", "INSEAD", "Cornell", "Purdue", "NYU", "NUS"];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-navy-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" aria-hidden />
        <div className="container-page relative grid gap-5 lg:grid-cols-[1.1fr_1fr] py-6 sm:py-8 lg:py-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/90">
              <Award className="h-3.5 w-3.5 text-primary" /> 15+ Years · 10,000+ Mentored
            </span>
            <h1 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              India's Trusted <span className="text-primary">GMAT, GRE & SAT</span> Coaching Platform
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/75 max-w-xl leading-relaxed">
              Personalized mentoring, expert guidance and proven study systems — built to secure top scores and global university admits.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                <BookConsultationButton className="rounded-md px-4 py-2.5 text-sm shadow-sm" />
              <a href="#programs" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                Explore Programs
              </a>
              <a href="https://wa.me/918800338783" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-success px-4 py-2.5 text-sm font-semibold text-success-foreground hover:opacity-90 transition-opacity">
                Talk To Mentor
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-white/70">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" /> Live Online & Classroom</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" /> Small Batches</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" /> Admission Support</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/20 rounded-3xl blur-2xl" aria-hidden />
            <img
              src={heroImg}
              alt="Students preparing for GMAT, GRE and SAT exams with AceYourTest"
              width={1536}
              height={1024}
              className="relative rounded-2xl shadow-elevated w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-xl bg-white text-foreground px-4 py-3 shadow-elevated">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-success/10 text-success"><Trophy className="h-5 w-5" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Top GMAT score</p>
                <p className="font-bold text-navy">735 / 805</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Vocabulary Seminar (inserted) */}
      <VocabSeminarSection />

      {/* Why Choose */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Why AceYourTest" title="A premium prep experience, end-to-end" subtitle="Everything you need to score high and land at your dream university — under one roof." center />
          <div className="section-gap grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-card hover:shadow-elevated transition-all">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-base sm:text-lg font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet your mentor */}
      <section className="section-y bg-surface">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_1.2fr] items-center">
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-4 rounded-3xl bg-primary/15" aria-hidden />
            <img src={mentorHomeImg} alt="Tarun Kaushik, Founder and Lead Mentor at AceYourTest" loading="lazy" width={800} height={800} className="relative rounded-2xl shadow-elevated w-full h-auto object-cover" />
          </div>
          <div>
            <SectionHeader eyebrow="Meet Your Mentor" title="Tarun Kaushik — Quant Expert & Lead Mentor" subtitle="A coach trusted by 10,000+ students across GMAT, GRE and SAT. Tarun has worked with leading test-prep organisations and built one of India's most respected quant programs." />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["15+ Years Experience", "10,000+ Students Mentored", "Worked with reputed test-prep brands", "Quant Expert: GMAT, GRE & SAT"].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              <BookConsultationButton className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm">
                Schedule Free Session <ArrowRight className="h-4 w-4" />
              </BookConsultationButton>
              <Link to="/about" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-navy hover:bg-muted transition-colors">
                Read Mentor Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Programs" title="Choose the program built for your goal" subtitle="Three flagship programs — built around proven curriculum, mentorship and outcomes." center />
          <div className="section-gap grid gap-4 sm:gap-5 lg:grid-cols-3">
            {programs.map((p) => (
              <div key={p.code} className={`relative rounded-xl border bg-card p-5 sm:p-6 shadow-card flex flex-col ${p.featured ? "border-primary ring-1 ring-primary/30" : "border-border"}`}>
                {p.featured && <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Most Popular</span>}
                <span className="inline-flex items-center justify-center rounded-md bg-navy text-navy-foreground px-2.5 py-1 text-xs font-bold tracking-wider w-fit">{p.code}</span>
                <h3 className="mt-3 text-xl sm:text-2xl font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-5 space-y-2.5 text-sm flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" /> {b}</li>
                  ))}
                </ul>
                <Link to={p.to} className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors">
                  Explore {p.code} Program <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B-School marquee section */}
      <BSchoolSection />

      {/* Testimonials */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader eyebrow="Student Success" title="Real students. Real scores. Real admits." subtitle="A few stories from the AceYourTest community." center />
          <div className="section-gap grid gap-4 sm:gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-foreground leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-navy text-navy-foreground font-bold">
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-navy">{t.name}</p>
                    <p className="text-muted-foreground">{t.score} · {t.uni}</p>
                  </div>
                  <span className="ml-auto rounded-md bg-primary/10 text-primary px-2.5 py-1 text-xs font-semibold">{t.test}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link to="/success-stories" className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary">
              View all success stories <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Our Students Are At" title="TOP GLOBAL UNIVERSITIES" center />
          <UniversitiesSection />
          <BlogPreviewSection embedded />
        </div>
      </section>

      <CtaBand compact bookLabel="Book Free" whatsappLabel="WhatsApp" />
    </>
  );
}
// test deploy
