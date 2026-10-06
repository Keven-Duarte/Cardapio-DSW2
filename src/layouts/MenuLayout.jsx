import { Outlet } from "react-router";
import Header from "../components/Header";

export default function MenuLayout() {
  return (
    <div className="min-h-screen bg-linho text-stone-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <Outlet />
      </main>
    </div>
  );
}