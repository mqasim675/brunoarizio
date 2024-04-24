import React from "react";
import "../stylesheet.css";

const DesignAnimation = () => {
  return (
    <div className="">
      <div className="relative w-5 h-5 mr-3">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full h-full border-2 border-black relative">
            {/* Multiple layers with scaling animation */}
            <div className="absolute inset-0 border-2 border-black animate-scale p-1"></div>
            <div className="absolute inset-0 border-2 border-black animate-scale p-1"></div>
            <div className="absolute inset-0 border-2 border-black animate-scale p-1"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center p-2">
          {/* Main box with scaling animation */}
          <div className="w-full h-full border-2 border-black animate-scale p-3"></div>
          
        </div>
      </div>
    </div>
  );
};

export default DesignAnimation;
