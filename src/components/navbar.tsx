import { Avatar, AvatarImage } from "@/components/ui/avatar"
import imageBlack from '../../public/image-black.jpg'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <header className="mb-3">
      <nav className="bg-gray-900 py-1 text-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <Avatar className="cursor-pointer h-14 w-14">
            <AvatarImage src={imageBlack} className="h-14 w-14 object-cover" />
          </Avatar>
          <ul className="flex space-x-6 items-center">
            <li>
              <a className="hover:text-blue-400 font-medium transition-colors" href="#">
                Inicio
              </a>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-gray-100 hover:text-blue-400 font-medium transition-colors">
                      Turnos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white text-gray-900 rounded shadow-lg p-2 min-w-[180px]">
                      <a
                        href="#"
                        className="block px-4 py-2 rounded hover:bg-blue-100 transition-colors"
                      >
                        Ver Turnos
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 rounded hover:bg-blue-100 transition-colors"
                      >
                        Solicitar Turno
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 rounded hover:bg-blue-100 transition-colors"
                      >
                        Historial
                      </a>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <a className="hover:text-blue-400 font-medium transition-colors" href="#">
                Tienda
              </a>
            </li>
            <li>
              <a className="hover:text-blue-400 font-medium transition-colors" href="#">
                Contacto
              </a>
            </li>
          </ul>
          <div className="flex space-x-3 ml-6">
            <Button variant={"destructive"} className=" hover:bg-blue-900 text-white px-4 py-2 rounded transition-colors">
              Sign Up
            </Button>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors">
              Sign In
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
