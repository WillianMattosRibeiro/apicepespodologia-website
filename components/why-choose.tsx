"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/section-heading";

const items = [
  "Atendimento humanizado e individualizado.",
  "Experiência profissional desde 2014.",
  "Tecnologia avançada aplicada à podologia.",
  "Registro profissional CRBM 00597 - Tec.",
  "Ambiente acolhedor, seguro e sofisticado.",
  "Avaliações 5 estrelas de pacientes reais.",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function WhyChoose() {
  return (
    <section id="diferenciais" className="bg-lux-gradient-light py-12 md:py-16 lg:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="Diferenciais"
              title="Por que escolher a Ápice Pés?"
              description="Unimos excelência técnica, atendimento humanizado e uma estrutura cuidadosamente planejada para oferecer uma experiência verdadeiramente premium em podologia."
              className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {items.map((item, index) => (
              <motion.div key={item} variants={itemVariants} className="group">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-light text-primary/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-gray-700 leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                    {item}
                  </p>
                </div>
                <div className="mt-4 h-px w-12 bg-primary/20" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
