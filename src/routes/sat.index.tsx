import { createFileRoute } from "@tanstack/react-router";
import { SatMainPage } from "@/components/sat/SatMainPage";

export const Route = createFileRoute("/sat/")({
  head: () => ({
    meta: [
      {
        title: "Digital SAT Online Coaching Classes in India — Score 1500+ | AceYourTest",
      },
      {
        name: "description",
        content:
          "Digital SAT online coaching with Tarun Kaushik. Personalized study plans, adaptive practice, 2,000+ questions, digital mock tests & US university admissions support. Score 1500+.",
      },
      { property: "og:title", content: "Digital SAT Online Coaching — AceYourTest" },
      {
        property: "og:description",
        content:
          "Master the Digital SAT with expert-led online classes — Math & Reading/Writing mastery for top US university admits.",
      },
      { property: "og:url", content: "/sat" },
    ],
    links: [{ rel: "canonical", href: "/sat" }],
  }),
  component: SatMainPage,
});
