import { createFileRoute } from "@tanstack/react-router";
import { PilotRecords } from "@/features/armada/game-pages";

export const Route = createFileRoute("/records")({
  head: () => ({ meta: [
    { title: "Atom Armada — Pilot Records" },
    { name: "description", content: "Review your Atom Armada victories, completed missions, and pilot experience." },
    { property: "og:title", content: "Atom Armada — Pilot Records" },
    { property: "og:description", content: "Review your Atom Armada victories, completed missions, and pilot experience." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PilotRecords,
});
