import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/gre")({
  component: GreLayout,
});

function GreLayout() {
  return <Outlet />;
}
