 
function GameArena({ gameState, reactionTime, onArenaClick }) {
  let arenaMessage = "READY WHEN YOU ARE.";

  if (gameState === "waiting") {
    arenaMessage = "DON'T TAP!";
  } else if (gameState === "go") {
    arenaMessage = "TAP NOW!";
  } else if (gameState === "tooSoon") {
    arenaMessage = "TOO SOON! 😭";
  } else if (gameState === "result") {
    arenaMessage = `${reactionTime} ms`;
  }

  return (
    <div
      className={`game-arena ${gameState}`}
      onClick={onArenaClick}
    >
      <p>{arenaMessage}</p>
    </div>
  );
}

export default GameArena;
