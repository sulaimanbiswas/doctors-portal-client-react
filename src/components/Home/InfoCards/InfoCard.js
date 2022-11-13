import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, img, bgClass } = card;
  return (
    <div
      className={`stat items-center flex flex-col lg:flex-row text-center lg:text-left gap-6 py-8 ${bgClass} rounded-xl`}
    >
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="stat text-base-100">
        <div className="stat-title text-xl text-base-100">{name}</div>
        <div className="stat-desc">{description}</div>
      </div>
    </div>
  );
};

export default InfoCard;
