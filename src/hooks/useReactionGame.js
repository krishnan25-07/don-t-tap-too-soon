
import { useEffect, useRef, useState } from "react";

export function useReactionGame() {
  const [gameState, setGameState] = useState("ready");
  const [reactionTime, setReactionTime] = useState(null);

  const [bestTime, setBestTime] = useState(() => {
    const saved = localStorage.getItem("dontTapBestTime");
    return saved ? Number(saved) : null;
  });

  const [roundsPlayed, setRoundsPlayed] = useState(() => {
      const saved = localStorage.getItem("dontTapRoundsPlayed");
      return saved ? Number(saved) : 0;
  });


  const startTimeRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  function startGame() {
    clearTimeout(timeoutRef.current);

    setReactionTime(null);
    setGameState("waiting");

    const delay = Math.floor(Math.random() * 3000) + 2000;

    timeoutRef.current = setTimeout(() => {
      startTimeRef.current = performance.now();
      setGameState("go");
    }, delay);
  }

  function handleArenaClick() {
    if (gameState === "waiting") {
      clearTimeout(timeoutRef.current);
      setGameState("tooSoon");
      return;
    }

    if (gameState === "go") {
      const elapsed = Math.round(
        performance.now() - startTimeRef.current
      );

      setReactionTime(elapsed);
      localStorage.setItem("dontTapLastReaction", String(elapsed));
      localStorage.setItem(
         "dontTapRoundsPlayed",
          String(roundsPlayed + 1)
      );
      setRoundsPlayed((previous) => previous + 1);
      setGameState("result");

      if (bestTime === null || elapsed < bestTime) {
        setBestTime(elapsed);
        localStorage.setItem("dontTapBestTime", String(elapsed));
      }
    }
  }

  return {
    gameState,
    reactionTime,
    bestTime,
    roundsPlayed,
    startGame,
    handleArenaClick,
  };
}
