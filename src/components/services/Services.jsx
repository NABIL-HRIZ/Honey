import React from 'react'
import './services.css'
import ServicesItem from '../ServicesItem'
import { FaArrowRight } from "react-icons/fa";
const Services = () => {
  return (
    <div className='services' id='services'>
        <div className='services_header'>
            <span>Explore Our </span>
            <span className='stroke-text'>Services </span>
        </div>
        <div className='services_category'>
         {ServicesItem.map((serviceItem)=>(
            <div className='category'>
                {serviceItem.image}
                <span>{serviceItem.title}</span>
                <span >{serviceItem.description}</span>
                <button className='read_more'><span>Read More <FaArrowRight /></span></button>
            </div>
         ))}

        </div>
        
    </div>
  )
}

export default Services
