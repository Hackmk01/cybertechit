import React from "react";
import { ShieldCheck, Server } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight">Tecnología al servicio de tu tranquilidad</h2>
          <p className="mt-4 text-lg text-gray-600">
            En <strong>CyberTech IT Essentials</strong> brindamos soluciones integrales en soporte técnico, instalación de cámaras, redes, mantenimiento de PC y ciberseguridad. Atención a hogares y Pymes con servicio presencial y remoto.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#contacto" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-medium">Solicitar asistencia</a>
            <a href="#servicios" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-medium">Ver servicios</a>
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
            <div className="w-full h-80 rounded-lg overflow-hidden">
  <img
    src="/src/assets/hero.jpg"   // 👈 Ruta a tu imagen real
    alt="Modern tech workspace"
    className="w-full h-full object-cover"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
