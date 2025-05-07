import React from "react";

const Squire = ({ value, HanleAquireClick }) => {
  return (
    <div className="text-center">
      <button
        onClick={HanleAquireClick}
        className="h-12 w-12 m-1 border-2 border-gray-400 cursor-pointer rounded-lg"
      >
        {value}
      </button>
    </div>
  );
};

export default Squire;
