"use server";

import { contactFormSchema } from "@/lib/validations";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    city: (formData.get("city") as string) || "",
    monthlyBill: (formData.get("monthlyBill") as string) || "",
    panelPreference: (formData.get("panelPreference") as string) || "",
    service: (formData.get("service") as string) || "Residential Rooftop Solar (Home / Villa)",
    message: (formData.get("message") as string) || "Rooftop survey requested",
    honeypot: (formData.get("honeypot") as string) || "",
  };

  // Honeypot check
  if (rawData.honeypot) {
    return { success: true, message: "Thank you for your inquiry!" };
  }

  // Validate with Zod
  const result = contactFormSchema.safeParse(rawData);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const path = issue.path[0];
      if (typeof path === "string") {
        fieldErrors[path] = issue.message;
      }
    }
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: fieldErrors,
    };
  }

  // Simulated log
  console.log("Solar rooftop survey request received:", result.data);

  await new Promise((resolve) => setTimeout(resolve, 400));

  return {
    success: true,
    message:
      "Thank you! Your rooftop survey request has been booked. Our solar engineer will call you within 2 hours to confirm your 3D shadow report & ₹78,000 subsidy eligibility.",
  };
}
