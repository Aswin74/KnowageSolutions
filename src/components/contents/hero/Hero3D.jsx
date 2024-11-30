import React from "react"
import { CardBody, CardContainer, CardItem } from "../../ThreeD"
import { Link } from "react-router-dom"
import { ScrollParallax } from "react-just-parallax"
import { pngGrad } from "../../../assets"

const Hero3D = () => {
    return (
        <CardContainer className="relative max-md:h-[70%] lg:h-screen w-full group/card">
            <CardItem
                translateZ="10"
                className="z-0 absolute left-[10%] -bottom-[20%] w-[28rem] h-[26rem] rounded-full bg-emerald-600 group-hover/card:shadow-2xl lg:w-[85%] lg:h-[90%] lg:-bottom-[14%] lg:left-[20%] "
            />

            <CardItem
                translateZ="40"
                translateX="-20"
                className="z-1 absolute -bottom-[25%] -right-[18%] w-[21rem] h-[19.5rem] rounded-full bg-ks-secondary group-hover/card:shadow-2xl lg:w-[55%] lg:h-[60%] lg:-bottom-[6%] lg:-right-[5%]"
            />

            <CardItem
                translateZ="70"
                className="z-3 h-full absolute bottom-0 lg:right-[15%] lg:-bottom-[2%]"
            >
                <img
                    src={pngGrad}
                    className="z-3 lg:mt-20 lg:ml-20 pointer-events-none lg:h-[90%] "
                />
            </CardItem>

            <CardItem
                translateZ="70"
                translateY="10"
                translateX="20"
                className="z-4 absolute top-[15%] left-[5%] w-[6rem] h-[6rem] rounded-full bg-ks-secondary group-hover/card:shadow-2xl lg:h-[20%] lg:w-[18%] lg:left-[20%] lg:top-[32%]"
            />
        </CardContainer>
    )
}

export default Hero3D
