import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            Crear Cuenta
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input
            name="username"
            placeholder="Nombre de usuario"
            required
            autoFocus
          />
          <Input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Contraseña"
            required
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirmar contraseña"
            required
          />
          <Button className="w-full">Registrarse</Button>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 items-center text-sm text-muted-foreground">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link to="/auth/login" className="text-blue-600 hover:underline">
                Inicia sesión
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Register
