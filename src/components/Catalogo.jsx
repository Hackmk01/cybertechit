import React from 'react';
import ServicioCard from './ServicioCard';
import { FaLaptopCode, FaNetworkWired, FaShieldAlt, FaTools } from 'react-icons/fa';

const servicios = [
  { titulo: 'Soporte Técnico', descripcion: 'Asistencia remota y presencial.', icono: <FaLaptopCode /> },
  { titulo: 'Instalación de Redes', descripcion: 'Configuración de LAN/WAN y WiFi.', icono: <FaNetworkWired /> },
  { titulo: 'Seguridad Informática', descripcion: 'Firewall, antivirus y protección de datos.', icono: <FaShieldAlt /> },
  { titulo: 'Mantenimiento de Hardware', descripcion: 'Revisión y reparación de PCs y servidores.', icono: <FaTools /> },
];

const Catalogo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {servicios.map((servicio, index) => (
        <ServicioCard key={index} {...servicio} />
      ))}
    </div>
  );
};

export default Catalogo;
