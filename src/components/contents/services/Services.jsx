import React from "react"
import { motion } from "framer-motion"
import Heading from "../../Heading"

import { BottomLine } from "../../../assets/design/BackgroudDesigns"
import {
    Accomodation,
    Admission,
    College,
    Course,
    Graduation,
    Guidance,
    Job,
    Loan,
    Placement,
    Scholarship,
} from "../../../assets/services"

const Card = ({ className, img, title, text }) => {
    // Reusable Card Component for below
    return (
        <motion.div
            className={`${className} h-28 flex p-3 items-center backdrop-blur-[2px] bg-ks-black/50
			border-2 border-stroke-tint shadow-md shadow-cyan-300/80 rounded-3xl overflow-hidden`}
        >
            <img
                src={img}
                className="h-16 w-16 m-2 mr-7  lg:h-24 lg:w-24 "
                alt="icon"
            />
            <div className="block">
                <h5 className="h5 font-code font-semibold text-ks-white">
                    {title}
                </h5>
                {text && <p className="body-2 text-ks-gray max-w-72">{text}</p>}
            </div>
        </motion.div>
    )
}

const Services = () => {
    return (
        <div className="bg-waveBg lg:bg-waveLg bg-fixed bg-cover bg-top pt-24">
            {/* <Section className="bg-ks-primary_dark/70"> */}
            <div className="container ">
                <Heading
                    title="Our Free Services"
                    className="mx-auto text-center text-ks-white"
                />

                <div className="grid lg:grid-cols-2 gap-4">
                    {/* Service Bento Grid 1 */}
                    {/* max-w-[50rem] mx-auto
max-w-[50rem] mx-auto */}
                    <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-3">
                        <Card
                            img={Admission}
                            title="College Admission"
                            className="col-span-1 lg:h-64 lg:flex-col lg:justify-evenly lg:text-center"
                        />

                        <div className="grid col-span-2 gap-4">
                            <Card
                                img={Course}
                                title="Course Selection"
                                className="lg:h-[7.5rem]"
                            />
                            <Card
                                img={College}
                                title="College Selection"
                                className="lg:h-[7.5rem]"
                            />
                        </div>

                        <Card
                            img={Scholarship}
                            title="Scholarship"
                            text="Ranging from ₹10,000 to ₹1,00,000 for all students who join through us."
                            className="col-span-2 lg:h-56"
                        />

                        <Card
                            img={College}
                            title="Free College Visit"
                            className="col-span-1 lg:h-56 lg:flex-col lg:text-center"
                        />
                    </div>

                    {/* Bento Grid 2 */}
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="grid col-span-1 gap-4">
                            <Card
                                img={Job}
                                title="Part Time Job Assistance"
                                className="row-span-2 lg:h-64"
                            />
                            <Card
                                img={Placement}
                                title="Placement Assistance"
                                className="row-span-2 lg:h-64"
                            />
                        </div>

                        <div className="grid col-span-1 gap-4">
                            <Card img={Loan} title="Education Loan" />
                            <Card img={Guidance} title="Carreer Guidance" />
                            <Card
                                img={Graduation}
                                title="Full Support until Graduaion"
                            />
                            <Card
                                img={Accomodation}
                                title="Accomodation Assistance"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <BottomLine />
            {/* </Section> */}
        </div>
    )
}

export default Services
