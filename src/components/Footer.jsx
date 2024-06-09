import React from "react";
import Section from "./Section";
import { address, contactApps } from "../constants";
import { lightLogo } from "../assets";

const Footer = () => {
  return (
    <Section crosses className="!p-0 bg-ks-black">
      <div
        className="container flex justify-end text-ks-white
       gap-10 pt-10 pb-2 max-md:ps-10 max-sm:flex-col md:justify-between md:items-center"
      >
        <div>
          <img src={lightLogo} className="h-24" />
        </div>

        <div className="max-w-1/3">
          <h6 className="h6 mb-4 decoration-4 decoration-ks-primary underline underline-offset-4">
            Reach Us
          </h6>
          <ul className="max-w-96">
            {address.map((item, index) => (
              <li key={index}>
                <a
                  className="flex body-2 text-sm py-2 space-x-3 -space-y-1 leading-relaxed"
                  href={item.url}
                >
                  <img src={item.icon} className="w-4 h-4" alt="icon" />
                  <p className="hover:text-ks-primary transition-colors">
                    {item.text}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="container flex justify-center items-center border-t border-stroke-gray
       gap-10 pb-2 md:justify-between"
      >
        <p className="text-xs text-ks-white/50 md:caption">
          ©2024. All rights reserved.
        </p>
        <ul className="flex gap-3 flex-wrap">
          {contactApps.map((app) => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              className="flex items-center justify-center mt-2 w-6 h-6 bg-zinc-700 rounded-full
              md:w-8 md:h-8"
            >
              <img src={app.svg} width={16} height={16} alt={app.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
