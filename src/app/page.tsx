"use client";

import { useState, useEffect } from "react";
import { getScore, setScor } from "~/utils/cookies/score";
import Shop from "./_components/shop";
import { getOwned } from "~/utils/cookies/getOwned";
import { reset } from "~/utils/reset";
import { winOrLose } from "~/utils/winOrLose";
import { useToast } from "~/hooks/use-toast";
import { conCat } from "~/utils/conCat";

export default function HomePage() {
  const { toast } = useToast();
  const [score, setScore] = useState<number>(0);

  const handleClick = () => {
    const newScore = score + 1 + getOwned("cursor");
    setScore(newScore);
    setScor(newScore);
  };

  const changeScore = (scor: number) => {
    setScore(scor);
    setScor(scor);
  };

  useEffect(() => {
    setScore(getScore());
  }, []);

  useEffect(() => {
    const update: any = setInterval(() => {
      if (getScore() < 0) {
        toast({
          variant: "destructive",
          title: "Game Over!",
          description: "Your score is negative :(",
        });
        reset();
        return () => clearInterval(update);
      }

      if (winOrLose(getScore()) === 1) {
        toast({
          title: "You Win",
          description: "You've hit the score goal!",
        });
        reset();
        return () => clearInterval(update);
      }

      const updated =
        getOwned("tree") +
        getOwned("farm") +
        getOwned("shed") +
        getOwned("orchard");
      const oldScore = getScore();
      setScore(oldScore + updated);
      setScor(oldScore + updated);
    }, 1000);

    return () => clearInterval(update);
  }, []);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
      <p className="absolute left-0 top-0 p-4">Score: {conCat(score)}</p>
      <button
        onClick={handleClick}
        className="h-20 w-20 rounded-full bg-amber-500 shadow-lg hover:bg-amber-700 active:bg-amber-950"
      ></button>
      <Shop changeScore={changeScore} />
    </main>
  );
}
