import React from "react";

const Hero = ({ title, subtitle, description, btnText, bgSrc }) => {
  return (
    <div className="relative w-full h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-right-bottom md:bg-center"
        style={{ backgroundImage: `url(${bgSrc})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold">{title}</h1>
        <h2 className="text-3xl">{subtitle}</h2>
        <p className="text-xl">{description}</p>
        <a
          className="text-center uppercase text-xl font-bold transition-all bg-stone-900 w-60 h-16 flex items-center justify-center mt-4 text-white rounded-md hover:text-yellow-700 hover:bg-white"
          type="button"
          href="process"
        >
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default Hero;