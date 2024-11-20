export function winOrLose(score: number): number {
  if (score < 0) {
    return 0;
  }
  if (score > 10000000000000000000000000n) {
    return 1;
  }
  return 0.5;
}