import React from "react";
import VerticalGraph from "../verticallyGraph";
import ColophoneForm from "./colophoneForm";
import ColophoneAnimation from "./colophoneAnimation";
const ColoPhone = () => {
  return (
    <div>
      <div className="flex">
        <VerticalGraph
          name="COLOPHONE"
          number={25}
          childStyNumber="mt-[-23px]"
          childStyling=""
          mainWidthStyling="w-[3%]"
        />
        <ColophoneForm />
        <ColophoneAnimation />
      </div>
    </div>
  );
};

export default ColoPhone;
