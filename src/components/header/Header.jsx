import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <h1>Honey...</h1>
      <ul className='header_menu'>
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutUs">AboutUs</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#whyUs">WhyUs</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#contact">ContactUs</a></li>

      </ul>
    </div>
  )
}

export default Header
