export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneForTel(phone: string) {
  return phone.replace(/[^+\d]/g, "");
}
