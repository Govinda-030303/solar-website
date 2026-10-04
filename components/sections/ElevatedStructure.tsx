import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Wind, Droplets, ThermometerSnowflake, CheckCircle2, ArrowRight } from "lucide-react";

export function ElevatedStructure() {
  const { elevatedStructure } = siteConfig;

  const featuresWithIcons = [
    {
      ...elevatedStructure.features[0],
      icon: CheckCircle2,
      badge: "Zero Compromise",
      highlight: "Use your rooftop for parties, workouts & terrace gardens",
    },
    {
      ...elevatedStructure.features[1],
      icon: Droplets,
      badge: "100% Waterproof",
      highlight: "No roof drilling or civil puncture damage",
    },
    {
      ...elevatedStructure.features[2],
      icon: Wind,
      badge: "Cyclone Tested",
      highlight: "Heavy-duty HDG steel with 170 km/h wind rating",
    },
    {
      ...elevatedStructure.features[3],
      icon: ThermometerSnowflake,
      badge: "Natural Cooling",
      highlight: "Reduces top-floor room temperature by up to 5°C",
    },
  ];

  return (
    <section id="elevated-structure" className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <Container>
        <SectionHeader
          eyebrow="Proprietary Engineering"
          title={elevatedStructure.heading}
          description={elevatedStructure.subheading}
        />

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresWithIcons.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                  ⚡ {feature.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout: Traditional Flat vs WindPro Elevated */}
        <div className="mt-14 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm">
          <h3 className="text-2xl font-black text-slate-900 text-center mb-8">
            Traditional Floor Solar vs. SolarVolt WindPro™ Elevated
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200/80 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
                ❌ Traditional Flat Rooftop Solar
              </span>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  Rooftop terrace is completely blocked and unusable
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  Direct roof drilling causes water seepage & monsoonal leakage
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  Vulnerable to severe storms and high wind tear-off
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                ✅ SolarVolt WindPro™ Elevated Solar
              </span>
              <ul className="space-y-2 text-sm text-slate-800 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  Elevated 6-8 ft structure keeps 100% terrace space usable
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  Zero-drilling foundation pedestals guarantee 0% roof leakage
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  Withstands 170 km/h cyclones with aerospace-grade anchoring
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button href="/contact" size="md" className="font-bold">
              Check If Your Roof is Suitable (Free)
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
