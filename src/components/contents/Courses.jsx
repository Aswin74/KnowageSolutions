import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { BottomLine } from "../../assets/design/BackgroudDesigns";
import { service3 } from "../../assets";
import Button from "../Button";

const Card = ({ img, course }) => {
  // Reusable Card Component for below
  return (
    <div
      className="h-52 w-52 p-[0.2rem] items-center bg-conic-gradient
               rounded-xl overflow-hidden lg:h-60 lg:w-60"
    >
      <div
        className="flex flex-col p-4 items-center justify-between w-full h-full 
      bg-gradient-to-r from-ks-primary to-teal-800 text-ks-white rounded-xl hover:bg-gradient-to-l"
      >
        <img src={img} className="h-20 w-20 lg:h-24 lg:w-24 " alt="icon" />
        <h6 className="h6  font-code font-semibold text-ks-white">{course}</h6>
        <Button className="flex" href="courses" primary>
          Apply
        </Button>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <Section id="courses">
      <div className="container flex flex-col items-center lg:mb-28">
        <Heading title="Courses Offered" />

        <div className="grid grid-cols-2 gap-2 lg:grid-cols-5">
          <Card img={service3} course="Chakra control" />
          <Card img={service3} course="Chakra control" />
          <Card img={service3} course="Chakra control" />
          <Card img={service3} course="Chakra control" />
          <Card img={service3} course="Chakra control" />
        </div>
        <Button className="mt-6">View More</Button>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Courses;
