"use client";

import { CtaButton } from "./ui/cta-button";
import { WHATSAPP_LINK } from "./ui/site";

export function FinalCTA() {
  return (
    <section id="agendamento" className="relative overflow-hidden py-16 md:py-20 lg:py-24 text-white scroll-mt-24">
      {/* Luxury gradient background */}
      <div className="absolute inset-0 bg-lux-deep" />

      {/* Soft glow accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <span className="text-sm uppercase tracking-[0.3em] block mb-6 text-white/80">
          Agendamento
        </span>

        <h2 className="mb-6">
          Cuidar dos seus pés é investir na sua qualidade de vida.
        </h2>

        <p className="mb-12 text-white/90 max-w-2xl mx-auto">
          Agende sua consulta e experimente um atendimento realmente
          diferenciado, com excelência técnica e cuidado humanizado.
        </p>

        <CtaButton
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="inline-block bg-white text-[#00968F] px-12 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          Agendar Consulta Agora
        </CtaButton>
      </div>
    </section>
  );
}
