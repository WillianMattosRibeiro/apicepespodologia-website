"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionHeading } from "./ui/section-heading";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface GallerySlotProps {
  images: GalleryImage[];
  className: string;
  delay?: number;
}

function GallerySlot({ images, className, delay = 0 }: GallerySlotProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const hasCycle = images.length > 1;

  return (
    <motion.div
      custom={delay}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: (d: number) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: d },
        }),
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-default ${className}`}
    >
      {images.map((image, idx) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            hasCycle ? "pointer-events-none" : ""
          }`}
          style={{ opacity: idx === currentIndex ? 1 : 0 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Caption on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
        <p className="text-white text-sm font-medium drop-shadow-lg">
          {images[currentIndex].caption}
        </p>
      </div>
    </motion.div>
  );
}

const environmentSlots: Omit<GallerySlotProps, "className">[] = [
  {
    delay: 0,
    images: [
      {
        src: "/images/atendendo-cliente.jpeg",
        alt: "Ápice Pés Podologia realizando atendimento",
        caption: "Atendimento especializado com protocolos modernos",
      },
      {
        src: "/images/escalda-pes-spa-dos-pes.png",
        alt: "Spa dos pés para relaxamento",
        caption: "Spa dos pés para relaxamento completo",
      },
      {
        src: "/images/consultorio-2.png",
        alt: "Consultório moderno da Ápice Pés",
        caption: "Consultório moderno e equipado",
      },
    ],
  },
  {
    delay: 0.1,
    images: [
      {
        src: "/images/atendimento-alta-1.png",
        alt: "Atendimento humanizado e acolhedor",
        caption: "Atendimento humanizado que acolhe e conforta",
      },
      {
        src: "/images/tratando-paciente.png",
        alt: "Cuidado dedicado em cada sessão",
        caption: "Cuidado dedicado em cada sessão",
      },
    ],
  },
  {
    delay: 0.2,
    images: [
      {
        src: "/images/desbastando-calo.png",
        alt: "Técnica profissional de desbaste de calo",
        caption: "Técnicas precisas para cada necessidade",
      },
    ],
  },
  {
    delay: 0.3,
    images: [
      {
        src: "/images/desbastando-unha-preto-e-branco.png",
        alt: "Arte e precisão no cuidado dos pés",
        caption: "Cada detalhe pensado para seu bem-estar",
      },
    ],
  },
];

export function Environment() {
  const [featured, ...rightSlots] = environmentSlots;

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
          <GallerySlot
            images={featured.images}
            delay={featured.delay}
            className="md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[400px] lg:min-h-[460px]"
          />

          {/* Right column — vertical stack of images */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3 md:gap-4 lg:gap-5">
            {rightSlots.map((slot, idx) => (
              <GallerySlot
                key={idx}
                images={slot.images}
                delay={slot.delay}
                className={`${
                  idx === 2 ? "col-span-2" : ""
                } aspect-[4/3] md:aspect-auto md:min-h-[190px] lg:min-h-[220px]`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
