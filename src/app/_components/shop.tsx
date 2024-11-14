import { getScore } from "../../utils/cookies/score";
import { getCost } from "../../utils/cookies/getCost";
import { scaleCost } from "../../utils/purchase";
import { getOwned, setOwned } from "~/utils/cookies/getOwned";

interface Props {
  changeScore: (scor: number) => void;
}

export default function Shop({ changeScore }: Props) {

  const handlePurchase = (building: string, cost: number, score: number) => {
    const buildinglist: string[] = ["cursor", "tree", "shed", "farm", "orchard"];
    if (buildinglist.includes(building)) {
      if (score >= cost) {
        changeScore(score -= cost);
        scaleCost(cost, 1, 1, getOwned(building));
        setOwned(building, getOwned(building) + 1);
        alert("Purchased");
      }
      else {
        alert("Not enough score");
      }
    } else {
      alert("Invalid building");
    }
  }

  return (
    <main className="absolute left-0 gap-4 p-4">
      <h1 className="pb-4">Shop:</h1>
      <button onClick={() => handlePurchase("cursor", getCost("cursor"), getScore())} className="w-20 h-20 bg-amber-500 hover:bg-amber-800 active:bg-amber-950 rounded-full">
        Cursor
        <br />
        Cost: {getCost("cursor")}
      </button>
    </main>
  );
}
