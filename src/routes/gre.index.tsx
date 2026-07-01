import { createFileRoute } from "@tanstack/react-router";
import { GreMainPage } from "@/components/gre/GreMainPage";

export const Route = createFileRoute("/gre/")({
  head: () => ({
    meta: [
      {
        title: "Best Online GRE Test Prep Classes 2025 — Score 330+ | AceYourTest",
      },
      {
        name: "description",
        content:
          "GRE online coaching in India with Tarun Kaushik. 50+ live hours, 5,000+ practice questions, mock tests, personalized mentoring & MS/MBA admissions support. Score 330+.",
      },
      { property: "og:title", content: "GRE Online Coaching — AceYourTest" },
      {
        property: "og:description",
        content:
          "Master the GRE with expert-led online classes — Quant, Verbal & AWA mastery for top global university admits.",
      },
      { property: "og:url", content: "/gre" },
    ],
    links: [{ rel: "canonical", href: "/gre" }],
  }),
  component: GreMainPage,
});
