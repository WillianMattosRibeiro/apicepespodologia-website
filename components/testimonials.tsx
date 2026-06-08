"use client";

import { useEffect, useState } from "react";
import { PREMIUM_OUTLINE_BUTTON } from "./ui/site";
import { SectionHeading } from "./ui/section-heading";

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
  },
  {
    initials: "R.B.L.",
    text: "Excelente profissional com os resultados dos tratamentos muito eficaz. Recomendo na certa."
  },
  {
    initials: "E.S.",
    text: "Já sou cliente a anos e super indico a Giovana, excelente profissional, tudo muito organizado e bem higienizado, muito cuidadosa."
  },
  {
    initials: "L.H.",
    text: "Excelente profissional!"
  },
  {
    initials: "R.B.L.",
    text: "O trabalho da Podóloga Giovanna Vitorino foi excelente e continua sendo pois, após o tratamento pontual, continuo com a manutenção mensal para nao ter nenhum problema futuro. É um ambiente muito agradável, e aconchegante. Indico para todas as pessoas que precisem de um trabalho sério e profissional."
  },
  {
    initials: "E.R.",
    text: "Quero agradecer pelo atendimento e o profissionalismo e também pelo cuidado com o paciente, minha filha estava com a unha muito encravada e com dor, e a podóloga fez um ótimo trabalho."
  },
  {
    initials: "R.C.V.",
    text: "Giovana é profissional mil estrelas. Recomendo !! E mamãe tb agradece o amoroso atendimento ;)"
  },
  {
    initials: "N.T.",
    text: "Atendimento impecável"
  },
  {
    initials: "D.",
    text: "Excelente profissional, adorei o atendimento e o resultado do trabalho realizado, muito simpática, adoramos e vamos indicar com certeza"
  },
  {
    initials: "F.A.S.",
    text: "Reconheço o seu trabalho e valorizo o profissional que você é. Sua dedicação e experiência conta muito. Parabéns pelo excelente trabalho! Super recomendo!!"
  },
  {
    initials: "F.J.",
    text: "Excelente profissional e serviço de qualidade."
  },
  {
    initials: "A.L.",
    text: "Adorei fui super bem recebida eu estava super tensa uma excelente profissional muito paciente e toda hora perguntando como você estava te deixa super calma nem acredito que estou bem....."
  },
  {
    initials: "J.P.",
    text: "Ótimo atendimento, me ajudou muito e hoje não tenho mais dor. Recomendo muito!!"
  },
  {
    initials: "C.S.O.S.",
    text: "Estava muito tensa até chegar ao Ápice Pés, pq minha filha de 5 anos estava c a unha encrava, mais quando cheguei c ela, e a Giovana tranquilizou minha filha e explicou tudo q seria feito, já fui vendo o quanto ela era Profissional, e resolveu o problema! Super recomendo o trabalho. Parabéns"
  },
  {
    initials: "P.D.",
    text: "Ótima profissional, atendeu minha bebê quando ela tinha 5 meses e estava com a unha do pé encravada. Muito simpática e atenciosa. Recomendo!"
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
    <section id="avaliacoes" className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center w-full">
        <SectionHeading
          eyebrow="Avaliações no Google"
          title="Experiências reais de pacientes"
          description="Cuidado, profissionalismo e resultados que fazem a diferença na vida de quem confia na Ápice Pés Podologia."
          className="mb-10 md:mb-16"
        />

        <div className="relative min-h-[260px] sm:min-h-[240px] lux-card px-6 sm:px-10 py-10 sm:py-12 md:py-14">

          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-10 transition-opacity duration-700 ease-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-yellow-400 text-lg mb-6 tracking-widest">
                ★★★★★
              </div>

              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-800 max-w-2xl">
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

        <div className="mt-10 md:mt-12">
          <a
            href="https://www.google.com/search?q=%C3%81pice+P%C3%A9s+Podologia+avalia%C3%A7%C3%B5es#"
            target="_blank"
            rel="noopener noreferrer"
            className={PREMIUM_OUTLINE_BUTTON}
          >
            Veja mais avaliações no Google →
          </a>
        </div>

      </div>
    </section>
  );
}
