import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import Services from '../Services/Services';
import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi

    captchaRef.current.execute();
  };

  useEffect(() => {

    if (token)
      console.log(`hCaptcha Token: ${token}`);

  }, [token]);

  


  return (
    <>
    <div className='contact'>
    
      <div className='contact-section'>
        <div className='contact-left'>
          <h2>Let&apos;s talk</h2>
          <p>I am currently avaliable to take on new projets. Feel free to reach out to me for any queries or just to say hi! </p>

          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='mail icon' />
              <p>kunnikarbcreative@gmail.com</p>
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

          <HCaptcha className='captcha'
        sitekey="2c82124e-ac81-4723-a175-1faab7e98294"
        onLoad={onLoad}
        onVerify={setToken}
        ref={captchaRef}
      />

          <button className='contact-submit' type='submit'>Submit</button>

        </form>
        
      </div>
      
    </div>
    <Services />
    </>
  );
}

export default Contact