import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ScrollParallax } from "react-just-parallax"

import Section from "../../Section"
import Button from "../../Button"
import { curve, darkLogo, girl, lightLogo, logo } from "../../../assets"
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
import Destinations from "./Destinations"

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
            <section className="relative lg:h-[100vh] w-[100vw] overflow-hidden bg-emerald-400">
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
                        className="max-lg:h-[100vh] grid place-content-center max-md:place-items-center my-auto max-md:px-2 lg:pl-10"
                    >
                        <h1 className="hlarge uppercase mb-3 text-ks-white ">
                            Study&nbsp;in&nbsp;
                            <span className="text-ks-secondary">India</span>,
                            <br />
                            <span className="text-ks-secondary">Study</span>
                            &nbsp;Abroad
                        </h1>

                        <p className="body-1 max-md:text-center text-ks-white/90 mx-auto">
                            We provide best universities / colleges with
                            Affiliation, Accrediation and all Approvals. 100%
                            Placements and Internships.
                        </p>

                        <Button
                            to="/courses"
                            px="px-16 lg:px-20"
                            className="my-4"
                        >
                            See Courses
                        </Button>
                    </motion.div>

                    {/* 3D section */}
                    <div className="h-screen grid grid-cols-1 max-md:hidden">
                        <Hero3D />
                    </div>

                    <ScrollParallax>
                        <div className="w-[100%]">
                            <motion.img
                                animate={{ scale: [0.9, 1, 0.9] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                src={logo}
                                className="h-20 -mt-24 bg-ks-white rounded-full p-2 mx-auto lg:hidden"
                            />
                        </div>
                    </ScrollParallax>
                </motion.div>
            </section>

            {/* Counter */}
            <section className="p-7">
                <Counter />
            </section>

            {/* Info */}
            <section className="py-5 bg-ks-gray">
                <HeroInfo />
            </section>

            {/* Courses */}
            <section className="lg:my-5">
                <HeroCourses />
            </section>

            {/* Destinations */}
            <section className="py-8 bg-ks-gray">
                <Destinations />
            </section>

            {/* Contact */}
            <section className=" bg-ks-black">
                <HeroContact />
            </section>
        </>
    )
}

export default Hero
