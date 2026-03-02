import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { MdTrendingUp } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FaGem } from 'react-icons/fa'

const Recommendation = () => {

  return (
    <div className="px-4 md:px-20 py-10">
      
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">
        Choose Excellence
      </h1>

      <p className="text-center text-lg mb-10 text-gray-600">
        We deliver smart, reliable, and modern elevator solutions built on excellence and trust.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

       
        <div className="bg-[#242424] text-white p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 transform transition duration-500 shadow-lg">
          <BsBriefcase className="text-blue-400 text-5xl mb-4" />
          <h2 className="font-bold text-lg md:text-xl text-center mb-2">
            Our Strengths
          </h2>
          <p className="text-center text-sm">
            Driven by quality, innovation, and industry-leading expertise.
          </p>
        </div>

      
        <div className="bg-[#242424] text-white p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 transform transition duration-500 shadow-lg">
          <MdTrendingUp className="text-green-400 text-5xl mb-4" />
          <h2 className="font-bold text-lg md:text-xl text-center mb-2">
            Growth & Innovation
          </h2>
          <p className="text-center text-sm">
            Forward-thinking strategies that keep our elevator solutions ahead.
          </p>
        </div>

       
        <div className="bg-[#242424] text-white p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 transform transition duration-500 shadow-lg">
          <AiOutlineCheckCircle className="text-purple-400 text-5xl mb-4" />
          <h2 className="font-bold text-lg md:text-xl text-center mb-2">
            Trusted Quality
          </h2>
          <p className="text-center text-sm">
            Raising the standard in elevator engineering across Nigeria.
          </p>
        </div>

       
        <div className="bg-[#242424] text-white p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 transform transition duration-500 shadow-lg">
          <FaGem className="text-yellow-400 text-5xl mb-4" />
          <h2 className="font-bold text-lg md:text-xl text-center mb-2">
            Premium Service
          </h2>
          <p className="text-center text-sm">
            Delivering excellence with precision, safety, and customer satisfaction.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Recommendation