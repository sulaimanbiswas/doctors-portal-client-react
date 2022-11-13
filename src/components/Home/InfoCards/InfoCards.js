import React from "react";
import clock from "./../../../assets/icons/clock.svg";
import phone from "./../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cards = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00am to 5.00pm every working day",
      img: clock,
      bgClass: "bg-gradient-to-r from-secondary to-accent",
    },
    {
      id: 2,
      name: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri ",
      img: clock,
      bgClass: "bg-primary",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+000 123 456789",
      img: phone,
      bgClass: "bg-gradient-to-r from-secondary to-accent",
    },
  ];
  return (
    <div className="mt-4">
      <div className="flex flex-col lg:flex-row stats stats-vertical lg:stats-horizontal shadow w-full gap-6">
        {cards.map((card) => (
          <InfoCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
