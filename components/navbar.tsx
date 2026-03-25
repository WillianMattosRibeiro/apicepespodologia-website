"use client";

import Image from "next/image";

export function Navbar() {
  return (
    <header className="w-full bg-lux-gradient/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="container">
        <div className="h-20 md:h-24 flex items-center justify-between">

          {/* Logo - Premium Alignment */}
          <a href="#" className="flex items-center">
            <div className="relative w-60 md:w-72 h-14 md:h-16">
              <Image
                src="/images/logotipo-alta-resolucao.png"
                alt="Ápice Pés Podologia"
                fill
                priority
                className="object-contain"
              />
            </div>
          </a>

          {/* Navigation - Refined Spacing */}
          <nav className="hidden md:flex items-center gap-12 text-[0.9rem] font-medium tracking-wide text-primary">
            {[
              { href: "#institucional", label: "Institucional" },
              { href: "#resultados", label: "Resultados" },
              { href: "#servicos", label: "Serviços" },
              { href: "#ambiente", label: "Ambiente" },
              { href: "#diferenciais", label: "Diferenciais" },
              { href: "#avaliacoes", label: "Avaliações" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group py-2 transition-all duration-300"
              >
                <span className="transition-opacity duration-300 group-hover:opacity-80">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
