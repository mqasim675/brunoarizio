import React, { useEffect, useState } from "react";

const VerticalGraph = ({
  number,
  name,
  parentStyling,
  childStyling,
  childStyNumber,
  mainWidthStyling,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollX > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${mainWidthStyling} w-[3.2%] h-screen neuemontreal`}>
      <div
        className={`h-[100vw] border-x-2 bg-[#f1efed] border-black w-full pt-[30px] ${parentStyling}`} 
      >
        <div
          className={`flex flex-col items-center   justify-between h-[73vh] text-[39px] box-border w-full  `}
        >
          <span className={`rotate-[270deg] -mt-8 ${childStyNumber} `}>
            {number}
          </span>
          <span
            className={`rotate-[270deg] ${childStyling}`}
            style={{ whiteSpace: "nowrap" }}
          >
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerticalGraph;
