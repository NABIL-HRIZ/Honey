import React from 'react'
import './aboutUs.css'
import honey_1 from '../../assets/honey_1.jpg'
import honey_2 from '../../assets/honey_2.jpg'
import honey_3 from '../../assets/honey_3.jpg'
import honey_4 from '../../assets/honey_4.jpg'

const AboutUs = () => {
  return (
    <div className='AboutUs' id='aboutUs'>
      <div className="left_about">
        <img src={honey_1} alt="" />
        <img src={honey_2} alt="" />
        <img src={honey_3} alt="" />
        <img src={honey_4} alt="" />

      </div>
      <div className="right_about">
        <span>some infos</span>
        <span className='stroke-text'>About us </span>
        <p>your premier destination for high-quality, natural honey products. Established with a passion for beekeeping and a commitment to sustainable practices, we take pride in offering premium honey sourced directly from local apiaries.our mission is to provide customers with the finest natural honey while promoting environmental stewardship and supporting local beekeepers. We strive to deliver products that not only taste delicious but also reflect our dedication to quality, authenticity, and ethical beekeeping practices.</p>

      </div>


    </div>
  )
}

export default AboutUs
