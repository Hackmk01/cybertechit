import React from "react";

export default function About() {
  const cards = [
    { title: "Misión", desc: "Proveer servicios TI confiables que permitan a nuestros clientes operar con tranquilidad y seguridad." },
    { title: "Visión", desc: "Ser el socio tecnológico preferido para hogares y Pymes en nuestra zona de servicio." },
    { title: "Valores", desc: "Profesionalismo, rapidez, honestidad y enfoque en la seguridad." },
  ];

  return (
    <section id="nosotros" className="py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold">Sobre nosotros</h3>
        <p className="mt-4 text-gray-600">
          En <strong>CyberTech IT Essentials</strong> creemos que la tecnología debe facilitar tu día a día. Somos un equipo con experiencia en soluciones prácticas y seguras para hogares y pequeñas empresas.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="font-semibold">{c.title}</div>
              <p className="text-sm text-gray-500 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
