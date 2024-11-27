import { heroCourses } from "../../../constants"
import Button from "../../Button"
import Card from "../../Card"
import Heading from "../../Heading"

const HeroCourses = () => {
    return (
        <div className="place-items-center p-5">
            <Heading title="Our Courses" />

            <div className="grid grid-cols-2 lg:grid-cols-4">
                {heroCourses.map((item, index) => (
                    <Card key={index} img={item.icon} course={item.name} />
                ))}
            </div>

            <Button to="/courses">View More</Button>
        </div>
    )
}

export default HeroCourses
