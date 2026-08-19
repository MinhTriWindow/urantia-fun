import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/thu-vien-paper")({
  component: () => <Outlet />,
});
