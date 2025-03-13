import React from 'react'

import profilePic from "../assets/image.jpg"
import {TypeAnimation} from "react-type-animation"
import {AiOutlineGithub, AiOutlineInstagram,AiOutlineLinkedin} from 'react-icons/ai'


import { motion } from 'motion/react'
const Hero = () => {
  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative h-screen'>
      <motion.div 
      variants={{
        hidden:{opacity:0,y:-75},
        visible:{opacity:1,y:0}
      }}
      initial="hidden"
      animate="visible"
      transition={{duration:1}}
      className="flex flex-col items-center justify-center gap-8">
        {/* PROFILE */}
      <motion.img 
      src={profilePic}
      className='w-[300px] md:w-[300px] rounded-full shadow-lg  shadow-purple-800 mt-10'
      initial={{opacity:0,scale:0.8}}
      whileInView={{opacity:1,scale:1}}
      viewport={{once:true}}
      whileHover={{scale:1.1}}
      transition={{duration:1}}
      
      />

      {/* CONTENT */}
        <motion.div
           initial={{opacity:0,y:-50}}
           whileInView={{opacity:1,y:0}}
           viewport={{once:true}}
           transition={{duration:1}}
           className='text-center'
           >
          <motion.p
          initial={{opacity:0,}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          transition={{duration:1,delay:0.5}}
          className='text-purple-500 font-bold  md:text-7xl text-5xl tracking-tight mb-4 capitalize '
          >
           Aaron storm
          </motion.p>

          <TypeAnimation 
            sequence={[
              "Fullstack Developer",1000,
              "Web designer",1000,
              "Consultant",1000
            ]}
            speed={50}
            repeat={Infinity}
            className='font-semibold text-gray-200 text-lg md:text-2xl'
          />
         

          <motion.p
          initial={{opacity:0,}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          transition={{duration:1,delay:1}}
          className='text-gray-400 max-w-[300px] md:max-w-[500px] md:text-base text-sm  mt-4 mb-8'
          >
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, culpa. Ipsam, voluptatum aliquam harum laudantium voluptates unde dolor! Esse, suscipit?

          </motion.p>

          <motion.div
          className='flex flex-row items-center gap-6 my-4 md:mb-0 justify-center'
           initial={{opacity:0,y:50}}
           whileInView={{opacity:1,y:0}}
           viewport={{once:true}}
           transition={{duration:1,delay:1.5}}
           >
          <motion.button 
          className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl'
          whileTap={{scale:0.9}}
          whileHover={{scale:1.05,boxShadow:"0px 0px 8px rgba(0,0,0,0.3)"}}>
            Download CV
          </motion.button>

      

           </motion.div>
      </motion.div>
     
      </motion.div>

    

    </div>
  )
}

export default Hero
