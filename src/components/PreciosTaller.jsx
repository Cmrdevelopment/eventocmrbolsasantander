import { FaCheck } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const handleTallerClick = () => {
  window.location.href = 'https://mentoriapev.com/finalizar-compra/?add-to-cart=6123';
};

const PreciosTalleres = () => {
  return (
    <>
      <div className="md:mt-7">
        <div id="opcionesMembresia" className="pl-3 pr-3 font-bold text-center mt-5">
          <h1 className="xl:text-6xl text-3xl font-bold">¿Te vienes al taller?</h1>
          <div className="m-5">
            <p>
              Apúntate al <span className="text-cmrbolsa">TALLER de 3 días</span> donde estaremos aprendiendo a analizar el mercado a través del PEV
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
      {/* Segunda tabla */}
      <div className="border-2 border-black md:w-2/6 m-5 md:m-0">
        <div>
          <h1 className="md:text-3xl text-2xl font-bold m-5 text-center">TALLER 3 días, 1, 2 y 3 de OCTUBRE</h1>
          <h1 className="flex justify-center items-center font-semibold text-white bg-cmrbolsa md:text-2xl text-md">
            3 días de taller
          </h1>
          <h5 className="text-lg bg-cmrbolsa text-white md:h-9 h-20 p-2 md:pb-9 text-center">
          Participa del  <span className="text-black font-bold">taller de 3 días </span> y vive la operativa en directo
          </h5>

          {/* Contenedor flexible para "Ahora" y el precio */}
          <div className="flex flex-col text-center">
            <h2 className="text-xl font-bold text-cmrbolsa mt-5">Ahora</h2>
            <h2 className="md:text-7xl text-5xl font-bold text-cmrbolsa text-center">
              295,00
              <span className="text-2xl text-cmrbolsa font-bold"> €</span>
            </h2>
          </div>

          {/* Precios tachados */}
          <h2 className="md:text-xl text-md font-bold text-cmrbolsa text-center ml-5 mr-5 mt-1">
            {/* <span className="line-through text-gray-300">195,00 €</span>
            <span className="ml-3 line-through text-gray-300">225,00 €</span>
            <span className="ml-3 line-through text-gray-300">260,00 €</span> */}
            <span className="ml-3 text-cmrbolsa">295,00 €</span>
            <span className="ml-3 line-through text-gray-300">325,00 €</span>
            <span className="ml-3 line-through text-gray-300">380,00 €</span>
            <span className="ml-3 line-through text-gray-300">435,00 €</span>
          </h2>

          <h5 className="mt-2 font-semibold mb-5 w-full text-center">
            <h5 className="mt-2 font-semibold mb-5 w-full max-w-xl mx-auto text-center">
              Si te apuntas antes del 17 de Agosto 2025 pagas <span className="text-cmrbolsa text-2xl font-bold">SOLO 295 €</span>
            </h5>
            <h5 className="mt-2 font-semibold mb-5 w-full max-w-xl mx-auto text-center">
              A partir del 17 de Agosto el precio aumentará cada semana
            </h5>
          </h5>
        </div>

        <div className="flex flex-col items-center gap-5">
          <h5 className="text-2xl text-white font-semibold bg-cmrbolsa w-full p-2 text-center">¿Qué incluye?</h5>
          
          <h3 className="flex items-center md:gap-2 gap-1">
            <FaCheck /> Pre-talleres básicos on line
          </h3>
          <h3 className="flex items-center md:gap-2 gap-1">
            <FaCheck /> 3 días de talleres presencial 1, 2 y 3 de Octubre
          </h3>
          <h3 className="flex items-center md:gap-2 gap-1">
            <FaCheck /> Horario aproximado 16:30 a 21:00 horas
          </h3>
          <h3 className="flex items-center md:gap-2 gap-1">
            <FaCheck /> Mercado en vivo y operativa
          </h3>
          <h3 className="flex items-center md:gap-2 gap-1">
            <FaCheck /> Incluye 2 semanas de sala de trading
          </h3>
          <h3 className="flex items-center md:gap-2 gap-1">
            <FaCheck /> Curso básico de bolsa
          </h3>
          
          <button onClick={handleTallerClick} className="boton_reserva bg-cmrbolsa uppercase">
            Me apunto
          </button>
        </div>
        <div className="text-center">
            <h5 className="mt-2 font-bold w-full max-w-xl mx-auto">
              🍽️ Cierre Perfecto: Cena Exclusiva del Evento 🍷
            </h5>
            <p className="p-2 mb-2">
              No te pierdas la cena final del evento. <span className="font-semibold">Una oportunidad perfecta para compartir</span>, disfrutar y cerrar con broche de oro. ¡Apúntate y celebra con nosotros! 🥂✨
            </p>
        </div>
      </div>
      
      </div>

      <div className="flex flex-col items-center mt-10">
        <p className="text-xl font-semibold mb-3 text-center">
          ¿Tienes dudas o preguntas? ¡Envíanos un mensaje por WhatsApp!
        </p>
        <a
          href="https://wa.me/34626787673"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-colors mb-10"
        >
          <FaWhatsapp className="text-2xl" />
          Enviar mensaje
        </a>
      </div>
    </>
  );
};

export default PreciosTalleres;
