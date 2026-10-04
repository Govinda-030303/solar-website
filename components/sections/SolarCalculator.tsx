"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function SolarCalculator() {
  const [bill, setBill] = useState(4500);

  // Dynamic calculations based on bill amount:
  const estimatedKw = Math.max(1, Math.min(15, Math.round((bill / 1100) * 2) / 2));
  const numberOfPanels = Math.round(estimatedKw * 2);
  const roofArea = Math.round(estimatedKw * 80); // 80 sq ft per kW
  const monthlySavings = Math.round(bill * 0.9); // 90% savings
  const yearlySavings = monthlySavings * 12;
  const lifetimeSavings = yearlySavings * 25;

  // Subsidy PM Surya Ghar rules:
  let subsidy = 78000;
  if (estimatedKw <= 1) subsidy = 30000;
  else if (estimatedKw <= 2) subsidy = 60000;
  else subsidy = 78000;

  // Estimated gross price ~ ₹60,000 per kW with elevated structure & Tier-1 panels
  const grossCost = Math.round(estimatedKw * 62000);
  const netInvestment = Math.max(25000, grossCost - subsidy);
  const estimatedEmi = Math.round(netInvestment / 46);

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Interactive ROI Estimator"
          title="Calculate Your Solar Savings in Real Time"
          description="Drag the slider to your average monthly electricity bill and see the exact system capacity, government subsidy, and your net payback period."
        />

        <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="bill-slider" className="text-sm font-extrabold text-slate-800">
                    Your Average Monthly Bill:
                  </label>
                  <span className="text-2xl font-black text-amber-600 bg-amber-100/70 px-4 py-1 rounded-xl border border-amber-200">
                    ₹{bill.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Slider */}
                <input
                  id="bill-slider"
                  type="range"
                  min="1000"
                  max="25000"
                  step="500"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-xs font-semibold text-slate-400 mt-2">
                  <span>₹1,000/mo</span>
                  <span>₹10,000/mo</span>
                  <span>₹25,000+/mo</span>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Or pick a common bill amount:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[2000, 3500, 5000, 8000, 12000, 18000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setBill(preset)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        bill === preset
                          ? "bg-amber-500 text-slate-950 border-amber-500 shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      ₹{preset.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Specs Cards */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-semibold text-slate-500 block">Recommended Capacity</span>
                  <span className="text-lg font-black text-slate-900">{estimatedKw} kW System</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">~{numberOfPanels} High-Efficiency Panels</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-semibold text-slate-500 block">Required Roof Area</span>
                  <span className="text-lg font-black text-slate-900">{roofArea} sq. ft.</span>
                  <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">100% Usable with WindPro™</span>
                </div>
              </div>

              {/* Verified Trust Tag */}
              <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Eligible for 100% Direct DBT Subsidy under PM Surya Ghar</span>
              </div>
            </div>

            {/* Calculations Breakdown Output (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border-2 border-amber-400/30 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Financial Summary
                </span>
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Zero Electricity Bill
                </span>
              </div>

              {/* Big Savings Block */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 block">Monthly Savings</span>
                  <span className="text-2xl font-black text-amber-600">
                    ₹{monthlySavings.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[11px] text-slate-500 block">Save ~90% on bills</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 block">25-Yr Lifetime Savings</span>
                  <span className="text-2xl font-black text-slate-900">
                    ₹{(lifetimeSavings / 100000).toFixed(1)} L
                  </span>
                  <span className="text-[11px] text-slate-500 block">Over 25-yr warranty</span>
                </div>
              </div>

              {/* Investment vs Subsidy breakdown */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-medium text-slate-600">
                  <span>Gross System Cost (Approx.):</span>
                  <span className="font-bold text-slate-800">₹{grossCost.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-xs font-medium text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                  <span className="flex items-center gap-1 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    PM Surya Ghar Subsidy:
                  </span>
                  <span className="font-extrabold">- ₹{subsidy.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-1">
                  <span>Net Investment After Subsidy:</span>
                  <span className="text-base text-slate-950">₹{netInvestment.toLocaleString("en-IN")}*</span>
                </div>
              </div>

              {/* EMI Callout */}
              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-900 block">Easy Monthly EMI</span>
                  <span className="text-[11px] text-amber-800">Lower than your power savings</span>
                </div>
                <span className="text-lg font-black text-amber-900">
                  ₹{estimatedEmi.toLocaleString("en-IN")}/mo
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button href="/contact" size="md" className="w-full font-bold shadow-md shadow-amber-500/20">
                  Claim Your ₹{subsidy.toLocaleString("en-IN")} Subsidy
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  *Prices vary based on panel brand (Tata / Waaree / Adani) and inverter selection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
