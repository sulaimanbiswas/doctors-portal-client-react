import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const ErrorPage = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();

  const logOutHandler = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Sign Out");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p className="text-error">Something went Wrong</p>
      <p className="text-error">{error.statusText || error.message}</p>
      <p className="text-3xl">
        Please{" "}
        <button className="btn btn-primary" onClick={logOutHandler}>
          Sign Out
        </button>{" "}
        and login back in
      </p>
    </div>
  );
};

export default ErrorPage;
