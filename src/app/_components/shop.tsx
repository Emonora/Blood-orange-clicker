import { useState, useEffect } from "react";
import { getScore } from "~/utils/cookies/score";
import { getCost, setCost } from "~/utils/cookies/getCost";
import { scaleCost } from "~/utils/purchase";
import { getOwned, setOwned } from "~/utils/cookies/getOwned";
import { toast } from "~/hooks/use-toast";
import { conCat } from "~/utils/conCat";
import { setCPS } from "~/utils/cookies/getCps";

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

  const handlePurchase = (building: string) => {
    const bonus = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000];
    let newBonus: any = 0;
    let cost: number = 0;
    if (building === "tree") {
      newBonus = bonus[0];
      cost = 100;
    } 
    if (building === "shed") {
      newBonus = bonus[1];
      cost = 1000;
    }
    if (building === "farm") {
      newBonus = bonus[2];
      cost = 10000;
    }
    if (building === "orchard") {
      newBonus = bonus[3];
      cost = 100000;
    }
    if (building === "greenhouse") {
      newBonus = bonus[4];
      cost = 1000000;
    }
    if (building === "mine") {
      newBonus = bonus[5];
      cost = 10000000;
    }
    if (building === "bank") {
      newBonus = bonus[6];
      cost = 100000000;
    }
    if (building === "tower") {
      newBonus = bonus[7];
      cost = 1000000000;
    }
    if (building === "cursor") {
      cost = 10;
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
    const curCost = getCost(building);

    const newScore = curScore - curCost;
    setScore(newScore);
    changeScore(newScore);

    const newCost = scaleCost(cost, 0.5, getOwned(building));
    setCost(building, newCost);
      
    setOwned(building, getOwned(building) + 1);
    setCPS(newBonus);
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
        onClick={() => handlePurchase(building)}
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
