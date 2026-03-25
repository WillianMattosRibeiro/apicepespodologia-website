"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section className="section bg-lux-gradient">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[360px] rounded-2xl overflow-hidden shadow-xl"
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
        >
          <div className="max-w-xl">
          <h2 className="mb-5 text-primary">
            Cuidado e Atenção Desde 2014
          </h2>
          <p className="text-gray-600">
            Fundada por Giovana Barbosa Vitorino, a Ápice Pés Podologia
            atua com foco em podologia preventiva e corretiva,
            oferecendo atendimento humanizado e técnicas atualizadas.
          </p>
          <p className="mt-3 text-gray-600">
            Trabalhamos de forma integrativa envolvendo médico, podólogo
            e paciente para garantir o melhor resultado em cada caso.
          </p>

          <p className="mt-5 font-medium text-primary">
            CRBM 00597 - Tec
          </p>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
