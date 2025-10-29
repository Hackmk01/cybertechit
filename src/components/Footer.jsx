import React from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gray-900 text-gray-200 py-10 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Logo y descripción */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">CT</div>
            <div>
              <div className="font-semibold text-white">CiberTech IT Essentials</div>
              <div className="text-sm text-gray-400">Soluciones tecnológicas para hogares y Pymes</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            © {new Date().getFullYear()} CiberTech IT Essentials. Todos los derechos reservados.
          </p>
        </div>

        {/* Columna 2: Servicios con links internos */}
        <div>
          <h4 className="font-semibold text-white mb-2">Servicios</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Soporte Técnico</a></li>
            <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Instalación de Cámaras</a></li>
            <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Redes y Conectividad</a></li>
            <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Mantenimiento de PC</a></li>
            <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Ciberseguridad</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto con enlaces */}
        <div>
          <h4 className="font-semibold text-white mb-2">Contacto</h4>
          <div className="text-sm text-gray-400 space-y-3">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-blue-400" />
              <a href="mailto:cybertechitessentials@gmail.com" className="hover:text-blue-400 transition-colors">
                soporte@cibertechit.cl
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-blue-400" />
              <a href="tel:+56945409091" className="hover:text-blue-400 transition-colors">
                +56 9 4540 9091
              </a>
            </div>
            <a href="#contacto" className="inline-block mt-3 text-blue-400 hover:text-blue-300 font-medium">
              Ir a formulario de contacto →
            </a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}
