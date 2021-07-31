import React from "react";
import GameRenderer from "./GameRenderer";

import { gameExample } from "./game-example";

function App() {
  return <GameRenderer game={gameExample}></GameRenderer>;
}

export default App;
