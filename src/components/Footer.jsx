import React from "react";
import { logo } from "../assets/master";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] pt-4 pb-1 px-4 md:px-[30px] flex items-center justify-between">
      <img src={logo} alt="" />
      <p className="text-white text-[18px] mb-0">Copyright &copy; 2025</p>
      <ul className="wrapper">
        {/* <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <svg
            viewBox="0 0 320 512"
            height="1.2em"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
          </svg>
        </li> */}
        <a
          href="https://www.linkedin.com/in/mostafa-hamdi/"
          className="cursor-pointer"
        >
          <li className="icon linkedin">
            <span className="tooltip">Linkedin</span>
            <svg
              baseProfile="tiny"
              height="2em"
              id="Layer_1"
              version="1.2"
              viewBox="0 0 24 24"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path d="M8,19H5V9h3V19z M19,19h-3v-5.342c0-1.392-0.496-2.085-1.479-2.085c-0.779,0-1.273,0.388-1.521,1.165C13,14,13,19,13,19h-3   c0,0,0.04-9,0-10h2.368l0.183,2h0.062c0.615-1,1.598-1.678,2.946-1.678c1.025,0,1.854,0.285,2.487,1.001   C18.683,11.04,19,12.002,19,13.353V19z" />
              </g>
              <g>
                <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" />
              </g>
            </svg>
          </li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
