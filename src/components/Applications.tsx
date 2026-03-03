import { useState } from "react";
import Navbar from "./Navbar";

import Home from "../assets/ninth.jpeg";
import Office from "../assets/officeimg.avif";
import Shopping from "../assets/shopping.webp";
import Industrial from "../assets/industrial.webp";
import Hospital from "../assets/Hospital-Lift-Elevator.png";
import Carehome from "../assets/carehomeimg.jpg";

const Applications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    text: "",
  });

  const applications = [
    {
      title: "Residential Buildings",
      image: Home,
      text: "Residential elevators are designed for private homes. They provide comfort, accessibility, and smooth vertical movement.",
    },
    {
      title: "Office Buildings",
      image: Office,
      text: "Office elevators are built for high-traffic commercial spaces with durability and efficiency.",
    },
    {
      title: "Shopping Buildings",
      image: Shopping,
      text: "Shopping mall elevators are designed for heavy public usage, ensuring safety and smooth transport.",
    },
    {
      title: "Industrial Buildings",
      image: Industrial,
      text: "Industrial elevators transport heavy goods and equipment safely in warehouses and factories.",
    },
    {
      title: "Hospitals",
      image: Hospital,
      text: "Hospital elevators are designed for patient beds, medical staff, and emergency efficiency.",
    },
    {
      title: "Carehomes",
      image: Carehome,
      text: "Carehome elevators ensure safe and smooth transportation for elderly residents and caregivers.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="px-6 md:px-20 py-16 font-serif">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
          Applications
        </h1>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {applications.map((item, index) => (
            <div
              key={index}
              className="border border-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                  {item.title}
                </h2>

                <button
                  onClick={() => {
                    setModalData(item);
                    setModalOpen(true);
                  }}
                  className="px-6 py-2 bg-blue-800 text-white rounded-xl hover:bg-blue-600 transition duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white text-gray-800 w-full md:w-2/3 lg:w-1/2 p-8 rounded-3xl shadow-2xl relative animate-fadeIn">

            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-6 text-2xl font-bold text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              {modalData.title}
            </h2>

            <p className="text-lg leading-relaxed">
              {modalData.text}
            </p>

          </div>
        </div>
      )}
    </>
  );
};

export default Applications;