import  { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Firstpage from './Firstpage';
import Recommendation from './Recommendation';
import Secondslide from "./Secondslide";
import Aboutus from "./Aboutus";
import ContactSection from './Contactus';

const Home = () => {
  const location = useLocation();

 
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 800);
    }
  }, [location]);

 
  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-[Lora]">
      <Navbar />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        variants={fadeVariant}
      >
        <Firstpage />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        variants={fadeVariant}
      >
        <Aboutus />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        variants={fadeVariant}
      >
        <Secondslide />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        variants={fadeVariant}
      >
        <Recommendation />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        variants={fadeVariant}
      >
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default Home;