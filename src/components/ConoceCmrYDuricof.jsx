import React from 'react';

const ConoceCmrYDuricof = () => {
  return (
    <div className="bg-gray-100 flex flex-col space-y-16 px-5 py-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Sección Carlos Martín: Texto izquierda, GIF derecha */}
        <div className="flex flex-col md:flex-row justify-center items-center text-black">
          {/* Texto Carlos */}
          <div className="flex-1 p-5">
            <p className="text-xl md:text-3xl font-bold mb-4">Conoce a Carlos Martín (@cmrbolsa)</p>
            <p className="text-base md:text-lg max-w-xl mb-4">
              Soy canario, de Gran Canaria, y llevo más de 19 años en los mercados financieros. Me dedico a tradear cada día en el SP 500, acciones y, ocasionalmente, divisas y criptos.
            </p>
            <p className="text-base md:text-lg max-w-xl">
              He formado a más de 250 alumnos con el enfoque de precio, volumen y estructura, que utilizo a diario para mi operativa. Si quieres entender cómo se mueven los mercados y aplicar ese conocimiento con efectividad, este taller es para ti.
            </p>
          </div>

          {/* GIF Carlos */}
          <div className="flex-1 flex justify-center p-5">
            <img
              src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1707864716/cmrbolsa/Presentacion-de-formaciones-de-cmrbolsa-high-1_tawnht.gif"
              alt="Gráfico de cmrbolsa"
              className="w-full max-w-sm rounded-xl"
            />
          </div>
        </div>

        {/* Sección Miguel Ángel Sosa: GIF izquierda, Texto derecha en PC */}
        <div className="flex flex-col md:flex-row-reverse justify-center items-center text-black">
          {/* Texto Miguel */}
          <div className="flex-1 p-5">
            <p className="text-xl md:text-3xl font-bold mb-4">Conoce a Miguel Ángel Sosa (@duricof)</p>
            <p className="text-base md:text-lg max-w-xl mb-4">
              Canario de Gran Canaria, se formó con Carlos Martín (cmrbolsa) desde hace más de 3 años. Desde 2022, ayuda a traders a comprender el mercado usando el método PEV.
            </p>
            <p className="text-base md:text-lg max-w-xl">
              Destaca por su paciencia, humildad y constancia. Lidera la Sala de Trading aplicando el método con resultados consistentes cada semana.
            </p>
          </div>

          {/* GIF Miguel */}
          <div className="flex-1 flex justify-center p-5">
            <img
              src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/6b4f5e38-5fb1-444f-89b7-d7da2ee3690f.gif?ClientID=sulu&Date=1737658382&Signature=b408f9b97f96a8dc0f3f8e3def72c91764f7dddb"
              alt="Gráfico de duricof"
              className="w-full max-w-sm rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConoceCmrYDuricof;
