import React from "react";
import { Cpu, Camera, Server, ShieldCheck, Phone } from "lucide-react";

export default function Services() {
  const servicios = [
    { icon: Cpu, title: "Soporte Técnico", desc: "Diagnóstico, reparación y optimización de equipos. Servicio remoto y presencial según tu preferencia.", items: ["Asistencia remota", "Instalación de software", "Actualizaciones y respaldo"] },
    { icon: Camera, title: "Instalación de Cámaras", desc: "Sistemas de videovigilancia con cámaras IP y monitoreo móvil. Configuración segura y asesoría en ubicación.", items: ["Cámaras IP y NVR", "Monitoreo desde smartphone", "Configuración en la nube o local"] },
    { icon: Server, title: "Redes y Conectividad", desc: "Diseño e implementación de redes cableadas e inalámbricas para hogares y empresas. Optimización y seguridad de Wi‑Fi.", items: ["Diseño de topología", "Optimización de señal", "Segmentación y seguridad"] },
    { icon: Cpu, title: "Mantenimiento de PC", desc: "Limpieza física, reinstalación de sistemas operativos, mejora de rendimiento y soporte de hardware.", items: ["Limpieza y diagnóstico", "Reinstalación y optimización", "Reemplazo de componentes"] },
    { icon: ShieldCheck, title: "Ciberseguridad", desc: "Protección integral: detección y eliminación de malware, configuración de firewalls y políticas de respaldo.", items: ["Auditoría básica", "Protección anti‑malware", "Políticas de respaldo"] },
    { icon: Phone, title: "Planes de Soporte", desc: "Planes mensuales para empresas pequeñas y soluciones por visita/ticket para hogares. Flexibilidad y respuesta rápida.", items: ["Soporte por suscripción", "Atención prioritaria", "Reportes periódicos"] },
  ];

  return (
    <section id="servicios" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h3 className="text-2xl font-bold">Servicios</h3>
        <p className="mt-2 text-gray-600">Soluciones diseñadas para hogares y pequeñas empresas: rápidas, seguras y adaptadas a tu presupuesto.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicios.map((s, i) => {
            const Icon = s.icon;
            return (
              <article key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <Icon size={28} className="text-blue-600" />
                  <h4 className="text-lg font-semibold">{s.title}</h4>
                </div>
                <p className="mt-3 text-gray-600">{s.desc}</p>
                <ul className="mt-3 text-sm text-gray-500 list-disc list-inside">
                  {s.items.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
