import type { Metadata } from "next";
import { Home, Building2, Factory, Wrench, Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Solar Solutions & EPC Services",
  description:
    "Explore SolarVolt's solar services — residential rooftop solar with Tata/Waaree/Adani panels, housing society solar, commercial EPC, and SolarCare AMC maintenance.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Factory,
  Wrench,
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 hero-light-bg border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-100 text-amber-900 border border-amber-200 mb-4">
              Turnkey Solar EPC Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              End-to-End Solar Solutions for Every Property
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From independent villas and housing societies to heavy industrial factories, we deliver
              turnkey solar installations backed by 25-year warranties and PM Surya Ghar ₹78,000 subsidy filing.
            </p>
          </div>
        </Container>
      </section>

      {/* Detailed Services */}
      {siteConfig.services.map((service, index) => {
        const Icon = iconMap[service.icon] ?? Home;
        const isEven = index % 2 === 0;

        return (
          <Section
            key={service.id}
            id={service.id}
            surface={!isEven}
          >
            <div
              className={`grid md:grid-cols-2 gap-12 items-center ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={!isEven ? "md:order-2" : ""}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl solar-gradient flex items-center justify-center shadow-md shadow-amber-500/20">
                    <Icon className="w-7 h-7 text-slate-950" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {service.title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                    >
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" id={`service-cta-${service.id}`} className="font-bold">
                  Book Free Site Survey
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className={!isEven ? "md:order-1" : ""}>
                <Card
                  className="aspect-square flex items-center justify-center bg-slate-50 border-slate-200"
                  hover={false}
                >
                  <div className="relative">
                    <div className="w-36 h-36 rounded-3xl bg-amber-100/60 border border-amber-200 flex items-center justify-center shadow-inner">
                      <Icon className="w-16 h-16 text-amber-600" />
                    </div>
                    <div className="absolute -inset-6 rounded-full border border-amber-300/40 animate-[spin_30s_linear_infinite]" />
                    <div className="absolute -inset-12 rounded-full border border-amber-200/30 animate-[spin_40s_linear_infinite_reverse]" />
                  </div>
                </Card>
              </div>
            </div>
          </Section>
        );
      })}

      <CTA />
    </div>
  );
}
