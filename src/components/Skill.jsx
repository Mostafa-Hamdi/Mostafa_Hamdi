import React from "react";

const Skill = ({ heading, children }) => {
  return (
    <div className="skill  bg-[#dedede] p-5 rounded-lg w-fit min-w-[170px] mx-auto">
      {children}
      <h3 className=" mt-2 font-semibold text-[22px] mb-0 text-center">
        {heading}
      </h3>
    </div>
  );
};

export default Skill;
