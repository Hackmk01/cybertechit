import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-sm bg-gray-900 text-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/src/assets/logo6.png"
            alt="CyberTech IT Essentials"
            className="w-20 h-20 object-contain"
          />
          <div>
            <h1 className="text-lg font-bold text-gray-200">CyberTech IT Essentials</h1>
            <p className="text-sm text-gray-400">Soluciones tecnológicas para hogares y Pymes</p>
          </div>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#inicio" className="hover:text-blue-400 transition">Inicio</a>
          <a href="#servicios" className="hover:text-blue-400 transition">Servicios</a>
          <a href="#nosotros" className="hover:text-blue-400 transition">Nosotros</a>
          <a href="#portafolio" className="hover:text-blue-400 transition">Portafolio</a>
          <a href="#contacto" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:opacity-95 transition">
            Contáctanos
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-2 text-gray-200">
          <a href="#inicio" className="block hover:text-blue-400 transition">Inicio</a>
          <a href="#servicios" className="block hover:text-blue-400 transition">Servicios</a>
          <a href="#nosotros" className="block hover:text-blue-400 transition">Nosotros</a>
          <a href="#portafolio" className="block hover:text-blue-400 transition">Portafolio</a>
          <a href="#contacto" className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:opacity-95 transition">
            Contáctanos
          </a>
        </div>
      )}
    </header>
  );
}
