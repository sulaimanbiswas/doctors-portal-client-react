import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { AuthContext } from "../../contexts/AuthProvider";

const ForgotPassword = () => {
  const { forgotPassword } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let navigate = useNavigate();

  const forgotPasswordHandle = (data) => {
    forgotPassword(data.email)
      .then(() => {
        toast.success("Please check your email");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className=" min-h-screen mx-auto flex justify-center items-center  ">
      <div className="w-full md:w-[385px] shadow-lg p-7 rounded-2xl flex flex-col">
        <h2 className="font-normal text-xl text-center">Forgot Password</h2>
        <form
          onSubmit={handleSubmit(forgotPasswordHandle)}
          className="flex flex-col gap-3"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <div className="relative">
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                className="  input input-bordered w-full"
              />
              <MdAlternateEmail className="absolute bottom-1/3 right-3" />
            </div>
            {errors.email && (
              <p className="text-error" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          <SecondaryButton>Submit Email</SecondaryButton>
        </form>
        <div className="">
          <label className="label justify-center gap-1">
            <p className="label-text-alt ">New to Doctors Portal?</p>
            <Link
              to="/signup"
              className="label-text-alt link no-underline link-hover link-secondary"
            >
              Register now
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
