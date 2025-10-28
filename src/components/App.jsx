import React from 'react';
import Catalogo from './components/Catalogo';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800">Servicios TI - [Tu Empresa]</h1>
        <p className="text-gray-700 mt-2">Soluciones tecnológicas profesionales para tu negocio</p>
      </header>

      <Catalogo />
      <Contacto />
    </div>
  );
}

export default App;
