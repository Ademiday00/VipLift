import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { MdTrendingUp } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FaGem } from 'react-icons/fa'

const Recommendation = () => {

    return (
        <div className="px-4 md:px-20 py-10">
      <h1 className="text-center text-3xl md:text-4xl font-bold  mb-10">
      Choose Excellence
      </h1>
<p className='text-center text-lg mb-7'>We deliver smart, reliable, and modern elevator solutions built on excellence and trust.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

       
        <div className="bg-[#242424] text-white p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 transform transition duration-600">
          <BsBriefcase className="text-blue-400 text-5xl mb-4" />
          <h1 className="font-bold text-lg md:text-xl text-center">Our Strengths</h1>
          <p className='text-center'>Driven by quality, innovation, and industry-leading expertise.</p>
</div>

           <div className="bg-[#242424] text-white p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 transform transition duration-600">
          <MdTrendingUp className="text-green-400 text-5xl mb-4" />
          <h1 className="font-bold text-lg md:text-xl text-center">Bold & Marketing-Focused</h1>
          <p className='text-center'>Distinct values that define our approach to elevator engineering.</p>
   </div>
   <div className="bg-[#242424] text-white p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 transform transition duration-600">
          <AiOutlineCheckCircle className="text-purple-400 text-5xl mb-4" />
          <h1 className="font-bold text-lg md:text-xl text-center">Short & Clean</h1>
         <p className='text-center'>Raising the standard in elevator solutions across Nigeria.</p>
  </div>
   </div>
   </div>
    )
}
