import { Link } from "react-router-dom"
import Button from "./Button"
import { motion } from "framer-motion"

const Card = ({ id, img, course }) => {
    // Reusable Card Component for below
    return (
        <div
            id={id}
            className="h-52 w-48 p-[0.2rem] m-3 items-center 
                overflow-hidden lg:h-60 lg:w-56 group/card duration-500 hover:-translate-y-3"
        >
            {/* bg-gradient-to-r from-ks-primary to-teal-800 text-ks-white rounded-xl hover:bg-gradient-to-l */}
            {/* group-hover/card:border-ks-primary 22222  group-hover/card:text-ks-primary */}
            <div
                className="flex flex-col p-4 items-center justify-between w-full h-full transition-all duration-200 rounded-tl-3xl rounded-br-3xl
      bg-ks-primary border-4 border-ks-white group-hover/card:bg-ks-primary_dark group-hover/card:rounded-lg "
            >
                <img
                    src={img}
                    className="h-20 w-20 lg:h-24 lg:w-24 "
                    alt="icon"
                />
                <h6 className=" font-semibold text-ks-white text-center lg:h6">
                    {course}
                </h6>

                <Link to="/register">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="group/button button h-11 px-5 relative inline-flex items-center justify-center rounded-lg bg-ks-white
  transition-colors"
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
