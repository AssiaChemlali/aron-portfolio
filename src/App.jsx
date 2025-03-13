import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {


  return (
    <>
    <div class="fixed  -z-10  min-h-screen w-full items-center px-4 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <main className='flex flex-col items-center px-4 md:px-8 lg:px-16 '>
      <Navbar/>
      <Hero/>
      <Skills/> 
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </main>
    </>
  )
}

export default App
