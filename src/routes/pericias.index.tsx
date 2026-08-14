import { createFileRoute } from "@tanstack/react-router";
import { PericiasList } from "./pericias";

export const Route = createFileRoute("/pericias/")({
  component: PericiasList,
});
