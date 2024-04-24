import React from "react";
import YearExploreProps from "../../yearExploreProps";
import Girl_Img from "../../../asset/images/girls.jpg";
const Section_2_card = () => {
  return (
    <div style={{ backgroundImage: `url(${Girl_Img})`, height: "472px" }} className="">
      <div>
        <YearExploreProps
          project="Garoa Skincare"
          year="2021"
          discipline="Branding, Web Design, Development, Photography"
          isGap=""
          isDiscipline=" flex"
        />
      </div>
    </div>
  );
};

export default Section_2_card;
