import Cookie from "js-cookie";

export function getCost(name: string): number {
  const Cost = Cookie.get(`${name}_cost`);
  if (Cost === undefined) {
    const List = ["cursor", "tree", "shed", "farm", "orchard"];
    for (const items of List) {
      if (name == List[0]) {
        setCost("cursor", 10);
        return 10;
      }
      if (name == List[1]) {
        setCost("tree", 100);
        return 100;
      }
      if (name == List[2]) {
        setCost("shed", 1000);
        return 1000;
      }
      if (name == List[3]) {
        setCost("farm", 10000);
        return 10000;
      }
      if (name == List[4]) {
        setCost("orchard", 100000);
        return 100000;
      }
    }
  }

  return Number(Cost);
}

export function setCost(name: string, value: number): void {
  Cookie.set(`${name}_cost`, value.toString());
}
