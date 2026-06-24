import Image from "next/image";
import logo from "@/public/images/logotipo-alta-resolucao.png";

export function Footer() {
  const whatsappLink =
    "https://wa.me/5511972520698?text=Ol%C3%A1%2C%20tudo%20bem%3F%20%0Avisitei%20o%20seu%20site%20da%20apicep%C3%A9s%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!";

  return (
    <footer className="bg-white border-t border-neutral-200 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Image
              src={logo}
              alt="Ápice Pés Podologia"
              priority={false}
              quality={80}
              className="h-12 w-auto max-w-[220px] object-contain mb-5 sm:h-14"
            />
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Excelência técnica, cuidado humanizado e tecnologia aplicada
              à podologia para oferecer resultados reais e atendimento
              verdadeiramente premium.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-primary mb-6">
              Contato
            </h4>
            <div className="space-y-3 text-gray-700">
              <p>R. Belém, 93 &ndash; Jardim Marsola</p>
              <p>Campo Limpo Paulista &ndash; SP</p>
              <p>13231-350</p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-primary font-medium hover:underline"
            >
              Falar pelo WhatsApp &rarr;
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-primary mb-6">
              Redes Sociais
            </h4>

            <div className="flex flex-wrap gap-5 md:gap-6 text-primary">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/apicepes.podologia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded"
                aria-label="Facebook da Ápice Pés Podologia"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.88-3.99 1.12 0 2.29.2 2.29.2v2.52h-1.29c-1.27 0-1.67.79-1.67 1.6V12h2.84l-.45 2.88h-2.39v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/podologa.giovanavitorino"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded"
                aria-label="Instagram da Ápice Pés Podologia"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5Zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4Zm4.25 2.5A5.5 5.5 0 1 0 17.5 12 5.5 5.5 0 0 0 12 6.5Zm0 2A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm5.25-.88a1.12 1.12 0 1 0 1.12 1.12 1.12 1.12 0 0 0-1.12-1.12Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/giovana-vitorino-1b6378174/?originalSubdomain=br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded"
                aria-label="LinkedIn da Giovana Vitorino"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.49 1c1.38 0 2.49 1.12 2.49 2.5ZM.5 8h4V24h-4V8Zm7.5 0h3.6v2.2h.05c.5-.95 1.75-2.2 3.6-2.2 3.85 0 4.55 2.53 4.55 5.82V24h-4v-8.5c0-2.03-.04-4.64-2.83-4.64-2.83 0-3.27 2.21-3.27 4.49V24h-4V8Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@apicepespodologia2053/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded"
                aria-label="YouTube da Ápice Pés Podologia"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2C19.6 3.7 12 3.7 12 3.7s-7.6 0-9.5.5a2.9 2.9 0 0 0-2 2A30.4 30.4 0 0 0 0 12a30.4 30.4 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2c1.9.5 9.5.5 9.5.5s7.6 0 9.5-.5a2.9 2.9 0 0 0 2-2A30.4 30.4 0 0 0 24 12a30.4 30.4 0 0 0-.5-5.8ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Ápice Pés Podologia &middot; CRBM 00597 - Tec
        </div>
      </div>
    </footer>
  );
}
