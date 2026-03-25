"use client";

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
    <section id="diferenciais" className="section bg-white min-h-[92vh] lg:min-h-[88vh] flex items-center py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary block mb-4">
              Diferenciais
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold text-primary leading-tight mb-6">
              Por que escolher a Ápice Pés?
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Unimos excelência técnica, atendimento humanizado e uma
              estrutura cuidadosamente planejada para oferecer uma
              experiência verdadeiramente premium em podologia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
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
