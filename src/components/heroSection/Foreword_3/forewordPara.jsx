import React from "react";
import VerticallGraph from "../verticallyGraph";
const ForewordPara = () => {
  return (
    <div className="flex">
      <VerticallGraph
        number="3"
        name="FOREWORD"
        childStyNumber={"-mt-[17px]"}
      />
      <div className="flex justify-between pt-[31px] pl-[9%]">
        <div className="w-[78%] text-[9px]">
          <p className="w-[50%]">
            Bruno is currently part of the Jury board for two of the most
            renowned awards in the industry Awwwards and Webby Awards.
          </p>
        </div>
        <div className="w-[81%] -ml-[51px] pr-[74px]">
          <p className="w-full text-[14px]">
            Studio—BA® is an award-winning design and art direction practice
            working with a broad range of clients across a mix of disciplines
            that includes web design, creative direction, graphic design, and
            photography together with an extensive community of collaborators:
            photographers, 3d artists, and creative developers to deliver
            bespoke design projects. With an international client list, the
            practice can work alone or in collaboration with design agencies,
            and bureaus, past experiences include partnerships with Jam3,
            Sapient Razorfish and Publicis Groupé.{" "}
          </p>{" "}
          <br />
          <p className="w-full text-[13.4px]">
            Our portfolio of clients includes Adidas, Facebook, Toyota, Samsung,
            <br /> and Gatorade.
          </p>
        </div>
        <div className="w-full">
          <p className="w-[70%] text-[14px]">
            Since the start of the practice in 2010, Bruno has received awards
            and nominations from The FWA, Awwwards, Webby Awards, Visuelle, CSS
            Design Awards, AIGA, Typewolf, Behance, Muzli, and others. Bruno is
            frequently called to be a part of jury boards of world renowned
            creative competitions. Currently a proud juror of the Webby Awards
            (The International Academy of Digital Arts and Sciences®) and
            Awwwards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForewordPara;
