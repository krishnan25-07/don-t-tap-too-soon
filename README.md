<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project. -->


# Don't Tap Too Soon 🎯

A fun, interactive reaction-time game built with **React** and **Vite**. Test your reflexes, wait for the right moment, and try to beat your personal best!

<p align="center">
  <a href="https://dont-tap-too-soon.netlify.app/">
    <strong>🎮 Play the Live Demo</strong>
  </a>
</p>

## ✨ Overview

**Don't Tap Too Soon** is a browser-based reaction game that challenges players to wait patiently for the signal before clicking. Tap too early and you lose the round; react quickly when the signal appears to record your time.

The project demonstrates React component design, state management with hooks, browser storage, and a multi-page Vite application.

## 🚀 Features

- **Reaction-time challenge:** Wait for the signal and click as quickly as possible.
- **Random waiting period:** The signal appears after a randomized delay.
- **Early-click detection:** Clicking before the signal ends the round.
- **Personal best tracking:** Save your fastest reaction time.
- **Round tracking:** Keep track of completed rounds.
- **Persistent scores:** Store game records in browser `localStorage`.
- **Dedicated score page:** View your latest result, personal best, and completed rounds.
- **Responsive interface:** Play on different screen sizes.
- **Multi-page setup:** Separate game and score pages.

## 🛠️ Technologies Used

- **React** — UI components and state management.
- **Vite** — Development server and production build.
- **JavaScript (ES modules)** — Game logic and interactions.
- **HTML5** — Page structure.
- **CSS3** — Styling and responsive layouts.
- **Browser APIs** — `localStorage`, timers, and `performance.now()`.

## 🎮 How to Play

1. Open the [live game](https://dont-tap-too-soon.netlify.app/).
2. Click **START GAME**.
3. Wait for the green signal. Don't click too early!
4. Click the game arena as soon as the signal appears.
5. Check your reaction time and try to beat your personal best.
6. Open **VIEW SCORE** to review your records.

## 💻 Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (a compatible version for your installed Vite release).
- npm, which comes with Node.js.
- Git, to clone the repository.

### Installation

Clone the repository:

```bash
git clone https://github.com/krishnan25-07/don-t-tap-too-soon.git
```

Navigate to the project folder:

```bash
cd don-t-tap-too-soon
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run the linter:

```bash
npm run lint
```

## 📁 Project Structure

```text
dont-tap-too-soon/
├── public/
│   ├── favicon.svg

├── src/
│   ├── components/
│   │   ├── GameArena.jsx
│   │   └── GameButton.jsx
│   ├── hooks/
│   │   └── useReactionGame.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Score.css
│   │   └── index.css
│   ├── App.jsx
│   ├── ScoreApp.jsx
│   ├── main.jsx
│   └── score.jsx
├── index.html
├── score.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔗 Links

- **Live Demo:** https://dont-tap-too-soon.netlify.app/
- **GitHub Repository:** https://github.com/krishnan25-07/don-t-tap-too-soon

## 🌱 Future Improvements

- Add a leaderboard for multiple players.
- Introduce difficulty levels and shorter waiting intervals.
- Add sound effects and visual feedback.
- Display reaction-time history and statistics.
- Add automated tests for the game logic.
- Improve keyboard accessibility.

## 👩‍💻 Author

Created as a front-end development project to practise React, JavaScript, state management, and responsive UI development.

---

If you enjoy the project, consider giving the repository a ⭐ on GitHub!
