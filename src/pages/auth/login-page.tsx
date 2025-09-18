
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            Iniciar Sesión
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input
            name="username"
            placeholder="Correo o nombre de usuario"
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Contraseña"
            required
          />
          <Button className="w-full">Iniciar sesión</Button>

          <div className="relative text-center my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700" />
            </div>
            <div className="relative bg-white dark:bg-gray-950 px-2 text-sm text-gray-500 dark:text-gray-400">
              o continúa con
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <FcGoogle size={20} />
            Iniciar sesión con Google
          </Button>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 items-center text-sm text-muted-foreground">
          <a href="#" className="hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
          <p>
            ¿No tienes cuenta?{" "}
            <Link to="/auth/register" className="text-blue-600 hover:underline">
              Regístrate
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;