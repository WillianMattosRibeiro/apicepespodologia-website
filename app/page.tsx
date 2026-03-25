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

export default function Home() {
  return (
    <main className="relative">

      <Navbar />

      {/* Hero agora como primeira seção */}
      <Hero />

      {/* Institucional agora como segunda seção */}
      <section id="institucional" className="bg-lux-gradient py-28">
        <div className="max-w-6xl mx-auto px-6">
          <About />
        </div>
      </section>

      {/* Resultados agora como terceira seção */}
      <section id="resultados" className="bg-lux-gradient py-28">
        <BeforeAfter />
      </section>

      {/* Serviços agora como quarta seção */}
      <section id="servicos" className="section bg-lux-gradient">
        <div className="container text-center mb-14">
          <p className="uppercase tracking-[0.4em] text-xs text-primary mb-6">
            Especialidades
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Procedimentos realizados com precisão técnica, segurança clínica
            e foco absoluto na saúde e estética dos seus pés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "Podologia preventiva e corretiva",
            "Tratamento de unhas encravadas (retirada de espícula)",
            "Limpeza de unhas com onicomicose (micose)",
            "Atendimento especializado para idosos",
            "Atendimento para pés diabéticos",
            "Aplicação de órteses ungueais"
          ].map((item, index) => (
            <div
              key={item}
              className="group bg-white rounded-2xl border border-neutral-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl font-light text-primary/20 block mb-4">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-gray-800 text-base leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* Ambiente */}
      <section id="ambiente" className="bg-lux-gradient py-28">
        <Environment />
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="bg-lux-gradient py-28">
        <WhyChoose />
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="bg-lux-gradient py-28">
        <Testimonials />
      </section>

      <FinalCTA />

      <Footer />

      <WhatsAppFloat />

    </main>
  );
}
