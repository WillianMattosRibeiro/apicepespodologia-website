import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ápice Pés Podologia | Campo Limpo Paulista",
  description:
    "Podologia preventiva e corretiva em Campo Limpo Paulista. Tratamento de unhas encravadas, micose, pés diabéticos e muito mais.",
  icons: {
    icon: "/images/favicon_io/favicon-16x16.png",
    shortcut: "/images/favicon_io/favicon-16x16.png",
  },
  openGraph: {
    title: "Ápice Pés Podologia",
    description:
      "Cuidado profissional para a saúde dos seus pés desde 2014.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
