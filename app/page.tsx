import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { SolarCalculator } from "@/components/sections/SolarCalculator";
import { ElevatedStructure } from "@/components/sections/ElevatedStructure";
import { SubsidyGuide } from "@/components/sections/SubsidyGuide";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "SolarVolt — India's Premier Rooftop Solar & Inverter Partner",
  description:
    "Cut electricity bills by up to 90% with Tata Power Solar, Waaree & Adani solar panels. Claim up to ₹78,000 PM Surya Ghar Govt Subsidy. 100% usable rooftop with elevated WindPro™ structures.",
};

// JSON-LD Organization & Solar Service schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SolarVolt Technologies",
  url: "https://solarvolt.in",
  logo: "https://solarvolt.in/logo.png",
  description:
    "India's leading rooftop solar provider. Authorized channel partner for Tata Power Solar, Waaree Energies, and Adani Solar panels.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "DLF Cyber City, Tower B",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122002",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "1800-890-3030",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://facebook.com/solarvolt",
    "https://twitter.com/solarvolt",
    "https://linkedin.com/company/solarvolt",
    "https://instagram.com/solarvolt",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustedBy />
      <ProductsShowcase />
      <SolarCalculator />
      <ElevatedStructure />
      <SubsidyGuide />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
