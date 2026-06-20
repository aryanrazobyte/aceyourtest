import { createFileRoute, notFound } from "@tanstack/react-router";
import { GmatCityCoachingPage } from "@/components/gmat/GmatCityCoachingPage";
import { getGmatCityBySlug } from "@/lib/gmat-coaching-cities";

export const Route = createFileRoute("/gmat/$city")({
  beforeLoad: ({ params }) => {
    const city = getGmatCityBySlug(params.city);
    if (!city) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const city = getGmatCityBySlug(params.city);
    if (!city) {
      return {};
    }

    const cityName = city.name;

    return {
      meta: [
        {
          title: `GMAT Coaching in ${cityName} — Focus Edition Prep | AceYourTest`,
        },
        {
          name: "description",
          content: `Top GMAT Focus coaching in ${cityName} with Tarun Kaushik. Personalized study plans, Quant + Verbal + Data Insights, 5,000+ questions, and MBA admissions guidance.`,
        },
        {
          property: "og:title",
          content: `GMAT Coaching in ${cityName} — AceYourTest`,
        },
        {
          property: "og:description",
          content: `Achieve your target GMAT score in ${cityName} with structured mentorship, mock tests, and proven MBA prep systems.`,
        },
        {
          property: "og:url",
          content: `/gmat/${city.slug}`,
        },
      ],
      links: [{ rel: "canonical", href: `/gmat/${city.slug}` }],
    };
  },
  component: GmatCityRoutePage,
});

function GmatCityRoutePage() {
  const { city: citySlug } = Route.useParams();
  const city = getGmatCityBySlug(citySlug);

  if (!city) {
    throw notFound();
  }

  return <GmatCityCoachingPage city={city} />;
}
