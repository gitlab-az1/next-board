import { inorderTransversal, type MultidimensionalArray } from 'typesdk/array';
import math from 'typesdk/math';


export function cn(...values: MultidimensionalArray<string | undefined>): string {
  const result: string[] = [];
  const gen = inorderTransversal([values]);
  let c = gen.next();

  while(!c.done) {
    if(c.value) {
      result.push(c.value);
    }

    c = gen.next();
  }

  return result.join(' ');
}


export function addOpacityToHexColor(hexColor: string, opacity: number): string {
  // Ensure opacity is within the valid range [0, 1]
  opacity = math.clamp(opacity, 0, 1);

  // Parse the hex color into its RGB components
  const hex = hexColor.replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  const red = (bigint >> 16) & 255;
  const green = (bigint >> 8) & 255;
  const blue = bigint & 255;

  // Convert opacity to an integer in the range [0, 255]
  const alpha = Math.round(opacity * 255);

  // Combine the modified RGB components and opacity to create a new hex color
  const modifiedHex = `#${(1 << 24 | red << 16 | green << 8 | blue).toString(16).slice(1)}${alpha.toString(16).padStart(2, '0')}`;
  return modifiedHex;
}

export function addOpacityToHexColorAsRGBA(hexColor: string, opacity: number): string {
  if (!/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hexColor) || opacity < 0 || opacity > 1) {
    throw new Error('Invalid input. Please provide a valid hex color code and opacity value between 0 and 1.');
  }

  // Convert hex to RGB
  let r: number = 0;
  let g: number = 0;
  let b: number = 0;

  if (hexColor.length === 4) {
    r = parseInt(hexColor[1] + hexColor[1], 16);
    g = parseInt(hexColor[2] + hexColor[2], 16);
    b = parseInt(hexColor[3] + hexColor[3], 16);
  } else if (hexColor.length === 7) {
    r = parseInt(hexColor.slice(1, 3), 16);
    g = parseInt(hexColor.slice(3, 5), 16);
    b = parseInt(hexColor.slice(5, 7), 16);
  }

  // Ensure RGB values are valid
  if(isNaN(r) || isNaN(g) || isNaN(b)) {
    throw new Error('Invalid hex color code.');
  }

  // Calculate the new RGBA values
  const rgbaColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  return rgbaColor;
}