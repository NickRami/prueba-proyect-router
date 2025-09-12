import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
   <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center p-4">
      <div style={{ maxWidth: '400px' }}>
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-4 fw-semibold">¡Página no encontrada!</h2>
        <p className="mb-4 text-secondary fs-5">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          fill="none"
          stroke="#dc3545"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-4"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <circle cx="12" cy="16" r="1" />
        </svg>
        <Link to='/' className="btn btn-danger btn-lg shadow">
            Volver al Inicio
        </Link>
      </div>
    </div>
    
    </>
  )
}

export default NotFound
