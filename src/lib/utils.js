import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function clsMerge(...inputs) {
  return twMerge(clsx(inputs))
}
