import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
// Update the import path below if your Label component is located elsewhere
import { Label } from "../../components/ui/label"
const Contacto = () => {

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Peluquería Black & Barbería</h1>
        <p className="text-muted-foreground mt-2">Contactanos para reservar tu turno o hacer consultas</p>
      </header>

      {/* Formulario */}
      <form className="space-y-4 bg-white p-6 rounded-lg shadow-md ">
        <div className="space-y-2">
          <Label  htmlFor="name">Nombre</Label>
          <Input id="name" type="text" placeholder="Tu nombre" />
        </div>

        <div className="space-y-2">
          <Label  htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="tucorreo@email.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensaje">Mensaje</Label>
          <Textarea id="mensaje" placeholder="Escribinos tu consulta o solicitud..." />
        </div>

        <Button type="submit">Enviar mensaje</Button>
      </form>

      {/* Información de contacto */}
      <div className="bg-muted p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">Información de contacto</h2>
        <p><strong>📍 Dirección:</strong> Av. Siempre Viva 123, Ciudad</p>
        <p><strong>📞 Teléfono / WhatsApp:</strong> +54 9 11 1234 5678</p>
        <p><strong>🕒 Horarios:</strong> Lunes a Sábados de 10:00 a 20:00</p>
        <p><strong>📱 Redes:</strong> <a href="#" className="text-blue-600 underline">Instagram</a></p>
      </div>
    </div>
  )
}


export default Contacto
