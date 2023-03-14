import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdAlternateEmail, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });
  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imageBb_key;

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();

    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: imgData.data.url,
          };

          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                toast.success("Doctor Added successfully");
                navigate("/admin/manege-doctors");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-14">
      <div className="">
        <h3 className="text-2xl">Add A Doctor</h3>
      </div>
      <div className="mt-6 flex justify-center items-center">
        <div className="w-full  md:w-[385px] shadow-lg p-7 rounded-2xl flex flex-col  bg-base-100">
          <form
            onSubmit={handleSubmit(handleAddDoctor)}
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
                <span className="label-text">Specialty</span>
              </label>
              <div className="relative">
                <select
                  {...register("specialty", { required: "this is a required" })}
                  name="specialty"
                  className="select select-bordered w-full "
                  required
                >
                  <option className="hidden" value="">
                    Select a Specialty
                  </option>
                  {specialties &&
                    specialties.map((specialty) => (
                      <option key={specialty._id} value={specialty.name}>
                        {specialty.name}
                      </option>
                    ))}
                </select>
              </div>
              {errors.specialty && (
                <p className="text-error">{errors.specialty?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <div className="relative">
                <input
                  {...register("image", { required: "this is a required" })}
                  type="file"
                  className="file-input file-input-bordered w-full"
                />
              </div>
              {errors.image && (
                <p className="text-error">{errors.image?.message}</p>
              )}
            </div>

            <SecondaryButton>Doctor Add</SecondaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
