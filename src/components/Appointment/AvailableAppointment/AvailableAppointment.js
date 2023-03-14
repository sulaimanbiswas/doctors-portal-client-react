import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) {
    return <Loading />;
  }

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
          refetch={refetch}
          treatment={treatment}
          setTreatment={setTreatment}
          date={date}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
