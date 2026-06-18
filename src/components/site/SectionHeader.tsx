export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-navy">{title}</h2>
      {subtitle && <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
