import React from "react";
import Squire from "./Squire";

const Board = ({ squares, xIsNext, onPlay }) => {
  // const [squire, setsquire] = useState(Array(9).fill(null));
  // const [isClicked, setisClicked] = useState(true);

  const Winnder = calculateWinner(squares);
  let status;
  if (Winnder) {
    status = `Winner ${Winnder}`;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  function handleClik(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquires = squares.slice();
    if (xIsNext) {
      nextSquires[i] = "X";
    } else {
      nextSquires[i] = "O";
    }
    onPlay(nextSquires);
  }

  return (
    <div className="flex flex-col items-center">
      <div>{status}</div>
      <div className="flex">
        <Squire value={squares[0]} HanleAquireClick={() => handleClik(0)} />
        <Squire value={squares[1]} HanleAquireClick={() => handleClik(1)} />
        <Squire value={squares[2]} HanleAquireClick={() => handleClik(2)} />
      </div>
      <div className="flex">
        <Squire value={squares[3]} HanleAquireClick={() => handleClik(3)} />
        <Squire value={squares[4]} HanleAquireClick={() => handleClik(4)} />
        <Squire value={squares[5]} HanleAquireClick={() => handleClik(5)} />
      </div>
      <div className="flex">
        <Squire value={squares[6]} HanleAquireClick={() => handleClik(6)} />
        <Squire value={squares[7]} HanleAquireClick={() => handleClik(7)} />
        <Squire value={squares[8]} HanleAquireClick={() => handleClik(8)} />
      </div>
    </div>
  );
};

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
