import { ArrowRight, PhoneCall, Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  const { cta } = siteConfig;

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="cta">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-8 sm:p-14 md:p-16 shadow-2xl overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Limited Period Offer: Free Drone Rooftop Survey (₹3,000 value)
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {cta.heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {cta.subheading}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href={cta.buttonHref} size="lg" id="cta-primary" className="font-bold shadow-lg shadow-amber-500/25">
                {cta.buttonLabel}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-slate-700 bg-slate-800/80 text-white font-bold hover:bg-slate-700/80 transition-all text-base"
                id="cta-phone"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                Toll-Free: {siteConfig.company.phone}
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                25-Year Performance Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                PM Surya Ghar Verified EPC
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Usable Rooftop
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
