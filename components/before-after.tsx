"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  { src: "podologia-preventiva.png", alt: "Resultado de podologia preventiva" },
  { src: "podologia-preventiva-2.png", alt: "Resultado de podologia preventiva" },
  { src: "tratamento.png", alt: "Resultado real de tratamento podológico" },
  { src: "laserterapia.png", alt: "Sessão de laserterapia podológica" },
  { src: "aplicacao-ortese-unha.png", alt: "Aplicação de órtese ungueal" },
  { src: "antes-depois-desbaste-calos.png", alt: "Resultado de desbaste de calos" },
];

export function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="resultados" className="container-section scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden shadow-lg"
        >
          {images.map((img, index) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={`/images/${img.src}`}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-110"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="uppercase tracking-widest text-sm text-primary mb-4">
            Resultados Reais
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight mb-6">
            Pacientes reais, transformações reais
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Todas as imagens apresentadas são resultados reais de tratamentos
            realizados na Ápice Pés. Cada procedimento é conduzido com
            precisão, cuidado e foco na recuperação saudável e estética dos
            seus pés.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
