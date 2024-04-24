import React, { useState } from "react";

const textData = [
  {
    defaultText: "Awwwards Academy Masterclass",
    hoverText:
      "Enroll on Awwwards Academy Enroll on Awwwards Academy Enroll on Awwwards Academy",
  },
  {
    defaultText: "Awwwards Annual Awards 2020",
    hoverText:
      "Best Independent of the Year Nominee (Bruno Arizio), Best Site of the Year (Studio Maertens), Best Mobile of the Year (Kaleidoz, Studio—BA®)",
  },
  {
    defaultText: "Awwwards",
    hoverText:
      "Studio— BA®, Studio Maertens, Kaleidoz, Claudia Moreira Salles, Erika Moreira, Bruno Arizio",
  },
  {
    defaultText: "The FWA",
    hoverText:
      "Erika Moreira, Studio Maertens, Kaleidoz, Bruno Arizio, Studio—BA® Erika Moreira, Studio Maertens, Kaleidoz, Bruno Arizio, Studio—BA® Erika Moreira, Studio Maertens, Kaleidoz, Bruno Arizio, Studio—BA®",
  },
  {
    defaultText: "CSS Design Awards",
    hoverText:
      "Studio Maertens, Kaleidoz, Claudia Moreira Salles, Erika Moreira, Bruno Arizio Studio Maertens, Kaleidoz, Claudia Moreira Salles, Erika Moreira, Bruno Arizio",
  },
  {
    defaultText: "Behance Interaction Gallery",
    hoverText:
      "Studio—BA®, Pinot Meunier, Studio Maertens, Erika Moreira, Bruno Arizio Studio—BA®, Pinot Meunier, Studio Maertens, Erika Moreira, Bruno Arizio Studio—BA®, Pinot Meunier, Studio Maertens, Erika Moreira, Bruno Arizio",
  },
  {
    defaultText: "Behance AIGA Gallery",
    hoverText:
      "Saura®, Pinot Meunier, Erika Moreira, Studio Maertens, Bruno Arizio Saura®, Pinot Meunier, Erika Moreira, Studio Maertens, Bruno Arizio",
  },
  {
    defaultText: "Awwwards Live Jury",
    hoverText: "Watch it on Youtube Watch it on Youtube Watch it on Youtube",
  },
  {
    defaultText: "Awwwards Live Jury (PT-BR)",
    hoverText: "Watch it on Youtube Watch it on Youtube Watch it on Youtube",
  },
  {
    defaultText: "Interview for Flux",
    hoverText: "Watch it on Youtube Watch it on Youtube Watch it on Youtube",
  },
  {
    defaultText: "Interview for The FWA",
    hoverText: "Read it now",
  },
  {
    defaultText: "Awwwards Live Jury (PT-BR)",
    hoverText: "Watch it on Youtube Watch it on Youtube Watch it on Youtube",
  },
];

const InfiniteTextLine = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative overflow-hidden w-full h-screen flex">
      <div className="flex-grow overflow-y-auto scrollExample">
        <div className="flex flex-col">
          <div className="">
            <p className="text-[77px] pl-8 border-b-2 border-black">
              Awards & Recognitions
            </p>
          </div>
          <div className="pt-[17rem]">
            <div
              className="text-container"
              style={{ height: "1100px", overflowY: "auto" }}
            >
              {textData.map((line, index) => (
                <div
                  key={index}
                  className="whitespace-nowrap overflow-hidden text-[40px] text-black border-b-2 border-black"
                  style={{
                    opacity: index === hoveredIndex ? 1 : 0.5,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="animate-marquee">
                    {index === hoveredIndex ? line.hoverText : line.defaultText}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteTextLine;
