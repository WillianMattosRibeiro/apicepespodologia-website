import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { BeforeAfter } from "@/components/before-after";
import { Environment } from "@/components/environment";
import { Testimonials } from "@/components/testimonials";
import { WhyChoose } from "@/components/why-choose";
import { FinalCTA } from "@/components/cta-final";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SectionHeading } from "@/components/ui/section-heading";
import { PremiumCard } from "@/components/ui/premium-card";

const services = [
  {
    title: "Podologia preventiva",
    description:
      "Corte e lixamento das unhas e planta dos pés/retirada de eventual peles embaixo das unhas/ aplicação de creme e breve massagem",
  },
  {
    title: "Manicure",
    description: "Cutilagem e esmaltação",
  },
  {
    title: "Tratamento para unha encravada",
    description:
      "Avaliação, limpeza e tratamento da unha encravada com técnicas adequadas para alívio da dor e correção do crescimento",
  },
  {
    title: "Órtese ungueal",
    description:
      "Confecção e aplicação de órtese ungueal para correção de unhas encurvadas ou com crescimento incorreto",
  },
  {
    title: "Tratamento de micose com laser",
    description:
      "Tratamento a laser para micose de unhas (onicomicose), com aplicação de sessões para eliminação do fungo",
  },
] as const;

export default function Home() {
  return (
    <main className="relative">

      <Navbar />

      {/* Hero agora como primeira seção */}
      <Hero />

      {/* Institucional */}
      <section
        id="institucional"
        className="bg-lux-gradient pt-8 md:pt-10 lg:pt-12 pb-12 md:pb-16 lg:pb-20 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <About />
        </div>
      </section>

      {/* Resultados */}
      <section
        id="resultados"
        className="bg-lux-gradient py-12 md:py-16 lg:py-20"
      >
        <div className="w-full">
          <BeforeAfter />
        </div>
      </section>

      {/* Serviços */}
      <section
        id="servicos"
        className="relative overflow-hidden bg-lux-gradient py-14 md:py-16 lg:py-20 scroll-mt-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
          <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-8 h-80 w-80 rounded-full bg-white/50 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="Especialidades"
            title="Nossos Serviços"
            description="Procedimentos realizados com precisão técnica, segurança clínica e foco absoluto na saúde e estética dos seus pés."
            className="mb-14"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <PremiumCard
                key={service.title}
                className="overflow-hidden"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-2xl bg-primary/8 px-3 text-sm font-semibold tracking-[0.2em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/30 transition-all duration-300 group-hover:scale-125 group-hover:bg-primary" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 transition-transform duration-300 group-hover:translate-x-0.5">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 md:text-[0.98rem]">
                  {service.description}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>


      {/* Ambiente */}
      <Environment />

      {/* Diferenciais */}
      <WhyChoose />

      {/* Avaliações */}
      <Testimonials />

      <FinalCTA />

      <Footer />

      <WhatsAppFloat />

    </main>
  );
}
