import React from "react";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const ContactForm = () => {
  return (
    <section className="bg-appointment bg-cover bg-no-repeat py-16">
      <div className="w-1/3 mx-auto text-center flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-secondary font-bold text-xl">Contact Us</h2>
          <h1 className="text-4xl font-normal text-base-100">
            Stay connected with us
          </h1>
        </div>
        <form className="flex flex-col gap-9">
          <div className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email Address"
              className="input w-full"
            />
            <input type="text" placeholder="Subject" className="input w-full" />
            <textarea
              className="textarea h-32"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
