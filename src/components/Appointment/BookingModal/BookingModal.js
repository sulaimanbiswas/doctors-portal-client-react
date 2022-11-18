import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
  const { name, slots } = treatment;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const slot = form.slot.value;
    const patientName = form.displayName.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const appointment = {
      treatment: name,
      appointmentDate: date,
      slot,
      patient: patientName,
      phone,
      email,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
        setTreatment(null);
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-primary">{name}</h3>
          <form onSubmit={handleBooking} className="flex flex-col gap-6 mt-12">
            <input
              type="text"
              placeholder="Type here"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select
              name="slot"
              className="select select-bordered w-full "
              required
            >
              <option className="hidden" value="">
                Select a Time
              </option>
              {slots &&
                slots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
            </select>
            <input
              required
              defaultValue={user && user.displayName}
              name="displayName"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <input
              required
              name="phone"
              defaultValue={user && user.phone}
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              required
              name="email"
              defaultValue={user && user.email}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
