import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { BookConsultationButton } from "@/components/site/BookConsultationButton";
import { cn } from "@/lib/utils";

type MentorProfileProps = {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  highlights: readonly string[];
  paragraphs?: readonly string[];
  eyebrow?: string;
  reversed?: boolean;
  hideStoryLink?: boolean;
  className?: string;
};

export function MentorProfile({
  image,
  imageAlt,
  title,
  subtitle,
  highlights,
  paragraphs = [],
  eyebrow = "Meet Your Mentor",
  reversed = false,
  hideStoryLink = false,
  className,
}: MentorProfileProps) {
  return (
    <div
      className={cn(
        "grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center",
        reversed && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
        className,
      )}
    >
      <div className="relative mx-auto max-w-md lg:mx-0">
        <div className="absolute -inset-4 rounded-3xl bg-primary/15" aria-hidden />
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width={800}
          height={800}
          className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-elevated"
        />
      </div>

      <div>
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        {paragraphs.length > 0 && (
          <div className="mt-5 space-y-3">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>
        )}
        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
          <BookConsultationButton className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm">
            Schedule Free Session <ArrowRight className="h-4 w-4" aria-hidden />
          </BookConsultationButton>
          {!hideStoryLink && (
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-muted"
            >
              Read Mentor Story
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
