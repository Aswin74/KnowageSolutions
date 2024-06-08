import React from "react";
import Section from "../../Section";
import Heading from "../../Heading";
import { BottomLine } from "../../../assets/design/BackgroudDesigns";
import Button from "../../Button";
import { logo } from "../../../assets";
import { contactApps } from "../../../constants";
import { LeftCurve } from "../../../assets/design/ContactCurve";

const Contact = () => {
  return (
    <Section id="contact">
      <div className="realtive flex max-md:flex-col container mb-28">
        <div className="max-w-[29rem]">
          <Heading
            title="Feeling Confused? Contact&nbsp;Us&nbsp;Now"
            className="max-md:mx-auto max-md:text-center"
          />

          <ul className="max-w-[22rem] mb-4">
            <li>What to do after +2?</li>
            <li>Which course should I pursue?</li>
            <li>Which course is best for me?</li>
            <li>What are the job scopes of each courses?</li>
            <li>Which college should I select?</li>
          </ul>
          <p className="mb-3">
            Don't have answers?
            <br />
            Don't worry we'll help you through the process. Your future is our
            priority.
          </p>
          <Button href="+919035015369">Contact Us Now</Button>
        </div>

        {/* Contact Circle */}
        <div className="lg:ml-auto xl:w-[38rem]">
          <p className="body-2 mb-4 md:mb-6  lg:mb-32 lg:mx-auto">
            Connect Us via :{" "}
          </p>

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
                  origin-bottom rotate-${index * 72}`}
                >
                  <div
                    className={`relative -top-[0.8rem] flex-[3.2rem]
                   border-2 bg-ks-white border-stroke-tint rounded-xl -rotate-${
                     index * 72
                   } hover:scale-110 active:shadow-lg active:shadow-stroke-tint transition-transform duration-200 `}
                  >
                    <a href={app.url}>
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

            <LeftCurve />
          </div>
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Contact;
