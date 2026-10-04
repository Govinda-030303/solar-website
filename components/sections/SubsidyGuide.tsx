import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CheckCircle, ArrowRight } from "lucide-react";

export function SubsidyGuide() {
  const { subsidy } = siteConfig;

  return (
    <section id="subsidy" className="py-20 sm:py-24 bg-white relative">
      <Container>
        <SectionHeader
          eyebrow={subsidy.badge}
          title={subsidy.heading}
          description={subsidy.subheading}
        />

        {/* Subsidy Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {subsidy.tiers.map((tier, idx) => {
            const isRecommended = "recommended" in tier && Boolean(tier.recommended);
            const isPopular = "popular" in tier && Boolean(tier.popular);

            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isRecommended
                    ? "bg-gradient-to-b from-amber-50/80 to-white border-2 border-amber-500 shadow-xl relative"
                    : "bg-slate-50 border-slate-200/80 hover:border-slate-300 shadow-sm"
                }`}
              >
                {isRecommended && (
                  <div className="absolute -top-3.5 right-6 bg-amber-500 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full shadow-md">
                    ★ Maximum Subsidy
                  </div>
                )}
                {isPopular && (
                  <div className="inline-block self-start mb-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-0.5 rounded-full">
                    Most Popular for Homes
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {tier.capacity}
                  </h3>
                  <div className="mt-4 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-sm">
                    <span className="text-xs font-semibold text-slate-500 block">Direct DBT Subsidy</span>
                    <span className="text-3xl font-black text-emerald-600 tracking-tight">
                      {tier.subsidyAmount}
                    </span>
                  </div>

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Ideal for: </strong>{tier.suitableFor}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Monthly Output: </strong>{tier.unitsPerMonth}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Net Cost: </strong>{tier.netInvestment}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <Button href="/contact" variant={isRecommended ? "primary" : "outline"} size="md" className="w-full font-bold">
                    Apply for {tier.capacity} Subsidy
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Hassle-Free Subsidy Process */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              End-to-End Assistance
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              How SolarVolt Secures Your Subsidy with Zero Hassle
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              You don&apos;t have to visit any electricity office. Our dedicated liaison team handles everything digitally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm">
                1
              </div>
              <h4 className="font-bold text-white text-base">Portal Registration</h4>
              <p className="text-xs text-slate-400">
                We register your consumer number on the National Solar Portal.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm">
                2
              </div>
              <h4 className="font-bold text-white text-base">DISCOM Feasibility</h4>
              <p className="text-xs text-slate-400">
                Liaison team secures technical feasibility approval from your power DISCOM.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm">
                3
              </div>
              <h4 className="font-bold text-white text-base">Net Meter Exchange</h4>
              <p className="text-xs text-slate-400">
                Joint inspection and installation of the bidirectional net meter.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-400 text-slate-950 flex items-center justify-center font-black text-sm">
                4
              </div>
              <h4 className="font-bold text-white text-base">Direct DBT Credit</h4>
              <p className="text-xs text-slate-400">
                Govt transfers up to ₹78,000 directly into your bank account.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
