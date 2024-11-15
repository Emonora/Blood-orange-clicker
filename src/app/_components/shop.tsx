import { useState, useEffect } from "react";
import { getScore } from "../../utils/cookies/score";
import { getCost, setCost } from "../../utils/cookies/getCost";
import { scaleCost } from "../../utils/purchase";
import { getOwned, setOwned } from "~/utils/cookies/getOwned";

interface Props {
  changeScore: (score: number) => void;
}

const buildingList: string[] = [
  "cursor",
  "tree",
  "shed",
  "farm",
  "orchard",
];

export default function Shop({ changeScore }: Props) {
  const [score, setScore] = useState<number>(0);

  // Ensures we only fetch and set data once the component is mounted
  useEffect(() => {
    const initialScore = getScore(); 
    setScore(initialScore); 
  }, []);

  const handlePurchase = (building: string, cost: number) => {
    if (!buildingList.includes(building)) {
      alert("Invalid building");
      return;
    }

    if (score >= cost) {
      const newScore = score - cost;
      setScore(newScore);
      changeScore(newScore);

      const newCost = scaleCost(cost, 1, getOwned(building));
      setCost(building, newCost);

      setOwned(building, getOwned(building) + 1);
    } else {
      alert("Not enough score");
    }
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
    <main className="absolute left-0 gap-4 p-4 flex flex-col text-sm">
      <h1 className="pb-4 text-base">Shop:</h1>
      {buildingList.map((building) => renderBuildingButton(building))}
    </main>
  );
}
