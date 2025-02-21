export default function purchase(
  building: string,
  cost: number,
  score: number,
) {
  const buildings = ["cursor", "tree", "shed", "farm", "orchard"];
  if (buildings.includes(building)) {
    if (score >= cost) {
      return true;
    }
    return false;
  }
  return Error("Invalid building");
}

export function scaleCost(baseCost: number, scale: number, total: number) {
  return Math.floor(baseCost + total ** 2 * scale);
}
