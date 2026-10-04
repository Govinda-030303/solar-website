import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SolarVolt — India's Premier Rooftop Solar & Inverter Partner",
    template: "%s | SolarVolt",
  },
  description:
    "Cut electricity bills by up to 90% with Tata Power Solar, Waaree & Adani solar panels. Claim up to ₹78,000 PM Surya Ghar Govt Subsidy with SolarVolt.",
  metadataBase: new URL("https://solarvolt.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "SolarVolt",
    title: "SolarVolt — India's Premier Rooftop Solar & Inverter Partner",
    description:
      "Cut electricity bills by up to 90% with Tata, Waaree & Adani solar panels. Claim up to ₹78,000 Govt Subsidy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolarVolt — India's Premier Rooftop Solar & Inverter Partner",
    description:
      "Cut electricity bills by up to 90% with Tata, Waaree & Adani solar panels.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-amber-200">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
