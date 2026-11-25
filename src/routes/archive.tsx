import { createFileRoute } from "@tanstack/react-router";
import { ElementArchive } from "@/features/armada/game-pages";

export const Route = createFileRoute("/archive")({
  head: () => ({ meta: [
    { title: "Atom Armada — Element Archive" },
    { name: "description", content: "Search and inspect all 118 elements, their families, groups, periods, and atomic numbers." },
    { property: "og:title", content: "Atom Armada — Element Archive" },
    { property: "og:description", content: "Search and inspect all 118 elements, their families, groups, periods, and atomic numbers." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ElementArchive,
});
