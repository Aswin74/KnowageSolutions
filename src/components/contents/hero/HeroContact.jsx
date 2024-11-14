import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"

import { CollegeBoy } from "../../../assets/lottie"
import Heading from "../../Heading"
import Button from "../../Button"

const HeroContact = () => {
    const infoRef = useRef(null)
    const [infoVisible, setInfoVisible] = useState(false)

    const handleInfoIntersect = (entries) => {
        entries.forEach((entry) => {
            entry.isIntersecting ? setInfoVisible(true) : ""
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleInfoIntersect, {
            threshold: 0.2,
        })

        if (infoRef.current) {
            observer.observe(infoRef.current)
        }

        return () => {
            if (infoRef.current) {
                observer.unobserve(infoRef.current)
            }
        }
    }, [infoRef])

    return (
        <div
            ref={infoRef}
            className="h-full w-full grid lg:grid-cols-2 place-items-center"
        >
            {infoVisible && (
                <>
                    {/* Animation Image */}
                    <motion.span
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 },
                        }}
                        transition={{
                            duration: 2,
                        }}
                        initial="hidden"
                        animate="visible"
                        className="order-2"
                    >
                        <Lottie
                            className="h-[30rem] "
                            animationData={CollegeBoy}
                        />
                    </motion.span>

                    {/* Text */}
                    <motion.div
                        variants={{
                            hidden: { x: -100, opacity: 0 },
                            visible: { x: 0, opacity: 1 },
                        }}
                        transition={{
                            duration: 2,
                        }}
                        initial="hidden"
                        animate="visible"
                        className=" p-7 order-1"
                    >
                        <h1 className="hlarge max-md:ml-8 text-ks-secondary mb-4">
                            Get in touch with us
                        </h1>

                        <p className="pl-3 max-md:px-10 body-1 text-ks-white ">
                            Get in touch with us to know more about our courses
                            and services provided.
                        </p>
                        <Button to="/contact" className="mt-3 ml-10 lg:ml-3">
                            Contact Us
                        </Button>
                    </motion.div>
                </>
            )}
        </div>
    )
}

export default HeroContact
