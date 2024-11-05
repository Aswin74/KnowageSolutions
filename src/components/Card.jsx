import Button from "./Button"

const Card = ({ id, img, course }) => {
    // Reusable Card Component for below
    return (
        <div
            id={id}
            className="h-52 w-48 p-[0.2rem] m-3 items-center 
               rounded-xl overflow-hidden lg:h-60 lg:w-56 group/card"
        >
            {/* bg-gradient-to-r from-ks-primary to-teal-800 text-ks-white rounded-xl hover:bg-gradient-to-l */}
            <div
                className="flex flex-col p-4 items-center justify-between w-full h-full  rounded-xl
      bg-ks-primary border-4 border-ks-white group-hover/card:bg-ks-white group-hover/card:border-ks-primary"
            >
                <img
                    src={img}
                    className="h-20 w-20 lg:h-24 lg:w-24 "
                    alt="icon"
                />
                <h6 className=" font-semibold text-ks-white text-center lg:h6 group-hover/card:text-ks-primary">
                    {course}
                </h6>
                <Button href="courses" primary>
                    Apply
                </Button>
            </div>
        </div>
    )
}

export default Card
