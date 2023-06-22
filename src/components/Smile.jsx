import React from "react";

function Smile() {
  return (
    <div className="min-h-full w-full flex p-10">
      <div className="h-80 w-80 p-4 flex justify-center items-center">
        <div className="w-full h-full flex flex-col justify-evenly items-center rounded-full bg-yellow-400">
          <div className="flex justify-center space-x-10 w-full">
            <div className="w-6 h-8 rounded-full bg-black"></div>
            <div className="w-6 h-8 rounded-full bg-black"></div>
          </div>
          <div className=" h-1/3 w-2/5 border-black rounded-full border-b-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Smile;
