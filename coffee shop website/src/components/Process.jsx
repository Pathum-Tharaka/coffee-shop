import React from "react";
import Card from "./Card";
const Process = ({ title, cardData }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <h1 className="my-10 text-4xl font-bold text-black">{title}</h1>
      <div className="flex justify-evenly items-center flex-col md:flex-row">
        {cardData.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Process;