import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"

import { BoyReading } from "../../../assets/lottie"
import Heading from "../../Heading"

const HeroInfo = () => {
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
                            hidden: { x: -100, opacity: 0 },
                            visible: { x: 0, opacity: 1 },
                        }}
                        transition={{
                            duration: 1,
                        }}
                        initial="hidden"
                        animate="visible"
                        className="order-2 lg:order-1"
                        aria-disabled
                    >
                        <Lottie
                            className="h-[25rem] "
                            animationData={BoyReading}
                        />
                    </motion.span>

                    {/* Text */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 },
                        }}
                        transition={{
                            duration: 1,
                        }}
                        initial="hidden"
                        animate="visible"
                        className="place-self-start py-10 order-1 lg:order-2"
                    >
                        <h1 className="hlarge max-md:ml-8 text-ks-primary mb-4">
                            What is Next ?
                        </h1>

                        <p className="px-3 max-md:px-10 body-1 text-ks-black ">
                            Are you looking for high salary packages and high
                            job oriented courses?
                            <br />
                            Then we are here to help you. We provide best
                            universities / colleges with affiliation,
                            accrediation and all approvals & We offer 100%
                            placements and internships.
                        </p>
                    </motion.div>
                </>
            )}
        </div>
    )
}

export default HeroInfo
