import React from "react";
import ManGlass from "../../asset/images/man_1.jpg";
import VerticallGraph from "../verticallyGraph";

const Foreword_4 = () => {
  return (
    <div className="flex">
      <img src={ManGlass} alt="Logo" width={900} />
      <VerticallGraph
        name="APPROACH"
        mainWidthStyling={"w-[5.2%]"}
        number={5}
        childStyling={"mb-[-10px] "}
        childStyling1={"mt-[-25px]"}
        parentStyling={"w-[38%    ]"}
      />
    </div>
  );
};

export default Foreword_4;
