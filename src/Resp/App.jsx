import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const messages = [
    "💬 ¿En qué te ayudamos?",
    "🛠️ ¿Necesitas soporte técnico?",
    "📦 ¿Quieres cotizar un servicio?",
    "🔒 Protege tu red y tus datos",
  ];

  const [index, setIndex] = useState(0);

  // Cambia el mensaje cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased relative">
      {/* 🌐 Secciones principales */}
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

      {/* 💬 Botón flotante de WhatsApp con mensajes animados */}
      <div className="fixed bottom-6 right-6 group z-50">
        {/* Tooltip animado con cambio de texto */}
        <div
          key={index} // Forzar animación al cambiar mensaje
          className="absolute bottom-16 right-0 mb-2 px-3 py-2 
                     bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap 
                     opacity-0 translate-y-2 
                     group-hover:opacity-100 group-hover:translate-y-0 
                     transition-all duration-500 ease-out"
        >
          {messages[index]}
        </div>

        {/* Botón WhatsApp */}
        <a
          href="https://wa.me/56912345678" // ⚙️ Cambia este número al tuyo
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 
                     transition-transform transform hover:scale-110 animate-bounce"
          aria-label="Contáctanos por WhatsApp"
        >
          {/* Ícono SVG WhatsApp */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M16.58 13.28c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.46-.83-2-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.72.34-.24.27-.95.93-.95 2.26s.97 2.62 1.1 2.8c.14.18 1.9 2.9 4.6 4.06.64.28 1.14.45 1.52.58.64.2 1.22.17 1.68.1.51-.08 1.58-.64 1.8-1.25.22-.6.22-1.11.16-1.22-.06-.11-.22-.18-.49-.32zM12.04 2C6.49 2 2 6.49 2 12.04c0 1.89.49 3.73 1.42 5.36L2 22l4.73-1.39c1.58.87 3.36 1.33 5.3 1.33 5.55 0 10.04-4.49 10.04-10.04C22.07 6.49 17.58 2 12.04 2zm0 18.17c-1.64 0-3.25-.44-4.66-1.27l-.33-.2-2.8.82.82-2.73-.22-.35A8.07 8.07 0 0 1 3.93 12c0-4.46 3.64-8.1 8.1-8.1s8.1 3.64 8.1 8.1c0 4.47-3.64 8.17-8.1 8.17z" />
          </svg>
        </a>
      </div>
    </div>
  );
}



