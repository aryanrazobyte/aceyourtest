import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, FileText, ScrollText, ClipboardCheck, Mic, Wallet } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { CtaBand } from "../components/site/CtaBand";
import { EnquiryForm } from "../components/site/EnquiryForm";

export const Route = createFileRoute("/study-abroad")({
  head: () => ({
    meta: [
      { title: "Study Abroad Mentoring — Admissions Support | AceYourTest" },
      { name: "description", content: "End-to-end study abroad guidance — university shortlisting, SOP, LOR, applications, interviews and scholarships." },
      { property: "og:title", content: "Study Abroad Mentoring — AceYourTest" },
      { property: "og:description", content: "Premium admissions support — from university shortlist to scholarship guidance." },
      { property: "og:url", content: "/study-abroad" },
    ],
    links: [{ rel: "canonical", href: "/study-abroad" }],
  }),
  component: StudyAbroadPage,
});

const services = [
  { icon: GraduationCap, title: "University Selection", desc: "Data-driven shortlist of safe, target and stretch universities matched to your profile and goals." },
  { icon: FileText, title: "SOP Guidance", desc: "Multiple drafts, structured frameworks and editorial review for a compelling personal narrative." },
  { icon: ScrollText, title: "LOR Assistance", desc: "Strategy on recommenders, framing and templates that highlight your strongest signals." },
  { icon: ClipboardCheck, title: "Application Strategy", desc: "Deadline planning, supplemental essays and end-to-end application management." },
  { icon: Mic, title: "Interview Preparation", desc: "Mock interviews with detailed feedback, school-specific questions and presence coaching." },
  { icon: Wallet, title: "Scholarship Guidance", desc: "Identify merit and need-based scholarships, and craft a strong scholarship application narrative." },
];

function StudyAbroadPage() {
  return (
    <>
      <PageHero eyebrow="Study Abroad" title="End-to-end mentoring for top global admissions" subtitle="From the first university shortlist to the final scholarship application — we walk every step with you." />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeader eyebrow="What We Cover" title="Premium admissions support, end-to-end" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary"><s.icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit">
            <EnquiryForm title="Plan your admit" />
          </aside>
        </div>
      </section>

      <CtaBand title="Dreaming of a top global university?" subtitle="Talk to a mentor and start your application journey today." />
    </>
  );
}
