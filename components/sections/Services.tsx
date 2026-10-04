import { Home, Building2, Factory, Wrench, Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Factory,
  Wrench,
};

export function Services() {
  return (
    <Section surface id="services">
      <SectionHeader
        eyebrow="Turnkey EPC Offerings"
        title="Comprehensive Solar Solutions for India"
        description="From residential homes to massive commercial industrial parks, we deliver end-to-end solar solutions with guaranteed PM Surya Ghar subsidy processing."
      />

      <div className="grid sm:grid-cols-2 gap-8">
        {siteConfig.services.map((service) => {
          const Icon = iconMap[service.icon] ?? Home;
          return (
            <Card key={service.id} className="h-full flex flex-col justify-between" hover>
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700"
                    >
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-700">
                  ⚡ Tier-1 Equipment & Structure
                </span>
                <Button href="/contact" variant="ghost" size="sm" className="text-xs font-bold text-slate-900 hover:text-amber-600">
                  Book Site Survey <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
