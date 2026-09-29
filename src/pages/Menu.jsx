export default function Menu() {
  
    const itens = [
    {
      tipo: "Café da manhã",
      horario: "07h às 09h",
      titulo: "Panquecas de Mel com Ovo Frito e Frutas",
      descricao: "Panquecas cobertas de mel com ovo frito e algumas frutas vermelhas.",
    },
    {
      tipo: "Almoço",
      horario: "12h às 14h",
      titulo: "Lasanha à Bolonhesa",
      descricao: "Massa seca e fresca com molho à bolonhesa, acompanhada de molho branco com bastante queijo.",
    },

    {
      tipo: "Jantar",
      horario: "19h às 21h",
      titulo: "Crepioca de Frango",
      descricao: "Massa leve de tapioca com ovo, recheada com frango desfiado suculento e requeijão cremoso.",
    },
    
  ];

  return (
    <main className="max-w-3xl mx-auto p-8">
      
      {/* Título */}
      <h1 className="text-4xl font-bold mb-2">Cardápio</h1>

      {/* Data atual */}
      <p className="text-gray-600 mb-8">
        A data de hoje é: {new Date().toLocaleDateString("pt-BR")}
      </p>

      {/* Refeições */}
      <ul className="space-y-6 list-none">
        {itens.map((item) => (
          <li key={item.tipo} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-2xl font-semibold">{item.tipo}</h2>
            <p className="text-sm text-gray-500 mb-2">Horário: {item.horario}</p>
            <h3 className="text-lg font-medium">{item.titulo}</h3>
            <p>{item.descricao}</p>
          </li>
        ))}
      </ul>

    </main>
  );
}