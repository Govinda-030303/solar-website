"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Menu, X, PhoneCall, ShieldCheck, Zap } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Notification / Subsidy Ribbon */}
      <div className="bg-slate-900 text-white text-xs sm:text-sm py-2 font-medium tracking-wide border-b border-slate-800">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-xs font-bold shrink-0">
              <Zap className="w-3 h-3 text-amber-400" />
              PM Surya Ghar
            </span>
            <span className="truncate">
              Claim up to <strong className="text-amber-400">₹78,000 Direct Subsidy</strong> on Rooftop Solar!
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs shrink-0">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Authorized: Tata • Waaree • Adani
            </span>
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold"
            >
              <PhoneCall className="w-3 h-3" />
              Toll Free: {siteConfig.company.phone}
            </a>
          </div>
        </Container>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="site-header"
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4"
        )}
      >
        <Container>
          <nav
            className="flex items-center justify-between"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              id="site-logo"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl solar-gradient shadow-md shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
                <Sun className="w-6 h-6 text-slate-950 animate-[spin_20s_linear_infinite]" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                  Solar<span className="text-amber-500">Volt</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-600 tracking-wider uppercase mt-0.5">
                  Tata • Waaree • Adani Partner
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150",
                    pathname === item.href
                      ? "text-amber-600 bg-amber-50"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/80"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA & Phone */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="hidden xl:flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-3.5 py-2 rounded-xl border border-slate-200 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                <span>{siteConfig.company.phone}</span>
              </a>
              <Button href="/contact" size="sm" id="header-cta">
                Book Free Survey
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="p-2 rounded-lg bg-amber-50 text-amber-600 border border-amber-200"
                aria-label="Call Helpline"
              >
                <PhoneCall className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                id="mobile-menu-toggle"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Dropdown */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300 ease-out",
              mobileOpen ? "max-h-[500px] opacity-100 mt-3 pt-3 border-t border-slate-200" : "max-h-0 opacity-0"
            )}
            id="mobile-menu"
            role="menu"
          >
            <div className="space-y-1 pb-3">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors",
                    pathname === item.href
                      ? "text-amber-600 bg-amber-50"
                      : "text-slate-800 hover:text-slate-950 hover:bg-slate-100"
                  )}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 px-2">
                <Button href="/contact" size="md" className="w-full" id="mobile-cta" onClick={() => setMobileOpen(false)}>
                  Book Free Rooftop Survey (₹78k Subsidy)
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
