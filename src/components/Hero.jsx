import React from 'react'

import profilePic from "../assets/image.jpg"
import {TypeAnimation} from "react-type-animation"
import ShinyEffect from './ShinyEffect'
import {AiOutlineGithub, AiOutlineInstagram,AiOutlineLinkedin
} from 'react-icons/ai'
import {
DiCss3,DiHtml5,DiJavascript1,DiNodejsSmall,DiReact} from 'react-icons/di'

import { motion } from 'motion/react'
const Hero = () => {
  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
           initial={{opacity:0,y:-50}}
           whileInView={{opacity:1,y:0}}
           viewport={{once:true}}
           transition={{duration:1}}
           >
          <TypeAnimation 
            sequence={[
              "Fullstack Dev",1000,
              "Webdesigner",1000,
              "Consultapt",1000
            ]}
            speed={50}
            repeat={Infinity}
            className='font-bold text-gray-400 text-xl md:text-5xl italic mb-4'
          />
          <motion.p
          initial={{opacity:0,}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          transition={{duration:1,delay:0.5}}
          className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
          >
            HEY,I AM <br/>
            <span className="text-purple-500">
              JOHN DOE
            </span>

          </motion.p>

          <motion.p
          initial={{opacity:0,}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          transition={{duration:1,delay:1}}
          className='text-gray-200 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg  mb-4'
          >
            I am a passionate fullstack developer with over 5 years of experience

          </motion.p>

          <motion.div
          className='flex flex-row items-center gap-6 my-4 md:mb-0'
           initial={{opacity:0,y:50}}
           whileInView={{opacity:1,y:0}}
           viewport={{once:true}}
           transition={{duration:1,delay:1.5}}
           >
          <motion.button 
          className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl'
          whileHover={{scale:1.05,boxShadow:"0px 0px 8px rgba(0,0,0,0.3)"}}>
            Download CV
          </motion.button>

          <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
            <motion.a href="#" whileHover={{scale:1.2}}>
              <AiOutlineGithub/>
            </motion.a>

            <motion.a href="#" whileHover={{scale:1.2}}>
              <AiOutlineLinkedin/>
            </motion.a>

            <motion.a href="#" whileHover={{scale:1.2}}>
              <AiOutlineInstagram/>
            </motion.a>
          </div>

           </motion.div>
      </motion.div>
      <motion.img 
      src={profilePic}
      className='w-[300px] md:w-[450px]'
      initial={{opacity:0,scale:0.8}}
      whileInView={{opacity:1,scale:1}}
      viewport={{once:true}}
      transition={{duration:1}}
      
      />
      </div>
    <motion.div
      className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24'
      initial={{opacity:0,}}
      whileInView={{opacity:1,}}
      viewport={{once:true}}
      transition={{duration:1,delay:2}}
    >
      <p className='text-gray-200 mr-6'>My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />


        <div className="absolute inset-0 hidden md:block">
          <ShinyEffect left={0} top={0} size={1400}/>
        </div>
    </motion.div>

    </div>
  )
}

export default Hero
