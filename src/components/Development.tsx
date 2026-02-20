import React from "react";
import Navbar from "./Navbar";

const Development = () => {
  return (
    <section className="w-full bg-black py-20 px-6 md:px-20 text-white font-serif ">
  <Navbar/>
     
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Development Process
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Our structured development approach ensures precision, safety, and
          seamless integration from planning to long-term maintenance.
        </p>
      </div>

    
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10  hover:scale-105 transform transition duration-600">
          <h2 className="text-xl font-semibold mb-4 text-sky-400">
            Project Planning
          </h2>
          <p className="text-gray-400">
            Detailed consultation and site evaluation to understand structure,
            traffic flow, and safety requirements.
          </p>
        </div>

       
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:scale-105 transition duration-600">
          <h2 className="text-xl font-semibold mb-4 text-sky-400">
            Design & Engineering
          </h2>
          <p className="text-gray-400">
            Custom lift solutions combining modern design, efficiency, and
            international safety compliance.
          </p>
        </div>

        
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:scale-105 transition duration-600">
          <h2 className="text-xl font-semibold mb-4 text-sky-400">
            Installation
          </h2>
          <p className="text-gray-400">
            Precision installation ensuring seamless integration into new
            and existing buildings.
          </p>
        </div>

       
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:scale-105 transition duration-600">
          <h2 className="text-xl font-semibold mb-4 text-sky-400">
            Testing & Commissioning
          </h2>
          <p className="text-gray-400">
            Rigorous safety inspections, load testing, and operational
            verification before project handover.
          </p>
        </div>

       
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:scale-105 transition duration-600">
          <h2 className="text-xl font-semibold mb-4 text-sky-400">
            Maintenance Support
          </h2>
          <p className="text-gray-400">
            Ongoing servicing, inspections, and upgrades to ensure long-term
            reliability and performance.
          </p>
        </div>

      
        <div className="bg-sky-600 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-600">
          <h2 className="text-xl font-semibold mb-4">
            Commitment to Excellence
          </h2>
          <p>
            We deliver safe, efficient, and elegant vertical mobility solutions
            tailored to every client's needs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Development;
