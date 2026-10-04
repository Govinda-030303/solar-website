import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Award } from "lucide-react";

export function TrustedBy() {
  const { trustedBy } = siteConfig;

  return (
    <div className="py-12 bg-white border-b border-slate-200/80" id="trusted-by">
      <Container>
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-extrabold flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            {trustedBy.heading}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {trustedBy.logos.map((logo) => (
            <div
              key={logo.name}
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center group"
            >
              <span className="text-xs font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                {logo.name}
              </span>
              <span className="text-[10px] font-semibold text-slate-500 mt-0.5">
                {logo.tag}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
