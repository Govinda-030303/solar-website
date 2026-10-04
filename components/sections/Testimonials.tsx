import { Star, Quote, CheckCircle2, TrendingDown } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Testimonials() {
  return (
    <Section surface id="testimonials">
      <SectionHeader
        eyebrow="Verified Indian Solar Homes"
        title="Real Homes. Real Electricity Bill Drops."
        description="Join over 50,000+ satisfied homeowners and societies across India saving lakhs every year with SolarVolt."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {siteConfig.testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="h-full flex flex-col justify-between" hover>
            <div>
              {/* Stars & System tag */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-[11px] font-extrabold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {testimonial.systemSize}
                </span>
              </div>

              {/* Before vs After Bill Box */}
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 mb-5 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold text-[10px]">BEFORE SOLAR</span>
                  <span className="text-sm font-bold text-red-600 line-through">{testimonial.billBefore}</span>
                </div>
                <TrendingDown className="w-5 h-5 text-emerald-600" />
                <div className="text-right">
                  <span className="text-slate-400 block font-semibold text-[10px]">CURRENT BILL</span>
                  <span className="text-base font-black text-emerald-600">{testimonial.billAfter}</span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-amber-500/20" />
                <p className="text-slate-700 text-sm leading-relaxed pl-5 font-normal">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Author */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full solar-gradient flex items-center justify-center text-slate-950 font-bold text-xs shadow-sm">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    {testimonial.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
