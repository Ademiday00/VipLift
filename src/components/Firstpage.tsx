import { useState, useEffect } from "react";
import img1 from "../assets/firstimage.jpg";
import img2 from "../assets/secondimage.jpg";
import img3 from "../assets/thirdimage.jpg";
import img4 from "../assets/fourthimage.jpg";
import img5 from "../assets/fifthimage.jpg";

const Firstpage = () => {
  const images = [img5, img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % images.length); 
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="px-4 py-12">
      <h1 className="text-blue-800 flex justify-center text-3xl md:text-5xl lg:text-6xl font-bold mb-12 text-center">
        Lift Solution for Seamless Integration
      </h1>

      
      <div className="flex justify-center flex-wrap md:flex-nowrap gap-0 overflow-hidden">
        
        <img
          src={images[currentIndex]}
          alt="slide 1"
          className="w-[48%] md:w-[45%] h-[250px] md:h-[350px] lg:h-[400px] object-cover rounded shadow-lg transition-all duration-500"
        />
        
        <img
          src={images[(currentIndex + 1) % images.length]}
          alt="slide 2"
          className="w-[48%] md:w-[45%] h-[250px] md:h-[350px] lg:h-[400px] object-cover rounded shadow-lg transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default Firstpage;
