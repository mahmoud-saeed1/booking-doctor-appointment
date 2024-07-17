import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sliceText = (text: string, length: number = 100) => {
  if (text.length <= length) return text;
  return `${text.slice(0, length)}`;
};
