import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="bg-appointment bg-cover bg-no-repeat mt-40">
      <div className="lg:hero  ">
        <div className="hero-content flex-col lg:flex-row gap-7">
          <img
            src={doctor}
            className=" -mt-20 -mb-4 hidden lg:block  max-w-md  lg:w-1/2"
            alt=""
          />
          <div className="lg:w-1/2 flex flex-col gap-5">
            <h2 className="text-secondary font-bold text-xl">Appointment</h2>
            <h1 className="text-4xl text-base-100 font-bold first-letter:">
              Box Office News!
            </h1>
            <p className="font-normal text-base text-base-100">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="">
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
