import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';

import YouTubeIcon from '../../assets/youtube.png';

import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_xsw9a3s', 'template_6sa4xeu', form.current, {
          publicKey: 'GYaLyAGYNsHhyEY8KryrZ',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name'/>
            <input type='email' className='email' placeholder='Your Email' name='from_email'/>
            <textarea 
            className='msg'
            name='message' rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
                <img src={FacebookIcon} alt='facebook' className='link' />
                <img src={TwitterIcon} alt='twitter' className='link' />
                <img src={YouTubeIcon} alt='youtube' className='link' />
                <img src={InstagramIcon} alt='instagram' className='link' />
            </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
