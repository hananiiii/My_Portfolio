import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import Services from '../components/services'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contract'
import Footer from '../components/footer'
import BackToTopButton from '../components/backtotopbutton'
import Experience from '../components/expreience'
const home = () => {
  return (
   <>
   <Header/>
   <Hero/>
   <About/>
   <Services/>
   <Skills/>
   <Projects/>
   <Experience/>
   <Contact/>
   <Footer/>
   <BackToTopButton/>
   

   </>
  )
}

export default home