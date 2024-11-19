export function conCat(num: number): string {
  const suffixes = [
    { threshold: 1_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000, suffix: "D" },
    { threshold: 1_000_000_000_000_000_000_000_000_000_000_000_000_000_000, suffix: "N" },
    { threshold: 1_000_000_000_000_000_000_000_000_000_000_000_000_000, suffix: "O" },
    { threshold: 1_000_000_000_000_000_000_000_000_000_000_000_000, suffix: "Sx" },
    { threshold: 1_000_000_000_000_000_000_000_000_000_000_000, suffix: "Sp" },
    { threshold: 1_000_000_000_000_000_000_000_000_000_000, suffix: "Qi" },
    { threshold: 1_000_000_000_000_000_000_000_000_000, suffix: "Q" },
    { threshold: 1_000_000_000_000_000_000, suffix: "T" },
    { threshold: 1_000_000_000, suffix: "B" },
    { threshold: 1_000_000, suffix: "M" },
    { threshold: 1_000, suffix: "K" },
  ];

  for (const { threshold, suffix } of suffixes) {
    if (num >= threshold) {
      const value = num / threshold;
      return value % 1 === 0 ? `${value}${suffix}` : value.toFixed(2).replace(/\.00$/, '') + suffix;
    }
  }

  return num.toString();
}
