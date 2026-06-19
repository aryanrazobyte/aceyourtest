import { Calendar, MessageCircle, Sparkles } from "lucide-react";

export function CtaBand({
  title = "Ready to start your journey?",
  subtitle = "Book a free 30-minute strategy session with our mentor team.",
  bookLabel = "Book Free Consultation",
  whatsappLabel = "WhatsApp Us",
  compact = false,
}: {
  title?: string;
  subtitle?: string;
  bookLabel?: string;
  whatsappLabel?: string;
  compact?: boolean;
}) {
  const perks = ["100% Free", "30 minutes", "1-on-1 mentor"];

  return (
    <section className={`relative overflow-hidden border-y border-border ${compact ? "py-4 sm:py-5" : "section-y"}`}>
      <div
        className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-surface"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,color-mix(in_oklch,var(--navy)_10%,transparent)_1px,transparent_0)] [background-size:22px_22px]"
        aria-hidden
      />
      <div className="absolute -top-20 right-[10%] h-56 w-56 rounded-full bg-accent/25 blur-3xl" aria-hidden />
      <div className="absolute -bottom-16 left-[5%] h-44 w-44 rounded-full bg-primary/15 blur-3xl" aria-hidden />

      <div className="container-page relative">
        <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-background/85 shadow-elevated backdrop-blur-sm">
          <div
            className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-accent via-primary to-secondary"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border-[14px] border-accent/25"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 right-[18%] h-20 w-20 rounded-full bg-navy/[0.04]"
            aria-hidden
          />

          <div
            className={`grid items-center gap-4 pl-4 sm:pl-5 ${
              compact ? "p-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:gap-4" : "p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:gap-5"
            }`}
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
                <span className="eyebrow">Free strategy session</span>
              </div>
              <h3
                className={`mt-3 font-bold text-navy ${
                  compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
                }`}
              >
                {title}
              </h3>
              <p className="mt-2 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Session highlights">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="inline-flex items-center rounded-full border border-border/80 bg-surface px-3 py-1 text-xs font-semibold text-navy"
                  >
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-site-popup"))}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:from-primary/95"
              >
                <Calendar className="h-4 w-4 transition-transform group-hover:scale-110" aria-hidden />
                {bookLabel}
              </button>
              <a
                href="https://wa.me/918800338783"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-navy/20 hover:bg-muted hover:shadow-md"
              >
                <MessageCircle className="h-4 w-4 text-success transition-transform group-hover:scale-110" aria-hidden />
                {whatsappLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
