export default function MenuItemCard({ titulo, descricao, foto }) {
    return (
        <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <img src={foto} alt={titulo} className="h-56 w-full object-cover" />
            <div className="p-5">
                <h3 className="text-lg font-semibold">{titulo}</h3>
                <p className="mt-2 text-gray-500">{descricao}</p>
            </div>
        </article>
    );
}