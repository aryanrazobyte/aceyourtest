import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { GRE_COACHING_CITIES } from "../lib/gre-coaching-cities";
import { GMAT_COACHING_CITIES } from "../lib/gmat-coaching-cities";
import { SAT_COACHING_CITIES } from "../lib/sat-coaching-cities";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/gmat", changefreq: "monthly", priority: "0.9" },
          { path: "/gmat/individual-tutoring", changefreq: "monthly", priority: "0.85" },
          { path: "/gmat/microbatch-classes", changefreq: "monthly", priority: "0.85" },
          { path: "/gmat/group-classes", changefreq: "monthly", priority: "0.85" },
          { path: "/gmat/self-study-plan", changefreq: "monthly", priority: "0.85" },
          { path: "/gmat/plans-pricing", changefreq: "monthly", priority: "0.85" },
          { path: "/gmat/top-university-cutoff", changefreq: "monthly", priority: "0.85" },
          ...GMAT_COACHING_CITIES.map((city) => ({
            path: `/gmat/${city.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          { path: "/gre", changefreq: "monthly", priority: "0.9" },
          { path: "/gre/private-tutoring", changefreq: "monthly", priority: "0.85" },
          { path: "/gre/gre-test-prep-courses-group-classes-program", changefreq: "monthly", priority: "0.85" },
          { path: "/gre/microbatch-classes", changefreq: "monthly", priority: "0.85" },
          { path: "/gre/plans-pricing", changefreq: "monthly", priority: "0.85" },
          ...GRE_COACHING_CITIES.map((city) => ({
            path: `/gre/${city.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          { path: "/sat", changefreq: "monthly", priority: "0.9" },
          { path: "/sat/private-tutoring", changefreq: "monthly", priority: "0.85" },
          { path: "/sat/microbatch-classes", changefreq: "monthly", priority: "0.85" },
          { path: "/sat/group-sessions", changefreq: "monthly", priority: "0.85" },
          { path: "/sat/plans-pricing", changefreq: "monthly", priority: "0.85" },
          ...SAT_COACHING_CITIES.map((city) => ({
            path: `/sat/${city.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          { path: "/study-abroad", changefreq: "monthly", priority: "0.8" },
          { path: "/success-stories", changefreq: "monthly", priority: "0.7" },
          { path: "/testimonials", changefreq: "monthly", priority: "0.6" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/terms-and-conditions", changefreq: "monthly", priority: "0.5" },
          { path: "/refund-policy", changefreq: "monthly", priority: "0.5" },
          { path: "/privacy-policy", changefreq: "monthly", priority: "0.5" },
          { path: "/book-consultation", changefreq: "monthly", priority: "0.9" },
        ];
        const urls = entries.map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
