import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado:\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nMensaje: ${formData.mensaje}`);
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold">Contáctanos</h3>
          <p className="mt-2 text-gray-600">¿Necesitas ayuda ahora? Escríbenos y nos contactamos contigo a la brevedad.</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input name="nombre" value={formData.nombre} onChange={handleChange} required type="text" placeholder="Tu nombre" className="block w-full border border-gray-200 rounded-md p-2"/>
            <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="correo@ejemplo.com" className="block w-full border border-gray-200 rounded-md p-2"/>
            <input name="telefono" value={formData.telefono} onChange={handleChange} required type="text" placeholder="+56 9 1234 5678" className="block w-full border border-gray-200 rounded-md p-2"/>
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required rows={4} placeholder="Cuéntanos tu necesidad..." className="block w-full border border-gray-200 rounded-md p-2"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-md">Enviar mensaje</button>
          </form>
          <div className="mt-6 text-sm text-gray-600 space-y-2">
            <div className="flex items-center gap-2"><MapPin size={16} /> Dirección: <span className="font-medium ml-2">Pasaje Parque del Peumo #02774</span></div>
            <div className="flex items-center gap-2"><Mail size={16} /> Email: <span className="font-medium ml-2">      cybertechitessentials@gmail.com</span></div>
            <div className="flex items-center gap-2"><Phone size={16} /> Tel: <span className="font-medium ml-2">       +56 9 45409091</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

