import React, { useState, useEffect } from "react";
import Garoa from "../../asset/images/garoaImage.jpg";
import VerticalGraph from "../verticallyGraph";

const SelectedProject = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCirclePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setShowText(true);
    };

    const handleMouseLeave = () => {
      setShowText(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${Garoa})`,
        cursor: "none",
      }}
      className="relative bg-center bg-contain w-full h-full "
    >
      <VerticalGraph
        name="SELECTED PROJECT"
        number={12}
        childStyling={"mb-[77px]"}
      />
      <div
        className="absolute"
        style={{
          left: circlePosition.x,
          top: circlePosition.y,
          transition: "left 0.5s, top 0.5s", 
        }}
      >
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
          {showText && (
            <span className="text-gray-500 text-[14px]">Circle Text</span>
          )}
        </div>
      </div>
      <div className="absolute bottom-[8%] left-[10%]  text-[40px]">
        <h3 className="text-white">
          Garoa Skincare <br /> Bespoke shopping experience for skincare
        </h3>
      </div>
    </div>
  );
};

export default SelectedProject;
