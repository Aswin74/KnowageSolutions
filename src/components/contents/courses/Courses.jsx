import React, { useState } from "react"
import Section from "../../Section"
import Heading from "../../Heading"
import { BottomLine } from "../../../assets/design/BackgroudDesigns"
import Button from "../../Button"
import Card from "../../Card"
import { courses } from "../../../constants"
import Tabs from "./Tabs"

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState("Medical")
    const [addOn, setAddOn] = useState(false)

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
    return (
        <div className="bg-waveBg lg:bg-waveLg bg-fixed bg-cover bg-top lg:mt-10">
            <div className="container flex flex-col items-center pb-28">
                <Heading title="COURSES" className="mt-20 lg:mt-15" />

                <menu>
                    {/* <Tabs
                        text="Medical"
                        onClick={handleSelect}
                        value="Medical"
                    />
                    <Tabs
                        text="Paramedical"
                        onClick={handleSelect}
                        value="Paramedical"
                    />
                    <Tabs
                        text="Allied Health"
                        onClick={handleSelect}
                        value="AlliedHealthScience"
                    />
                    <Tabs
                        text="Applied Science"
                        onClick={handleSelect}
                        value="AppliedScience"
                    />
                    <Tabs
                        text="Designing"
                        onClick={handleSelect}
                        value="Designing"
                    />
                    <Tabs
                        text="Engineering"
                        onClick={handleSelect}
                        value="Engineering"
                    />
                    <Tabs text="Marine" onClick={handleSelect} value="Marine" />
                    <Tabs
                        text="Management"
                        onClick={handleSelect}
                        value="Management"
                    /> */}

                    <Tabs value={selectedCourse} onChange={handleSelect} />
                    {addOn && (
                        <>
                            <h1>sas</h1>
                            <select>
                                <option>huuha </option>
                            </select>
                        </>
                    )}
                </menu>

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

                    {addOn && <h1>add on</h1>}
                </div>
                {/* <Button className="mt-6">View More</Button> */}
            </div>
        </div>
    )
}

export default Courses
