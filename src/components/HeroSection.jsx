import React from 'react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-01T16:30:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center text-white py-20 px-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dwbxywvdw/image/upload/v1729336985/cmrbolsa/Sala_trader_con_pantalla_verde_o8zlww.jpg')",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-45"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-6">
          Domina los Mercados Financieros <br/>Taller Presencial Intensivo
        </h1>
        <p className="text-base md:text-xl mb-8">
          3 días en vivo con traders profesionales, estrategias de intradía y acciones, <br/>todas las herramientas reales para operar 
        </p>

        {/* Contador */}
        <p className="mb-4 text-2xl font-semibold">
          ¡Solo quedan ... !
        </p>
        <div className="flex justify-center items-center flex-wrap gap-3 mb-6">
          {[
            { label: 'Días', value: timeLeft.days },
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-cmrbolsa bg-opacity-70 text-white font-bold p-3 w-20 h-20 flex flex-col justify-center items-center rounded-xl shadow-md"
            >
              <span className="text-2xl font-bold">{item.value}</span>
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>
        <a
          href="#precios"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-[#328077] font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
        >
          ¡Reserva tu plaza ahora!
        </a>
        <div className='mt-5 flex justify-center mb-2'>
      <p className="text-3xl font-bold">
          PLAZAS LIMITADAS
        </p>
        </div>
        <p>
        <span className='text-xl'>1er taller presencial de MERCADOS FINANCIEROS en <span className='font-bold'>SANTANDER </span></span>
        </p>
      
      </div>
      
    </div>
  );
};

export default HeroSection;
