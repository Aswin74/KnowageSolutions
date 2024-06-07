import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { smallSphere } from "../../assets";
import { BottomLine } from "../../assets/design/BackgroudDesigns";

const Card = ({ className, img, title, text }) => {
  // Reusable Card Component for below
  return (
    <div
      className={`${className} h-28 flex p-3 items-center backdrop-blur-[2px]
			border-2 border-stroke-tint shadow-md shadow-cyan-300/50 rounded-3xl overflow-hidden`}
    >
      <img
        src={img}
        className="h-20 w-20 m-2 mr-7  lg:h-24 lg:w-24 "
        alt="icon"
      />
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
          className="md:max-w-md lg:max-w-2xl"
        />

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Service Bento Grid 1 */}
          {/* max-w-[50rem] mx-auto
max-w-[50rem] mx-auto */}
          <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-3">
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

          {/* Bento Grid 2 */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="grid col-span-1 gap-4">
              <Card
                img={smallSphere}
                title="Part Time Job Assistance"
                className="row-span-2 lg:h-64"
              />
              <Card
                img={smallSphere}
                title="Placement Assistance"
                className="row-span-2 lg:h-64"
              />
            </div>

            <div className="grid col-span-1 gap-4">
              <Card img={smallSphere} title="Education Loan" />
              <Card img={smallSphere} title="Carreer Guidance" />
              <Card img={smallSphere} title="Full Support until Graduaion" />
              <Card img={smallSphere} title="Accomodation Assistance" />
            </div>
          </div>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Services;
