import React, { useRef } from "react"
import { motion } from "framer-motion"
import { ScrollParallax } from "react-just-parallax"

import Section from "../../Section"
import Button from "../../Button"
import { curve, darkLogo } from "../../../assets"
import {
  BackgroundCircles,
  BottomLine,
  Gradient,
} from "../../../assets/design/BackgroudDesigns"
import Services from "../services/Services"

const Hero = () => {
  const parallaxRef = useRef(null)

  return (
    <>
      {/* <Section
        id="hero"
        className="pt-[12rem] -mt-[5.25rem] h-screen"
        crosses
        customPaddings
      >
        <div className="container relative">
          <div className="realtive z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
            <h1 className="h1 uppercase text-ks-primary">
              Study in India
              <br />
              Study Abroad
              <br />
              <ScrollParallax>
                <span className="inline-block relative">
                  <img
                    src={darkLogo}
                    className="h-20 lg:h-28 -mt-6"
                    alt="Knowage International"
                  />
                  <img
                    src={curve}
                    className="absolute top-full left-0 w-full -mt-5 lg:-mt-8"
                    width={624}
                    height={28}
                    alt="curve"
                  />
                </span>
              </ScrollParallax>
            </h1>

            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl">
              <BackgroundCircles />
            </div>

            <p className="body-1 max-w-4xl mx-auto mb-6 lg:mb-8">
              Knowage International is one of the Leading educational
              consultancy offering services all over India. We have a very rich
              experience in counselling student undergraduate and graduate level
              for 5 years to help them find carreers that maximize their
              potential.
            </p>
          </div>
        </div>
      </Section> */}

      <section className="h-[100vh]  bg-university bg-cover bg-center">
        <div className="bg-black/80 h-full w-full flex flex-col justify-center items-center">
          <motion.h1 className=" text-ks-white text-6xl md:text-8xl lg:text-9xl">
            {"KNOWAGE".split("").map((l, i) => {
              return (
                <motion.span
                  key={i}
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.25 * (i + 1),
                    delay: 1,
                  }}
                  className="inline-block overflow-hidden"
                >
                  {l}
                </motion.span>
              )
            })}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            transition={{
              duration: 3,
              delay: 2,
            }}
            animate={{ opacity: 1 }}
            className="text-ks-secondary tracking-tagline font-serif font-extrabold text-lg md:text-3xl lg:text-4xl"
          >
            I&nbsp;N&nbsp;T&nbsp;E&nbsp;R&nbsp;N&nbsp;A&nbsp;T&nbsp;I&nbsp;O&nbsp;N&nbsp;A&nbsp;L
          </motion.p>
        </div>
      </section>
      <Services />
    </>
  )
}

export default Hero
