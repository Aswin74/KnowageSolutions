import React, { useEffect, useRef, useState } from "react"
import { counters } from "../../../constants"
import { motion, useSpring } from "framer-motion"

const Counter = () => {
    return (
        <div className="grid grid-cols-3 place-items-center">
            {counters.map((item) => {
                const spring = useSpring(0, { duration: 2000 })
                const [springNum, setSpringNum] = useState(0)

                const counterRef = useRef(null)
                const [isVisible, setIsVisible] = useState(false)

                // Intersection Observer
                const handleIntersect = (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsVisible(true)
                            spring.set(item.num)
                        }
                        // else {
                        //   setIsVisible(false)
                        //   spring.set(0)
                        // }
                    })
                }

                useEffect(() => {
                    const observer = new IntersectionObserver(handleIntersect, {
                        //creating a new observation object with method handle..
                        threshold: 0.1, // trigger when 10%
                    })

                    if (counterRef.current) {
                        observer.observe(counterRef.current) // observe or checks if ref has a vaue/DOM
                    }

                    return () => {
                        // calls automatically when the component unmounts
                        if (counterRef.current) {
                            observer.unobserve(counterRef.current) // if still observes, then un it . Cleanup function
                        }
                    }
                }, [counterRef])

                useEffect(() => {
                    const interval = setInterval(() => {
                        if (isVisible) {
                            setSpringNum(Math.round(spring.get()))
                        }
                    }, 16)

                    return () => clearInterval(interval)
                }, [spring, isVisible])

                return (
                    <div
                        ref={counterRef}
                        key={item.id}
                        className="grid place-items-center p-3"
                    >
                        <motion.h3 className="text-ks-secondary font-bold text-4xl">
                            {springNum}+
                        </motion.h3>
                        <p className="text-ks-primary underline underline-offset-4 font-semibold text-xl">
                            {item.title}
                        </p>
                        {/* <div className="h-1 w-full bg-ks-primary rounded-full" /> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Counter
