import React from 'react'
import './reasons.css'
import { FaCheckCircle } from "react-icons/fa";
import { motion } from 'framer-motion'
const Reasons = () => {
    const transition = { type: 'spring', duration: 3 }
    return (
        <div className='reasons' id='whyUs'>
            <div className='reasons_header'>
                <h1>Why <span className='stroke-text '>choose</span> us </h1>
                <div className='reason_header'>
                    <motion.div
                        initial={{ left: "300px" }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: 'tween' }}
                    >

                    </motion.div>
                    <span>The best Honey In Morocco </span>
                </div>
            </div>
            <div className='reasons_items'>
                <div className='reasons_item'>
                    <div className='reasons_description'>
                        <div className='reasons_img'>
                            <span><FaCheckCircle /></span>
                        </div>
                        <div className='reasons-desc_para'>
                            <span>Quality Products</span>
                            <span>Highlight the high quality of your honey or honey-based products, emphasizing factors such as purity, freshness, and natural sourcing.</span>
                        </div>

                    </div>
                </div>

                <div className='reasons_item'>
                    <div className='reasons_description'>
                        <div className='reasons_img'>
                            <span><FaCheckCircle /></span>
                        </div>
                        <div className='reasons-desc_para'>
                            <span>Sustainable Practices</span>
                            <span>Discuss your commitment to sustainable beekeeping and environmentally friendly production methods, appealing to eco-conscious consumers.</span>
                        </div>
                    </div>
                </div>

                <div className='reasons_item'>
                    <div className='reasons_description'>
                        <div className='reasons_img'>
                            <span><FaCheckCircle /></span>
                        </div>
                        <div className='reasons-desc_para'>
                            <span>Locally Sourced</span>
                            <span>Emphasize that your honey is sourced locally, supporting local beekeepers and promoting community sustainability.</span>
                        </div>
                    </div>
                </div>

                <div className='reasons_item'>
                    <div className='reasons_description'>
                        <div className='reasons_img'>
                            <span><FaCheckCircle /></span>
                        </div>
                        <div className='reasons-desc_para'>
                            <span>Health Benefits</span>
                            <span>Highlight the numerous health benefits of consuming natural honey, such as boosting immunity, soothing sore throats, and providing energy.</span>
                        </div>
                    </div>
                </div>

                <div className='reasons_item'>
                    <div className='reasons_description'>
                        <div className='reasons_img'>
                            <span><FaCheckCircle /></span>
                        </div>
                        <div className='reasons-desc_para'>
                            <span>Customer Satisfaction</span>
                            <span>Share testimonials or reviews from satisfied customers who have enjoyed your products and experienced their benefits firsthand.</span>
                        </div>
                    </div>
                </div>


                <div className='reasons_item'>
                    <div className='reasons_description'>
                        <div className='reasons_img'>
                            <span><FaCheckCircle /></span>
                        </div>
                        <div className='reasons-desc_para'>
                            <span>Personalized Service</span>
                            <span>Promise personalized customer service, including assistance with product selection, recipe suggestions, and answering any questions about honey and beekeeping</span>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Reasons
