/* eslint-disable react/jsx-pascal-case */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/jsx-pascal-case */
// eslint-disable-next-line
// import BorderComponent from "./borderLine";

import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import "./stylesheet.css";
import ResizeObserver from "resize-observer-polyfill";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Thumbnail_2 from "./thumbnail_2";
// import Foreword_3 from "./verticallyGraph";
import ForewordPara from "./Foreword_3/forewordPara";
import Forward_4 from "./foreword_4/foreword_4";
import Crfting from "./crfting_section/crfting";
import VerticalScroll from "./verticalScroll/verticalScroll";
// import SelectedProject from "../vertiaclSelected_project/selectedProject";
import { SelectedProject } from "./selected_image_project_section";
import GaraoSkin_13_Section from "./garaoSkinCare/garaoSkin_13_section";
import Award from "./award_recognition/award";
import ContactSection24 from "./contacts24_section/ContactSection";
import ColoPhone from "./colorphone25_section/colophone";
import HeroChild_Section from "./verticalLinesSection";
import RufSection from "./RufSection/Ruf";
export const SmoothScroll = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <div className="scroll-container">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
        >
          <div className="thumbnails">
            <div className="first_section">
              <HeroChild_Section />
            </div>
            <div className="thumbnail_2 ">
              <div>
                <Thumbnail_2 />
              </div>
            </div>
            <div className="thumbnail_2">
              <ForewordPara />
            </div>
            <div className="foreword_section flex">
              <Forward_4 />
            </div>
            <div className="crafting_section">
              <Crfting />
            </div>
            <div className="vertical_scrolling">
              <VerticalScroll />
            </div>
            <div className="selected_project">
              <SelectedProject />
            </div>
            <div className="selected_project">
              <GaraoSkin_13_Section />
            </div>
            <div className="award_section">
              <Award />
            </div>
            <div className="contactsection24">
              <ContactSection24 />
            </div>
            <div className="colophone_section">
              <ColoPhone />
            </div>
            <div className="ruf_section">
              <RufSection />
            </div>
          </div>
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </>
  );
};

export default SmoothScroll;
