import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a hex color to its pastel version
 * @param hex - Hex color code (e.g., '#EFAAC4' or 'EFAAC4')
 * @param lightness - Lightness multiplier (0-1, default 0.85 for pastel)
 * @param saturation - Saturation multiplier (0-1, default 0.3 for pastel)
 * @returns Pastel hex color code
 */
export function hexToPastel(hex: string, lightness: number = 0.85, saturation: number = 0.3): string {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Parse RGB values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Convert RGB to HSL
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  // Apply pastel transformation: increase lightness, decrease saturation
  l = Math.min(0.95, l + (1 - l) * lightness); // Cap at 95% lightness
  s = s * saturation; // Reduce saturation

  // Convert HSL back to RGB
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
  const m = l - c / 2;

  let rNew = 0, gNew = 0, bNew = 0;

  if (h < 1/6) {
    rNew = c; gNew = x; bNew = 0;
  } else if (h < 2/6) {
    rNew = x; gNew = c; bNew = 0;
  } else if (h < 3/6) {
    rNew = 0; gNew = c; bNew = x;
  } else if (h < 4/6) {
    rNew = 0; gNew = x; bNew = c;
  } else if (h < 5/6) {
    rNew = x; gNew = 0; bNew = c;
  } else {
    rNew = c; gNew = 0; bNew = x;
  }

  rNew = Math.round((rNew + m) * 255);
  gNew = Math.round((gNew + m) * 255);
  bNew = Math.round((bNew + m) * 255);

  // Convert back to hex
  const toHex = (n: number) => {
    const hex = n.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(rNew)}${toHex(gNew)}${toHex(bNew)}`;
}