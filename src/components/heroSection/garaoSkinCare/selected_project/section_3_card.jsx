import React from "react";
import YearExploreProps from "../../yearExploreProps";
import Three_Box_Image from "../../../asset/images/Three_Box_image.jpg";
const Section_3_card = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Three_Box_Image})`, height: "472px" }}
    >
      <div>
        <YearExploreProps
          project="Impermanence"
          year="2020"
          discipline="Creative Direction, Photography, Sound Design, Development"
          isGap=""
          isDiscipline=" flex"
        />
      </div>
    </div>
  );
};

export default Section_3_card;
