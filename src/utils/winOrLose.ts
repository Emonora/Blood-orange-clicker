export function winOrLose(score: number): number {
  if (score < 0) {
    return 0;
  }
  if (score > 1_000_000_000_000_000_000_000_000_000_000_001) {
    return 1;
  }
  return 0.5;
}