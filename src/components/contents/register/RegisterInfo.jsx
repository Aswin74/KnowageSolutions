import { motion } from "framer-motion"
import { logo, logoRound } from "../../../assets"
import { ScrollParallax } from "react-just-parallax"
import Heading from "../../Heading"
import Lottie from "lottie-react"
import { Interview } from "../../../assets/lottie"

const RegisterInfo = () => {
    return (
        <>
            <div className="p-10 grid grid-cols-1 place-content-center">
                <Heading
                    title="Welcome to Knowage"
                    className="text-ks-secondary"
                />
                <p className="text-ks-white">
                    Embark on your learning journey with us. Register now to
                    explore top-notch courses and unlock your potential.
                </p>
                <ScrollParallax>
                    <Lottie
                        animationData={Interview}
                        className="-mt-40 h-[40rem]"
                    />
                </ScrollParallax>
            </div>
        </>
    )
}

export default RegisterInfo
