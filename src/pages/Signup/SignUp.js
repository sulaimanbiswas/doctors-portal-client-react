import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail, MdPerson, MdRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { AuthContext } from "../../contexts/AuthProvider";

const provider = new GoogleAuthProvider();

const SignUp = () => {
  const { signUp, providerSignUpAndLogin, validationUser, updateUser } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const signUpHandle = (data) => {
    const { name, email, password } = data;

    const userInfo = {
      displayName: name,
    };

    signUp(email, password)
      .then(() => {
        updateUser(userInfo)
          .then(() => {})
          .catch((error) => {
            toast.error(error.message);
          });
        validationUser()
          .then(() => {
            toast.success("Please check your email to verify your account");
            navigate("/login");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const googleLoginHandler = () => {
    providerSignUpAndLogin(provider)
      .then(() => {
        toast.success("Successfully signup");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className=" min-h-screen mx-auto flex justify-center items-center  ">
      <div className="w-full md:w-[385px] shadow-lg p-7 rounded-2xl flex flex-col">
        <h2 className="font-normal text-xl text-center">Sign up</h2>
        <form
          onSubmit={handleSubmit(signUpHandle)}
          className="flex flex-col gap-3"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <div className="relative">
              <input
                {...register("name", { required: "this is a required" })}
                type="text"
                className="input input-bordered w-full"
              />
              <MdPerson className="absolute bottom-1/3 right-3" />
            </div>
            {errors.name && (
              <p className="text-error">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <div className="relative">
              <input
                {...register("email", {
                  required: "this is a required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className="input input-bordered w-full"
              />
              <MdAlternateEmail className="absolute bottom-1/3 right-3" />
            </div>
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "this is a required",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                    message: "Password must be Strong",
                  },
                })}
                type={showPass ? "password" : "text"}
                className="input input-bordered w-full"
              />
              <MdRemoveRedEye
                onClick={() => setShowPass(!showPass)}
                className="absolute bottom-1/3 right-3"
              />
            </div>
            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
            <label className="label">
              <Link to="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <SecondaryButton>Signup</SecondaryButton>
        </form>
        <div className="">
          <label className="label justify-center gap-1">
            <p className="label-text-alt ">Already have an account?</p>
            <Link
              to="/login"
              className="label-text-alt link no-underline link-hover link-secondary"
            >
              Login now
            </Link>
          </label>
        </div>
        <div className="divider">OR</div>
        <button
          onClick={googleLoginHandler}
          className="btn btn-outline btn-primary"
        >
          <FcGoogle className="mr-1 w-7 h-7" />
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
