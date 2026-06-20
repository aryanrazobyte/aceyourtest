import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/gmat")({
  component: GmatLayout,
});

function GmatLayout() {
  return <Outlet />;
}
