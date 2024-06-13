import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { BottomLine } from "../../assets/design/BackgroudDesigns";
import Button from "../Button";
import Card from "../Card";
import { courses } from "../../constants";

const Courses = () => {
  return (
    <Section id="courses">
      <div className="container flex flex-col items-center mb-28">
        <Heading title="Courses Offered" />

        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {courses.slice(0, 4).map((course) => (
            <Card
              id={course.id}
              img={course.icon}
              course={course.name}
              alt={course.name}
            />
          ))}
        </div>
        <Button className="mt-6">View More</Button>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Courses;
