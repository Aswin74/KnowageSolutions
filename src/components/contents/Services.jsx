import React from "react";
import Section from "../Section";
import { BottomLine } from "../../assets/design/BackgroudDesigns";
import Heading from "../Heading";

const Services = () => {
  return (
    <Section id="services">
      <div className="container relative z-2 mb-28">
        <Heading
          title="Our Free Services"
          className="md:max-w-md mb-20 lg:max-w-2xl"
        />

        {/* Service Bento Grid */}
        <div className="grid grid-cols-1 gap-4 max-w-[50rem] mx-auto lg:grid-cols-3">
          <div className="col-span-1 h-64 p-3 backdrop-blur border-2 border-stroke-tint rounded-3xl overflow-hidden">
            college admission
          </div>

          <div className="col-span-2 gap-4">
            <div className="h-32 mb-3 p-3 backdrop-blur border-2 border-stroke-tint rounded-3xl overflow-hidden">
              course selection
            </div>
            <div className="h-28 p-3 backdrop-blur border-2 border-stroke-tint rounded-3xl overflow-hidden">
              college selection
            </div>
          </div>

          <div className="col-span-2 h-32 p-3 backdrop-blur border-2 border-stroke-tint rounded-3xl overflow-hidden">
            Scholarship
          </div>
          <div className="col-span-1 h-32 p-3 backdrop-blur border-2 border-stroke-tint rounded-3xl overflow-hidden">
            Free of Cost
          </div>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Services;
