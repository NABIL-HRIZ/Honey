import React from 'react'
import './raw.css'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
import our_video from '../../assets/OurRawHoney.mp4'
import img from '../../assets/honey_4.jpg'
const Raw = () => {
  return (
    <div className='raw'>
        <div className='raw_left'>
        <video controls width={500} height={400} poster={img}>
        <source src={our_video} type="video/mp4" />
      </video>
        </div>
        <div className="raw_right">
            <h2 className='stroke-text'>Our Honey Is Raw Not Processed</h2>
            <span>we take pride in offering you the purest and most natural honey available. Our raw honey is sourced directly from local beekeepers who maintain ethical and sustainable practices. We understand the importance of providing you with a product that is not only delicious but also wholesome and full of health benefits. Our commitment to quality means that our honey is never processed or heated, preserving all of its natural enzymes, antioxidants, and vitamins. With every spoonful of our raw honey, you can taste the essence of nature itself. Trust in our honey to be a true reflection of the hive, untouched by additives or artificial ingredients. Experience the difference that pure, raw honey can make in your life, and join us in savoring the sweetness of nature's bounty</span>
        </div>
      
    </div>
  )
}

export default Raw
