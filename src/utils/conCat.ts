export function conCat(num: number): string {
  if (num >= 1_000_000_000) {
    const value = num / 1_000_000_000;
    return value % 1 === 0 ? `${value}B` : value.toFixed(2) + "B";
  }
  else if (num >= 1_000_000) {
    const value = num / 1_000_000;
    return value % 1 === 0 ? `${value}M` : value.toFixed(2) + "M";
  }
  else if (num >= 1_000) {
    const value = num / 1_000;
    return value % 1 === 0 ? `${value}K` : value.toFixed(2) + "K";
  }
  else {
    return num.toString();
  }
}