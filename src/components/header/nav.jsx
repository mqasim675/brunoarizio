import React, { useEffect, useState } from "react";
import "./nav.css";
import AOS from "aos";
import "aos/dist/aos.css";
export const Nav = () => {
  // const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#f1efed] fixed w-full z-50 nav">
      <div className="text-black text-[16px] py-2 px-3 flex justify-between w-[100%] mx-auto relative">
        <div className="border-animating" />
        <div className="w-[25%]">
          <div className="studio flex" data-aos="fade-left">
            <p className="flex round_main">
              STUDIO-B{" "}
              <p className="round flex text-black ">
                {" "}
                <span className="">RUNO</span>{" "}
              </p>{" "}
              A{" "}
              <p className="round flex">
                <span className="round">RIZIO</span>
              </p>{" "}
              @
            </p>
          </div>
        </div>
        <div className="w-[25%]">
          <p>Sao Paulo 06:18 AM </p>
        </div>
        <div className="w-[25%]">
          <span>London 09:19 AM </span>
        </div>
        <div className="w-[25%] flex justify-end h-3 items-center">
          <span> Summary</span>
          <svg
            viewBox="0 0 26 16"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "12px",
            }}
          >
            <circle cx="13" cy="8" r="7" class="circle-1"></circle>{" "}
            <circle
              cx="13"
              cy="8"
              r="7"
              stroke-width="1"
              class="circle-2"
            ></circle>
          </svg>
          <span className="w-3 h-3 rounded-full border border-black -ml-2"></span>
        </div>
      </div>
    </div>
  );
};
