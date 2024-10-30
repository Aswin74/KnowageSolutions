import React from "react"
import { CardBody, CardContainer, CardItem } from "../../ThreeD"
import { Link } from "react-router-dom"
import { ScrollParallax } from "react-just-parallax"
import { pngGrad } from "../../../assets"

const Hero3D = () => {
  return (
    <CardContainer containerClassName="relative h-full w-full group/card">
      {/* <CardContainer className="absolute right-0 top-36"> */}
      <CardItem
        translateZ="10"
        className="z-0 absolute left-6 bottom-0 lg:top-32 lg:left-20 w-[28rem] h-[26rem] lg:w-[38rem] lg:h-[36rem]  rounded-full bg-emerald-600 group-hover/card:shadow-2xl"
      />

      <CardItem
        translateZ="40"
        translateX="-20"
        className="z-1 absolute bottom-5 -right-15 lg:bottom-4 lg:-right-32 w-[21rem] h-[19.5rem] lg:w-[26.6rem] lg:h-[25.2rem] rounded-full bg-ks-secondary group-hover/card:shadow-2xl"
      />

      <CardItem translateZ="70" className="z-3 ">
        <img
          src={pngGrad}
          className="h-[30rem] mt-20 ml-20 lg:h-[36rem] lg:mt-20 lg:ml-48 pointer-events-none"
        />
      </CardItem>

      <CardItem
        translateZ="70"
        translateY="10"
        translateX="20"
        className="z-4 absolute top-40 left-20 w-[5rem] h-[5rem] lg:w-[7.6rem] lg:h-[7.6rem] rounded-full bg-ks-secondary group-hover/card:shadow-2xl"
      />
    </CardContainer>
  )
}

export default Hero3D
