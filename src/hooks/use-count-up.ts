import { useEffect, useRef, useState } from "react";

type UseCountUpOptions = {
  end: number;
  duration?: number;
  start?: number;
};

export function useCountUp({ end, duration = 1800, start = 0 }: UseCountUpOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(end);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasRun.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setValue(end);
      hasRun.current = true;
      return;
    }

    const run = () => {
      if (hasRun.current) return;
      hasRun.current = true;

      setValue(start);
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(start + (end - start) * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, end, start]);

  return { ref, value };
}
