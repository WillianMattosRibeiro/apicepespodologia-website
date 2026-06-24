import "./globals.css";
import type { Metadata } from "next";

const siteUrl = "https://apicepespodologia.com.br";
const siteName = "Ápice Pés Podologia";
const description =
  "Podologia preventiva e corretiva em Campo Limpo Paulista. Tratamento de unhas encravadas, micose, pés diabéticos e muito mais. Atendimento humanizado desde 2014.";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Campo Limpo Paulista`,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  authors: [{ name: "Giovana Barbosa Vitorino" }],
  generator: "Next.js",
  keywords: [
    "podologia",
    "podólogo",
    "unha encravada",
    "micose de unha",
    "pés diabéticos",
    "laserterapia",
    "órstese ungueal",
    "Campo Limpo Paulista",
    "Jundiaí",
    "saúde dos pés",
    "podologia preventiva",
  ],
  creator: "Giovana Barbosa Vitorino",
  publisher: siteName,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/favicon_io/favicon-16x16.png",
    apple: [
      { url: "/images/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteName,
  },
  openGraph: {
    title: siteName,
    description:
      "Cuidado profissional para a saúde dos seus pés desde 2014.",
    url: siteUrl,
    siteName: siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logotipo-alta-resolucao-2.jpg",
        width: 1200,
        height: 630,
        alt: "Ápice Pés Podologia - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Cuidado profissional para a saúde dos seus pés desde 2014.",
    images: ["/images/logotipo-alta-resolucao-2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Substituir pelo código real
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ápice Pés Podologia",
  image: "https://apicepespodologia.com.br/images/logotipo-alta-resolucao-2.jpg",
  url: "https://apicepespodologia.com.br",
  telephone: "+5511972520698",
  email: "apicepespodologia@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Belém, 93",
    addressLocality: "Campo Limpo Paulista",
    addressRegion: "SP",
    postalCode: "13231-350",
    addressCountry: "BR",
  },
  description:
    "Podologia preventiva e corretiva em Campo Limpo Paulista. Tratamento de unhas encravadas, micose, pés diabéticos e muito mais.",
  founder: {
    "@type": "Person",
    name: "Giovana Barbosa Vitorino",
  },
  foundingDate: "2014",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/apicepes.podologia",
    "https://www.instagram.com/podologa.giovanavitorino",
    "https://www.linkedin.com/in/giovana-vitorino-1b6378174/",
    "https://www.youtube.com/@apicepespodologia2053/videos",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
