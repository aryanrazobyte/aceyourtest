import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918800338783?text=Hi%20AceYourTest%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-success text-success-foreground px-4 py-3 shadow-elevated hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp Us</span>
    </a>
  );
}
