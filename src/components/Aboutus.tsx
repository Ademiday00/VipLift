// import React from "react";
import Lift from "../assets/thirdimage.jpg";

const Aboutus = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-[#1e1e1e] rounded-2xl p-6 lg:p-10 border border-[#2f2f2f]">
          
         
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Company Overview
            </h1>

            <p className="text-gray-300 text-base lg:text-lg mb-3">
              We are committed to the design, manufacture, and delivery of
              perfect products.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              VIP Lift is a lifting technology and engineering company
              specializing in elevating and lifting solutions for private homes,
              hospitals, shopping malls, churches, vessels, factories, offices,
              club homes, and apartment buildings. We believe our lifts are
              tasteful alternatives to staircases, a value-adding feature to any
              building and a convenient solution for the movement of both people
              and goods between different levels. VIPLift Nigeria Limited is a
              branch of the VIPLift (Holding) in the Netherlands and we have our
              corporate office situated in Lagos.
            </p>
          </div>

         
          <div className="w-full flex justify-center">
            <img
              src={Lift}
              alt="VIP Lift"
              className="
                w-full
                max-h-52 sm:max-h-56 md:max-h-60
                lg:max-w-sm lg:max-h-64
                h-auto
                rounded-xl
                object-contain
                shadow-md
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aboutus;
