"use client";

import Image from "next/image";

export function Environment() {
  return (
    <section className="section section-cream py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-primary block mb-6">
            Estrutura & Conforto
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-primary leading-tight mb-6">
            Ambiente sofisticado e acolhedor
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Espaço cuidadosamente planejado para oferecer segurança,
            conforto e uma experiência diferenciada em cada atendimento.
          </p>
        </div>

        {/* Grid Premium Refinado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Imagem 1 */}
          <div className="relative h-[260px] rounded-2xl overflow-hidden border border-neutral-200 group">
            <Image
              src="/images/consultorio-1.png"
              alt="Consultório Ápice Pés"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Imagem 2 */}
          <div className="relative h-[260px] rounded-2xl overflow-hidden border border-neutral-200 group">
            <Image
              src="/images/atendimento-alta-1.png"
              alt="Atendimento humanizado"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Imagem 3 */}
          <div className="relative h-[260px] rounded-2xl overflow-hidden border border-neutral-200 group">
            <Image
              src="/images/consultorio-2.png"
              alt="Ambiente sofisticado"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Removida imagem atendimento-alta-2 para melhor equilíbrio visual */}

          {/* Imagem 5 */}
          <div className="relative h-[260px] rounded-2xl overflow-hidden border border-neutral-200 group">
            <Image
              src="/images/escalda-pes-spa-dos-pes.png"
              alt="Spa dos pés"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
