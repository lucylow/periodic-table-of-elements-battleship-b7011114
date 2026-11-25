import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeCheck } from "@/features/armada/game-pages";

export const Route = createFileRoute("/quiz")({
  head: () => ({ meta: [
    { title: "Atom Armada — Knowledge Check" },
    { name: "description", content: "Answer chemistry intelligence questions and earn pilot experience." },
    { property: "og:title", content: "Atom Armada — Knowledge Check" },
    { property: "og:description", content: "Answer chemistry intelligence questions and earn pilot experience." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: KnowledgeCheck,
});
