import { FiTwitter } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const backgroundImageUrl = "https://res.cloudinary.com/dwbxywvdw/image/upload/v1729336985/cmrbolsa/Sala_trader_con_pantalla_verde_o8zlww.jpg";

const containerStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Header = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-10-01T16:30:00"); // Ajusta la fecha del evento
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Sección de plazas limitadas con contador */}
      <div className="flex justify-center items-center w-full">
      <div className="bg-cmrbolsa text-white flex flex-col md:flex-row justify-center items-center w-full p-5">
        
        {/* Columna de texto, centrada con texto alineado a la izquierda */}
        <div className="flex-1 text-center p-4">
          <div className="inline-block text-left max-w-xl"> {/* Alina el texto a la izquierda */}
            <p className="text-2xl md:text-3xl text-black font-bold">
              Plazas limitadas
            </p>
            <p className="text-md md:text-xl">
              Tendrás 2 semanas de la sala de trading gratis 
              {/* y una sesión individual 1:1 conmigo al entrar antes de terminar el contador  */}
            </p>
          </div>
        </div>

        {/* Columna del contador */}
        <div className="flex-1 flex flex-col justify-center items-center">
          {/* Contador en fila */}
          <div className="flex space-x-4">
            <div className="bg-gray-800 text-white p-4 w-20 h-16 flex flex-col justify-center items-center rounded-lg">
              <p className="text-3xl font-bold">{timeLeft.days || 0}</p>
              <p className="text-sm">Días</p>
            </div>
            <div className="bg-gray-800 text-white p-4 w-20 h-16 flex flex-col justify-center items-center rounded-lg">
              <p className="text-3xl font-bold">{timeLeft.hours || 0}</p>
              <p className="text-sm">Horas</p>
            </div>
            <div className="bg-gray-800 text-white p-4 w-20 h-16 flex flex-col justify-center items-center rounded-lg">
              <p className="text-3xl font-bold">{timeLeft.minutes || 0}</p>
              <p className="text-sm">Minutos</p>
            </div>
            <div className="bg-gray-800 text-white p-4 w-20 h-16 flex flex-col justify-center items-center rounded-lg">
              <p className="text-3xl font-bold">{timeLeft.seconds || 0}</p>
              <p className="text-sm">Segundos</p>
            </div>
          </div>
          
          {/* Texto debajo del contador */}
          <div className="">
            <p className="text-xl md:text-2xl text-black font-bold">
              queda para el EVENTO
            </p>
          </div>
        </div>

        </div>
      </div>


      {/* Resto del contenido */}
      <div className="mb-5 bg-cover bg-center bg-no-repeat">
        <h1 className="mt-8 text-5xl font-extrabold text-black text-center sm:text-5xl">
          <span className="inline-block animate-bounce-slow">SANTANDER</span>
          <p className="text-xl font-extrabold text-center sm:text-3xl">
            <span className="text-xl text-gray-400">{"\"Evento presencial\""}</span>
          </p>
        </h1>
        <img
          className="mt-3 mb-4 mx-auto w-1/3 sm:w-1/12"
          src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727730/Boomers/Logo_a_modificar-removebg-preview_kjo5ld.png"
          alt="logo Cmrbolsa"
        />
      </div>

      {/* Sección con la imagen de fondo y overlay */}
      <div className="relative h-screen bg-white shadow p-8 md:p-36" style={containerStyle}>
        {/* Overlay para dar opacidad a la imagen de fondo */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Contenido encima del fondo */}
        <div className="relative z-10">
          <h1 className="text-white text-3xl font-extrabold text-center sm:text-7xl">
            Desarrolla <span className="text-green-500">tus habilidades</span> en los mercados
          </h1>
          <p className="text-xl font-extrabold text-center mt-5 sm:text-3xl">
            <span className="text-white">{"\"Gestiona el riesgo, toma decisiones estratégicas y alcanza resultados sostenibles\""}</span>
            <p className="text-white text-xl font-extrabold text-center mt-5 sm:text-3xl">
            Los días <span className="text-green-500">1, 2 y 3 de Octubre</span> del 2025 </p>
          </p>
          <h1 className="pt-20 text-white text-3xl font-extrabold text-center sm:text-7xl">
            MÁS <span className="text-green-500">INFO</span> PROXIMAMENTE
          </h1>
        </div>
      </div>

      {/* Sección de redes sociales */}
      <div className="flex justify-around">
        <div className="flex flex-col items-center"></div>
        <div className="flex flex-col items-center m-5">
          <img
            className="mb-3 sm:w-48 sm:h-48 w-32 h-32 object-cover rounded-full"
            src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1707692793/cmrbolsa/Foto_Carlos_fondo_verde_reduced_zwqbcf.png"
            alt="foto Cmrbolsa"
          />
          <a
            href="https://twitter.com/cmrbolsa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-black hover:text-cmrbolsa text-2xl font-bold"
          >
            <FiTwitter className="w-6 h-6" />
            <span>@cmrbolsa</span>
          </a>
        </div>
        <div className="flex flex-col items-center m-5">
          <img
            className="mb-3 sm:w-48 sm:h-48 w-32 h-32 object-cover rounded-full"
            src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1707692427/cmrbolsa/Foto_Miguel_fondo_verde_reduced_qwju3j.png"
            alt="foto Miguel Angel Sosa"
          />
          <a
            href="https://twitter.com/duricof"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-black hover:text-cmrbolsa text-2xl font-bold"
          >
            <FiTwitter className="w-6 h-6" />
            <span>@duricof</span>
          </a>
        </div>
        <div className="flex flex-col items-center m-5"></div>
      </div>
      <div className="flex flex-col items-center mt-10 mb-10">
        <p className="text-xl font-semibold mb-3 text-center">
          ¿Tienes dudas o preguntas? ¡Envíanos un mensaje por WhatsApp!
        </p>
        <a 
          href="https://wa.me/34626787673" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-colors"
        >
          <FaWhatsapp className="text-2xl" />
          Enviar mensaje
        </a>
      </div>
    </div>
  );
};

export default Header;