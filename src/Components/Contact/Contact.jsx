import React from 'react';
import './Contact.css';
import Pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={Pattern} alt='Pink pattern color' /> 
      </div>

      <div className='contact-section'>
        <div className='contact-left'>
          <h2>Let&apos;s talk</h2>
          <p>I am currently avaliable to take on new projets. Feel free to reach out to me for any queries or just to say hi! </p>

          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='mail icon' />
              <p>kunnikarboon@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='call icon' />
              <p>+46 999 999 9999</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='location icon' />
              <p>Stockholm, Sweden</p>
            </div>

          </div>
         </div> 
        <form className='contact-right'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' name='name' placeholder='Enter your name' required />

          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' name='email' placeholder='Enter your email' required />

          <label htmlFor='message'>Your Message</label>
          <textarea id='message' name='message' placeholder='Enter your message' rows='8' required />

          <button className='contact-submit' type='submit'>Submit</button>

        </form>
      </div>
    </div>
  );
}

export default Contact