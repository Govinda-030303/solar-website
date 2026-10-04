import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Book Free Rooftop Survey & PM Surya Ghar Subsidy",
  description:
    "Get a free 3D drone shadow report and exact quotation with Tata, Waaree or Adani solar modules. Claim up to ₹78,000 Govt subsidy.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Toll-Free Helpline",
    value: siteConfig.company.phone,
    href: `tel:${siteConfig.company.phone}`,
  },
  {
    icon: Mail,
    label: "Email Support",
    value: siteConfig.company.email,
    href: `mailto:${siteConfig.company.email}`,
  },
  {
    icon: MapPin,
    label: "Corporate Office & Regional Hubs",
    value: siteConfig.company.address,
    href: null,
  },
  {
    icon: Clock,
    label: "Operational Hours",
    value: siteConfig.contact.officeHours,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 hero-light-bg border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-100 text-amber-900 border border-amber-200 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              PM Surya Ghar Subsidy Pre-Check
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              {siteConfig.contact.headline}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {siteConfig.contact.subheadline}
            </p>
          </div>
        </Container>
      </section>

      {/* Form + Info */}
      <Section id="contact-section">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-2xl font-black text-slate-900 mb-4">
              Direct Contact & Regional Hubs
            </h2>

            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      {detail.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900">
                      {detail.value}
                    </div>
                  </div>
                </div>
              );

              return (
                <Card key={detail.label} hover className="bg-slate-50 border-slate-200">
                  {detail.href ? (
                    <a href={detail.href} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Card>
              );
            })}

            {/* Official Brand Guarantees Box */}
            <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 space-y-3 mt-6">
              <h3 className="text-sm font-black text-amber-950 uppercase tracking-wider">
                Our Guarantee to Every Homeowner:
              </h3>
              <ul className="space-y-2 text-xs font-semibold text-amber-900">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  100% Genuine Tata, Waaree & Adani Modules
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  100% Guaranteed Subsidy DBT Clearance
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  10-Year WindPro™ Structural Warranty
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
