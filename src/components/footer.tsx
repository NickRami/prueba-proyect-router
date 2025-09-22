import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-rose-900 to-red-900 text-gray-100 py-14 px-4 md:px-10 relative overflow-hidden ">
      {/* Círculos decorativos suaves */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-red-800 rounded-full blur-3xl opacity-20"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-[28rem] h-[28rem] bg-rose-900 rounded-full blur-3xl opacity-15"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Logo y descripción */}
        <div className="space-y-5">
          <h2 className="text-2xl font-extrabold tracking-tight text-red-400 drop-shadow-sm">
            Black Peluquería & Barbería
          </h2>
          <p className="text-red-200 max-w-xs leading-relaxed font-medium">
            Donde la belleza y el estilo se unen para transformar tu look y elevar tu confianza.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="text-red-300 hover:text-white transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-red-300 hover:text-white transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-red-300 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="YouTube" className="text-red-300 hover:text-white transition-colors">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-red-800 pb-2 tracking-wide">
            Enlaces rápidos
          </h3>
          <ul className="space-y-2 text-red-200 text-base font-medium">
            <li>
              <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-white transition-colors">Galería</a>
            </li>
            <li>
              <a href="#equipo" className="hover:text-white transition-colors">Equipo</a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-red-800 pb-2 tracking-wide">
            Contáctanos
          </h3>
          <address className="not-italic space-y-2 text-red-200 font-medium text-base leading-relaxed">
            <p>📍 Calle Belleza 123, Ciudad</p>
            <p>📞 +1 234 567 890</p>
            <p>✉️ contacto@salonbelleza.com</p>
          </address>
        </div>

        {/* Newsletter / Horarios */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-red-800 pb-2 tracking-wide">
            Horarios
          </h3>
          <p className="text-red-200 mb-6 text-base font-medium leading-relaxed">
            Lunes a Viernes: 9:00 AM – 7:00 PM <br />
            Sábado: 10:00 AM – 5:00 PM
          </p>
          <form className="flex flex-col space-y-3">
            <label htmlFor="email" className="sr-only">
              Suscríbete a nuestro newsletter
            </label>
            <input
              type="email"
              id="email"
              placeholder="Tu correo electrónico"
              className="px-4 py-2 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-red-400 bg-white shadow"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-full py-2 font-semibold text-white shadow transition-transform hover:scale-105 duration-200"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-red-800 pt-6 text-center text-red-300 text-sm relative z-10 max-w-7xl mx-auto px-4 md:px-8 select-none">
        © {new Date().getFullYear()} Black Peluqueria & Barberia . Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;