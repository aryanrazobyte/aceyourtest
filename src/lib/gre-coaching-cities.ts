export const GRE_COACHING_CITIES = [
  { slug: "gurgaon", label: "Gurgaon", name: "Gurugram" },
  { slug: "noida", label: "Noida", name: "Noida" },
  { slug: "mumbai", label: "Mumbai", name: "Mumbai" },
  { slug: "hyderabad", label: "Hyderabad", name: "Hyderabad" },
  { slug: "pune", label: "Pune", name: "Pune" },
] as const;

export type GreCitySlug = (typeof GRE_COACHING_CITIES)[number]["slug"];

export type GreCoachingCity = (typeof GRE_COACHING_CITIES)[number];

export function getGreCityBySlug(slug: string): GreCoachingCity | undefined {
  return GRE_COACHING_CITIES.find((city) => city.slug === slug);
}

export function isGreCitySlug(slug: string): slug is GreCitySlug {
  return GRE_COACHING_CITIES.some((city) => city.slug === slug);
}
