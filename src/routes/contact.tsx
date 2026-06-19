import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { EnquiryForm } from "../components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AceYourTest — Book a Free Consultation" },
      { name: "description", content: "Get in touch with AceYourTest — call, email or visit our Delhi office. Book a free consultation with our mentor team." },
      { property: "og:title", content: "Contact AceYourTest" },
      { property: "og:description", content: "Book a free consultation with our GMAT, GRE & SAT mentor team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to a mentor — book a free consultation" subtitle="Tell us about your goals and we'll design a personalized prep + admissions plan." />

      <section className="section-y">
        <div className="container-page grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-bold text-navy">Office</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Alaknanda, New Delhi, India</span>
                </li>
                <li className="flex gap-3"><Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    <a className="block hover:text-primary" href="tel:+918800338783">+91 88003 38783</a>
                    <a className="block hover:text-primary" href="tel:+919310037791">+91 93100 37791</a>
                  </span>
                </li>
                <li className="flex gap-3"><Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <a className="hover:text-primary break-all" href="mailto:tarunkaushik@aceyourtest.in">tarunkaushik@aceyourtest.in</a>
                </li>
                <li className="flex gap-3"><Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Mon–Sat · 9:00 AM – 8:00 PM</span>
                </li>
              </ul>
              <a href="https://wa.me/918800338783" target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-success px-4 py-3 text-sm font-semibold text-success-foreground hover:opacity-90 transition-opacity">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-card">
              <iframe
                title="AceYourTest Office Location"
                src="https://www.google.com/maps?q=Alaknanda,+New+Delhi&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          <EnquiryForm title="Book a Free Consultation" />
        </div>
      </section>
    </>
  );
}
