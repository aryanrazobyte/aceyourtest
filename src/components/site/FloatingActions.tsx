"use client";

import { useEffect, useState } from "react";
import { ArrowUp, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/918800338783?text=Hi%20AceYourTest%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs.";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [teaserOpen, setTeaserOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function onScroll() {
      setShowTop(window.scrollY > 380);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!mounted) return null;

  return (
    <div className="fixed bottom-20 right-3 z-50 flex flex-col items-end gap-3 sm:bottom-24 sm:right-5">
      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`group grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-navy text-white shadow-elevated transition-all duration-500 hover:bg-primary hover:scale-110 hover:shadow-lg sm:h-12 sm:w-12 ${
          showTop
            ? "pointer-events-auto translate-y-0 opacity-100 animate-scale-in"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:animate-arrow-bounce" />
        <span className="absolute -top-9 rounded-full bg-navy px-2.5 py-1 text-[10px] font-semibold text-white opacity-0 shadow-md transition-all group-hover:opacity-100 sm:text-xs">
          Top
        </span>
      </button>

      {/* WhatsApp */}
      <div className="relative flex items-end gap-2 animate-slide-in-right">
        {teaserOpen && (
          <div className="relative hidden max-w-[200px] animate-fade-in-up sm:block">
            <button
              type="button"
              onClick={() => setTeaserOpen(false)}
              className="absolute -right-1 -top-1 z-10 grid h-5 w-5 place-items-center rounded-full bg-muted text-muted-foreground shadow hover:bg-card"
              aria-label="Close WhatsApp hint"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="relative overflow-hidden rounded-2xl border border-[#25D366]/25 bg-card p-3 shadow-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent" aria-hidden />
              <div className="relative flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                <p className="text-xs font-bold text-navy">Need quick help?</p>
              </div>
              <p className="relative mt-0.5 text-[11px] leading-snug text-muted-foreground">
                Chat with our mentor team on WhatsApp — replies within minutes.
              </p>
              <span className="relative mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-[#128C7E]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse-dot" />
                Online now
              </span>
            </div>
            <div
              className="absolute -right-1 bottom-4 h-3 w-3 rotate-45 border-r border-b border-success/20 bg-card"
              aria-hidden
            />
          </div>
        )}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative grid h-12 w-12 shrink-0 place-items-center sm:h-14 sm:w-14"
        >
          <span
            className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-pulse-ring"
            aria-hidden
          />
          <span
            className="absolute inset-0 rounded-full bg-[#25D366]/25 animate-pulse-ring [animation-delay:0.6s]"
            aria-hidden
          />

          <span className="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-elevated transition-all duration-300 hover:scale-110 hover:shadow-lg animate-float-gentle sm:h-14 sm:w-14">
            <WhatsAppIcon className="h-6 w-6 animate-wiggle-slow sm:h-7 sm:w-7" />
          </span>
        </a>
      </div>
    </div>
  );
}
