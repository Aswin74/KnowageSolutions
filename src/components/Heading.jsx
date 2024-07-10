import React from "react";

const Heading = ({ className, title, text }) => {
  return (
    <div className={`${className} max-w-[50rem] my-14 text-ks-primary`}>
      {title && <h2 className="h2 font-semibold">{title}</h2>}
      {text && <p className="body-1 mt-4 text-ks-black">{text}</p>}
    </div>
  );
};

export default Heading;
