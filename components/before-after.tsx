"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "antes-depois-unha-encravada.jpg",
  "podologia-unhas-antes-e-depois.jpg",
  "evoluca-tratamento-unha-inflamada.jpg"
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
    <section className="container-section">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-lg"
        >
          {images.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={`/images/${img}`}
                alt="Resultado real de tratamento"
                fill
                className="object-cover"
              />
            </div>
          ))}

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <div>
          <p className="uppercase tracking-widest text-sm text-primary mb-4">
            Resultados Reais
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-primary leading-tight mb-6">
            Pacientes reais, transformações reais
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Todas as imagens apresentadas são resultados reais de tratamentos
            realizados na Ápice Pés. Cada procedimento é conduzido com
            precisão, cuidado e foco na recuperação saudável e estética dos
            seus pés.
          </p>
        </div>
      </div>
    </section>
  );
}
