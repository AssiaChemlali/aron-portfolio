import React, { useState } from 'react'

import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import{Link} from "react-scroll"
import {motion} from 'framer-motion'
import {links, socialLinks} from '../data/dummy'

const Navbar = () => {
  const [nav,setNav]=useState(false)

  const closeNav=()=>{
     setNav(false)
  }

  const toggleNav=()=>{
      setNav(!nav)
  }

  const menuVariants={
    open:{
      x:0,
      transition:{
        stiffness:20,
        damping:15

      }
    },
    closed:{
      x:'-100%',
      transition:{
        stiffness:20,
        damping:15
      }
    }
  }

  return (
    <div className='fixed top-0 left-0 w-full md:bg-transparent bg-opacity-90 backdrop-blur-md z-50 '>
        <div className="max-w-[1300px] mx-auto  flex justify-between text-gray-300 text-xl items-center px-12 h-20  border-b  border-slate-800">

          {/* logo */}
          <Link to="." className='text-xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text opacity-80 hover:opacity-100 z-50'>Aaron</Link>

           {/* desktop menu */}
          <ul className='hidden md:flex gap-10 z-10 cursor-pointer text-base '>
            {
              links.map((link,index)=>{
                return(
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      smooth={true} 
                      offset={50} 
                      duration={500} className='hover:text-white transition-all duration-300'>
                        {link.label}
                    </Link>
                 </li>
                )
              })
            }
            
          
          </ul>
         
          {/* toogle button */}
          <div className="block md:hidden z-50 text-gray-200"       
            onClick={toggleNav}>
              {nav ? 
              <AiOutlineClose size={30}/>:
              <AiOutlineMenu size={30}/>
              }
          </div>

           {/* mobile menu */}
          <motion.div
          initial={false}
          animate={nav ? 'open':'closed'}
          variants={menuVariants}
          className='fixed left-0 top-0 w-full min-h-screen  bg-black/95  backdrop-blur-md'
          >
          <ul className="font-semibold text-2xl space-y-8 mt-20  py-5 text-center ">

          {
              links.map((link,index)=>{
                return(
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      onClick={closeNav}
                      smooth={true} 
                      offset={50} 
                      duration={500} className='hover:text-white transition-all'>
                        {link.label}
                    </Link>
                 </li>
                )
              })}
           
            
          </ul>   
          </motion.div>

          {/* social icons */}
          <div className="hidden md:flex gap-3 flex-row  z-20 ">
            {
              socialLinks.map((socialLink,index)=>{
                return(
                  <motion.a  key={index}
                    className='text-xl  text-gray-400 hover:text-purple-500'
                    href={socialLink.href} 
                    whileHover={{scale:1.2}}>
                    {socialLink.icon}
                  </motion.a>
                )
              })
            }
          </div>

      </div>
    </div>
  )
}

export default Navbar

