import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import Loading from "../../components/Loading/Loading";

const ManegeDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://doctors-portal-server-coral.vercel.app/doctors",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const deleteHandle = (doctor) => {
    fetch(
      `https://doctors-portal-server-coral.vercel.app/doctors/${doctor._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success("User Delete successfully");
        }
      });
  };

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  return (
    <div className="p-14">
      <div className="">
        <h3 className="text-2xl">
          Total Doctors:{" "}
          {doctors?.length > 9 ? doctors?.length : "0" + doctors?.length}
        </h3>
      </div>
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {doctors.length > 0 &&
                doctors.map((doctor, index) => (
                  <tr key={doctor._id}>
                    <th>{index + 1}</th>
                    <th>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={doctor.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </th>
                    <td>{doctor.name}</td>
                    <td>{doctor.email}</td>
                    <td>{doctor.specialty}</td>

                    <td>
                      <label
                        htmlFor="confirmation-modal"
                        onClick={() => setDeletingDoctor(doctor)}
                        className="btn btn-md btn-circle btn-error btn-outline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </label>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure to delete ${deletingDoctor.name}?`}
          message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
          modalData={deletingDoctor}
          closeModal={closeModal}
          successAction={deleteHandle}
          successColor="btn-error"
        />
      )}
    </div>
  );
};

export default ManegeDoctors;
