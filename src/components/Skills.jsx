import React, { useEffect } from "react";
import Skill from "./Skill";
import HtmlIcon from "../icons/HtmlIcon";
import CssIcon from "../icons/CssIcon";
import JSIcon from "../icons/JSIcon";
import ReactJSIcon from "../icons/ReactJSIcon";
import GithubIcon from "../icons/GithubIcon";
import BootstrapIcon from "../icons/BootstrapIcon";
import TailwindIcon from "../icons/TailwindIcon";
import FigmaIcon from "../icons/FigmaIcon";
import GitIcon from "../icons/GitIcon";
import NextIcon from "../icons/NextIcon";

const Skills = () => {
  useEffect(() => {
    var textWrapper = document.querySelector(".ml12 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span className='letter'>$&</span>",
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml12 .letter",
        rotateY: [-90, 0],
        duration: 700,
        delay: (el, i) => 45 * i,
      })
      .add({
        targets: ".ml12",
        opacity: 0,
        duration: 700,
        easing: "easeOutExpo",
        delay: 700,
      });
  }, []);
  return (
    <section id="skills" className="skills bg-[#1e3a8a] py-[40px]">
      <div className="container mx-auto">
        <h2 className="ml12 text-center text-white text-[32px]  font-bold mb-[40px]">
          <span className="text-wrapper">
            <span className="letters">What I Do</span>
          </span>
        </h2>
        <div className="skills-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] mx-auto">
          <Skill heading="HTML">
            <HtmlIcon />
          </Skill>
          <Skill heading="CSS">
            <CssIcon />
          </Skill>
          <Skill heading="JavaScript">
            <JSIcon />
          </Skill>
          <Skill heading="React">
            <ReactJSIcon />
          </Skill>
          <Skill heading="Github">
            <GithubIcon />
          </Skill>
          <Skill heading="Bootstrap">
            <BootstrapIcon />
          </Skill>
          <Skill heading="Tailwind">
            <TailwindIcon />
          </Skill>
          <Skill heading="Figma">
            <FigmaIcon />
          </Skill>
          <Skill heading="Git">
            <GitIcon />
          </Skill>
          <Skill heading="Next.js">
            <NextIcon />
          </Skill>
        </div>
      </div>
    </section>
  );
};

export default Skills;
