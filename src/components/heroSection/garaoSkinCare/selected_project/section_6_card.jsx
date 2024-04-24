import React from 'react'
import G_Logo from "../../../asset/images/G_Logo.jpg"
import YearExploreProps from '../../yearExploreProps'
const Section_6_card = () => {
  return (
    <div>
       <div
      style={{ backgroundImage: `url(${G_Logo})`, height: "472px" }}
    >
      <div>
        <YearExploreProps
          project="Pinot Meunier"
          year="2020"
          discipline="Branding, Art Direction, E-commerce"
          isGap=""
          isDiscipline=" flex"
        />
      </div>
    </div>
    </div>
  )
}

export default Section_6_card
