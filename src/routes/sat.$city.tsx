import { createFileRoute, notFound } from "@tanstack/react-router";
import { SatCityCoachingPage } from "@/components/sat/SatCityCoachingPage";
import { getSatCityBySlug } from "@/lib/sat-coaching-cities";

export const Route = createFileRoute("/sat/$city")({
  beforeLoad: ({ params }) => {
    const city = getSatCityBySlug(params.city);
    if (!city) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const city = getSatCityBySlug(params.city);
    if (!city) {
      return {};
    }

    const cityName = city.name;

    return {
      meta: [
        {
          title: `SAT Online Coaching in ${cityName} — Digital SAT Prep | AceYourTest`,
        },
        {
          name: "description",
          content: `Best SAT online coaching in ${cityName}. Individual classes (₹4,999/hr) and group classes (₹39,999). Math + Reading & Writing prep with Tarun Kaushik.`,
        },
        {
          property: "og:title",
          content: `SAT Coaching in ${cityName} — AceYourTest`,
        },
        {
          property: "og:description",
          content: `Achieve your target SAT score with expert-led online coaching in ${cityName} — flexible, personalized, and results-driven.`,
        },
        {
          property: "og:url",
          content: `/sat/${city.slug}`,
        },
      ],
      links: [{ rel: "canonical", href: `/sat/${city.slug}` }],
    };
  },
  component: SatCityRoutePage,
});

function SatCityRoutePage() {
  const { city: citySlug } = Route.useParams();
  const city = getSatCityBySlug(citySlug);

  if (!city) {
    throw notFound();
  }

  return <SatCityCoachingPage city={city} />;
}
