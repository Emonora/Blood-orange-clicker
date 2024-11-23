import Cookie from "js-cookie";

export function getCost(name: string): number {
  const Cost = Cookie.get(`${name}_cost`);
  if (Cost === undefined) {
    const costList: any = {
        "cursor": 10,
        "tree": 100,
        "shed": 1000,
        "farm": 10000,
        "orchard": 100000,
        "greenhouse": 1000000,
        "mine": 10000000,
        "bank": 100000000,
        "tower": 1000000000
    };

    if (costList[name] !== undefined) {
        setCost(name, costList[name]);
        return costList[name];
    }
  }

  return Number(Cost);
}

export function setCost(name: string, value: number): void {
  Cookie.set(`${name}_cost`, value.toString());
}
