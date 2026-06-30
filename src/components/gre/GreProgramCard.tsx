"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Target, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type GreProgram = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  tagline: string;
  price: string;
  priceNote: string;
  image: string;
  imageAlt: string;
  idealFor: readonly string[];
  highlights: readonly string[];
  extendedHighlights?: readonly string[];
  cta: string;
  to: string;
  featured: boolean;
};

function OrangeCheck() {
  return (
    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary shadow-sm">
      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3" aria-hidden>
        <path
          d="M5 10l3.5 3.5L15 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ProgramImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex aspect-[5/4] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-white via-white to-surface">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-auto max-h-[200px] w-full object-contain object-center px-4 py-3 sm:max-h-[220px]"
      />
    </div>
  );
}

function ProgramFeaturesModal({
  isOpen,
  onClose,
  title,
  items,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: readonly string[];
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="program-features-title"
    >
      <div className="relative max-h-[min(90vh,720px)] w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
        <div className="border-b border-border bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-border bg-background text-muted-foreground transition hover:bg-muted hover:text-navy"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Full feature list</p>
          <h2 id="program-features-title" className="mt-1 pr-8 text-lg font-bold text-navy sm:text-xl">
            {title}
          </h2>
        </div>
        <div className="max-h-[calc(min(90vh,720px)-88px)] overflow-y-auto px-5 py-4 sm:px-6 sm:py-5">
          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                <OrangeCheck />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function GreProgramCard({ program }: { program: GreProgram }) {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <>
      <article
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-card transition-shadow hover:shadow-elevated",
          program.featured ? "border-primary/40 ring-1 ring-primary/20" : "border-border",
        )}
      >
        <div className="relative">
          <ProgramImage src={program.image} alt={program.imageAlt} />
          <span className="absolute left-3 top-3 z-10 rounded-full bg-navy/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {program.badge}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">{program.subtitle}</p>
          <h3 className="mt-1 text-xl font-bold text-navy">{program.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{program.tagline}</p>

          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold text-primary sm:text-3xl">{program.price}</span>
            <span className="text-sm text-muted-foreground">{program.priceNote}</span>
          </div>

          <ul className="mt-4 flex-1 space-y-2.5">
            {program.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                <OrangeCheck />
                {item}
              </li>
            ))}
          </ul>

          {program.extendedHighlights && program.extendedHighlights.length > 0 && (
            <button
              type="button"
              onClick={() => setShowFeatures(true)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/25 bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2.5 text-sm font-semibold text-primary shadow-sm transition hover:border-primary/40 hover:from-primary/15 hover:to-primary/10 active:scale-[0.99]"
            >
              <Sparkles className="h-4 w-4" />
              See more
              <ArrowRight className="h-4 w-4" />
            </button>
          )}

          <div className="mt-4 rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-surface p-4">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
              <Target className="h-3.5 w-3.5 text-primary" />
              Ideal for
            </p>
            <ul className="mt-3 space-y-2">
              {program.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            to={program.to}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {program.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>

      {program.extendedHighlights && (
        <ProgramFeaturesModal
          isOpen={showFeatures}
          onClose={() => setShowFeatures(false)}
          title={program.title}
          items={program.extendedHighlights}
        />
      )}
    </>
  );
}
