import AboutTeam from "./AboutTeam"
import { logoRound } from "../../../assets"
import { motion } from "framer-motion"
import { contactApps } from "../../../constants"

const About = () => {
    return (
        <>
            {/* Logo and Info */}
            <section
                role="aboutContent"
                aria-label="About Knowage"
                className="grid lg:grid-cols-2 max-md:pb-10 lg:h-screen"
            >
                <div
                    className="max-lg:pt-16 max-lg:pb-4 grid place-items-center place-content-center h-full bg-poly-grid bg-cover"
                    role="img"
                    aria-label="Knowage Logo"
                >
                    <img
                        src={logoRound}
                        alt="Knowage logo"
                        className="h-40 lg:h-96 p-3 bg-ks-white rounded-full"
                    />
                    {/* social */}
                    <ul className="flex gap-4 flex-wrap mt-4">
                        {contactApps.map((app) => (
                            <a
                                key={app.id}
                                href={app.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Connect with us on ${app.title}`}
                                className="flex items-center justify-center rounded-full
                                  hover:-translate-y-1 transition-transform duration-75"
                            >
                                <img
                                    src={app.icon}
                                    width={30}
                                    height={30}
                                    alt={app.title}
                                />
                            </a>
                        ))}
                    </ul>
                </div>

                <motion.div
                    className="content-center h-full p-10 text-justify"
                    role="info"
                    aria-label="Knowage International"
                    initial={{ opacity: 0, translateX: 50 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="hlarge text-ks-primary mb-4">
                        Knowage International
                    </h1>
                    <div className="h-1 w-3/4 bg-ks-secondary rounded mb-4" />

                    <p className="lg:text-lg">
                        KNOWAGE INTERNATIONAL is an Educational Consultancy
                        Offering Career Counselling and Admissions Guidance
                        Service all Over India Since 2020. We provide
                        Personalised Solutions to help them find their next
                        level of Education,form High School to Post Graduation.
                    </p>
                </motion.div>
            </section>

            {/* Meet the Team */}
            <AboutTeam />
        </>
    )
}

export default About
