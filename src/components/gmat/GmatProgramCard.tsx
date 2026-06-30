"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Target, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type GmatProgram = {
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
  layout?: "default" | "landscape";
};

function AccentCheck() {
  return (
    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary shadow-sm">
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
      aria-labelledby="gmat-program-features-title"
    >
      <div className="relative max-h-[min(90vh,720px)] w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
        <div className="border-b border-border bg-gradient-to-r from-secondary/15 via-secondary/5 to-transparent px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-border bg-background text-muted-foreground transition hover:bg-muted hover:text-navy"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-xs font-bold uppercase tracking-wider text-secondary">Full feature list</p>
          <h2 id="gmat-program-features-title" className="mt-1 pr-8 text-lg font-bold text-navy sm:text-xl">
            {title}
          </h2>
        </div>
        <div className="max-h-[calc(min(90vh,720px)-88px)] overflow-y-auto px-5 py-4 sm:px-6 sm:py-5">
          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                <AccentCheck />
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

function CardContent({
  program,
  isLandscape,
  onSeeMore,
}: {
  program: GmatProgram;
  isLandscape: boolean;
  onSeeMore: () => void;
}) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col",
        isLandscape ? "p-5 sm:p-6 lg:p-8" : "p-5 sm:p-6",
      )}
    >
      <p className="text-xs font-bold uppercase tracking-wider text-secondary">{program.subtitle}</p>
      <h3 className={cn("mt-1 font-bold text-navy", isLandscape ? "text-xl sm:text-2xl" : "text-xl")}>
        {program.title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{program.tagline}</p>

      <div className="mt-4 flex items-baseline gap-1.5">
        <span className="text-2xl font-bold text-secondary sm:text-3xl">{program.price}</span>
        <span className="text-sm text-muted-foreground">{program.priceNote}</span>
      </div>

      <ul
        className={cn(
          "mt-4 flex-1 gap-2.5",
          isLandscape ? "grid sm:grid-cols-2" : "space-y-2.5",
        )}
      >
        {program.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-foreground">
            <AccentCheck />
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      {program.extendedHighlights && program.extendedHighlights.length > 0 && (
        <button
          type="button"
          onClick={onSeeMore}
          className={cn(
            "mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-secondary/25 bg-gradient-to-r from-secondary/10 to-secondary/5 px-4 py-2.5 text-sm font-semibold text-secondary shadow-sm transition hover:border-secondary/40 hover:from-secondary/15 hover:to-secondary/10 active:scale-[0.99]",
            isLandscape ? "w-full sm:w-auto" : "w-full",
          )}
        >
          <Sparkles className="h-4 w-4" />
          See more
          <ArrowRight className="h-4 w-4" />
        </button>
      )}

      {!isLandscape && program.idealFor.length > 0 && (
        <div className="mt-4 rounded-xl border border-secondary/15 bg-gradient-to-br from-secondary/[0.06] to-surface p-4">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
            <Target className="h-3.5 w-3.5 text-secondary" />
            Ideal for
          </p>
          <ul className="mt-3 space-y-2">
            {program.idealFor.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link
        to={program.to}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary/90",
          isLandscape ? "mt-6 w-full sm:w-auto" : "mt-5 w-full",
        )}
      >
        {program.cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export function GmatProgramCard({ program }: { program: GmatProgram }) {
  const [showFeatures, setShowFeatures] = useState(false);
  const isLandscape = program.layout === "landscape";

  const modal =
    program.extendedHighlights && program.extendedHighlights.length > 0 ? (
      <ProgramFeaturesModal
        isOpen={showFeatures}
        onClose={() => setShowFeatures(false)}
        title={program.title}
        items={program.extendedHighlights}
      />
    ) : null;

  if (isLandscape) {
    return (
      <>
        <article className="col-span-full overflow-hidden rounded-3xl border border-secondary/30 bg-gradient-to-br from-card via-card to-secondary/5 shadow-card ring-1 ring-secondary/10 transition-shadow hover:shadow-elevated">
          <div className="grid lg:grid-cols-[minmax(280px,38%)_1fr]">
            <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-navy/5 via-white to-secondary/10 lg:min-h-[320px] lg:border-b-0 lg:border-r">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(8,31,61,0.06),transparent_55%)]"
                aria-hidden
              />
              <img
                src={program.image}
                alt={program.imageAlt}
                loading="lazy"
                decoding="async"
                className="relative z-[1] h-auto max-h-[240px] w-full object-contain px-6 py-5 sm:max-h-[280px] lg:max-h-[300px]"
              />
              <span className="absolute left-4 top-4 z-10 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                {program.badge}
              </span>
            </div>
            <CardContent
              program={program}
              isLandscape
              onSeeMore={() => setShowFeatures(true)}
            />
          </div>
        </article>
        {modal}
      </>
    );
  }

  return (
    <>
      <article
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-card transition-shadow hover:shadow-elevated",
          program.featured ? "border-secondary/50 ring-2 ring-secondary/15" : "border-border",
        )}
      >
        <div className="relative">
          <div className="flex aspect-[5/4] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-navy/5 via-white to-secondary/10">
            <img
              src={program.image}
              alt={program.imageAlt}
              loading="lazy"
              decoding="async"
              className="h-auto max-h-[200px] w-full object-contain object-center px-4 py-3 sm:max-h-[220px]"
            />
          </div>
          <span className="absolute left-3 top-3 z-10 rounded-full bg-secondary px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {program.badge}
          </span>
        </div>
        <CardContent program={program} isLandscape={false} onSeeMore={() => setShowFeatures(true)} />
      </article>
      {modal}
    </>
  );
}
