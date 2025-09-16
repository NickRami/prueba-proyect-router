const categories = [
  {
    title: 'Tecnología',
    description: 'Novedades sobre IA, móviles, y startups.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&h=200&w=400',
  },
  {
    title: 'Deportes',
    description: 'Resultados, análisis y eventos en vivo.',
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&h=200&w=400',
  },
  {
    title: 'Cultura',
    description: 'Arte, cine, música y literatura del mundo.',
    image: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&h=200&w=400',
  },
  {
    title: 'Ciencia',
    description: 'Exploración espacial, salud, y avances científicos.',
    image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&h=200&w=400',
  },
];

const CategoryCards = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Categorías de Actualidad</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              className="bg-white rounded-lg shadow-sm flex flex-col h-full"
              key={i}
            >
              <img
                src={cat.image}
                className="w-full h-40 object-cover rounded-t-lg"
                alt={cat.title}
              />
              <div className="flex flex-col flex-1 p-5">
                <h5 className="text-xl font-semibold mb-2">{cat.title}</h5>
                <p className="text-gray-600 mb-4 flex-1">{cat.description}</p>
                <a
                  href="#"
                  className="mt-auto inline-block px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Ver más
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryCards;
