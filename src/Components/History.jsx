import React from "react";

const History = ({ moves = "Hi start" }) => {
  return (
    <div>
      <ol>{moves}</ol>
    </div>
  );
};

export default History;
