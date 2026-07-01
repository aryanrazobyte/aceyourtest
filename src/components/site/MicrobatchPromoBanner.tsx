import { BookOpen, Sparkles, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type MicrobatchPromoBannerProps = {
  examLabel: "GRE" | "GMAT";
  posterImage: string;
  posterAlt: string;
  visualImage?: string;
  visualAlt?: string;
  badgeLabel?: string;
  batchLabel?: string;
  className?: string;
};

function HolographicPanel({ examLabel, image, alt }: { examLabel: string; image: string; alt: string }) {
  return (
    <div className="relative h-full min-h-[260px] w-full overflow-hidden sm:min-h-[300px] lg:min-h-[340px]">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#061428] via-[#061428]/88 to-[#061428]/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(56,189,248,0.28),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(56,189,248,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.15)_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden
      />

      <p
        className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none text-[7rem] font-black leading-none tracking-tighter text-white/[0.04] sm:text-[9rem]"
        aria-hidden
      >
        {examLabel}
      </p>

      <div className="absolute left-[12%] top-[14%] w-28 rotate-[-6deg] rounded-lg border border-cyan-400/35 bg-cyan-500/10 p-2.5 shadow-[0_0_24px_rgba(56,189,248,0.25)] backdrop-blur-md sm:w-32">
        <BookOpen className="h-4 w-4 text-cyan-300" aria-hidden />
        <p className="mt-1.5 font-mono text-[9px] leading-tight text-cyan-100/90">Quant · Verbal · DI</p>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-cyan-900/50">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-primary" />
        </div>
      </div>

      <div className="absolute bottom-[22%] left-[20%] w-20 rotate-[-4deg] rounded-lg border border-white/20 bg-white/10 p-2 backdrop-blur-md sm:w-24">
        <Zap className="h-3.5 w-3.5 text-amber-300" aria-hidden />
        <p className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-white/70">Live Class</p>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        aria-hidden
      />
    </div>
  );
}

export function MicrobatchPromoBanner({
  examLabel,
  posterImage,
  posterAlt,
  visualImage,
  visualAlt,
  badgeLabel = "Micro Batch",
  batchLabel = "Max 4 per batch",
  className,
}: MicrobatchPromoBannerProps) {
  const image = visualImage ?? posterImage;
  const alt = visualAlt ?? posterAlt;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[1.75rem] border border-primary/30 shadow-[0_28px_80px_-24px_rgba(8,31,61,0.75)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[#061428]" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-0 h-full w-72 skew-x-[-12deg] bg-gradient-to-b from-primary/25 via-primary/10 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
        aria-hidden
      />

      <div className="absolute right-0 top-0 z-20">
        <div className="flex items-center gap-2 rounded-bl-2xl border-b border-l border-primary/40 bg-primary px-5 py-2.5 shadow-lg">
          <Sparkles className="h-3.5 w-3.5 text-navy" aria-hidden />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-navy sm:text-xs">
            Elite Program
          </span>
        </div>
      </div>

      <div className="relative grid lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
            Expert Online Course
          </p>

          <h2 className="mt-4 max-w-xl text-[1.75rem] font-bold leading-[1.1] text-white sm:text-4xl lg:text-[2.35rem]">
            Ace Your {examLabel} With Expert
          </h2>
          <p className="mt-2 text-[2rem] font-black uppercase leading-none tracking-tight text-primary sm:text-5xl lg:text-[3.25rem]">
            Online Course
          </p>

          <span className="mt-6 inline-flex w-fit rounded-full bg-primary px-6 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#061428] shadow-[0_12px_32px_rgba(229,125,21,0.45)] sm:text-sm">
            {badgeLabel}
          </span>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-sky-100/75 sm:text-[15px]">
            Live mentor-led micro batches with personalized attention, intensive practice, and
            proven score-improvement strategies from Tarun Kaushik.
          </p>
        </div>

        <HolographicPanel examLabel={examLabel} image={image} alt={alt} />
      </div>

      <div className="relative z-10 border-t border-white/10 bg-[#071a32]/90 px-5 py-4 backdrop-blur-md sm:px-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
              ))}
            </div>
            <span className="text-sm font-semibold text-white">(4.8)</span>
          </div>

          <span className="hidden h-5 w-px bg-white/20 sm:block" aria-hidden />

          <p className="text-sm text-white/85">
            Mentored <strong className="font-bold text-white">10,000+</strong> students
          </p>

          <span className="hidden h-5 w-px bg-white/20 sm:block" aria-hidden />

          <p className="text-sm font-medium text-white/85">Proven Success Rates</p>

          <span className="ml-auto hidden rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-200 lg:inline-flex">
            {batchLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
