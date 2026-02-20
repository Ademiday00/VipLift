import { useState } from "react"


const Imageslide = () => {

    const images = [
        "/assets/fifthimage.jpg",
        "/assets/firstimage.jpg",
        "/assets/secondimage.jpg",
        "/assets/thirdimage.jpg",
        "/assets/fourthimage.jpg"
    ];
    const [currentIndex, setcurrentIndex] = useState(0);


    const nextImage = () => {
        setcurrentIndex ((prev) =>
       prev === images.length - 1 ? 0: prev + 1
    )    
    };
     
const prevImage =() => {
    setcurrentIndex ((next) =>
     next === 0 ? images.length + 1 : next - 1
    )
}

  return (
    <div>
<div>
   <img src={images[currentIndex]}
    alt="" /> 
</div>
    <div>
       <button
          onClick={prevImage}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900 transition"
        >
          Prev
        </button>

         <button
          onClick={nextImage}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition"
        >
          Next
        </button>
    </div>

    </div>
  )
}

export default Imageslide