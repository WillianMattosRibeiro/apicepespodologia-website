"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative h-[260px] sm:h-[300px] md:h-[360px] rounded-2xl overflow-hidden shadow-xl order-1 w-full"
      >
        <Image
          src="/images/tratando-paciente-2.png"
          alt="Congresso de Podologia"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full order-2"
      >
        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left pt-2 md:pt-0">
          <h2 className="mb-5 text-primary text-3xl md:text-4xl lg:text-5xl leading-tight">
            Cuidado e Atenção Desde 2014
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Fundada por Giovana Barbosa Vitorino, a Ápice Pés Podologia atua com foco em
            podologia preventiva e corretiva, oferecendo atendimento humanizado e técnicas
            atualizadas.
          </p>
          <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed">
            Trabalhamos de forma integrativa envolvendo médico, podólogo e paciente para
            garantir o melhor resultado em cada caso.
          </p>

          <p className="mt-5 font-medium text-primary">
            CRBM 00597 - Tec
          </p>
        </div>
      </motion.div>
    </div>
  );
}
