import React from 'react'
import './plans.css'
import { GiOrangeSlice } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { GiAvocado } from "react-icons/gi";
import { GiCactus } from "react-icons/gi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
const Plans = () => {
  return (
      <div className='our_plans' id='plans'>
        <div className='plans_header'>
         <h1><span className='stroke-text'>choose</span> and <span className='stroke-text'>call</span> </h1>
        </div>
       <div className='plans'>
        <div className="plans_item">
        <span><GiOrangeSlice /></span>
        <span>Orange Blossom Honey</span>
        <span>500 MAD / L </span>
        <div className='plans_detail'>
            <div>
             <span><IoShieldCheckmarkSharp /></span>
            <span>Comes from the nectar of orange blossoms</span>
            </div>
            <div>
            <span><IoShieldCheckmarkSharp /></span>
            <span>Has a light golden color and a sweet</span>
            </div>
            <div>
            <span><IoShieldCheckmarkSharp /></span>
            <span> floral taste</span>
            </div>
            </div>
        <button className='read_more'>Read More </button>
        </div>

        <div className="plans_item">
        <span><FaTree /></span>
        <span>Argan Honey:</span>
        <span>450 MAD / L  </span>
        <div className='plans_detail'>
            <div>
            <span><IoShieldCheckmarkSharp /></span>
            <span> Produced from the nectar of flowers from the argan tree</span>
            </div>
            <div>
            <span><IoShieldCheckmarkSharp /></span>

            <span>Has a unique nutty flavor with hints of caramel</span>
            </div>
            <div>
            <span><IoShieldCheckmarkSharp /></span>

            <span>Argan honey is highly valued for its rich taste</span>
            </div>
            </div>
        <button className='read_more'>Read More </button>
        </div>

        <div className="plans_item">
        <span>< GiAvocado /></span>
        <span>Avocado Honey</span>
        <span>600 MAD / L  </span>
        <div className='plans_detail'>
            <div>
            <span><IoShieldCheckmarkSharp /></span>

            <span>Has a buttery texture and a mild</span>
            </div>
            <div>
            <span><IoShieldCheckmarkSharp /></span>

            <span>Fruity flavor with notes of avocado</span>
            </div>
            <div>
            <span><IoShieldCheckmarkSharp /></span>

            <span>Has a creamy consistency and is typically light in color</span>
            </div>
            </div>
        <button className='read_more'>Read More </button>
        </div>

        <div className="plans_item">
        <span><GiCactus /></span>
        <span>Cactus Honey</span>
        <span>300 MAD / L  </span>
        <div className='plans_detail'>
            <div>
            <span><IoShieldCheckmarkSharp /></span>

            <span>known as prickly pear honey</span>
            </div>
            <div>
            <span><IoShieldCheckmarkSharp /></span>

            <span> Derived from the nectar of cactus flowers</span>
            </div>
            <div>
            <span><IoShieldCheckmarkSharp /></span>

            <span>Loral flavor with a hint of sweetness</span>
            </div>
            </div>
        <button className='read_more'>Read More </button>
        </div>
    </div>
      </div>
    
  )
}

export default Plans
