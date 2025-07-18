import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Roberto R.',
      role: 'Funcionario',
      text: 'Este curso cambió completamente mi perspectiva sobre el mercado. Debo seguir preparandome pero ahora entiendo lo que pasa dentro del mercado.',
      rating: 5
    },
    {
      name: 'Raquel G.',
      role: 'Sector Aviación',
      text: 'La operativa en directo es excepcional. El contenido es abrumador y muy práctico y aplicable si estudias y te lo curras.',
      rating: 5
    },
    {
      name: 'Primitivo P.',
      role: 'Fisioterapeuta',
      text: 'Sin duda es la manera de poder conseguir ganar en los mercados, sin duda seguire aprendiendo con ellos.',
      rating: 5
    },
    {
      name: 'Adrian L.',
      role: 'Funcionario',
      text: 'La formación, la sala, el taller y sobre todo la operativa son increibles, si a eso a miguel y a carlos ya la experiencia es maravillosa.',
      rating: 5
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#328077]">Opiniones de nuestros alumnos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-[#328077]">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;