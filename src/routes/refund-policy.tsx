import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — AceYourTest" },
      {
        name: "description",
        content:
          "AceYourTest refund policy — free trial before purchase, no-refund policy, and support contact information.",
      },
      { property: "og:title", content: "Refund Policy — AceYourTest" },
      { property: "og:url", content: "/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: RefundPolicyPage,
});

const sections = [
  {
    title: "Try Before You Buy: Free Trial to Explore Our Services",
    body: "At AceYourTest.in, we are committed to providing a seamless and satisfying learning experience. To help you make an informed decision, we offer a free trial of our services so you can explore our courses and teaching methods before committing to a subscription.",
  },
  {
    title: "Our No-Refund Policy",
    body: "We want you to be fully confident in your decision before purchasing any of our services. Since we provide a free trial to give you an opportunity to evaluate our courses, all purchases are considered final and non-refundable. We do not offer refunds, returns, or exchanges for any subscriptions or purchases made through our platform.",
  },
  {
    title: "Make the Most of Your Free Trial",
    body: "We encourage you to take full advantage of the free trial section to assess whether our courses and teaching style meet your needs before making a purchase. This allows you to make a well-informed decision without any rush.",
  },
  {
    title: "Need Assistance?",
    body: "If you have any questions, concerns, or need further clarification, please feel free to reach out to our support team at tarunkaushik@aceyourtest.in. We are here to help!",
  },
];

function RefundPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refund Policy"
        subtitle="Our free trial approach and purchase policy for AceYourTest coaching programs."
      />

      <section className="section-y">
        <div className="container-page max-w-3xl space-y-6">
          <p className="text-sm text-muted-foreground">
            See also our{" "}
            <Link to="/terms-and-conditions" className="font-medium text-primary hover:underline">
              Terms & Conditions
            </Link>
            .
          </p>

          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6"
            >
              <h2 className="text-lg font-bold text-navy">{section.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
