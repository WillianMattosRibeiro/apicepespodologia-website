export function WhatsAppFloat() {
  const whatsappLink =
    "https://wa.me/5511972520698?text=Ol%C3%A1%2C%20tudo%20bem%3F%20%0Avisitei%20o%20seu%20site%20da%20apicep%C3%A9s%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-primary text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 z-50"
    >
      WhatsApp
    </a>
  );
}
