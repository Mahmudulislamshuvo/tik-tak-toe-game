import { useState } from "react";
import Board from "./Components/Board";

function App() {
  const [history, sethistory] = useState([Array(9).fill(null)]);
  const [isClicked, setisClicked] = useState(true);
  const [currentMove, setcurrentMove] = useState(0);

  const currentSquare = history[currentMove];

  function handleClick(nextSquares) {
    setisClicked(!isClicked);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    sethistory(nextHistory);
    setcurrentMove(nextHistory.length - 1);
  }

  function jumpToGo(move) {
    setcurrentMove(move);
    setisClicked(move % 2 === 0);
  }

  const moves = history.map((squires, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move # ${move}`;
    } else {
      description = `Make your first Move`;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpToGo(move)}> {description}</button>
      </li>
    );
  });

  return (
    <div className="flex flex-row  justify-center gap-x-10">
      <Board squares={currentSquare} xIsNext={isClicked} onPlay={handleClick} />
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
