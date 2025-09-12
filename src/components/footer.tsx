
const Footer = () => {
  return (
   <>
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} MiSitio. Todos los derechos reservados.</p>
        <div>
          <a href="#" className="text-light me-3 text-decoration-none">Privacidad</a>
          <a href="#" className="text-light me-3 text-decoration-none">Términos</a>
          <a href="#" className="text-light text-decoration-none">Contacto</a>
        </div>
      </div>
    </footer>
   </> 
  )
}

export default Footer
