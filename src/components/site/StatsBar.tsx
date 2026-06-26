import { useCountUp } from "@/hooks/use-count-up";

export type StatItem =
  | { label: string; value: number; suffix?: string; prefix?: string }
  | { label: string; text: string };

export const homeStats: StatItem[] = [
  { label: "Students Trained", value: 10000, suffix: "+" },
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "GMAT Achievers", value: 700, suffix: "+" },
  { label: "GRE Achievers", value: 330, suffix: "+" },
  { label: "SAT Achievers", value: 1500, suffix: "+" },
  { label: "University Admits", text: "Top" },
];

function AnimatedStat({
  label,
  value,
  suffix = "",
  prefix = "",
}: {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const { ref, value: current } = useCountUp({ end: value });

  return (
    <div ref={ref} className="text-center">
      <p className="text-xl sm:text-2xl font-bold text-navy tabular-nums">
        {prefix}
        {current.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function StaticStat({ label, text }: { label: string; text: string }) {
  return (
    <div className="text-center">
      <p className="text-xl sm:text-2xl font-bold text-navy">{text}</p>
      <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function StatsBar({ items = homeStats }: { items?: StatItem[] }) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page py-5 sm:py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item) =>
          "text" in item ? (
            <StaticStat key={item.label} label={item.label} text={item.text} />
          ) : (
            <AnimatedStat
              key={item.label}
              label={item.label}
              value={item.value}
              suffix={item.suffix}
              prefix={item.prefix}
            />
          ),
        )}
      </div>
    </section>
  );
}
