import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import ContactForm from "../../components/Home/ContactForm/ContactForm";
import InfoCards from "../../components/Home/InfoCards/InfoCards";
import MakeAppointment from "../../components/Home/MakeAppointment/MakeAppointment";
import Services from "../../components/Home/Services/Services";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import Treatment from "../../components/Home/Treatment/Treatment";

const Home = () => {
  return (
    <div className="px-5 flex flex-col">
      <Banner />
      <InfoCards />
      <Services />
      <Treatment />
      <MakeAppointment />
      <Testimonial />
      <ContactForm />
    </div>
  );
};

export default Home;
