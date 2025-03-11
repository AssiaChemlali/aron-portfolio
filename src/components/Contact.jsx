import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Revial from './Revial'
const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id="contact">
       <Revial>
          <div className="grid md:grid-cols-2 place-items-end">
            <div >
              <div className='text-gray-300 my-3'>
                <h3 className='text-4xl font-semibold mb-5'>about <span>me</span> </h3>
                <p className='text-justify leading-7 w-11/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas quibusdam sunt impedit dolorem molestias qui praesentium, reprehenderit labore. Optio.</p>
              </div>

              <div className="flex mt-10 items-center gap-7">

                <div className='bg-gray-800/40 p-5 rounded-lg '>
                  <h3 className='md:text-4xl text-2xl font-semibold text-white'>11
                    <span>+</span>
                  </h3>
                  <p className='text-xs md:text-base'>
                    <span>Projects</span>
                  </p>
                </div>

                <div className='bg-gray-800/40 p-5 rounded-lg '>
                  <h3 className='md:text-4xl text-2xl font-semibold text-white'>5
                    <span>+</span>
                  </h3>
                  <p className='text-xs md:text-base'>
                    <span>years of experience</span>
                  </p>

                </div>
          

                <div className='bg-gray-800/40 p-5 rounded-lg '>
                  <h3 className='md:text-4xl text-2xl font-semibold text-white'>5
                    <span>+</span>
                  </h3>
                  <p className='text-xs md:text-base'>
                    <span>happy clients</span>
                  </p>

                </div>

              </div>

            </div>
            
            <form 
            action="https://getform.io/f/allygzra"
            method='POST'
            className='max-w-6xl p-4 md:p-12'
            id="form"
            >
              <p className='text-gray-100 font-bold text-xl mb-2'>let's connect!</p>
             <input  
             id="name"
             name="name"
             placeholder='Your name ..'
             type="text"
             className='mb-2 w-full rounded-md border-purple-600 py-2 pl-2 pr-4'
             />

              <input  
             id="email"
             name="email"
             placeholder='Your email ..'
             type="email"
             className='mb-2 w-full rounded-md border-purple-600 py-2 pl-2 pr-4'
             />

            <textarea  
             id="textarea"
             name="textarea"
             placeholder='Your Message ..'
             cols="30"
             rows="4"
             className='mb-2 w-full rounded-md border-purple-600 py-2 pl-2 pr-4'
             />
             <button type="submit" 
             className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>
             send Message
             </button>


            </form>

          </div>

       </Revial>
    </div>
  )
}

export default Contact
