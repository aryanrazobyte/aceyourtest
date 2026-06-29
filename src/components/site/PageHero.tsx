import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  titleClassName?: string;
}) {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" aria-hidden />
      <div className="container-page relative py-8 sm:py-10">
        {eyebrow && <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-white/90">{eyebrow}</span>}
        <h1 className={cn("mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-3xl", titleClassName)}>{title}</h1>
        {subtitle && <p className="mt-2 text-sm sm:text-base text-white/75 max-w-2xl leading-relaxed">{subtitle}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </section>
  );
}
