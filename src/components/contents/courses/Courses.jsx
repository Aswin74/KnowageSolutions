import React from "react"
import Section from "../../Section"
import Heading from "../../Heading"
import { BottomLine } from "../../../assets/design/BackgroudDesigns"
import Button from "../../Button"
import Card from "../../Card"
import { courses } from "../../../constants"

const Courses = () => {
    return (
        <div className="bg-waveBg lg:bg-waveLg bg-fixed bg-cover bg-top lg:mt-10">
            <div className="container flex flex-col items-center pb-28">
                <Heading title="COURSES" className="mt-20 lg:mt-15" />

                <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
                    {courses.map((course) => (
                        <Card
                            key={course.id}
                            img={course.icon}
                            course={course.name}
                            alt={course.name}
                        />
                    ))}
                </div>
                {/* <Button className="mt-6">View More</Button> */}
            </div>
        </div>
    )
}

export default Courses
