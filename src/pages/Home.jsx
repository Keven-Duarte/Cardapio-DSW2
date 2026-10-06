import { NavLink } from "react-router"

export default function Home() {
    return (
        <section className="flex flex-col items-center text-center space-y-6 max-w-2xl px-4 font-sans">
            
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] font-display">
                Cardápio do<br />refeitório
            </h1>
            
            <p className="text-slate-600 text-base md:text-lg font-normal max-w-md leading-relaxed">
                Confira o que será servido em cada refeição do dia.
            </p>
            
            <div className="pt-4">
                <NavLink
                    to="/cardapio"
                    className="inline-block bg-seda-amendoa hover:opacity-90 text-slate-900 font-bold px-8 py-3.5 rounded-full shadow-md transition-all duration-200 text-sm tracking-wide active:scale-95"
                >
                    Ver cardápio
                </NavLink>
            </div>
        </section>
    )
}
