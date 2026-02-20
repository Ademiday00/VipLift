import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { BsPersonCircle } from "react-icons/bs";
import Viplift from "../assets/VipLift.jpeg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
     
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 lg:px-10 py-4 text-lg bg-white shadow-md z-50">
       
        <div className="flex items-center gap-6">
          <img
            src={Viplift}
            alt="Logo"
            className="h-12 w-28 object-contain"
          />

          <ul className="hidden lg:flex gap-6 font-bold text-gray-800">
            <li>
              <Link to="/" className="transition-colors duration-300 hover:text-blue-800">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="transition-colors duration-300 hover:text-blue-800">
                Completed Projects
              </Link>
            </li>
            <li>
              <Link to="/application" className="transition-colors duration-300 hover:text-blue-800" >
                Application
              </Link>
            </li>
            <li>
              <Link to="/company" className="transition-colors duration-300 hover:text-blue-800">
                Our Company
              </Link>
            </li>
            <li>
              <Link to="/development" className="transition-colors duration-300 hover:text-blue-800">
                Development
              </Link>
            </li>
          </ul>
        </div>

        
        <div className="hidden lg:flex items-center gap-5 text-black">
          {/* <ImSearch
            className="cursor-pointer hover:text-blue-800 transition-colors duration-300"
            size={20}
          />
          <BsPersonCircle
            className="cursor-pointer hover:text-blue-800 transition-colors duration-300"
            size={20}
          /> */}
          <Link
            to="/contact"
            className="font-bold text-blue-700 border-2 border-solid border-blue-700 rounded-lg px-4 py-3 hover:bg-blue-800 hover:text-white transition transform duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Contact us
          </Link>
        </div>

        
        <button
          className="lg:hidden text-3xl font-bold text-gray-800"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </nav>

     
      <div className="h-20"></div>

      
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6 font-bold text-sm text-blue-800">
          <button
            className="self-end text-xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" onClick={() => setIsOpen(false)}>
                Product
              </Link>
            </li>
            <li>
              <Link to="/application" onClick={() => setIsOpen(false)}>
                Application
              </Link>
            </li>
            <li>
              <Link to="/company" onClick={() => setIsOpen(false)}>
                Our Company
              </Link>
            </li>
            <li>
              <Link to="/development" onClick={() => setIsOpen(false)}>
                Development
              </Link>
            </li>
          </ul>

          {/* <div className="gap-6">
            <ImSearch size={20} />
            <BsPersonCircle size={20} className="mt-4" />
          </div> */}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="font-bold text-blue-700 border-2 rounded-lg px-6 py-3 hover:text-blue-800 transition-colors duration-300"
          >
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
