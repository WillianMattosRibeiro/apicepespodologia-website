import Image from "next/image";
import { SectionHeading } from "./ui/section-heading";
import { PremiumCard } from "./ui/premium-card";
import { SECTION_CONTAINER } from "./ui/site";

const environmentImages = [
  {
    src: "/images/apicepes-podologia-giovana-calcanhar.jpg",
    alt: "Ápice Pés Podologia realizando cuidado no calcanhar",
  },
  {
    src: "/images/atendimento-alta-1.png",
    alt: "Atendimento humanizado",
  },
  {
    src: "/images/desbastando-calo.png",
    alt: "Desbaste de calo",
  },
  {
    src: "/images/desbastando-unha-preto-e-branco.png",
    alt: "Desbaste de unha em preto e branco",
  },
] as const;

export function Environment() {
  return (
    <section id="ambiente" className="section-cream py-12 md:py-16 lg:py-20 scroll-mt-24">
      <div className={`${SECTION_CONTAINER} w-full`}>

        <SectionHeading
          eyebrow="Estrutura & Conforto"
          title="Ambiente sofisticado e acolhedor"
          description="Espaço cuidadosamente planejado para oferecer segurança, conforto e uma experiência diferenciada em cada atendimento."
          className="mb-10 md:mb-14"
        />

        {/* Grid Premium Refinado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto">
          {environmentImages.map((image) => (
            <PremiumCard
              key={image.src}
              className="overflow-hidden rounded-2xl border border-neutral-200 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                quality={70}
                placeholder="empty"
                className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </PremiumCard>
          ))}
        </div>

      </div>
    </section>
  );
}
