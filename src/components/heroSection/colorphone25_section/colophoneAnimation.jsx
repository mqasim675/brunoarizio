import React, { useState, useEffect } from "react";
import BorderComponent from "./BackgrundLines";

const HoverText = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [animationStyle, setAnimationStyle] = useState("paused");
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const previousScrollPosition = window.prevScrollY;

      if (previousScrollPosition !== null) {
        const scrollDirection =
          currentScrollPosition > previousScrollPosition ? "down" : "up";
        setScrollDirection(scrollDirection);
      }

      window.prevScrollY = currentScrollPosition; // update previous scroll position

      setIsScrolling(true);
      setAnimationStyle("running");

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolling(false);
        setAnimationStyle("paused");
      }, 100); // Adjust this timeout as needed
    };

    window.prevScrollY = null; // initialize previous scroll position
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout); // Clear the timeout on component unmount
    };
  }, []);

  return (
    <div className="relative">
      <BorderComponent />
      <div className="flex justify-between w-[1000px] absolute top-[9%]">
        <div
          className="doubleCircleRight"
          style={{
            animationPlayState: animationStyle,
            animationDirection: scrollDirection === "up" ? "reverse" : "normal",
          }}
        >
          <span className="w-[400px] h-[400px] rounded-full border-2 border-black flex "></span>
        </div>
        <div
          className="doubleCircleLeft"
          style={{
            animationPlayState: animationStyle,
            animationDirection: scrollDirection === "up" ? "reverse" : "normal",
          }}
        >
          <span className="w-[400px] h-[400px] rounded-full border-2 border-black flex"></span>
        </div>
      </div>
    </div>
  );
};

export default HoverText;
