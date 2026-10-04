import Link from "next/link";
import { Sun, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer id="site-footer" className="bg-slate-900 text-white border-t border-slate-800">
      {/* Brand Partners Ribbon in Footer */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-8">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                Official Tier-1 Equipment Partners
              </span>
              <p className="text-slate-300 text-sm mt-1">
                Authorized installations using authentic Tata Power Solar, Waaree Energies & Adani Solar panels.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {["Tata Power Solar", "Waaree Energies", "Adani Solar", "PM Surya Ghar", "MNRE Approved"].map((brand) => (
                <span
                  key={brand}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700 shadow-sm"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Column 1: Brand */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl solar-gradient shadow-md shadow-amber-500/20">
                  <Sun className="w-6 h-6 text-slate-950" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  Solar<span className="text-amber-400">Volt</span>
                </span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                {siteConfig.footer.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {siteConfig.footer.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-800/60"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
                Quick Navigation
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/#products" className="text-slate-400 hover:text-amber-400 transition-colors">
                    Solar Panels & Inverters
                  </Link>
                </li>
                <li>
                  <Link href="/#calculator" className="text-slate-400 hover:text-amber-400 transition-colors">
                    Solar Savings Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/#elevated-structure" className="text-slate-400 hover:text-amber-400 transition-colors">
                    WindPro™ Elevated Structures
                  </Link>
                </li>
                <li>
                  <Link href="/#subsidy" className="text-slate-400 hover:text-amber-400 transition-colors">
                    PM Surya Ghar Subsidy Guide
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-amber-400 transition-colors">
                    Our Services & AMC
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-colors">
                    About SolarVolt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Products & Brands */}
            <div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
                Products & Brands
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li className="text-slate-400">Tata Power Solar (Bifacial)</li>
                <li className="text-slate-400">Waaree TOPCon 575W Panels</li>
                <li className="text-slate-400">Adani Shine Mono PERC</li>
                <li className="text-slate-400">Growatt & Tata Smart Inverters</li>
                <li className="text-slate-400">Havells & Microtek Power Inverters</li>
                <li className="text-slate-400">Enphase Microinverters</li>
              </ul>
            </div>

            {/* Column 4: Contact & Helpline */}
            <div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
                Support & Contact
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5 text-slate-300">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white">{siteConfig.company.phone}</span>
                    <span className="text-xs text-slate-400">(Toll-Free Helpline)</span>
                  </div>
                </li>
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href={`mailto:${siteConfig.company.email}`} className="hover:text-amber-400 transition-colors">
                    {siteConfig.company.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400 text-xs">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.company.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-800 py-6 text-xs text-slate-400">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{siteConfig.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400 hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span className="text-slate-400 hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span className="text-slate-400 hover:text-slate-200 cursor-pointer">Subsidy Guidelines</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
