import { createFileRoute } from "@tanstack/react-router";
import { SatProgramDetailPage } from "@/components/sat/SatProgramDetailPage";
import { satPrivateTutoring } from "@/lib/sat-program-pages";

const program = satPrivateTutoring;

export const Route = createFileRoute("/sat/private-tutoring")({
  head: () => ({
    meta: [
      { title: program.metaTitle },
      { name: "description", content: program.metaDescription },
      { property: "og:title", content: program.metaTitle },
      { property: "og:description", content: program.metaDescription },
      { property: "og:url", content: program.ogUrl },
    ],
    links: [{ rel: "canonical", href: program.ogUrl }],
  }),
  component: () => <SatProgramDetailPage program={program} />,
});
