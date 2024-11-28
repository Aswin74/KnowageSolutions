import React from "react"
import { logoRound } from "../../../assets"
import { ScrollParallax } from "react-just-parallax"
import Heading from "../../Heading"

const RegisterInfo = () => {
    return (
        <div>
            <div className="">
                {/* <ScrollParallax>
                    <img
                        src={logoRound}
                        className="h-40 bg-ks-white rounded-full p-2"
                    />
                </ScrollParallax> */}
                <Heading title="Welcome to Knowage" className="text-ks-white" />
                <p className="text-ks-gray">
                    Embark on your learning journey with us. Register now to
                    explore top-notch courses and unlock your potential.
                </p>
            </div>
        </div>
    )
}

export default RegisterInfo
