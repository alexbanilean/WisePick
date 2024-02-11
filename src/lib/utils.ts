import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ellipsed(text: string, maxChars: number) {
  return text.length > maxChars ? `${text.slice(0, maxChars)}...` : text;
}
