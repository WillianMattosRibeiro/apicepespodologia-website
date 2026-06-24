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
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
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
      <section id="resultados" className="bg-white py-12 md:py-16 lg:py-20">
        <div className="w-full">
          <BeforeAfter />
        </div>
      </section>

      {/* Serviços — componente dedicado com cards modernos */}
      <ServicesSection />

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
