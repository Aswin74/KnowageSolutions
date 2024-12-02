import { motion } from "framer-motion"
import Section from "../../Section"
import Heading from "../../Heading"
import { BottomLine } from "../../../assets/design/BackgroudDesigns"
import Button from "../../Button"
import { bullet, logo } from "../../../assets"
import { contactApps } from "../../../constants"
import { LeftCurve } from "../../../assets/design/ContactCurve"

const QUESTIONS = [
    {
        text: "Top Universities and colleges",
    },
    {
        text: "Hassle free admission process",
    },
    {
        text: "100% placement assistance",
    },
    {
        text: "End to end free counselling",
    },
    {
        text: "Pre and post admission support",
    },
]

const Contact = () => {
    return (
        <Section id="contact" className="bg-waveLg">
            <div className="realtive flex max-md:flex-col container mb-28 pt-16">
                <motion.div
                    variants={{
                        hidden: { x: -100, opacity: 0 },
                        visible: { x: 0, opacity: 1 },
                    }}
                    transition={{
                        duration: 1,
                    }}
                    initial="hidden"
                    animate="visible"
                    className="max-w-[30rem]"
                >
                    <Heading
                        title="Why Knowage?"
                        className="max-md:mx-auto text-ks-secondary"
                    />

                    <ul className="max-w-[24rem] mb-4">
                        {QUESTIONS.map((ques, index) => (
                            <li
                                key={index}
                                className="flex items-start leading-10"
                            >
                                <img src={bullet} className="mr-2" />
                                <span className="text-base lg:text-xl text-ks-white">
                                    {ques.text}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <p className="mb-3 text-ks-white w-full">
                        Knowage International is India’s leading educational
                        consultancy group, dedicated to empowering countless
                        students in realizing their dream career paths.
                    </p>
                    <Button to="tel:+919035015369">Contact Us Now</Button>
                </motion.div>

                {/* Contact Circle */}
                <motion.div
                    variants={{
                        hidden: { x: 100, opacity: 0, rotateZ: 90 },
                        visible: { x: 0, opacity: 1, rotateZ: 0 },
                    }}
                    transition={{
                        duration: 1,
                    }}
                    initial="hidden"
                    animate="visible"
                    className="lg:mt-24 lg:ml-auto xl:w-[38rem]"
                >
                    <div
                        className="relative left-1/2 flex w-[22rem] aspect-square border-2 border-stroke-tint 
            rounded-full -translate-x-1/2 scale-75 md:scale-100"
                    >
                        <div
                            className="flex w-60 aspect-square m-auto border-2
             border-stroke-tint rounded-full"
                        >
                            <div
                                className="w-[6rem] p-[0.2rem] aspect-square m-auto 
              bg-conic-gradient rounded-full"
                            >
                                <div
                                    className="flex items-center justify-center w-full h-full
               bg-ks-white rounded-full"
                                >
                                    <img src={logo} height={48} alt="Knowage" />
                                </div>
                            </div>
                        </div>

                        <ul>
                            {contactApps.map((app, index) => (
                                <li
                                    key={app.id}
                                    className={`absolute top-0 left-1/2 h-1/2 -ml-[2.5rem]
                  origin-bottom rotate-${index * 60}`}
                                >
                                    <div
                                        className={`relative -top-[0.8rem] flex-[3.2rem]
                   border-2 bg-ks-white border-stroke-tint rounded-xl -rotate-${
                       index * 60
                   } hover:scale-110 active:shadow-lg active:shadow-stroke-tint transition-transform duration-200 `}
                                    >
                                        <a href={app.url} target="_blank">
                                            <img
                                                className="m-auto"
                                                // height={20}
                                                width={80}
                                                src={app.icon}
                                            />
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <LeftCurve />
                </motion.div>
            </div>
        </Section>
    )
}

export default Contact
