import React from 'react';

const ServicioCard = ({ titulo, descripcion, icono }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl mb-4">{icono}</div>
      <h3 className="text-2xl font-bold mb-2">{titulo}</h3>
      <p className="text-gray-700">{descripcion}</p>
    </div>
  );
};

export default ServicioCard;
