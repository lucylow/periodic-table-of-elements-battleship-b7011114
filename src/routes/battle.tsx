import { createFileRoute } from "@tanstack/react-router";
import { Battlefield } from "@/features/armada/game-pages";

export const Route = createFileRoute("/battle")({
  head: () => ({ meta: [
    { title: "Atom Armada — Battlefield" },
    { name: "description", content: "Answer chemistry questions to strike the enemy fleet across all 118 elements." },
    { property: "og:title", content: "Atom Armada — Battlefield" },
    { property: "og:description", content: "Answer chemistry questions to strike the enemy fleet across all 118 elements." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Battlefield,
});
