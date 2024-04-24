import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Thumbnail_2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full border-l-2 border-black">
      <div>
        <div className="light-font">
          <button className="flex justify-between text-[28px] w-[95%] mx-auto leading-7">
            <h1 className="" data-aos="fade-left" data-aos-duration="1800">
              FOREWORD{" "}
            </h1>
            <h1>3</h1>
          </button>
        </div>
        <div className="border-y border-black font-[300]">
          <button className="flex justify-between text-[28px] w-[95%] mx-auto leading-7">
            <h1 className="" data-aos="fade-left" data-aos-duration="2500">
              APPROACH{" "}
            </h1>
            <h1>5</h1>
          </button>
        </div>
        <div className="font-[300]">
          <button className="flex justify-between text-[28px] w-[95%] mx-auto leading-7">
            <h1 className="" data-aos="fade-left" data-aos-duration="3000">
              PROCESS{" "}
            </h1>
            <h1>6</h1>
          </button>
        </div>
        <div className="border-y border-black font-[300] ">
          <button className="flex justify-between text-[28px] w-[95%] mx-auto leading-7">
            <h1 className="" data-aos="fade-left" data-aos-duration="1000">
              SELECTED PROJECT{" "}
            </h1>
            <h1>12</h1>
          </button>
        </div>
        <div className=" font-[300] ">
          <button className="flex justify-between text-[28px] w-[95%] mx-auto leading-7 uppercase">
            <h1 className="" data-aos="fade-left" data-aos-duration="2200">
              Awards & Recognitions
            </h1>
            <h1>22</h1>
          </button>
        </div>
        <div className="border-y border-black font-[300] ">
          <button className="flex justify-between text-[28px] w-[95%] mx-auto leading-7 uppercase">
            <h1 className="" data-aos="fade-left" data-aos-duration="2500">
              Contact us
            </h1>
            <h1>24</h1>
          </button>
        </div>
        <div className="border-b border-black font-[300] ">
          <button className="flex justify-between text-[28px] w-[95%] mx-auto leading-7 uppercase">
            <h1 className="" data-aos="fade-left" data-aos-duration="1600">
              Colophon
            </h1>
            <h1>25</h1>
          </button>
        </div>
        <div className="flex">
          <p
            className="text-[18rem] uppercase"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            s
          </p>
          <p
            className="text-[18rem] uppercase"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            u
          </p>
          <p
            className="text-[18rem] uppercase"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            m
          </p>
          <p
            className="text-[18rem] uppercase"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            m
          </p>
          <p
            className="text-[18rem] uppercase"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            a
          </p>
          <p
            className="text-[18rem] uppercase"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            r
          </p>
          <p
            className="text-[18rem] uppercase"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            y
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail_2;
