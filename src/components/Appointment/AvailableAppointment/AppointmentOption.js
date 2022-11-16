import React from "react";

const AppointmentOption = ({ AppointmentOption, setTreatment }) => {
  const { name, slots } = AppointmentOption;
  return (
    <div className="card bg-base-100 shadow-lg py-5">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p className="text-sm">
          {slots.length > 0 ? slots[0] : "Try another day"}
        </p>
        <p className="text-xs">
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className="card-actions justify-end">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(AppointmentOption)}
            htmlFor="booking-modal"
            className="btn btn-accent bg-gradient-to-r from-secondary to-accent text-base-100"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
