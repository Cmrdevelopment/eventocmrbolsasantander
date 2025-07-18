import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '📈',
      title: 'Aprenderás a indetificar la manipulación ',
      description: 'Aprende a interpretar gráficos y entradas al mercado'
    },
    {
      icon: '💰',
      title: 'Operativa en directo',
      description: 'Estrategias para maximizar ganancias y minimizar riesgos'
    },
    {
      icon: '🧠',
      title: 'Eminentemente práctico',
      description: 'Trabajaras con nosotros para que aprendas de verdad'
    }
  ];


  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#328077]">¿Qué aprenderás en este curso PRESENCIAL?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-cmrbolsa transition duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#328077]">{benefit.title}</h3>
              <p className="text-cmrbolsa">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;