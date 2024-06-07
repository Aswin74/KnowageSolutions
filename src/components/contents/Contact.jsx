import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { BottomLine } from "../../assets/design/BackgroudDesigns";

const Contact = () => {
  return (
    <Section id="contact">
      <div className="container mb-28">
        <Heading
          title="Feeling Confused? Contact&nbsp;Us&nbsp;Now"
          text="We'll help you through the process. Get in touch with us"
          className="max-md:mx-auto max-md:text-center"
        />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Contact;
