import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — AceYourTest" },
      {
        name: "description",
        content:
          "Terms and conditions for using AceYourTest GMAT, GRE and SAT preparation services, website, and enrollment programs.",
      },
      { property: "og:title", content: "Terms & Conditions — AceYourTest" },
      { property: "og:url", content: "/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "Acceptance of Terms",
    body: "Your use of Ace Your Test signifies your unequivocal acceptance of these Terms & Conditions. Should you disagree with any clause or provision, you are advised to discontinue access to our services immediately.",
  },
  {
    title: "Services Offered",
    body: "Ace Your Test is dedicated to delivering meticulously curated test preparation resources, including:",
    list: [
      "Comprehensive and interactive course materials",
      "Live, expert-led virtual classes",
      "Rigorous practice tests and performance analytics",
      "Bespoke one-on-one coaching sessions",
    ],
  },
  {
    title: "Eligibility",
    body: "Our services are exclusively designed for individuals aged 13 years and above. By registering with Ace Your Test, you warrant that you meet this age prerequisite.",
  },
  {
    title: "Registration and Account Integrity",
    body: "To unlock certain features, users are required to establish an account. By doing so, you undertake to:",
    list: [
      "Provide precise, complete, and up-to-date registration details.",
      "Safeguard the confidentiality of your login credentials.",
      "Notify Ace Your Test promptly of any unauthorized account access or security breaches.",
    ],
  },
  {
    title: "User Responsibilities",
    body: "As a user of Ace Your Test, you consent to:",
    list: [
      "Refrain from employing our platform for illicit or unethical purposes.",
      "Avoid the dissemination, replication, or unauthorized usage of proprietary course materials.",
      "Abstain from activities that impair or disrupt the operational integrity of our platform.",
    ],
  },
  {
    title: "Intellectual Property Rights",
    body: "All materials, including but not limited to videos, course content, assessments, and written resources, are the exclusive intellectual property of Ace Your Test. Any unauthorized reproduction, dissemination, or usage constitutes a violation of applicable intellectual property laws.",
  },
  {
    title: "Limitation of Liability",
    body: "Ace Your Test, along with its affiliates, trainers, and personnel, shall not be held liable for any incidental, indirect, consequential, or punitive damages arising from the use or inability to utilize our services.",
  },
  {
    title: "Privacy Assurance",
    body: "Your privacy is paramount. For an in-depth understanding of how your personal information is collected, processed, and protected, kindly review our comprehensive Privacy Policy.",
  },
  {
    title: "Amendments to Terms",
    body: "Ace Your Test reserves the right to modify these Terms & Conditions at its sole discretion, with updates taking immediate effect upon publication on our website. Continued usage post-revision constitutes your binding acceptance of the amended terms.",
  },
  {
    title: "Contact Information",
    body: "For inquiries, assistance, or feedback, please reach out to us via:",
    list: [
      "Email: tarunkaushik@aceyourtest.in",
      "Phone: +91 88003 38783",
    ],
  },
  {
    title: "Governing Law and Jurisdiction",
    body: "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be exclusively subject to the jurisdiction of the courts in Delhi.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using AceYourTest services or enrolling in our programs."
      />

      <section className="section-y">
        <div className="container-page max-w-3xl space-y-6">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              Welcome to Ace Your Test, the premier online platform for GMAT, GRE and SAT
              preparation, spearheaded by distinguished trainer Tarun Kaushik. By accessing or
              utilizing our website and services, you affirm your agreement to comply with the
              following Terms &amp; Conditions. Kindly peruse them thoroughly prior to engagement.
            </p>
          </div>

          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6"
            >
              <h2 className="text-lg font-bold text-navy">{section.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{section.body}</p>
              {section.list && (
                <ul className="mt-3 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <p className="text-sm text-muted-foreground leading-relaxed">
            By engaging with Ace Your Test, you acknowledge and agree to these Terms &amp;
            Conditions in their entirety. We are honored to be a part of your academic journey and
            remain committed to helping you achieve excellence.
          </p>
        </div>
      </section>
    </>
  );
}
