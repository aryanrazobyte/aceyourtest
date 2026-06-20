export const SAT_COACHING_CITIES = [
  { slug: "gurgaon", label: "Gurgaon", name: "Gurugram" },
  { slug: "noida", label: "Noida", name: "Noida" },
  { slug: "mumbai", label: "Mumbai", name: "Mumbai" },
  { slug: "hyderabad", label: "Hyderabad", name: "Hyderabad" },
  { slug: "pune", label: "Pune", name: "Pune" },
] as const;

export type SatCitySlug = (typeof SAT_COACHING_CITIES)[number]["slug"];

export type SatCoachingCity = (typeof SAT_COACHING_CITIES)[number];

export function getSatCityBySlug(slug: string): SatCoachingCity | undefined {
  return SAT_COACHING_CITIES.find((city) => city.slug === slug);
}

export function isSatCitySlug(slug: string): slug is SatCitySlug {
  return SAT_COACHING_CITIES.some((city) => city.slug === slug);
}
