"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "#institucional", label: "Institucional" },
  { href: "#resultados", label: "Resultados" },
  { href: "#servicos", label: "Serviços" },
  { href: "#ambiente", label: "Ambiente" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#avaliacoes", label: "Avaliações" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", mobileOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      {/* ── HEADER ── */}
      <header className="w-full bg-lux-gradient/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="container pl-6 md:pl-10 xl:pl-16 pr-6">
          <div className="h-16 sm:h-20 md:h-24 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center" aria-label="Página inicial">
            <Image
              src="/images/logotipo-alta-resolucao.png"
              alt="Ápice Pés Podologia"
              height={56}
              priority
              quality={80}
              className="w-auto h-12 sm:h-14 md:h-16 object-contain"
            />
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-12 text-[0.9rem] font-medium tracking-wide text-primary"
              aria-label="Navegação principal"
            >
              {NAV_ITEMS.map((item) => (
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

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden flex flex-col gap-[5px] p-2 group relative z-50"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-0.5 w-6 rounded-full bg-primary transition-all duration-300 ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-primary transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-primary transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER (fora do header, sem interferência de stacking) ── */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop escuro com blur */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={closeMobile}
          aria-hidden="true"
        />

        {/* Drawer Panel — fundo sólido e opaco */}
        <nav
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Navegação mobile"
        >
          {/* Indicador visual do topo */}
          <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />

          <div className="flex flex-col gap-1 pt-8 px-8">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className="text-lg font-semibold text-gray-800 py-4 px-4 rounded-xl transition-all duration-300 hover:bg-primary/5 hover:text-primary hover:pl-6"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Rodapé do menu */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="h-px bg-gray-200 mb-4" />
            <p className="text-xs text-gray-400 text-center">
              Ápice Pés Podologia
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
