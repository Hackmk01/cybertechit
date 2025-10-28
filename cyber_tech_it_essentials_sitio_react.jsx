import React from "react";
import { Mail, Phone, MapPin, ShieldCheck, Server, Camera, Cpu } from 'lucide-react';

// Componente React de una sola página para CyberTech IT Essentials
// Requisitos: Proyecto React con Tailwind CSS configurado.
// Instrucciones: Copia este archivo como `App.jsx` o `Home.jsx` en tu proyecto.

export default function CyberTechSite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      {/* NAV */}
      <header className="shadow-sm bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">CT</div>
              <div>
                <h1 className="text-lg font-semibold">CyberTech IT Essentials</h1>
                <p className="text-sm text-gray-500">Soluciones tecnológicas para hogares y Pymes</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#inicio" className="hover:text-blue-600">Inicio</a>
              <a href="#servicios" className="hover:text-blue-600">Servicios</a>
              <a href="#nosotros" className="hover:text-blue-600">Nosotros</a>
              <a href="#portafolio" className="hover:text-blue-600">Portafolio</a>
              <a href="#contacto" className="text-white bg-blue-600 px-4 py-2 rounded-md hover:opacity-95">Contáctanos</a>
            </nav>
            <div className="md:hidden">{/* mobile menu placeholder */}
              <button aria-label="Abrir menú" className="p-2 border rounded-md">☰</button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Tecnología al servicio de tu tranquilidad</h2>
            <p className="mt-4 text-lg text-gray-600">En <strong>CyberTech IT Essentials</strong> brindamos soluciones integrales en soporte técnico, instalación de cámaras, redes, mantenimiento de PC y ciberseguridad. Atención a hogares y Pymes con servicio presencial y remoto.</p>

            <div className="mt-6 flex gap-4">
              <a href="#contacto" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-medium">Solicitar asistencia</a>
              <a href="#servicios" className="inline-block border border-gray-200 px-5 py-3 rounded-md text-gray-700">Ver servicios</a>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-blue-600" />
                <div>
                  <div className="font-semibold">Ciberseguridad</div>
                  <div className="text-gray-500">Protegemos tus datos y dispositivos.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Server size={20} className="text-blue-600" />
                <div>
                  <div className="font-semibold">Redes y Conectividad</div>
                  <div className="text-gray-500">Wi‑Fi estable y configuración segura.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <div className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center">
              {/* Imagen / mockup */}
              <div className="text-center text-gray-400">[Imagen / Mockup profesional]</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-bold">Servicios</h3>
          <p className="mt-2 text-gray-600">Soluciones diseñadas para hogares y pequeñas empresas: rápidas, seguras y adaptadas a tu presupuesto.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <Cpu size={28} className="text-blue-600" />
                <h4 className="text-lg font-semibold">Soporte Técnico</h4>
              </div>
              <p className="mt-3 text-gray-600">Diagnóstico, reparación y optimización de equipos. Servicio remoto y presencial según tu preferencia.</p>
              <ul className="mt-3 text-sm text-gray-500 list-disc list-inside">
                <li>Asistencia remota</li>
                <li>Instalación de software</li>
                <li>Actualizaciones y respaldo</li>
              </ul>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <Camera size={28} className="text-blue-600" />
                <h4 className="text-lg font-semibold">Instalación de Cámaras</h4>
              </div>
              <p className="mt-3 text-gray-600">Sistemas de videovigilancia con cámaras IP y monitoreo móvil. Configuración segura y asesoría en ubicación.</p>
              <ul className="mt-3 text-sm text-gray-500 list-disc list-inside">
                <li>Cámaras IP y NVR</li>
                <li>Monitoreo desde smartphone</li>
                <li>Configuración en la nube o local</li>
              </ul>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <Server size={28} className="text-blue-600" />
                <h4 className="text-lg font-semibold">Redes y Conectividad</h4>
              </div>
              <p className="mt-3 text-gray-600">Diseño e implementación de redes cableadas e inalámbricas para hogares y empresas. Optimización y seguridad de Wi‑Fi.</p>
              <ul className="mt-3 text-sm text-gray-500 list-disc list-inside">
                <li>Diseño de topología</li>
                <li>Optimización de señal</li>
                <li>Segmentación y seguridad</li>
              </ul>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <Cpu size={28} className="text-blue-600" />
                <h4 className="text-lg font-semibold">Mantenimiento de PC</h4>
              </div>
              <p className="mt-3 text-gray-600">Limpieza física, reinstalación de sistemas operativos, mejora de rendimiento y soporte de hardware.</p>
              <ul className="mt-3 text-sm text-gray-500 list-disc list-inside">
                <li>Limpieza y diagnóstico</li>
                <li>Reinstalación y optimización</li>
                <li>Reemplazo de componentes</li>
              </ul>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <ShieldCheck size={28} className="text-blue-600" />
                <h4 className="text-lg font-semibold">Ciberseguridad</h4>
              </div>
              <p className="mt-3 text-gray-600">Protección integral: detección y eliminación de malware, configuración de firewalls y políticas de respaldo.</p>
              <ul className="mt-3 text-sm text-gray-500 list-disc list-inside">
                <li>Auditoría básica</li>
                <li>Protección anti‑malware</li>
                <li>Políticas de respaldo</li>
              </ul>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <Phone size={28} className="text-blue-600" />
                <h4 className="text-lg font-semibold">Planes de Soporte</h4>
              </div>
              <p className="mt-3 text-gray-600">Planes mensuales para empresas pequeñas y soluciones por visita/ticket para hogares. Flexibilidad y respuesta rápida.</p>
              <ul className="mt-3 text-sm text-gray-500 list-disc list-inside">
                <li>Soporte por suscripción</li>
                <li>Atención prioritaria</li>
                <li>Reportes periódicos</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" className="py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold">Sobre nosotros</h3>
          <p className="mt-4 text-gray-600">En <strong>CyberTech IT Essentials</strong> creemos que la tecnología debe facilitar tu día a día. Somos un equipo con experiencia en soluciones prácticas y seguras para hogares y pequeñas empresas. Nuestro enfoque es ofrecer atención personalizada, tiempos de respuesta claros y resultados medibles.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="font-semibold">Misión</div>
              <p className="text-sm text-gray-500 mt-2">Proveer servicios TI confiables que permitan a nuestros clientes operar con tranquilidad y seguridad.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="font-semibold">Visión</div>
              <p className="text-sm text-gray-500 mt-2">Ser el socio tecnológico preferido para hogares y Pymes en nuestra zona de servicio.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="font-semibold">Valores</div>
              <p className="text-sm text-gray-500 mt-2">Profesionalismo, rapidez, honestidad y enfoque en la seguridad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portafolio" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-bold">Portafolio</h3>
          <p className="mt-2 text-gray-600">Proyectos recientes donde hemos entregado soluciones a medida.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-40 bg-gray-100 flex items-center justify-center">[Imagen proyecto]</div>
              <div className="p-4">
                <div className="font-semibold">Instalación de red Wi‑Fi - Santiago Centro</div>
                <p className="text-sm text-gray-500 mt-2">Diseño de red para oficina de 25 empleados, mejora de cobertura y segmentación de equipos.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-40 bg-gray-100 flex items-center justify-center">[Imagen proyecto]</div>
              <div className="p-4">
                <div className="font-semibold">Implementación de cámaras IP - Pyme</div>
                <p className="text-sm text-gray-500 mt-2">Sistema de vigilancia con acceso remoto y respaldo local de grabaciones.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-40 bg-gray-100 flex items-center justify-center">[Imagen proyecto]</div>
              <div className="p-4">
                <div className="font-semibold">Mantenimiento y optimización - Cliente residencial</div>
                <p className="text-sm text-gray-500 mt-2">Limpieza, reinstalación y actualización de software para mejorar la velocidad del equipo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold">Contáctanos</h3>
            <p className="mt-2 text-gray-600">¿Necesitas ayuda ahora? Escríbenos y nos contactamos contigo a la brevedad.</p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" className="mt-1 block w-full border border-gray-200 rounded-md p-2" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Correo</label>
                <input type="email" className="mt-1 block w-full border border-gray-200 rounded-md p-2" placeholder="correo@ejemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Teléfono / WhatsApp</label>
                <input type="text" className="mt-1 block w-full border border-gray-200 rounded-md p-2" placeholder="+56 9 1234 5678" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea className="mt-1 block w-full border border-gray-200 rounded-md p-2" rows={4} placeholder="Cuéntanos tu necesidad..."></textarea>
              </div>
              <div>
                <button type="button" className="bg-blue-600 text-white px-5 py-2 rounded-md">Enviar mensaje</button>
              </div>
            </form>

            <div className="mt-6 text-sm text-gray-600 space-y-2">
              <div className="flex items-center gap-2"><MapPin size={16} /> Dirección: <span className="font-medium ml-2">(Agregar dirección)</span></div>
              <div className="flex items-center gap-2"><Mail size={16} /> Email: <span className="font-medium ml-2">contacto@cybertechitessentials.com</span></div>
              <div className="flex items-center gap-2"><Phone size={16} /> Tel: <span className="font-medium ml-2">+56 9 1234 5678</span></div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h4 className="font-semibold">¿Necesitas asistencia rápida?</h4>
            <p className="text-sm text-gray-600 mt-2">Ofrecemos soporte remoto y visitas programadas. Contrata un plan o solicita servicio por caso.</p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="font-semibold">Plan Básico - Ideal para hogares</div>
                <div className="text-sm text-gray-500 mt-1">Soporte por ticket y revisiones anuales.</div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="font-semibold">Plan Pyme - Soporte prioritario</div>
                <div className="text-sm text-gray-500 mt-1">Soporte mensual, atención prioritaria y mantenimiento preventivo.</div>
              </div>
            </div>

            <div className="mt-6">
              <a href="#servicios" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md">Ver servicios</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">CT</div>
              <div>
                <div className="font-semibold">CyberTech IT Essentials</div>
                <div className="text-sm text-gray-400">Soluciones tecnológicas para hogares y Pymes</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400">© {new Date().getFullYear()} CyberTech IT Essentials. Todos los derechos reservados.</p>
          </div>

          <div>
            <div className="font-semibold">Servicios</div>
            <ul className="mt-2 text-sm text-gray-400 space-y-2">
              <li>Soporte Técnico</li>
              <li>Instalación de Cámaras</li>
              <li>Redes y Conectividad</li>
              <li>Mantenimiento de PC</li>
              <li>Ciberseguridad</li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Contacto</div>
            <div className="mt-2 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Mail size={14} /> cybertechitessentials@gmail.com</div>
              <div className="flex items-center gap-2 mt-2"><Phone size={14} /> +56 9 45409091</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
