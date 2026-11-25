import { createFileRoute } from "@tanstack/react-router";
import { CommandDeck } from "@/features/armada/game-pages";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Atom Armada — Command Deck" },
    { name: "description", content: "Command the elements: deploy a fleet, explore the periodic table, and train your chemistry knowledge." },
    { property: "og:title", content: "Atom Armada — Command Deck" },
    { property: "og:description", content: "Enter Atom Armada, a playable chemistry fleet strategy game." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CommandDeck,
});
