import React from "react"
import { CardBody, CardContainer, CardItem } from "../../ThreeD"
import { Link } from "react-router-dom"

import ima from "../../../assets/hero/pngGrad.png"

export function Test() {
  return (
    <div className="relative h-[100dvh] w-[100dvw]">
      <CardContainer>
        {/* group/card  */}
        <CardBody className=" bg-emerald-400 hover:shadow-2xl hover:shadow-emerald-400 border-white/[0.2] w-[45dvw] h-[100dvh] rounded-full p-6 border">
          {/* <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Test
          </CardItem> */}
          {/* <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
          <CardItem translateZ="100" className="mx-auto">
            <img
              // src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              // height="1000"
              // width="1000"
              src={ima}
              className="h-full rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
        </CardBody>
      </CardContainer>
    </div>
  )
}
