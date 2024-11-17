"use client";

import { useState, useEffect } from "react";
import { getScore, setScor } from "../utils/cookies/score";
import Shop from "./_components/shop";
import { getOwned } from "~/utils/cookies/getOwned";
import { set } from "zod";

export default function HomePage() {
  const [score, setScore] = useState<number>(0);

  const handleClick = () => {
    setScore(score + 1 + getOwned("cursor"));
    setScor(score + 1 + getOwned("cursor"));
  };

  const changeScore = (scor: number) => {
    setScore(scor);
    setScor(scor);
  };

  useEffect(() => {
    setScore(getScore());
  }, []);

  useEffect(() => {
    const update = setInterval(() => {
      const updated = getOwned("tree") + getOwned("farm") + getOwned("shed") + getOwned("orchard");
      console.log(updated);
      const oldScore = getScore();
      console.log(oldScore);
      setScore(oldScore + updated);
      setScor(oldScore + updated);
    }, 1000);
    
    return () => clearInterval(update);
  }, []);


  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
      <p className="absolute left-0 top-0 p-4">Score: {score}</p>
      <button
        onClick={handleClick}
        className="h-20 w-20 rounded-full bg-amber-500 shadow-lg hover:bg-amber-700 active:bg-amber-950"
      ></button>
      <Shop changeScore={changeScore} />
    </main>
  );
}
