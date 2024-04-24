import React from "react";
import VerticalGraph from "../verticallyGraph";
import Award_top from "./award_components/award_top";

const Award = () => {
  return (
    <div className="flex">
      <VerticalGraph
        name="Awards & Recognitions"
        number={22}
        childStyNumber="mt-[-5px]"
        childStyling="mb-20"
        mainWidthStyling="w-[4%]"
      />
      <Award_top />
    </div>
  );
};

export default Award;
