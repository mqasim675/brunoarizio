import React from "react";
import "../stylesheet.css";

const ScalingLine = () => {
  return (
    <div className="">
      <div className="relative w-5 mr-3">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full h-[2px] relative gap-1">
            {/* Multiple layers with scaling animation */}
            <div className="absolute inset-0 border-t border-black animate-scale"></div>
            <div
              className="absolute inset-0 border-t border-black animate-scale"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="absolute inset-0 border-t border-black animate-scale"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScalingLine;
