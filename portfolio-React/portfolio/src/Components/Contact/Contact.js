import React, { useRef } from 'react';
import { faker } from '@faker-js/faker';
import emailjs from '@emailjs/browser';
import facebook from './../Asserts/facebook.png';
import insta from './../Asserts/instagram.png';
import adobe from './../Asserts/adobe.png';
import microsoft from './../Asserts/microsoft.png';
import walmart from './../Asserts/walmart.png';
import facebookicon from './../Asserts/facebook-icon.png';
import youtube from './../Asserts/youtube.png';
import twitter from './../Asserts/twitter.png';
import './Contact.css';

const Contact = () => {
  const form = useRef(); 
  const loremTexts = faker.lorem.paragraph(3); 

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g6rawkn', 'template_nj0ngwu', form.current, {
        publicKey: 'XyduK853JbsJr-4xt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("email sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className='contactPage'>
    
      <div id='myclients'>
        <h1 className='ContactPageTitle'>My Clients</h1>
        <p className='clientDesc'>{loremTexts}</p>
        <div className='clientImgs'>
          <img src={walmart} alt='walmart' className='clientImg' />
          <img src={adobe} alt='adobe' className='clientImg' />
          <img src={facebook} alt='facebook' className='clientImg' />
          <img src={microsoft} alt='microsoft' className='clientImg' />
        </div>
      </div>

      
      <div id='contacts'>
        <h1 className='contactTitle'>Contact Me</h1>
        <p className='contact-Desc'>{loremTexts}</p>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='user_name' required />
          <input type='email' className='email' placeholder='Your Email' name='user_email' required />
          <textarea className='msg' name='message' placeholder='Your Message' rows='5' required />
          <button type='submit' className='submitbtn'>Submit</button>
        </form>
        <div className='links'>
          <img src={insta} alt='instagram' className='link' />
          <img src={facebookicon} alt='facebook' className='link' />
          <img src={twitter} alt='twitter' className='link' />
          <img src={youtube} alt='youtube' className='link' />
        </div>
      </div>
    </section>
  );
};

export default Contact;