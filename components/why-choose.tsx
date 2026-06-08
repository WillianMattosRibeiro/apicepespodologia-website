"use client";

import { SectionHeading } from "./ui/section-heading";

export function WhyChoose() {
  const items = [
    "Atendimento humanizado e individualizado.",
    "Experiência profissional desde 2014.",
    "Tecnologia avançada aplicada à podologia.",
    "Registro profissional CRBM 00597 - Tec.",
    "Ambiente acolhedor, seguro e sofisticado.",
    "Avaliações 5 estrelas de pacientes reais."
  ];

  return (
    <section id="diferenciais" className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 lg:mb-16">
          <div>
            <SectionHeading
              eyebrow="Diferenciais"
              title="Por que escolher a Ápice Pés?"
              description="Unimos excelência técnica, atendimento humanizado e uma estrutura cuidadosamente planejada para oferecer uma experiência verdadeiramente premium em podologia."
              className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {items.map((item, index) => (
              <div key={item} className="group">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-light text-primary/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-gray-700 leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                    {item}
                  </p>
                </div>
                <div className="mt-4 h-px w-12 bg-primary/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
