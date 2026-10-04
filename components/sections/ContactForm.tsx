"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { siteConfig } from "@/content/site";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle, AlertCircle, Sparkles, ShieldCheck } from "lucide-react";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success && state.message) {
    return (
      <div className="rounded-3xl border-2 border-emerald-500 bg-emerald-50/70 p-8 sm:p-10 text-center shadow-lg">
        <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-5 shadow-md">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-3">Survey Request Confirmed!</h3>
        <p className="text-slate-700 max-w-md mx-auto leading-relaxed text-sm font-medium">
          {state.message}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 text-xs font-bold text-emerald-800 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          PM Surya Ghar Subsidy Pre-Check Initiated
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-xl">
      <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900">
            Book Free Rooftop 3D Survey
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Get instant proposal with Tata, Waaree or Adani modules
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          ₹78,000 Subsidy
        </div>
      </div>

      <form action={formAction} className="space-y-4" id="contact-form">
        {/* Honeypot — hidden from real users */}
        <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
          <input
            type="text"
            name="honeypot"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {state.message && !state.success && (
          <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            {state.message}
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            label="Full Name *"
            name="name"
            id="contact-name"
            placeholder="e.g. Rahul Sharma"
            required
            error={state.errors?.name}
          />
          <Input
            label="Mobile Number (for OTP & 3D Report) *"
            name="phone"
            id="contact-phone"
            type="tel"
            placeholder="e.g. 9876543210"
            required
            error={state.errors?.phone}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            label="Email Address *"
            name="email"
            id="contact-email"
            type="email"
            placeholder="rahul@example.com"
            required
            error={state.errors?.email}
          />
          <Input
            label="City / Pincode *"
            name="city"
            id="contact-city"
            placeholder="e.g. Gurugram, Bengaluru, Pune..."
            required
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Select
            label="Average Monthly Electricity Bill"
            name="monthlyBill"
            id="contact-bill"
            options={[
              "₹1,500 - ₹3,000 / month",
              "₹3,000 - ₹6,000 / month",
              "₹6,000 - ₹10,000 / month",
              "₹10,000 - ₹20,000 / month",
              "₹20,000+ / month (Commercial/Society)",
            ]}
          />
          <Select
            label="Preferred Solar Panel Brand"
            name="panelPreference"
            id="contact-panel-pref"
            options={siteConfig.contact.panelOptions}
          />
        </div>

        <Select
          label="Property Type"
          name="service"
          id="contact-service"
          options={siteConfig.contact.serviceOptions}
        />

        <Textarea
          label="Additional Details / Roof Dimensions (Optional)"
          name="message"
          id="contact-message"
          placeholder="Tell us about your rooftop type (RCC terrace, sheet roof, villa) or specific requirements..."
          rows={3}
        />

        <div className="pt-2">
          <Button
            type="submit"
            size="lg"
            className="w-full font-bold shadow-md shadow-amber-500/25"
            disabled={isPending}
            id="contact-submit"
          >
            {isPending ? (
              <>
                <span className="w-5 h-5 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                Processing Request...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Book Free Survey & Claim ₹78,000 Subsidy
              </>
            )}
          </Button>
          <p className="text-[11px] text-center text-slate-500 mt-2 font-medium">
            🔒 100% Privacy. Zero Spam. No obligation to purchase.
          </p>
        </div>
      </form>
    </div>
  );
}
