// import React from "react";
import { useNavigate } from "react-router-dom";
import VipLift from "../assets/Feature-Home-lift-cost.jpg";
import Navbar from "./Navbar";

const Ourcompany = () => {
  const navigate = useNavigate()
  return (
   
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 font-serif">
      <div className="font-serif">
     <Navbar/>
     </div>
      <section className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-4">
          About Our Company
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide reliable, modern, and efficient lift solutions for residential,
          commercial, and industrial spaces.
        </p>
      </section>

     
      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-sky-400">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our company specializes in designing, installing, and maintaining
            high-quality elevator systems. With years of industry experience,
            we focus on safety, comfort, and long-term performance.
          </p>
        </div>

        <div className="bg-gray-900 h-64 rounded-lg" >
          <img src={VipLift} alt="" className="h-64 rounded-lg w-180"/>
        </div>
      </section>

     
      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 border rounded-lg hover:scale-105 transform transition duration-600">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To deliver innovative and dependable lift solutions that enhance
            mobility and improve everyday life.
          </p>
        </div>

        <div className="p-8 border rounded-lg hover:scale-105 transform transition duration-600">
          <h3 className="text-xl font-semibold mb-3 text-sky-400">Our Vision</h3>
          <p className="text-gray-600">
            To become a trusted leader in lift technology through quality,
            innovation, and customer satisfaction.
          </p>
        </div>
      </section>

      
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Certified Professionals",
            "High Safety Standards",
            "Modern Technology",
            "Reliable Support"
          ].map((item) => (
            <div
              key={item}
              className="p-6 border rounded-lg text-center hover:bg-sky-700 hover:scale-105 transform transition duration-600"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-3xl font-bold">10+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">250+</h3>
          <p className="text-gray-600">Projects</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">150+</h3>
          <p className="text-gray-600">Clients</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">24/7</h3>
          <p className="text-gray-600">Support</p>
        </div>
      </section>

     
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-sky-400">
          Let's Work Together
        </h2>
        <p className="text-gray-600 mb-6">
          Get in touch with us to discuss your project needs.
        </p>
        <button className="px-8 py-3 border rounded-md hover:bg-sky-700 transition duration-700 ease-in-out" onClick={()=>navigate("/#contact", { replace: false })}>
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default Ourcompany;
