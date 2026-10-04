"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles, IndianRupee, SunMedium } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { hero, calculatorData } = siteConfig;
  const [selectedBillIndex, setSelectedBillIndex] = useState(1); // Default to 3kW / ₹3,500 bill

  const currentCalc = calculatorData[selectedBillIndex] || calculatorData[1];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden hero-light-bg pt-8 pb-16 lg:py-20"
    >
      {/* Background Decorative Grid and Gradient Glows */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Huge Headline & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 text-left">
            {/* PM Surya Ghar & Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            {/* Giant Impactful Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Switch to Solar.{" "}
              <span className="solar-gradient-text block sm:inline">
                Cut Bills to ₹0.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              {hero.subheadline}
            </p>

            {/* Trust Highlights Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {hero.trustHighlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href={hero.primaryCta.href} size="lg" id="hero-primary-cta" className="shadow-lg shadow-amber-500/20">
                {hero.primaryCta.label}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="outline"
                size="lg"
                id="hero-secondary-cta"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* Brand Partners Badge Bar */}
            <div className="mt-10 pt-8 border-t border-slate-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                Authorized Tier-1 Technology Partners:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Tata Power Solar
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Waaree Energies
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  Adani Solar
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  Growatt & Havells
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Instant Solar Savings Estimator Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-amber-400/40 shadow-2xl relative">
              {/* Top Banner Tag */}
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Claim ₹78,000 Subsidy
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    Instant Solar Calculator
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    See required system, savings & subsidy in 10s
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl solar-gradient flex items-center justify-center text-slate-950 font-bold shadow-md">
                  <SunMedium className="w-6 h-6" />
                </div>
              </div>

              {/* Bill Selector Slider / Buttons */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Select Monthly Electricity Bill:</span>
                  <span className="text-amber-600 text-sm font-extrabold">
                    ₹{currentCalc.monthlyBill.toLocaleString("en-IN")}/mo
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {calculatorData.slice(0, 6).map((item, idx) => (
                    <button
                      key={item.monthlyBill}
                      onClick={() => setSelectedBillIndex(idx)}
                      type="button"
                      className={`py-2 px-1 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        selectedBillIndex === idx
                          ? "bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      ₹{item.monthlyBill >= 1000 ? `${item.monthlyBill / 1000}k` : item.monthlyBill}/mo
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Grid */}
              <div className="mt-4 bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-xs font-semibold text-slate-600">Recommended Capacity</span>
                  <span className="text-sm font-extrabold text-slate-900 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200">
                    {currentCalc.systemKw} kW System ({currentCalc.panels} Panels)
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-xs font-semibold text-slate-600">Govt Subsidy (PM Surya Ghar)</span>
                  <span className="text-sm font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                    ₹{currentCalc.subsidy.toLocaleString("en-IN")} Direct DBT
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-xs font-semibold text-slate-600">Estimated Monthly Savings</span>
                  <span className="text-sm font-extrabold text-amber-600">
                    ₹{currentCalc.monthlySavings.toLocaleString("en-IN")} / month
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">25-Year Lifetime Savings</span>
                  <span className="text-sm font-extrabold text-slate-900">
                    ₹{(currentCalc.lifetimeSavings / 100000).toFixed(1)} Lakhs
                  </span>
                </div>
              </div>

              {/* Low EMI Highlight */}
              <div className="mt-4 flex items-center justify-between px-4 py-2.5 bg-amber-50/80 rounded-xl border border-amber-200/70">
                <div className="flex items-center gap-1.5 text-xs text-amber-900 font-bold">
                  <IndianRupee className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>0-Down Solar EMI</span>
                </div>
                <span className="text-xs font-extrabold text-amber-900">
                  Starting ₹{currentCalc.monthlyEmi.toLocaleString("en-IN")}/mo
                </span>
              </div>

              {/* Instant Book Action */}
              <div className="mt-5">
                <Button href="/contact" size="md" className="w-full text-base font-bold shadow-md shadow-amber-500/25">
                  Get Free 3D Roof Plan & Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-[11px] text-center text-slate-500 mt-2 font-medium">
                  🔒 Zero commitment • Free drone survey & shadow report
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left border-r last:border-r-0 border-slate-100 pr-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
