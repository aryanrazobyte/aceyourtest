import { createFileRoute } from "@tanstack/react-router";
import { GmatMainPage } from "@/components/gmat/GmatMainPage";

export const Route = createFileRoute("/gmat/")({
  head: () => ({
    meta: [
      {
        title: "Top GMAT Online Coaching in India — Live Classes & Mentor-Led Prep | AceYourTest",
      },
      {
        name: "description",
        content:
          "Top GMAT Focus Edition online coaching with Tarun Kaushik. 10,000+ students trained, 2,000+ scoring 705+. Live classes, mocks, personalized mentoring & MBA admissions support.",
      },
      { property: "og:title", content: "Top GMAT Online Coaching — AceYourTest" },
      {
        property: "og:description",
        content:
          "Crack GMAT Focus Edition with India's most trusted mentor-led prep — Quant, Verbal & Data Insights mastery.",
      },
      { property: "og:url", content: "/gmat" },
    ],
    links: [{ rel: "canonical", href: "/gmat" }],
  }),
  component: GmatMainPage,
});
