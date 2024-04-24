import "./herosection";
import React, { useState, useEffect } from "react";
const BorderComponent = () => {
  const borders = Array.from(Array(72).keys());
  const [height, setHeight] = useState("100vh");
  useEffect(() => {
    setTimeout(() => {
      setHeight("400px"); 
    }, 1000);
  }, []);
  return (
    <div className="flex justify-center relative">
      {borders.map((index) => (
        <div key={index} className="flex justify-center mt-10">
          <div
            className="m-[5px] border-r border-black"
            style={{
              height: height, 
              transition: "height 2s ease-in-out", 
              animation: "reduceHeight 2s forwards", // animation keyframe
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BorderComponent;
