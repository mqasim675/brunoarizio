/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Section_1_card from "./selected_project/section_1_card";
import Section_2_card from "./selected_project/section_2_card";
import VerticalGraph from "../verticallyGraph";
import Section_3_card from "./selected_project/section_3_card";
import Section_4_card from "./selected_project/section_4_card";
import Section_5_card from "./selected_project/section_5_card";
import Section_6_card from "./selected_project/section_6_card";
import Section_7_card from "./selected_project/section_7_card";
import Section_8_card from "./selected_project/section_8_card";
import Section_9_card from "./selected_project/section_9_card";
const GaraoSkin_13_section = () => {
  return (
    <div className="scrollExample">
      <div className="flex ">
        <VerticalGraph
          childStyNumber={"-mt-[1px]"}
          name="GAROA SKINCARE"
          number={13}
          childStyling={"mb-[60px]"}
        />
        <div className="scrollable-div">
          <Section_1_card />
          <Section_2_card />
          <Section_3_card />
          <Section_4_card />
          <Section_5_card />
          <Section_6_card />
          <Section_7_card />
          <Section_8_card />
          <Section_9_card />
        </div>
      </div>
    </div>
  );
};

export default GaraoSkin_13_section;
