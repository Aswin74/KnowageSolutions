import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Card = ({ id, img, course }) => {
    // Reusable Card Component for below
    return (
        <div
            id={id}
            className="h-40 w-36 p-[0.2rem] mt-3 items-center 
                overflow-hidden group/card duration-500 hover:-translate-y-3 md:h-52 md:w-48 lg:h-60 lg:w-56 "
        >
            <div
                className="flex flex-col p-4 items-center justify-between w-full h-full transition-all duration-200 rounded-tl-3xl rounded-br-3xl
      bg-ks-primary border-4 border-ks-white group-hover/card:bg-ks-primary_dark group-hover/card:rounded-lg "
            >
                <img
                    src={img}
                    className="h-15 w-15 md:h-20 md:w-20 lg:h-24 lg:w-24 "
                    alt="course icon"
                />
                <h6 className="font-semibold text-ks-white text-center text-sm md:text-base lg:h6">
                    {course}
                </h6>

                <Link to="/register" state={{ course }}>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="group/button button h-7 px-5 relative inline-flex items-center justify-center rounded-lg bg-ks-white transition-colors md:h-11"
                        aria-label={`Apply for ${course}`}
                    >
                        <span className="text-ks-primary group-hover/button:scale-110">
                            APPLY
                        </span>
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}

export default Card
