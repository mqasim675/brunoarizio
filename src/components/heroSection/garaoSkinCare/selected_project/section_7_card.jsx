import React from "react";
import YearExploreProps from "../../yearExploreProps";
import Signal_light from "../../../asset/images/Signal_Light.jpg";
const Section_7_card = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${Signal_light})`, height: "472px" }}>
        <div>
          <YearExploreProps
            project="Gatorade® Americas App"
            year="2016"
            discipline="App Design (iOS & Android), UI, UX, Art Direction"
            isGap=""
            isDiscipline=" flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_7_card;
