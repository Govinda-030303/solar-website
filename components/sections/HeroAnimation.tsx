"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HeroAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "slide-in-left" | "slide-in-right";
  delay?: number;
}

export function HeroAnimation({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
}: HeroAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const animationMap: Record<string, string> = {
    "fade-in": "animate-fade-in",
    "fade-in-up": "animate-fade-in-up",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
  };

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? animationMap[animation] : "opacity-0",
        className
      )}
      style={{
        animationDelay: isVisible ? `${delay}ms` : undefined,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
}
