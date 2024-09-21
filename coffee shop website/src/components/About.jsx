import React from "react";

const About = ({
  image,
  overlayOpacity = 0.5,
  title,
  subtitle,
  description,
}) => {
  return (
    <section
      className="relative w-full h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <h2 className="text-2xl mb-4">{subtitle}</h2>
        <p className="max-w-xl">{description}</p>
      </div>
    </section>
  );
};

export default About;