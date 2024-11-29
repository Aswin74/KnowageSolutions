import React from "react"

const heeeroo = () => {
    return (
        <div>
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

            {/* Landing Page */}
            <section className="h-[100dvh] w-screen sticky top-0 bg-university bg-cover bg-center">
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

            {/* Introduction */}
            <section className="relative h-[100dvh] bg-zinc-950 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                <motion.div
                    ref={viewRef}
                    variants={{
                        hidden: { x: -100, opacity: 0 },
                        visible: { x: 0, opacity: 1 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 2,
                        delay: 3,
                    }}
                    className="z-5 h-full max-lg:hidden"
                >
                    <img src={girl} className="" />
                </motion.div>

                <motion.div
                    ref={viewRef}
                    variants={{
                        hidden: { x: 100, opacity: 0 },
                        visible: { x: 0, opacity: 1 },
                    }}
                    initial="hidden"
                    animate="visible"
                    // animate={mainControls}
                    transition={{
                        duration: 2,
                        delay: 3,
                    }}
                >
                    <p className="text-ks-white">
                        <div className="realtive z-1 mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                            <h1 className="h1 uppercase text-ks-primary">
                                Study in India
                                <br />
                                Study Abroad
                                <br />
                                <ScrollParallax>
                                    <span className="inline-block relative">
                                        <img
                                            src={lightLogo}
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
                                Knowage International is one of the Leading
                                educational consultancy offering services all
                                over India. We have a very rich experience in
                                counselling student undergraduate and graduate
                                level for 5 years to help them find carreers
                                that maximize their potential.
                            </p>
                        </div>
                    </p>
                </motion.div>
            </section>

            {/* <Services /> */}

            <CardContainer containerClassName="relative h- w-full group/card">
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
        </div>
    )
}

export default heeeroo
