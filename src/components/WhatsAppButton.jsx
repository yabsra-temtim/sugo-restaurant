import { waLink } from "../lib/whatsapp.js";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink("Hello Sugo, I have a question.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 z-30 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#0b2e17] shadow-lg"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
    >
      Chat on WhatsApp
    </a>
  );
}
