import React from "react";
import { DayPicker } from "react-day-picker";
import Chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {
  return (
    <div className="hero gap-32 bg-base-100 lg:min-h-screen bg-banner-pattern bg-cover bg-no-repeat py-10 ">
      <div className="flex gap-32 hero-content flex-col lg:flex-row-reverse px-10 ">
        <img
          src={Chair}
          className=" lg:w-1/2 rounded-lg shadow-2xl"
          alt="Dentist Chair"
        />
        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
