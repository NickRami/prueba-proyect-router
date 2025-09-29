import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Scissors, User, Droplet } from "lucide-react"

const ServiciosBarber = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20  ">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900 drop-shadow-sm">
        Nuestros Servicios
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <Card className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-rose-900 rounded-3xl shadow-xl border-0 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <Scissors className="mb-6 h-16 w-16 text-rose-400 drop-shadow" />
          <CardHeader className="p-0 w-full">
            <CardTitle className="text-xl font-bold text-white mb-2">Corte de Cabello</CardTitle>
            <CardDescription >
              <p className="text-gray-100 text-base font-medium">
                Estilos modernos y clásicos, adaptados a tu personalidad.
              </p>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-rose-900 rounded-3xl shadow-xl border-0 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <User className="mb-6 h-16 w-16 text-rose-400 drop-shadow" />
          <CardHeader className="p-0 w-full">
            <CardTitle className="text-xl font-bold text-white mb-2">Afeitado Clásico</CardTitle>
            <CardDescription >
              <p className="text-gray-100 text-base font-medium">
                Experiencia de barbería tradicional con productos premium.
              </p>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-rose-900 rounded-3xl shadow-xl border-0 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <Droplet className="mb-6 h-16 w-16 text-rose-400 drop-shadow" />
          <CardHeader className="p-0 w-full">
            <CardTitle className="text-xl font-bold text-white mb-2">Tratamientos Capilares</CardTitle>
            <CardDescription >
              <p className="text-gray-100 text-base font-medium">
                Nutrición y cuidado para un cabello saludable y fuerte.
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}

export default ServiciosBarber
