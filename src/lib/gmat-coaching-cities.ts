export const GMAT_COACHING_CITIES = [
  { slug: "hyderabad", label: "Hyderabad", name: "Hyderabad" },
  { slug: "mumbai", label: "Mumbai", name: "Mumbai" },
  { slug: "noida", label: "Noida", name: "Noida" },
  { slug: "gurgaon", label: "Gurgaon", name: "Gurugram" },
  { slug: "pune", label: "Pune", name: "Pune" },
] as const;

export type GmatCitySlug = (typeof GMAT_COACHING_CITIES)[number]["slug"];

export type GmatCoachingCity = (typeof GMAT_COACHING_CITIES)[number];

export function getGmatCityBySlug(slug: string): GmatCoachingCity | undefined {
  return GMAT_COACHING_CITIES.find((city) => city.slug === slug);
}

export function isGmatCitySlug(slug: string): slug is GmatCitySlug {
  return GMAT_COACHING_CITIES.some((city) => city.slug === slug);
}
