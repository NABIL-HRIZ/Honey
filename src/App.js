import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Reasons from './components/reasons/Reasons'
import AboutUs from './components/aboutUs/AboutUs'
import Plans from './components/plans/Plans'
import TestImonials from './components/testimonials/TestImonials'
import ContactUs from './components/contactUs/ContactUs'
import Footer from './components/footer/Footer'
import Raw from './components/raw/Raw'

const App = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Reasons/>
      <Raw />
      <Plans />
      <TestImonials />
      <ContactUs />
      <Footer /> 
      
    </div>
   
  )
}

export default App
