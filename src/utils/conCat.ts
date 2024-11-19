export function conCat(num: number): string {
  if (num >= 1_000_000_000_000_000_000_000_000_000_000_000_000) {
    const value = num / 1_000_000_000_000_000_000_000_000_000_000_000_000;
    return value % 1 === 0 ? `${value}D` : value.toFixed(2) + "D";
  }
  if (num >= 1_000_000_000_000_000_000_000_000_000_000_000) {
    const value = num / 1_000_000_000_000_000_000_000_000_000_000_000;
    return value % 1 === 0 ? `${value}N` : value.toFixed(2) + "N";
  }
  else if (num >= 1_000_000_000_000_000_000_000_000_000_000) {
    const value = num / 1_000_000_000_000_000_000_000_000_000_000;
    return value % 1 === 0 ? `${value}O` : value.toFixed(2) + "O";
  }
  else if (num >= 1_000_000_000_000_000_000_000_000_000) {
    const value = num / 1_000_000_000_000_000_000_000_000_000;
    return value % 1 === 0 ? `${value}SE` : value.toFixed(2) + "SE";
  }
  else if (num >= 1_000_000_000_000_000_000_000_000) {
    const value = num / 1_000_000_000_000_000_000_000_000;
    return value % 1 === 0 ? `${value}S` : value.toFixed(2) + "S";
  }
  else if (num >= 1_000_000_000_000_000_000) {
    const value = num / 1_000_000_000_000_000_000;
    return value % 1 === 0 ? `${value}QI` : value.toFixed(2) + "QI";
  }
  else if (num >= 1_000_000_000_000_000) {
    const value = num / 1_000_000_000_000_000;
    return value % 1 === 0 ? `${value}Q` : value.toFixed(2) + "Q";
  }
  else if (num >= 1_000_000_000_000) {
    const value = num / 1_000_000_000_000;
    return value % 1 === 0 ? `${value}T` : value.toFixed(2) + "T";
  }
  else if (num >= 1_000_000_000) {
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