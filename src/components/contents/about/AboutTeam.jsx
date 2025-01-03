import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import Heading from "../../Heading"
import { theTeam } from "../../../constants"
import { ScrollParallax } from "react-just-parallax"

const TeamCard = (props) => {
    return (
        <div
            className="relative h-full w-72 bg-ks-black text-ks-white shadow-lg shadow-ks-black rounded-lg overflow-hidden"
            role="card"
            aria-label="member"
        >
            <div className="relative mb-5">
                <img
                    src={props.image}
                    alt={props.name}
                    className="aspect-square object-cover rounded-t-lg"
                />
                <div className="absolute -bottom-4 left-10 right-10 p-1 text-center text-ks-black bg-ks-secondary rounded-lg">
                    <h6 className="font-semibold text-lg lg:text-xl">
                        {props.name}
                    </h6>
                    <p className="text-xs">{props.role}</p>
                </div>
            </div>

            {/* desc */}
            <div className="relative text-sm px-4 pb-4 pt-2">
                <p className="text-sm">{props.description}</p>
            </div>

            {/* bg animation */}
            <ScrollParallax isAbsolutelyPositioned>
                <motion.div
                    animate={{
                        translateX: [20, 15, 10],
                        translateY: [-10, -25, -30],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="absolute bottom-0 h-20 w-32 rounded bg-gradient-to-b from-ks-gray/15"
                />
                <motion.div
                    animate={{
                        translateX: [20, 15, 10],
                        translateY: [-10, -25, -30],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="absolute bottom-5 right-3 h-20 w-32 rounded bg-gradient-to-b from-ks-gray/10"
                />
                <motion.div
                    animate={{
                        translateX: [-20, -15, -10],
                        translateY: [-10, 0, 5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                    className="absolute bottom-1/4 left-1/2 h-20 w-28 rounded bg-gradient-to-b from-ks-gray/15"
                />
            </ScrollParallax>
        </div>
    )
}

const AboutTeam = () => {
    const controls = useAnimation()
    const [activeCard, setActiveCard] = useState(1)

    // loop interval
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % theTeam.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [theTeam.length])

    // loop animation
    // useEffect(() => {
    //     controls.start({
    //         x: "-40%",
    //         transition: {
    //             repeat: Infinity,
    //             repeatType: "reverse",
    //             duration: 10,
    //             ease: "linear",
    //         },
    //     })
    // }, [controls])

    return (
        <section
            className="grid place-content-center place-items-center p-5 bg-ks-gray w-full"
            role="teamInfo"
            aria-label="Team Members"
        >
            <Heading title="Meet the Team" />

            <motion.div
                // initial={{ x: 0 }}
                // animate={controls}
                className="grid grid-cols-3 gap-4 w-max translate-x-80"
                role="cards"
                aria-label="About the members"
            >
                {theTeam.map((member, index) => (
                    <motion.div
                        key={index}
                        // initial={{ translateX: 300 * 2 }}
                        // animate={{ translateX: -250 * activeCard }}
                        className={`transition-all duration-500 ${
                            index === activeCard
                                ? "opacity-100 blur-none"
                                : "opacity-80 blur-sm"
                        }`}
                        style={{
                            transform: `translateX(-${
                                activeCard * 110
                            }%) scale(${index === activeCard ? "1" : "0.95"})`,
                        }}
                    >
                        <TeamCard {...member} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default AboutTeam
