"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/section-heading";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Podologia Preventiva",
    description:
      "Corte e lixamento das unhas e planta dos pés, retirada de peles, aplicação de creme e breve massagem relaxante.",
  },
  {
    title: "Manicure",
    description:
      "Cutilagem e esmaltação com produtos de alta qualidade e rigorosa higienização.",
  },
  {
    title: "Unha Encravada",
    description:
      "Avaliação, limpeza e tratamento da unha encravada com técnicas adequadas para alívio da dor e correção do crescimento.",
  },
  {
    title: "Órtese Ungueal",
    description:
      "Confecção e aplicação de órtese ungueal para correção de unhas encurvadas ou com crescimento incorreto.",
  },
  {
    title: "Laserterapia",
    description:
      "Tratamento a laser para micose de unhas (onicomicose), com sessões para eliminação do fungo de forma eficaz.",
  },
];

// SVG icons for each service
const icons = [
  // Podologia Preventiva - foot with care
  <svg key="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 2C7.58 2 4 5.58 4 10c0 2.5 1.5 4.5 3 6l2 4h6l2-4c1.5-1.5 3-3.5 3-6 0-4.42-3.58-8-8-8z" />
    <path d="M12 10a2 2 0 100-4 2 2 0 000 4z" />
    <path d="M8 14h8" />
  </svg>,
  // Manicure - hand/nails
  <svg key="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M6 3v12a3 3 0 003 3h6a3 3 0 003-3V3" />
    <path d="M9 7V3" />
    <path d="M12 7V3" />
    <path d="M15 7V3" />
    <path d="M9 21h6" />
  </svg>,
  // Unha Encravada - medical care
  <svg key="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
    <path d="M8 12h8" />
  </svg>,
  // Órtese Ungueal - corrective brace
  <svg key="3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M5 12h14" />
    <path d="M12 5l-7 7 7 7" />
    <path d="M12 5l7 7-7 7" />
  </svg>,
  // Laserterapia - laser beam
  <svg key="4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M16.24 7.76l2.83-2.83" />
  </svg>,
];

// Color themes per card
const cardThemes = [
  { gradient: "from-primary/20 via-primary/5 to-transparent", iconBg: "bg-primary/10", iconColor: "text-primary" },
  { gradient: "from-accent/20 via-accent/5 to-transparent", iconBg: "bg-accent/10", iconColor: "text-accent" },
  { gradient: "from-[#00968F]/20 via-[#00968F]/5 to-transparent", iconBg: "bg-[#00968F]/10", iconColor: "text-[#00968F]" },
  { gradient: "from-[#7C3AED]/20 via-[#7C3AED]/5 to-transparent", iconBg: "bg-[#7C3AED]/10", iconColor: "text-[#7C3AED]" },
  { gradient: "from-[#E88DB3]/20 via-[#E88DB3]/5 to-transparent", iconBg: "bg-[#E88DB3]/10", iconColor: "text-[#E88DB3]" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-lux-gradient-alt py-14 md:py-16 lg:py-20 scroll-mt-24"
    >
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-8 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute left-[40%] top-[30%] h-40 w-40 rounded-full bg-[#00968F]/5 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Especialidades"
            title="Nossos Serviços"
            description="Procedimentos realizados com precisão técnica, segurança clínica e foco absoluto na saúde e estética dos seus pés."
            className="mb-14"
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 md:p-8 shadow-[0_12px_40px_rgba(120,85,60,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:bg-white hover:shadow-[0_20px_50px_rgba(120,85,60,0.18)]"
            >
              {/* Top gradient accent bar */}
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${cardThemes[index].gradient} opacity-70 transition-opacity duration-300 group-hover:opacity-100`} />

              {/* Background radial glow on hover */}
              <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${cardThemes[index].iconBg} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-60`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${cardThemes[index].iconBg} ${cardThemes[index].iconColor} transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                  {icons[index]}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 transition-all duration-300">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 md:text-[0.98rem]">
                  {service.description}
                </p>

                {/* Bottom accent line on hover */}
                <div className={`mt-6 h-px w-0 bg-gradient-to-r ${cardThemes[index].gradient} transition-all duration-500 group-hover:w-full`} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
