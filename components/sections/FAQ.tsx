"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border border-slate-200 bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:border-amber-300 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
        aria-expanded={open}
        id={`faq-toggle-${index}`}
      >
        <span className="text-base font-bold text-slate-900 pr-4">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-amber-500 shrink-0 transition-transform duration-300",
            open && "rotate-180 text-amber-600"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <Section id="faq" className="bg-white">
      <SectionHeader
        eyebrow="Got Questions?"
        title="Frequently Asked Questions"
        description="Everything you need to know about Tata, Waaree & Adani solar panels, PM Surya Ghar ₹78,000 subsidy, and net-metering."
      />

      <div className="max-w-3xl mx-auto space-y-3.5">
        {siteConfig.faq.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
