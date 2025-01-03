import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { abroad } from "../../../constants"
import Heading from "../../Heading"

const Abroad = () => {
    const controls = useAnimation()

    useEffect(() => {
        controls.start({
            x: "-200%",
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 20,
                ease: "linear",
            },
        })
    }, [controls])
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <Heading
                title="Study Abroad"
                className="mx-auto grid place-items-center w-full"
            />

            {/* Services */}
            <div
                aria-label="abroad services"
                className="grid gap-4 pt-4 pb-6 place-items-center md:grid-cols-2 lg:grid-cols-3"
            >
                {abroad[0].services.map((service, index) => (
                    <p key={index} className="text-left w-full md:text-lg">
                        <span className="pr-1 text-ks-secondary">◉</span>
                        {service}
                    </p>
                ))}
            </div>

            {/* Flags */}
            <motion.div
                initial={{ x: 10 }}
                animate={controls}
                className="grid grid-flow-col gap-4 pt-8 place-items-center w-screen"
            >
                {[...abroad[0].countries, ...abroad[0].countries].map(
                    (item) => (
                        <div
                            key={item.country}
                            className="relative rounded-lg h-28 aspect-video round border-4 border-ks-gray p-1 lg:h-40"
                        >
                            <img
                                src={item.image}
                                alt={item.country}
                                className="w-full h-full object-cover rounded-md"
                            />
                            <div className="absolute bottom-0 p-2 bg-gradient-to-t from-ks-black w-full rounded-b-md">
                                <p className="text-ks-white font-semibold">
                                    {item.country}
                                </p>
                            </div>
                        </div>
                    )
                )}
            </motion.div>
        </motion.div>
    )
}

export default Abroad
