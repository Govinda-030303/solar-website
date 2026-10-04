import type { Metadata } from "next";
import { Target, Eye, Shield, Award, Leaf, Users, Lightbulb } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About SolarVolt — India's Premier Rooftop Solar EPC",
  description:
    "Learn about SolarVolt — our mission to empower 1,000,000 Indian rooftops with clean energy, Tier-1 Tata, Waaree and Adani partnerships, and our elevated structural engineering.",
};

const valueIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "100% Tier-1 Equipment": Shield,
  "Elevated Structural Safety": Award,
  "Guaranteed Subsidies": Leaf,
  "Lifetime SolarCare Support": Users,
};

export default function AboutPage() {
  const { about } = siteConfig;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 hero-light-bg border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-100 text-amber-900 border border-amber-200 mb-4">
              About SolarVolt Technologies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              {about.headline}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              {about.intro}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="text-3xl sm:text-4xl font-black text-amber-600">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <Section id="mission">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="h-full bg-slate-50 border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Our Mission</h2>
            </div>
            <p className="text-slate-600 text-base leading-relaxed">{about.mission}</p>
          </Card>

          <Card className="h-full bg-slate-50 border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Our Vision</h2>
            </div>
            <p className="text-slate-600 text-base leading-relaxed">{about.vision}</p>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section surface id="values">
        <SectionHeader
          eyebrow="Our Guiding Principles"
          title="Engineered for Trust & Reliability"
          description="These core values guide every rooftop solar installation, structural design, and subsidy claim we deliver."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {about.values.map((value) => {
            const Icon = valueIcons[value.title] ?? Lightbulb;
            return (
              <Card key={value.title} className="h-full" hover>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Leadership Team */}
      <Section id="team">
        <SectionHeader
          eyebrow="Leadership"
          title="Meet the Solar Experts"
          description="Our founders and solar engineers bring deep expertise in photovoltaic systems, aerospace structural engineering, and DISCOM policy."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.team.map((member) => (
            <Card key={member.name} className="text-center h-full flex flex-col justify-between" hover>
              <div>
                <div className="w-20 h-20 rounded-full solar-gradient mx-auto mb-4 flex items-center justify-center text-slate-950 font-black text-2xl shadow-md">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">{member.name}</h3>
                <p className="text-xs text-amber-700 font-bold mb-3 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CTA />
    </div>
  );
}
