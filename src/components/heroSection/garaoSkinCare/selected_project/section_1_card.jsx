import React from "react";
import YearExploreProps from "../../yearExploreProps";
import GaraoBrown from "../../../asset/images/garoa_brown.jpg";
const Section_1_card = () => {
  return (
    <>
      <div>
        <div
          className="flex"
          style={{ backgroundImage: `url(${GaraoBrown})`, height: "472px" }}
        >
          <div className=" font-medium w-full ">
            <h2 className="content text-black text-[59px] pl-6 bg-[#f1efed]">
              SELECTED PROJECT
            </h2>
            <div>
              <YearExploreProps
                project="Project"
                year="Year"
                discipline="Discipline"
                explore="Explore"
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Section_1_card;
