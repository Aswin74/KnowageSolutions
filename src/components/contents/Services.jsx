import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { smallSphere } from "../../assets";
import { BottomLine } from "../../assets/design/BackgroudDesigns";

const Card = ({ className, img, title, text }) => {
  // Reusable Card Component for below
  return (
    <div
      className={`${className} h-30 flex p-3 items-center backdrop-blur-[2px]
			border-2 border-stroke-tint shadow-md shadow-cyan-300/50 rounded-3xl overflow-hidden`}
    >
      <img src={img} className="h-24 w-24 m-2 mr-7 md:mr-10" alt="icon" />
      <div className="block">
        <h5 className="h5 font-code font-semibold text-ks-primary">{title}</h5>
        {text && <p className="body-2 max-w-72">{text}</p>}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Section id="services">
      <div className="container relative z-2 mb-28">
        <Heading
          title="Our Free Services"
          className="md:max-w-md mb-14 lg:max-w-2xl"
        />

        {/* Service Bento Grid */}
        <div className="grid grid-cols-1 gap-4 max-w-[50rem] mx-auto lg:grid-cols-3">
          <Card
            img={smallSphere}
            title="College Admission"
            className="col-span-1 lg:h-64 lg:flex-col lg:justify-evenly lg:text-center"
          />

          <div className="grid col-span-2 gap-4">
            <Card
              img={smallSphere}
              title="Course Selection"
              className="lg:h-[7.5rem]"
            />
            <Card
              img={smallSphere}
              title="College Selection"
              className="lg:h-[7.5rem]"
            />
          </div>

          <Card
            img={smallSphere}
            title="Scholarship"
            text="Ranging from ₹10,000 to ₹1,00,000 for all students who join through us."
            className="col-span-2 lg:h-56"
          />

          <Card
            img={smallSphere}
            title="Free College Visit"
            className="col-span-1 lg:h-56 lg:flex-col lg:text-center"
          />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Services;
