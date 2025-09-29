import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const HeaderContent = () => {
  return (
    <header className="h-screen sm:px-10 lg:py-6   lg:px-6 flex items-center">
  <div className="max-w-7xl mx-auto grid grid-cols-1 place-items-center md:grid-cols-2 h-full  gap-8 ">
    
    {/* Texto + CTA */}
    <div className="flex flex-col items-center md:items-start justify-center px-8 py-16 text-center md:text-left space-y-6">
      
      {/* Nombre de la peluquería */}
      <span className="text-pink-600 uppercase tracking-widest font-semibold text-sm md:text-base">
        Black Peluquería & Barbería
      </span>

      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 drop-shadow-lg">
        Luce increíble, <br /> siéntete mejor
      </h1>

      <p className="max-w-lg text-gray-700 text-lg md:text-xl font-medium tracking-wide">
        Servicios profesionales de peluquería, coloración y cuidado personal que realzan tu belleza natural.
      </p>

      <Button className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 hover:from-pink-700 hover:via-rose-700 hover:to-red-700 text-white px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 font-semibold text-lg">
        <Scissors className="w-5 h-5" />
         <Link to="/contacto" className="ml-2"> Reserva tu turno</Link> 
      </Button>

    </div>

    {/* Imagen */}
   <div className="relative w-full   sm:mb-10 aspect-[4/3] md:aspect-auto md:w-full md:h-full max-h-[700px] overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none shadow-2xl">
  <img
    src="https://images.pexels.com/photos/11169551/pexels-photo-11169551.jpeg"
    alt="Salón de belleza"
    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
    loading="lazy"
    decoding="async"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
</div>


  </div>
</header>

  );
};

export default HeaderContent; 
