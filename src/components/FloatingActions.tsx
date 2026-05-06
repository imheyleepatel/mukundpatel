import { Phone, MessageCircle } from "lucide-react";

export const FloatingActions = () => (
  <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
    <a
      href="https://wa.me/919925228203"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="h-13 w-13 h-13 grid place-items-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-elegant hover:scale-110 transition-transform p-3.5"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
    <a
      href="tel:+919925228203"
      aria-label="Call now"
      className="md:hidden grid place-items-center rounded-full bg-accent text-accent-foreground shadow-elegant hover:scale-110 transition-transform p-3.5"
    >
      <Phone className="h-6 w-6" />
    </a>
  </div>
);