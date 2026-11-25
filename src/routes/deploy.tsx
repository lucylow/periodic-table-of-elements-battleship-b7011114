import { createFileRoute } from "@tanstack/react-router";
import { FleetDeployment } from "@/features/armada/game-pages";

export const Route = createFileRoute("/deploy")({
  head: () => ({ meta: [
    { title: "Atom Armada — Fleet Deployment" },
    { name: "description", content: "Position your four research vessels on the periodic battle grid." },
    { property: "og:title", content: "Atom Armada — Fleet Deployment" },
    { property: "og:description", content: "Position your four research vessels on the periodic battle grid." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FleetDeployment,
});
