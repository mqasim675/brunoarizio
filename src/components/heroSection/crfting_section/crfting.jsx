import React from "react";
import VerticalGraph from "../verticallyGraph";

const Crfting = () => {
  return (
    <div className="flex">
      <div>
        <div className="w-[89%] flex justify-end pt-[42px]">
          <h2 className="text-[30px] w-[56%]">
            Crafting a unique foundation in <br /> Photography, Typography{" "}
            <br /> and Interactivity is imbued in our <br /> Ethos. Studio—BA®
            attentive <br />
            approach to design is found in <br /> the juxtaposition of modernism{" "}
            <br />
            and technology.
          </h2>
        </div>
        <div className=" w-[94%] flex justify-end pt-5 ">
          <div className="w-[83%] flex pl-6">
            <div className="flex flex-col ">
              <h3 className="text-[12px] pb-7 ">Essence</h3>
              <p className="text-[9px] w-[70%]">
                The essence of Studio—BA® is found in the juxtaposition of
                modernism and technology. We combine the long-lasting tradition
                of modernist design with technology to enhance human <br />{" "}
                interaction. Each project carries an <br /> intrinsic
                relationship of functionality <br /> and connectivity.{" "}
              </p>
              <h2 className="text-[30px] pt-16">1</h2>
            </div>
            <div className="flex flex-col w-[79%] ">
              <h3 className="text-[12px] pb-7">Interaction</h3>
              <p className="text-[9px] w-[100%]">
                Motion is not particularly aesthetic, you <br /> can feel
                interactivity when things move <br /> the way you'd expect them
                to in a <br /> physical environment. It welcomes you to <br />{" "}
                navigate and creates a deeper intimate <br /> link with you.
                Motion transforms a <br /> product as you experience it.
              </p>
              <h2 className="text-[30px] pt-[80px]">2</h2>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[12px] pb-7">Collaboration</h3>
              <p className="text-[10px] w-[63%]">
                Collaboration is at the heart of Studio—BA® and we frequently
                work with our global network of independent collaborators to
                bring ideas to life. We believe that Design is a conductor among
                many disciplines, from Photography,
              </p>
              <h3 className="text-[30px] pt-[100px]">3</h3>
            </div>
          </div>
        </div>
      </div>
      <VerticalGraph
        childStyNumber="-mt-[17px]"
        childStyling="relative top-[15px]"
        name="PROCESS"
        number={6}
        className="border-x-2 border-black"
      />
    </div>
  );
};

export default Crfting;
