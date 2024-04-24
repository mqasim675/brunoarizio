import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <button className="custom-button">
          <h2 className="w-full text-[10px]"> {name}</h2>
        </button>
      </div>
    </div>
  );
};

export default Button;
