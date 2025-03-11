
import React from 'react'
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di"
import Revial from './Revial'

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
      { name: 'Sass', icon: <DiSass className='text-pink-600' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
    ],
  },
  {
    category: 'Fullstack',
    technologies: [
      { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
      { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
      { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
    ],
  },
]

const Skills = () => {


  return (
    <div className='flex flex-col justify-center items-center px-4 text-gray-200 pb-8 md:py-12 max-w-[1000px] mx-auto' id="skills">
      <Revial >
      <h2 className='text-3xl font-bold mb-4 text-center'>Skills</h2>
      <p className="text-center mb-8">I worked on various frontend and fullstack projects.check them  
      <a href="#" className="underline"> there</a></p>

      <div className="flex flex-col gap-6 md:flex-row justify-center items-center  md:space-y-0 md:space-x-8 ">
      {
        skills.map((skill,index)=>(
          <div className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full text-center " key={index} >
            <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
            <div className="flex items-center space-x-2 justify-center">
              {skill.technologies.map((tech,idx)=>(
                <div className='' key={idx}>
                  <span className='text-2xl '>{tech.icon}</span>
                   <span >{tech.name}</span>
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
