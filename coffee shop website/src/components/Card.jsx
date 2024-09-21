import React from "react";

const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mx-8 ">
      <img className="w-full " src={imageSrc} alt={title} />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-center font-light text-lg mb-10">{description}</p>
    </div>
  );
};

export default Card;