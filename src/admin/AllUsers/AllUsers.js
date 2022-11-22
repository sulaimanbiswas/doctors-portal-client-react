import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";

const AllUsers = () => {
  const [deletingUser, setDeletingUser] = useState(null);
  const { data: users, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-coral.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });
  const makeAdminHandle = (id) => {
    fetch(`https://doctors-portal-server-coral.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          refetch();
          toast.success("Make admin successfully");
        }
      });
  };
  const userDeleteHandle = (user) => {
    fetch(
      `https://doctors-portal-server-coral.vercel.app/users/admin/${user._id}`,
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
    setDeletingUser(null);
  };
  return (
    <div className="p-14">
      <div className="">
        <h3 className="text-2xl">
          Total User: {users?.length > 9 ? users?.length : "0" + users?.length}
        </h3>
      </div>
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {users &&
                users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user?.role ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => makeAdminHandle(user._id)}
                          className="btn btn-sm btn-primary"
                        >
                          Make Admin
                        </button>
                      )}
                    </td>
                    <td>
                      <label
                        htmlFor="confirmation-modal"
                        onClick={() => setDeletingUser(user)}
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
      {deletingUser && (
        <ConfirmationModal
          title={`Ate you sure to delete ${deletingUser.name}`}
          message={`If you delete ${deletingUser.name}. You cannot recover it`}
          modalData={deletingUser}
          closeModal={closeModal}
          successAction={userDeleteHandle}
          successColor="btn-error"
        />
      )}
    </div>
  );
};

export default AllUsers;
