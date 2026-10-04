import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className, hover = true, glow }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm",
        hover && "transition-all duration-300 hover:border-amber-400/50 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1",
        glow && "animate-pulse-glow border-amber-300",
        className
      )}
    >
      {children}
    </div>
  );
}
