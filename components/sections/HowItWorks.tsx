import { siteConfig } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HowItWorks() {
  const { howItWorks } = siteConfig;

  return (
    <Section id="how-it-works" className="bg-white">
      <SectionHeader
        eyebrow="Zero-Hassle Process"
        title={howItWorks.heading}
        description={howItWorks.subheading}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {howItWorks.steps.map((step) => (
          <div
            key={step.step}
            className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 relative flex flex-col justify-between hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
          >
            <div>
              {/* Step indicator */}
              <div className="w-12 h-12 rounded-2xl solar-gradient flex items-center justify-center text-slate-950 font-black text-lg mb-5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                0{step.step}
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>SolarVolt Managed</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Button href="/contact" size="lg" className="font-bold shadow-md shadow-amber-500/25">
          Start Step 1: Book Free Rooftop Survey
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Section>
  );
}
