import { useState } from "react";
import Home from "../assets/ninth.jpeg";
import Office from "../assets/officeimg.avif";
import Shopping from "../assets/shopping.webp";
import Industrial from "../assets/industrial.webp";
import Hospital from "../assets/Hospital-Lift-Elevator.png";
import Carehome from "../assets/carehomeimg.jpg";
import Navbar from "./Navbar";

const Applications = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalText, setModalText] = useState<string>("");

  const openModal = (title: string, text: string): void => {
    setModalTitle(title);
    setModalText(text);
    setModalOpen(true);
  };

  return (
    <>
    <div className="font-serif">
    <Navbar/>
    </div>
      <div className="px-4 md:px-16 py-10 space-y-16 font-serif">
     
       
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={Home}
            alt="Residential"
            className="w-full md:w-80 h-64 md:h-96 object-cover rounded-3xl"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl mb-5 text-blue-800 font-bold">
              Residential Buildings
            </h1>
            <button
              onClick={() =>
                openModal(
                  "Residential Buildings",
                  "Residential elevators are designed for private homes. They provide comfort, accessibility, and smooth vertical movement."
                )
              }
              className="px-4 py-2 border rounded-xl text-sm hover:bg-sky-700 hover:text-white transition duration-500"
            >
              Read More
            </button>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={Office}
            alt="Office"
            className="w-full md:w-80 h-64 md:h-96 object-cover rounded-3xl"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl mb-5 text-blue-800 font-bold">Office Buildings</h1>
            <button
              onClick={() =>
                openModal(
                  "Office Buildings",
                  "Office elevators are built for high-traffic commercial spaces with durability and efficiency."
                )
              }
              className="px-4 py-2 border rounded-xl text-sm hover:bg-sky-700 hover:text-white transition duration-500"
            >
              Read More
            </button>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={Shopping}
            alt="Shopping"
            className="w-full md:w-80 h-64 md:h-96 object-cover rounded-3xl"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl mb-5 text-blue-800 font-bold">Shopping Buildings</h1>
            <button
              onClick={() =>
                openModal(
                  "Shopping Buildings",
                  "Shopping mall elevators are designed for heavy public usage, ensuring safety and smooth transport."
                )
              }
              className="px-4 py-2 border rounded-xl text-sm hover:bg-sky-700 hover:text-white transition duration-500"
            >
              Read More
            </button>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={Industrial}
            alt="Industrial"
            className="w-full md:w-80 h-64 md:h-96 object-cover rounded-3xl"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl mb-5 text-blue-800 font-bold">Industrial Buildings</h1>
            <button
              onClick={() =>
                openModal(
                  "Industrial Buildings",
                  "Industrial elevators are built to transport heavy goods and equipment safely in warehouses and factories."
                )
              }
              className="px-4 py-2 border rounded-xl text-sm hover:bg-sky-700 hover:text-white transition duration-500"
            >
              Read More
            </button>
          </div>
        </div>

      
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={Hospital}
            alt="Hospital"
            className="w-full md:w-80 h-64 md:h-96 object-cover rounded-3xl"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl mb-5 text-blue-800 font-bold">Hospitals</h1>
            <button
              onClick={() =>
                openModal(
                  "Hospital Elevators",
                  "Hospital elevators are designed for patient beds, medical staff, and emergency efficiency."
                )
              }
              className="px-4 py-2 border rounded-xl text-sm hover:bg-sky-700 hover:text-white transition duration-500"
            >
              Read More
            </button>
          </div>
        </div>

      
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={Carehome}
            alt="Carehome"
            className="w-full md:w-80 h-64 md:h-96 object-cover rounded-3xl"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl mb-5 text-blue-800 font-bold">Carehomes</h1>
            <button
              onClick={() =>
                openModal(
                  "Carehome Elevators",
                  "Carehome elevators ensure safe and smooth transportation for elderly residents and caregivers."
                )
              }
              className="px-4 py-2 border rounded-xl text-sm hover:bg-sky-700 hover:text-white transition duration-500"
            >
              Read More
            </button>
          </div>
        </div>

      </div>

    
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-zinc-500 border-white text-white w-full md:w-2/3 lg:w-1/2 p-6 md:p-10 rounded-3xl relative shadow-lg">

            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-6 text-2xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {modalTitle}
            </h2>

            <p className="text-base md:text-lg">
              {modalText}
            </p>

          </div>
        </div>
      )}
    </>
  );
};

export default Applications;
