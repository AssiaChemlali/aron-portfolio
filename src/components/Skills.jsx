
import React from 'react'

import Revial from './Revial'

import { skills } from '../data/dummy'

const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 text-gray-200 pb-8 md:py-12 max-w-[1000px] mx-auto' id="skills">
        <Revial >
        <h2 className='text-3xl font-bold mb-4 text-center'>Skills</h2>
        <p className="text-center mb-8">I worked on various frontend and fullstack projects.check them  
        <a href="#" className="underline"> there</a></p>

        <div className="flex flex-col gap-6 md:flex-row justify-center items-center  ">
        {
          skills.map((skill,index)=>(
            <div className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full text-center " key={index} >
              <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
              <div className="flex items-center gap-4 justify-center flex-wrap">
                {skill.technologies.map((tech,idx)=>(
                  <div className=' flex flex-col  items-center cursor-pointer' key={idx}>
                    <span className='text-2xl '>{tech.icon}</span>
                    <span className='text-gray-400 hover:text-purple-500 transition-all'>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
        </div>

        </Revial>
    </div>
  )
}

export default Skills
