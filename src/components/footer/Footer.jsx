import React from 'react'
import './footer.css'
import footer_img from '../../assets/honey_footer.jpg'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer_sections'>
            <div className='footer_img'>
                <img src={footer_img} alt=""  width={"200px"} height={"300px"}/>
            </div>
            <div className='footer_infos'>
                <h1>Honey...</h1>
                <div className='info'>
                <span><FaPhoneAlt /> +212534543653</span>
                <span> <MdEmail /> Honey@gmail.com</span>
                <span><TbLocationFilled /> Rue 12,CASABLANCA</span>
                </div>    
            </div>
            <div className='footer_end'>
                <h1>Fallow Us</h1>
                <div className='social_media'>
                <span><FiFacebook /></span>
                <span><FaInstagram /></span>
                <span><FaWhatsapp /></span>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Footer
