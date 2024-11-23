export function winOrLose(score: number): number {
  if (score < 0) {
    return 0;
  }
  if (score > 1e27) {
    return 1;
  }
  return 0.5;
}