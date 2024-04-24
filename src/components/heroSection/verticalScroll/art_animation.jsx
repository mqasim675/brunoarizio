import React, { useState, useEffect } from "react";
import "../stylesheet.css";

const DoubleCircle = () => {
  const [isPositionOne, setIsPositionOne] = useState(true);
  const [isCombined, setIsCombined] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPositionOne((prevPosition) => !prevPosition);
      setIsCombined(true);
      setTimeout(() => setIsCombined(false), 1000); // Duration for border increase animation
    }, 2000); // Change position every 2 seconds, adjust as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex ">
      <div className="relative w-7 flex gap-3 mr-3">
        <div
          className={`absolute inset-0 flex justify-center items-center ${
            isPositionOne ? "animate-circle-one" : "animate-circle-two"
          }`}
        >
          <div
            className={`w-3 h-3 border-2 border-black rounded-full animate-ping ${
              isCombined ? "border-4" : ""
            }`}
          ></div>
        </div>
        <div
          className={`absolute inset-0 flex justify-center items-center ${
            isPositionOne ? "animate-circle-two" : "animate-circle-one"
          }`}
        >
          <div
            className={`w-3 h-3 border-2 border-black rounded-full animate-ping ${
              isCombined ? "border-4" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DoubleCircle;
