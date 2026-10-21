
function ScoreApp() {
  const lastReaction = localStorage.getItem("dontTapLastReaction");
  const bestTime = localStorage.getItem("dontTapBestTime");
  const roundsPlayed = localStorage.getItem("dontTapRoundsPlayed");

  return (
    <main className="score-page">
      <section className="score-card">
        <p className="score-label">RECORDS</p>

        <h1>
          YOUR <span>SCORES.</span>
        </h1>

        <p className="score-description">
          Every millisecond counts. Beat your best.
        </p>

        <div className="score-grid">
          <article className="score-box">
            <p>LAST REACTION</p>
            <h2>
              {lastReaction ? `${lastReaction} ms` : "--"}
            </h2>
          </article>

          <article className="score-box">
            <p>PERSONAL BEST</p>
            <h2>
              {bestTime ? `${bestTime} ms` : "--"}
            </h2>
          </article>
        </div>

        <div className="rounds-box">
          <p>ROUNDS COMPLETED</p>
          <h2>{roundsPlayed ?? "0"}</h2>
        </div>

        <a className="back-button" href="/index.html">
          ← BACK TO GAME
        </a>

        <p className="score-hint">
          STAY CALM. WAIT FOR GREEN.
        </p>
      </section>
    </main>
  );
}

export default ScoreApp;
