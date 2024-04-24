/* eslint-disable react/jsx-pascal-case */
import Double_Circle from "./art_animation";
import Design_Animation from "./design_animation";
import ScalingLine from "./interaction";
function VerticallScroll() {
  return (
    <>
      <div className="w-full ">
        <div className="flex w-[80%] justify-between pb-8 pl-[80px]">
          <div className="flex h-fit">
            <Double_Circle />
            <p>1.</p>
            <h2>Art Direction</h2>
          </div>
          <div className="w-[40%] text-[11.3px]">
            <p>
              Our process starts by predicting a visual narrative for the
              project, making it memorable, striking, and beautiful. A strong
              emphasis on Typography, Color, and Motion is a foundation for
              designing with clear intent. Each project—whether branding,
              website, mobile app or digital experience carries an intrinsic
              relationship of functionality and connectivity.
            </p>
          </div>
        </div>
        <div className="border-y-2 border-black py-8 w-full">
          <div className="flex w-[80%] justify-between pl-[80px]">
            <div className="flex h-fit">
              <Design_Animation />
              <p>2.</p>
              <h2>Design</h2>
            </div>
            <div className="w-[40%] text-[11.3px]">
              <p>
                We combine the long-lasting tradition of modernist design with
                technology to enhance human interaction. Art Direction is about
                creating a connection through tone of voice, Design is about
                making sure that this thread is consistent while the users are
                engaging with the product. The goal is always to craft a
                experience that is easy and enjoyable to use, we can achieve
                that through thoughtful interactive feedback and strong visual
                consistency for evolution and scale.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[80%] justify-between pl-[80px]">
          <div className="flex h-fit items-center">
            <ScalingLine />
            <p>3.</p>
            <h2>Interaction</h2>
          </div>
          <div className="w-[40%] text-[11.3px]">
            <p>
              We believe that motion and interactivity is a key layer in the
              digital environment, it is the conductor amid audience and
              product. Working with motion is very important to us because it
              represents the tactically that can be missed in the movement from
              print to digital. Motion plays a major role in making the
              experience material and closer to people. Motion is not
              particularly aesthetic, you can feel interactivity when things
              move the way you'd expect in a physical environment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerticallScroll;
