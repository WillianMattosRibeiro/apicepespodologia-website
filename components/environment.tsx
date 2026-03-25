import Image from "next/image";
import consultorio1 from "@/public/images/consultorio-1.png";
import atendimento1 from "@/public/images/atendimento-alta-1.png";
import consultorio2 from "@/public/images/consultorio-2.png";
import spa from "@/public/images/escalda-pes-spa-dos-pes.png";

export function Environment() {
  return (
    <section className="section section-cream min-h-[92vh] lg:min-h-[88vh] flex items-center py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="text-center mb-12 md:mb-14">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">

          {/* Imagem 1 */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200 group">
            <Image
              src={consultorio1}
              alt="Consultório Ápice Pés"
              width={800}
              height={600}
              quality={70}
              placeholder="empty"
              className="w-full h-[220px] md:h-[240px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Imagem 2 */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200 group">
            <Image
              src={atendimento1}
              alt="Atendimento humanizado"
              width={800}
              height={600}
              quality={70}
              placeholder="empty"
              className="w-full h-[220px] md:h-[240px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Imagem 3 */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200 group">
            <Image
              src={consultorio2}
              alt="Ambiente sofisticado"
              width={800}
              height={600}
              quality={70}
              placeholder="empty"
              className="w-full h-[220px] md:h-[240px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Removida imagem atendimento-alta-2 para melhor equilíbrio visual */}

          {/* Imagem 5 */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200 group">
            <Image
              src={spa}
              alt="Spa dos pés"
              width={800}
              height={600}
              quality={70}
              placeholder="empty"
              className="w-full h-[220px] md:h-[240px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
