import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BOOK_CONSULTATION_PATH } from "@/lib/site-constants";
import { cn } from "@/lib/utils";

export function BookConsultationButton({
  children = "Book Free Consultation",
  className,
  onClick,
}: {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      to={BOOK_CONSULTATION_PATH}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-secondary",
        className,
      )}
    >
      {children}
    </Link>
  );
}
