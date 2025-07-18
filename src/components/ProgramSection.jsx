import React from 'react';

const ProgramSection = () => {
  const modules = [
    'Bienvenida y objetivo del taller PEV',
    'Análisis de Precio, Volumen y Estructura (PEV)',
    'Operativa en directo en todo el evento',
    'Entradas pasivas ya activas',
    'Gestión emocional y monetaria'
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#328077]">Programa del Taller</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-9 text-[#328077]">Módulos principales</h3>
            <ul className="space-y-4">
              {modules.map((module, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-yellow-500 text-[#328077] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</span>
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 p-5 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3 text-[#328077]">Detalles prácticos</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#328077]">📍 Ubicación</h4>
                <p>Joaquín Costa | 39005 Santander | Cantabria</p>
              </div>
              <div>
                <h4 className="font-bold text-[#328077]">📅 Fechas</h4>
                <p>1, 2 y 3 de Octubre de 2025</p>
              </div>
              <div>
                <h4 className="font-bold text-[#328077]">⏰ Horario</h4>
                <p>Martes a Jueves: 16:30-21:00<br />Jueves: Apuntarse a la cena final  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;