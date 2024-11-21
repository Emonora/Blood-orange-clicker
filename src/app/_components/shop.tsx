import { useState, useEffect } from "react";
import { getScore } from "~/utils/cookies/score";
import { getCost, setCost } from "~/utils/cookies/getCost";
import { scaleCost } from "~/utils/purchase";
import { getOwned, setOwned } from "~/utils/cookies/getOwned";
import { toast } from "~/hooks/use-toast";
import { conCat } from "~/utils/conCat";

interface Props {
  changeScore: (score: number) => void;
}

const buildingList: string[] = ["cursor", "tree", "shed", "farm", "orchard", "greenhouse", "mine", "bank", "tower"];

export default function Shop({ changeScore }: Props) {
  const [score ,setScore] = useState<number>(0);

  useEffect(() => {
    const initialScore = getScore();
    setScore(initialScore);
  }, []);

  const handlePurchase = (building: string, cost: number) => {
    const bonus = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000];
    let newBonus: any = 0;
    const buildingBonuses: any = {
      "tree": 0,
      "shed": 1,
      "farm": 2,
      "orchard": 3,
      "greenhouse": 4,
      "mine": 5,
      "bank": 6,
      "tower": 7,
      "cursor": 0
    };

    newBonus = bonus[buildingBonuses[building]];
    if (!buildingList.includes(building)) {
      toast({
        variant: "destructive",
        title: "Invalid building",
        description: "The provided building is not valid",
      })
      return;
    }

    const curScore = getScore();

    const newScore = curScore - cost;
    setScore(newScore);
    changeScore(newScore);

    const newCost = scaleCost(cost, 1, getOwned(building));
    setCost(building, newCost);
      
    setOwned(building, getOwned(building) + newBonus);
    return;
  };

  const renderBuildingButton = (building: string) => {
    const cost = getCost(building);
    console.log(building, cost);
    if (Number.isNaN(cost) || cost == null) {
      toast({
        variant: "destructive",
        title: "Bad Cost",
        description: "The provided building has no cost",
      })
      return;
    }
    return (
      <button
        key={building}
        onClick={() => handlePurchase(building, cost)}
        className="h-32 w-32 rounded-full bg-amber-500 hover:bg-amber-800 active:bg-amber-950"
      >
        {building.charAt(0).toUpperCase() + building.slice(1)}
        <br />
        Cost: {conCat(cost)}
      </button>
    );
  };

  return (
    <main className="absolute right-10 top-0 flex flex-col gap-4 p-2 text-sm overflow-auto max-h-full">
      <h1 className="pb-2 text-base">Shop:</h1>
      {buildingList.map((building) => renderBuildingButton(building))}
    </main>
  );
}
