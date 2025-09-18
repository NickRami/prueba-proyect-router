import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center p-4">
        <div className="max-w-xs w-full">
          <h1 className="text-7xl font-bold text-red-600">404</h1>
          <h2 className="mb-4 font-semibold text-2xl">¡Página no encontrada!</h2>
          <p className="mb-4 text-gray-500 text-lg">
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
            className="mb-4 mx-auto"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <circle cx="12" cy="16" r="1" />
          </svg>
          <Button asChild variant={"destructive"}>
            <Link to='/' className="no-underline shadow">
              Volver al Inicio
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default NotFound
