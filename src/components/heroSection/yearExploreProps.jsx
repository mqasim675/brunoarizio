import React from "react";
import Button from "./button";

const YearExploreProps = ({
  project,
  year,
  discipline,
  explore,
  isGap,
  isProject,
  isDiscipline,
}) => {
  return (
    <div className="py-2 bg-[#f1efed]">
      <div className="flex w-full justify-between items-center  border-y border-gray-500 text-[14px] py-1">
        <div className="flex w-[80%]  pl-7">
          <h3 className={`w-[30%]  ${isProject}`}>{project}</h3>
          <div className={`flex w-[50%]  ${isGap}`}>
            <h3 className={`w-[16%]`}>{year}</h3>
            <h3 className={`${isDiscipline}`}>{discipline}</h3>
          </div>
        </div>
        <div className="w-1/5 flex justify-end pr-7">
          {explore ? (
            <h3>{explore}</h3>
          ) : (
            <button>
              <Button name="View Project" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default YearExploreProps;
