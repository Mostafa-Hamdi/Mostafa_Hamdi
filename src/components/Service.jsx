import React from "react";

const Service = ({ heading, desc, children }) => {
  return (
    <div className="service bg-white rounded-[20px] p-[20px] relative mx-5 mb-10">
      {children}
      <h3 className="text-[22px] font-semibold text-center my-3 capitalize">
        {heading}
      </h3>
      <p className="text-[18px] text-[#333] leading-[25px]">{desc}</p>
    </div>
  );
};

export default Service;
