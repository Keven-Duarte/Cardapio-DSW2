import { NavLink } from "react-router";
import { MdTableBar } from "react-icons/md";

export default function Header() {
  return (
    <header className="w-full bg-pergaminho py-6">
      <div className="max-w mx-auto px-8 md:px-16 flex justify-between items-center">

        <NavLink to="/" className="flex items-center gap-3 no-underline group">
          <div className="bg-seda-amendoa w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <MdTableBar className="text-linho text-xl" />
          </div>
          <span className="font-display font-bold text-xl text-black tracking-tight">
            Refeitório
          </span>
        </NavLink>

        <nav className="flex gap-10 font-sans font-medium text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold border-b-2 border-seda-amendoa pb-1"
                : "text-osso hover:text-black transition-colors pb-1 border-b-2 border-transparent"
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/cardapio"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold border-b-2 border-seda-amendoa pb-1"
                : "text-osso hover:text-black transition-colors pb-1 border-b-2 border-transparent"
            }
          >
            Cardápio
          </NavLink>
        </nav>

      </div>
    </header>
  );
}
