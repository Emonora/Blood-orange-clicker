import { useState, useEffect } from "react";
import { getScore } from "~/utils/cookies/score";
import { getCost, setCost } from "~/utils/cookies/getCost";
import { scaleCost } from "~/utils/purchase";
import { getOwned, setOwned } from "~/utils/cookies/getOwned";
import { toast } from "~/hooks/use-toast";

interface Props {
  changeScore: (score: number) => void;
}

const buildingList: string[] = ["cursor", "tree", "shed", "farm", "orchard"];

export default function Shop({ changeScore }: Props) {
  const [score ,setScore] = useState<number>(0);

  useEffect(() => {
    const initialScore = getScore();
    setScore(initialScore);
  }, []);

  const handlePurchase = (building: string, cost: number) => {
    const bonus = [1, 10, 100, 1000];
    let newBonus: any = 0;
    if (building === "tree") {
      newBonus = bonus[0];
    } 
    if (building === "shed") {
      newBonus = bonus[1];
    }
    if (building === "farm") {
      newBonus = bonus[2];
    }
    if (building === "orchard") {
      newBonus = bonus[3];
    }
    if (building === "cursor") {
      newBonus = bonus[0];
    }
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

    return (
      <button
        key={building}
        onClick={() => handlePurchase(building, cost)}
        className="h-20 w-20 rounded-full bg-amber-500 hover:bg-amber-800 active:bg-amber-950"
      >
        {building.charAt(0).toUpperCase() + building.slice(1)}
        <br />
        Cost: {cost}
      </button>
    );
  };

  return (
    <main className="absolute left-0 top-11 flex flex-col gap-4 p-4 text-sm">
      <h1 className="pb-4 text-base">Shop:</h1>
      {buildingList.map((building) => renderBuildingButton(building))}
    </main>
  );
}
