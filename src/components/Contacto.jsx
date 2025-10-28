import React, { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${nombre}, recibimos tu mensaje: "${mensaje}"`);
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="mt-12 p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full border border-gray-300 p-2 rounded" required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 p-2 rounded" required />
        <textarea placeholder="Mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} className="w-full border border-gray-300 p-2 rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
