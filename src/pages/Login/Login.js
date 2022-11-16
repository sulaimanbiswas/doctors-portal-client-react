import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import SecondaryButton from "../../components/Home/SecondaryButton/SecondaryButton";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const loginHandle = (data) => {
    console.log(data);
  };
  return (
    <div className=" min-h-screen mx-auto flex justify-center items-center  ">
      <div className="w-full md:w-[385px] shadow-lg p-7 rounded-2xl flex flex-col">
        <h2 className="font-normal text-xl text-center">Login</h2>
        <form
          onSubmit={handleSubmit(loginHandle)}
          className="flex flex-col gap-3"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-error" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-error" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <Link to="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <SecondaryButton>Login</SecondaryButton>
        </form>
        <div className="">
          <label className="label justify-center gap-1">
            <p className="label-text-alt ">New to Doctors Portal?</p>
            <Link
              to="#"
              className="label-text-alt link no-underline link-hover link-secondary"
            >
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-primary">
          <FcGoogle className="mr-1 w-7 h-7" />
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
