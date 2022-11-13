import React from "react";
import cavity from "./../../../assets/images/cavity.png";
import fluoride from "./../../../assets/images/fluoride.png";
import whitening from "./../../../assets/images/whitening.png";
import Service from "./Service";

const services = [
  {
    _id: 1,
    img: fluoride,
    title: "Fluoride Treatment",
    description:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
  {
    _id: 2,
    img: cavity,
    title: "Cavity Filling",
    description:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
  {
    _id: 3,
    img: whitening,
    title: "Teeth Whitening",
    description:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
];

const Services = () => {
  return (
    <>
      <div className="text-center mt-32">
        <h3 className="font-bold text-xl text-secondary">OUR SERVICES</h3>
        <h2 className="font-normal text-4xl text-primary mt-2">
          Services We Provide
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-8 mt-16">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </>
  );
};

export default Services;
