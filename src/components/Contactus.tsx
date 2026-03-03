// import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

      
        <div>
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

          <div className="space-y-6 text-gray-300">

          
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-sky-400 text-xl mt-1" />
              <div>
                <h3 className="text-white font-semibold">Address</h3>
                <p>123 Elevator Street, Business District, Your City</p>
              </div>
            </div>

           
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-sky-400 text-xl mt-1" />
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p>+123 456 7890</p>
              </div>
            </div>

            
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-sky-400 text-xl mt-1" />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p>info@viplift.com</p>
              </div>
            </div>

          
            <div className="flex items-start gap-4">
              <FaClock className="text-sky-400 text-xl mt-1" />
              <div>
                <h3 className="text-white font-semibold">Working Hours</h3>
                <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                <p>Sat: 9:00 AM – 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg">
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-sky-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-sky-400"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-sky-400"
            />

            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 transition duration-300 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
