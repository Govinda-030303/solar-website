import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  id?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "solar-gradient text-slate-950 font-bold shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/35 hover:brightness-105 active:scale-[0.99]",
  secondary:
    "bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-lg active:scale-[0.99]",
  outline:
    "border-2 border-amber-500/60 bg-white text-slate-900 font-semibold hover:bg-amber-50 hover:border-amber-600 shadow-sm active:scale-[0.99]",
  ghost:
    "text-slate-700 hover:text-slate-950 hover:bg-slate-100 font-medium",
  dark:
    "bg-slate-900 text-white font-semibold hover:bg-slate-800 shadow-md shadow-slate-900/10 active:scale-[0.99]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
  xl: "px-8 py-4 text-xl font-extrabold",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  type = "button",
  disabled,
  onClick,
  id,
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl text-center",
    "transition-all duration-200 ease-out cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} id={id}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      disabled={disabled}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
}
