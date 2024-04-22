import React from 'react'
import './hero.css'
import Header from '../header/Header'
import logo from '../../assets/honey_logo.png'
import img from '../../assets/honey_home.png'
import NumberCounter from 'number-counter'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="left">
       <Header />
        <div className='left_para'>
            <div>
                <span>Nature </span>
                <span  className='stroke-text' >100%</span>
            </div>
            <div>
            <span>DUKE , </span>
            <span>Enjoy</span>
            </div>
            <div>
                <span className='hero_comment'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit sint aliquid, mollitia totam a nemo iste sed assumenda placeat!</span>
            </div>

        </div>


        <div className='figures'>
            <div>
                <span>
                    <NumberCounter end={200} start={150} delay='5' prefix='+'/>
                </span>
                <span>Customers</span>
            </div>
            <div>
                <span>
                    <NumberCounter end={30} start={20} delay='5' prefix='+' />
                </span>
                <span>Natural Ingrediant</span>
            </div>
            <div>
                <span>
                <NumberCounter end={20} start={10} delay='5' prefix='+' />

                </span>
                <span>Stores</span>
            </div>

        </div>


        <div className='left_btns'>
            <button className='btn'> Get Started</button>
            <button className='btn'> Learn More</button>


        </div>

        </div>
        <div className="right">
          <img src={logo} alt="" width={'100px'} className='logo' />
          <div className='right_img'>
            <img src={img} alt="" className='hero_img' />            
          </div>
        </div>
      
    </div>
  )
}

export default Hero
