import React from "react";

const Heading = ({ className, title, text }) => {
  return (
    <div className={`${className} max-w-[50rem] mb-14 text-ks-primary`}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-ks-black">{text}</p>}
    </div>
  );
};

export default Heading;
