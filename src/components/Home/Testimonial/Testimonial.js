import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "./../../../assets/images/people1.png";
import people2 from "./../../../assets/images/people2.png";
import people3 from "./../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "Winson Herry",
      location: "California",
      img: people2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Winson Herry",
      location: "California",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];

  return (
    <section className="mt-28">
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className="text-secondary font-bold text-xl">Testimonial</h2>
          <h1 className="text-primary text-4xl font-normal">
            What Our Patients Says
          </h1>
        </div>
        <div className="">
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
