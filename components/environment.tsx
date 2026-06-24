"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/section-heading";

const environmentImages = [
  {
    src: "/images/apicepes-podologia-giovana-calcanhar.jpg",
    alt: "Ápice Pés Podologia realizando cuidado no calcanhar",
    caption: "Atendimento especializado com protocolos modernos",
  },
  {
    src: "/images/atendimento-alta-1.png",
    alt: "Atendimento humanizado e acolhedor",
    caption: "Atendimento humanizado que acolhe e conforta",
  },
  {
    src: "/images/desbastando-calo.png",
    alt: "Técnica profissional de desbaste de calo",
    caption: "Técnicas precisas para cada necessidade",
  },
  {
    src: "/images/desbastando-unha-preto-e-branco.png",
    alt: "Arte e precisão no cuidado dos pés",
    caption: "Cada detalhe pensado para seu bem-estar",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export function Environment() {
  return (
    <section
      id="ambiente"
      className="bg-white py-12 md:py-16 lg:py-20 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Estrutura & Conforto"
            title="Ambiente sofisticado e acolhedor"
            description="Espaço cuidadosamente planejado para oferecer segurança, conforto e uma experiência diferenciada em cada atendimento."
            className="mb-10 md:mb-14"
          />
        </motion.div>

        {/* Gallery Grid — Premium Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5 max-w-5xl mx-auto">
          {/* Main featured image — spans 2 cols, 2 rows on desktop */}
          {[environmentImages[0]].map((image, idx) => (
            <motion.div
              key={image.src}
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[400px] lg:min-h-[460px] shadow-md hover:shadow-xl transition-all duration-500 cursor-default"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-sm font-medium drop-shadow-lg">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Right column — vertical stack of 3 images */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3 md:gap-4 lg:gap-5">
            {environmentImages.slice(1).map((image, idx) => (
              <motion.div
                key={image.src}
                custom={0.1 * (idx + 1)}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-default ${
                  idx === 2 ? "col-span-2 md:col-span-2" : ""
                } aspect-[4/3] md:aspect-auto md:min-h-[190px] lg:min-h-[220px]`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-xs md:text-sm font-medium drop-shadow-lg">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
