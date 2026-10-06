import panqueca from "../assets/panqueca.jpg";
import suco from "../assets/suco.jpg";
import lasanha from "../assets/lasanha.png";
import salada from "../assets/salada.jpg";
import crepioca from "../assets/crepioca.jpg";
import sopa from "../assets/sopa.jpg";

export default function Menu() {
  const refeicoes = [
    {
      tipo: "Café da manhã",
      horario: "07h às 09h",
      itens: [
        {
          titulo: "Panquecas de Mel com Ovo Frito e Frutas",
          descricao: "Panquecas cobertas de mel com ovo frito.",
          foto: panqueca,
        },
        {
          titulo: "Suco de laranja",
          descricao: "Suco natural, servido gelado.",
          foto: suco,
        },
      ],
    },
    {
      tipo: "Almoço",
      horario: "12h às 14h",
      itens: [
        {
          titulo: "Lasanha à Bolonhesa",
          descricao: "Massa seca e fresca com molho à bolonhesa, acompanhada de molho branco com bastante queijo.",
          foto: lasanha,
        },
        {
          titulo: "Salada de alface",
          descricao: "Alface e tomate, temperados com azeite.",
          foto: salada,
        },
      ],
    },
    {
      tipo: "Jantar",
      horario: "19h às 21h",
      itens: [
        {
          titulo: "Crepioca de Frango",
          descricao: "Massa leve de tapioca com ovo, recheada com frango desfiado suculento e requeijão cremoso.",
          foto: crepioca,
        },
        {
          titulo: "Sopa de legumes",
          descricao: "Sopa quentinha com cenoura, batata e abobrinha.",
          foto: sopa,
        },
      ],
    },
  ];

  const hoje = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <>
      {/* Título */}
      <h1 className="text-6xl font-extrabold">Cardápio</h1>

      {/* Data atual */}
      <p className="mt-4 text-xl capitalize text-gray-500">{hoje}</p>

      {/* Refeições */}
      {refeicoes.map((refeicao) => (
        <section key={refeicao.tipo} className="mt-16">
          <h2 className="border-b border-stone-200 pb-4 text-2xl font-bold">
            {refeicao.tipo} — {refeicao.horario}
          </h2>

          {/* Grade de itens */}
{/* Grade de itens */}
<div className="mt-6 grid grid-cols-3 gap-6">
  {refeicao.itens.map((item) => (
    <article
      key={item.titulo}
      className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* O overflow-hidden aqui impede que a foto "vaze" ao dar zoom */}
      <div className="h-56 overflow-hidden">
        <img
          src={item.foto}
          alt={item.titulo}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold transition-colors group-hover:text-white-100">
          {item.titulo}
        </h3>
        <p className="mt-2 text-gray-500">{item.descricao}</p>
      </div>
    </article>
  ))}
</div>
        </section>
      ))}
    </>
  );
}