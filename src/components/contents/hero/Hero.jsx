import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ScrollParallax } from "react-just-parallax"

import Section from "../../Section"
import Button from "../../Button"
import { curve, darkLogo, girl, lightLogo } from "../../../assets"
import {
    BackgroundCircles,
    BottomLine,
    Gradient,
} from "../../../assets/design/BackgroudDesigns"
import Services from "../services/Services"
import Hero3D from "./Hero3D"
import Counter from "./Counter"
import HeroInfo from "./HeroInfo"
import HeroContact from "./HeroContact"
import HeroCourses from "./HeroCourses"

const Hero = () => {
    const parallaxRef = useRef(null)
    const viewRef = useRef(null)
    const isInView = useInView(viewRef, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        // if (isInView) mainControls.start("visible")
        console.log(isInView)
    }, [isInView])

    return (
        <>
            {/* Landing */}
            <div className="relative lg:h-[100vh] w-[100vw] overflow-hidden bg-emerald-400">
                <motion.div
                    initial={{ opacity: 0, rotateX: 90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 lg:grid-cols-2"
                >
                    {/* Text */}
                    <motion.div
                        initial={{ translateX: -50, rotateX: 90 }}
                        animate={{ translateX: 0, rotateX: 0 }}
                        transition={{ duration: 1 }}
                        className="max-lg:h-[100vh] grid place-content-center my-auto pl-10"
                    >
                        <h1 className="hlarge uppercase mb-3 text-ks-white ">
                            Study&nbsp;in&nbsp;
                            <span className="text-ks-secondary">India</span>,
                            <br />
                            <span className="text-ks-secondary">Study</span>
                            &nbsp;Abroad
                        </h1>

                        <p className="body-1 text-balance text-ks-white/90 mx-auto">
                            We provide best universities / colleges with
                            Affiliation, Accrediation and all Approvals. 100%
                            Placements and Internships.
                        </p>

                        <Button
                            to="/courses"
                            px="px-16 lg:px-20"
                            className="mt-4"
                        >
                            See Courses
                        </Button>
                    </motion.div>

                    {/* 3D section */}
                    <div className="h-screen grid grid-cols-1">
                        <Hero3D />
                    </div>
                </motion.div>
            </div>

            {/* Counter */}
            <div className="p-7">
                <Counter />
            </div>

            {/* Info */}
            <div className="py-5 bg-ks-gray">
                <HeroInfo />
            </div>

            {/* Courses */}
            <div className="lg:my-5">
                <HeroCourses />
            </div>

            {/* Contact */}
            <div className=" bg-ks-black">
                <HeroContact />
            </div>
        </>
    )
}

export default Hero
