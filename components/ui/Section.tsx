import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  dark?: boolean;
  pattern?: boolean;
  surface?: boolean;
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  surface,
  pattern,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-24 lg:py-28 relative",
        surface ? "bg-slate-50 border-y border-slate-200/60" : "bg-white",
        pattern && "dot-pattern",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-14 sm:mb-16", className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-100 text-amber-900 border border-amber-200/80 mb-3.5">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
