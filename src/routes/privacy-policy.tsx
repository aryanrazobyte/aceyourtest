import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AceYourTest" },
      {
        name: "description",
        content:
          "AceYourTest privacy policy — how we collect, use, and protect your personal information for GMAT, GRE and SAT coaching services.",
      },
      { property: "og:title", content: "Privacy Policy — AceYourTest" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  {
    title: "Information We Collect",
    body: "To provide and improve our services, we collect the following types of personal information:",
    list: [
      "Personal Identification Information: Name, email address, phone number, and other contact details.",
      "Demographic Information: Age, gender, location, and educational background.",
      "Usage Data: Information about how you access and interact with our website, including IP addresses, browser type, and pages visited.",
    ],
  },
  {
    title: "Use of Collected Information",
    body: "We use the information we collect for the following purposes:",
    list: [
      "Service Delivery: To offer and manage our test preparation courses and personalized coaching sessions.",
      "Communication: To send important updates, course-related information, newsletters, and respond to inquiries.",
      "Continuous Improvement: To analyze usage patterns and enhance our website and services to better meet your needs.",
      "Security and Fraud Prevention: To monitor activity and safeguard against unauthorized access or fraudulent activities.",
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    body: "We use cookies and similar technologies to enhance your experience on our website. Cookies are small text files that store information about your preferences and browsing activity, which helps us improve our services. You can choose to disable cookies through your browser settings; however, please note that this may affect the functionality of certain features on our website.",
  },
  {
    title: "Data Sharing and Disclosure",
    body: "We respect your privacy and do not sell or rent your personal information. However, we may share data with trusted third-party service providers who assist in operating our website and delivering our services, provided they adhere to confidentiality agreements. We may also disclose your information if required by law or to protect our legal rights, safety, and security.",
  },
  {
    title: "Data Security",
    body: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. While we take reasonable steps to secure your data, please be aware that no method of data transmission over the internet is entirely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Third-Party Links",
    body: "Our website may contain links to third-party websites. These external sites are not under our control, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party websites you visit.",
  },
  {
    title: "Changes to This Privacy Policy",
    body: "We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date. Your continued use of our services after such updates signifies your acceptance of the revised terms.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions, concerns, or require further clarification regarding this Privacy Policy, please contact us:",
    list: ["Email: tarunkaushik@aceyourtest.in", "Phone: +91 88003 38783"],
  },
];

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How AceYourTest collects, uses, and protects your personal information."
      />

      <section className="section-y">
        <div className="container-page max-w-3xl space-y-6">
          <p className="text-sm text-muted-foreground">
            See also our{" "}
            <Link to="/terms-and-conditions" className="font-medium text-primary hover:underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link to="/refund-policy" className="font-medium text-primary hover:underline">
              Refund Policy
            </Link>
            .
          </p>

          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              Welcome to Ace Your Test, a premier coaching institution specializing in SAT, GRE,
              GMAT, and other standardized test preparation for students aspiring to study abroad.
              Led by expert trainer Tarun Kaushik, we are committed to maintaining the privacy and
              security of your personal information. This Privacy Policy outlines the types of data
              we collect, how we use it, and the measures we take to protect it. By accessing or
              using our website and services, you consent to the terms of this policy.
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
            By using our services, you consent to the terms outlined in this Privacy Policy. Thank
            you for choosing Ace Your Test as your trusted partner in achieving your study abroad
            goals.
          </p>
        </div>
      </section>
    </>
  );
}
