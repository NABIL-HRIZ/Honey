import React, { useRef, useState } from 'react'
import './contactus.css'
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [message, setMessage] = useState('')
  const [messageColor, setMessageColor] = useState('')
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c74j2tk', 'template_h5eztst', form.current, {
        publicKey: 'vAklvnFBES1FKcSlV',
      })
      .then(
        () => {
          form.current.reset();
          setMessage('Your Message Sended ');
          setMessageColor('green');

        },
        (error) => {
          setMessage('Try Again', error.text);
          setMessageColor('red');
        },
      );
  };
  return (
    <div className='contactUs' id='contact'>
      <div className="left_contact">
        <span>WE're   <span className='stroke-text stroke-text-change'>waiting you </span></span>
        <span><span className='stroke-text stroke-text-change'>Contact Us  </span >Now </span>
      </div>
      <div className="right_contact">
        <form ref={form} className='send' onSubmit={sendEmail}>
          <input type="email" name="user_email" id="" placeholder='Enter Your Email ' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Your Message '></textarea>
          <div style={{ fontSize: "20px", fontStyle: 'italic', color: messageColor }}>{message}</div>
          <button >SEND  </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
