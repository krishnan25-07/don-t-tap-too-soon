import "./styles/App.css";
import GameArena from "./components/GameArena";
import GameButton from "./components/GameButton";
import { useReactionGame } from "./hooks/useReactionGame.js";

function App() {
  const {
    gameState,
    reactionTime,
    startGame,
    handleArenaClick,
  } = useReactionGame();

  return (
    <main className="game-container">
      <div className="game-card">
        <p className="game-label">REACTION TEST </p>

        <h1>
          DON'T TAP
          <span> TOO SOON.</span>
        </h1>

        <p className="game-description">
          Patience is everything. Wait for the green.
        </p>

        <GameArena
          gameState={gameState}
          reactionTime={reactionTime}
          onArenaClick={handleArenaClick}
        />

        <GameButton
          gameState={gameState}
          onStart={startGame}
        />

        <a className="view-score-button" href="/score.html">
           VIEW SCORE ↗
        </a>

        <p className="game-hint">
          DON'T TRUST YOUR REFLEXES JUST YET.
        </p>
      </div>
    </main>
  );
}

export default App;
