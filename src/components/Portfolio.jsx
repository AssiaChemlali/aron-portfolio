import React from 'react'

import { AiOutlineGithub } from 'react-icons/ai'

import Revial from './Revial'
import { projects } from '../data/dummy'

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8 text-center'>Portfolio</h2>

      {projects?.map((project, index) => (
        <Revial key={index}>
          <div className={`flex flex-col md:flex-row  mb-12 gap-10`}>
            <div className='overflow-hidden rounded-lg'>
              <img
                src={project.img}
                alt=""
                className='w-full h-full object-cover rounded-lg shadow-lg md:w-[300px] cursor-pointer hover:scale-105 transition-all duration-200'
              />
            </div>



            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className="flex space-x-4">
                <a href={project.links.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                  View site
                </a>
                <a href={project.links.github} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                  <AiOutlineGithub /></a>
              </div>
            </div>
          </div>
        </Revial>
      ))}

    </div>
  )
}

export default Portfolio
