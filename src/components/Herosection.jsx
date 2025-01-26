import { mainImg, line, img } from "../assets/master"; // Assuming your image is correctly imported

const Herosection = () => {
  return (
    <div className="hero-section md:gap-[30px] lg:gap-0 p-[70px_0] md:flex items-center justify-between mt-[80px]">
      <div className="image flex-[0_0_48%] mb-[60px] md:mb-0">
        <img src={img} alt="Mostafa Hamdi" />
      </div>
      <div className="text flex-[0_0_48%] max-w-[600px] mr-auto">
        <h1 className="text-[30px] lg:text-[50px] font-bold leading-[1.2] mb-5 px-5 md:px-0">
          I am{" "}
          <span className="text-[#1e3a8a] relative">
            Mostafa Hamdi
            <img
              src={line}
              alt="line"
              className="absolute top-[-40px] right-[-40px] w-[50px] h-[50px]"
            />
          </span>
          ,
          <br />
          Frontend Developer
        </h1>
        <p className="text-[#333] md:text-[16px] lg:text-[20px] px-5 md:px-0">
          I have over 2 years of experience in web development, specializing in
          creating engaging and user-friendly interfaces for websites.
        </p>
        <div className="links mt-[40px] text-center flex justify-center">
          <a
            // https://drive.google.com/uc?export=download&id=1c0o2UaRuUgfb5mYPKrsNNiHzosSIxOl8
            href="https://drive.google.com/uc?export=download&id=1c0o2UaRuUgfb5mYPKrsNNiHzosSIxOl8"
            className="cssbuttons-io-button bg-black text-white p-[10px_20px] rounded-[10px] text-[18px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
              ></path>
            </svg>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
