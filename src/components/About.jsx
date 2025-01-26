import React, { useEffect } from "react";

import { img, secondImg } from "../assets/master";

const About = () => {
  useEffect(() => {
    var textWrapper = document.querySelector(".ml13 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span className='letter'>$&</span>",
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml13 .letter",
        rotateY: [-90, 0],
        duration: 700,
        delay: (el, i) => 45 * i,
      })
      .add({
        targets: ".ml13",
        opacity: 0,
        duration: 700,
        easing: "easeOutExpo",
        delay: 700,
      });
  }, []);
  return (
    <section id="about" className="pt-[40px]">
      <h2 className="ml13 text-center text-[#1e3a8a] text-[32px]  font-bold">
        <span className="text-wrapper">
          <span className="letters">About</span>
        </span>
      </h2>
      <div className="container md:flex mx-auto gap-[30px] items-center justify-around ">
        <div className="text text-center mx-5 md:mx-0 md:w-[50%] mb-[30px] md:mb-0">
          <p className="text-[18px] text-[#333] text-left leading-[30px] mb-[40px]">
            A frontend developer specializing in React.js and Next.js, focused
            on building fast, responsive, and user-friendly web applications. I
            prioritize performance and seamless user experiences in every
            project. Let’s connect and create something amazing!
          </p>
          <a
            href="tel:01207715484"
            className="cssbuttons-io-button bg-black text-white p-[10px_20px] rounded-[10px] text-[18px] w-fit mx-auto"
          >
            <span>Contact me</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2.5"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
            </svg>
          </a>
        </div>
        <div className="image">
          <img
            src={secondImg}
            alt="Mostafa Hamdi"
            className="ml-auto max-h-[450px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
