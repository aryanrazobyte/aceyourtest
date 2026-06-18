import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" aria-hidden />
      <div className="container-page relative py-20 sm:py-28">
        {eyebrow && <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-white/90">{eyebrow}</span>}
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-white/75 max-w-2xl leading-relaxed">{subtitle}</p>}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
