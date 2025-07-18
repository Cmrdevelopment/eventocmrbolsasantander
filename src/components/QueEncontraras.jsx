const QueEncontraras = () => {

    return (
        <>
        <div className="flex justify-center items-center">
            <div className=" bg-gris text-black flex flex-col md:flex-row justify-center items-center w-full p-5"> 
                {/* Columna de la izquierda */}
                <div className="flex-1 flex flex-col justify-center items-center text-center p-5">
                <p className="text-xl md:text-3xl font-bold mb-4">¿Que encontrarás en este TALLER?</p>
                <p className="text-xl md:text-2xl mb-4">Tres días de aprendizaje y operativa:</p>
             {/* Imagen del gráfico debajo del texto */}
             <img src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1707864418/cmrbolsa/smartmockups_kxxv44a5-bis-a-bis_reduced_rpkost.jpg" alt="Gráfico de cmrbolsa" className="w-full max-w-xs md:max-w-xs mt-3 rounded-xl" />
            </div>

            {/* Columna de la derecha */}
            <div className="flex-1 ">
                <p className="text-lg md:text-xl max-w-2xl mb-5">
                <span className="font-bold">Taller 1er día</span> {'>'} Aprenderás todo lo relacionado con el precio desde básico hasta avanzado entndiendo cómo se forman los soportes, resistencias y directrices haciendo hincapie en las confluencias y en las claviculares. Empezaremos a conocer el volumen de manera básica.
                </p>
                
                <p className="text-lg md:text-xl max-w-2xl mb-5">
                <span className="font-bold">Taller 2ª día</span> {'>'} Profundizaremos en el volumen desde todos los puntos de vistas. Veremos donde se forman procesos de acumulación, compras para parar, redistribuciones y sin demanda entre otros conceptos avanzados. Comprenderemos la esencia de la estructura para prepararnos para el 3er día.
                </p>

                <p className="text-lg md:text-xl max-w-2xl mb-5">
                <span className="font-bold">Taller 3er día</span> {'>'} Nos adentraremos en la estructura, profundizaremos en las zonas donde el profesional debe aparecer. Avanzaremos en las claviculares como elemento esencial en la operativa junto con la importancia de los truños y los huevos fritos para conocer hasta donde llegan los engaños y sus aplicaciones. 
                </p>
            </div>            
        </div>            
        </div>
        </>
    )
}

export default QueEncontraras;