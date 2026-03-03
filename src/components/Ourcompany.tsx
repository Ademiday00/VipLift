
import { useNavigate } from "react-router-dom";
import VipLift from "../assets/Feature-Home-lift-cost.jpg";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Ourcompany = () => {
  const navigate = useNavigate();

  
  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 font-[Lora]">
      <Navbar />
 
      <motion.section
        className="text-center mb-20"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide reliable, modern, and efficient lift solutions for residential,
          commercial, and industrial spaces.
        </p>
      </motion.section>

      {/* Who We Are */}
      <motion.section
        className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-sky-400">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Our company specializes in designing, installing, and maintaining
            high-quality elevator systems. With years of industry experience,
            we focus on safety, comfort, and long-term performance.
          </p>
        </div>

        <div className="bg-gray-900 h-64 rounded-lg">
          <img src={VipLift} alt="" className="h-64 rounded-lg w-full" />
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="p-8 border rounded-lg hover:scale-105 transform transition duration-600"
          variants={cardVariant}
        >
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To deliver innovative and dependable lift solutions that enhance
            mobility and improve everyday life.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-lg hover:scale-105 transform transition duration-600"
          variants={cardVariant}
        >
          <h3 className="text-xl font-semibold mb-3 text-sky-400">Our Vision</h3>
          <p className="text-gray-600">
            To become a trusted leader in lift technology through quality,
            innovation, and customer satisfaction.
          </p>
        </motion.div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="mb-20"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-10">Why Choose Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Certified Professionals",
            "High Safety Standards",
            "Modern Technology",
            "Reliable Support",
          ].map((item, index) => (
            <motion.div
              key={item}
              className="p-6 border rounded-lg text-center hover:bg-sky-700 hover:scale-105 transform transition duration-600"
              variants={cardVariant}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeInOut" }}
            >
              <p className="font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
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
      </motion.section>

      {/* Contact Section with Animated Button */}
      <motion.section
        className="text-center"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-sky-400">
          Let's Work Together
        </h2>
        <p className="text-gray-600 mb-6">
          Get in touch with us to discuss your project needs.
        </p>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 12, duration: 0.8 }}
          viewport={{ once: true }}
          className="px-8 py-3 border rounded-md hover:bg-sky-700 transition duration-700 ease-in-out"
          onClick={() => navigate("/#contact", { replace: false })}
        >
          Contact Us
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Ourcompany;