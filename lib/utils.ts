import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  const baseClasses = twMerge(clsx(inputs))
  const responsiveClasses = `${baseClasses} w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto`
  return responsiveClasses
}
