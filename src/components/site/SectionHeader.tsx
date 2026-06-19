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
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy">{title}</h2>
      {subtitle && <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
