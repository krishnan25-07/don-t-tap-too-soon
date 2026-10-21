
function GameButton({ gameState, onStart }) {
  const isActive =
    gameState === "waiting" || gameState === "go";

  let buttonMessage = "START GAME";

  if (isActive) {
    buttonMessage = "WAIT FOR GREEN...";
  } else if (
    gameState === "tooSoon" ||
    gameState === "result"
  ) {
    buttonMessage = "TRY AGAIN";
  }

  return (
    <button
      className="game-button"
      onClick={onStart}
      disabled={isActive}
    >
      {buttonMessage}
    </button>
  );
}

export default GameButton;
