import React, { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    var textWrapper = document.querySelector(".ml11 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span className='letter'>$&</span>",
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml11 .letter",
        rotateY: [-90, 0],
        duration: 700,
        delay: (el, i) => 45 * i,
      })
      .add({
        targets: ".ml11",
        opacity: 0,
        duration: 700,
        easing: "easeOutExpo",
        delay: 700,
      });
  }, []);
  return (
    <section id="projects" className="py-[40px]">
      {/* <h2 className="ml10 text-center text-[#1e3a8a] text-[32px]  font-bold mb-[40px]">
        <span className="text-wrapper">
          <span className="letters">Services I Provide</span>
        </span>
      </h2> */}
      <h2 className="ml11 text-center text-[#1e3a8a] text-[32px]  font-bold mb-[40px]">
        <span className="text-wrapper">
          <span className="letters">Projects</span>
        </span>
      </h2>
      <div className="container sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-[30px_20px] lg:gap-[30px_40px] mx-auto justify-center">
        <iframe
          src="https://poseydon-yachts-yfse.vercel.app/"
          frameBorder="0"
          className="w-[90%] md:w-full h-[300px] rounded-xl border-[5px] border-[#1e3a8a]  mb-[30px] mx-auto"
        ></iframe>
        <iframe
          src="https://sk-ai-line.netlify.app/"
          frameBorder="0"
          className="w-[90%] md:w-full h-[300px] rounded-xl border-[5px] border-[#1e3a8a]  mb-[30px] mx-auto"
        ></iframe>
        <iframe
          src="https://euphonious-kheer-75a809.netlify.app/"
          frameBorder="0"
          className="w-[90%] md:w-full h-[300px] rounded-xl border-[5px] border-[#1e3a8a]  mb-[30px] mx-auto"
        ></iframe>
        <iframe
          src="https://subtle-sunburst-beccad.netlify.app/"
          frameBorder="0"
          className="w-[90%] md:w-full h-[300px] rounded-xl border-[5px] border-[#1e3a8a]  mb-[30px] mx-auto"
        ></iframe>
        <iframe
          src="https://majestic-cat-0d8129.netlify.app/"
          frameBorder="0"
          className="w-[90%] md:w-full h-[300px] rounded-xl border-[5px] border-[#1e3a8a] mb-[30px] mx-auto"
        ></iframe>
        <iframe
          src="https://damenpay.netlify.app/"
          frameBorder="0"
          className="w-[90%] md:w-full h-[300px] rounded-xl border-[5px] border-[#1e3a8a]  mb-[30px]  mx-auto"
        ></iframe>
      </div>
    </section>
  );
};

export default Portfolio;
