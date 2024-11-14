"use client";

import { useState, useEffect } from "react";
import { getScore, setScor } from "../utils/cookies/score";
import Shop from "./_components/shop";

export default function HomePage() {
  const [score, setScore] = useState<number>(0);

  const handleClick = () => {
    setScore(score + 1);
    setScor(score + 1);
  };

  const changeScore = (scor: number) => {
    setScore(scor);
    setScor(scor);
  };

  useEffect(() => {
    setScore(getScore());
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
