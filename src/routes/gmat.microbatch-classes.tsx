import { createFileRoute } from "@tanstack/react-router";
import { MicrobatchProgramPage } from "@/components/programs/MicrobatchProgramPage";
import { gmatMicrobatchContent } from "@/lib/microbatch-program-content";

const content = gmatMicrobatchContent;

export const Route = createFileRoute("/gmat/microbatch-classes")({
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
