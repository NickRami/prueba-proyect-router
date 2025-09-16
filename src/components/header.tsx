import { Button } from "@/components/ui/button";

const HeaderContent = () => {
  return (
    <header className="bg-gradient-to-br from-pink-50 via-white to-rose-50 my-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        {/* Texto + CTA */}
        <div className="flex flex-col items-center md:items-start justify-center px-8 py-16 text-center md:text-left space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 drop-shadow-lg">
            Luce increíble, <br /> siéntete mejor
          </h1>
          <p className="max-w-lg text-gray-700 text-lg md:text-xl font-medium tracking-wide">
            Servicios profesionales de peluquería, coloración y cuidado personal que realzan tu belleza natural.
          </p>
          <Button className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 hover:from-pink-700 hover:via-rose-700 hover:to-red-700 text-white px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 font-semibold text-lg">
            Agenda tu cita
          </Button>
        </div>

        {/* Imagen */}
        <div className="hidden md:block relative overflow-hidden rounded-l-3xl shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1319462/pexels-photo-1319462.jpeg"
            alt="Salón de belleza"
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          {/* Opcional: overlay oscuro para mejor contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </header>
  );
};

export default HeaderContent;
