import React from "react";
import Garden_Image from "../../../asset/images/Garden_Image.jpg";
import YearExploreProps from "../../yearExploreProps";
const Section_4_card = () => {
  return (
    <div style={{ backgroundImage: `url(${Garden_Image})`, height: "472px" }}>
      <div>
        <YearExploreProps
          project="Kaleidoz"
          year="2020"
          discipline="Branding, Photography, Website, Development"
          isGap=""
          isDiscipline=" flex"
        />
      </div>
    </div>
  );
};

export default Section_4_card;
