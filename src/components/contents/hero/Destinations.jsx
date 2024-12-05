import { motion } from "framer-motion"
import { popularDestinations } from "../../../constants"
import Heading from "../../Heading"

export const CityCard = ({ image, title, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="w-[20rem] lg:w-[25rem] bg-ks-white overflow-hidden group/cityCard hover:shadow-lg"
        >
            <div className="w-full lg:h-1/2 overflow-hidden">
                <img
                    src={image}
                    className="object-cover h-full w-full transition scale-100 group-hover/cityCard:scale-105"
                    alt={image}
                />
            </div>
            <div className="px-6 py-4">
                <h5 className="h5 text-ks-primary_dark">{title}</h5>
                <p className="text-sm text-justify">{description}</p>
            </div>
        </motion.div>
    )
}

const Destinations = () => {
    return (
        <>
            <Heading
                title="Popular Destinations"
                className="mx-auto grid place-items-center w-full"
            />
            <div className="flex flex-1 flex-row justify-center flex-wrap gap-4">
                {popularDestinations.map((item) => (
                    <CityCard
                        key={item.destination}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </>
    )
}

export default Destinations
