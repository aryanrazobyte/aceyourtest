import { createFileRoute } from "@tanstack/react-router";
import { MicrobatchProgramPage } from "@/components/programs/MicrobatchProgramPage";
import { satGroupContent } from "@/lib/sat-group-program-content";

const content = satGroupContent;

export const Route = createFileRoute("/sat/group-sessions")({
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
