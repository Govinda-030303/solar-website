"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Check, ShieldCheck, Zap, Cpu, Layers, ArrowRight } from "lucide-react";

export function ProductsShowcase() {
  const [activeTab, setActiveTab] = useState<"panels" | "inverters">("panels");
  const { products } = siteConfig;

  return (
    <section id="products" className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80 relative">
      <Container>
        <SectionHeader
          eyebrow="Tier-1 Equipment Catalog"
          title="Authorized Solar Panels & Smart Inverters"
          description="We exclusively install certified Tier-1 equipment with 25-30 year linear warranties from India's most trusted manufacturing giants."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab("panels")}
              type="button"
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === "panels"
                  ? "solar-gradient text-slate-950 shadow-md shadow-amber-500/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Layers className="w-4 h-4" />
              Solar Panels (Tata • Waaree • Adani)
            </button>
            <button
              onClick={() => setActiveTab("inverters")}
              type="button"
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === "inverters"
                  ? "solar-gradient text-slate-950 shadow-md shadow-amber-500/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Cpu className="w-4 h-4" />
              Smart Solar Inverters
            </button>
          </div>
        </div>

        {/* Solar Panels Grid */}
        {activeTab === "panels" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.solarPanels.map((panel) => (
              <div
                key={panel.id}
                className="bg-white rounded-3xl border border-slate-200/80 p-7 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-200">
                      {panel.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      ALMM Approved
                    </span>
                  </div>

                  {/* Brand & Model */}
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                    {panel.brand}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    {panel.model}
                  </p>

                  {/* Key Tech Specs Chips */}
                  <div className="grid grid-cols-2 gap-2 mt-5 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block">Efficiency</span>
                      <span className="text-base font-extrabold text-slate-900">{panel.efficiency}</span>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block">Power Output</span>
                      <span className="text-base font-extrabold text-slate-900">{panel.powerOutput}</span>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block">Warranty</span>
                      <span className="text-xs font-bold text-emerald-700">{panel.warranty}</span>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block">Technology</span>
                      <span className="text-xs font-bold text-slate-800 truncate block">{panel.techType.split("/")[0]}</span>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="mt-6 space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Engineering Highlights:
                    </span>
                    {panel.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="mt-5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-950 font-medium">
                    <strong className="font-bold text-amber-900">Recommended for: </strong>
                    {panel.idealFor}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Button href="/contact" size="md" className="w-full text-sm font-bold">
                    Get {panel.brand} Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Inverters Grid */}
        {activeTab === "inverters" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.inverters.map((inverter) => (
              <div
                key={inverter.id}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200">
                      {inverter.type}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {inverter.warranty}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900">
                    {inverter.brand}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {inverter.model}
                  </p>

                  <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-600">Peak Efficiency</span>
                    <span className="text-sm font-black text-emerald-600">{inverter.efficiency}</span>
                  </div>

                  <div className="mt-4 space-y-2">
                    {inverter.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Button href="/contact" variant="outline" size="sm" className="w-full text-xs font-bold">
                    Inquire Pricing
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Direct Comparison Banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Not sure which brand or inverter matches your roof?
            </h4>
            <p className="text-sm text-slate-600 max-w-xl">
              Our certified solar engineers will run a 3D shadow simulation to recommend the highest yielding setup for your budget.
            </p>
          </div>
          <Button href="/contact" size="md" className="shrink-0 font-bold">
            Talk to a Solar Engineer (Free)
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
