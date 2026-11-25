import { createFileRoute } from "@tanstack/react-router";
import { ChemistryAcademy } from "@/features/armada/game-pages";

export const Route = createFileRoute("/academy")({
  head: () => ({ meta: [
    { title: "Atom Armada — Chemistry Academy" },
    { name: "description", content: "Train your knowledge of atomic structure, element symbols, and periodic families." },
    { property: "og:title", content: "Atom Armada — Chemistry Academy" },
    { property: "og:description", content: "Train your knowledge of atomic structure, element symbols, and periodic families." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ChemistryAcademy,
});
