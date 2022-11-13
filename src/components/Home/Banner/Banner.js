import React from "react";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import Chair from "./../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero bg-base-100 lg:min-h-screen bg-banner-pattern bg-cover bg-no-repeat py-10 ">
      <div className="hero-content flex-col lg:flex-row-reverse px-10 ">
        <img src={Chair} className=" lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold text-primary">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
