import React from 'react';
import './Contact.css';
import Pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import Services from '../Services/Services';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "08960ab7-6f3e-4d53-991f-63dfda92daa9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <>
    <div className='contact'>
    
      <div className='contact-section'>
        <div className='contact-left'>
          <h2>Let&apos;s talk</h2>
          <p className='para'>I am currently avaliable to take on new projets. Feel free to reach out to me for any queries or just to say hi! </p>

          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='mail icon' />
              <p>kunnikarboon@gmail.com</p>
            </div>
            
            <div className='contact-detail'>
              <img src={location_icon} alt='location icon' />
              <p>Stockholm, Sweden</p>
            </div>
            
          </div>
         </div> 
         
        <form onSubmit={onSubmit} className='contact-right'>
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
    <Services />
    </>
  );
}

export default Contact