"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    initials: "R.B.L.",
    text: "Excelente profissional com resultados muito eficazes. Recomendo na certa."
  },
  {
    initials: "E.S.",
    text: "Tudo muito organizado e bem higienizado, muito cuidadosa."
  },
  {
    initials: "C.S.",
    text: "Minha filha estava com a unha encravada e resolveu o problema com muito profissionalismo."
  },
  {
    initials: "J.P.",
    text: "Hoje não tenho mais dor. Recomendo muito!"
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="avaliacoes" className="section bg-white min-h-[92vh] lg:min-h-[88vh] flex items-center py-8 md:py-10">
      <div className="max-w-4xl mx-auto px-6 text-center w-full">

        <span className="text-sm uppercase tracking-[0.3em] text-muted block mb-6">
          Avaliações no Google
        </span>

        <h2 className="mb-6">
          Experiências reais de pacientes
        </h2>

        <p className="text-muted max-w-2xl mx-auto mb-16">
          Cuidado, profissionalismo e resultados que fazem a diferença na vida
          de quem confia na Ápice Pés Podologia.
        </p>

        <div className="relative min-h-[220px] lux-card px-10 py-14">

          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center px-10 transition-opacity duration-700 ease-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-yellow-400 text-lg mb-6 tracking-widest">
                ★★★★★
              </div>

              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                “{item.text}”
              </p>

              <span className="mt-8 text-primary font-semibold tracking-wider">
                {item.initials}
              </span>
            </div>
          ))}

        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-[#00968F] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://www.google.com/search?q=%C3%81pice+P%C3%A9s+Podologia+avalia%C3%A7%C3%B5es#"
            target="_blank"
            className="inline-block border border-[#00968F] text-[#00968F] px-8 py-3 rounded-full font-medium hover:bg-[#00968F] hover:text-white transition-all duration-300"
          >
            Veja mais avaliações no Google →
          </a>
        </div>

      </div>
    </section>
  );
}
