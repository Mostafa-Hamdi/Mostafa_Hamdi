import React from "react";
import { logo } from "../assets/master";
// import logo from "../assets/master";
const Header = () => {
  return (
    <header className="mt-5 fixed top-0 w-full z-[10000]">
      <ul className="container mx-auto bg-[#1e3a8a] rounded-[40px] flex items-center justify-around p-[10px_15px]">
        <li className="capitalize text-[16px] md:text-[20px] font-medium  text-white cursor-pointer">
          <a href="#" className="p-[5px_10px]">
            home
          </a>
        </li>
        <li className="capitalize text-[16px] md:text-[20px] font-medium  text-white cursor-pointer">
          <a href="#services" className="p-[5px_10px]">
            services
          </a>
        </li>
        <li className="logo">
          <img src={logo} alt="" className="w-[100px] h-auto" />
        </li>
        <li className="capitalize text-[16px] md:text-[20px] font-medium text-white cursor-pointer">
          <a href="#projects" className="p-[5px_10px]">
            projects
          </a>
        </li>
        <li className="capitalize text-[16px] md:text-[20px] font-medium  text-white cursor-pointer">
          <a href="#about" className="p-[5px_10px]">
            about
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
