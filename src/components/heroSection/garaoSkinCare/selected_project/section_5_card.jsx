import React from "react";
import YearExploreProps from "../../yearExploreProps";
import Girl_Hand_Image from "../../../asset/images/Girl_Hand_Image.jpg";
const Section_5_card = () => {
  return (
    <div
    style={{ backgroundImage: `url(${Girl_Hand_Image})`, height: "472px" }}
    >
      <div>
        <YearExploreProps
          project="Studio Maertens"
          year="2020"
          discipline="Branding, E-commerce, Development"
          isGap=""
          isDiscipline=" flex"
        />
      </div>
    </div>
  );
};

export default Section_5_card;
