"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { PREMIUM_OUTLINE_BUTTON } from "./ui/site";
import { SectionHeading } from "./ui/section-heading";

const testimonials = [
  { initials: "R.B.L.", text: "Excelente profissional com resultados muito eficazes. Recomendo na certa." },
  { initials: "E.S.", text: "Tudo muito organizado e bem higienizado, muito cuidadosa." },
  { initials: "C.S.", text: "Minha filha estava com a unha encravada e resolveu o problema com muito profissionalismo." },
  { initials: "J.P.", text: "Hoje não tenho mais dor. Recomendo muito!" },
  { initials: "R.B.L.", text: "Excelente profissional com os resultados dos tratamentos muito eficaz. Recomendo na certa." },
  { initials: "E.S.", text: "Já sou cliente a anos e super indico a Giovana, excelente profissional, tudo muito organizado e bem higienizado, muito cuidadosa." },
  { initials: "L.H.", text: "Excelente profissional!" },
  { initials: "R.B.L.", text: "O trabalho da Podóloga Giovanna Vitorino foi excelente e continua sendo pois, após o tratamento pontual, continuo com a manutenção mensal para nao ter nenhum problema futuro. É um ambiente muito agradável, e aconchegante. Indico para todas as pessoas que precisem de um trabalho sério e profissional." },
  { initials: "E.R.", text: "Quero agradecer pelo atendimento e o profissionalismo e também pelo cuidado com o paciente, minha filha estava com a unha muito encravada e com dor, e a podóloga fez um ótimo trabalho." },
  { initials: "R.C.V.", text: "Giovana é profissional mil estrelas. Recomendo !! E mamãe tb agradece o amoroso atendimento ;)" },
  { initials: "N.T.", text: "Atendimento impecável" },
  { initials: "D.", text: "Excelente profissional, adorei o atendimento e o resultado do trabalho realizado, muito simpática, adoramos e vamos indicar com certeza" },
  { initials: "F.A.S.", text: "Reconheço o seu trabalho e valorizo o profissional que você é. Sua dedicação e experiência conta muito. Parabéns pelo excelente trabalho! Super recomendo!!" },
  { initials: "F.J.", text: "Excelente profissional e serviço de qualidade." },
  { initials: "A.L.", text: "Adorei fui super bem recebida eu estava super tensa uma excelente profissional muito paciente e toda hora perguntando como você estava te deixa super calma nem acredito que estou bem....." },
  { initials: "J.P.", text: "Ótimo atendimento, me ajudou muito e hoje não tenho mais dor. Recomendo muito!!" },
  { initials: "C.S.O.S.", text: "Estava muito tensa até chegar ao Ápice Pés, pq minha filha de 5 anos estava c a unha encrava, mais quando cheguei c ela, e a Giovana tranquilizou minha filha e explicou tudo q seria feito, já fui vendo o quanto ela era Profissional, e resolveu o problema! Super recomendo o trabalho. Parabéns" },
  { initials: "P.D.", text: "Ótima profissional, atendeu minha bebê quando ela tinha 5 meses e estava com a unha do pé encravada. Muito simpática e atenciosa. Recomendo!" },
];

// Group testimonials into pages (3 per page on desktop)
const ITEMS_PER_PAGE = 3;

export function Testimonials() {
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const pages = useMemo(() => {
    const pagesResult: { initials: string; text: string }[][] = [];
    for (let i = 0; i < testimonials.length; i += ITEMS_PER_PAGE) {
      pagesResult.push(testimonials.slice(i, i + ITEMS_PER_PAGE));
    }
    return pagesResult;
  }, []);

  const totalPages = pages.length;

  const goNext = useCallback(() => {
    setPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-play with pause on hover
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(goNext, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goNext, isPaused]);

  return (
    <section id="avaliacoes" className="bg-lux-gradient-light py-12 md:py-16 lg:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <SectionHeading
          eyebrow="Avaliações no Google"
          title="Experiências reais de pacientes"
          description="Cuidado, profissionalismo e resultados que fazem a diferença na vida de quem confia na Ápice Pés Podologia."
          className="mb-10 md:mb-14"
        />

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Arrow - Prev */}
          <button
            onClick={goPrev}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-primary"
            aria-label="Depoimentos anteriores"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Arrow - Next */}
          <button
            onClick={goNext}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-primary"
            aria-label="Próximos depoimentos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Cards Grid */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, groupIdx) => (
                <div
                  key={groupIdx}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 min-w-full"
                >
                  {group.map((item, itemIdx) => (
                    <div
                      key={`${groupIdx}-${itemIdx}`}
                      className="relative flex flex-col bg-white rounded-2xl p-6 md:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-neutral-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-primary/10 transition-all duration-300"
                    >
                      {/* Decorative quote mark */}
                      <span className="absolute -top-1 -left-2 text-5xl leading-none text-primary/5 select-none pointer-events-none" aria-hidden="true">
                        &ldquo;
                      </span>

                      {/* Stars */}
                      <div className="text-yellow-400 text-sm mb-4 tracking-widest flex-shrink-0">
                        ★★★★★
                      </div>

                      {/* Text */}
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
                        &ldquo;{item.text}&rdquo;
                      </p>

                      {/* Initials */}
                      <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-3 flex-shrink-0">
                        <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide">
                          {item.initials.charAt(0)}
                        </span>
                        <span className="text-primary font-semibold text-sm tracking-wider">
                          {item.initials}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar + Counter */}
          <div className="flex items-center justify-center gap-4 mt-8 md:mt-10">
            {/* Page counter */}
            <span className="text-xs text-gray-400 font-mono tabular-nums min-w-[3ch] text-right">
              {String(page + 1).padStart(2, "0")}
            </span>

            {/* Progress bar */}
            <div className="flex-1 max-w-[200px] h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((page + 1) / totalPages) * 100}%` }}
              />
            </div>

            <span className="text-xs text-gray-400 font-mono tabular-nums min-w-[3ch]">
              {String(totalPages).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <a
            href="https://www.google.com/search?q=%C3%81pice+P%C3%A9s+Podologia+avalia%C3%A7%C3%B5es#mpd=~1446791545686867680/customers/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className={PREMIUM_OUTLINE_BUTTON}
          >
            Veja mais avaliações no Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
