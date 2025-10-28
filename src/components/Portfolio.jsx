import React from "react";
import proyecto1 from "../assets/proyecto1.jpg";
import proyecto2 from "../assets/proyecto2.jpeg";
import proyecto3 from "../assets/proyecto3.jpeg";

export default function Portfolio() {
  const proyectos = [
    { title: "Instalación de red Wi‑Fi - Santiago Centro", desc: "Diseño de red para oficina de 25 empleados, mejora de cobertura y segmentación de equipos.", img: proyecto1 },
    { title: "Implementación de cámaras IP - Pyme", desc: "Sistema de vigilancia con acceso remoto y respaldo local de grabaciones.", img: proyecto2 },
    { title: "Mantenimiento y optimización - Cliente residencial", desc: "Limpieza, reinstalación y actualización de software para mejorar la velocidad del equipo.", img: proyecto3 },
  ];

  return (
    <section id="portafolio" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h3 className="text-2xl font-bold">Portafolio</h3>
        <p className="mt-2 text-gray-600">Proyectos recientes donde hemos entregado soluciones a medida.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {proyectos.map((p, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="font-semibold">{p.title}</div>
                <p className="text-sm text-gray-500 mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

