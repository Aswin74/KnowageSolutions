import { motion } from "framer-motion"
import { heroCourses } from "../../../constants"
import Button from "../../Button"
import Card from "../../Card"
import Heading from "../../Heading"

const HeroCourses = () => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="grid place-content-center place-items-center p-5"
        >
            <Heading title="Our Courses" />

            <div className="grid grid-cols-2 lg:grid-cols-4">
                {heroCourses.map((item, index) => (
                    <Card key={index} img={item.icon} course={item.name} />
                ))}
            </div>

            <Button to="/courses">View More</Button>
        </motion.div>
    )
}

export default HeroCourses
