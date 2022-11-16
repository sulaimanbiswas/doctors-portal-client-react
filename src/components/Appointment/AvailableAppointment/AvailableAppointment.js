import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");

  useEffect(() => {
    fetch("AppointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <div>
      <p className="text-secondary text-[22px] text-center mt-4 ">
        Available Appointments on {date}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-24">
        {appointmentOptions &&
          appointmentOptions.map((option) => (
            <AppointmentOption
              key={option._id}
              AppointmentOption={option}
              setTreatment={setTreatment}
            />
          ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          date={date}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
