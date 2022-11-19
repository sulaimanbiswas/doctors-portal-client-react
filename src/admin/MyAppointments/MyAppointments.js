import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="p-14">
      <div className="">
        <h3 className="text-2xl">My Appointment</h3>
      </div>
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {bookings.length > 0 &&
                bookings?.map((booking, index) => (
                  <tr key={booking._id}>
                    <th>{index + 1}</th>
                    <td>{booking.patient}</td>
                    <td>{booking.treatment}</td>
                    <td>{booking.appointmentDate}</td>
                    <td>{booking.slot}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
