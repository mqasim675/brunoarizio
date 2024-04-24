import React from "react";
import Erika_Logo from "../../../asset/images/ErikaLogo.jpg";
import YearExploreProps from "../../yearExploreProps";
const Section_8_card = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${Erika_Logo})`, height: "472px" }}>
        <div>
          <YearExploreProps
            project="Claudia Moreira Salles"
            year="2016"
            discipline="Design, Art Direction"
            isGap=""
            isDiscipline=" flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_8_card;
