import React, { useState } from 'react'
import './testimonials.css'
import testimonialsData from '../TestImonialsData'
import { BsCaretRightSquareFill } from "react-icons/bs";
import { BsCaretLeftSquareFill } from "react-icons/bs";
const TestImonials = () => {
    const [selected,setSelected]=useState(0)
    const t_length=testimonialsData.length
  return (
    <div className='testimonials' >
        <div className="left-say">
        <span className='stroke-text '>WHAT THEY SAY </span>
            <span>About us </span>
            <span>{testimonialsData[selected].comment}</span>
            <span>-- {testimonialsData[selected].name}--</span>
        </div>
        <div className="right-say">
         <img src={testimonialsData[selected].image} alt=""  width={'300px'}/>
         <div>
         <span><BsCaretLeftSquareFill onClick={()=>{
          selected===0 ? setSelected(t_length - 1 ) : setSelected((prev)=>prev - 1 )
         }} /></span>
         <span><BsCaretRightSquareFill onClick={()=>{
          selected===t_length-1 ? setSelected(0) : setSelected((prev)=>prev + 1)
         }}/></span>
         </div>
        </div>
    </div>
  )
}

export default TestImonials
