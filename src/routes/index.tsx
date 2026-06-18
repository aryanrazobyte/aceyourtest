import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap, Users, Target, Trophy, BookOpen, MessageSquare, BarChart3, ClipboardList,
  CheckCircle2, Star, ArrowRight, Award, Globe2,
} from "lucide-react";
import heroImg from "../assets/hero-students.jpg";
import mentorImg from "../assets/mentor-tarun.png";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { StatsBar } from "../components/site/StatsBar";

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
    bullets: ["Individual Coaching", "Group Classes", "Self-Study Plans", "Full-length Mock Tests", "Quant + Verbal Support"],
  },
  {
    code: "GRE",
    to: "/gre",
    title: "GRE Program",
    desc: "60+ live hours, structured curriculum and intensive practice for top GRE scores.",
    bullets: ["60+ Live Hours", "Structured Curriculum", "Practice Questions", "Full Mock Exams"],
    featured: true,
  },
  {
    code: "SAT",
    to: "/sat",
    title: "SAT Program",
    desc: "Foundation to mastery for the Digital SAT — built for US university admissions.",
    bullets: ["Foundation Building", "Concept Mastery", "University Preparation"],
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
        <div className="container-page relative grid gap-12 lg:grid-cols-[1.1fr_1fr] py-16 lg:py-24 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-white/90">
              <Award className="h-3.5 w-3.5 text-primary" /> 15+ Years · 10,000+ Mentored
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              India's Trusted <span className="text-primary">GMAT, GRE & SAT</span> Coaching Platform
            </h1>
            <p className="mt-5 text-lg text-white/75 max-w-xl leading-relaxed">
              Personalized mentoring, expert guidance and proven study systems — built to secure top scores and global university admits.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors shadow-sm">
                Book Free Consultation
              </Link>
              <a href="#programs" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                Explore Programs
              </a>
              <a href="https://wa.me/918800338783" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-success px-5 py-3 text-sm font-semibold text-success-foreground hover:opacity-90 transition-opacity">
                Talk To Mentor
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
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
                <p className="font-display font-bold text-navy">765 / 805</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Why Choose */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Why AceYourTest" title="A premium prep experience, end-to-end" subtitle="Everything you need to score high and land at your dream university — under one roof." center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet your mentor */}
      <section className="section-y bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-4 rounded-3xl bg-primary/15" aria-hidden />
            <img src={mentorImg} alt="Tarun Kaushik, Founder and Lead Mentor at AceYourTest" loading="lazy" width={1024} height={1280} className="relative rounded-2xl shadow-elevated w-full h-auto object-cover" />
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
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors">
                Schedule Free Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {programs.map((p) => (
              <div key={p.code} className={`relative rounded-2xl border bg-card p-7 shadow-card flex flex-col ${p.featured ? "border-primary ring-1 ring-primary/30" : "border-border"}`}>
                {p.featured && <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Most Popular</span>}
                <span className="inline-flex items-center justify-center rounded-md bg-navy text-navy-foreground px-2.5 py-1 text-xs font-bold tracking-wider w-fit">{p.code}</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-navy">{p.title}</h3>
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

      {/* Testimonials */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader eyebrow="Student Success" title="Real students. Real scores. Real admits." subtitle="A few stories from the AceYourTest community." center />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-foreground leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-navy text-navy-foreground font-display font-bold">
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
          <div className="mt-10 text-center">
            <Link to="/success-stories" className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary">
              View all success stories <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Our Students Are At" title="Top global universities" center />
          <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-4">
            {universities.map((u) => (
              <div key={u} className="grid place-items-center rounded-xl border border-border bg-card px-3 py-5 font-display font-semibold text-navy text-sm sm:text-base hover:bg-muted transition-colors">
                {u}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
