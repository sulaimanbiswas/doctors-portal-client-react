import React, { useState } from "react";
import AppointmentBanner from "../../components/Appointment/AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../../components/Appointment/AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="mb-32">
      <AppointmentBanner
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      <AvailableAppointment selectedDate={selectedDate} />
    </div>
  );
};

export default Appointment;
