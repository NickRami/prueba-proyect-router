


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
        <section className="container py-5">
      <h2 className="mb-4 text-center">Categorías de Actualidad</h2>
      <div className="row">
        {categories.map((cat, i) => (
          <div className="col-md-6  col-lg-3 mb-4" key={i}>
            <div className="card  h-100 shadow-sm">
              <img src={cat.image} className="card-img-top" alt={cat.title} />
              <div className="card-body d-flex flex-column ">
                <h5 className="card-title">{cat.title}</h5>
                <p className="card-text">{cat.description}</p>
                <a href="#" className="btn btn-sm btn-outline-primary mt-auto">Ver más</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default CategoryCards
