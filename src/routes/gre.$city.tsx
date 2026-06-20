import { createFileRoute, notFound } from "@tanstack/react-router";
import { GreCityCoachingPage } from "@/components/gre/GreCityCoachingPage";
import { getGreCityBySlug } from "@/lib/gre-coaching-cities";

export const Route = createFileRoute("/gre/$city")({
  beforeLoad: ({ params }) => {
    const city = getGreCityBySlug(params.city);
    if (!city) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const city = getGreCityBySlug(params.city);
    if (!city) {
      return {};
    }

    const cityName = city.name;

    return {
      meta: [
        {
          title: `GRE Coaching in ${cityName} — 1-on-1 Private Tutoring | AceYourTest`,
        },
        {
          name: "description",
          content: `Personalized 1-on-1 GRE tutoring in ${cityName} with Tarun Kaushik. Custom study plans, Quant & Verbal mastery, 5,000+ practice questions, and admissions guidance.`,
        },
        {
          property: "og:title",
          content: `GRE Private Coaching in ${cityName} — AceYourTest`,
        },
        {
          property: "og:description",
          content: `Achieve your target GRE score with elite private mentorship in ${cityName} — flexible scheduling and proven results.`,
        },
        {
          property: "og:url",
          content: `/gre/${city.slug}`,
        },
      ],
      links: [{ rel: "canonical", href: `/gre/${city.slug}` }],
    };
  },
  component: GreCityRoutePage,
});

function GreCityRoutePage() {
  const { city: citySlug } = Route.useParams();
  const city = getGreCityBySlug(citySlug);

  if (!city) {
    throw notFound();
  }

  return <GreCityCoachingPage city={city} />;
}
