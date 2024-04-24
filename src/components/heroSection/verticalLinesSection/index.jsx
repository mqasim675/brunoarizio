import React, { useEffect } from "react";
import BorderComponent from "../borderLine";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroChild_Section = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="thumbnail_1 relative">
        <div className="first_section">
          <div>
            <BorderComponent />
          </div>
          <div className="flex gap-[20%] pt-20">
            <div className="text-[10px] pl-12">
              <span>N 40º 14’21.16’’</span> <br />
              <span>W 26º 12’13.14’’</span>
            </div>

            {/* after update can be use it. */}
            {/* data-aos="fade-up" data-aos-duration="1500" */}
            <div
              className="text-[25px] font-medium leading-6"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="flex ">
                <p className="text-[9px] mr-1 -mt-[5px]">(Working Worldwide)</p>
                <strong className="text-[40px] font-[100]">
                  Studio—BA® is{" "}
                </strong>{" "}
              </div>
              <br />{" "}
              <p className="text-[40px] font-[100]">
                {" "}
                a multidisciplinary design practice.{" "}
              </p>
            </div>
          </div>
          <div className="absolute top-[20%] w-[1470px] ">
            <div className="horizontal-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroChild_Section;
