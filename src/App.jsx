import { useState } from "react";
import Board from "./Components/Board";

function App() {
  const [history, sethistory] = useState([Array(9).fill(null)]);
  const [isClicked, setisClicked] = useState(true);

  const currentSquare = history[history.length - 1];

  function handleClick(nextSquares) {
    setisClicked(!isClicked);
    sethistory([...history, nextSquares]);
  }

  const moves = history.map((squires, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move # ${move}`;
    } else {
      description = `Make your first Move`;
    }
    return <li key={move}>{description}</li>;
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
