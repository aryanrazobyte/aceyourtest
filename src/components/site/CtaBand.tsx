export function CtaBand({
  title = "Ready to start your journey?",
  subtitle = "Book a free 30-minute strategy session with our mentor team.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container-page py-12 sm:py-14 grid gap-6 md:grid-cols-[1fr_auto] items-center">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy">{title}</h3>
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-site-popup"))}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors"
          >
            Book Free Consultation
          </button>
          <a href="https://wa.me/918800338783" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-navy hover:bg-muted transition-colors">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
