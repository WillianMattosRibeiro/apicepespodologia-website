"use client";

import { useState } from "react";
import { CtaButton } from "./ui/cta-button";
import { WHATSAPP_LINK } from "./ui/site";

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="hero"
      className="bg-lux-gradient relative overflow-hidden py-10 md:py-14 lg:pt-24 lg:pb-12 xl:pt-28 xl:pb-14 lg:min-h-[calc(100vh-4rem)] xl:min-h-[calc(100vh-5rem)] lg:flex lg:items-center scroll-mt-24"
    >
      {/* Decorative luxury glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-200/25 rounded-full blur-3xl lux-glow-animate" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-200/25 rounded-full blur-3xl lux-glow-animate" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center lg:py-2 xl:py-4">

          {/* Left Content */}
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-primary/70 block mb-8">
              Ápice Pés Podologia · CRBM 00597 - Tec
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-primary mb-5">
              Sofisticação e excelência
              <br className="hidden md:block" />
              <span className="block text-primary/80">
                no cuidado dos seus pés
              </span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Atendimento clínico e estético com protocolos modernos,
              tecnologia avançada e ambiente acolhedor para proporcionar
              saúde, conforto e bem-estar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <CtaButton href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Agendar Atendimento
              </CtaButton>
              <a href="#servicos" className="btn-accent text-center">
                Conhecer Serviços
              </a>
            </div>
          </div>

          {/* Right Video Card */}
          <div className="relative">
            <div className="lux-card overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl aspect-[4/3] md:aspect-video">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster="/images/video-preview.png"
                className="w-full h-full object-cover pointer-events-none"
              >
                <source
                  src="/videos/apresentacao-apicepes-podologia.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

              <button
                onClick={() => setOpen(true)}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/70 backdrop-blur-md px-4 sm:px-6 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-xl transition-all duration-300"
              >
                Assistir com Som
              </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-5xl px-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-4 text-white text-3xl"
            >
              ✕
            </button>

            <video
              controls
              autoPlay
              className="w-full rounded-2xl shadow-2xl"
            >
              <source
                src="/videos/apresentacao-apicepes-podologia.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
