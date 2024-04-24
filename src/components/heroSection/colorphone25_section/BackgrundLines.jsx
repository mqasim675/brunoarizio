import React from "react";
const BorderComponent = () => {
  const borders = Array.from(Array(132).keys());
  return (
    <div className="flex justify-center relative" style={{ height: "100vh" }}>
      {borders.map((index) => (
        <div key={index} className="flex justify-center ">
          <div className="m-1 border-r border-black" />
        </div>
      ))}
    </div>
  );
};

export default BorderComponent;
