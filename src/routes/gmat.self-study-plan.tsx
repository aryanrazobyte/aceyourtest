import { createFileRoute } from "@tanstack/react-router";
import { MicrobatchProgramPage } from "@/components/programs/MicrobatchProgramPage";
import { gmatSelfStudyContent } from "@/lib/self-study-program-content";

const content = gmatSelfStudyContent;

export const Route = createFileRoute("/gmat/self-study-plan")({
  head: () => ({
    meta: [
      { title: content.meta.title },
      { name: "description", content: content.meta.description },
      { property: "og:title", content: content.meta.ogTitle },
      { property: "og:description", content: content.meta.ogDescription },
      { property: "og:url", content: content.meta.canonical },
    ],
    links: [{ rel: "canonical", href: content.meta.canonical }],
  }),
  component: () => <MicrobatchProgramPage content={content} />,
});
