
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Development = () => {

  
  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

 
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="w-full bg-black py-20 px-6 md:px-20 text-white font-[Lora]">
      <Navbar />

     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Development Process
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Our structured development approach ensures precision, safety, and
          seamless integration from planning to long-term maintenance.
        </p>
      </motion.div>

     
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            title: "Project Planning",
            text: "Detailed consultation and site evaluation to understand structure, traffic flow, and safety requirements.",
            style: "bg-white/5 backdrop-blur-lg border border-white/10",
          },
          {
            title: "Design & Engineering",
            text: "Custom lift solutions combining modern design, efficiency, and international safety compliance.",
            style: "bg-white/5 backdrop-blur-lg border border-white/10",
          },
          {
            title: "Installation",
            text: "Precision installation ensuring seamless integration into new and existing buildings.",
            style: "bg-white/5 backdrop-blur-lg border border-white/10",
          },
          {
            title: "Testing & Commissioning",
            text: "Rigorous safety inspections, load testing, and operational verification before project handover.",
            style: "bg-white/5 backdrop-blur-lg border border-white/10",
          },
          {
            title: "Maintenance Support",
            text: "Ongoing servicing, inspections, and upgrades to ensure long-term reliability and performance.",
            style: "bg-white/5 backdrop-blur-lg border border-white/10",
          },
          {
            title: "Commitment to Excellence",
            text: "We deliver safe, efficient, and elegant vertical mobility solutions tailored to every client's needs.",
            style: "bg-sky-600 shadow-lg",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className={`${card.style} p-8 rounded-2xl hover:bg-white/10 hover:scale-105 transform transition duration-600`}
            variants={cardVariant}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeInOut" }}
          >
            <h2 className={`text-xl font-semibold mb-4 ${card.style.includes("sky-600") ? "text-white" : "text-sky-400"}`}>
              {card.title}
            </h2>
            <p className={`${card.style.includes("sky-600") ? "text-white" : "text-gray-400"}`}>
              {card.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Development;