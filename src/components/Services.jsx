import React, { useEffect } from "react";
import Service from "./service";
import ReactIcon from "../icons/ReactIcon";
import ResponsiveIcon from "../icons/ResponsiveIcon";
import ApiLogo from "../icons/ApiIcon";
import PerformanceIcon from "../icons/PerformanceIcon";
import SeoIcon from "../icons/SeoIcon";
import FeaturesIcon from "../icons/FeaturesIcon";

const Services = () => {
  useEffect(() => {
    var textWrapper = document.querySelector(".ml10 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>",
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml10 .letter",
        rotateY: [-90, 0],
        duration: 700,
        delay: (el, i) => 45 * i,
      })
      .add({
        targets: ".ml10",
        opacity: 0,
        duration: 700,
        easing: "easeOutExpo",
        delay: 700,
      });
  }, []);
  return (
    <div id="services" className="services bg-[#1e3a8a] py-[40px] ">
      <div className="container mx-auto">
        <h2 className="ml10 text-center text-white text-[32px]  font-bold mb-[40px]">
          <span class="text-wrapper">
            <span class="letters">Services I Provide</span>
          </span>
        </h2>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-[30px_0px] lg:gap-[30px_0px]">
          <Service
            heading="React Development"
            desc="Building fast, scalable, and dynamic single-page applications (SPAs) using React."
          >
            <ReactIcon />
          </Service>
          <Service
            heading="Responsive Web Development"
            desc="Creating responsive, mobile-first websites that adapt perfectly to any device."
          >
            <ResponsiveIcon />
          </Service>
          <Service
            heading="Interactive Web Features"
            desc="Implementing interactive elements such as forms, modals, sliders, and real-time content updates."
          >
            <FeaturesIcon />
          </Service>
          <Service
            heading="API Integration with React"
            desc="Handling asynchronous requests efficiently with Fetch API."
          >
            <ApiLogo />
          </Service>
          <Service
            heading="Performance Optimization"
            desc="Optimizing frontend performance by minimizing load times and reducing resource usage."
          >
            <PerformanceIcon />
          </Service>
          <Service
            heading="SEO for React Applications"
            desc="Implementing frontend SEO best practices to ensure your React app is search engine-friendly."
          >
            <SeoIcon />
          </Service>
        </div>
      </div>
    </div>
  );
};

export default Services;
