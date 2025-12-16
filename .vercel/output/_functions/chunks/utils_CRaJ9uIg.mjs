import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function truncateStr(title, maxLength = 58) {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength) + "...";
}
function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h.split("").map((c) => c + c).join("");
  }
  const int = parseInt(h, 16);
  const r = int >> 16 & 255;
  const g = int >> 8 & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export { capitalizeFirstLetter as a, cn as c, hexToRgba as h, sleep as s, truncateStr as t };
