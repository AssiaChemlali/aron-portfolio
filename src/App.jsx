import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'

function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Portfolio/>
    </>
  )
}

export default App
