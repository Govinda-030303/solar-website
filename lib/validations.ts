import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid 10-digit mobile number"),
  city: z.string().optional(),
  monthlyBill: z.string().optional(),
  panelPreference: z.string().optional(),
  service: z.string().min(1, "Please select a service interest"),
  message: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected").optional(), // spam trap
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
