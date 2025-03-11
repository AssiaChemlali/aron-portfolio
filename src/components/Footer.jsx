import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex justify-center p-6 md:p-20 text-sm md:text-lg'>
      <div className='space-y-4 '>
        <h3 className='text-xl text-gray-200 font-semibold'>J.Doe @2024 J.Doe</h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl  justify-center">
          <a href="#"><FaGithubSquare/></a>
          <a href="#"><FaInstagram/></a>
        </div>
      </div>
    
    </div>
  )
}

export default Footer
