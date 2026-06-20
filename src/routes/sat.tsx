import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/sat")({
  component: SatLayout,
});

function SatLayout() {
  return <Outlet />;
}
