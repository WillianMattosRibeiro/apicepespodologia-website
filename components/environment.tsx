"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

export function Environment() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setSelectedIndex(index), []);
  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % environmentImages.length : 0
    );
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + environmentImages.length) % environmentImages.length
        : 0
    );
  }, []);

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
            <motion.button
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              onClick={() => openLightbox(idx)}
              className="group relative overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[400px] lg:min-h-[460px] shadow-md hover:shadow-xl transition-all duration-500"
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
            </motion.button>
          ))}

          {/* Right column — vertical stack of 3 images */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3 md:gap-4 lg:gap-5">
            {environmentImages.slice(1).map((image, idx) => (
              <motion.button
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                viewport={{ once: true }}
                onClick={() => openLightbox(idx + 1)}
                className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ${
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
              </motion.button>
            ))}
          </div>
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8 md:mt-10 max-w-xl mx-auto"
        >
          Clique nas fotos para ampliar e conhecer de perto o cuidado e carinho em cada detalhe do nosso espaço.
        </motion.p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada do ambiente"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl z-10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
              aria-label="Fechar"
            >
              &#x2715;
            </button>

            {/* Prev */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
              aria-label="Imagem anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
              aria-label="Próxima imagem"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full max-w-5xl max-h-[85vh] mx-6">
              <Image
                src={environmentImages[selectedIndex].src}
                alt={environmentImages[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
              />
            </div>

            {/* Caption */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
              {environmentImages[selectedIndex].caption}
            </p>

            {/* Counter */}
            <span className="absolute top-4 left-4 text-white/50 text-sm">
              {selectedIndex + 1} / {environmentImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
