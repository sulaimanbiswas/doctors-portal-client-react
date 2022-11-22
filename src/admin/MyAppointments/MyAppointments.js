import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-coral.vercel.app/bookings?email=${user?.email}`,
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
            <thead className="bg-base-300">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
                <th>Price</th>
                <th>Action</th>
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
                    <td>{booking.price}</td>
                    <td>
                      {booking.price && !booking.paid && (
                        <Link to={`/admin/payment/${booking._id}`}>
                          <button className="btn btn-sm btn-primary">
                            Pay
                          </button>
                        </Link>
                      )}
                      {booking.price && booking.paid && (
                        <span className="text-success">Paid</span>
                      )}
                    </td>
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
