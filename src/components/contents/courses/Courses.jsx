import React, { useState } from "react"
import Section from "../../Section"
import Heading from "../../Heading"
import { BottomLine } from "../../../assets/design/BackgroudDesigns"
import Button from "../../Button"
import Card from "../../Card"
import { addOnCourses, courses } from "../../../constants"
import Tabs from "./Tabs"
import { makeUseVisualState } from "framer-motion"

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState("Medical")
    const [addOn, setAddOn] = useState(false)
    const [selectedAddOn, setSelectedAddOn] = useState("BCom")

    function handleSelect(e) {
        const selected = e.target.value
        setSelectedCourse(selected)

        if (selected === "AddOn") {
            setAddOn(true)
        } else {
            setAddOn(false)
        }
        console.log(selected)
    }

    const handleAddOn = (e) => {
        setSelectedAddOn(e.target.value)
    }

    return (
        <div className="bg-waveBg lg:bg-waveLg bg-fixed bg-cover bg-top lg:pt-8">
            <div className="container flex flex-col items-center pb-28">
                <Heading
                    title="COURSES"
                    className="text-ks-white mt-20 lg:mt-15"
                />

                <menu className="">
                    <Tabs
                        selectedCourse={selectedCourse}
                        handleCourses={handleSelect}
                        addOn={addOn}
                        selectedAddOn={selectedAddOn}
                        handleAddOn={handleAddOn}
                    />
                </menu>
                {addOn && <h1>{selectedAddOn}</h1>}

                <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
                    {!addOn &&
                        courses[0][selectedCourse].map((course) => (
                            <Card
                                key={course.id}
                                img={course.icon}
                                course={course.name}
                                alt={course.name}
                            />
                        ))}

                    {addOn &&
                        addOnCourses[0][selectedAddOn].map((course) => (
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
