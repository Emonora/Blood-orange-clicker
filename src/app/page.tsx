'use client';

import { useState, useEffect } from "react";
import { getScore, setScor } from "../utils/cookies/score";

export default function HomePage() {
  const [score, setScore] = useState<number>(0);

  const handleClick = () => {
    setScore(score + 1);
    setScor(score + 1);
  };

  useEffect(() => {
    setScore(getScore());
  }, []);

  return (
    <main className="bg-black text-white flex flex-col items-center justify-center w-screen h-screen ">
      <p className="absolute top-0 left-0 p-4">Score: {score}</p>
      <button onClick={handleClick} className="rounded-full bg-amber-500 hover:bg-amber-700 active:bg-amber-950 w-20 h-20 shadow-lg"></button>
    </main>
  );
}
